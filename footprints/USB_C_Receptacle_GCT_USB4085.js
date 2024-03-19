// USB_C_Receptacle_GCT_USB4085
// USB 2.0 Type C Receptacle
// https://gct.co/Files/Drawings/USB4085.pdf
module.exports = {
    params: {
        designator: 'USBC',
        side: 'F',
        A1: { type: 'net', value: 'A1' },
        A4: { type: 'net', value: 'A4' },
        A5: { type: 'net', value: 'A5' },
        A6: { type: 'net', value: 'A6' },
        A7: { type: 'net', value: 'A7' },
        A8: { type: 'net', value: 'A8' },
        A9: { type: 'net', value: 'A9' },
        A12: { type: 'net', value: 'A12' },
        B9: { type: 'net', value: 'B9' },
        B7: { type: 'net', value: 'B7' },
        B8: { type: 'net', value: 'B8' },
        B12: { type: 'net', value: 'B12' },
        B5: { type: 'net', value: 'B5' },
        B4: { type: 'net', value: 'B4' },
        B1: { type: 'net', value: 'B1' },
        B6: { type: 'net', value: 'B6' },
        S1: { type: 'net', value: 'S1' },

        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module USB_C_Receptacle_GCT_USB4085 (layer ${p.side}.Cu) (tedit 5BCCCD93)
    (descr "USB 2.0 Type C Receptacle, https://gct.co/Files/Drawings/USB4085.pdf")
    (tags "USB Type-C Receptacle Through-hole Right angle")
    ${p.at /* parametric position */}

    (fp_text reference "${p.ref}" (at 2.975 -1.8) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value USB_C_Receptacle_GCT_USB4085 (at 2.975 9.925) (layer ${p.side}.Fab) hide
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (fp_line (start -1.5 -0.56) (end 7.45 -0.56) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start -1.5 8.61) (end 7.45 8.61) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start -1.62 8.73) (end 7.57 8.73) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.5 -0.68) (end 7.45 -0.68) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.5 -0.56) (end -1.5 8.61) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 7.45 -0.56) (end 7.45 8.61) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 7.57 6) (end 7.57 8.73) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.62 6) (end -1.62 8.73) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start 7.57 2.4) (end 7.57 3.3) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.62 2.4) (end -1.62 3.3) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -2.3 -1.06) (end -2.3 9.11) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -2.3 9.11) (end 8.25 9.11) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -2.3 -1.06) (end 8.25 -1.06) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 8.25 -1.06) (end 8.25 9.11) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -0.025 6.1) (end 5.975 6.1) (layer ${p.side}.Fab) (width 0.1))

    (fp_text user "PCB Edge" (at 2.975 6.1) (layer Dwgs.User)
      (effects (font (size 0.5 0.5) (thickness 0.1)))
    )
    (fp_text user %R (at 2.975 4.025) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (pad A1 thru_hole circle (at 0 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A1})
    (pad A4 thru_hole circle (at 0.85 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A4})
    (pad A5 thru_hole circle (at 1.7 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A5})
    (pad A6 thru_hole circle (at 2.55 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A6})
    (pad A7 thru_hole circle (at 3.4 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A7})
    (pad A8 thru_hole circle (at 4.25 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A8})
    (pad A9 thru_hole circle (at 5.1 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A9})
    (pad A12 thru_hole circle (at 5.95 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.A12})
    (pad B9 thru_hole circle (at 0.85 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B9})
    (pad B7 thru_hole circle (at 2.55 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B7})
    (pad B8 thru_hole circle (at 1.7 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B8})
    (pad B12 thru_hole circle (at 0 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B12})
    (pad B5 thru_hole circle (at 4.25 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B5})
    (pad B4 thru_hole circle (at 5.1 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B4})
    (pad B1 thru_hole circle (at 5.95 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B1})
    (pad B6 thru_hole circle (at 3.4 1.35) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.B6})
    (pad S1 thru_hole oval (at -1.35 0.98 ${p.r}) (size 0.9 2.4) (drill oval 0.6 2.1) (layers *.Cu *.Mask) ${p.S1})
    (pad S1 thru_hole oval (at 7.3 0.98 ${p.r}) (size 0.9 2.4) (drill oval 0.6 2.1) (layers *.Cu *.Mask) ${p.S1})
    (pad S1 thru_hole oval (at -1.35 4.36 ${p.r}) (size 0.9 1.7) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.S1})
    (pad S1 thru_hole oval (at 7.3 4.36 ${p.r}) (size 0.9 1.7) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.S1})

    (model ${p.KISYS3DMOD}/Connector_USB.3dshapes/USB_C_Receptacle_GCT_USB4085.wrl
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};