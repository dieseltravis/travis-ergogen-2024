function board3d_extrude_1_outline_fn(){
    return new CSG.Path2D([[15.6739936,-128.8168835],[26.6347506,-85.7554768]]).appendArc([29.5158679,-83.495608],{"radius":3,"clockwise":true,"large":false}).appendPoint([40.6552746,-83.3983958]).appendArc([40.8032514,-83.3934507],{"radius":3,"clockwise":false,"large":false}).appendPoint([80.8090251,-81.0671075]).appendArc([80.8696866,-81.0641958],{"radius":3,"clockwise":true,"large":false}).appendPoint([101.7574991,-80.27341]).appendArc([102.094058,-80.2795668],{"radius":3,"clockwise":true,"large":false}).appendPoint([122.9408228,-81.8339246]).appendArc([123.0010832,-81.8378082],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.2765955,-83.2114814]).appendArc([150.0110224,-83.8831595],{"radius":3,"clockwise":true,"large":false}).appendPoint([154.9392173,-87.906533]).appendArc([156.8382041,-88.5826314],{"radius":3,"clockwise":false,"large":false}).appendPoint([169.4543704,-88.5752454]).appendArc([171.3498448,-87.899147],{"radius":3,"clockwise":false,"large":false}).appendPoint([176.2839242,-83.8709693]).appendArc([178.0082063,-83.1998597],{"radius":3,"clockwise":true,"large":false}).appendPoint([202.7528285,-81.7709682]).appendArc([202.863149,-81.762554],{"radius":3,"clockwise":false,"large":false}).appendPoint([223.647683,-79.7912089]).appendArc([223.9840496,-79.7782753],{"radius":3,"clockwise":true,"large":false}).appendPoint([244.8740293,-80.1480699]).appendArc([244.9571242,-80.150693],{"radius":3,"clockwise":true,"large":false}).appendPoint([285.0073409,-81.9707505]).appendArc([285.1304435,-81.9738149],{"radius":3,"clockwise":false,"large":false}).appendPoint([400.3677622,-82.4766359]).appendArc([403.3546437,-85.4896972],{"radius":3,"clockwise":true,"large":false}).appendPoint([403.1352847,-135.762759]).appendArc([403.0727013,-136.3593834],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.0184367,-160.7090415]).appendArc([397.301703,-162.1164277],{"radius":3,"clockwise":true,"large":false}).appendPoint([339.4107683,-225.8493764]).appendArc([336.1258514,-226.6371548],{"radius":3,"clockwise":true,"large":false}).appendPoint([297.5354141,-211.9946833]).appendArc([296.4842414,-211.7995907],{"radius":3,"clockwise":false,"large":false}).appendPoint([265.5853947,-211.6647682]).appendArc([265.3207587,-211.6519139],{"radius":3,"clockwise":true,"large":false}).appendPoint([246.7524035,-209.9255283]).appendArc([246.4755947,-209.9126454],{"radius":3,"clockwise":false,"large":false}).appendPoint([214.5711061,-209.9028918]).appendArc([213.9553924,-209.9665632],{"radius":3,"clockwise":false,"large":false}).appendPoint([205.2227268,-211.7949737]).appendArc([204.8256504,-211.8507344],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.5457611,-214.7817128]).appendPoint([161.7448343,-214.7903505]).appendPoint([121.3962755,-211.8543753]).appendArc([121.1341561,-211.8236632],{"radius":3,"clockwise":true,"large":false}).appendPoint([112.3098734,-210.3938424]).appendArc([111.7851629,-210.3555551],{"radius":3,"clockwise":false,"large":false}).appendPoint([79.8566367,-210.8331627]).appendArc([79.5580389,-210.8525538],{"radius":3,"clockwise":false,"large":false}).appendPoint([61.0692099,-212.9833442]).appendArc([60.7519206,-213.0029567],{"radius":3,"clockwise":true,"large":false}).appendPoint([29.9912513,-213.271401]).appendArc([27.4422805,-211.8949449],{"radius":3,"clockwise":true,"large":false}).appendPoint([16.6160657,-195.0711299]).appendArc([16.1389712,-193.4738797],{"radius":3,"clockwise":true,"large":false}).appendPoint([15.5814046,-129.58308]).appendArc([15.6739936,-128.8168836],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
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

        