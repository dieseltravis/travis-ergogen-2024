// CSMD_0805_2012Metric
// Capacitor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal
// NOTE: untested
module.exports = {
    params: {
        designator: 'C',
        side: 'F',
        P1: { type: 'net', value: 'VCC' },
        P2: { type: 'net', value: 'GND' },
        KISYS3DMOD: '${KISYS3DMOD}'
    },
    body: p => `
    (module "Capacitor_SMD:C_0805_2012Metric" (layer ${p.side}.Cu) (tedit 5F68FEEE)
    (descr "Capacitor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: IPC-SM-782 page 76, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf, https://docs.google.com/spreadsheets/d/1BsfQQcO9C6DZCsRaXUlFlo91Tg2WpOkGARC1WS5S8t0/edit?usp=sharing), generated with kicad-footprint-generator")
    (tags capacitor)
    (attr smd)
    ${p.at /* parametric position */}
    (fp_text reference "${p.ref}" (at 0 -1.68) (layer ${p.side}.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)) (justify ${p.side === 'B' ? 'mirror' : ''}))
    )
    (fp_text value C_0805_2012Metric (at 0 1.68) (layer ${p.side}.Fab) hide
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_line (start -1 0.625) (end -1 -0.625) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start -1 -0.625) (end 1 -0.625) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 1 -0.625) (end 1 0.625) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start 1 0.625) (end -1 0.625) (layer ${p.side}.Fab) (width 0.1))
    (fp_line (start -0.261252 -0.735) (end 0.261252 -0.735) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -0.261252 0.735) (end 0.261252 0.735) (layer ${p.side}.SilkS) (width 0.12))
    (fp_line (start -1.7 0.98) (end -1.7 -0.98) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start -1.7 -0.98) (end 1.7 -0.98) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 1.7 -0.98) (end 1.7 0.98) (layer ${p.side}.CrtYd) (width 0.05))
    (fp_line (start 1.7 0.98) (end -1.7 0.98) (layer ${p.side}.CrtYd) (width 0.05))
    (pad 1 smd roundrect (at -0.95 0 ${p.r}) (size 1 1.45) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (roundrect_rratio 0.25) ${p.P1.str})
    (pad 2 smd roundrect (at 0.95 0 ${p.r}) (size 1 1.45) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (roundrect_rratio 0.25) ${p.P2.str})
    (fp_text user %R (at 0 0) (layer ${p.side}.Fab)
      (effects (font (size 0.5 0.5) (thickness 0.08)))
    )
    (model ${p.KISYS3DMOD}/Capacitor_SMD.3dshapes/C_0805_2012Metric.wrl
      (at (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`
};