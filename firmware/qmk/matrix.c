/* Copyright 2021 Jay Greco
 * Copyright 2022 mohoyt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
#include "quantum.h"
#include "sn74x138.h"

#define COL_SHIFTER ((uint32_t)1)

// Column pins
static const pin_t row_pins[MATRIX_ROWS] = MATRIX_ROW_PINS;
static const pin_t col_pins[MATRIX_MUX_COLS] = MATRIX_COL_MUX_PINS;
// map pins on mux to match actual columns
static const pin_t col_map[MATRIX_COLS] = { 7,  6,  5,  4,  3,  2, 1, 0, 
                                           15, 14, 13, 12, 11, 10, 9, 8 };
// map columns to value from pin?
static const pin_t map_col[MATRIX_COLS] = { 7,  6,  5,  4,  3,  2, 1, 0, 
                                           15, 14, 13, 12, 11, 10, 9, 8 };

// Internal functions

static void unselect_cols(void) {
    // Native
    for (uint8_t x = 0; x < MATRIX_COLS; x++) {
        if (col_pins[x] != NO_PIN) {
            setPinOutput(col_pins[x]);
            writePinHigh(col_pins[x]);
        }
    }

    // Demultiplexer
    sn74x138_set_enabled(false);
}

static void init_pins(void) {
    unselect_cols();
    for (uint8_t x = 0; x < MATRIX_ROWS; x++) {
        setPinInputHigh(row_pins[x]);
    }
}

static void select_col(pin_t col)
{
    if (col_pins[col] != NO_PIN) {
        writePinLow(col_pins[col]);
    } else {
        sn74x138_set_addr(col_map[col]);
        sn74x138_set_enabled(true);
    }
}

static bool read_rows_on_col(matrix_row_t current_matrix[], pin_t current_col)
{
    bool matrix_changed = false;
    select_col(current_col);
    wait_us(5);

    // Read each row sequentially
    for(pin_t row_index = 0; row_index < MATRIX_ROWS; row_index++)
    {
        matrix_row_t last_row_value = current_matrix[row_index];

        if (!readPin(row_pins[row_index]))
        {
            current_matrix[row_index] |= (COL_SHIFTER << current_col);
        }
        else
        {
            current_matrix[row_index] &= ~(COL_SHIFTER << current_col);
        }

        if ((last_row_value != current_matrix[row_index]) && !(matrix_changed))
        {
            matrix_changed = true;
        }
    }

    return matrix_changed;
}

// Matrix scan functions

void matrix_init_custom(void) {
    sn74x138_init();
    init_pins();
}

bool matrix_scan_custom(matrix_row_t current_matrix[]) {
    bool changed = false;

    // Set col, read rows
    for (pin_t current_col = 0; current_col < MATRIX_COLS; current_col++) {
        // shift columns to match wiring
        pin_t new_col = col_map[current_col];
        changed |= read_rows_on_col(current_matrix, new_col);
    }

    return (pin_t)changed;
}
