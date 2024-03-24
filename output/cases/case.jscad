function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[25.0012498,-174.7884812],"radius":2.5})
.union(
    CAG.circle({"center":[310.4584402,-186.9938995],"radius":2.5})
).union(
    CAG.circle({"center":[387.5221788,-120.4194338],"radius":2.5})
).union(
    CAG.circle({"center":[393.1171639,-64.9743329],"radius":2.5})
).union(
    CAG.circle({"center":[171.552086,-155.6647173],"radius":2.5})
).union(
    CAG.circle({"center":[146.3024871,-155.6733551],"radius":2.5})
).union(
    CAG.circle({"center":[168.8101359,-98.5805321],"radius":2.5})
).union(
    CAG.circle({"center":[149.0444372,-98.5891699],"radius":2.5})
).union(
    CAG.circle({"center":[29.0518305,-65.9739903],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[25.0012498,-174.7884812],"radius":1.5})
.union(
    CAG.circle({"center":[310.4584402,-186.9938995],"radius":1.5})
).union(
    CAG.circle({"center":[387.5221788,-120.4194338],"radius":1.5})
).union(
    CAG.circle({"center":[393.1171639,-64.9743329],"radius":1.5})
).union(
    CAG.circle({"center":[171.552086,-155.6647173],"radius":1.5})
).union(
    CAG.circle({"center":[146.3024871,-155.6733551],"radius":1.5})
).union(
    CAG.circle({"center":[168.8101359,-98.5805321],"radius":1.5})
).union(
    CAG.circle({"center":[149.0444372,-98.5891699],"radius":1.5})
).union(
    CAG.circle({"center":[29.0518305,-65.9739903],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[11.4559825,-103.8527415],[22.4167395,-60.7913349]]).appendArc([25.2978568,-58.5314661],{"radius":3,"clockwise":true,"large":false}).appendPoint([36.4372635,-58.4342539]).appendArc([36.5852403,-58.4293088],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.591014,-56.1029656]).appendArc([76.6516755,-56.1000539],{"radius":3,"clockwise":true,"large":false}).appendPoint([97.539488,-55.3092681]).appendArc([97.8760469,-55.3154249],{"radius":3,"clockwise":true,"large":false}).appendPoint([118.7208859,-56.8696391]).appendArc([118.7850028,-56.8737298],{"radius":3,"clockwise":false,"large":false}).appendPoint([150.8110953,-58.5729357]).appendArc([152.5493787,-59.2448209],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.3048327,-63.943568]).appendPoint([159.5497404,-63.9349303]).appendPoint([165.3086186,-59.2333878]).appendArc([167.0389226,-58.5619366],{"radius":3,"clockwise":true,"large":false}).appendPoint([198.5317972,-56.8068832]).appendArc([198.6481396,-56.7981274],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.4296719,-54.827067]).appendArc([219.7660385,-54.8141334],{"radius":3,"clockwise":true,"large":false}).appendPoint([240.6560183,-55.1839279]).appendArc([240.7391133,-55.186551],{"radius":3,"clockwise":true,"large":false}).appendPoint([280.7893298,-57.0066086]).appendArc([280.9124324,-57.009673],{"radius":3,"clockwise":false,"large":false}).appendPoint([396.1497511,-57.512494]).appendArc([399.1366326,-60.5255553],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.9172736,-110.798617]).appendArc([398.8546902,-111.3952414],{"radius":3,"clockwise":true,"large":false}).appendPoint([393.8004256,-135.7448996]).appendArc([393.0836919,-137.1522858],{"radius":3,"clockwise":true,"large":false}).appendPoint([335.1927572,-200.8852344]).appendArc([331.9078403,-201.6730128],{"radius":3,"clockwise":true,"large":false}).appendPoint([293.317403,-187.0305413]).appendArc([292.2662303,-186.8354487],{"radius":3,"clockwise":false,"large":false}).appendPoint([261.3673836,-186.7006263]).appendArc([261.1027476,-186.687772],{"radius":3,"clockwise":true,"large":false}).appendPoint([242.5343924,-184.9613864]).appendArc([242.2575836,-184.9485035],{"radius":3,"clockwise":false,"large":false}).appendPoint([210.353095,-184.9387499]).appendArc([209.7373813,-185.0024213],{"radius":3,"clockwise":false,"large":false}).appendPoint([201.0047157,-186.8308317]).appendArc([200.6076393,-186.8865924],{"radius":3,"clockwise":true,"large":false}).appendPoint([160.32775,-189.8175708]).appendPoint([157.5268232,-189.8262086]).appendPoint([117.1782644,-186.8902334]).appendArc([116.9161451,-186.8595213],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.0918623,-185.4297004]).appendArc([107.5671518,-185.3914131],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.6386256,-185.8690208]).appendArc([75.3400278,-185.8884119],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.8511988,-188.0192023]).appendArc([56.5339095,-188.0388148],{"radius":3,"clockwise":true,"large":false}).appendPoint([25.7732402,-188.3072591]).appendArc([23.2242694,-186.930803],{"radius":3,"clockwise":true,"large":false}).appendPoint([12.3980546,-170.1069879]).appendArc([11.9209601,-168.5097377],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.3633935,-104.618938]).appendArc([11.4559825,-103.8527416],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function board3d_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[11.4559825,-103.8527415],[22.4167395,-60.7913349]]).appendArc([25.2978568,-58.5314661],{"radius":3,"clockwise":true,"large":false}).appendPoint([36.4372635,-58.4342539]).appendArc([36.5852403,-58.4293088],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.591014,-56.1029656]).appendArc([76.6516755,-56.1000539],{"radius":3,"clockwise":true,"large":false}).appendPoint([97.539488,-55.3092681]).appendArc([97.8760469,-55.3154249],{"radius":3,"clockwise":true,"large":false}).appendPoint([118.7208859,-56.8696391]).appendArc([118.7850028,-56.8737298],{"radius":3,"clockwise":false,"large":false}).appendPoint([150.8110953,-58.5729357]).appendArc([152.5493787,-59.2448209],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.3048327,-63.943568]).appendPoint([159.5497404,-63.9349303]).appendPoint([165.3086186,-59.2333878]).appendArc([167.0389226,-58.5619366],{"radius":3,"clockwise":true,"large":false}).appendPoint([198.5317972,-56.8068832]).appendArc([198.6481396,-56.7981274],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.4296719,-54.827067]).appendArc([219.7660385,-54.8141334],{"radius":3,"clockwise":true,"large":false}).appendPoint([240.6560183,-55.1839279]).appendArc([240.7391133,-55.186551],{"radius":3,"clockwise":true,"large":false}).appendPoint([280.7893298,-57.0066086]).appendArc([280.9124324,-57.009673],{"radius":3,"clockwise":false,"large":false}).appendPoint([396.1497511,-57.512494]).appendArc([399.1366326,-60.5255553],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.9172736,-110.798617]).appendArc([398.8546902,-111.3952414],{"radius":3,"clockwise":true,"large":false}).appendPoint([393.8004256,-135.7448996]).appendArc([393.0836919,-137.1522858],{"radius":3,"clockwise":true,"large":false}).appendPoint([335.1927572,-200.8852344]).appendArc([331.9078403,-201.6730128],{"radius":3,"clockwise":true,"large":false}).appendPoint([293.317403,-187.0305413]).appendArc([292.2662303,-186.8354487],{"radius":3,"clockwise":false,"large":false}).appendPoint([261.3673836,-186.7006263]).appendArc([261.1027476,-186.687772],{"radius":3,"clockwise":true,"large":false}).appendPoint([242.5343924,-184.9613864]).appendArc([242.2575836,-184.9485035],{"radius":3,"clockwise":false,"large":false}).appendPoint([210.353095,-184.9387499]).appendArc([209.7373813,-185.0024213],{"radius":3,"clockwise":false,"large":false}).appendPoint([201.0047157,-186.8308317]).appendArc([200.6076393,-186.8865924],{"radius":3,"clockwise":true,"large":false}).appendPoint([160.32775,-189.8175708]).appendPoint([157.5268232,-189.8262086]).appendPoint([117.1782644,-186.8902334]).appendArc([116.9161451,-186.8595213],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.0918623,-185.4297004]).appendArc([107.5671518,-185.3914131],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.6386256,-185.8690208]).appendArc([75.3400278,-185.8884119],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.8511988,-188.0192023]).appendArc([56.5339095,-188.0388148],{"radius":3,"clockwise":true,"large":false}).appendPoint([25.7732402,-188.3072591]).appendArc([23.2242694,-186.930803],{"radius":3,"clockwise":true,"large":false}).appendPoint([12.3980546,-170.1069879]).appendArc([11.9209601,-168.5097377],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.3633935,-104.618938]).appendArc([11.4559825,-103.8527416],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[12.9275946,-104.9748206],[23.6269389,-61.0558185]]).appendArc([25.552655,-59.5292806],{"radius":2,"clockwise":true,"large":false}).appendPoint([36.4706467,-59.4340006]).appendArc([36.5693483,-59.430701],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.5924126,-57.1023392]).appendArc([76.6328126,-57.1003986],{"radius":2,"clockwise":true,"large":false}).appendPoint([97.5693841,-56.3068077]).appendArc([97.7939133,-56.3109136],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.6880646,-57.8694919]).appendArc([118.7305606,-57.8722073],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.0494945,-59.5388298]).appendArc([151.2646341,-60.0347199],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.1902746,-64.3702295]).appendArc([157.5156756,-64.8689415],{"radius":2,"clockwise":false,"large":false}).appendPoint([160.3434475,-64.8633101]).appendArc([161.6608829,-64.3645982],{"radius":2,"clockwise":false,"large":false}).appendPoint([166.5922509,-60.0240473]).appendArc([167.8018993,-59.528457],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.5993909,-57.8046479]).appendArc([198.6765581,-57.7988292],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.5160726,-55.8213074]).appendArc([219.7404734,-55.8126775],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.682976,-56.1840868]).appendArc([240.7383504,-56.1858364],{"radius":2,"clockwise":true,"large":false}).appendPoint([280.8054487,-58.007529]).appendArc([280.8875603,-58.009574],{"radius":2,"clockwise":false,"large":false}).appendPoint([396.1453878,-58.5124844]).appendArc([398.1366422,-60.521192],{"radius":2,"clockwise":true,"large":false}).appendPoint([397.9212388,-109.8876583]).appendArc([397.8766158,-110.2991401],{"radius":2,"clockwise":true,"large":false}).appendPoint([392.3345507,-136.0880653]).appendArc([391.8596289,-137.0125905],{"radius":2,"clockwise":true,"large":false}).appendPoint([334.6666457,-199.9771547]).appendArc([332.4771157,-200.5024975],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.1522639,-185.9705171]).appendArc([293.4518966,-185.8406126],{"radius":2,"clockwise":false,"large":false}).appendPoint([261.3274564,-185.7004425]).appendArc([261.1512102,-185.6918894],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.4742096,-183.9570854]).appendArc([242.29179,-183.9485149],{"radius":2,"clockwise":false,"large":false}).appendPoint([211.1897073,-183.9088109]).appendArc([210.8349487,-183.9400657],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.8621289,-185.9030869]).appendArc([199.6589925,-185.9287802],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.3506109,-188.7172993]).appendArc([162.2041203,-188.7228607],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.6530349,-188.731306]).appendArc([155.5013875,-188.7257446],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.157267,-185.9345544]).appendArc([118.0298776,-185.920918],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.0114563,-184.3830871]).appendArc([106.7024979,-184.3641518],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.5960205,-184.8696995]).appendArc([75.3997509,-184.8825624],{"radius":2,"clockwise":false,"large":false}).appendPoint([56.7896598,-187.0253382]).appendArc([56.5783432,-187.038389],{"radius":2,"clockwise":true,"large":false}).appendPoint([26.2380608,-187.3031646]).appendArc([24.5184976,-186.3533936],{"radius":2,"clockwise":true,"large":false}).appendPoint([13.712693,-168.8391144]).appendArc([13.4148794,-167.8064146],{"radius":2,"clockwise":true,"large":false}).appendPoint([12.8708399,-105.4656594]).appendArc([12.9275947,-104.9748206],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        