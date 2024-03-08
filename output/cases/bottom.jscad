function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[8.0184618,-102.1698206],[17.7545355,-58.6728808]]).appendArc([20.53816,-56.3316214],{"radius":3,"clockwise":true,"large":false}).appendPoint([32.7056996,-55.7471725]).appendArc([32.8187669,-55.7395987],{"radius":3,"clockwise":false,"large":false}).appendPoint([74.8219815,-52.1280252]).appendArc([74.9002542,-52.1223253],{"radius":3,"clockwise":true,"large":false}).appendPoint([95.7745586,-50.8764984]).appendArc([96.1109372,-50.8753148],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.0102901,-51.9750936]).appendArc([117.0584665,-51.9772406],{"radius":3,"clockwise":false,"large":false}).appendPoint([152.2963514,-53.2639654]).appendArc([153.9837884,-53.8596531],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.4946223,-57.9817096]).appendArc([161.2916727,-58.5793955],{"radius":3,"clockwise":false,"large":false}).appendPoint([167.1144177,-58.5791233]).appendArc([168.8901558,-57.9970267],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.4608831,-53.9054933]).appendArc([176.1256065,-53.3254566],{"radius":3,"clockwise":true,"large":false}).appendPoint([210.7678853,-52.0410219]).appendArc([210.8354594,-52.0377531],{"radius":3,"clockwise":false,"large":false}).appendPoint([231.7151659,-50.7916039]).appendArc([232.0515445,-50.7904203],{"radius":3,"clockwise":true,"large":false}).appendPoint([252.9357867,-51.8894037]).appendArc([253.0140954,-51.8945524],{"radius":3,"clockwise":true,"large":false}).appendPoint([295.0699075,-55.2126399]).appendArc([295.1332522,-55.2169637],{"radius":3,"clockwise":false,"large":false}).appendPoint([316.1367753,-56.4274679]).appendArc([316.1890194,-56.4309366],{"radius":3,"clockwise":true,"large":false}).appendPoint([337.1737673,-58.0082351]).appendArc([337.225943,-58.012615],{"radius":3,"clockwise":true,"large":false}).appendPoint([358.1812255,-59.9560248]).appendArc([358.2307927,-59.9610371],{"radius":3,"clockwise":true,"large":false}).appendPoint([417.0044641,-66.3978009]).appendArc([419.6600324,-69.7065706],{"radius":3,"clockwise":true,"large":false}).appendPoint([414.0371677,-121.0485823]).appendArc([413.3342577,-122.672617],{"radius":3,"clockwise":true,"large":false}).appendPoint([401.7693178,-136.1859028]).appendArc([401.6751717,-136.2908163],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.7979644,-201.0051939]).appendArc([337.4995661,-201.7354295],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.587027,-187.7833032]).appendArc([301.6438201,-187.5739128],{"radius":3,"clockwise":false,"large":false}).appendPoint([287.6571845,-186.7796941]).appendArc([287.6045327,-186.7771681],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.9815796,-186.0476657]).appendArc([268.7169343,-186.0255354],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.2393867,-183.6529638]).appendArc([249.9601905,-183.6302989],{"radius":3,"clockwise":false,"large":false}).appendPoint([217.1145249,-182.5032954]).appendArc([216.457941,-182.5530725],{"radius":3,"clockwise":false,"large":false}).appendPoint([207.8601386,-184.1677036]).appendArc([207.4668185,-184.2149547],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.1409046,-186.5345912]).appendPoint([162.5342171,-186.5410566]).appendPoint([119.1227197,-183.836728]).appendArc([118.9419316,-183.8199609],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.1287618,-182.7327195]).appendArc([109.6548008,-182.7120445],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7376581,-183.8829774]).appendArc([76.4355914,-183.9090529],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.9910435,-186.4455616]).appendArc([57.7266151,-186.4700615],{"radius":3,"clockwise":true,"large":false}).appendPoint([39.0846208,-187.3676999]).appendPoint([26.1923812,-187.9869586]).appendArc([23.6236795,-186.7569079],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.6804879,-170.3631622]).appendArc([11.1087101,-168.740602],{"radius":3,"clockwise":true,"large":false}).appendPoint([7.9494754,-102.9690407]).appendArc([8.0184618,-102.1698206],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        