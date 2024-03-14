// RAxialL6D25P10H
// Resistor, Axial_DIN0207 series, Axial, Horizontal, pin pitch=10.16mm, 0.25W = 1/4W, length*diameter=6.3*2.5mm^2
// http://cdn-reichelt.de/documents/datenblatt/B400/1_4W%23YAG.pdf
module.exports = {
    params: {
        designator: 'R',
        side: 'F',
        from: undefined,
        to: undefined,
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal (layer ${p.side}.Cu) (tedit 5AE5139B)
    (descr "Resistor, Axial_DIN0207 series, Axial, Horizontal, pin pitch=10.16mm, 0.25W = 1/4W, length*diameter=6.3*2.5mm^2, http://cdn-reichelt.de/documents/datenblatt/B400/1_4W%23YAG.pdf")
    (tags "Resistor Axial_DIN0207 series Axial Horizontal pin pitch 10.16mm 0.25W = 1/4W length 6.3mm diameter 2.5mm")
    ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at 5.08 -2.37) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
${'' /*
    (fp_text value R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal (at 5.08 2.37) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
*/}
    (fp_line (start 1.93 -1.25) (end 1.93 1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 1.93 1.25) (end 8.23 1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 8.23 1.25) (end 8.23 -1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 8.23 -1.25) (end 1.93 -1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 0 0) (end 1.93 0) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 10.16 0) (end 8.23 0) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 1.81 -1.37) (end 1.81 1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 1.81 1.37) (end 8.35 1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 8.35 1.37) (end 8.35 -1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 8.35 -1.37) (end 1.81 -1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 1.04 0) (end 1.81 0) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 9.12 0) (end 8.35 0) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.05 -1.5) (end -1.05 1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.05 1.5) (end 11.21 1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 11.21 1.5) (end 11.21 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 11.21 -1.5) (end -1.05 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (pad 1 thru_hole circle (at 0 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.from})
    (pad 2 thru_hole oval (at 10.16 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.to})
    (fp_text user %R (at 5.08 0) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (model ${p.KISYS3DMOD}/Resistor_THT.3dshapes/R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal.wrl
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};