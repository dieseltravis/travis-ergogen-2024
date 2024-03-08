function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[24.5076171,-174.7269365],"radius":2.5})
.union(
    CAG.circle({"center":[316.2524133,-186.6969513],"radius":2.5})
).union(
    CAG.circle({"center":[393.4136723,-120.2355382],"radius":2.5})
).union(
    CAG.circle({"center":[400.1388014,-64.7498599],"radius":2.5})
).union(
    CAG.circle({"center":[178.4410029,-155.115316],"radius":2.5})
).union(
    CAG.circle({"center":[146.2717991,-155.225957],"radius":2.5})
).union(
    CAG.circle({"center":[175.7827456,-98.0271721],"radius":2.5})
).union(
    CAG.circle({"center":[148.599217,-98.1233685],"radius":2.5})
).union(
    CAG.circle({"center":[28.2429189,-65.9011668],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[24.5076171,-174.7269365],"radius":1.5})
.union(
    CAG.circle({"center":[316.2524133,-186.6969513],"radius":1.5})
).union(
    CAG.circle({"center":[393.4136723,-120.2355382],"radius":1.5})
).union(
    CAG.circle({"center":[400.1388014,-64.7498599],"radius":1.5})
).union(
    CAG.circle({"center":[178.4410029,-155.115316],"radius":1.5})
).union(
    CAG.circle({"center":[146.2717991,-155.225957],"radius":1.5})
).union(
    CAG.circle({"center":[175.7827456,-98.0271721],"radius":1.5})
).union(
    CAG.circle({"center":[148.599217,-98.1233685],"radius":1.5})
).union(
    CAG.circle({"center":[28.2429189,-65.9011668],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[9.2531833,-102.8341311],[20.564568,-59.7200095]]).appendArc([23.4314904,-57.4815243],{"radius":3,"clockwise":true,"large":false}).appendPoint([35.5948906,-57.3401318]).appendArc([35.7427771,-57.3347626],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.7590978,-54.8924694]).appendArc([75.8198121,-54.8893809],{"radius":3,"clockwise":true,"large":false}).appendPoint([96.7227889,-54.0383226]).appendArc([97.0591297,-54.0435029],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.9229104,-55.5376742]).appendArc([117.9931101,-55.5418752],{"radius":3,"clockwise":false,"large":false}).appendPoint([151.1746856,-57.1375162]).appendArc([152.8310179,-57.7343764],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.3393489,-61.8671685]).appendArc([160.1573668,-62.4674398],{"radius":3,"clockwise":false,"large":false}).appendPoint([164.0280946,-62.4447473]).appendArc([165.8248121,-61.8340032],{"radius":3,"clockwise":false,"large":false}).appendPoint([171.3171542,-57.663249]).appendArc([172.9696089,-57.0568224],{"radius":3,"clockwise":true,"large":false}).appendPoint([205.5188308,-55.2982259]).appendArc([205.6357342,-55.2896163],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.4374168,-53.3483703]).appendArc([226.7735677,-53.3359406],{"radius":3,"clockwise":true,"large":false}).appendPoint([247.6805344,-53.7360152]).appendArc([247.7636587,-53.738759],{"radius":3,"clockwise":true,"large":false}).appendPoint([287.8286294,-55.617483]).appendArc([287.9516627,-55.6207249],{"radius":3,"clockwise":false,"large":false}).appendPoint([404.1881375,-56.2983214]).appendArc([407.1705983,-59.3157586],{"radius":3,"clockwise":true,"large":false}).appendPoint([406.8665196,-111.4781284]).appendArc([406.7508775,-112.2857302],{"radius":3,"clockwise":true,"large":false}).appendPoint([400.0590231,-135.6787642]).appendArc([399.392411,-136.874028],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.0541148,-202.0082745]).appendArc([336.6371526,-202.7377856],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.2118912,-187.7242882]).appendArc([301.030112,-187.4742043],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.2050082,-187.2828515]).appendArc([267.9401241,-187.2695839],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.3934047,-185.5161057]).appendArc([249.1136067,-185.5027882],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.2278543,-185.4745679]).appendArc([215.6134498,-185.5376188],{"radius":3,"clockwise":false,"large":false}).appendPoint([206.7987694,-187.3739085]).appendArc([206.3951977,-187.4297232],{"radius":3,"clockwise":true,"large":false}).appendPoint([163.1175594,-190.4413009]).appendPoint([161.2001781,-190.4381229]).appendPoint([117.853428,-187.6740257]).appendArc([117.5524206,-187.6395006],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.6134574,-186.1536344]).appendArc([108.0716253,-186.1134437],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.1730462,-186.6608532]).appendArc([74.8705403,-186.6812095],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.4075435,-188.8652222]).appendArc([56.0899974,-188.885791],{"radius":3,"clockwise":true,"large":false}).appendPoint([24.2943727,-189.2553967]).appendArc([21.7721002,-187.9327497],{"radius":3,"clockwise":true,"large":false}).appendPoint([10.4329604,-171.1155368]).appendArc([9.9205648,-169.4732573],{"radius":3,"clockwise":true,"large":false}).appendPoint([9.1551791,-103.630314]).appendArc([9.2531832,-102.8341311],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function board3d_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[9.2531833,-102.8341311],[20.564568,-59.7200095]]).appendArc([23.4314904,-57.4815243],{"radius":3,"clockwise":true,"large":false}).appendPoint([35.5948906,-57.3401318]).appendArc([35.7427771,-57.3347626],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.7590978,-54.8924694]).appendArc([75.8198121,-54.8893809],{"radius":3,"clockwise":true,"large":false}).appendPoint([96.7227889,-54.0383226]).appendArc([97.0591297,-54.0435029],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.9229104,-55.5376742]).appendArc([117.9931101,-55.5418752],{"radius":3,"clockwise":false,"large":false}).appendPoint([151.1746856,-57.1375162]).appendArc([152.8310179,-57.7343764],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.3393489,-61.8671685]).appendArc([160.1573668,-62.4674398],{"radius":3,"clockwise":false,"large":false}).appendPoint([164.0280946,-62.4447473]).appendArc([165.8248121,-61.8340032],{"radius":3,"clockwise":false,"large":false}).appendPoint([171.3171542,-57.663249]).appendArc([172.9696089,-57.0568224],{"radius":3,"clockwise":true,"large":false}).appendPoint([205.5188308,-55.2982259]).appendArc([205.6357342,-55.2896163],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.4374168,-53.3483703]).appendArc([226.7735677,-53.3359406],{"radius":3,"clockwise":true,"large":false}).appendPoint([247.6805344,-53.7360152]).appendArc([247.7636587,-53.738759],{"radius":3,"clockwise":true,"large":false}).appendPoint([287.8286294,-55.617483]).appendArc([287.9516627,-55.6207249],{"radius":3,"clockwise":false,"large":false}).appendPoint([404.1881375,-56.2983214]).appendArc([407.1705983,-59.3157586],{"radius":3,"clockwise":true,"large":false}).appendPoint([406.8665196,-111.4781284]).appendArc([406.7508775,-112.2857302],{"radius":3,"clockwise":true,"large":false}).appendPoint([400.0590231,-135.6787642]).appendArc([399.392411,-136.874028],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.0541148,-202.0082745]).appendArc([336.6371526,-202.7377856],{"radius":3,"clockwise":true,"large":false}).appendPoint([302.2118912,-187.7242882]).appendArc([301.030112,-187.4742043],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.2050082,-187.2828515]).appendArc([267.9401241,-187.2695839],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.3934047,-185.5161057]).appendArc([249.1136067,-185.5027882],{"radius":3,"clockwise":false,"large":false}).appendPoint([216.2278543,-185.4745679]).appendArc([215.6134498,-185.5376188],{"radius":3,"clockwise":false,"large":false}).appendPoint([206.7987694,-187.3739085]).appendArc([206.3951977,-187.4297232],{"radius":3,"clockwise":true,"large":false}).appendPoint([163.1175594,-190.4413009]).appendPoint([161.2001781,-190.4381229]).appendPoint([117.853428,-187.6740257]).appendArc([117.5524206,-187.6395006],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.6134574,-186.1536344]).appendArc([108.0716253,-186.1134437],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.1730462,-186.6608532]).appendArc([74.8705403,-186.6812095],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.4075435,-188.8652222]).appendArc([56.0899974,-188.885791],{"radius":3,"clockwise":true,"large":false}).appendPoint([24.2943727,-189.2553967]).appendArc([21.7721002,-187.9327497],{"radius":3,"clockwise":true,"large":false}).appendPoint([10.4329604,-171.1155368]).appendArc([9.9205648,-169.4732573],{"radius":3,"clockwise":true,"large":false}).appendPoint([9.1551791,-103.630314]).appendArc([9.2531832,-102.8341311],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[12.2608586,-104.8275211],[22.6217045,-61.7557383]]).appendArc([25.5036323,-59.457572],{"radius":3,"clockwise":true,"large":false}).appendPoint([35.6180619,-59.3399976]).appendArc([35.7660993,-59.3346192],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.7475031,-56.8924331]).appendArc([75.8080944,-56.8893465],{"radius":3,"clockwise":true,"large":false}).appendPoint([96.6759924,-56.0378055]).appendArc([97.0128027,-56.0429886],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.842043,-57.5360544]).appendArc([117.911076,-57.5402036],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.9782477,-59.0483259]).appendArc([150.7985124,-59.7785395],{"radius":3,"clockwise":true,"large":false}).appendPoint([155.2168088,-63.610917]).appendArc([157.1955674,-64.3446309],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.9957715,-64.3020536]).appendArc([168.9615617,-63.5569116],{"radius":3,"clockwise":false,"large":false}).appendPoint([173.3614862,-59.6955665]).appendArc([175.1770466,-58.954842],{"radius":3,"clockwise":true,"large":false}).appendPoint([205.612429,-57.2960577]).appendArc([205.7281924,-57.2874994],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.4953298,-55.347562]).appendArc([226.8319499,-55.3351107],{"radius":3,"clockwise":true,"large":false}).appendPoint([247.7038109,-55.7358779]).appendArc([247.7868683,-55.7386239],{"radius":3,"clockwise":true,"large":false}).appendPoint([287.816908,-57.6174434]).appendArc([287.9400706,-57.6206913],{"radius":3,"clockwise":false,"large":false}).appendPoint([402.1765127,-58.2866286]).appendArc([405.1589735,-61.3040658],{"radius":3,"clockwise":true,"large":false}).appendPoint([404.8782815,-109.4546327]).appendArc([404.7561469,-110.2846019],{"radius":3,"clockwise":true,"large":false}).appendPoint([397.2354302,-135.8236194]).appendArc([396.5753106,-136.9965159],{"radius":3,"clockwise":true,"large":false}).appendPoint([339.8687108,-199.2420113]).appendArc([336.5505857,-200.0125449],{"radius":3,"clockwise":true,"large":false}).appendPoint([300.1803176,-185.671965]).appendArc([299.0973754,-185.4629035],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.2163988,-185.2828839]).appendArc([267.9520487,-185.2696668],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.3670713,-183.5159245]).appendArc([249.0934608,-183.5026677],{"radius":3,"clockwise":false,"large":false}).appendPoint([218.0963527,-183.4176534]).appendArc([217.6233163,-183.4538687],{"radius":3,"clockwise":false,"large":false}).appendPoint([204.630234,-185.4915744]).appendArc([204.3846429,-185.5197809],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.1266686,-188.2496103]).appendArc([166.9134517,-188.2576244],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.3890021,-188.2766751]).appendArc([157.1811246,-188.269881],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.86838,-185.753318]).appendArc([119.6957894,-185.7366554],{"radius":3,"clockwise":true,"large":false}).appendPoint([106.6065968,-184.0899504]).appendArc([106.1746889,-184.0670378],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.1806067,-184.6605846]).appendArc([74.8862593,-184.6807318],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.3839855,-186.865428]).appendArc([56.0670685,-186.8859225],{"radius":3,"clockwise":true,"large":false}).appendPoint([26.3444199,-187.2314309]).appendArc([23.7609584,-185.8142534],{"radius":3,"clockwise":true,"large":false}).appendPoint([13.3490307,-169.0472809]).appendArc([12.8978241,-167.4995319],{"radius":3,"clockwise":true,"large":false}).appendPoint([12.17786,-105.5640229]).appendArc([12.2608587,-104.8275211],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        