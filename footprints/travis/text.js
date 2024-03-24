// Copyright (c) 2023 Marco Massarelli
//
// SPDX-License-Identifier: CC-BY-NC-SA-4.0
//
// To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
//
// Authors: @infused-kim + @ceoloide improvements
//
// Description:
//  Allows you to place text on the PCB's Silkscreen
//  layer, and optionally make it reversible on the
//  opposite side.
//
// Params:
//    side: default is F for Front
//      the side on which to place the single-side footprint and designator, either F or B
//    reversible: default is false
//      Adds a mirrored text on the opposite side of the board
//    thickness: default is 0.15
//      The thickness of the stroke for the text
//    size: default is 1
//      The text size both vertical and horizontal
//    text:
//      The text to display
//
// @ceoloide's improvements:
//  - Add ability to set text on both sides
//  - Add ability to adjust font thickness and size
//
// Travis's changes:
//  - Font face
//  - Bold, italic

module.exports = {
  params: {
    designator: 'TXT',
    side: 'F',
    layer: 'SilkS', // use Mask and Cu for metal text
    reversible: false,
    thickness: 0.15,
    size: 1,
    bold: false,
    italic: false,
    align: '',
    face: '',   // default is KiCad Font
    text: ''
  },
  body: p => {
    const generate_text = (side, layer, mirror, thickness, size, text, face, bold, italic) => {
      let justify = '';
      if (p.align || (mirror && side != p.side)) {
        justify = ` (justify ${p.align}${mirror && side != p.side ? ' mirror' : ''})`;
      }
      const gr_text = `
      (gr_text "${text}" ${p.at} (layer ${side}.${layer})
        (effects (font${face && face.length ? " (face \"" + face + "\")" : "" } (size ${size} ${size}) (thickness ${thickness})${ bold ? " (bold yes)" : ""}${ italic ? " (italic yes)" : ""})${justify})
      )`;
      return gr_text;
    };

    let final = '';
    if (p.reversible) {
      final += generate_text(p.side, p.layer, false, p.thickness, p.size, p.text, p.face, p.bold, p.italic);
      final += generate_text((p.side == 'F' ? 'B' : 'F'), p.layer, true, p.thickness, p.size, p.text, p.face, p.bold, p.italic);
    } else {
      final += generate_text(p.side, p.layer, false, p.thickness, p.size, p.text, p.face, p.bold, p.italic);
    }
    return final;
  }
};
