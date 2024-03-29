# Travis's Ergogen Keyboard 2024 #
Built with Ergogen v4. *Alpha* quality!

![keyboard plate outline](./output/outlines/plate.svg)

![rough keyboard key and led mapping](./datasheets/plate-legend.webp)

![PCB front](./output/pcbs/travis_erg2024-front.png)

![PCB back](./output/pcbs/travis_erg2024-back.png)

## Project Details ##
* `/config.yaml`
* `/package.json` yarn commands and metadata
* `/output/outlines/` generated 2d models
* `/output/cases/` generated 3d models
* `/output/pcbs/` generated PCB
* `/footprints/travis/` Custom parts' footprints
    * `/footprints/travis/travis.pretty/` KiCad footprints
* `/key/` generator for individual key footprint (key-module.js)
    * `/keytest/` test for individual key footprint
* `/datasheets/` PDFs for some of the parts used

## References ##
* Ergogen project: https://github.com/ergogen/ergogen/
    * https://ergogen.cache.works/
    * https://ergogen.xyz/
* FlatFootFox's Let's Design A Keyboard With Ergogen v4 https://flatfootfox.com/ergogen-introduction/
* Footprints:
    * ceoloide's Ergogen PCB footprints https://github.com/ceoloide/ergogen-footprints
    * infused-kim's Ergogen PCB footprints https://github.com/infused-kim/kb_ergogen_fp/
    * TildeWill's Ergogen PCB footprints https://github.com/TildeWill/ergogen_footprints
    * MvEerd https://github.com/MvEerd/ergogen/tree/mveerd/src/footprints
    * daprice's keyswitches.pretty https://github.com/daprice/keyswitches.pretty
    * joe-scotto's scottokeebs: https://github.com/joe-scotto/scottokeebs/tree/main/Extras/ScottoKicad
    * Convert Kicad Footprints to Ergogen https://nilnil.notion.site/Convert-Kicad-Footprints-to-Ergogen-8340ce87ad554c69af4e3f92bc9a0898
    * KiCad Footprints: https://kicad.github.io/footprints/
* Other helpful build guides:
    * ceoloide's corney-island build https://github.com/ceoloide/corney-island
    * Kimiko Build Guide https://keycapsss.com/help/kimiko/buildguide_en
    * Nullbits Nibble https://github.com/nullbitsco/docs/blob/main/nibble/build_guide_en.md
    * Lagom https://github.com/mohoyt/lagom/
    * Sundown-keyboard https://github.com/Richiban/Sundown-keyboard/
    * Mantis hex ergo keyboard https://github.com/fxkuehl/mantis/
    * Sofle Keyboard https://github.com/josefadamcik/SofleKeyboard