function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[12.9275946,-104.9748206],[23.6269389,-61.0558185]]).appendArc([25.552655,-59.5292806],{"radius":2,"clockwise":true,"large":false}).appendPoint([36.4706467,-59.4340006]).appendArc([36.5693483,-59.430701],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.5924126,-57.1023392]).appendArc([76.6328126,-57.1003986],{"radius":2,"clockwise":true,"large":false}).appendPoint([97.5693841,-56.3068077]).appendArc([97.7939133,-56.3109136],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.6880646,-57.8694919]).appendArc([118.7305606,-57.8722073],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.0494945,-59.5388298]).appendArc([151.2646341,-60.0347199],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.1902746,-64.3702295]).appendArc([157.5156756,-64.8689415],{"radius":2,"clockwise":false,"large":false}).appendPoint([160.3434475,-64.8633101]).appendArc([161.6608829,-64.3645982],{"radius":2,"clockwise":false,"large":false}).appendPoint([166.5922509,-60.0240473]).appendArc([167.8018993,-59.528457],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.5993909,-57.8046479]).appendArc([198.6765581,-57.7988292],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.5160726,-55.8213074]).appendArc([219.7404734,-55.8126775],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.682976,-56.1840868]).appendArc([240.7383504,-56.1858364],{"radius":2,"clockwise":true,"large":false}).appendPoint([280.8054487,-58.007529]).appendArc([280.8875603,-58.009574],{"radius":2,"clockwise":false,"large":false}).appendPoint([396.1453878,-58.5124844]).appendArc([398.1366422,-60.521192],{"radius":2,"clockwise":true,"large":false}).appendPoint([397.9212388,-109.8876583]).appendArc([397.8766158,-110.2991401],{"radius":2,"clockwise":true,"large":false}).appendPoint([392.3345507,-136.0880653]).appendArc([391.8596289,-137.0125905],{"radius":2,"clockwise":true,"large":false}).appendPoint([334.6666457,-199.9771547]).appendArc([332.4771157,-200.5024975],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.1522639,-185.9705171]).appendArc([293.4518966,-185.8406126],{"radius":2,"clockwise":false,"large":false}).appendPoint([261.3274564,-185.7004425]).appendArc([261.1512102,-185.6918894],{"radius":2,"clockwise":true,"large":false}).appendPoint([242.4742096,-183.9570854]).appendArc([242.29179,-183.9485149],{"radius":2,"clockwise":false,"large":false}).appendPoint([211.1897073,-183.9088109]).appendArc([210.8349487,-183.9400657],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.8621289,-185.9030869]).appendArc([199.6589925,-185.9287802],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.3506109,-188.7172993]).appendArc([162.2041203,-188.7228607],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.6530349,-188.731306]).appendArc([155.5013875,-188.7257446],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.157267,-185.9345544]).appendArc([118.0298776,-185.920918],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.0114563,-184.3830871]).appendArc([106.7024979,-184.3641518],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.5960205,-184.8696995]).appendArc([75.3997509,-184.8825624],{"radius":2,"clockwise":false,"large":false}).appendPoint([56.7896598,-187.0253382]).appendArc([56.5783432,-187.038389],{"radius":2,"clockwise":true,"large":false}).appendPoint([26.2380608,-187.3031646]).appendArc([24.5184976,-186.3533936],{"radius":2,"clockwise":true,"large":false}).appendPoint([13.712693,-168.8391144]).appendArc([13.4148794,-167.8064146],{"radius":2,"clockwise":true,"large":false}).appendPoint([12.8708399,-105.4656594]).appendArc([12.9275947,-104.9748206],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[25.0012498,-174.7884812],"radius":1.5})
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
).union(
    new CSG.Path2D([[215.7828705,-159.1763194],[229.7763407,-158.7487802]]).appendPoint([229.3488015,-144.75531]).appendPoint([215.3553313,-145.1828492]).appendPoint([215.7828705,-159.1763194]).close().innerToCAG()
).union(
    new CSG.Path2D([[216.3646292,-178.2174343],[230.3580994,-177.7898951]]).appendPoint([229.9305602,-163.7964249]).appendPoint([215.93709,-164.2239641]).appendPoint([216.3646292,-178.2174343]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.2011118,-140.1352045],[229.194582,-139.7076653]]).appendPoint([228.7670428,-125.7141951]).appendPoint([214.7735726,-126.1417343]).appendPoint([215.2011118,-140.1352045]).close().innerToCAG()
).union(
    new CSG.Path2D([[213.4558356,-83.0118599],[227.4493058,-82.5843207]]).appendPoint([227.0217666,-68.5908505]).appendPoint([213.0282964,-69.0183897]).appendPoint([213.4558356,-83.0118599]).close().innerToCAG()
).union(
    new CSG.Path2D([[214.0375944,-102.0529748],[228.0310646,-101.6254356]]).appendPoint([227.6035254,-87.6319654]).appendPoint([213.6100552,-88.0595046]).appendPoint([214.0375944,-102.0529748]).close().innerToCAG()
).union(
    new CSG.Path2D([[214.6193531,-121.0940896],[228.6128233,-120.6665504]]).appendPoint([228.1852841,-106.6730802]).appendPoint([214.1918139,-107.1006194]).appendPoint([214.6193531,-121.0940896]).close().innerToCAG()
).union(
    new CSG.Path2D([[360.902656,-134.54357],[370.3157913,-124.1805163]]).appendPoint([359.9527376,-114.767381]).appendPoint([350.5396023,-125.1304347]).appendPoint([360.902656,-134.54357]).close().innerToCAG()
).union(
    new CSG.Path2D([[375.0038113,-147.3521577],[384.4169466,-136.989104]]).appendPoint([374.0538929,-127.5759687]).appendPoint([364.6407576,-137.9390224]).appendPoint([375.0038113,-147.3521577]).close().innerToCAG()
).union(
    new CSG.Path2D([[348.0940683,-148.6447253],[357.5072036,-138.2816716]]).appendPoint([347.1441499,-128.8685363]).appendPoint([337.7310146,-139.23159]).appendPoint([348.0940683,-148.6447253]).close().innerToCAG()
).union(
    new CSG.Path2D([[362.1952237,-161.453313],[371.608359,-151.0902593]]).appendPoint([361.2453053,-141.677124]).appendPoint([351.83217,-152.0401777]).appendPoint([362.1952237,-161.453313]).close().innerToCAG()
).union(
    new CSG.Path2D([[332.0833337,-166.2711695],[341.496469,-155.9081158]]).appendPoint([331.1334153,-146.4949805]).appendPoint([321.72028,-156.8580342]).appendPoint([332.0833337,-166.2711695]).close().innerToCAG()
).union(
    new CSG.Path2D([[346.184489,-179.0797572],[355.5976243,-168.7167035]]).appendPoint([345.2345706,-159.3035682]).appendPoint([335.8214353,-169.6666219]).appendPoint([346.184489,-179.0797572]).close().innerToCAG()
).union(
    new CSG.Path2D([[319.274746,-180.3723249],[328.6878813,-170.0092712]]).appendPoint([318.3248276,-160.5961359]).appendPoint([308.9116923,-170.9591896]).appendPoint([319.274746,-180.3723249]).close().innerToCAG()
).union(
    new CSG.Path2D([[333.3759013,-193.1809125],[342.7890366,-182.8178588]]).appendPoint([332.4259829,-173.4047235]).appendPoint([323.0128476,-183.7677772]).appendPoint([333.3759013,-193.1809125]).close().innerToCAG()
).union(
    new CSG.Path2D([[89.9773847,-83.1100571],[103.9725872,-83.4765344]]).appendPoint([104.3390645,-69.4813319]).appendPoint([90.343862,-69.1148546]).appendPoint([89.9773847,-83.1100571]).close().innerToCAG()
).union(
    new CSG.Path2D([[89.4787138,-102.1535292],[103.4739163,-102.5200065]]).appendPoint([103.8403936,-88.524804]).appendPoint([89.8451911,-88.1583267]).appendPoint([89.4787138,-102.1535292]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.980043,-121.1970013],[102.9752455,-121.5634786]]).appendPoint([103.3417228,-107.5682761]).appendPoint([89.3465203,-107.2017988]).appendPoint([88.980043,-121.1970013]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.4813721,-140.2404734],[102.4765746,-140.6069507]]).appendPoint([102.8430519,-126.6117482]).appendPoint([88.8478494,-126.2452709]).appendPoint([88.4813721,-140.2404734]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.9827013,-159.2839455],[101.9779038,-159.6504228]]).appendPoint([102.3443811,-145.6552203]).appendPoint([88.3491786,-145.288743]).appendPoint([87.9827013,-159.2839455]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.4840304,-178.3274175],[101.4792329,-178.6938948]]).appendPoint([101.8457102,-164.6986923]).appendPoint([87.8505077,-164.332215]).appendPoint([87.4840304,-178.3274175]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.4295609,-142.0449294],[268.4294276,-142.1060157]]).appendPoint([268.4905139,-128.106149]).appendPoint([254.4906472,-128.0450627]).appendPoint([254.4295609,-142.0449294]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.3464398,-161.094748],[268.3463065,-161.1558343]]).appendPoint([268.4073928,-147.1559676]).appendPoint([254.4075261,-147.0948813]).appendPoint([254.3464398,-161.094748]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.2633188,-180.1445666],[268.2631855,-180.2056529]]).appendPoint([268.3242718,-166.2057862]).appendPoint([254.3244051,-166.1446999]).appendPoint([254.2633188,-180.1445666]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.595803,-103.9452921],[268.5956697,-104.0063784]]).appendPoint([268.656756,-90.0065117]).appendPoint([254.6568893,-89.9454254]).appendPoint([254.595803,-103.9452921]).close().innerToCAG()
).union(
    new CSG.Path2D([[254.5126819,-122.9951107],[268.5125486,-123.056197]]).appendPoint([268.5736349,-109.0563303]).appendPoint([254.5737682,-108.995244]).appendPoint([254.5126819,-122.9951107]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.8916472,-142.2345698],[311.8915139,-142.2956561]]).appendPoint([311.9526002,-128.2957894]).appendPoint([297.9527335,-128.2347031]).appendPoint([297.8916472,-142.2345698]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.4793795,-142.1280504],[287.4792462,-142.1891367]]).appendPoint([287.5403325,-128.18927]).appendPoint([273.5404658,-128.1281837]).appendPoint([273.4793795,-142.1280504]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.7587074,-161.2012673],[292.7585741,-161.2623536]]).appendPoint([292.8196604,-147.2624869]).appendPoint([278.8197937,-147.2014006]).appendPoint([278.7587074,-161.2012673]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.3131374,-180.2276876],[287.3130041,-180.2887739]]).appendPoint([287.3740904,-166.2889072]).appendPoint([273.3742237,-166.2278209]).appendPoint([273.3131374,-180.2276876]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.5027453,-85.4357604],[392.502612,-85.4968467]]).appendPoint([392.5636983,-71.49698]).appendPoint([378.5638316,-71.4358937]).appendPoint([378.5027453,-85.4357604]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.4529267,-85.3526394],[373.4527934,-85.4137257]]).appendPoint([373.5138797,-71.413859]).appendPoint([359.514013,-71.3527727]).appendPoint([359.4529267,-85.3526394]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.3698056,-104.402458],[373.3696723,-104.4635443]]).appendPoint([373.4307586,-90.4636776]).appendPoint([359.4308919,-90.4025913]).appendPoint([359.3698056,-104.402458]).close().innerToCAG()
).union(
    new CSG.Path2D([[317.1077079,-104.2180536],[331.1075746,-104.2791399]]).appendPoint([331.1686609,-90.2792732]).appendPoint([317.1687942,-90.2181869]).appendPoint([317.1077079,-104.2180536]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.6954403,-104.1115343],[306.695307,-104.1726206]]).appendPoint([306.7563933,-90.1727539]).appendPoint([292.7565266,-90.1116676]).appendPoint([292.6954403,-104.1115343]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.6123193,-123.1613529],[306.612186,-123.2224392]]).appendPoint([306.6732723,-109.2225725]).appendPoint([292.6734056,-109.1614862]).appendPoint([292.6123193,-123.1613529]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.6456216,-104.0284132],[287.6454883,-104.0894995]]).appendPoint([287.7065746,-90.0896328]).appendPoint([273.7067079,-90.0285465]).appendPoint([273.6456216,-104.0284132]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.5625005,-123.0782318],[287.5623672,-123.1393181]]).appendPoint([287.6234535,-109.1394514]).appendPoint([273.6235868,-109.0783651]).appendPoint([273.5625005,-123.0782318]).close().innerToCAG()
).union(
    new CSG.Path2D([[378.4196242,-104.485579],[392.4194909,-104.5466653]]).appendPoint([392.4805772,-90.5467986]).appendPoint([378.4807105,-90.4857123]).appendPoint([378.4196242,-104.485579]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.8781987,-85.2279578],[344.8780654,-85.2890441]]).appendPoint([344.9391517,-71.2891774]).appendPoint([330.939285,-71.2280911]).appendPoint([330.8781987,-85.2279578]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.82838,-85.1448367],[325.8282467,-85.205923]]).appendPoint([325.889333,-71.2060563]).appendPoint([311.8894663,-71.14497]).appendPoint([311.82838,-85.1448367]).close().innerToCAG()
).union(
    new CSG.Path2D([[311.6621379,-123.2444739],[325.6620046,-123.3055602]]).appendPoint([325.7230909,-109.3056935]).appendPoint([311.7232242,-109.2446072]).appendPoint([311.6621379,-123.2444739]).close().innerToCAG()
).union(
    new CSG.Path2D([[292.7785614,-85.0617157],[306.7784281,-85.122802]]).appendPoint([306.8395144,-71.1229353]).appendPoint([292.8396477,-71.061849]).appendPoint([292.7785614,-85.0617157]).close().innerToCAG()
).union(
    new CSG.Path2D([[273.7287426,-84.9785946],[287.7286093,-85.0396809]]).appendPoint([287.7896956,-71.0398142]).appendPoint([273.7898289,-70.9787279]).appendPoint([273.7287426,-84.9785946]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.3039189,-143.4752107],[63.3033858,-143.3530392]]).appendPoint([63.1812143,-129.3535723]).appendPoint([49.1817474,-129.4757438]).appendPoint([49.3039189,-143.4752107]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.4701594,-162.5244853],[63.4696263,-162.4023138]]).appendPoint([63.3474548,-148.4028469]).appendPoint([49.3479879,-148.5250184]).appendPoint([49.4701594,-162.5244853]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.6363999,-181.57376],[63.6358668,-181.4515885]]).appendPoint([63.5136953,-167.4521216]).appendPoint([49.5142284,-167.5742931]).appendPoint([49.6363999,-181.57376]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.7122904,-160.2361495],[82.7117573,-160.358321]]).appendPoint([82.8339288,-146.3588541]).appendPoint([68.8344619,-146.2366826]).appendPoint([68.7122904,-160.2361495]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.5460499,-179.2854241],[82.5455168,-179.4075956]]).appendPoint([82.6676883,-165.4081287]).appendPoint([68.6682214,-165.2859572]).appendPoint([68.5460499,-179.2854241]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.9923446,-143.6873746],[38.9918115,-143.5652031]]).appendPoint([38.86964,-129.5657362]).appendPoint([24.8701731,-129.6879077]).appendPoint([24.9923446,-143.6873746]).close().innerToCAG()
).union(
    new CSG.Path2D([[25.1585851,-162.7366492],[39.158052,-162.6144777]]).appendPoint([39.0358805,-148.6150108]).appendPoint([25.0364136,-148.7371823]).appendPoint([25.1585851,-162.7366492]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5871252,-181.7400005],[44.5865921,-181.617829]]).appendPoint([44.4644206,-167.6183621]).appendPoint([30.4649537,-167.7405336]).appendPoint([30.5871252,-181.7400005]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.8785309,-141.1868748],[82.8779978,-141.3090463]]).appendPoint([83.0001693,-127.3095794]).appendPoint([69.0007024,-127.1874079]).appendPoint([68.8785309,-141.1868748]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.9714379,-105.3766614],[62.9709048,-105.2544899]]).appendPoint([62.8487333,-91.255023]).appendPoint([48.8492664,-91.3771945]).appendPoint([48.9714379,-105.3766614]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.1376784,-124.4259361],[63.1371453,-124.3037646]]).appendPoint([63.0149738,-110.3042977]).appendPoint([49.0155069,-110.4264692]).appendPoint([49.1376784,-124.4259361]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.3772522,-84.0390509],[83.3767191,-84.1612224]]).appendPoint([83.4988906,-70.1617555]).appendPoint([69.4994237,-70.039584]).appendPoint([69.3772522,-84.0390509]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.2110118,-103.0883255],[83.2104787,-103.210497]]).appendPoint([83.3326502,-89.2110301]).appendPoint([69.3331833,-89.0888586]).appendPoint([69.2110118,-103.0883255]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.0447713,-122.1376002],[83.0442382,-122.2597717]]).appendPoint([83.1664097,-108.2603048]).appendPoint([69.1669428,-108.1381333]).appendPoint([69.0447713,-122.1376002]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.7559227,-86.4936273],[43.7553896,-86.3714558]]).appendPoint([43.6332181,-72.3719889]).appendPoint([29.6337512,-72.4941604]).appendPoint([29.7559227,-86.4936273]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.9221632,-105.5429019],[43.9216301,-105.4207304]]).appendPoint([43.7994586,-91.4212635]).appendPoint([29.7999917,-91.543435]).appendPoint([29.9221632,-105.5429019]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.8261041,-124.6380999],[38.825571,-124.5159284]]).appendPoint([38.7033995,-110.5164615]).appendPoint([24.7039326,-110.638633]).appendPoint([24.8261041,-124.6380999]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.289327,-161.7201247],[140.2732044,-162.3918185]]).appendPoint([140.9448982,-148.4079411]).appendPoint([126.9610208,-147.7362473]).appendPoint([126.289327,-161.7201247]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.9415025,-85.1072384],[206.9253799,-84.4355446]]).appendPoint([206.2536861,-70.4516672]).appendPoint([192.2698087,-71.123361]).appendPoint([192.9415025,-85.1072384]).close().innerToCAG()
).union(
    new CSG.Path2D([[193.8554859,-104.1353001],[207.8393633,-103.4636063]]).appendPoint([207.1676695,-89.4797289]).appendPoint([193.1837921,-90.1514227]).appendPoint([193.8554859,-104.1353001]).close().innerToCAG()
).union(
    new CSG.Path2D([[194.7694692,-123.1633619],[208.7533466,-122.4916681]]).appendPoint([208.0816528,-108.5077907]).appendPoint([194.0977754,-109.1794845]).appendPoint([194.7694692,-123.1633619]).close().innerToCAG()
).union(
    new CSG.Path2D([[195.6834526,-142.1914236],[209.66733,-141.5197298]]).appendPoint([208.9956362,-127.5358524]).appendPoint([195.0117588,-128.2075462]).appendPoint([195.6834526,-142.1914236]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.9254353,-86.2709338],[187.9093127,-85.59924]]).appendPoint([187.2376189,-71.6153626]).appendPoint([173.2537415,-72.2870564]).appendPoint([173.9254353,-86.2709338]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.9452604,-85.6078777],[143.9291378,-86.2795715]]).appendPoint([144.6008316,-72.2956941]).appendPoint([130.6169542,-71.6240003]).appendPoint([129.9452604,-85.6078777]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.0312771,-104.6359395],[143.0151545,-105.3076333]]).appendPoint([143.6868483,-91.3237559]).appendPoint([129.7029709,-90.6520621]).appendPoint([129.0312771,-104.6359395]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.1172937,-123.6640012],[142.1011711,-124.335695]]).appendPoint([142.7728649,-110.3518176]).appendPoint([128.7889875,-109.6801238]).appendPoint([128.1172937,-123.6640012]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.2033104,-142.6920629],[141.1871878,-143.3637567]]).appendPoint([141.8588816,-129.3798793]).appendPoint([127.8750042,-128.7081855]).appendPoint([127.2033104,-142.6920629]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.8770711,-180.6762192],[137.8609485,-181.347913]]).appendPoint([138.5326423,-167.3640356]).appendPoint([124.5487649,-166.6923418]).appendPoint([123.8770711,-180.6762192]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.597436,-161.2194853],[210.5813134,-160.5477915]]).appendPoint([209.9096196,-146.5639141]).appendPoint([195.9257422,-147.2356079]).appendPoint([196.597436,-161.2194853]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.8394186,-105.2989955],[188.823296,-104.6273017]]).appendPoint([188.1516022,-90.6434243]).appendPoint([174.1677248,-91.3151181]).appendPoint([174.8394186,-105.2989955]).close().innerToCAG()
).union(
    new CSG.Path2D([[175.753402,-124.3270573],[189.7372794,-123.6553635]]).appendPoint([189.0655856,-109.6714861]).appendPoint([175.0817082,-110.3431799]).appendPoint([175.753402,-124.3270573]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.6673853,-143.355119],[190.6512627,-142.6834252]]).appendPoint([189.9795689,-128.6995478]).appendPoint([175.9956915,-129.3712416]).appendPoint([176.6673853,-143.355119]).close().innerToCAG()
).union(
    new CSG.Path2D([[177.5813687,-162.3831807],[191.5652461,-161.7114869]]).appendPoint([190.8935523,-147.7276095]).appendPoint([176.9096749,-148.3993033]).appendPoint([177.5813687,-162.3831807]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.9936247,-181.3392752],[193.9775021,-180.6675814]]).appendPoint([193.3058083,-166.683704]).appendPoint([179.3219309,-167.3553978]).appendPoint([179.9936247,-181.3392752]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.2144415,-160.6675164],[121.2011166,-161.2781879]]).appendPoint([121.8117881,-147.2915128]).appendPoint([107.825113,-146.6808413]).appendPoint([107.2144415,-160.6675164]).close().innerToCAG()
).union(
    new CSG.Path2D([[108.0453909,-141.6356478],[122.032066,-142.2463193]]).appendPoint([122.6427375,-128.2596442]).appendPoint([108.6560624,-127.6489727]).appendPoint([108.0453909,-141.6356478]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.538239,-84.5400421],[124.5249141,-85.1507136]]).appendPoint([125.1355856,-71.1640385]).appendPoint([111.1489105,-70.553367]).appendPoint([110.538239,-84.5400421]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.7072896,-103.5719107],[123.6939647,-104.1825822]]).appendPoint([124.3046362,-90.1959071]).appendPoint([110.3179611,-89.5852356]).appendPoint([109.7072896,-103.5719107]).close().innerToCAG()
).union(
    new CSG.Path2D([[108.8763402,-122.6037792],[122.8630153,-123.2144507]]).appendPoint([123.4736868,-109.2277756]).appendPoint([109.4870117,-108.6171041]).appendPoint([108.8763402,-122.6037792]).close().innerToCAG()
).union(
    new CSG.Path2D([[235.0621183,-159.4673641],[249.0609189,-159.2841097]]).appendPoint([248.8776645,-145.2853091]).appendPoint([234.8788639,-145.4685635]).appendPoint([235.0621183,-159.4673641]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.314048,-102.3222601],[248.3128486,-102.1390057]]).appendPoint([248.1295942,-88.1402051]).appendPoint([234.1307936,-88.3234595]).appendPoint([234.314048,-102.3222601]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.5634048,-121.3706281],[248.5622054,-121.1873737]]).appendPoint([248.378951,-107.1885731]).appendPoint([234.3801504,-107.3718275]).appendPoint([234.5634048,-121.3706281]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.8127615,-140.4189961],[248.8115621,-140.2357417]]).appendPoint([248.6283077,-126.2369411]).appendPoint([234.6295071,-126.4201955]).appendPoint([234.8127615,-140.4189961]).close().innerToCAG()
).union(
    new CSG.Path2D([[234.0646913,-83.2738921],[248.0634919,-83.0906377]]).appendPoint([247.8802375,-69.0918371]).appendPoint([233.8814369,-69.2750915]).appendPoint([234.0646913,-83.2738921]).close().innerToCAG()
).union(
    new CSG.Path2D([[235.311475,-178.5157321],[249.3102756,-178.3324777]]).appendPoint([249.1270212,-164.3336771]).appendPoint([235.1282206,-164.5169315]).appendPoint([235.311475,-178.5157321]).close().innerToCAG()
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

        