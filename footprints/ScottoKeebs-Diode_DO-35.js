// ScottoKeebs-Diode_DO-35
// Diode, DO-35_SOD27 series, Axial, Horizontal, pin pitch=7.62mm, length*diameter=4*2mm^2
// http://www.diodes.com/_files/packages/DO-35.pdf
module.exports = {
    params: {
        designator: 'D',
        side: 'F',
        from: undefined,
        to: undefined,
        SCOTTOKEEBS_KICAD: '${SCOTTOKEEBS_KICAD}'
    },
    body: p => `
    (module "Diode_DO-35" (layer "${p.side}.Cu")
    (descr "Diode, DO-35_SOD27 series, Axial, Horizontal, pin pitch=7.62mm, , length*diameter=4*2mm^2, , http://www.diodes.com/_files/packages/DO-35.pdf")
    (tags "Diode DO-35_SOD27 series Axial Horizontal pin pitch 7.62mm  length 4mm diameter 2mm")
    ${p.at /* parametric position */}

    ${'' /* (attr through_hole) */}
    (fp_text reference "${p.ref}" (at 3.81 -2.12) (layer "${p.side}.SilkS") ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "1N4148" (at 3.81 2.12) (layer "${p.side}.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user "K" (at 0 -1.8) (layer "${p.side}.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user "K" (at 0 -1.8) (layer "${p.side}.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user "${p.REFERENCE}" (at 4.11 0) (layer "${p.side}.Fab") hide
      (effects (font (size 0.8 0.8) (thickness 0.12)))
    )

    (fp_line (start 1.04 0) (end 1.69 0)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 1.69 -1.12) (end 1.69 1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 1.69 1.12) (end 5.93 1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 2.29 -1.12) (end 2.29 1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 2.41 -1.12) (end 2.41 1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 2.53 -1.12) (end 2.53 1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 5.93 -1.12) (end 1.69 -1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 5.93 1.12) (end 5.93 -1.12)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )
    (fp_line (start 6.58 0) (end 5.93 0)
      (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") )

    (fp_line (start -1.05 -1.25) (end -1.05 1.25)
      (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") )
    (fp_line (start -1.05 1.25) (end 8.67 1.25)
      (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") )
    (fp_line (start 8.67 -1.25) (end -1.05 -1.25)
      (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") )
    (fp_line (start 8.67 1.25) (end 8.67 -1.25)
      (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") )

    (fp_line (start 0 0) (end 1.81 0)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 1.81 -1) (end 1.81 1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 1.81 1) (end 5.81 1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 2.31 -1) (end 2.31 1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 2.41 -1) (end 2.41 1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 2.51 -1) (end 2.51 1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 5.81 -1) (end 1.81 -1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 5.81 1) (end 5.81 -1)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    (fp_line (start 7.62 0) (end 5.81 0)
      (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") )
    
    (pad 1 thru_hole rect (at 0 0) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") ${ p.to })
    (pad 2 thru_hole oval (at 7.62 0) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") ${ p.from })

    (model "${p.SCOTTOKEEBS_KICAD}/3dmodels/ScottoKeebs_Components.3dshapes/Diode_DO-35.step"
      (offset (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};