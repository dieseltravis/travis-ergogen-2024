// DDO34SOD68P762H
// Diode, DO-34_SOD68 series, Axial, Horizontal, pin pitch=7.62mm, length*diameter=3.04*1.6mm^2
// https://www.nxp.com/docs/en/data-sheet/KTY83_SER.pdf
module.exports = {
    params: {
        designator: 'D',
        side: 'F',
        KICAD8_3DMODEL_DIR: "${KICAD8_3DMODEL_DIR}"
    },
    body: p => `(footprint "D_DO-34_SOD68_P7.62mm_Horizontal"
	(version 20240108)
	(generator "pcbnew")
	(generator_version "8.0")
	(layer "${p.side}.Cu")
	(descr "Diode, DO-34_SOD68 series, Axial, Horizontal, pin pitch=7.62mm, , length*diameter=3.04*1.6mm^2, , https://www.nxp.com/docs/en/data-sheet/KTY83_SER.pdf")
	(tags "Diode DO-34_SOD68 series Axial Horizontal pin pitch 7.62mm  length 3.04mm diameter 1.6mm")
	${p.at /* parametric position */}

	(property "Reference" "${p.ref}"
		(at 3.81 -1.92 0)
		(layer "${p.side}.SilkS")
		(uuid "9b0d79ea-7f7d-4229-8376-4408ef839fe5")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Value" "D_DO-34_SOD68_P7.62mm_Horizontal"
		(at 3.81 1.92 0)
		(layer "${p.side}.Fab")
		(uuid "b979b50f-a112-4a30-ae9e-7f38ea3334c7")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Footprint" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "${p.side}.Fab")
		(hide yes)
		(uuid "fb650eff-59b9-4866-9e2a-bb4cd9cab3cc")
		(effects
			(font
				(size 1.27 1.27)
			)
		)
	)
	(property "Datasheet" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "${p.side}.Fab")
		(hide yes)
		(uuid "0c778c4e-dd53-4d2f-961e-4222126b4139")
		(effects
			(font
				(size 1.27 1.27)
			)
		)
	)
	(property "Description" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "${p.side}.Fab")
		(hide yes)
		(uuid "13b3ada6-a565-4206-ad04-910006e229fa")
		(effects
			(font
				(size 1.27 1.27)
			)
		)
	)
	(attr through_hole)
	(fp_line
		(start 0.99 0)
		(end 2.17 0)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "70588ee8-bc48-41b5-86dc-8be91c35bf5a")
	)
	(fp_line
		(start 2.17 -0.92)
		(end 2.17 0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "78f44c9b-d14c-4b87-ac87-32f5e7e2a00f")
	)
	(fp_line
		(start 2.17 0.92)
		(end 5.45 0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "2e0e51df-4c05-4455-ac7d-110f540e473d")
	)
	(fp_line
		(start 2.626 -0.92)
		(end 2.626 0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "b1df5af4-a39d-42ab-b1b3-ef9c7e187e66")
	)
	(fp_line
		(start 2.746 -0.92)
		(end 2.746 0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "f1d00a9d-d0d4-451e-acc9-c7ee9787c6b1")
	)
	(fp_line
		(start 2.866 -0.92)
		(end 2.866 0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "070567ed-8c6b-417f-84ee-8b78735ed43a")
	)
	(fp_line
		(start 5.45 -0.92)
		(end 2.17 -0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "5c4040e1-26e4-430b-b8af-58c1eabb7d08")
	)
	(fp_line
		(start 5.45 0.92)
		(end 5.45 -0.92)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "93cb6fa5-0b2e-4e41-8411-30280be2844d")
	)
	(fp_line
		(start 6.63 0)
		(end 5.45 0)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "90a0896d-cf21-40f2-b689-ad8849bfd1dc")
	)
	(fp_line
		(start -1 -1.05)
		(end -1 1.05)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "9c86f18d-1dd9-4885-90cb-14f0694899ca")
	)
	(fp_line
		(start -1 1.05)
		(end 8.63 1.05)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "0d9f6e60-c227-419e-9944-0f7fb26be918")
	)
	(fp_line
		(start 8.63 -1.05)
		(end -1 -1.05)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "9d6a8178-f268-42af-8043-2dc6c48b3a9a")
	)
	(fp_line
		(start 8.63 1.05)
		(end 8.63 -1.05)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "b71401e7-6e0b-4319-8f57-6acdba9661fb")
	)
	(fp_line
		(start 0 0)
		(end 2.29 0)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "1aac2361-1496-4669-8bfb-ef3121300baa")
	)
	(fp_line
		(start 2.29 -0.8)
		(end 2.29 0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "b4be437e-9ebf-4cd2-bb35-2263131adf1a")
	)
	(fp_line
		(start 2.29 0.8)
		(end 5.33 0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "06f87791-a896-41b5-a60c-be4c71ffa619")
	)
	(fp_line
		(start 2.646 -0.8)
		(end 2.646 0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "8f412179-02f8-4102-bff2-cbdef43a42c1")
	)
	(fp_line
		(start 2.746 -0.8)
		(end 2.746 0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "d6985cab-8c47-43a2-a4c2-35a944cb7f64")
	)
	(fp_line
		(start 2.846 -0.8)
		(end 2.846 0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "116d461f-d615-4a85-b9cc-e094451f38bd")
	)
	(fp_line
		(start 5.33 -0.8)
		(end 2.29 -0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "3e6f8bd9-ea6a-47f8-bd87-2e928bc4992f")
	)
	(fp_line
		(start 5.33 0.8)
		(end 5.33 -0.8)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "84a7c535-fbfa-416e-bf78-eb3620ce9012")
	)
	(fp_line
		(start 7.62 0)
		(end 5.33 0)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "e7cf8379-a315-47d5-a83c-ae7deb734035")
	)
	(fp_text user "K"
		(at 0 -1.75 0)
		(layer "${p.side}.SilkS")
		(uuid "15aa6111-39d2-41ea-bbe5-a2a083a65c2f")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(fp_text user "K"
		(at 0 -1.75 0)
		(layer "${p.side}.Fab")
		(uuid "4e6e1ddb-3270-45f7-9a7e-fc5df0455962")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(fp_text user "${REFERENCE}"
		(at 4.038 0 0)
		(layer "${p.side}.Fab")
		(uuid "cfb981ed-8c26-4c6d-a4f1-b8bd685614d0")
		(effects
			(font
				(size 0.608 0.608)
				(thickness 0.0912)
			)
		)
	)
	(pad "1" thru_hole rect
		(at 0 0)
		(size 1.5 1.5)
		(drill 0.75)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "406db0b9-5962-4909-a922-7a49bdff9859")
	)
	(pad "2" thru_hole oval
		(at 7.62 0)
		(size 1.5 1.5)
		(drill 0.75)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "04c568ae-0d8b-4680-ac99-a3ac156665d7")
	)
	(model "${p.KICAD8_3DMODEL_DIR}/Diode_THT.3dshapes/D_DO-34_SOD68_P7.62mm_Horizontal.wrl"
		(offset
			(xyz 0 0 0)
		)
		(scale
			(xyz 1 1 1)
		)
		(rotate
			(xyz 0 0 0)
		)
	)
)`
};