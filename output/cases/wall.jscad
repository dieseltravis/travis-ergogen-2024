function board3d_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[28.4733147,-184.6265379],[20.2284954,-66.7201315]]).appendArc([23.2438259,-63.5109474],{"radius":3,"clockwise":true,"large":false}).appendPoint([435.9709185,-66.6255334]).appendArc([438.8791586,-70.2657227],{"radius":3,"clockwise":true,"large":false}).appendPoint([425.3257731,-132.306802]).appendArc([424.6243292,-133.6739192],{"radius":3,"clockwise":true,"large":false}).appendPoint([393.3969611,-168.355425]).appendArc([392.3895304,-169.0878701],{"radius":3,"clockwise":true,"large":false}).appendPoint([350.9460894,-187.5721995]).appendArc([349.2545971,-187.7953982],{"radius":3,"clockwise":true,"large":false}).appendPoint([306.4214464,-181.0085491]).appendArc([305.8815109,-180.972412],{"radius":3,"clockwise":false,"large":false}).appendPoint([31.5364538,-187.4164412]).appendArc([28.4733148,-184.6265379],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[13.36389,-103.7856851],[21.1919214,-60.2419729]]).appendArc([24.0075302,-57.7759181],{"radius":3,"clockwise":true,"large":false}).appendPoint([151.1676943,-51.9604333]).appendArc([153.2171842,-52.6458939],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.6406975,-56.3058597]).appendArc([159.6128927,-56.9938574],{"radius":3,"clockwise":false,"large":false}).appendPoint([171.3307083,-56.7603822]).appendArc([173.2628799,-56.0042335],{"radius":3,"clockwise":false,"large":false}).appendPoint([177.5283503,-52.2166421]).appendArc([179.6311821,-51.4619485],{"radius":3,"clockwise":true,"large":false}).appendPoint([435.000435,-60.9083378]).appendArc([437.8781217,-64.1677545],{"radius":3,"clockwise":true,"large":false}).appendPoint([433.7124995,-111.7810347]).appendArc([433.359413,-112.952799],{"radius":3,"clockwise":true,"large":false}).appendPoint([422.5007451,-132.9202636]).appendArc([422.094682,-133.4944239],{"radius":3,"clockwise":true,"large":false}).appendPoint([393.2489327,-165.5308742]).appendArc([392.241502,-166.2633193],{"radius":3,"clockwise":true,"large":false}).appendPoint([350.7650732,-184.7623617]).appendArc([349.1394854,-184.9952541],{"radius":3,"clockwise":true,"large":false}).appendPoint([304.4602228,-178.9295039]).appendArc([303.9859417,-178.9030664],{"radius":3,"clockwise":false,"large":false}).appendPoint([32.1293527,-185.3113263]).appendArc([29.606418,-184.0403176],{"radius":3,"clockwise":true,"large":false}).appendPoint([18.1850133,-167.8334683]).appendArc([17.6445587,-166.3145796],{"radius":3,"clockwise":true,"large":false}).appendPoint([13.323864,-104.5257674]).appendArc([13.36389,-103.7856851],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        