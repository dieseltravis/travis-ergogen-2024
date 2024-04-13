// MountingHole_2.2mm_M2_Pad_Via
// TODO: add more sizes as param?
module.exports = {
    nets: {
        net: undefined
    },
    params: {
        designator: 'HOLE',
        side: 'F',
        class: 'HOLE',
        pad: 1
    },
    body: p => `
    (module "travis:MountingHole_2.2mm_M2_Pad_Via" (layer "${p.side}.Cu")
      ${p.at /* parametric position */} 
    
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "${p.side}.SilkS") ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      (fp_circle (center 0 0) (end 2.45 0) (layer "${p.side}.CrtYd") (width 0.05) (fill none))
      (pad "${p.pad}" thru_hole circle locked (at 1.166726 1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at 0 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at 0 1.65) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at 1.166726 -1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at -1.65 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at -1.166726 -1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at -1.166726 1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at 1.65 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
      (pad "${p.pad}" thru_hole circle locked (at 0 -1.65) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask))
    )`
};