// DIP-16_W7.62mm
// 16-lead though-hole mounted DIP package, row spacing 7.62 mm (300 mils), Socket
module.exports = {
    params: {
        designator: 'DIP',
        side: 'F',
        value: 'DIP-16_W7.62mm_Socket',
        p01: {type: 'net', value: ''},
        p02: {type: 'net', value: ''},
        p03: {type: 'net', value: ''},
        p04: {type: 'net', value: ''},
        p05: {type: 'net', value: ''},
        p06: {type: 'net', value: ''},
        p07: {type: 'net', value: ''},
        p08: {type: 'net', value: ''},
        p09: {type: 'net', value: ''},
        p10: {type: 'net', value: ''},
        p11: {type: 'net', value: ''},
        p12: {type: 'net', value: ''},
        p13: {type: 'net', value: ''},
        p14: {type: 'net', value: ''},
        p15: {type: 'net', value: ''},
        p16: {type: 'net', value: ''},
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module "Package_DIP:DIP-16_W7.62mm_Socket" (layer ${p.side}.Cu)
  (descr "16-lead though-hole mounted DIP package, row spacing 7.62 mm (300 mils), Socket")
  (tags "THT DIP DIL PDIP 2.54mm 7.62mm 300mil Socket")
  ${p.at /* parametric position */}

  (fp_text reference "${p.ref}" (at 3.81 -2.33) (layer ${p.side}.SilkS) ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value "${p.value}" (at 3.81 20.11) (layer ${p.side}.Fab) hide
    (effects (font (size 0.8 0.8) (thickness 0.15)))
  )
  (fp_arc (start 3.81 -1.33) (end 2.81 -1.33) (angle -180.000000) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 1.635 -1.27) (end 6.985 -1.27) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 6.985 -1.27) (end 6.985 19.05) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 6.985 19.05) (end 0.635 19.05) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 0.635 19.05) (end 0.635 -0.27) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 0.635 -0.27) (end 1.635 -1.27) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -1.27 -1.33) (end -1.27 19.11) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -1.27 19.11) (end 8.89 19.11) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 8.89 19.11) (end 8.89 -1.33) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 8.89 -1.33) (end -1.27 -1.33) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 2.81 -1.33) (end 1.16 -1.33) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 1.16 -1.33) (end 1.16 19.11) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 1.16 19.11) (end 6.46 19.11) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 6.46 19.11) (end 6.46 -1.33) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 6.46 -1.33) (end 4.81 -1.33) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -1.33 -1.39) (end -1.33 19.17) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -1.33 19.17) (end 8.95 19.17) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 8.95 19.17) (end 8.95 -1.39) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 8.95 -1.39) (end -1.33 -1.39) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -1.55 -1.6) (end -1.55 19.4) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start -1.55 19.4) (end 9.15 19.4) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start 9.15 19.4) (end 9.15 -1.6) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start 9.15 -1.6) (end -1.55 -1.6) (layer ${p.side}.CrtYd) (width 0.05))
  (pad 1 thru_hole rect (at 0 0 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p01.str})
  (pad 9 thru_hole oval (at 7.62 17.78 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p09.str})
  (pad 2 thru_hole oval (at 0 2.54 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p02.str})
  (pad 10 thru_hole oval (at 7.62 15.24 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p10.str})
  (pad 3 thru_hole oval (at 0 5.08 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p03.str})
  (pad 11 thru_hole oval (at 7.62 12.7 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p11.str})
  (pad 4 thru_hole oval (at 0 7.62 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p04.str})
  (pad 12 thru_hole oval (at 7.62 10.16 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p12.str})
  (pad 5 thru_hole oval (at 0 10.16 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p05.str})
  (pad 13 thru_hole oval (at 7.62 7.62 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p13.str})
  (pad 6 thru_hole oval (at 0 12.7 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p06.str})
  (pad 14 thru_hole oval (at 7.62 5.08 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p14.str})
  (pad 7 thru_hole oval (at 0 15.24 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p07.str})
  (pad 15 thru_hole oval (at 7.62 2.54 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p15.str})
  (pad 8 thru_hole oval (at 0 17.78 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p08.str})
  (pad 16 thru_hole oval (at 7.62 0 ${p.r}) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.p16.str})

  (fp_text user %R (at 3.81 8.89) (layer ${p.side}.Fab)
    (effects (font (size 1 1) (thickness 0.15)))
  )

  (model ${p.KISYS3DMOD}/Package_DIP.3dshapes/DIP-16_W7.62mm_Socket.wrl
    (at (xyz 0 0 0))
    (scale (xyz 1 1 1))
    (rotate (xyz 0 0 0))
  )
)`
};