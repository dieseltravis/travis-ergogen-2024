function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[11.0966369,-104.0525185],[19.8843399,-60.632456]]).appendArc([22.6807895,-58.2310094],{"radius":3,"clockwise":true,"large":false}).appendPoint([32.801519,-57.7448759]).appendArc([32.9148593,-57.7372786],{"radius":3,"clockwise":false,"large":false}).appendPoint([74.8481627,-54.1278572]).appendArc([74.9264345,-54.1221502],{"radius":3,"clockwise":true,"large":false}).appendPoint([95.7655968,-52.8765089]).appendArc([96.1024452,-52.8753192],{"radius":3,"clockwise":true,"large":false}).appendPoint([116.9663257,-53.9745985]).appendArc([117.0151657,-53.9767729],{"radius":3,"clockwise":false,"large":false}).appendPoint([150.1012236,-55.1797544]).appendArc([151.9546185,-55.9086361],{"radius":3,"clockwise":true,"large":false}).appendPoint([156.3748773,-59.7313739]).appendArc([158.3315946,-60.4622312],{"radius":3,"clockwise":false,"large":false}).appendPoint([170.0517149,-60.4844344]).appendArc([171.999922,-59.7706158],{"radius":3,"clockwise":false,"large":false}).appendPoint([176.4724175,-55.9704142]).appendArc([178.3025758,-55.2586953],{"radius":3,"clockwise":true,"large":false}).appendPoint([210.7945327,-54.0408466]).appendArc([210.8611699,-54.0376066],{"radius":3,"clockwise":false,"large":false}).appendPoint([231.7062041,-52.7916144]).appendArc([232.0430525,-52.7904247],{"radius":3,"clockwise":true,"large":false}).appendPoint([252.8921573,-53.8889253]).appendArc([252.9704654,-53.8940791],{"radius":3,"clockwise":true,"large":false}).appendPoint([294.9564078,-57.2094122]).appendArc([295.0199868,-57.2137536],{"radius":3,"clockwise":false,"large":false}).appendPoint([315.9885571,-58.4219686]).appendArc([316.0408012,-58.4254366],{"radius":3,"clockwise":true,"large":false}).appendPoint([336.9907576,-59.9998448]).appendArc([337.0429333,-60.004224],{"radius":3,"clockwise":true,"large":false}).appendPoint([357.9634772,-61.9441363]).appendArc([358.0130834,-61.9491524],{"radius":3,"clockwise":true,"large":false}).appendPoint([414.7986176,-68.1681798]).appendArc([417.4541859,-71.4769495],{"radius":3,"clockwise":true,"large":false}).appendPoint([412.2610213,-118.8953975]).appendArc([411.620112,-120.4445642],{"radius":3,"clockwise":true,"large":false}).appendPoint([398.970873,-136.2328497]).appendArc([398.8147262,-136.4126313],{"radius":3,"clockwise":true,"large":false}).appendPoint([340.6638392,-198.2288449]).appendArc([337.4553506,-198.9933495],{"radius":3,"clockwise":true,"large":false}).appendPoint([300.6629081,-185.6416584]).appendArc([299.809611,-185.466537],{"radius":3,"clockwise":false,"large":false}).appendPoint([287.7705417,-184.7829091]).appendArc([287.7179391,-184.7803851],{"radius":3,"clockwise":false,"large":false}).appendPoint([269.0598072,-184.0491983]).appendArc([268.795743,-184.0271383],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.279943,-181.6530205]).appendArc([250.0069289,-181.6306231],{"radius":3,"clockwise":false,"large":false}).appendPoint([219.0465588,-180.5098901]).appendArc([218.5399104,-180.5344608],{"radius":3,"clockwise":false,"large":false}).appendPoint([205.7178704,-182.2512256]).appendArc([205.4911058,-182.2728621],{"radius":3,"clockwise":true,"large":false}).appendPoint([168.167975,-184.4082201]).appendArc([167.9877998,-184.413105],{"radius":3,"clockwise":true,"large":false}).appendPoint([158.7102594,-184.3858369]).appendArc([158.5215885,-184.3793426],{"radius":3,"clockwise":true,"large":false}).appendPoint([121.1478949,-181.9137054]).appendArc([121.0702843,-181.9075728],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.095643,-180.7127701]).appendArc([107.7063696,-180.7023037],{"radius":3,"clockwise":false,"large":false}).appendPoint([76.7073741,-181.8829239]).appendArc([76.4134608,-181.9086361],{"radius":3,"clockwise":false,"large":false}).appendPoint([57.9296814,-184.4465618]).appendArc([57.6658314,-184.470978],{"radius":3,"clockwise":true,"large":false}).appendPoint([38.9888798,-185.3699927]).appendPoint([28.1674717,-185.8897823]).appendArc([25.5341838,-184.5674888],{"radius":3,"clockwise":true,"large":false}).appendPoint([14.519418,-168.1902324]).appendArc([14.0122263,-166.659915],{"radius":3,"clockwise":true,"large":false}).appendPoint([11.0404756,-104.7915513]).appendArc([11.0966369,-104.0525184],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[25.8771625,-173.4603532],"radius":1.5})
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
).union(
    new CSG.Path2D([[282.9884113,-104.9333723],[301.5085767,-105.9850235]]).appendPoint([302.5602279,-87.4648581]).appendPoint([284.0400625,-86.4132069]).appendPoint([282.9884113,-104.9333723]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.9084136,-123.9527337],[300.428579,-125.0043849]]).appendPoint([301.4802302,-106.4842195]).appendPoint([282.9600648,-105.4325683]).appendPoint([281.9084136,-123.9527337]).close().innerToCAG()
).union(
    new CSG.Path2D([[284.0684089,-85.914011],[302.5885743,-86.9656622]]).appendPoint([303.6402255,-68.4454968]).appendPoint([285.1200601,-67.3938456]).appendPoint([284.0684089,-85.914011]).close().innerToCAG()
).union(
    new CSG.Path2D([[280.828416,-142.972095],[299.3485814,-144.0237462]]).appendPoint([300.4002326,-125.5035808]).appendPoint([281.8800672,-124.4519296]).appendPoint([280.828416,-142.972095]).close().innerToCAG()
).union(
    new CSG.Path2D([[285.1022937,-162.2954715],[303.6224591,-163.3471227]]).appendPoint([304.6741103,-144.8269573]).appendPoint([286.1539449,-143.7753061]).appendPoint([285.1022937,-162.2954715]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.6684208,-181.0108177],[297.1885862,-182.0624689]]).appendPoint([298.2402374,-163.5423035]).appendPoint([279.720072,-162.4906523]).appendPoint([278.6684208,-181.0108177]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.5684169,-182.568743],[48.0970544,-181.6787487]]).appendPoint([47.2070601,-163.1501112]).appendPoint([28.6784226,-164.0401055]).appendPoint([29.5684169,-182.568743]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.4840105,-144.7651043],[41.012648,-143.87511]]).appendPoint([40.1226537,-125.3464725]).appendPoint([21.5940162,-126.2364668]).appendPoint([22.4840105,-144.7651043]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.9985,-87.4284341],[43.5271375,-86.5384398]]).appendPoint([42.6371432,-68.0098023]).appendPoint([24.1085057,-68.8997966]).appendPoint([24.9985,-87.4284341]).close().innerToCAG()
).union(
    new CSG.Path2D([[25.9124834,-106.4564959],[44.4411209,-105.5665016]]).appendPoint([43.5511266,-87.0378641]).appendPoint([25.0224891,-87.9278584]).appendPoint([25.9124834,-106.4564959]).close().innerToCAG()
).union(
    new CSG.Path2D([[21.5700271,-125.7370426],[40.0986646,-124.8470483]]).appendPoint([39.2086703,-106.3184108]).appendPoint([20.6800328,-107.2084051]).appendPoint([21.5700271,-125.7370426]).close().innerToCAG()
).union(
    new CSG.Path2D([[23.3979939,-163.7931661],[41.9266314,-162.9031718]]).appendPoint([41.0366371,-144.3745343]).appendPoint([22.5079996,-145.2645286]).appendPoint([23.3979939,-163.7931661]).close().innerToCAG()
).union(
    new CSG.Path2D([[304.5956726,-86.9306175],[323.0946635,-88.30533]]).appendPoint([324.469376,-69.8063391]).appendPoint([305.9703851,-68.4316266]).appendPoint([304.5956726,-86.9306175]).close().innerToCAG()
).union(
    new CSG.Path2D([[303.1839058,-105.9282335],[321.6828967,-107.302946]]).appendPoint([323.0576092,-88.8039551]).appendPoint([304.5586183,-87.4292426]).appendPoint([303.1839058,-105.9282335]).close().innerToCAG()
).union(
    new CSG.Path2D([[301.7721391,-124.9258495],[320.27113,-126.300562]]).appendPoint([321.6458425,-107.8015711]).appendPoint([303.1468516,-106.4268586]).appendPoint([301.7721391,-124.9258495]).close().innerToCAG()
).union(
    new CSG.Path2D([[305.7081264,-144.3208724],[324.2071173,-145.6955849]]).appendPoint([325.5818298,-127.196594]).appendPoint([307.0828389,-125.8218815]).appendPoint([305.7081264,-144.3208724]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.7786298,-104.2911233],[281.3143284,-105.0193929]]).appendPoint([282.042598,-86.4836943]).appendPoint([263.5068994,-85.7554247]).appendPoint([262.7786298,-104.2911233]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.0307303,-123.3264364],[280.5664289,-124.054706]]).appendPoint([281.2946985,-105.5190074]).appendPoint([262.7589999,-104.7907378]).appendPoint([262.0307303,-123.3264364]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.2828308,-142.3617495],[279.8185294,-143.0900191]]).appendPoint([280.546799,-124.5543205]).appendPoint([262.0111004,-123.8260509]).appendPoint([261.2828308,-142.3617495]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.5349314,-161.3970627],[279.07063,-162.1253323]]).appendPoint([279.7988996,-143.5896337]).appendPoint([261.263201,-142.8613641]).appendPoint([260.5349314,-161.3970627]).close().innerToCAG()
).union(
    new CSG.Path2D([[259.7870319,-180.4323758],[278.3227305,-181.1606454]]).appendPoint([279.0510001,-162.6249468]).appendPoint([260.5153015,-161.8966772]).appendPoint([259.7870319,-180.4323758]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.4757359,-102.6499901],[146.0114345,-103.3782597]]).appendPoint([146.7397041,-84.8425611]).appendPoint([128.2040055,-84.1142915]).appendPoint([127.4757359,-102.6499901]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7278365,-121.6853033],[145.2635351,-122.4135729]]).appendPoint([145.9918047,-103.8778743]).appendPoint([127.4561061,-103.1496047]).appendPoint([126.7278365,-121.6853033]).close().innerToCAG()
).union(
    new CSG.Path2D([[125.979937,-140.7206164],[144.5156356,-141.448886]]).appendPoint([145.2439052,-122.9131874]).appendPoint([126.7082066,-122.1849178]).appendPoint([125.979937,-140.7206164]).close().innerToCAG()
).union(
    new CSG.Path2D([[125.2320375,-159.7559295],[143.7677361,-160.4841991]]).appendPoint([144.4960057,-141.9485005]).appendPoint([125.9603071,-141.2202309]).appendPoint([125.2320375,-159.7559295]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.4841381,-178.7912427],[143.0198367,-179.5195123]]).appendPoint([143.7481063,-160.9838137]).appendPoint([125.2124077,-160.2555441]).appendPoint([124.4841381,-178.7912427]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.2236354,-83.614677],[146.759334,-84.3429466]]).appendPoint([147.4876036,-65.807248]).appendPoint([128.951905,-65.0789784]).appendPoint([128.2236354,-83.614677]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.3888264,-101.0656193],[240.9386498,-101.1465587]]).appendPoint([241.0195892,-82.5967353]).appendPoint([222.4697658,-82.5157959]).appendPoint([222.3888264,-101.0656193]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.3057054,-120.1154379],[240.8555288,-120.1963773]]).appendPoint([240.9364682,-101.6465539]).appendPoint([222.3866448,-101.5656145]).appendPoint([222.3057054,-120.1154379]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.1988561,-158.2999699],[104.7486795,-158.3809093]]).appendPoint([104.8296189,-139.8310859]).appendPoint([86.2797955,-139.7501465]).appendPoint([86.1988561,-158.2999699]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.2225844,-139.1652566],[240.7724078,-139.246196]]).appendPoint([240.8533472,-120.6963726]).appendPoint([222.3035238,-120.6154332]).appendPoint([222.2225844,-139.1652566]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.3650981,-120.2003325],[104.9149215,-120.2812719]]).appendPoint([104.9958609,-101.7314485]).appendPoint([86.4460375,-101.6505091]).appendPoint([86.3650981,-120.2003325]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.2819771,-139.2501512],[104.8318005,-139.3310906]]).appendPoint([104.9127399,-120.7812672]).appendPoint([86.3629165,-120.7003278]).appendPoint([86.2819771,-139.2501512]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.1157351,-177.3497886],[104.6655585,-177.430728]]).appendPoint([104.7464979,-158.8809046]).appendPoint([86.1966745,-158.7999652]).appendPoint([86.1157351,-177.3497886]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.4719475,-82.0158006],[241.0217709,-82.09674]]).appendPoint([241.1027103,-63.5469166]).appendPoint([222.5528869,-63.4659772]).appendPoint([222.4719475,-82.0158006]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.1394634,-158.2150753],[240.6892868,-158.2960147]]).appendPoint([240.7702262,-139.7461913]).appendPoint([222.2204028,-139.6652519]).appendPoint([222.1394634,-158.2150753]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.5313402,-82.1006951],[105.0811636,-82.1816345]]).appendPoint([105.162103,-63.6318111]).appendPoint([86.6122796,-63.5508717]).appendPoint([86.5313402,-82.1006951]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.4482191,-101.1505138],[104.9980425,-101.2314532]]).appendPoint([105.0789819,-82.6816298]).appendPoint([86.5291585,-82.6006904]).appendPoint([86.4482191,-101.1505138]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.0563424,-177.264894],[240.6061658,-177.3458334]]).appendPoint([240.6871052,-158.79601]).appendPoint([222.1372818,-158.7150706]).appendPoint([222.0563424,-177.264894]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.6158558,-126.2454866],[340.0880372,-127.9428416]]).appendPoint([341.7853922,-109.4706602]).appendPoint([323.3132108,-107.7733052]).appendPoint([321.6158558,-126.2454866]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.1020676,-88.3053188],[343.574249,-90.0026738]]).appendPoint([345.271604,-71.5304924]).appendPoint([326.7994226,-69.8331374]).appendPoint([325.1020676,-88.3053188]).close().innerToCAG()
).union(
    new CSG.Path2D([[328.6989656,-107.7660801],[347.171147,-109.4634351]]).appendPoint([348.868502,-90.9912537]).appendPoint([330.3963206,-89.2938987]).appendPoint([328.6989656,-107.7660801]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.9885011,-103.5008243],[200.5298492,-102.9343348]]).appendPoint([199.9633597,-84.3929867]).appendPoint([181.4220116,-84.9594762]).appendPoint([181.9885011,-103.5008243]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.1520185,-141.5830542],[201.6933666,-141.0165647]]).appendPoint([201.1268771,-122.4752166]).appendPoint([182.585529,-123.0417061]).appendPoint([183.1520185,-141.5830542]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.7158157,-179.6836072],[202.2571638,-179.1171177]]).appendPoint([201.6906743,-160.5757696]).appendPoint([183.1493262,-161.1422591]).appendPoint([183.7158157,-179.6836072]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.4067424,-84.4597093],[199.9480905,-83.8932198]]).appendPoint([199.381601,-65.3518717]).appendPoint([180.8402529,-65.9183612]).appendPoint([181.4067424,-84.4597093]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.1013362,-105.3349027],[64.6426843,-104.7684132]]).appendPoint([64.0761948,-86.2270651]).appendPoint([45.5348467,-86.7935546]).appendPoint([46.1013362,-105.3349027]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.5702598,-122.5419392],[201.1116079,-121.9754497]]).appendPoint([200.5451184,-103.4341016]).appendPoint([182.0037703,-104.0005911]).appendPoint([182.5702598,-122.5419392]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.6830949,-124.3760176],[65.224443,-123.8095281]]).appendPoint([64.6579535,-105.26818]).appendPoint([46.1166054,-105.8346695]).appendPoint([46.6830949,-124.3760176]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.2648536,-143.4171326],[65.8062017,-142.8506431]]).appendPoint([65.2397122,-124.309295]).appendPoint([46.6983641,-124.8757845]).appendPoint([47.2648536,-143.4171326]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.8466123,-162.4582475],[66.3879604,-161.891758]]).appendPoint([65.8214709,-143.3504099]).appendPoint([47.2801228,-143.9168994]).appendPoint([47.8466123,-162.4582475]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.7337772,-160.6241691],[202.2751253,-160.0576796]]).appendPoint([201.7086358,-141.5163315]).appendPoint([183.1672877,-142.082821]).appendPoint([183.7337772,-160.6241691]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.428371,-181.4993625],[66.9697191,-180.932873]]).appendPoint([66.4032296,-162.3915249]).appendPoint([47.8618815,-162.9580144]).appendPoint([48.428371,-181.4993625]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.7732005,-140.0930901],[260.3187861,-140.4977563]]).appendPoint([260.7234523,-121.9521707]).appendPoint([242.1778667,-121.5475045]).appendPoint([241.7732005,-140.0930901]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.3576269,-159.1385567],[259.9032125,-159.5432229]]).appendPoint([260.3078787,-140.9976373]).appendPoint([241.7622931,-140.5929711]).appendPoint([241.3576269,-159.1385567]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.4170196,-159.2234513],[123.9626052,-159.6281175]]).appendPoint([124.3672714,-141.0825319]).appendPoint([105.8216858,-140.6778657]).appendPoint([105.4170196,-159.2234513]).close().innerToCAG()
).union(
    new CSG.Path2D([[243.0199212,-82.9566902],[261.5655068,-83.3613564]]).appendPoint([261.970173,-64.8157708]).appendPoint([243.4245874,-64.4111046]).appendPoint([243.0199212,-82.9566902]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.6637403,-102.0870515],[125.2093259,-102.4917177]]).appendPoint([125.6139921,-83.9461321]).appendPoint([107.0684065,-83.5414659]).appendPoint([106.6637403,-102.0870515]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.8325932,-140.1779847],[124.3781788,-140.5826509]]).appendPoint([124.782845,-122.0370653]).appendPoint([106.2372594,-121.6323991]).appendPoint([105.8325932,-140.1779847]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.0793139,-83.0415849],[125.6248995,-83.4462511]]).appendPoint([126.0295657,-64.9006655]).appendPoint([107.4839801,-64.4959993]).appendPoint([107.0793139,-83.0415849]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.2481667,-121.1325181],[124.7937523,-121.5371843]]).appendPoint([125.1984185,-102.9915987]).appendPoint([106.6528329,-102.5869325]).appendPoint([106.2481667,-121.1325181]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.188774,-121.0476234],[260.7343596,-121.4522896]]).appendPoint([261.1390258,-102.906704]).appendPoint([242.5934402,-102.5020378]).appendPoint([242.188774,-121.0476234]).close().innerToCAG()
).union(
    new CSG.Path2D([[240.9420534,-178.1840233],[259.487639,-178.5886895]]).appendPoint([259.8923052,-160.0431039]).appendPoint([241.3467196,-159.6384377]).appendPoint([240.9420534,-178.1840233]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.6043476,-102.0021568],[261.1499332,-102.406823]]).appendPoint([261.5545994,-83.8612374]).appendPoint([243.0090138,-83.4565712]).appendPoint([242.6043476,-102.0021568]).close().innerToCAG()
).union(
    new CSG.Path2D([[392.9232806,-95.2224819],[411.3630257,-97.2419624]]).appendPoint([413.3825062,-78.8022173]).appendPoint([394.9427611,-76.7827368]).appendPoint([392.9232806,-95.2224819]).close().innerToCAG()
).union(
    new CSG.Path2D([[390.8493667,-114.1592552],[409.2891118,-116.1787357]]).appendPoint([411.3085923,-97.7389906]).appendPoint([392.8688472,-95.7195101]).appendPoint([390.8493667,-114.1592552]).close().innerToCAG()
).union(
    new CSG.Path2D([[373.9865074,-93.1485679],[392.4262525,-95.1680484]]).appendPoint([394.445733,-76.7283033]).appendPoint([376.0059879,-74.7088228]).appendPoint([373.9865074,-93.1485679]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.9125934,-112.0853412],[390.3523385,-114.1048217]]).appendPoint([392.371819,-95.6650766]).appendPoint([373.9320739,-93.6455961]).appendPoint([371.9125934,-112.0853412]).close().innerToCAG()
).union(
    new CSG.Path2D([[345.5813475,-90.037697],[364.0210926,-92.0571775]]).appendPoint([366.0405731,-73.6174324]).appendPoint([347.600828,-71.5979519]).appendPoint([345.5813475,-90.037697]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.9342893,-159.6269667],[221.4827001,-159.3841547]]).appendPoint([221.2398881,-140.8357439]).appendPoint([202.6914773,-141.0785559]).appendPoint([202.9342893,-159.6269667]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.993682,-159.7118614],[85.5420928,-159.4690494]]).appendPoint([85.2992808,-140.9206386]).appendPoint([66.75087,-141.1634506]).appendPoint([66.993682,-159.7118614]).close().innerToCAG()
).union(
    new CSG.Path2D([[67.2430387,-178.7602293],[85.7914495,-178.5174173]]).appendPoint([85.5486375,-159.9690065]).appendPoint([67.0002267,-160.2118185]).appendPoint([67.2430387,-178.7602293]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4355758,-121.5302309],[220.9839866,-121.2874189]]).appendPoint([220.7411746,-102.7390081]).appendPoint([202.1927638,-102.9818201]).appendPoint([202.4355758,-121.5302309]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.6849325,-140.5785988],[221.2333433,-140.3357868]]).appendPoint([220.9905313,-121.787376]).appendPoint([202.4421205,-122.030188]).appendPoint([202.6849325,-140.5785988]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.7443252,-140.6634935],[85.292736,-140.4206815]]).appendPoint([85.049924,-121.8722707]).appendPoint([66.5015132,-122.1150827]).appendPoint([66.7443252,-140.6634935]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.9962549,-83.5183897],[84.5446657,-83.2755777]]).appendPoint([84.3018537,-64.7271669]).appendPoint([65.7534429,-64.9699789]).appendPoint([65.9962549,-83.5183897]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.2456117,-102.5667577],[84.7940225,-102.3239457]]).appendPoint([84.5512105,-83.7755349]).appendPoint([66.0027997,-84.0183469]).appendPoint([66.2456117,-102.5667577]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.4949685,-121.6151256],[85.0433793,-121.3723136]]).appendPoint([84.8005673,-102.8239028]).appendPoint([66.2521565,-103.0667148]).appendPoint([66.4949685,-121.6151256]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.9368622,-83.4334951],[220.485273,-83.1906831]]).appendPoint([220.242461,-64.6422723]).appendPoint([201.6940502,-64.8850843]).appendPoint([201.9368622,-83.4334951]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.186219,-102.481863],[220.7346298,-102.239051]]).appendPoint([220.4918178,-83.6906402]).appendPoint([201.943407,-83.9334522]).appendPoint([202.186219,-102.481863]).close().innerToCAG()
).union(
    new CSG.Path2D([[367.7167077,-136.9247483],[380.4268522,-123.4134668]]).appendPoint([366.9155707,-110.7033223]).appendPoint([354.2054262,-124.2146038]).appendPoint([367.7167077,-136.9247483]).close().innerToCAG()
).union(
    new CSG.Path2D([[381.5921747,-149.9774843],[394.3023192,-136.4662028]]).appendPoint([380.7910377,-123.7560583]).appendPoint([368.0808932,-137.2673398]).appendPoint([381.5921747,-149.9774843]).close().innerToCAG()
).union(
    new CSG.Path2D([[354.6639718,-150.8002153],[367.3741163,-137.2889338]]).appendPoint([353.8628348,-124.5787893]).appendPoint([341.1526903,-138.0900708]).appendPoint([354.6639718,-150.8002153]).close().innerToCAG()
).union(
    new CSG.Path2D([[368.5394388,-163.8529513],[381.2495833,-150.3416698]]).appendPoint([367.7383018,-137.6315253]).appendPoint([355.0281573,-151.1428068]).appendPoint([368.5394388,-163.8529513]).close().innerToCAG()
).union(
    new CSG.Path2D([[338.3480518,-168.144549],[351.0581963,-154.6332675]]).appendPoint([337.5469148,-141.923123]).appendPoint([324.8367703,-155.4344045]).appendPoint([338.3480518,-168.144549]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.2235188,-181.197285],[364.9336633,-167.6860035]]).appendPoint([351.4223818,-154.975859]).appendPoint([338.7122373,-168.4871405]).appendPoint([352.2235188,-181.197285]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.2953159,-182.020016],[338.0054604,-168.5087345]]).appendPoint([324.4941789,-155.79859]).appendPoint([311.7840344,-169.3098715]).appendPoint([325.2953159,-182.020016]).close().innerToCAG()
).union(
    new CSG.Path2D([[339.1707829,-195.072752],[351.8809274,-181.5614705]]).appendPoint([338.3696459,-168.851326]).appendPoint([325.6595014,-182.3626075]).appendPoint([339.1707829,-195.072752]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function plate3d_case_fn() {
                    

                // creating part 0 of case plate3d
                let plate3d__part_0 = plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let plate3d__part_0_bounds = plate3d__part_0.getBounds();
                let plate3d__part_0_x = plate3d__part_0_bounds[0].x + (plate3d__part_0_bounds[1].x - plate3d__part_0_bounds[0].x) / 2
                let plate3d__part_0_y = plate3d__part_0_bounds[0].y + (plate3d__part_0_bounds[1].y - plate3d__part_0_bounds[0].y) / 2
                plate3d__part_0 = translate([-plate3d__part_0_x, -plate3d__part_0_y, 0], plate3d__part_0);
                plate3d__part_0 = rotate([0,0,0], plate3d__part_0);
                plate3d__part_0 = translate([plate3d__part_0_x, plate3d__part_0_y, 0], plate3d__part_0);

                plate3d__part_0 = translate([0,0,0], plate3d__part_0);
                let result = plate3d__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate3d_case_fn();
            }

        