function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[11.4559825,-103.8527415],[22.4167395,-60.7913349]]).appendArc([25.2978568,-58.5314661],{"radius":3,"clockwise":true,"large":false}).appendPoint([36.4372635,-58.4342539]).appendArc([36.5852403,-58.4293088],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.591014,-56.1029656]).appendArc([76.6516755,-56.1000539],{"radius":3,"clockwise":true,"large":false}).appendPoint([97.539488,-55.3092681]).appendArc([97.8760469,-55.3154249],{"radius":3,"clockwise":true,"large":false}).appendPoint([118.7208859,-56.8696391]).appendArc([118.7850028,-56.8737298],{"radius":3,"clockwise":false,"large":false}).appendPoint([150.8110953,-58.5729357]).appendArc([152.5493787,-59.2448209],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.3048327,-63.943568]).appendPoint([159.5497404,-63.9349303]).appendPoint([165.3086186,-59.2333878]).appendArc([167.0389226,-58.5619366],{"radius":3,"clockwise":true,"large":false}).appendPoint([198.5317972,-56.8068832]).appendArc([198.6481396,-56.7981274],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.4296719,-54.827067]).appendArc([219.7660385,-54.8141334],{"radius":3,"clockwise":true,"large":false}).appendPoint([240.6560183,-55.1839279]).appendArc([240.7391133,-55.186551],{"radius":3,"clockwise":true,"large":false}).appendPoint([280.7893298,-57.0066086]).appendArc([280.9124324,-57.009673],{"radius":3,"clockwise":false,"large":false}).appendPoint([396.1497511,-57.512494]).appendArc([399.1366326,-60.5255553],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.9172736,-110.798617]).appendArc([398.8546902,-111.3952414],{"radius":3,"clockwise":true,"large":false}).appendPoint([393.8004256,-135.7448996]).appendArc([393.0836919,-137.1522858],{"radius":3,"clockwise":true,"large":false}).appendPoint([335.1927572,-200.8852344]).appendArc([331.9078403,-201.6730128],{"radius":3,"clockwise":true,"large":false}).appendPoint([293.317403,-187.0305413]).appendArc([292.2662303,-186.8354487],{"radius":3,"clockwise":false,"large":false}).appendPoint([261.3673836,-186.7006263]).appendArc([261.1027476,-186.687772],{"radius":3,"clockwise":true,"large":false}).appendPoint([242.5343924,-184.9613864]).appendArc([242.2575836,-184.9485035],{"radius":3,"clockwise":false,"large":false}).appendPoint([210.353095,-184.9387499]).appendArc([209.7373813,-185.0024213],{"radius":3,"clockwise":false,"large":false}).appendPoint([201.0047157,-186.8308317]).appendArc([200.6076393,-186.8865924],{"radius":3,"clockwise":true,"large":false}).appendPoint([160.32775,-189.8175708]).appendPoint([157.5268232,-189.8262086]).appendPoint([117.1782644,-186.8902334]).appendArc([116.9161451,-186.8595213],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.0918623,-185.4297004]).appendArc([107.5671518,-185.3914131],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.6386256,-185.8690208]).appendArc([75.3400278,-185.8884119],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.8511988,-188.0192023]).appendArc([56.5339095,-188.0388148],{"radius":3,"clockwise":true,"large":false}).appendPoint([25.7732402,-188.3072591]).appendArc([23.2242694,-186.930803],{"radius":3,"clockwise":true,"large":false}).appendPoint([12.3980546,-170.1069879]).appendArc([11.9209601,-168.5097377],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.3633935,-104.618938]).appendArc([11.4559825,-103.8527416],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        