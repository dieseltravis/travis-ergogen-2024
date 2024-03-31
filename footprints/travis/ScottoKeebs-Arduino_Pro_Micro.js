// ScottoKeebs-Arduino_Pro_Micro
// https://github.com/joe-scotto/scottokeebs/blob/main/Extras/ScottoKicad/footprints/ScottoKeebs_MCU.pretty/Arduino_Pro_Micro.kicad_mod
module.exports = {
    params: {
        designator: 'MCU',
        value: 'Arduino_Pro_Micro',
        // only F for now: side: 'F',
        refpos: [0, 1.625],
        valpos: [0, 0],
        // this footprint is different from Ergogen promicro
        // pads are mapped to promicro pin AVR names by default
        // Left (top to bottom):            // alt pin names:
        P1: {type: 'net', value: 'D3'},     // TXO  1 21
        P2: {type: 'net', value: 'D2'},     // RXI  0 20
        P3: {type: 'net', value: 'GND'},
        P4: {type: 'net', value: 'GND'},
        P5: {type: 'net', value: 'D1'},     //      2 19 SDA
        P6: {type: 'net', value: 'D0'},     //      3 18 SCL PWM
        P7: {type: 'net', value: 'D4'},     //  A6  4 25
        P8: {type: 'net', value: 'C6'},     //      5 31 PWM
        P9: {type: 'net', value: 'D7'},     //  A7  6 27 PWM
        P10: {type: 'net', value: 'E6'},    //      7  1
        P11: {type: 'net', value: 'B4'},    //  A8  8 28
        P12: {type: 'net', value: 'B5'},    //  A9  9 29 PWM
        // Right (bottom to top):
        P13: {type: 'net', value: 'B6'},    // A10 10 30 PWM
        P14: {type: 'net', value: 'B2'},    //     16 10 MOSI
        P15: {type: 'net', value: 'B3'},    //     14 11 MISO
        P16: {type: 'net', value: 'B1'},    //     15 16 SCLK
        P17: {type: 'net', value: 'F7'},    //  A0 18 36
        P18: {type: 'net', value: 'F6'},    //  A1 19 37
        P19: {type: 'net', value: 'F5'},    //  A2 20 38
        P20: {type: 'net', value: 'F4'},    //  A3 21 39
        P21: {type: 'net', value: 'VCC'},
        P22: {type: 'net', value: 'RST'},   //        13
        P23: {type: 'net', value: 'GND'},
        P24: {type: 'net', value: 'RAW'},
        SCOTTOKEEBS_KICAD: '${SCOTTOKEEBS_KICAD}'
    },
    body: p => {
        const pos = (arr) => arr.join(' ');
        if (p.refpos.length === 2) {
          p.refpos.push(p.r);
        }
        if (p.valpos.length === 2) {
          p.valpos.push(p.r);
        }
        return `
    (module "Arduino_Pro_Micro"
    (layer "F.Cu")
    ${p.at /* parametric position */}

    (attr through_hole)
    (fp_text reference "${p.ref}" (at ${pos(p.refpos)}) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "${p.value}" (at ${pos(p.valpos)}) (layer "F.Fab") hide
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )

    (fp_text user "D3" (at -5.461 -13.97) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "D3" (at -5.461 -13.97) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "D2" (at -5.461 -11.43) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "D2" (at -5.461 -11.43) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "GND" (at -5.461 -8.89) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at -5.461 -8.89) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "GND" (at -5.461 -6.35) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at -5.461 -6.35) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "D1" (at -5.461 -3.81) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "D1" (at -5.461 -3.81) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "D0" (at -5.461 -1.27) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "D0" (at -5.461 -1.27) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "D4" (at -5.461 1.27) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "D4" (at -5.461 1.27) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "C6" (at -5.461 3.81) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "C6" (at -5.461 3.81) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "D7" (at -5.461 6.35) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "D7" (at -5.461 6.35) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "E6" (at -5.461 8.89) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "E6" (at -5.461 8.89) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "B4" (at -5.461 11.43) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "B4" (at -5.461 11.43) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "B5" (at -5.461 13.97) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "B5" (at -5.461 13.97) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )

    (fp_text user "RAW" (at 5.461 -13.97) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "RAW" (at 5.461 -13.97) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "GND" (at 5.461 -11.43) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at 5.461 -11.43) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "RST" (at 5.461 -8.89) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "RST" (at 5.461 -8.89) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "VCC" (at 5.461 -6.35) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "VCC" (at 5.461 -6.35) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "F4" (at 5.461 -3.81) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "F4" (at 5.461 -3.81) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "F5" (at 5.461 -1.27) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "F5" (at 5.461 -1.27) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "F6" (at 5.461 1.27) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "F6" (at 5.461 1.27) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "F7" (at 5.461 3.81) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "F7" (at 5.461 3.81) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "B1" (at 5.461 6.35) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "B1" (at 5.461 6.35) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "B3" (at 5.461 8.89) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "B3" (at 5.461 8.89) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "B2" (at 5.461 11.43) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "B2" (at 5.461 11.43) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )
    (fp_text user "B6" (at 5.461 13.97) (layer "F.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "B6" (at 5.461 13.97) (layer "B.SilkS")
        (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
    )

    (fp_line (start -8.89 -17.78) (end -8.89 15.24)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_line (start -8.89 15.24) (end 8.89 15.24)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_line (start -6.35 -15.24) (end -8.89 -15.24)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_line (start -6.35 -15.24) (end -6.35 -12.7)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_line (start -6.35 -12.7) (end -8.89 -12.7)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_line (start 8.89 -17.78) (end -8.89 -17.78)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_line (start 8.89 15.24) (end 8.89 -17.78)
      (stroke (width 0.2) (type solid)) (layer "B.SilkS"))
    (fp_poly
      (pts
        (xy 5.844635 -9.35097)
        (xy 5.844635 -9.25097)
        (xy 6.344635 -9.25097)
        (xy 6.344635 -9.35097)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "B.SilkS"))
    (fp_poly
      (pts
        (xy 5.844635 -9.35097)
        (xy 5.844635 -9.05097)
        (xy 5.944635 -9.05097)
        (xy 5.944635 -9.35097)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "B.SilkS"))
    (fp_poly
      (pts
        (xy 5.844635 -8.75097)
        (xy 5.844635 -8.55097)
        (xy 5.944635 -8.55097)
        (xy 5.944635 -8.75097)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "B.SilkS"))
    (fp_poly
      (pts
        (xy 6.044635 -8.95097)
        (xy 6.044635 -8.85097)
        (xy 6.144635 -8.85097)
        (xy 6.144635 -8.95097)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "B.SilkS"))
    (fp_poly
      (pts
        (xy 6.244635 -9.35097)
        (xy 6.244635 -8.55097)
        (xy 6.344635 -8.55097)
        (xy 6.344635 -9.35097)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "B.SilkS"))
    (fp_line (start -8.89 -17.78) (end -8.89 15.24)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_line (start -8.89 15.24) (end 8.89 15.24)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_line (start -6.35 -15.24) (end -8.89 -15.24)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_line (start -6.35 -15.24) (end -6.35 -12.7)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_line (start -6.35 -12.7) (end -8.89 -12.7)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_line (start 8.89 -17.78) (end -8.89 -17.78)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_line (start 8.89 15.24) (end 8.89 -17.78)
      (stroke (width 0.2) (type solid)) (layer "F.SilkS"))
    (fp_poly
      (pts
        (xy 4.531568 -9.36064)
        (xy 4.531568 -8.56064)
        (xy 4.431568 -8.56064)
        (xy 4.431568 -9.36064)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "F.SilkS"))
    (fp_poly
      (pts
        (xy 4.731568 -8.96064)
        (xy 4.731568 -8.86064)
        (xy 4.631568 -8.86064)
        (xy 4.631568 -8.96064)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "F.SilkS"))
    (fp_poly
      (pts
        (xy 4.931568 -9.36064)
        (xy 4.931568 -9.26064)
        (xy 4.431568 -9.26064)
        (xy 4.431568 -9.36064)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "F.SilkS"))
    (fp_poly
      (pts
        (xy 4.931568 -9.36064)
        (xy 4.931568 -9.06064)
        (xy 4.831568 -9.06064)
        (xy 4.831568 -9.36064)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "F.SilkS"))
    (fp_poly
      (pts
        (xy 4.931568 -8.76064)
        (xy 4.931568 -8.56064)
        (xy 4.831568 -8.56064)
        (xy 4.831568 -8.76064)
      )
      (stroke (width 0.15) (type solid)) (fill solid) (layer "F.SilkS"))
    (fp_line (start -3.683 -19.31) (end 3.683 -19.31)
      (stroke (width 0.2) (type solid)) (layer "Dwgs.User"))
    (fp_line (start -3.683 -14.23) (end -3.683 -19.31)
      (stroke (width 0.2) (type solid)) (layer "Dwgs.User"))
    (fp_line (start 3.683 -19.31) (end 3.683 -14.23)
      (stroke (width 0.2) (type solid)) (layer "Dwgs.User"))
    (fp_line (start 3.683 -14.23) (end -3.683 -14.23)
      (stroke (width 0.2) (type solid)) (layer "Dwgs.User"))

    (pad "1" thru_hole rect (at -7.62 -13.97 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P1.str })
    (pad "2" thru_hole circle (at -7.62 -11.43 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P2.str })
    (pad "3" thru_hole circle (at -7.62 -8.89 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P3.str })
    (pad "4" thru_hole circle (at -7.62 -6.35 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P4.str })
    (pad "5" thru_hole circle (at -7.62 -3.81 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P5.str })
    (pad "6" thru_hole circle (at -7.62 -1.27 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P6.str })
    (pad "7" thru_hole circle (at -7.62 1.27 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P7.str })
    (pad "8" thru_hole circle (at -7.62 3.81 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P8.str })
    (pad "9" thru_hole circle (at -7.62 6.35 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P9.str })
    (pad "10" thru_hole circle (at -7.62 8.89 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P10.str })
    (pad "11" thru_hole circle (at -7.62 11.43 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P11.str })
    (pad "12" thru_hole circle (at -7.62 13.97 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P12.str })
    (pad "13" thru_hole circle (at 7.62 13.97 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P13.str })
    (pad "14" thru_hole circle (at 7.62 11.43 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P14.str })
    (pad "15" thru_hole circle (at 7.62 8.89 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P15.str })
    (pad "16" thru_hole circle (at 7.62 6.35 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P16.str })
    (pad "17" thru_hole circle (at 7.62 3.81 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P17.str })
    (pad "18" thru_hole circle (at 7.62 1.27 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P18.str })
    (pad "19" thru_hole circle (at 7.62 -1.27 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P19.str })
    (pad "20" thru_hole circle (at 7.62 -3.81 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P20.str })
    (pad "21" thru_hole circle (at 7.62 -6.35 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P21.str })
    (pad "22" thru_hole circle (at 7.62 -8.89 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P22.str })
    (pad "23" thru_hole circle (at 7.62 -11.43 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P23.str })
    (pad "24" thru_hole circle (at 7.62 -13.97 270) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.SilkS" "*.Mask") ${ p.P24.str })
    (model "${p.SCOTTOKEEBS_KICAD}/3dmodels/ScottoKeebs_MCU.3dshapes/Arduino_Pro_Micro.step"
      (offset (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 90))
    )
  )`;
  }
};