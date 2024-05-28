// Copyright 2021 Jay Greco
// Copyright 2022 mohoyt
// Copyright 2024 Travis Hardiman (@dieseltravis)
// SPDX-License-Identifier: GPL-2.0-or-later

#pragma once

//#include "config_common.h"

/* Used to set host for remote KB if VUSB detect doesn't work. */
// #define KEYBOARD_HOST // Force host mode
// #define KEYBOARD_REMOTE // Force remote mode

// Workaround for freezing after MacOS sleep
#define NO_USB_STARTUP_CHECK

/* USB Device descriptor parameter */
//#define MANUFACTURER    travis
//#define PRODUCT         ERGO2024

/* key matrix size */
#define MATRIX_ROWS 6
#define MATRIX_COLS 16
#define MATRIX_MUX_COLS 4

//#define ADDRESS_PIN_COUNT 4
//#define SN74X138_ADDRESS_PINS { C6, D4, D0, D1 }
//P5: mux3  # D1 SDA
// lower cols
//#define SN74X138_E2_PIN D1
// upper cols
//#define SN74X138_E3_PIN D1

#define MATRIX_ROW_PINS { F4, F5, F6, F7, B1, B3 }
#define MATRIX_COL_PINS { }
#define MATRIX_COL_MUX_PINS { C6, D4, D0, D1 }
//#define MATRIX_COL_MUX_PINS { D1, D0, D4, C6 }

/* Debounce reduces chatter (unintended double-presses) - set 0 if debouncing is not needed */
//#define DEBOUNCE 10

//#define WS2812_DI_PIN B5
#define WS2812_BYTE_ORDER WS2812_BYTE_ORDER_GRB

/* Optional encoder pins */
#define ENCODERS_PAD_A { E6, B2 }
#define ENCODERS_PAD_B { D7, B6 }
#define ENCODER_RESOLUTIONS { 2, 2 }

/* Mechanical locking support. Use KC_LCAP, KC_LNUM or KC_LSCR instead in keymap */
#define LOCKING_SUPPORT_ENABLE
/* Locking resynchronize hack */
#define LOCKING_RESYNC_ENABLE

/*
 * Feature disable options
 *  These options are also useful to firmware size reduction.
 */

/* disable debug print */
//#define NO_DEBUG

/* disable print */
//#define NO_PRINT

/* disable action features */
//#define NO_ACTION_LAYER
//#define NO_ACTION_TAPPING
//#define NO_ACTION_ONESHOT

/* Bootmagic Lite key configuration
#define BOOTMAGIC_LITE_ROW 0
#define BOOTMAGIC_LITE_COLUMN 0
*/
