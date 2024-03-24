// SWPUSH6H43
// tactile push button, 6x6mm e.g. PHAP33xx series, height=4.3mm
// https://www.omron.com/ecb/products/pdf/en-b3f.pdf
module.exports = {
    params: {
        designator: 'SW',
        side: 'F',
        P1: { type: 'net', value: 'GND' },
        P2: { type: 'net', value: 'RST' },
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module "travis:SW_PUSH_6mm_H4.3mm" (layer ${p.side}.Cu) (tedit 5A02FE31)
    (descr "tactile push button, 6x6mm e.g. PHAP33xx series, height=4.3mm")
    (tags "tact sw push 6mm")
    ${p.at /* parametric position */}

    (fp_text reference "${p.ref}" (at 3.25 -2) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value SW_PUSH_6mm_H4.3mm (at 3.75 6.7) (layer ${p.side}.Fab) hide
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user %R (at 3.25 2.25) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_line (start 3.25 -0.75) (end 6.25 -0.75) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 6.25 -0.75) (end 6.25 5.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 6.25 5.25) (end 0.25 5.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 0.25 5.25) (end 0.25 -0.75) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 0.25 -0.75) (end 3.25 -0.75) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 7.75 6) (end 8 6) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 8 6) (end 8 5.75) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 7.75 -1.5) (end 8 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 8 -1.5) (end 8 -1.25) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.5 -1.25) (end -1.5 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.5 -1.5) (end -1.25 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.5 5.75) (end -1.5 6) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.5 6) (end -1.25 6) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.25 -1.5) (end 7.75 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.5 5.75) (end -1.5 -1.25) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 7.75 6) (end -1.25 6) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 8 -1.25) (end 8 5.75) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 1 5.5) (end 5.5 5.5) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -0.25 1.5) (end -0.25 3) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 5.5 -1) (end 1 -1) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 6.75 3) (end 6.75 1.5) (layer ${p.side}.SilkS) (width 0.12))
    (fp_circle (center 3.25 2.25) (end 1.25 2.5) (layer ${p.side}.Fab) (width 0.1))
    (pad 2 thru_hole circle (at 0 4.5 90) (size 2 2) (drill 1.1) (layers *.Cu *.Mask)  ${p.P2.str})
    (pad 1 thru_hole circle (at 0 0 90) (size 2 2) (drill 1.1) (layers *.Cu *.Mask)  ${p.P1.str})
    (pad 2 thru_hole circle (at 6.5 4.5 90) (size 2 2) (drill 1.1) (layers *.Cu *.Mask) ${p.P2.str})
    (pad 1 thru_hole circle (at 6.5 0 90) (size 2 2) (drill 1.1) (layers *.Cu *.Mask)  ${p.P1.str})
    (model ${p.KISYS3DMOD}/Button_Switch_THT.3dshapes/SW_PUSH_6mm_H4.3mm.wrl
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )
  `
};