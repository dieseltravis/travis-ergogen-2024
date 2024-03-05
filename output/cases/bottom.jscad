function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[12.475,-186.525],[12.475,-68.225]]).appendArc([15.475,-65.225],{"radius":3,"clockwise":true,"large":false}).appendPoint([411.9084469,-65.225]).appendArc([414.8955899,-68.5024466],{"radius":3,"clockwise":true,"large":false}).appendPoint([408.5966509,-136.320288]).appendArc([407.7308282,-138.1641617],{"radius":3,"clockwise":true,"large":false}).appendPoint([374.7938997,-171.1010902]).appendArc([374.1000352,-171.6184002],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.2067186,-193.2000305]).appendArc([332.487157,-193.5471454],{"radius":3,"clockwise":true,"large":false}).appendPoint([291.5207047,-189.5392548]).appendArc([291.2285989,-189.525],{"radius":3,"clockwise":false,"large":false}).appendPoint([15.475,-189.525]).appendArc([12.475,-186.525],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        