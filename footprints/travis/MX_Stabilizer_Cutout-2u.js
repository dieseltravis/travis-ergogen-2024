// MX_Stabilizer_Cutout-2u
module.exports = {
    params: {
        designator: 'STAB2u',
        side: 'F'
    },
    body: p => `
    (module "Keebio-Parts:MX_Stabilizer_Cutout-2u" (layer ${p.side}.Cu)
    ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at 0.25 10.05) (layer Eco2.User) hide ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "MX Stabilizer Cutout-2u" (at 0 -15.24) (layer ${p.side}.Fab) hide
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_line (start -19 -9.5) (end 19 -9.5) (layer Dwgs.User) (width 0.15))
    (fp_line (start -19 9.5) (end -19 -9.5) (layer Dwgs.User) (width 0.15))
    (fp_line (start 19 9.5) (end -19 9.5) (layer Dwgs.User) (width 0.15))
    (fp_line (start 19 -9.5) (end 19 9.5) (layer Dwgs.User) (width 0.15))
    (pad "" np_thru_hole oval (at 11.938 7.7724 ${p.r}) (size 3.048 0.3048) (drill oval 3.048 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 11.938 -5.5372 ${p.r}) (size 6.6548 0.3048) (drill oval 6.6548 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 8.763 0.4572 ${p.r}) (size 0.3048 12.2936) (drill oval 0.3048 12.2936) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 11.938 6.4516 ${p.r}) (size 6.6548 0.3048) (drill oval 6.6548 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 15.113 0.4572 ${p.r}) (size 0.3048 12.2936) (drill oval 0.3048 12.2936) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 15.9766 -0.889 ${p.r}) (size 0.3048 2.794) (drill oval 0.3048 2.794) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 10.5664 7.112 ${p.r}) (size 0.3048 1.4732) (drill oval 0.3048 1.4732) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 15.5448 -2.1336 ${p.r}) (size 1.1684 0.3048) (drill oval 1.1684 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 13.3096 7.112 ${p.r}) (size 0.3048 1.4732) (drill oval 0.3048 1.4732) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 15.5448 0.3556 ${p.r}) (size 1.1684 0.3048) (drill oval 1.1684 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -11.938 -5.5372 ${p.r}) (size 6.6548 0.3048) (drill oval 6.6548 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -15.5448 -2.1336 ${p.r}) (size 1.1684 0.3048) (drill oval 1.1684 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -15.9766 -0.889 ${p.r}) (size 0.3048 2.794) (drill oval 0.3048 2.794) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -15.113 0.4572 ${p.r}) (size 0.3048 12.2936) (drill oval 0.3048 12.2936) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -8.763 0.4572 ${p.r}) (size 0.3048 12.2936) (drill oval 0.3048 12.2936) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -11.938 6.4516 ${p.r}) (size 6.6548 0.3048) (drill oval 6.6548 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -15.5448 0.3556 ${p.r}) (size 1.1684 0.3048) (drill oval 1.1684 0.3048) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -13.3096 7.112 ${p.r}) (size 0.3048 1.4732) (drill oval 0.3048 1.4732) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -10.5664 7.112 ${p.r}) (size 0.3048 1.4732) (drill oval 0.3048 1.4732) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -11.938 7.7724 ${p.r}) (size 3.048 0.3048) (drill oval 3.048 0.3048) (layers *.Cu *.Mask))
  )`
};