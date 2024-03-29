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
#include QMK_KEYBOARD_H
#include "travisergogen2024.h"

// Use Bit-C LED to show CAPS LOCK status
/*
bool led_update_kb(led_t led_state) {
    bool res = led_update_user(led_state);
    if (res) {
        set_bitc_LED(led_state.caps_lock ? LED_DIM : LED_OFF);
    }
    return res;
}
*/

//TODO: both encoders
#ifdef ENCODER_ENABLE
bool encoder_update_kb(uint8_t index, bool clockwise) {
    if (!encoder_update_user(index, clockwise)) { return false; }
    if (index == 0) {
        if (clockwise) {
            tap_code(KC_MPRV);
        } else {
            tap_code(KC_MNXT);
        }
    } else if (index == 1) {
        if (clockwise) {
            tap_code_delay(KC_VOLD, 10);
        } else {
            tap_code_delay(KC_VOLU, 10);
        }
    }
    return true;
}
#endif