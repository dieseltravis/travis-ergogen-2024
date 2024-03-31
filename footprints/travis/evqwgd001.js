// evqwgd001
// Panasonic EVQWGD001 horizontal rotary encoder
//
//   __________________
//  (f) (t)         | |
//  | (1)           | |
//  | (2)           | |
//  | (3)           | |
//  | (4)           | |
//  |_( )___________|_|
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary, should be GND)
//    C: corresponds to pin 3 (for rotary)
//    D: corresponds to pin 4 (for rotary, unused)
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//
// Travis additions:
// * 3d model from https://grabcad.com/library/panasonic-evqwgd001-encoder-1
// * ref fixed
// * ref & val positioning
module.exports = {
    params: {
      designator: 'SCR',
      reverse: false,
      value: 'RollerEncoder_Panasonic_EVQWGD001',
      refpos: [0, 0],
      valpos: [-0.1, 9],
      from: {type: 'net', value: undefined},
      to: {type: 'net', value: undefined},
      A: {type: 'net', value: undefined},
      B: {type: 'net', value: 'GND'},
      C: {type: 'net', value: undefined},
      D: {type: 'net', value: ''},
      TRAVIS_KICAD: '${TRAVIS_KICAD}' // ~/Projects/travis-ergogen-2024/footprints/travis
    },
    body: p => {
      const pos = (arr) => arr.join(' ');
      if (p.refpos.length === 2) {
        p.refpos.push(p.r);
      }
      if (p.valpos.length === 2) {
        p.valpos.push(p.r);
      }

      const standard = `
        (module "travis:evqwgd001" (layer F.Cu)
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_text reference "${p.ref}" (at ${pos(p.refpos)}) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value "${p.value}" (at ${pos(p.valpos)}) (layer F.Fab) hide
            (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        
        ${'' /* corner marks */}
        (fp_line (start -8.4 -6.4) (end 8.4 -6.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 8.4 -6.4) (end 8.4 7.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 8.4 7.4) (end -8.4 7.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -8.4 7.4) (end -8.4 -6.4) (layer Dwgs.User) (width 0.12))
      `
      function pins(def_neg, def_pos) {
        return `
          ${'' /* edge cuts */}
          (fp_line (start ${def_pos}9.8 7.3) (end ${def_pos}9.8 -6.3) (layer Edge.Cuts) (width 0.15))
          (fp_line (start ${def_pos}7.4 -6.3) (end ${def_pos}7.4 7.3) (layer Edge.Cuts) (width 0.15))
          (fp_line (start ${def_pos}9.5 -6.6) (end ${def_pos}7.7 -6.6) (layer Edge.Cuts) (width 0.15))
          (fp_line (start ${def_pos}7.7 7.6) (end ${def_pos}9.5 7.6) (layer Edge.Cuts) (width 0.15))
          (fp_arc (start ${def_pos}7.7 7.3) (end ${def_pos}7.4 7.3) (angle ${def_neg}90) (layer Edge.Cuts) (width 0.15))
          (fp_arc (start ${def_pos}9.5 7.3) (end ${def_pos}9.5 7.6) (angle ${def_neg}90) (layer Edge.Cuts) (width 0.15))
          (fp_arc (start ${def_pos}7.7 -6.3) (end ${def_pos}7.7 -6.6) (angle ${def_neg}90) (layer Edge.Cuts) (width 0.15))
          (fp_arc (start ${def_pos}9.5 -6.3) (end ${def_pos}9.8 -6.3) (angle ${def_neg}90) (layer Edge.Cuts) (width 0.15))

          ${'' /* pins */}
          (pad S1 thru_hole circle (at ${def_neg}6.85 -6.2 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.from.str})
          (pad S2 thru_hole circle (at ${def_neg}5 -6.2 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.to.str})
          (pad A thru_hole circle (at ${def_neg}5.625 -3.81 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.A.str})
          (pad B thru_hole circle (at ${def_neg}5.625 -1.27 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.B.str})
          (pad C thru_hole circle (at ${def_neg}5.625 1.27 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.C.str})
          (pad D thru_hole circle (at ${def_neg}5.625 3.81 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.D.str})

          ${'' /* stabilizer */}
          (pad "" np_thru_hole circle (at ${def_neg}5.625 6.3 ${p.r}) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        `
    }
    const model = `(model "${p.TRAVIS_KICAD}/evqwgd001.step"
    (offset (xyz 8.5 -7.4 -3.5))
    (scale (xyz 1 1 1))
    (rotate (xyz 0 0 -90))
  )`;
    if(p.reverse) {
      return `
        ${standard}
        ${pins('-', '')}
        ${pins('', '-')}
        ${model}
)`;
    } else {
      return `
        ${standard}
        ${pins('-', '')}
        ${model}
)`;
    }
  }
}