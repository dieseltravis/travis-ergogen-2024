// ScottoKeebs-Stabilizer_MX_2u
// https://github.com/joe-scotto/scottokeebs/blob/main/Extras/ScottoKicad/footprints/ScottoKeebs_Stabilizer.pretty/Stabilizer_MX_2.00u.kicad_mod
module.exports = {
    params: {
        designator: 'STAB2u',
        side: 'F',
        SCOTTOKEEBS_KICAD: '${SCOTTOKEEBS_KICAD}'
    },
    body: p => `
    (module Stabilizer_MX_2.00u (layer ${p.side}.Cu) (tedit 0)
    (descr "MX PCB Stabilizer 2.00u 2.25u 2.50u 2.75u")
    (tags "MX Keyboard Stabilizer 2.00u 2.25u 2.50u 2.75u Cutout")
    ${p.at /* parametric position */}

    (attr virtual)
    (fp_text reference "${p.ref}" (at 0 -2) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
${'' /*
    (fp_text value Stabilizer_MX_2.00u (at 0 2) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
*/}
    (fp_line (start 0 2) (end 0 -2) (layer Dwgs.User) (width 0.1))
    (fp_line (start -2 0) (end 2 0) (layer Dwgs.User) (width 0.1))
    (fp_line (start 8.563 -5.53) (end 8.563 6.77) (layer Eco1.User) (width 0.1))
    (fp_line (start 8.563 6.77) (end 15.313 6.77) (layer Eco1.User) (width 0.1))
    (fp_line (start 15.313 6.77) (end 15.313 -5.53) (layer Eco1.User) (width 0.1))
    (fp_line (start 15.313 -5.53) (end 8.563 -5.53) (layer Eco1.User) (width 0.1))
    (fp_line (start -15.313 -5.53) (end -15.313 6.77) (layer Eco1.User) (width 0.1))
    (fp_line (start -15.313 6.77) (end -8.563 6.77) (layer Eco1.User) (width 0.1))
    (fp_line (start -8.563 6.77) (end -8.563 -5.53) (layer Eco1.User) (width 0.1))
    (fp_line (start -8.563 -5.53) (end -15.313 -5.53) (layer Eco1.User) (width 0.1))
    (pad "" np_thru_hole circle (at -11.938 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 11.938 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at -11.938 8.225) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 11.938 8.225) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    (fp_text user %R (at 0 0) (layer ${p.side}.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (model ${p.SCOTTOKEEBS_KICAD}/3dmodels/ScottoKeebs_Stabilizer.3dshapes/Stabilizer_MX_2.00u.step
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};