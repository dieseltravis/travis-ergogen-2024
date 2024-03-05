function board3d_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[12.475,-186.525],[12.475,-68.225]]).appendArc([15.475,-65.225],{"radius":3,"clockwise":true,"large":false}).appendPoint([411.9084469,-65.225]).appendArc([414.8955899,-68.5024466],{"radius":3,"clockwise":true,"large":false}).appendPoint([408.5966509,-136.320288]).appendArc([407.7308282,-138.1641617],{"radius":3,"clockwise":true,"large":false}).appendPoint([374.7938997,-171.1010902]).appendArc([374.1000352,-171.6184002],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.2067186,-193.2000305]).appendArc([332.487157,-193.5471454],{"radius":3,"clockwise":true,"large":false}).appendPoint([291.5207047,-189.5392548]).appendArc([291.2285989,-189.525],{"radius":3,"clockwise":false,"large":false}).appendPoint([15.475,-189.525]).appendArc([12.475,-186.525],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[3.041554,-104.9629545],[13.9023504,-62.0145125]]).appendArc([16.8107964,-59.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([133.7242979,-59.75]).appendArc([135.5960995,-60.4055685],{"radius":3,"clockwise":true,"large":false}).appendPoint([140.2164004,-64.0944315]).appendArc([142.0882021,-64.75],{"radius":3,"clockwise":false,"large":false}).appendPoint([161.7617979,-64.75]).appendArc([163.6335995,-64.0944315],{"radius":3,"clockwise":false,"large":false}).appendPoint([168.2539004,-60.4055685]).appendArc([170.1257021,-59.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([410.2,-59.75]).appendArc([413.2,-62.75],{"radius":3,"clockwise":true,"large":false}).appendPoint([413.2,-110.900372]).appendArc([413.0821549,-111.7329482],{"radius":3,"clockwise":true,"large":false}).appendPoint([405.8825273,-136.6561259]).appendArc([405.1216928,-137.94487],{"radius":3,"clockwise":true,"large":false}).appendPoint([374.7938997,-168.2726631]).appendArc([374.1000352,-168.7899731],{"radius":3,"clockwise":true,"large":false}).appendPoint([334.1735251,-190.3895605]).appendArc([332.5229734,-190.7426234],{"radius":3,"clockwise":true,"large":false}).appendPoint([289.4863932,-187.5333068]).appendArc([289.2632973,-187.525],{"radius":3,"clockwise":false,"large":false}).appendPoint([16.1663311,-187.525]).appendArc([13.5995168,-186.077889],{"radius":3,"clockwise":true,"large":false}).appendPoint([3.3831857,-169.191025]).appendArc([2.95,-167.638136],{"radius":3,"clockwise":true,"large":false}).appendPoint([2.95,-105.698442]).appendArc([3.041554,-104.9629545],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        