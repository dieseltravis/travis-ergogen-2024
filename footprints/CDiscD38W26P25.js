// CDiscD38W26P25
// C, Disc series, Radial, pin pitch=2.50mm, diameter*width=3.8*2.6mm^2, Capacitor
// http://www.vishay.com/docs/45233/krseries.pdf
module.exports = {
    params: {
        designator: 'C',
        side: 'F',
        P1: undefined,
        P2: undefined,
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module C_Disc_D3.8mm_W2.6mm_P2.50mm (layer ${p.side}.Cu) (tedit 5AE50EF0)
    (descr "C, Disc series, Radial, pin pitch=2.50mm, , diameter*width=3.8*2.6mm^2, Capacitor, http://www.vishay.com/docs/45233/krseries.pdf")
    (tags "C Disc series Radial pin pitch 2.50mm  diameter 3.8mm width 2.6mm Capacitor")
    ${p.at /* parametric position */}

    (fp_text reference "${p.ref}" (at 1.25 -2.55) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
${'' /*
    (fp_text value C_Disc_D3.8mm_W2.6mm_P2.50mm (at 1.25 2.55) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
*/}
    (fp_line (start -0.65 -1.3) (end -0.65 1.3) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start -0.65 1.3) (end 3.15 1.3) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 3.15 1.3) (end 3.15 -1.3) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 3.15 -1.3) (end -0.65 -1.3) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start -0.77 -1.42) (end 3.27 -1.42) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -0.77 1.42) (end 3.27 1.42) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -0.77 -1.42) (end -0.77 -0.795) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -0.77 0.795) (end -0.77 1.42) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 3.27 -1.42) (end 3.27 -0.795) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 3.27 0.795) (end 3.27 1.42) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.05 -1.55) (end -1.05 1.55) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.05 1.55) (end 3.55 1.55) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 3.55 1.55) (end 3.55 -1.55) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 3.55 -1.55) (end -1.05 -1.55) (layer ${p.side}.CrtYd) (width 0.05))
    (pad 1 thru_hole circle (at 0 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.P1})
    (pad 2 thru_hole circle (at 2.5 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask)  ${p.P2})
    (fp_text user %R (at 1.25 0) (layer ${p.side}.Fab)
      (effects (font (size 0.76 0.76) (thickness 0.114)))
    )
    (model ${p.KISYS3DMOD}/Capacitor_THT.3dshapes/C_Disc_D3.8mm_W2.6mm_P2.50mm.wrl
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};
