function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[8.027179,-102.1534911],[17.8307833,-60.6377249]]).appendArc([20.6065478,-58.3306424],{"radius":3,"clockwise":true,"large":false}).appendPoint([32.801519,-57.7448759]).appendArc([32.9148593,-57.7372786],{"radius":3,"clockwise":false,"large":false}).appendPoint([74.8481627,-54.1278572]).appendArc([74.9264345,-54.1221502],{"radius":3,"clockwise":true,"large":false}).appendPoint([95.7655968,-52.8765089]).appendArc([96.1024452,-52.8753192],{"radius":3,"clockwise":true,"large":false}).appendPoint([116.9665699,-53.9746114]).appendArc([117.0149251,-53.9767681],{"radius":3,"clockwise":false,"large":false}).appendPoint([152.2178413,-55.2624185]).appendArc([153.9052612,-55.8581056],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.4162061,-59.9802451]).appendArc([161.2130239,-60.5779309],{"radius":3,"clockwise":false,"large":false}).appendPoint([167.175366,-60.5781143]).appendArc([168.9513366,-59.9960177],{"radius":3,"clockwise":false,"large":false}).appendPoint([174.5219799,-55.904546]).appendArc([176.1866583,-55.3245109],{"radius":3,"clockwise":true,"large":false}).appendPoint([210.7939504,-54.0408552]).appendArc([210.8617534,-54.0375717],{"radius":3,"clockwise":false,"large":false}).appendPoint([231.7062041,-52.7916144]).appendArc([232.0430525,-52.7904247],{"radius":3,"clockwise":true,"large":false}).appendPoint([252.8921573,-53.8889253]).appendArc([252.9704654,-53.8940791],{"radius":3,"clockwise":true,"large":false}).appendPoint([294.9564078,-57.2094122]).appendArc([295.0199868,-57.2137536],{"radius":3,"clockwise":false,"large":false}).appendPoint([315.9885571,-58.4219686]).appendArc([316.0408012,-58.4254366],{"radius":3,"clockwise":true,"large":false}).appendPoint([336.9907576,-59.9998448]).appendArc([337.0429333,-60.004224],{"radius":3,"clockwise":true,"large":false}).appendPoint([357.9634772,-61.9441363]).appendArc([358.0130834,-61.9491524],{"radius":3,"clockwise":true,"large":false}).appendPoint([416.7867303,-68.3859136]).appendArc([419.4422986,-71.6946833],{"radius":3,"clockwise":true,"large":false}).appendPoint([414.0371677,-121.0485823]).appendArc([413.3342577,-122.672617],{"radius":3,"clockwise":true,"large":false}).appendPoint([401.7693178,-136.1859028]).appendArc([401.6751717,-136.2908163],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.7979644,-201.0051939]).appendArc([337.4995661,-201.7354295],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.587027,-187.7833032]).appendArc([301.6438201,-187.5739128],{"radius":3,"clockwise":false,"large":false}).appendPoint([287.6571845,-186.7796941]).appendArc([287.6045327,-186.7771681],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.9815796,-186.0476657]).appendArc([268.7169343,-186.0255354],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.2393867,-183.6529638]).appendArc([249.9601905,-183.6302989],{"radius":3,"clockwise":false,"large":false}).appendPoint([217.1145249,-182.5032954]).appendArc([216.457941,-182.5530725],{"radius":3,"clockwise":false,"large":false}).appendPoint([207.8601386,-184.1677036]).appendArc([207.4668185,-184.2149547],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.1409046,-186.5345912]).appendPoint([162.5342171,-186.5410566]).appendPoint([119.1227197,-183.836728]).appendArc([118.9419316,-183.8199609],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.1287618,-182.7327195]).appendArc([109.6548008,-182.7120445],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7376581,-183.8829774]).appendArc([76.4355914,-183.9090529],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.9910435,-186.4455616]).appendArc([57.7266151,-186.4700615],{"radius":3,"clockwise":true,"large":false}).appendPoint([39.0846208,-187.3676999]).appendPoint([26.1923812,-187.9869586]).appendArc([23.6236795,-186.7569079],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.6804879,-170.3631622]).appendArc([11.1087101,-168.740602],{"radius":3,"clockwise":true,"large":false}).appendPoint([7.9503326,-102.9868882]).appendArc([8.027179,-102.1534912],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        