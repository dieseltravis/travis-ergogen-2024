function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[11.756821,-103.819115],[22.5927728,-60.7261328]]).appendArc([25.4673306,-58.4579263],{"radius":3,"clockwise":true,"large":false}).appendPoint([36.6064086,-58.3284411]).appendArc([36.7543704,-58.3230673],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7532333,-55.8808276]).appendArc([76.8138861,-55.8777401],{"radius":3,"clockwise":true,"large":false}).appendPoint([97.6993232,-55.0264404]).appendArc([98.0358986,-55.0316221],{"radius":3,"clockwise":true,"large":false}).appendPoint([118.8823972,-56.5252398]).appendArc([118.9520341,-56.529416],{"radius":3,"clockwise":false,"large":false}).appendPoint([151.0795246,-58.0814683]).appendArc([152.8150738,-58.7403591],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.7779057,-62.7323139]).appendArc([159.6727408,-63.394664],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.5146676,-63.3615325]).appendArc([168.3939619,-62.6882478],{"radius":3,"clockwise":false,"large":false}).appendPoint([173.3388503,-58.6633127]).appendArc([175.0701365,-57.9943989],{"radius":3,"clockwise":true,"large":false}).appendPoint([206.5655504,-56.2855185]).appendArc([206.6819051,-56.2769333],{"radius":3,"clockwise":false,"large":false}).appendPoint([227.4663064,-54.3363424]).appendArc([227.8026916,-54.323902],{"radius":3,"clockwise":true,"large":false}).appendPoint([248.6921052,-54.724323]).appendArc([248.7751959,-54.7270679],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.8227011,-56.6058395]).appendArc([288.9457989,-56.6090844],{"radius":3,"clockwise":false,"large":false}).appendPoint([404.1822576,-57.2808513]).appendArc([407.1647184,-60.2982885],{"radius":3,"clockwise":true,"large":false}).appendPoint([406.8723345,-110.4545027]).appendArc([406.753328,-111.2737763],{"radius":3,"clockwise":true,"large":false}).appendPoint([399.6472208,-135.7398587]).appendArc([398.9839731,-136.9234508],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.947172,-200.6290769]).appendArc([337.605289,-201.3901257],{"radius":3,"clockwise":true,"large":false}).appendPoint([301.1849301,-186.669732]).appendArc([300.0782301,-186.4511856],{"radius":3,"clockwise":false,"large":false}).appendPoint([269.2106359,-186.2712441]).appendArc([268.9460191,-186.2580018],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.380213,-184.5043953]).appendArc([250.1034234,-184.4911067],{"radius":3,"clockwise":false,"large":false}).appendPoint([218.1554179,-184.4345016]).appendArc([217.6243756,-184.4809209],{"radius":3,"clockwise":false,"large":false}).appendPoint([206.7085602,-186.4239008]).appendArc([206.3961666,-186.4627299],{"radius":3,"clockwise":true,"large":false}).appendPoint([166.1732505,-189.3302868]).appendArc([165.9641121,-189.3378787],{"radius":3,"clockwise":true,"large":false}).appendPoint([160.3426935,-189.3457394]).appendArc([160.142508,-189.3393334],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.8558477,-186.7017651]).appendArc([119.6288101,-186.6781988],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.6049695,-185.1080455]).appendArc([108.1283799,-185.0785485],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.1768162,-185.6490973]).appendArc([75.8782757,-185.6693534],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.3956966,-187.8537016]).appendArc([57.0784655,-187.8742331],{"radius":3,"clockwise":true,"large":false}).appendPoint([26.3187039,-188.2317974]).appendArc([23.7657558,-186.862732],{"radius":3,"clockwise":true,"large":false}).appendPoint([12.8908436,-170.0703536]).appendArc([12.4091237,-168.4744924],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.6664523,-104.5855767]).appendArc([11.756821,-103.8191151],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board3d_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        