function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[12.475,-186.525],[12.475,-68.475]]).appendArc([15.475,-65.475],{"radius":3,"clockwise":true,"large":false}).appendPoint([390.3561745,-65.475]).appendArc([393.3518923,-68.3147661],{"radius":3,"clockwise":true,"large":false}).appendPoint([396.9793531,-136.1334801]).appendArc([396.1049556,-138.4150343],{"radius":3,"clockwise":true,"large":false}).appendPoint([363.3838758,-171.1361141]).appendArc([362.689204,-171.6538607],{"radius":3,"clockwise":true,"large":false}).appendPoint([322.8675582,-193.1809749]).appendArc([321.0743841,-193.5194337],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.8075734,-189.5474743]).appendArc([288.4410478,-189.525],{"radius":3,"clockwise":false,"large":false}).appendPoint([15.475,-189.525]).appendArc([12.475,-186.525],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        