//CSMD_D63xL77
// CP_Elec_6.3x7.7
// SMD capacitor, aluminum electrolytic, Nichicon, 6.3x7.7mm
module.exports = {
    params: {
        designator: 'C',
        side: 'F',
        value: 'CP_Elec_6.3x7.7',
        P1: { type: 'net', value: 'VCC' },
        P2: { type: 'net', value: 'GND' },
        refpos: [0, -4.35],
        valpos: [0, 4.35],
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
      return `
    (footprint "CP_Elec_6.3x7.7" (version 20240108) (generator "pcbnew") (generator_version "8.0")
    (layer "F.Cu")
    (descr "SMD capacitor, aluminum electrolytic, Nichicon, 6.3x7.7mm")
    (tags "capacitor electrolytic")

    ${p.at /* parametric position */}
    (property "Reference" "${p.ref}" (at ${pos(p.refpos)}) (layer "F.SilkS")(uuid "6f925f8c-11df-49e7-9944-3b52e654cd36")
      (effects (font (size 1 1) (thickness 0.15)) (justify ${p.side === 'B' ? 'mirror' : ''}))
    )
    (property "Value" "${p.value}" (at ${pos(p.valpos)}) (layer "F.Fab")(uuid "6283908f-953d-4aee-b5e5-b87fc2e1e053") (hide yes)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (property "Footprint" "CP_Elec_6.3x7.7" (at 0 0 0)(unlocked yes)
   (layer "F.Fab")(hide yes)
  (uuid "0f40a31d-2e71-4553-9a35-ccf3a2bc0d61")
      (effects (font (size 1.27 1.27)))
    )
    (property "Datasheet" "https://wmsc.lcsc.com/wmsc/upload/file/pdf/v2/lcsc/2401241035_KNSCHA-RST470UF10V029_C4747954.pdf" (at 0 0 0)(unlocked yes)
   (layer "F.Fab")(hide yes)
  (uuid "26b5d860-57ec-40a7-9f92-d6c67a482a89")
      (effects (font (size 1.27 1.27)))
    )
    (property "Description" "" (at 0 0 0)(unlocked yes)
   (layer "F.Fab")(hide yes)
  (uuid "dab2d70b-5fe2-432a-b999-da4cdcb24150")
      (effects (font (size 1.27 1.27)))
    )
    (attr smd)
    (fp_line (start -4.4375 -1.8475) (end -3.65 -1.8475)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "0af7b2bf-86cf-49ac-93fc-da589a18c5ff"))
    (fp_line (start -4.04375 -2.24125) (end -4.04375 -1.45375)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "32641581-87e8-4cd9-88f6-7ab51647de77"))
    (fp_line (start -3.41 -2.345563) (end -3.41 -1.06)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "40e155ed-b4ea-4073-be16-7a8431a6825d"))
    (fp_line (start -3.41 -2.345563) (end -2.345563 -3.41)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "ae2acad9-5107-44c8-8508-8386f76db9af"))
    (fp_line (start -3.41 2.345563) (end -3.41 1.06)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "cf55a380-6467-4225-b984-41a43cef599c"))
    (fp_line (start -3.41 2.345563) (end -2.345563 3.41)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "0692464f-91ee-48ee-8c1d-a603deb04726"))
    (fp_line (start -2.345563 -3.41) (end 3.41 -3.41)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "4bc84d0b-9d5f-4fa6-b669-6a1d4febdbd7"))
    (fp_line (start -2.345563 3.41) (end 3.41 3.41)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "99c55589-084a-49b9-8acf-6f4fac60b633"))
    (fp_line (start 3.41 -3.41) (end 3.41 -1.06)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "13f8e361-a48b-47ad-bd37-24439d792676"))
    (fp_line (start 3.41 3.41) (end 3.41 1.06)
      (stroke (width 0.12) (type solid)) (layer "F.SilkS")(uuid "4bcf5be9-a075-49f3-a8b7-a5bbab574c81"))
    (fp_line (start -4.7 -1.05) (end -4.7 1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "777f9218-f8c1-4afd-8930-784ab9f76bbb"))
    (fp_line (start -4.7 1.05) (end -3.55 1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "b0d6ecce-22a1-41bc-9238-b99d9f24c2e7"))
    (fp_line (start -3.55 -2.4) (end -3.55 -1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "64979487-6d0e-4745-a629-b1c18b651518"))
    (fp_line (start -3.55 -2.4) (end -2.4 -3.55)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "8e38eaaf-f910-4ca2-9692-596a3db49e87"))
    (fp_line (start -3.55 -1.05) (end -4.7 -1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "a0df4d36-c8fb-40e4-b9da-031eddeeb649"))
    (fp_line (start -3.55 1.05) (end -3.55 2.4)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "ef08a06f-b14e-4fb2-b0fd-8b09832ed392"))
    (fp_line (start -3.55 2.4) (end -2.4 3.55)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "ac35b5a0-ecfe-4072-9a53-f59b90fa0398"))
    (fp_line (start -2.4 -3.55) (end 3.55 -3.55)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "93bd809c-4920-4406-8b7a-6ac870c418b8"))
    (fp_line (start -2.4 3.55) (end 3.55 3.55)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "d131af42-f3e1-4dbb-b3b6-05a9bbb49d31"))
    (fp_line (start 3.55 -3.55) (end 3.55 -1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "81d2af13-2097-43d4-b72c-b699fbdf8a63"))
    (fp_line (start 3.55 -1.05) (end 4.7 -1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "b5f81f92-5ef0-4708-8512-27f9f3ce0e1e"))
    (fp_line (start 3.55 1.05) (end 3.55 3.55)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "b39bb589-e83f-4f77-9785-4479fa086935"))
    (fp_line (start 4.7 -1.05) (end 4.7 1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "49b8e8ae-5612-4e8e-9c47-13f9a029413b"))
    (fp_line (start 4.7 1.05) (end 3.55 1.05)
      (stroke (width 0.05) (type solid)) (layer "F.CrtYd")(uuid "a6c2304b-fb23-4444-9567-eb0aebaa0e74"))
    (fp_line (start -3.3 -2.3) (end -3.3 2.3)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "e70b81c8-e73d-43dd-ae9e-76635d685ac5"))
    (fp_line (start -3.3 -2.3) (end -2.3 -3.3)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "f73052f2-bfad-4b91-b179-24966f923179"))
    (fp_line (start -3.3 2.3) (end -2.3 3.3)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "0acb5d27-9087-4dd2-8d9d-97b4ff106728"))
    (fp_line (start -2.704838 -1.33) (end -2.074838 -1.33)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "1216a60e-1bee-4d07-9fb7-201b6e9842a8"))
    (fp_line (start -2.389838 -1.645) (end -2.389838 -1.015)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "e4b3b7cc-0202-4f59-b852-e6f22ee039a2"))
    (fp_line (start -2.3 -3.3) (end 3.3 -3.3)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "20904f31-ac88-44aa-98ef-969448e9f084"))
    (fp_line (start -2.3 3.3) (end 3.3 3.3)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "0b3d1b29-176f-473c-aa0f-9ecd6d3587c7"))
    (fp_line (start 3.3 -3.3) (end 3.3 3.3)
      (stroke (width 0.1) (type solid)) (layer "F.Fab")(uuid "8f8dc44a-7822-4ef0-8191-3852293d4764"))
    (fp_circle (center 0 0) (end 3.15 0)
      (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab")(uuid "b9486c50-dd58-4eb3-b3d7-57cca8b491bd"))
    (fp_text user "${'${REFERENCE}'}" (at 0 0 0) (layer "F.Fab")(uuid "0e0d1bce-9e8b-45fb-8e28-ccb8914a41b0")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (pad "1" smd roundrect (at -2.7 0) (size 3.5 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.15625)
  (uuid "1f8f5016-2d95-41e4-bab5-9bababdd56c4") ${p.P1.str}
    )
    (pad "2" smd roundrect (at 2.7 0) (size 3.5 1.6) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.15625)
  (uuid "7fb28d3d-e2f6-4fc2-99fe-bf3b4226934f") ${p.P2.str}
    )
    (model "${p.KICAD8_3DMODEL_DIR}/Capacitor_SMD.3dshapes/CP_Elec_6.3x7.7.wrl"
      (offset (xyz 0 0 0))
      (scale (xyz 1 1 1))
      (rotate (xyz 0 0 0))
    )
  )`;
  }
};