// CDiscD47W25P5
// C, Disc series, Radial, pin pitch=5.00mm, , diameter*width=4.7*2.5mm^2, Capacitor
// http://www.vishay.com/docs/45233/krseries.pdf
module.exports = {
    params: {
        designator: 'C',
        side: 'F',
        value: "104",
        P1: {type: 'net', value: ''},
        P2: {type: 'net', value: ''},
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module C_Disc_D4.7mm_W2.5mm_P5.00mm (layer ${p.side}.Cu) (tedit 5AE50EF0)
    (descr "C, Disc series, Radial, pin pitch=5.00mm, , diameter*width=4.7*2.5mm^2, Capacitor, http://www.vishay.com/docs/45233/krseries.pdf")
    (tags "C Disc series Radial pin pitch 5.00mm  diameter 4.7mm width 2.5mm Capacitor")
    ${p.at /* parametric position */}

    (fp_text reference "${p.ref}" (at 2.5 -2.5 ${p.r}) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15))${p.side === 'B' ? ' (justify mirror)' : ''})
    )
    (fp_text value "${p.value}" (at 2.5 2.5 ${p.r}) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15))${p.side === 'B' ? ' (justify mirror)' : ''})
    )
    (fp_line (start 0.15 -1.25) (end 0.15 1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 0.15 1.25) (end 4.85 1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 4.85 1.25) (end 4.85 -1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 4.85 -1.25) (end 0.15 -1.25) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 0.03 -1.37) (end 4.97 -1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 0.03 1.37) (end 4.97 1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 0.03 -1.37) (end 0.03 -1.055) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 0.03 1.055) (end 0.03 1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 4.97 -1.37) (end 4.97 -1.055) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 4.97 1.055) (end 4.97 1.37) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.05 -1.5) (end -1.05 1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.05 1.5) (end 6.05 1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 6.05 1.5) (end 6.05 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 6.05 -1.5) (end -1.05 -1.5) (layer ${p.side}.CrtYd) (width 0.05))
    (pad 1 thru_hole circle (at 0 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.P1.str})
    (pad 2 thru_hole circle (at 5 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.P2.str})
    (fp_text user %R (at 2.5 0) (layer ${p.side}.Fab)
      (effects (font (size 0.94 0.94) (thickness 0.141)))
    )
    (model ${p.KISYS3DMOD}/Capacitor_THT.3dshapes/C_Disc_D4.7mm_W2.5mm_P5.00mm.wrl
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};
