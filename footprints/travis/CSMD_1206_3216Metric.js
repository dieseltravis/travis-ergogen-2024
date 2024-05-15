// CSMD_1206_3216Metric
// C_1206_3216Metric
// Capacitor SMD 1206 (3216 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: IPC-SM-782 page 76, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf
module.exports = {
    params: {
        designator: 'C',
        side: 'F',
        value: "C_1206_3216Metric",
        P1: {type: 'net', value: 'VCC'},
        P2: {type: 'net', value: 'GND'},
        refpos: [0, -1.85],
        valpos: [0, 1.85],
        KICAD8_3DMODEL_DIR: '${KICAD8_3DMODEL_DIR}'
    },
    body: p => {
      const pos = (arr) => arr.join(' ');
      if (p.refpos.length === 2) {
        p.refpos.push(p.r);
      }
      if (p.valpos.length === 2) {
        p.valpos.push(p.r);
      }
      return `(footprint "C_1206_3216Metric" (version 20240108) (generator "pcbnew") (generator_version "8.0")
      (layer "${p.side}.Cu")
      (descr "Capacitor SMD 1206 (3216 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: IPC-SM-782 page 76, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
      (tags "capacitor")

      ${p.at /* parametric position */}
      (property "Reference" "${p.ref}" (at ${pos(p.refpos)}) (layer "${p.side}.SilkS")(uuid "83cc328c-b7a6-47b2-9ffa-7ac49f4468d0")
        (effects (font (size 1 1) (thickness 0.15)) (justify ${p.side === 'B' ? 'mirror' : ''}))
      )
      (property "Value" "${p.value}" (at ${pos(p.valpos)}) (layer "${p.side}.Fab")(uuid "136faa66-2c23-42b0-a119-0aec3575d644") (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (property "Footprint" "C_1206_3216Metric" (at 0 0 0)(unlocked yes)
     (layer "${p.side}.Fab")(hide yes)
    (uuid "234f3a8d-c047-4f59-9b16-3f2037e84f3a")
        (effects (font (size 1.27 1.27)))
      )
      (property "Datasheet" "" (at 0 0 0)(unlocked yes)
     (layer "${p.side}.Fab")(hide yes)
    (uuid "a49826e4-f89d-492b-ac1b-e13fe1f87070")
        (effects (font (size 1.27 1.27)))
      )
      (property "Description" "" (at 0 0 0)(unlocked yes)
     (layer "${p.side}.Fab")(hide yes)
    (uuid "b39cd647-b998-4195-bddd-06697bdfd131")
        (effects (font (size 1.27 1.27)))
      )
      (attr smd)
      (fp_line (start -0.711252 -0.91) (end 0.711252 -0.91)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS")(uuid "27e337f5-2211-4740-bb6e-3c02c95b9b94"))
      (fp_line (start -0.711252 0.91) (end 0.711252 0.91)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS")(uuid "f000500b-0b09-41d6-88f1-cc2dbff6a9a2"))
      (fp_line (start -2.3 -1.15) (end 2.3 -1.15)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "fa8d40b2-36cb-4eb6-b0a2-586749373756"))
      (fp_line (start -2.3 1.15) (end -2.3 -1.15)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "8e560052-91dd-4eb9-810d-5ed2ebc18daa"))
      (fp_line (start 2.3 -1.15) (end 2.3 1.15)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "01d1e36f-7327-46b8-96bb-5ed95763498f"))
      (fp_line (start 2.3 1.15) (end -2.3 1.15)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "a6a30906-815c-4e1b-b7c1-0e95ad18419b"))
      (fp_line (start -1.6 -0.8) (end 1.6 -0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "12564c73-e78a-4a67-b910-07f7917dbd6a"))
      (fp_line (start -1.6 0.8) (end -1.6 -0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "f2d5fbda-8bd2-4451-8142-95b76dea9a58"))
      (fp_line (start 1.6 -0.8) (end 1.6 0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "60a21757-6acc-4fcf-bd92-a41fc55bcb3b"))
      (fp_line (start 1.6 0.8) (end -1.6 0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "e18a45df-6ee8-4cca-b760-a239cabfb336"))
      (fp_text user "${'${REFERENCE}'}" (at 0 0 0) (layer "${p.side}.Fab")(hide yes)(uuid "262df469-fc4d-44a4-b992-f26a9c974233")
        (effects (font (size 0.8 0.8) (thickness 0.12)))
      )
      (pad "1" smd roundrect (at -1.475 0) (size 1.15 1.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.217391)
    (uuid "2283549c-f5fa-445f-8887-4ad2bb854e3f") ${p.P1.str}
      )
      (pad "2" smd roundrect (at 1.475 0) (size 1.15 1.8) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.217391)
    (uuid "9774dcc9-5357-4a7d-8e93-370dc1237420") ${p.P2.str}
      )
      (model "${p.KICAD8_3DMODEL_DIR}/Capacitor_SMD.3dshapes/C_1206_3216Metric.wrl"
        (offset (xyz 0 0 0))
        (scale (xyz 1 1 1))
        (rotate (xyz 0 0 0))
      )
    )
    `
    }
};