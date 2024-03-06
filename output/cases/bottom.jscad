function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[28.4733147,-184.6265379],[20.2284954,-66.7201315]]).appendArc([23.2438259,-63.5109474],{"radius":3,"clockwise":true,"large":false}).appendPoint([435.9709185,-66.6255334]).appendArc([438.8791586,-70.2657227],{"radius":3,"clockwise":true,"large":false}).appendPoint([425.3257731,-132.306802]).appendArc([424.6243292,-133.6739192],{"radius":3,"clockwise":true,"large":false}).appendPoint([393.3969611,-168.355425]).appendArc([392.3895304,-169.0878701],{"radius":3,"clockwise":true,"large":false}).appendPoint([350.9460894,-187.5721995]).appendArc([349.2545971,-187.7953982],{"radius":3,"clockwise":true,"large":false}).appendPoint([306.4214464,-181.0085491]).appendArc([305.8815109,-180.972412],{"radius":3,"clockwise":false,"large":false}).appendPoint([31.5364538,-187.4164412]).appendArc([28.4733148,-184.6265379],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        