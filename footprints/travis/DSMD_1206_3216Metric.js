// DSMD_1206_3216Metric
// Diode SMD 1206 (3216 Metric), square (rectangular) end terminal, IPC_7351 nominal
// http://www.tortai-tech.com/upload/download/2011102023233369053.pdf
module.exports = {
    params: {
        designator: 'D',
        side: 'F',
        value: "C_1206_3216Metric",
        from: { type: 'net', value: '' },
        to: { type: 'net', value: '' },
        refpos: [0, -1.82],
        valpos: [0, 1.82],
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
      return `(footprint "D_1206_3216Metric" (version 20240108) (generator "pcbnew") (generator_version "8.0")
      (layer "${p.side}.Cu")
      (descr "Diode SMD 1206 (3216 Metric), square (rectangular) end terminal, IPC_7351 nominal, (Body size source: http://www.tortai-tech.com/upload/download/2011102023233369053.pdf), generated with kicad-footprint-generator")
      (tags "diode")

      ${p.at /* parametric position */}
      (property "Reference" "${p.ref}" (at ${pos(p.refpos)}) (layer "${p.side}.SilkS")(uuid "44a65e6b-5c76-4357-9708-b3c78a5868ca")
        (effects (font (size 1 1) (thickness 0.15)) (justify ${p.side === 'B' ? 'mirror' : ''}))
      )
      (property "Value" "D_1206_3216Metric" (at ${pos(p.valpos)}) (layer "${p.side}.Fab")(uuid "8b0a33c5-59c6-4698-9fca-6c8d6a2a174e") (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (property "Footprint" "D_1206_3216Metric" (at 0 0 0)(unlocked yes)
     (layer "${p.side}.Fab")(hide yes)
    (uuid "f2b8b3df-9df8-4a34-8537-60fede6845be")
        (effects (font (size 1.27 1.27)))
      )
      (property "Datasheet" "" (at 0 0 0)(unlocked yes)
     (layer "${p.side}.Fab")(hide yes)
    (uuid "cefde33d-5f22-42a1-96d1-231f820de1f3")
        (effects (font (size 1.27 1.27)))
      )
      (property "Description" "" (at 0 0 0)(unlocked yes)
     (layer "${p.side}.Fab")(hide yes)
    (uuid "006e158e-ba9c-40b7-87cb-e72b745cab52")
        (effects (font (size 1.27 1.27)))
      )
      (attr smd)
      (fp_line (start -2.285 -1.135) (end -2.285 1.135)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS")(uuid "0ead1ca0-64d0-47b3-b604-645a2a2d27cd"))
      (fp_line (start -2.285 1.135) (end 1.6 1.135)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS")(uuid "894adad6-e1d5-47d8-93d3-eae19f8bb9d8"))
      (fp_line (start 1.6 -1.135) (end -2.285 -1.135)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS")(uuid "fb7b8842-efd0-4ed3-8604-f3c0fcb37f6d"))
      (fp_line (start -2.28 -1.12) (end 2.28 -1.12)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "dafbf07f-6240-4610-81ce-387c12614572"))
      (fp_line (start -2.28 1.12) (end -2.28 -1.12)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "37c936ea-b6e0-4abc-9217-c6ca9cf7832c"))
      (fp_line (start 2.28 -1.12) (end 2.28 1.12)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "b09899f7-33ab-4ba5-aa4d-1eb3befdb8fd"))
      (fp_line (start 2.28 1.12) (end -2.28 1.12)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd")(uuid "618521d0-86b7-4d18-95f8-c7b7121e826d"))
      (fp_line (start -1.6 -0.4) (end -1.6 0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "08c67c0d-21ca-4ab8-82fc-81c60b01ea8b"))
      (fp_line (start -1.6 0.8) (end 1.6 0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "a81eeb6d-8ab2-40d0-af23-e5af471b9ef7"))
      (fp_line (start -1.2 -0.8) (end -1.6 -0.4)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "1b7609e8-78bc-4d92-b948-ebe78573226d"))
      (fp_line (start 1.6 -0.8) (end -1.2 -0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "3bc3d0de-5db9-4c4e-8194-c3b1a2476155"))
      (fp_line (start 1.6 0.8) (end 1.6 -0.8)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab")(uuid "69e4cf94-de7b-4137-be9e-8040b07d447d"))
      (fp_text user "${'${REFERENCE}'}" (at 0 0 0) (layer "${p.side}.Fab")(uuid "5dfef82a-8485-4c7c-abcc-723721b54c46") (hide yes)
        (effects (font (size 0.8 0.8) (thickness 0.12)))
      )
      (pad "1" smd roundrect (at -1.4 0 ${p.r}) (size 1.25 1.75) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.2)
    (uuid "f55b2062-702a-4421-9ce1-b716bf19bec5") ${ p.to.str }
      )
      (pad "2" smd roundrect (at 1.4 0 ${p.r}) (size 1.25 1.75) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.2)
    (uuid "f6582e0a-091d-48a5-91b1-a6e76689891f") ${ p.from.str }
      )
      (model "${p.KICAD8_3DMODEL_DIR}/Diode_SMD.3dshapes/D_1206_3216Metric.wrl"
        (offset (xyz 0 0 0))
        (scale (xyz 1 1 1))
        (rotate (xyz 0 0 0))
      )
    )`;
    }
};