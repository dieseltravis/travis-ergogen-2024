// Copyright 2021 Jay Greco
// Copyright 2022 mohoyt
// Copyright 2022 QMK (James Young @noroadsleft)
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {

/* Wired Layout:
*    0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
*  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐   ┌───┬───┬───┬───┬───┐
*0 │Esc│En1│F1 │F2 │F3 │F4 │F5 │F6 │F7 │F8 │   │F9 │F10│F11│Brk│PSc│
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
*1 │`~ │1! │2@ │3# │4$ │5% │6^ │7& │8* │(9 │0) │-_ │=+ │Bks│Del│ScL│
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
*2 │Tab│ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │[{ │]} │\| │PUp│End│
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
*3 │Cap│ A │ S │ D │ F │ G │ H │ J │ K │ L │;: │'" │Ent│F12│Hom│PDn│
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┴───┼───┼───┤
*4 │Sft│ Z │ X │ C │ V │ B │ N │ M │,< │.> │/? │Sft│       │Up │Rgt│
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤       ├───┼───┤
*5 │Ctl│Fn │OS │Alt│En2│Spc|Spc│   │Alt│Os │Mnu│Ctl│       │Lft│Dwn│
*  └───┴───┴───┴───┴───┴───┴───┘   └───┴───┴───┴───┘       └───┴───┘
*
* Physical Layout:
*  ┌───┐   ┌───┬───┬───┬───┐   ┌───┬───┬───┬───┐   ┌───┬───┬───┬───┐┌───┬───┐
*  │Esc│   │F1 │F2 │F3 │F4 │   │F5 │F6 │F7 │F8 │   │F9 │F10│F11│F12││Brk│PSc│
*  ├───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───┼───┴┬──┘├───┼───┤
*  │ ` │ 1 │ 2 │ 3 │ 4 │ 5 │   │ 6 │ 7 │ 8 │ 9 │ 0 │ - │ = │Bksp│   │Del│ScL│
* ┌┴───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───┼───┬┘   └───┴───┘
* │Tab │ Q │ W │ E │ R │ T │En1│ Y │ U │ I │ O │ P │ [ │ ] │ \ │       ^
* ├────┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───┴┬──┘    ╱ PUp ╲
* │Caps│ A │ S │ D │ F │ G │   │ H │ J │ K │ L │;: │'" │Entr│     <Home╳ End>
* ├────┼───┼───┼───┼───┼───┤En2├───┼───┼───┼───┼───┼───┴┬───┘   ^   ╲ PDn ╱
* │Shft│ Z │ X │ C │ V │ B │   │ N │ M │,< │.> │/? │Shft│    ╱ Up  ╲   V
* └┬───┼───┼───┼───┼───┴───┴┐ ┌┴───┴───┼───┼───┼───┼───┬┘  <Left╳ Rgt>
*  │Ctl│Fn │OS │Alt│ Space  │ │  Space │Alt│Os │Mnu│Ctl│     ╲ Dwn ╱
*  └───┴───┴───┴───┴────────┘ └────────┴───┴───┴───┴───┘        V
*/
  [0] = LAYOUT_base(
//   0        1        2        3        4        5        6        7        8        9        10       11       12       13       14       15
/*0*/KC_ESC,  KC_BTN3, KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   KC_F6,   KC_F7,   KC_F8,            KC_F9,   KC_F10,  KC_F11,  KC_PAUS, KC_PSCR,
/*1*/KC_GRV,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_MINS, KC_EQL,  KC_BSPC, KC_DEL,  KC_LSCR,
/*2*/KC_TAB,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_LBRC, KC_RBRC, KC_BSLS, KC_PGUP, KC_END,
/*3*/KC_CAPS, KC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_H,    KC_J,    KC_K,    KC_L,    KC_SCLN, KC_QUOT, KC_ENT,  KC_F12,  KC_HOME, KC_PGDN,
/*4*/KC_LSFT, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_RSFT,                   KC_UP,   KC_RGHT,
/*5*/KC_LCTL, MO(1),   KC_LGUI, KC_LALT, KC_MUTE, KC_SPC,  KC_SPC,           KC_RALT, KC_RGUI, KC_APP,  KC_RCTL,                   KC_LEFT, KC_DOWN
  ),

/* Wired Layout, alternate Layer:
*    0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
*  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐   ┌───┬───┬───┬───┬───┐
*  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │
*RGB───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
*Modes:│Pln│Bth│Rnb│Swl│Snk│Kni│Xms│Grd│Tst│   │   │   │   │Ins│   │
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
*  │   │Md+│Hu+│Sa+│Va+│Sp+│   │   │   │   │   │   │   │   │   │   │
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
*  │   │Md-│Hu-│Sa-│Va-│Sp-│   │   │   │   │   │   │   │   │   │   │
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┴───┼───┼───┤
*  │   │Tog│   │   │   │   │   │   │   │   │   │   │       │   │   │
*  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤       ├───┼───┤
*  │   │   │   │   │   │   |   │   │   │   │   │   │       │   │   │
*  └───┴───┴───┴───┴───┴───┴───┘   └───┴───┴───┴───┘       └───┴───┘
*/
  [1] = LAYOUT_base(
/*0*/KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,          KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
/*1*/KC_TRNS, RGB_M_P, RGB_M_B, RGB_M_R, RGB_M_SW,RGB_M_SN,RGB_M_K, RGB_M_X, RGB_M_G, RGB_M_T, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_INS,  KC_TRNS,
/*2*/KC_TRNS, RGB_MOD, RGB_HUI, RGB_SAI, RGB_VAI, RGB_SPI, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
/*3*/KC_TRNS, RGB_RMOD,RGB_HUD, RGB_SAD, RGB_VAD, RGB_SPD, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
/*4*/KC_TRNS, RGB_TOG, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                   KC_TRNS, KC_TRNS,
/*5*/KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,          KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,                   KC_TRNS, KC_TRNS
  )
};

// RGB config, for changing RGB settings on non-VIA firmwares

void change_RGB(bool clockwise) {
    bool shift = get_mods() & MOD_MASK_SHIFT;
    bool alt = get_mods() & MOD_MASK_ALT;
    bool ctrl = get_mods() & MOD_MASK_CTRL;

    if (clockwise) {
        if (alt) {
            rgblight_increase_hue();
        } else if (ctrl) {
            rgblight_increase_val();
        } else if (shift) {
            rgblight_increase_sat();
        } else {
            rgblight_step();
        }

  } else {
      if (alt) {
            rgblight_decrease_hue();
        } else if (ctrl) {
            rgblight_decrease_val();
        } else if (shift) {
            rgblight_decrease_sat();
        } else {
            rgblight_step_reverse();
        }
    }
}

bool encoder_update_user(uint8_t index, bool clockwise) {
  if (layer_state_is(1)) {
    //change RGB settings
    change_RGB(clockwise);
  }
  else {
    if (clockwise) {
      tap_code(KC_VOLU);
  } else {
      tap_code(KC_VOLD);
    }
  }
    return true;
}

/*
void matrix_init_user(void) {
  // Initialize remote keyboard, if connected (see readme)
  matrix_init_remote_kb();
}

void matrix_scan_user(void) {
  // Scan and parse keystrokes from remote keyboard, if connected (see readme)
  matrix_scan_remote_kb();
}
*/
