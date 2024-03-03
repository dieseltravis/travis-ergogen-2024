function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[12.475,-187.525],[12.475,-67.475]]).appendArc([14.475,-65.475],{"radius":2,"clockwise":true,"large":false}).appendPoint([405.488633,-65.475]).appendArc([407.4886327,-67.4738666],{"radius":2,"clockwise":true,"large":false}).appendPoint([407.5278274,-136.6401016]).appendArc([406.9420413,-138.0554486],{"radius":2,"clockwise":true,"large":false}).appendPoint([373.758189,-171.2393009]).appendArc([373.2950744,-171.5844652],{"radius":2,"clockwise":true,"large":false}).appendPoint([333.0470439,-193.342078]).appendArc([331.8868729,-193.5717423],{"radius":2,"clockwise":true,"large":false}).appendPoint([293.4917489,-189.5359578]).appendArc([293.2826769,-189.525],{"radius":2,"clockwise":false,"large":false}).appendPoint([14.475,-189.525]).appendArc([12.475,-187.525],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        