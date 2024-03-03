function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[14.5,-185.5],[14.5,-69.5]]).appendArc([16.5,-67.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([403.4395604,-67.5]).appendArc([405.4394303,-69.5228082],{"radius":2,"clockwise":true,"large":false}).appendPoint([404.6738101,-136.6541482]).appendArc([404.0881538,-138.0455536],{"radius":2,"clockwise":true,"large":false}).appendPoint([373.758189,-168.3755184]).appendArc([373.2950744,-168.7206827],{"radius":2,"clockwise":true,"large":false}).appendPoint([333.0227065,-190.491452]).appendArc([331.9130093,-190.7257758],{"radius":2,"clockwise":true,"large":false}).appendPoint([291.4416746,-187.5062983]).appendArc([291.2830764,-187.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([16.5,-187.5]).appendArc([14.5,-185.5],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

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

        