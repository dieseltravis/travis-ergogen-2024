function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[11.0027319,-103.901739],[22.1512749,-60.8885672]]).appendArc([25.0422252,-58.6412913],{"radius":3,"clockwise":true,"large":false}).appendPoint([36.1839049,-58.5926762]).appendArc([36.327997,-58.5885843],{"radius":3,"clockwise":false,"large":false}).appendPoint([77.1429176,-56.4471854]).appendArc([77.2086029,-56.4444605],{"radius":3,"clockwise":true,"large":false}).appendPoint([98.8975369,-55.7826644]).appendArc([99.2319124,-55.7911166],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.464684,-57.4345495]).appendArc([119.5403503,-57.4397338],{"radius":3,"clockwise":false,"large":false}).appendPoint([150.6542422,-59.1766447]).appendArc([152.3842603,-59.84808],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.3182787,-63.8762079]).appendArc([159.2082547,-64.552298],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.0502417,-64.5688431]).appendArc([167.934375,-63.9092207],{"radius":3,"clockwise":false,"large":false}).appendPoint([172.9083562,-59.9202941]).appendArc([174.6444535,-59.2639679],{"radius":3,"clockwise":true,"large":false}).appendPoint([206.156604,-57.7835629]).appendArc([206.2627263,-57.7766905],{"radius":3,"clockwise":false,"large":false}).appendPoint([228.2691426,-55.9593709]).appendArc([228.5982912,-55.950321],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.4870001,-56.5232005]).appendArc([249.5724845,-56.5267654],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.4014117,-58.7010849]).appendArc([288.5298723,-58.7055203],{"radius":3,"clockwise":false,"large":false}).appendPoint([403.7557161,-60.2139092]).appendArc([406.7161903,-63.252921],{"radius":3,"clockwise":true,"large":false}).appendPoint([406.0596546,-113.4056905]).appendArc([405.9347028,-114.2240788],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.6511469,-138.6379222]).appendArc([397.9793233,-139.8166673],{"radius":3,"clockwise":true,"large":false}).appendPoint([339.481517,-203.0992375]).appendArc([336.1341965,-203.8360025],{"radius":3,"clockwise":true,"large":false}).appendPoint([299.8216747,-188.8515667]).appendArc([298.7165905,-188.6249909],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.0513748,-188.2235613]).appendArc([267.7863128,-188.2083422],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.2341277,-186.3165835]).appendArc([248.9572172,-186.3012327],{"radius":3,"clockwise":false,"large":false}).appendPoint([217.0069115,-186.0091918]).appendArc([216.4826258,-186.0504985],{"radius":3,"clockwise":false,"large":false}).appendPoint([205.3459333,-187.9208082]).appendArc([205.0406692,-187.9561154],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.7942377,-190.5317983]).appendArc([164.5850498,-190.5378716],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.963721,-190.5049177]).appendArc([158.7635874,-190.4970584],{"radius":3,"clockwise":true,"large":false}).appendPoint([118.5035109,-187.5675217]).appendArc([118.2640371,-187.5403901],{"radius":3,"clockwise":true,"large":false}).appendPoint([107.6635982,-185.9058116]).appendArc([107.1757019,-185.8709263],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.0254894,-186.1999724]).appendArc([74.7295715,-186.2176484],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.028367,-188.2658868]).appendArc([55.7148366,-188.2836914],{"radius":3,"clockwise":true,"large":false}).appendPoint([24.9513521,-188.4179231]).appendArc([22.4084113,-187.0303581],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.6557071,-170.159465]).appendArc([11.1855866,-168.5601484],{"radius":3,"clockwise":true,"large":false}).appendPoint([10.9068006,-104.6675244]).appendArc([11.0027318,-103.901739],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        