function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[1.2537237,-102.9271202],[12.5651084,-59.8129985]]).appendArc([15.4320308,-57.5745133],{"radius":3,"clockwise":true,"large":false}).appendPoint([27.595431,-57.4331208]).appendArc([27.7433175,-57.4277516],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.7596383,-54.9854585]).appendArc([67.8203526,-54.98237],{"radius":3,"clockwise":true,"large":false}).appendPoint([88.7233293,-54.1313116]).appendArc([89.0596701,-54.1364919],{"radius":3,"clockwise":true,"large":false}).appendPoint([109.9234508,-55.6306633]).appendArc([109.9936505,-55.6348643],{"radius":3,"clockwise":false,"large":false}).appendPoint([143.175226,-57.2305052]).appendArc([144.8315583,-57.8273654],{"radius":3,"clockwise":true,"large":false}).appendPoint([150.3398894,-61.9601575]).appendArc([152.1579073,-62.5604288],{"radius":3,"clockwise":false,"large":false}).appendPoint([156.0286351,-62.5377364]).appendArc([157.8253526,-61.9269923],{"radius":3,"clockwise":false,"large":false}).appendPoint([163.3176947,-57.7562381]).appendArc([164.9701491,-57.1498116],{"radius":3,"clockwise":true,"large":false}).appendPoint([197.5193717,-55.3912148]).appendArc([197.6362748,-55.3826053],{"radius":3,"clockwise":false,"large":false}).appendPoint([218.4379573,-53.4413594]).appendArc([218.7741082,-53.4289297],{"radius":3,"clockwise":true,"large":false}).appendPoint([239.6810749,-53.8290042]).appendArc([239.7641992,-53.831748],{"radius":3,"clockwise":true,"large":false}).appendPoint([279.8291698,-55.710472]).appendArc([279.9522031,-55.7137139],{"radius":3,"clockwise":false,"large":false}).appendPoint([396.188678,-56.3913104]).appendArc([399.1711388,-59.4087476],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.8670601,-111.5711174]).appendArc([398.7514179,-112.3787195],{"radius":3,"clockwise":true,"large":false}).appendPoint([392.0595634,-135.7717535]).appendArc([391.3929513,-136.9670171],{"radius":3,"clockwise":true,"large":false}).appendPoint([332.0546552,-202.1012635]).appendArc([328.637693,-202.8307746],{"radius":3,"clockwise":true,"large":false}).appendPoint([294.2124317,-187.8172773]).appendArc([293.0306525,-187.5671934],{"radius":3,"clockwise":false,"large":false}).appendPoint([260.2055486,-187.3758406]).appendArc([259.9406645,-187.362573],{"radius":3,"clockwise":true,"large":false}).appendPoint([241.3939451,-185.6090948]).appendArc([241.1141471,-185.5957773],{"radius":3,"clockwise":false,"large":false}).appendPoint([208.228395,-185.567557]).appendArc([207.6139905,-185.6306079],{"radius":3,"clockwise":false,"large":false}).appendPoint([198.7993094,-187.4668976]).appendArc([198.3957377,-187.5227122],{"radius":3,"clockwise":true,"large":false}).appendPoint([155.1180999,-190.5342899]).appendPoint([153.2007186,-190.5311119]).appendPoint([109.8539695,-187.7670147]).appendArc([109.5529621,-187.7324897],{"radius":3,"clockwise":true,"large":false}).appendPoint([100.6139973,-186.2466234]).appendArc([100.0721652,-186.2064328],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.1735868,-186.7538422]).appendArc([66.8710809,-186.7741985],{"radius":3,"clockwise":false,"large":false}).appendPoint([48.4080839,-188.9582113]).appendArc([48.0905378,-188.9787801],{"radius":3,"clockwise":true,"large":false}).appendPoint([16.294913,-189.3483857]).appendArc([13.7726405,-188.0257387],{"radius":3,"clockwise":true,"large":false}).appendPoint([2.433501,-171.2085259]).appendArc([1.9211053,-169.5662465],{"radius":3,"clockwise":true,"large":false}).appendPoint([1.1557195,-103.7233031]).appendArc([1.2537236,-102.9271202],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        