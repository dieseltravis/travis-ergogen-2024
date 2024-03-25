// CRadialD63H11P25
// C, Radial series, Radial, pin pitch=2.50mm, diameter=6.3mm, height=11mm, Non-Polar Electrolytic Capacitor
// https://datasheets.kyocera-avx.com/rpf-series.pdf
module.exports = {
    params: {
        designator: 'C',
        side: 'F',
        P1: { type: 'net', value: 'VCC' },
        P2: { type: 'net', value: 'GND' },
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
(module "Capacitor_THT:C_Radial_D6.3mm_H11.0mm_P2.50mm" (layer ${p.side}.Cu) (tedit 5BC5C9B9)
  (descr "C, Radial series, Radial, pin pitch=2.50mm, diameter=6.3mm, height=11mm, Non-Polar Electrolytic Capacitor")
  (tags "C Radial series Radial pin pitch 2.50mm diameter 6.3mm height 11mm Non-Polar Electrolytic Capacitor")
  ${p.at /* parametric position */}
  (fp_text reference "${p.ref}" (at 1.25 -4.4) (layer ${p.side}.SilkS) ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value C_Radial_D6.3mm_H11.0mm_P2.50mm (at 1.25 4.4) (layer ${p.side}.Fab) hide
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_circle (center 1.25 0) (end 4.4 0) (layer ${p.side}.Fab) (width 0.1))
  (fp_circle (center 1.25 0) (end 4.52 0) (layer ${p.side}.SilkS) (width 0.12))
  (fp_circle (center 1.25 0) (end 4.65 0) (layer ${p.side}.CrtYd) (width 0.05))
  (pad 1 thru_hole circle (at 0 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.P1.str})
  (pad 2 thru_hole circle (at 2.5 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.P2.str})
  (fp_text user %R (at 1.25 0) (layer ${p.side}.Fab)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (model ${p.KISYS3DMOD}/Capacitor_THT.3dshapes/C_Radial_D6.3mm_H11.0mm_P2.50mm.wrl
    (at (xyz 0 0 0))
    (scale (xyz 1 1 1))
    (rotate (xyz 0 0 0))
  )
)`
};