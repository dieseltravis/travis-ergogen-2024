function board3d_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[28.4736007,-184.6306276],[20.2285881,-66.721457]]).appendArc([23.2451444,-63.5122824],{"radius":3,"clockwise":true,"large":false}).appendPoint([443.4945824,-66.8553492]).appendArc([446.4015967,-70.495529],{"radius":3,"clockwise":true,"large":false}).appendPoint([432.8478818,-132.5381161]).appendArc([432.1464379,-133.9052333],{"radius":3,"clockwise":true,"large":false}).appendPoint([400.9190698,-168.5867392]).appendArc([399.9116391,-169.3191843],{"radius":3,"clockwise":true,"large":false}).appendPoint([358.4681982,-187.8035136]).appendArc([356.7767059,-188.0267123],{"radius":3,"clockwise":true,"large":false}).appendPoint([313.9414179,-181.2395246]).appendArc([313.4057739,-181.2032898],{"radius":3,"clockwise":false,"large":false}).appendPoint([31.5324483,-187.4206286]).appendArc([28.4736008,-184.6306276],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[13.36389,-103.7856851],[21.1919214,-60.2419729]]).appendArc([24.0075302,-57.7759181],{"radius":3,"clockwise":true,"large":false}).appendPoint([151.1676943,-51.9604333]).appendArc([153.2171842,-52.6458939],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.6639784,-56.325122]).appendArc([159.5828948,-57.013708],{"radius":3,"clockwise":false,"large":false}).appendPoint([178.82224,-56.9721262]).appendArc([180.8076904,-56.2153892],{"radius":3,"clockwise":false,"large":false}).appendPoint([185.050459,-52.4479563]).appendArc([187.1532908,-51.6932627],{"radius":3,"clockwise":true,"large":false}).appendPoint([442.5225437,-61.139652]).appendArc([445.4002304,-64.3990687],{"radius":3,"clockwise":true,"large":false}).appendPoint([441.2346082,-112.0123489]).appendArc([440.8815217,-113.1841132],{"radius":3,"clockwise":true,"large":false}).appendPoint([430.0228538,-133.1515777]).appendArc([429.6167907,-133.725738],{"radius":3,"clockwise":true,"large":false}).appendPoint([400.7710414,-165.7621884]).appendArc([399.7636107,-166.4946335],{"radius":3,"clockwise":true,"large":false}).appendPoint([358.287182,-184.9936758]).appendArc([356.6615942,-185.2265682],{"radius":3,"clockwise":true,"large":false}).appendPoint([311.9801593,-179.1605231]).appendArc([311.5102342,-179.1339861],{"radius":3,"clockwise":false,"large":false}).appendPoint([32.1266084,-185.3137128]).appendArc([29.6080297,-184.0426046],{"radius":3,"clockwise":true,"large":false}).appendPoint([18.1850133,-167.8334683]).appendArc([17.6445587,-166.3145796],{"radius":3,"clockwise":true,"large":false}).appendPoint([13.323864,-104.5257674]).appendArc([13.36389,-103.7856851],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = board3d_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        