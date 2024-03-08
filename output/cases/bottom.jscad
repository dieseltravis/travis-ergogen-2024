function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[9.2531833,-102.8341311],[20.564568,-59.7200095]]).appendArc([23.4314904,-57.4815243],{"radius":3,"clockwise":true,"large":false}).appendPoint([35.5948906,-57.3401318]).appendArc([35.7427771,-57.3347626],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.7590978,-54.8924694]).appendArc([75.8198121,-54.8893809],{"radius":3,"clockwise":true,"large":false}).appendPoint([96.7227889,-54.0383226]).appendArc([97.0591297,-54.0435029],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.9229104,-55.5376742]).appendArc([117.9931101,-55.5418752],{"radius":3,"clockwise":false,"large":false}).appendPoint([151.1746856,-57.1375162]).appendArc([152.8310179,-57.7343764],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.3393489,-61.8671685]).appendArc([160.1573668,-62.4674398],{"radius":3,"clockwise":false,"large":false}).appendPoint([164.0280946,-62.4447473]).appendArc([165.8248121,-61.8340032],{"radius":3,"clockwise":false,"large":false}).appendPoint([171.3171542,-57.663249]).appendArc([172.9696089,-57.0568224],{"radius":3,"clockwise":true,"large":false}).appendPoint([205.5188308,-55.2982259]).appendArc([205.6357342,-55.2896163],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.4374168,-53.3483703]).appendArc([226.7735677,-53.3359406],{"radius":3,"clockwise":true,"large":false}).appendPoint([247.6805344,-53.7360152]).appendArc([247.7636587,-53.738759],{"radius":3,"clockwise":true,"large":false}).appendPoint([287.8286294,-55.617483]).appendArc([287.9516627,-55.6207249],{"radius":3,"clockwise":false,"large":false}).appendPoint([404.1881375,-56.2983214]).appendArc([407.1705983,-59.3157586],{"radius":3,"clockwise":true,"large":false}).appendPoint([406.8665196,-111.4781284]).appendArc([406.7508775,-112.2857302],{"radius":3,"clockwise":true,"large":false}).appendPoint([400.0590231,-135.6787642]).appendArc([399.392411,-136.874028],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.0541148,-202.0082745]).appendArc([336.6371526,-202.7377856],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.2118912,-187.7242882]).appendArc([301.030112,-187.4742043],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.2050082,-187.2828515]).appendArc([267.9401241,-187.2695839],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.3934047,-185.5161057]).appendArc([249.1136067,-185.5027882],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.2278543,-185.4745679]).appendArc([215.6134498,-185.5376188],{"radius":3,"clockwise":false,"large":false}).appendPoint([206.7987694,-187.3739085]).appendArc([206.3951977,-187.4297232],{"radius":3,"clockwise":true,"large":false}).appendPoint([163.1175594,-190.4413009]).appendPoint([161.2001781,-190.4381229]).appendPoint([117.853428,-187.6740257]).appendArc([117.5524206,-187.6395006],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.6134574,-186.1536344]).appendArc([108.0716253,-186.1134437],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.1730462,-186.6608532]).appendArc([74.8705403,-186.6812095],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.4075435,-188.8652222]).appendArc([56.0899974,-188.885791],{"radius":3,"clockwise":true,"large":false}).appendPoint([24.2943727,-189.2553967]).appendArc([21.7721002,-187.9327497],{"radius":3,"clockwise":true,"large":false}).appendPoint([10.4329604,-171.1155368]).appendArc([9.9205648,-169.4732573],{"radius":3,"clockwise":true,"large":false}).appendPoint([9.1551791,-103.630314]).appendArc([9.2531832,-102.8341311],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        