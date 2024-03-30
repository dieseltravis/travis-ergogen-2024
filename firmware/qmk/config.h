// Copyright 2021 Jay Greco
// Copyright 2022 mohoyt
// Copyright 2024 Travis Hardiman (@dieseltravis)
// SPDX-License-Identifier: GPL-2.0-or-later

#pragma once

#include "config_common.h"

/* Used to set host for remote KB if VUSB detect doesn't work. */
// #define KEYBOARD_HOST // Force host mode
// #define KEYBOARD_REMOTE // Force remote mode

// Workaround for freezing after MacOS sleep
#define NO_USB_STARTUP_CHECK

/* USB Device descriptor parameter */
#define VENDOR_ID       0x6E61
#define PRODUCT_ID      0x6060

#define DEVICE_VER      0x0001
#define MANUFACTURER    travis
#define PRODUCT         ERGO2024

/* key matrix size */
#define MATRIX_ROWS 6
#define MATRIX_COLS 16
#define MATRIX_MUX_COLS 4

//TODO:
#define MATRIX_ROW_PINS { B6, B2, B3, B1, F7 }
#define MATRIX_COL_PINS { }
//TODO:
#define MATRIX_COL_MUX_PINS { D7, E6, B4, B5 }

/* Debounce reduces chatter (unintended double-presses) - set 0 if debouncing is not needed */
#define DEBOUNCE 10

/* define if matrix has ghost (lacks anti-ghosting diodes) */
//#define MATRIX_HAS_GHOST

/* Optional SMT LED pins */
#define BACKLIGHT_PIN B5
#define RGB_DI_PIN E6
#define RGBLED_NUM 10
#define RGBLIGHT_ANIMATIONS
#define RGBLIGHT_SLEEP

/* Optional encoder pins */
//TODO:
#define ENCODERS_PAD_A { B5 }
#define ENCODERS_PAD_B { B4 }
#define ENCODER2_PAD_A { B5 }
#define ENCODER2_PAD_B { B4 }

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
