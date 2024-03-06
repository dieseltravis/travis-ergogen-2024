function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[28.4736007,-184.6306276],[20.2285881,-66.721457]]).appendArc([23.2451444,-63.5122824],{"radius":3,"clockwise":true,"large":false}).appendPoint([443.4945824,-66.8553492]).appendArc([446.4015967,-70.495529],{"radius":3,"clockwise":true,"large":false}).appendPoint([432.8478818,-132.5381161]).appendArc([432.1464379,-133.9052333],{"radius":3,"clockwise":true,"large":false}).appendPoint([400.9190698,-168.5867392]).appendArc([399.9116391,-169.3191843],{"radius":3,"clockwise":true,"large":false}).appendPoint([358.4681982,-187.8035136]).appendArc([356.7767059,-188.0267123],{"radius":3,"clockwise":true,"large":false}).appendPoint([313.9414179,-181.2395246]).appendArc([313.4057739,-181.2032898],{"radius":3,"clockwise":false,"large":false}).appendPoint([31.5324483,-187.4206286]).appendArc([28.4736008,-184.6306276],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        