// Any MX switch
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh MX hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible 
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously
//
//  Travis changes:
//  * value param added to fab layer
//  * from/to net params
//  * refpos/valpos params
//  * reflected ref
//  * ref silkscreen moved out of drill hole

module.exports = {
    params: {
      designator: 'S',
      hotswap: false,
      reverse: false,
      keycaps: false,
      value: '',
      from: { type: 'net', value: undefined },
      to: { type: 'net', value: undefined },
      refpos: [0, -3.25],
      valpos: [0, 0],
      SCOTTOKEEBS_KICAD: '${SCOTTOKEEBS_KICAD}'
    },
    body: p => {
      const pos = (arr) => arr.join(' ');
      if (p.refpos.length === 2) {
        p.refpos.push(p.r);
      }
      if (p.valpos.length === 2) {
        p.valpos.push(p.r);
      }
      // this is modified from: https://nilnil.notion.site/Convert-Kicad-Footprints-to-Ergogen-8340ce87ad554c69af4e3f92bc9a0898#ed6d01a226714e72941138ca24a38b4a
      const adjust_point = (x, y) => {
        const at_x = p.x;
        const at_y = p.y;
        const at_angle = p.r;
        const adj_x = at_x + x;
        const adj_y = at_y + y;

        const radians = (Math.PI / 180) * at_angle,
          cos = Math.cos(radians),
          sin = Math.sin(radians),
          nx = (cos * (adj_x - at_x)) + (sin * (adj_y - at_y)) + at_x,
          ny = (cos * (adj_y - at_y)) - (sin * (adj_x - at_x)) + at_y;

        const point_str = `${nx.toFixed(4)} ${ny.toFixed(4)}`;
        return point_str;
      };
      const adjust_pos = arr => {
        return adjust_point(arr[0], arr[1]) + ' ' + arr[2]
      };

      const backref = `
        (gr_text "${p.ref}" (at ${adjust_pos(p.refpos)}) (layer B.SilkS)
          (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
        )`;
      const standard = `
        (module "travis:MX" (layer F.Cu)
        ${p.at /* parametric position */}
  
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at ${pos(p.refpos)}) (layer F.SilkS) ${'' /*p.ref_hide*/} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "${p.value}" (at ${pos(p.valpos)}) (layer B.Fab) hide (effects (font (size 1 1) (thickness 0.15))))
  
        ${''/* corner marks */}
        (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))
      
        ${''/* middle shaft */}
        (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
  
        ${''/* stabilizers */}
        (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
        `;
      const keycap = `
        ${'' /* keycap marks */}
        (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))
        `;
    
      // 3D model
      const scotto = `
      (model "${p.SCOTTOKEEBS_KICAD}/3dmodels/ScottoKeebs_Hotswap.3dshapes/Hotswap_MX.step"
		(offset (xyz 0 0 0) )
		(scale (xyz 1 1 1) )
		(rotate (xyz 0 0 0) )
	  )`;

      function pins(def_neg, def_pos, def_side) {
        if(p.hotswap) {
          return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at ${def_neg}3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${'' /* net pads */}
          (pad 1 smd rect (at ${def_neg}7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from})
          (pad 2 smd rect (at ${def_pos}5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to})
          `;
        } else {
            return `
              ${''/* pins */}
              (pad 1 thru_hole circle (at ${def_pos}2.54 -5.08) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from})
              (pad 2 thru_hole circle (at ${def_neg}3.81 -2.54) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to})
            `;
        }
      }
      if(p.reverse){
        return `
          ${standard}
          ${p.keycaps ? keycap : ''}
          ${pins('-', '', 'B')}
          ${pins('', '-', 'F')}
          ${scotto})
          ${backref}
          `;
      } else {
        return `
          ${standard}
          ${p.keycaps ? keycap : ''}
          ${pins('-', '', 'B')}
          ${scotto})
          ${backref}
          `;
      }
    }
  };