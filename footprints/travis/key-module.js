// key-module : mx, hotswap, diode, led, capacitor
module.exports = {
  params: {
    designator: 'K',
    U: 19.05,
    dir: 'LTR',
    name: {type: 'net', value: ''},
    colnet: {type: 'net', value: ''},
    rownet: {type: 'net', value: ''},
    led_this: {type: 'net', value: ''},
    led_next: {type: 'net', value: ''},
    power: {type: 'net', value: 'RAW'},
    gnd: {type: 'net', value: 'GND'},
    iscol2row: true,
    KISYS3DMOD: '${KISYS3DMOD}',
    SCOTTOKEEBS_KICAD: '${SCOTTOKEEBS_KICAD}'
  },
  body: p => {
    const index = +p.ref.match(/\d+/);

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

    // when dir === 'RTL' rotate LED and CAP by 180, adjust text a bit, remap routes
    const isRtl = p.dir === 'RTL';

    const key = `
(module "travis:MX" (layer F.Cu)
    ${p.at /* parametric position */}
    (fp_text reference "${p.designator}SW${index}" (at 0 -3.25) (layer F.SilkS)  (effects (font (size 0.8 0.8) (thickness 0.15))))
    (fp_text value "Kailh MX Switch Sockets" (at 0 0) (layer B.Fab) hide (effects (font (size 0.8 0.8) (thickness 0.15))))
    
    (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
    (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
    (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
    (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
    (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
    (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
    (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
    (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))
    
    (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

    (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
    (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
    (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
    (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))
        
    (pad "" np_thru_hole circle (at 2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
    (pad "" np_thru_hole circle (at -3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))

    (pad 1 smd rect (at -7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.colnet.str})
    (pad 2 smd rect (at 5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.name.str})
    
    (model "${p.SCOTTOKEEBS_KICAD}/3dmodels/ScottoKeebs_Hotswap.3dshapes/Hotswap_MX.step"
      (offset (xyz 0 0 0) )
      (scale (xyz 1 1 1) )
      (rotate (xyz 0 0 0) )
    )
)`;
    const key_label =`
(gr_text "${p.name.name}\\n${p.colnet.name} ${p.rownet.name}" (at ${adjust_point(-p.U/2 + 0.5, -p.U/2 + 0.5)} ${p.r}) (layer F.SilkS)
  (effects (font (size 0.8 0.8) (thickness 0.15)) (justify top left))
)
(gr_text "${p.name.name}\\n${p.colnet.name} ${p.rownet.name}" (at ${adjust_point(-p.U/2 + 0.5, -p.U/2 + 0.5)}  ${p.r}) (layer B.SilkS)
  (effects (font (size 0.8 0.8) (thickness 0.15)) (justify top right mirror))
)`;
    const dy = p.iscol2row ? -(p.U / 2 - 1.5) : (p.U / 2 - 1.5 - 7.62);
    const dr = p.iscol2row ? p.r + 270 : p.r + 90;
    const diode = `
(module "ScottoKeebs_Components:Diode_DO-35" (layer "B.Cu")
  (descr "Diode, DO-35_SOD27 series, Axial, Horizontal, pin pitch=7.62mm, , length*diameter=4*2mm^2, , http://www.diodes.com/_files/packages/DO-35.pdf")
  (tags "Diode DO-35_SOD27 series Axial Horizontal pin pitch 7.62mm  length 4mm diameter 2mm")
  (at ${adjust_point((p.U / 2 - 1), dy)} ${dr})
  
  (fp_text reference "${p.designator}D${index}" (at 5.985 1.921 ${dr}) (layer "B.SilkS") 
    (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
  )
  (fp_text value "1N4148" (at ${p.iscol2row ? 11.065 : 7.62/2 } 0 ${dr}) (layer "B.Fab")
    (effects (font (size 0.8 0.8) (thickness 0.15)))
  )

  (fp_line (start 1.04 0) (end 1.69 0)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 1.69 -1.12) (end 1.69 1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 1.69 1.12) (end 5.93 1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 2.29 -1.12) (end 2.29 1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 2.41 -1.12) (end 2.41 1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 2.53 -1.12) (end 2.53 1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 5.93 -1.12) (end 1.69 -1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 5.93 1.12) (end 5.93 -1.12)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start 6.58 0) (end 5.93 0)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS") )

  (fp_line (start -1.05 -1.25) (end -1.05 1.25)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start -1.05 1.25) (end 8.67 1.25)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start 8.67 -1.25) (end -1.05 -1.25)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start 8.67 1.25) (end 8.67 -1.25)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )

  (fp_line (start 0 0) (end 1.81 0)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 1.81 -1) (end 1.81 1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 1.81 1) (end 5.81 1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 2.31 -1) (end 2.31 1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 2.41 -1) (end 2.41 1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 2.51 -1) (end 2.51 1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 5.81 -1) (end 1.81 -1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 5.81 1) (end 5.81 -1)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start 7.62 0) (end 5.81 0)
    (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  
  (pad 1 thru_hole rect (at 0 0 ${dr}) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.iscol2row ? p.rownet.str : p.name.str})
  (pad 2 thru_hole oval (at 7.62 0 ${dr}) (size 1.6 1.6) (drill 0.8) (layers "*.Cu" "*.Mask") ${p.iscol2row ? p.name.str : p.rownet.str})

  (model "${p.SCOTTOKEEBS_KICAD}/3dmodels/ScottoKeebs_Components.3dshapes/Diode_DO-35.step"
    (offset (xyz 0 0 0))
    (scale (xyz 1 1 1))
    (rotate (xyz 0 0 0))
  )
)`;
    const diode_label = `
(gr_text "${p.designator}D${index}" (at ${adjust_point((p.U / 2 - 1) - 1, -(p.U / 2 - 1.5) + (7.62 / 2))} ${p.r}) (layer F.SilkS)
  (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left))
)`;
    const led = `
(module "travis:led_SK6812mini-e" 
  (layer B.Cu)
  (at ${adjust_point(0, 4.96)} ${isRtl ? 180 + p.r : p.r})

  (fp_text reference "${p.led_this.name}-${p.rownet.name}-${p.colnet.name}" (at 0 ${isRtl ? 2.2 : -2.2} ${p.r}) (layer B.SilkS) hide
    (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
  )
  (fp_text value "SK6812mini-e" (at 0 ${isRtl ? 1.25 : -1.25} ${p.r}) (layer "B.Fab")
    (effects (font (size 0.8 0.8) (thickness 0.125)))
  )

  (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start -1.6 1.4) (end 1.6 1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start -1.6 -1.4) (end -1.6 1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start 1.6 -1.4) (end 1.6 1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start -1.6 -1.05) (end -2.94 -1.05) (layer Dwgs.User) (width 0.12))
  (fp_line (start -2.94 -1.05) (end -2.94 -0.37) (layer Dwgs.User) (width 0.12))
  (fp_line (start -2.94 -0.37) (end -1.6 -0.37) (layer Dwgs.User) (width 0.12))
  (fp_line (start -1.6 0.35) (end -2.94 0.35) (layer Dwgs.User) (width 0.12))
  (fp_line (start -2.94 1.03) (end -1.6 1.03) (layer Dwgs.User) (width 0.12))
  (fp_line (start -2.94 0.35) (end -2.94 1.03) (layer Dwgs.User) (width 0.12))
  (fp_line (start 1.6 1.03) (end 2.94 1.03) (layer Dwgs.User) (width 0.12))
  (fp_line (start 2.94 0.35) (end 1.6 0.35) (layer Dwgs.User) (width 0.12))
  (fp_line (start 2.94 1.03) (end 2.94 0.35) (layer Dwgs.User) (width 0.12))
  (fp_line (start 1.6 -0.37) (end 2.94 -0.37) (layer Dwgs.User) (width 0.12))
  (fp_line (start 2.94 -1.05) (end 1.6 -1.05) (layer Dwgs.User) (width 0.12))
  (fp_line (start 2.94 -0.37) (end 2.94 -1.05) (layer Dwgs.User) (width 0.12))

  (fp_line (start -3.8 -1.6) (end -2.2 -1.6) (layer B.SilkS) (width 0.12))
  (fp_line (start -3.8 0) (end -3.8 -1.6) (layer B.SilkS) (width 0.12))
  (fp_line (start -3.8 -1.36) (end -3.56 -1.6) (layer B.SilkS) (width 0.12))

  (pad 2 smd rect (at 2.70 -0.7 ${isRtl ? 180 + p.r : p.r}) (size 1.4 1) (layers B.Cu B.Paste B.Mask) ${p.led_next.str})
  (pad 1 smd rect (at 2.70 0.7 ${isRtl ? 180 + p.r : p.r}) (size 1.4 1) (layers B.Cu B.Paste B.Mask) ${p.power.str})
  (pad 3 smd rect (at -2.70 -0.7 ${isRtl ? 180 + p.r : p.r}) (size 1.4 1) (layers B.Cu B.Paste B.Mask) ${p.gnd.str})
  (pad 4 smd rect (at -2.70 0.7 ${isRtl ? 180 + p.r : p.r}) (size 1.4 1) (layers B.Cu B.Paste B.Mask) ${p.led_this.str})
    
  (fp_line (start -0.8 -1.4) (end -0.8 1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start 0.8 -1.4) (end 0.8 1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start -1 -1.4) (end -1 1.4) (layer Dwgs.User) (width 0.12))
  (fp_line (start 1 -1.4) (end 1 1.4) (layer Dwgs.User) (width 0.12))
  
  (fp_poly
    (pts
      (xy 1.6 -1.05) (xy 2.94 -1.05) (xy 2.94 -0.37) (xy 1.6 -0.37) (xy 1.6 0.35)
      (xy 2.94 0.35) (xy 2.94 1.03) (xy 1.6 1.03) (xy 1.6 1.4) (xy -1.6 1.4)
      (xy -1.6 1.03) (xy -2.94 1.03) (xy -2.94 0.35) (xy -1.6 0.35) (xy -1.6 -0.37)
      (xy -2.94 -0.37) (xy -2.94 -1.05) (xy -1.6 -1.05) (xy -1.6 -1.4) (xy 1.6 -1.4)
    )
    (width 0.1) (layer "B.CrtYd")
  )

  (fp_line (start -1.8 -1.55) (end -1.8 1.55) (layer Edge.Cuts) (width 0.12))
  (fp_line (start -1.8 1.55) (end 1.8 1.55) (layer Edge.Cuts) (width 0.12))
  (fp_line (start 1.8 1.55) (end 1.8 -1.55) (layer Edge.Cuts) (width 0.12))
  (fp_line (start 1.8 -1.55) (end -1.8 -1.55) (layer Edge.Cuts) (width 0.12))
)
  
(zone (net 0) (net_name "") (layers "F&B.Cu") (hatch edge 0.3)
  (connect_pads (clearance 0))
  (min_thickness 0.25)
  (keepout (tracks not_allowed) (vias not_allowed) (copperpour not_allowed))
  (fill (thermal_gap 0.5) (thermal_bridge_width 0.5))
  (polygon
    (pts
      (xy ${adjust_point(-2, 3.11)})
      (xy ${adjust_point(2, 3.11)})
      (xy ${adjust_point(2, 6.81)})
      (xy ${adjust_point(-2, 6.81)})
    )
  )
)`;
    const led_label =`
(gr_text "${p.led_this.name}" (at ${adjust_point((isRtl ? 2.7 : -2.7), -(-4.96 + (isRtl ? 0.7 : -0.7)))} ${p.r}) (layer F.SilkS)
  (effects (font (size 0.8 0.8) (thickness 0.15)) (justify ${isRtl ? 'left' : 'right'}))
)
(gr_text "${p.led_this.name}" (at ${adjust_point((isRtl ? 3.7 : -3.7), -(-4.96 + (isRtl ? 0.7 : -0.7)))} ${p.r}) (layer B.SilkS)
  (effects (font (size 0.8 0.8) (thickness 0.15)) (justify ${isRtl ? 'right' : 'left'} mirror))
)`;
    const cap = `
(module "Capacitor_THT:C_Disc_D4.7mm_W2.5mm_P5.00mm" (layer B.Cu)
  (descr "C, Disc series, Radial, pin pitch=5.00mm, , diameter*width=4.7*2.5mm^2, Capacitor, http://www.vishay.com/docs/45233/krseries.pdf")
  (tags "C Disc series Radial pin pitch 5.00mm  diameter 4.7mm width 2.5mm Capacitor")
  (at ${adjust_point((isRtl ? -2.5 : 2.5), 8.3)} ${isRtl ? p.r : p.r + 180})

  (fp_text reference "${p.designator}C${index}" (at 6.0 0 ${isRtl ? p.r : p.r + 180}) (layer B.SilkS) 
    (effects (font (size 0.8 0.8) (thickness 0.15)) (justify ${isRtl ? 'right' : 'left'} mirror))
  )
  (fp_text value "104" (at -2.5 0 ${isRtl ? p.r : p.r + 180}) (layer B.Fab)
    (effects (font (size 0.8 0.8) (thickness 0.15)))
  )
  (fp_line (start 0.15 -1.25) (end 0.15 1.25) (layer B.Fab) (width 0.1))
  (fp_line (start 0.15 1.25) (end 4.85 1.25) (layer B.Fab) (width 0.1))
  (fp_line (start 4.85 1.25) (end 4.85 -1.25) (layer B.Fab) (width 0.1))
  (fp_line (start 4.85 -1.25) (end 0.15 -1.25) (layer B.Fab) (width 0.1))
  (fp_line (start 0.03 -1.37) (end 4.97 -1.37) (layer B.SilkS) (width 0.12))
  (fp_line (start 0.03 1.37) (end 4.97 1.37) (layer B.SilkS) (width 0.12))
  (fp_line (start 0.03 -1.37) (end 0.03 -1.055) (layer B.SilkS) (width 0.12))
  (fp_line (start 0.03 1.055) (end 0.03 1.37) (layer B.SilkS) (width 0.12))
  (fp_line (start 4.97 -1.37) (end 4.97 -1.055) (layer B.SilkS) (width 0.12))
  (fp_line (start 4.97 1.055) (end 4.97 1.37) (layer B.SilkS) (width 0.12))
  (fp_line (start -1.05 -1.5) (end -1.05 1.5) (layer B.CrtYd) (width 0.05))
  (fp_line (start -1.05 1.5) (end 6.05 1.5) (layer B.CrtYd) (width 0.05))
  (fp_line (start 6.05 1.5) (end 6.05 -1.5) (layer B.CrtYd) (width 0.05))
  (fp_line (start 6.05 -1.5) (end -1.05 -1.5) (layer B.CrtYd) (width 0.05))
  (pad 1 thru_hole circle (at 0 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.power.str})
  (pad 2 thru_hole circle (at 5 0) (size 1.6 1.6) (drill 0.8) (layers *.Cu *.Mask) ${p.gnd.str})
  (model ${p.KISYS3DMOD}/Capacitor_THT.3dshapes/C_Disc_D4.7mm_W2.5mm_P5.00mm.wrl
    (at (xyz 0 0 0))
    (scale (xyz 1 1 1))
    (rotate (xyz 0 0 0))
  )
)`;
    const cap_label = `
(gr_text "${p.designator}C${index}" (at ${adjust_point(0, 8.3)} ${p.r}) (layer F.SilkS)
  (effects (font (size 0.8 0.8) (thickness 0.15)))
)`;
    const routes = `
(segment 
  (start ${adjust_point(5.842, -3.088)}) 
  (end ${adjust_point(8.525, -0.405)}) 
  (width 0.25) 
  (layer "B.Cu") 
  (net ${p.name.index}) 
)
(segment
  (start ${adjust_point(5.842, -5.08)})
  (end ${adjust_point(5.842, -3.088)})
  (width 0.25)
  (layer "B.Cu")
  (net ${p.name.index})
)

(segment
  (start ${adjust_point(2.7, 5.66)})
  (end ${adjust_point(2.7, 8.1)})
  (width 0.5)
  (layer "B.Cu")
  (net ${isRtl ? p.gnd.index : p.power.index})
)
(segment
  (start ${adjust_point(2.7, 8.1)})
  (end ${adjust_point(2.5, 8.3)})
  (width 0.5)
  (layer "B.Cu")
  (net ${isRtl ? p.gnd.index : p.power.index})
)

(segment
  (start ${adjust_point(-4.2672, 4.2672)})
  (end ${adjust_point(-4.2672, 6.5328)})
  (width 0.5)
  (layer "F.Cu")
  (net ${isRtl ? p.power.index : p.gnd.index})
)
(segment
  (start ${adjust_point(-4.2672, 6.5328)})
  (end ${adjust_point(-2.5, 8.3)})
  (width 0.5)
  (layer "F.Cu")
  (net ${isRtl ? p.power.index : p.gnd.index})
)

(via
  (at ${adjust_point(-4.2672, 4.2672)})
  (size 0.8)
  (drill 0.4)
  (layers "F.Cu" "B.Cu")
  (net ${isRtl ? p.power.index : p.gnd.index})
)

(segment
  (start ${adjust_point(-2.7, 4.26)})
  (end ${adjust_point(-4.26, 4.26)})
  (width 0.5)
  (layer "B.Cu")
  (net ${isRtl ? p.power.index : p.gnd.index})
)
(segment
  (start ${adjust_point(-4.26, 4.26)})
  (end ${adjust_point(-4.2672, 4.2672)})
  (width 0.5)
  (layer "B.Cu")
  (net ${isRtl ? p.power.index : p.gnd.index})
)`;
    return key + key_label + diode + diode_label + led + led_label + cap + cap_label + routes;
  }
};