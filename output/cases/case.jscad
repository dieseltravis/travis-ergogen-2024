function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[25.8771625,-173.4603532],"radius":2.5})
.union(
    CAG.circle({"center":[317.1418314,-185.9662108],"radius":2.5})
).union(
    CAG.circle({"center":[398.4751154,-124.7916516],"radius":2.5})
).union(
    CAG.circle({"center":[412.1055918,-74.3869609],"radius":2.5})
).union(
    CAG.circle({"center":[163.7676778,-156.6761783],"radius":2.5})
).union(
    CAG.circle({"center":[164.0168889,-99.5615362],"radius":2.5})
).union(
    CAG.circle({"center":[25.6525833,-64.5707292],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[25.8771625,-173.4603532],"radius":1.5})
.union(
    CAG.circle({"center":[317.1418314,-185.9662108],"radius":1.5})
).union(
    CAG.circle({"center":[398.4751154,-124.7916516],"radius":1.5})
).union(
    CAG.circle({"center":[412.1055918,-74.3869609],"radius":1.5})
).union(
    CAG.circle({"center":[163.7676778,-156.6761783],"radius":1.5})
).union(
    CAG.circle({"center":[164.0168889,-99.5615362],"radius":1.5})
).union(
    CAG.circle({"center":[25.6525833,-64.5707292],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[8.0184618,-102.1698206],[17.7545355,-58.6728808]]).appendArc([20.53816,-56.3316214],{"radius":3,"clockwise":true,"large":false}).appendPoint([32.7056996,-55.7471725]).appendArc([32.8187669,-55.7395987],{"radius":3,"clockwise":false,"large":false}).appendPoint([74.8219815,-52.1280252]).appendArc([74.9002542,-52.1223253],{"radius":3,"clockwise":true,"large":false}).appendPoint([95.7745586,-50.8764984]).appendArc([96.1109372,-50.8753148],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.0102901,-51.9750936]).appendArc([117.0584665,-51.9772406],{"radius":3,"clockwise":false,"large":false}).appendPoint([152.2963514,-53.2639654]).appendArc([153.9837884,-53.8596531],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.4946223,-57.9817096]).appendArc([161.2916727,-58.5793955],{"radius":3,"clockwise":false,"large":false}).appendPoint([167.1144177,-58.5791233]).appendArc([168.8901558,-57.9970267],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.4608831,-53.9054933]).appendArc([176.1256065,-53.3254566],{"radius":3,"clockwise":true,"large":false}).appendPoint([210.7678853,-52.0410219]).appendArc([210.8354594,-52.0377531],{"radius":3,"clockwise":false,"large":false}).appendPoint([231.7151659,-50.7916039]).appendArc([232.0515445,-50.7904203],{"radius":3,"clockwise":true,"large":false}).appendPoint([252.9357867,-51.8894037]).appendArc([253.0140954,-51.8945524],{"radius":3,"clockwise":true,"large":false}).appendPoint([295.0699075,-55.2126399]).appendArc([295.1332522,-55.2169637],{"radius":3,"clockwise":false,"large":false}).appendPoint([316.1367753,-56.4274679]).appendArc([316.1890194,-56.4309366],{"radius":3,"clockwise":true,"large":false}).appendPoint([337.1737673,-58.0082351]).appendArc([337.225943,-58.012615],{"radius":3,"clockwise":true,"large":false}).appendPoint([358.1812255,-59.9560248]).appendArc([358.2307927,-59.9610371],{"radius":3,"clockwise":true,"large":false}).appendPoint([417.0044641,-66.3978009]).appendArc([419.6600324,-69.7065706],{"radius":3,"clockwise":true,"large":false}).appendPoint([414.0371677,-121.0485823]).appendArc([413.3342577,-122.672617],{"radius":3,"clockwise":true,"large":false}).appendPoint([401.7693178,-136.1859028]).appendArc([401.6751717,-136.2908163],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.7979644,-201.0051939]).appendArc([337.4995661,-201.7354295],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.587027,-187.7833032]).appendArc([301.6438201,-187.5739128],{"radius":3,"clockwise":false,"large":false}).appendPoint([287.6571845,-186.7796941]).appendArc([287.6045327,-186.7771681],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.9815796,-186.0476657]).appendArc([268.7169343,-186.0255354],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.2393867,-183.6529638]).appendArc([249.9601905,-183.6302989],{"radius":3,"clockwise":false,"large":false}).appendPoint([217.1145249,-182.5032954]).appendArc([216.457941,-182.5530725],{"radius":3,"clockwise":false,"large":false}).appendPoint([207.8601386,-184.1677036]).appendArc([207.4668185,-184.2149547],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.1409046,-186.5345912]).appendPoint([162.5342171,-186.5410566]).appendPoint([119.1227197,-183.836728]).appendArc([118.9419316,-183.8199609],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.1287618,-182.7327195]).appendArc([109.6548008,-182.7120445],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7376581,-183.8829774]).appendArc([76.4355914,-183.9090529],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.9910435,-186.4455616]).appendArc([57.7266151,-186.4700615],{"radius":3,"clockwise":true,"large":false}).appendPoint([39.0846208,-187.3676999]).appendPoint([26.1923812,-187.9869586]).appendArc([23.6236795,-186.7569079],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.6804879,-170.3631622]).appendArc([11.1087101,-168.740602],{"radius":3,"clockwise":true,"large":false}).appendPoint([7.9494754,-102.9690407]).appendArc([8.0184618,-102.1698206],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function board3d_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[8.0184618,-102.1698206],[17.7545355,-58.6728808]]).appendArc([20.53816,-56.3316214],{"radius":3,"clockwise":true,"large":false}).appendPoint([32.7056996,-55.7471725]).appendArc([32.8187669,-55.7395987],{"radius":3,"clockwise":false,"large":false}).appendPoint([74.8219815,-52.1280252]).appendArc([74.9002542,-52.1223253],{"radius":3,"clockwise":true,"large":false}).appendPoint([95.7745586,-50.8764984]).appendArc([96.1109372,-50.8753148],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.0102901,-51.9750936]).appendArc([117.0584665,-51.9772406],{"radius":3,"clockwise":false,"large":false}).appendPoint([152.2963514,-53.2639654]).appendArc([153.9837884,-53.8596531],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.4946223,-57.9817096]).appendArc([161.2916727,-58.5793955],{"radius":3,"clockwise":false,"large":false}).appendPoint([167.1144177,-58.5791233]).appendArc([168.8901558,-57.9970267],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.4608831,-53.9054933]).appendArc([176.1256065,-53.3254566],{"radius":3,"clockwise":true,"large":false}).appendPoint([210.7678853,-52.0410219]).appendArc([210.8354594,-52.0377531],{"radius":3,"clockwise":false,"large":false}).appendPoint([231.7151659,-50.7916039]).appendArc([232.0515445,-50.7904203],{"radius":3,"clockwise":true,"large":false}).appendPoint([252.9357867,-51.8894037]).appendArc([253.0140954,-51.8945524],{"radius":3,"clockwise":true,"large":false}).appendPoint([295.0699075,-55.2126399]).appendArc([295.1332522,-55.2169637],{"radius":3,"clockwise":false,"large":false}).appendPoint([316.1367753,-56.4274679]).appendArc([316.1890194,-56.4309366],{"radius":3,"clockwise":true,"large":false}).appendPoint([337.1737673,-58.0082351]).appendArc([337.225943,-58.012615],{"radius":3,"clockwise":true,"large":false}).appendPoint([358.1812255,-59.9560248]).appendArc([358.2307927,-59.9610371],{"radius":3,"clockwise":true,"large":false}).appendPoint([417.0044641,-66.3978009]).appendArc([419.6600324,-69.7065706],{"radius":3,"clockwise":true,"large":false}).appendPoint([414.0371677,-121.0485823]).appendArc([413.3342577,-122.672617],{"radius":3,"clockwise":true,"large":false}).appendPoint([401.7693178,-136.1859028]).appendArc([401.6751717,-136.2908163],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.7979644,-201.0051939]).appendArc([337.4995661,-201.7354295],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.587027,-187.7833032]).appendArc([301.6438201,-187.5739128],{"radius":3,"clockwise":false,"large":false}).appendPoint([287.6571845,-186.7796941]).appendArc([287.6045327,-186.7771681],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.9815796,-186.0476657]).appendArc([268.7169343,-186.0255354],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.2393867,-183.6529638]).appendArc([249.9601905,-183.6302989],{"radius":3,"clockwise":false,"large":false}).appendPoint([217.1145249,-182.5032954]).appendArc([216.457941,-182.5530725],{"radius":3,"clockwise":false,"large":false}).appendPoint([207.8601386,-184.1677036]).appendArc([207.4668185,-184.2149547],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.1409046,-186.5345912]).appendPoint([162.5342171,-186.5410566]).appendPoint([119.1227197,-183.836728]).appendArc([118.9419316,-183.8199609],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.1287618,-182.7327195]).appendArc([109.6548008,-182.7120445],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7376581,-183.8829774]).appendArc([76.4355914,-183.9090529],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.9910435,-186.4455616]).appendArc([57.7266151,-186.4700615],{"radius":3,"clockwise":true,"large":false}).appendPoint([39.0846208,-187.3676999]).appendPoint([26.1923812,-187.9869586]).appendArc([23.6236795,-186.7569079],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.6804879,-170.3631622]).appendArc([11.1087101,-168.740602],{"radius":3,"clockwise":true,"large":false}).appendPoint([7.9494754,-102.9690407]).appendArc([8.0184618,-102.1698206],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[11.0966369,-104.0525185],[19.8843399,-60.632456]]).appendArc([22.6807895,-58.2310094],{"radius":3,"clockwise":true,"large":false}).appendPoint([32.801519,-57.7448759]).appendArc([32.9148593,-57.7372786],{"radius":3,"clockwise":false,"large":false}).appendPoint([74.8481627,-54.1278572]).appendArc([74.9264345,-54.1221502],{"radius":3,"clockwise":true,"large":false}).appendPoint([95.7655968,-52.8765089]).appendArc([96.1024452,-52.8753192],{"radius":3,"clockwise":true,"large":false}).appendPoint([116.9663257,-53.9745985]).appendArc([117.0151657,-53.9767729],{"radius":3,"clockwise":false,"large":false}).appendPoint([150.1012236,-55.1797544]).appendArc([151.9546185,-55.9086361],{"radius":3,"clockwise":true,"large":false}).appendPoint([156.3748773,-59.7313739]).appendArc([158.3315946,-60.4622312],{"radius":3,"clockwise":false,"large":false}).appendPoint([170.0517149,-60.4844344]).appendArc([171.999922,-59.7706158],{"radius":3,"clockwise":false,"large":false}).appendPoint([176.4724175,-55.9704142]).appendArc([178.3025758,-55.2586953],{"radius":3,"clockwise":true,"large":false}).appendPoint([210.7945327,-54.0408466]).appendArc([210.8611699,-54.0376066],{"radius":3,"clockwise":false,"large":false}).appendPoint([231.7062041,-52.7916144]).appendArc([232.0430525,-52.7904247],{"radius":3,"clockwise":true,"large":false}).appendPoint([252.8921573,-53.8889253]).appendArc([252.9704654,-53.8940791],{"radius":3,"clockwise":true,"large":false}).appendPoint([294.9564078,-57.2094122]).appendArc([295.0199868,-57.2137536],{"radius":3,"clockwise":false,"large":false}).appendPoint([315.9885571,-58.4219686]).appendArc([316.0408012,-58.4254366],{"radius":3,"clockwise":true,"large":false}).appendPoint([336.9907576,-59.9998448]).appendArc([337.0429333,-60.004224],{"radius":3,"clockwise":true,"large":false}).appendPoint([357.9634772,-61.9441363]).appendArc([358.0130834,-61.9491524],{"radius":3,"clockwise":true,"large":false}).appendPoint([414.7986176,-68.1681798]).appendArc([417.4541859,-71.4769495],{"radius":3,"clockwise":true,"large":false}).appendPoint([412.2610213,-118.8953975]).appendArc([411.620112,-120.4445642],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.970873,-136.2328497]).appendArc([398.8147262,-136.4126313],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.6638392,-198.2288449]).appendArc([337.4553506,-198.9933495],{"radius":3,"clockwise":true,"large":false}).appendPoint([300.6629081,-185.6416584]).appendArc([299.809611,-185.466537],{"radius":3,"clockwise":false,"large":false}).appendPoint([287.7705417,-184.7829091]).appendArc([287.7179391,-184.7803851],{"radius":3,"clockwise":false,"large":false}).appendPoint([269.0598072,-184.0491983]).appendArc([268.795743,-184.0271383],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.279943,-181.6530205]).appendArc([250.0069289,-181.6306231],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.0465588,-180.5098901]).appendArc([218.5399104,-180.5344608],{"radius":3,"clockwise":false,"large":false}).appendPoint([205.7178704,-182.2512256]).appendArc([205.4911058,-182.2728621],{"radius":3,"clockwise":true,"large":false}).appendPoint([168.167975,-184.4082201]).appendArc([167.9877998,-184.413105],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.7102594,-184.3858369]).appendArc([158.5215885,-184.3793426],{"radius":3,"clockwise":true,"large":false}).appendPoint([121.1478949,-181.9137054]).appendArc([121.0702843,-181.9075728],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.095643,-180.7127701]).appendArc([107.7063696,-180.7023037],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7073741,-181.8829239]).appendArc([76.4134608,-181.9086361],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.9296814,-184.4465618]).appendArc([57.6658314,-184.470978],{"radius":3,"clockwise":true,"large":false}).appendPoint([38.9888798,-185.3699927]).appendPoint([28.1674717,-185.8897823]).appendArc([25.5341838,-184.5674888],{"radius":3,"clockwise":true,"large":false}).appendPoint([14.519418,-168.1902324]).appendArc([14.0122263,-166.659915],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.0404756,-104.7915513]).appendArc([11.0966369,-104.0525184],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = bottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        