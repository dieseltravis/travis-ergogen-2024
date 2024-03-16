function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[13.2316779,-104.9369255],[23.8037333,-60.9871093]]).appendArc([25.7250185,-59.4549984],{"radius":2,"clockwise":true,"large":false}).appendPoint([36.6426895,-59.3280868]).appendArc([36.7413811,-59.3245012],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.7575324,-56.8801927]).appendArc([76.7979267,-56.8781351],{"radius":2,"clockwise":true,"large":false}).appendPoint([97.7321084,-56.0238893]).appendArc([97.9566486,-56.0273447],{"radius":2,"clockwise":true,"large":false}).appendPoint([118.8534746,-57.5252551]).appendArc([118.8994966,-57.5280212],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.3236516,-59.0534727]).appendArc([151.5371614,-59.5402817],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.5005862,-63.8454971]).appendArc([157.8197586,-64.3346396],{"radius":2,"clockwise":false,"large":false}).appendPoint([168.3697945,-64.2888048]).appendArc([169.6803213,-63.7920435],{"radius":2,"clockwise":false,"large":false}).appendPoint([174.621322,-59.4558534]).appendArc([175.8316956,-58.962037],{"radius":2,"clockwise":true,"large":false}).appendPoint([206.6316826,-57.283381]).appendArc([206.7088582,-57.2776754],{"radius":2,"clockwise":false,"large":false}).appendPoint([227.5512497,-55.3307084]).appendArc([227.7756631,-55.3224076],{"radius":2,"clockwise":true,"large":false}).appendPoint([248.7175943,-55.7245203]).appendArc([248.7729659,-55.726351],{"radius":2,"clockwise":true,"large":false}).appendPoint([288.8373551,-57.6067826]).appendArc([288.9194635,-57.6089479],{"radius":2,"clockwise":false,"large":false}).appendPoint([404.1764282,-58.2808343]).appendArc([406.1647354,-60.2924591],{"radius":2,"clockwise":true,"large":false}).appendPoint([405.8773909,-109.5842116]).appendArc([405.7959679,-110.1375244],{"radius":2,"clockwise":true,"large":false}).appendPoint([398.1703394,-136.0328031]).appendArc([397.7302596,-136.8147341],{"radius":2,"clockwise":true,"large":false}).appendPoint([340.4130207,-199.7305138]).appendArc([338.1844839,-200.237631],{"radius":2,"clockwise":true,"large":false}).appendPoint([302.013536,-185.604092]).appendArc([301.2751212,-185.4581459],{"radius":2,"clockwise":false,"large":false}).appendPoint([269.1721753,-185.2710029]).appendArc([268.9959419,-185.2621915],{"radius":2,"clockwise":true,"large":false}).appendPoint([250.3215035,-183.5000073]).appendArc([250.1390965,-183.4911694],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.0169665,-183.4058123]).appendArc([218.7016089,-183.4299558],{"radius":2,"clockwise":false,"large":false}).appendPoint([205.5894291,-185.4863397]).appendArc([205.4257017,-185.5051441],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.091112,-188.2405869]).appendArc([167.9489674,-188.2459296],{"radius":2,"clockwise":true,"large":false}).appendPoint([158.3542492,-188.2651208]).appendArc([158.2156642,-188.2605914],{"radius":2,"clockwise":true,"large":false}).appendPoint([120.8394668,-185.7397489]).appendArc([120.7244064,-185.7286405],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.5348212,-184.0693055]).appendArc([107.2468826,-184.0540303],{"radius":2,"clockwise":false,"large":false}).appendPoint([76.1313155,-184.6499035]).appendArc([75.9350839,-184.663335],{"radius":2,"clockwise":false,"large":false}).appendPoint([57.3312794,-186.8600198]).appendArc([57.1200014,-186.8736828],{"radius":2,"clockwise":true,"large":false}).appendPoint([26.7806134,-187.2263604]).appendArc([25.0583057,-186.2815753],{"radius":2,"clockwise":true,"large":false}).appendPoint([14.2018033,-168.7986769]).appendArc([13.900999,-167.7668442],{"radius":2,"clockwise":true,"large":false}).appendPoint([13.1763454,-105.4279267]).appendArc([13.2316779,-104.9369255],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[25.5075495,-174.7153129],"radius":1.5})
.union(
    CAG.circle({"center":[317.2523457,-186.6853277],"radius":1.5})
).union(
    CAG.circle({"center":[394.4136048,-120.2239145],"radius":1.5})
).union(
    CAG.circle({"center":[401.1387339,-64.7382362],"radius":1.5})
).union(
    CAG.circle({"center":[179.4409353,-155.1036924],"radius":1.5})
).union(
    CAG.circle({"center":[147.2717316,-155.2143334],"radius":1.5})
).union(
    CAG.circle({"center":[176.782678,-98.0155484],"radius":1.5})
).union(
    CAG.circle({"center":[149.5991494,-98.1117449],"radius":1.5})
).union(
    CAG.circle({"center":[29.2428513,-65.8895431],"radius":1.5})
).union(
    new CSG.Path2D([[367.9776544,-161.269458],[377.4059726,-150.9202158]]).appendPoint([367.0567304,-141.4918976]).appendPoint([357.6284122,-151.8411398]).appendPoint([367.9776544,-161.269458]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.0294862,-180.1255247],[334.4578044,-169.7762825]]).appendPoint([324.1085622,-160.3479643]).appendPoint([314.680244,-170.6972065]).appendPoint([325.0294862,-180.1255247]).close().innerToCAG()
).union(
    new CSG.Path2D([[366.7245399,-134.3578489],[376.1528581,-124.0086067]]).appendPoint([365.8036159,-114.5802885]).appendPoint([356.3752977,-124.9295307]).appendPoint([366.7245399,-134.3578489]).close().innerToCAG()
).union(
    new CSG.Path2D([[380.8069017,-147.1870962],[390.2352199,-136.837854]]).appendPoint([379.8859777,-127.4095358]).appendPoint([370.4576595,-137.758778]).appendPoint([380.8069017,-147.1870962]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4511549,-82.512347],[235.4452369,-82.1053238]]).appendPoint([235.0382137,-68.1112418]).appendPoint([221.0441317,-68.518265]).appendPoint([221.4511549,-82.512347]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.0049972,-101.5542944],[235.9990792,-101.1472712]]).appendPoint([235.592056,-87.1531892]).appendPoint([221.597974,-87.5602124]).appendPoint([222.0049972,-101.5542944]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.5588394,-120.5962417],[236.5529214,-120.1892185]]).appendPoint([236.1458982,-106.1951365]).appendPoint([222.1518162,-106.6021597]).appendPoint([222.5588394,-120.5962417]).close().innerToCAG()
).union(
    new CSG.Path2D([[223.1126817,-139.6381891],[237.1067637,-139.2311659]]).appendPoint([236.6997405,-125.2370839]).appendPoint([222.7056585,-125.6441071]).appendPoint([223.1126817,-139.6381891]).close().innerToCAG()
).union(
    new CSG.Path2D([[223.666524,-158.6801364],[237.660606,-158.2731132]]).appendPoint([237.2535828,-144.2790312]).appendPoint([223.2595008,-144.6860544]).appendPoint([223.666524,-158.6801364]).close().innerToCAG()
).union(
    new CSG.Path2D([[224.2203663,-177.7220838],[238.2144483,-177.3150606]]).appendPoint([237.8074251,-163.3209786]).appendPoint([223.8133431,-163.7280018]).appendPoint([224.2203663,-177.7220838]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.9337716,-84.5776474],[214.9186187,-83.9264557]]).appendPoint([214.267427,-69.9416086]).appendPoint([200.2825799,-70.5928003]).appendPoint([200.9337716,-84.5776474]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.8198574,-103.6070288],[215.8047045,-102.9558371]]).appendPoint([215.1535128,-88.97099]).appendPoint([201.1686657,-89.6221817]).appendPoint([201.8198574,-103.6070288]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.7059432,-122.6364101],[216.6907903,-121.9852184]]).appendPoint([216.0395986,-108.0003713]).appendPoint([202.0547515,-108.651563]).appendPoint([202.7059432,-122.6364101]).close().innerToCAG()
).union(
    new CSG.Path2D([[203.5920289,-141.6657914],[217.576876,-141.0145997]]).appendPoint([216.9256843,-127.0297526]).appendPoint([202.9408372,-127.6809443]).appendPoint([203.5920289,-141.6657914]).close().innerToCAG()
).union(
    new CSG.Path2D([[204.4781147,-160.6951727],[218.4629618,-160.043981]]).appendPoint([217.8117701,-146.0591339]).appendPoint([203.826923,-146.7103256]).appendPoint([204.4781147,-160.6951727]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.9160187,-85.7134626],[195.9008658,-85.0622709]]).appendPoint([195.2496741,-71.0774238]).appendPoint([181.264827,-71.7286155]).appendPoint([181.9160187,-85.7134626]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.8021045,-104.7428439],[196.7869516,-104.0916522]]).appendPoint([196.1357599,-90.1068051]).appendPoint([182.1509128,-90.7579968]).appendPoint([182.8021045,-104.7428439]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.6881903,-123.7722253],[197.6730374,-123.1210336]]).appendPoint([197.0218457,-109.1361865]).appendPoint([183.0369986,-109.7873782]).appendPoint([183.6881903,-123.7722253]).close().innerToCAG()
).union(
    new CSG.Path2D([[184.574276,-142.8016066],[198.5591231,-142.1504149]]).appendPoint([197.9079314,-128.1655678]).appendPoint([183.9230843,-128.8167595]).appendPoint([184.574276,-142.8016066]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.4603618,-161.8309879],[199.4452089,-161.1797962]]).appendPoint([198.7940172,-147.1949491]).appendPoint([184.8091701,-147.8461408]).appendPoint([185.4603618,-161.8309879]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.747097,-180.8882775],[199.7319441,-180.2370858]]).appendPoint([199.0807524,-166.2522387]).appendPoint([185.0959053,-166.9034304]).appendPoint([185.747097,-180.8882775]).close().innerToCAG()
).union(
    new CSG.Path2D([[386.494333,-85.1782159],[400.4940951,-85.259827]]).appendPoint([400.5757062,-71.2600649]).appendPoint([386.5759441,-71.1784538]).appendPoint([386.494333,-85.1782159]).close().innerToCAG()
).union(
    new CSG.Path2D([[386.3832836,-104.2278923],[400.3830457,-104.3095034]]).appendPoint([400.4646568,-90.3097413]).appendPoint([386.4648947,-90.2281302]).appendPoint([386.3832836,-104.2278923]).close().innerToCAG()
).union(
    new CSG.Path2D([[367.4446566,-85.0671666],[381.4444187,-85.1487777]]).appendPoint([381.5260298,-71.1490156]).appendPoint([367.5262677,-71.0674045]).appendPoint([367.4446566,-85.0671666]).close().innerToCAG()
).union(
    new CSG.Path2D([[367.3336072,-104.1168429],[381.3333693,-104.198454]]).appendPoint([381.4149804,-90.1986919]).appendPoint([367.4152183,-90.1170808]).appendPoint([367.3336072,-104.1168429]).close().innerToCAG()
).union(
    new CSG.Path2D([[338.8701422,-84.9005924],[352.8699043,-84.9822035]]).appendPoint([352.9515154,-70.9824414]).appendPoint([338.9517533,-70.9008303]).appendPoint([338.8701422,-84.9005924]).close().innerToCAG()
).union(
    new CSG.Path2D([[338.6480434,-122.9999451],[352.6478055,-123.0815562]]).appendPoint([352.7294166,-109.0817941]).appendPoint([338.7296545,-109.000183]).appendPoint([338.6480434,-122.9999451]).close().innerToCAG()
).union(
    new CSG.Path2D([[319.8204658,-84.7895431],[333.8202279,-84.8711542]]).appendPoint([333.901839,-70.8713921]).appendPoint([319.9020769,-70.789781]).appendPoint([319.8204658,-84.7895431]).close().innerToCAG()
).union(
    new CSG.Path2D([[319.598367,-122.8888958],[333.5981291,-122.9705069]]).appendPoint([333.6797402,-108.9707448]).appendPoint([319.6799781,-108.8891337]).appendPoint([319.598367,-122.8888958]).close().innerToCAG()
).union(
    new CSG.Path2D([[300.7707895,-84.6784936],[314.7705516,-84.7601047]]).appendPoint([314.8521627,-70.7603426]).appendPoint([300.8524006,-70.6787315]).appendPoint([300.7707895,-84.6784936]).close().innerToCAG()
).union(
    new CSG.Path2D([[300.6597401,-103.72817],[314.6595022,-103.8097811]]).appendPoint([314.7411133,-89.810019]).appendPoint([300.7413512,-89.7284079]).appendPoint([300.6597401,-103.72817]).close().innerToCAG()
).union(
    new CSG.Path2D([[300.5486907,-122.7778463],[314.5484528,-122.8594574]]).appendPoint([314.6300639,-108.8596953]).appendPoint([300.6303018,-108.7780842]).appendPoint([300.5486907,-122.7778463]).close().innerToCAG()
).union(
    new CSG.Path2D([[305.8000502,-141.8587826],[319.7998123,-141.9403937]]).appendPoint([319.8814234,-127.9406316]).appendPoint([305.8816613,-127.8590205]).appendPoint([305.8000502,-141.8587826]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.7211131,-84.5674441],[295.7208752,-84.6490552]]).appendPoint([295.8024863,-70.6492931]).appendPoint([281.8027242,-70.567682]).appendPoint([281.7211131,-84.5674441]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.6100637,-103.6171205],[295.6098258,-103.6987316]]).appendPoint([295.6914369,-89.6989695]).appendPoint([281.6916748,-89.6173584]).appendPoint([281.6100637,-103.6171205]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.4990143,-122.6667968],[295.4987764,-122.7484079]]).appendPoint([295.5803875,-108.7486458]).appendPoint([281.5806254,-108.6670347]).appendPoint([281.4990143,-122.6667968]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.387965,-141.7164731],[295.3877271,-141.7980842]]).appendPoint([295.4693382,-127.7983221]).appendPoint([281.4695761,-127.716711]).appendPoint([281.387965,-141.7164731]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.5603874,-103.5060711],[276.5601495,-103.5876822]]).appendPoint([276.6417606,-89.5879201]).appendPoint([262.6419985,-89.506309]).appendPoint([262.5603874,-103.5060711]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.449338,-122.5557474],[276.4491001,-122.6373585]]).appendPoint([276.5307112,-108.6375964]).appendPoint([262.5309491,-108.5559853]).appendPoint([262.449338,-122.5557474]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.3382886,-141.6054237],[276.3380507,-141.6870348]]).appendPoint([276.4196618,-127.6872727]).appendPoint([262.4198997,-127.6056616]).appendPoint([262.3382886,-141.6054237]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.1161898,-179.7047764],[276.1159519,-179.7863875]]).appendPoint([276.197563,-165.7866254]).appendPoint([262.1978009,-165.7050143]).appendPoint([262.1161898,-179.7047764]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.6204426,-83.8376955],[83.6202047,-83.9193066]]).appendPoint([83.7018158,-69.9195445]).appendPoint([69.7020537,-69.8379334]).appendPoint([69.6204426,-83.8376955]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.5093932,-102.8873718],[83.5091553,-102.9689829]]).appendPoint([83.5907664,-88.9692208]).appendPoint([69.5910043,-88.8876097]).appendPoint([69.5093932,-102.8873718]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.3983438,-121.9370481],[83.3981059,-122.0186592]]).appendPoint([83.479717,-108.0188971]).appendPoint([69.4799549,-107.937286]).appendPoint([69.3983438,-121.9370481]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.2872944,-140.9867245],[83.2870565,-141.0683356]]).appendPoint([83.3686676,-127.0685735]).appendPoint([69.3689055,-126.9869624]).appendPoint([69.2872944,-140.9867245]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.176245,-160.0364008],[83.1760071,-160.1180119]]).appendPoint([83.2576182,-146.1182498]).appendPoint([69.2578561,-146.0366387]).appendPoint([69.176245,-160.0364008]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.0651956,-179.0860771],[83.0649577,-179.1676882]]).appendPoint([83.1465688,-165.1679261]).appendPoint([69.1468067,-165.086315]).appendPoint([69.0651956,-179.0860771]).close().innerToCAG()
).union(
    new CSG.Path2D([[286.6393245,-160.7974094],[300.6390866,-160.8790205]]).appendPoint([300.7206977,-146.8792584]).appendPoint([286.7209356,-146.7976473]).appendPoint([286.6393245,-160.7974094]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.1658662,-179.8158258],[295.1656283,-179.8974369]]).appendPoint([295.2472394,-165.8976748]).appendPoint([281.2474773,-165.8160637]).appendPoint([281.1658662,-179.8158258]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.2272392,-160.6551001],[276.2270013,-160.7367112]]).appendPoint([276.3086124,-146.7369491]).appendPoint([262.3088503,-146.655338]).appendPoint([262.2272392,-160.6551001]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.2765341,-105.234337],[63.2755883,-105.0716062]]).appendPoint([63.1128575,-91.072552]).appendPoint([49.1138033,-91.2352828]).appendPoint([49.2765341,-105.234337]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.1622547,-181.4291892],[64.1613089,-181.2664584]]).appendPoint([63.9985781,-167.2674042]).appendPoint([49.9995239,-167.430135]).appendPoint([50.1622547,-181.4291892]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.4979642,-124.2830501],[63.4970184,-124.1203193]]).appendPoint([63.3342876,-110.1212651]).appendPoint([49.3352334,-110.2839959]).appendPoint([49.4979642,-124.2830501]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.9408246,-162.3804761],[63.9398788,-162.2177453]]).appendPoint([63.777148,-148.2186911]).appendPoint([49.7780938,-148.3814219]).appendPoint([49.9408246,-162.3804761]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.0063908,-86.4070541],[44.005445,-86.2443233]]).appendPoint([43.8427142,-72.2452691]).appendPoint([29.84366,-72.4079999]).appendPoint([30.0063908,-86.4070541]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.227821,-105.4557672],[44.2268752,-105.2930364]]).appendPoint([44.0641444,-91.2939822]).appendPoint([30.0650902,-91.456713]).appendPoint([30.227821,-105.4557672]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.0596036,-82.8045935],[256.0586578,-82.6418627]]).appendPoint([255.895927,-68.6428085]).appendPoint([241.8968728,-68.8055393]).appendPoint([242.0596036,-82.8045935]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.2810337,-101.8533065],[256.2800879,-101.6905757]]).appendPoint([256.1173571,-87.6915215]).appendPoint([242.1183029,-87.8542523]).appendPoint([242.2810337,-101.8533065]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.5024639,-120.9020195],[256.5015181,-120.7392887]]).appendPoint([256.3387873,-106.7402345]).appendPoint([242.3397331,-106.9029653]).appendPoint([242.5024639,-120.9020195]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.9453243,-158.9994456],[256.9443785,-158.8367148]]).appendPoint([256.7816477,-144.8376606]).appendPoint([242.7825935,-145.0003914]).appendPoint([242.9453243,-158.9994456]).close().innerToCAG()
).union(
    new CSG.Path2D([[25.1871067,-124.5656496],[39.1861609,-124.4029188]]).appendPoint([39.0234301,-110.4038646]).appendPoint([25.0243759,-110.5665954]).appendPoint([25.1871067,-124.5656496]).close().innerToCAG()
).union(
    new CSG.Path2D([[25.4085369,-143.6143626],[39.4075911,-143.4516318]]).appendPoint([39.2448603,-129.4525776]).appendPoint([25.2458061,-129.6153084]).appendPoint([25.4085369,-143.6143626]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.7238941,-139.9507326],[256.7229483,-139.7880018]]).appendPoint([256.5602175,-125.7889476]).appendPoint([242.5611633,-125.9516784]).appendPoint([242.7238941,-139.9507326]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.7193944,-143.3317631],[63.7184486,-143.1690323]]).appendPoint([63.5557178,-129.1699781]).appendPoint([49.5566636,-129.3327089]).appendPoint([49.7193944,-143.3317631]).close().innerToCAG()
).union(
    new CSG.Path2D([[25.629967,-162.6630757],[39.6290212,-162.5003449]]).appendPoint([39.4662904,-148.5012907]).appendPoint([25.4672362,-148.6640215]).appendPoint([25.629967,-162.6630757]).close().innerToCAG()
).union(
    new CSG.Path2D([[243.1667544,-178.0481587],[257.1658086,-177.8854279]]).appendPoint([257.0030778,-163.8863737]).appendPoint([243.0040236,-164.0491045]).appendPoint([243.1667544,-178.0481587]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.1135417,-181.6506194],[45.1125959,-181.4878886]]).appendPoint([44.9498651,-167.4888344]).appendPoint([30.9508109,-167.6515652]).appendPoint([31.1135417,-181.6506194]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.217797,-82.8490221],[104.2140026,-83.1749503]]).appendPoint([104.5399308,-69.1787447]).appendPoint([90.5437252,-68.8528165]).appendPoint([90.217797,-82.8490221]).close().innerToCAG()
).union(
    new CSG.Path2D([[89.7743018,-101.893859],[103.7705074,-102.2197872]]).appendPoint([104.0964356,-88.2235816]).appendPoint([90.10023,-87.8976534]).appendPoint([89.7743018,-101.893859]).close().innerToCAG()
).union(
    new CSG.Path2D([[89.3308066,-120.9386959],[103.3270122,-121.2646241]]).appendPoint([103.6529404,-107.2684185]).appendPoint([89.6567348,-106.9424903]).appendPoint([89.3308066,-120.9386959]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.8873114,-139.9835329],[102.883517,-140.3094611]]).appendPoint([103.2094452,-126.3132555]).appendPoint([89.2132396,-125.9873273]).appendPoint([88.8873114,-139.9835329]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.4438162,-159.0283698],[102.4400218,-159.354298]]).appendPoint([102.76595,-145.3580924]).appendPoint([88.7697444,-145.0321642]).appendPoint([88.4438162,-159.0283698]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.000321,-178.0732067],[101.9965266,-178.3991349]]).appendPoint([102.3224548,-164.4029293]).appendPoint([88.3262492,-164.0770011]).appendPoint([88.000321,-178.0732067]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.782708,-84.2194312],[124.7710937,-84.7895773]]).appendPoint([125.3412398,-70.8011916]).appendPoint([111.3528541,-70.2310455]).appendPoint([110.782708,-84.2194312]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.0069021,-103.2536274],[123.9952878,-103.8237735]]).appendPoint([124.5654339,-89.8353878]).appendPoint([110.5770482,-89.2652417]).appendPoint([110.0069021,-103.2536274]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.2310962,-122.2878236],[123.2194819,-122.8579697]]).appendPoint([123.789628,-108.869584]).appendPoint([109.8012423,-108.2994379]).appendPoint([109.2310962,-122.2878236]).close().innerToCAG()
).union(
    new CSG.Path2D([[108.4552902,-141.3220197],[122.4436759,-141.8921658]]).appendPoint([123.013822,-127.9037801]).appendPoint([109.0254363,-127.333634]).appendPoint([108.4552902,-141.3220197]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.4062253,-85.2694646],[144.394611,-85.8396107]]).appendPoint([144.9647571,-71.851225]).appendPoint([130.9763714,-71.2810789]).appendPoint([130.4062253,-85.2694646]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.6304194,-104.3036608],[143.6188051,-104.8738069]]).appendPoint([144.1889512,-90.8854212]).appendPoint([130.2005655,-90.3152751]).appendPoint([129.6304194,-104.3036608]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.8546135,-123.337857],[142.8429992,-123.9080031]]).appendPoint([143.4131453,-109.9196174]).appendPoint([129.4247596,-109.3494713]).appendPoint([128.8546135,-123.337857]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.6794843,-160.3562159],[121.66787,-160.926362]]).appendPoint([122.2380161,-146.9379763]).appendPoint([108.2496304,-146.3678302]).appendPoint([107.6794843,-160.3562159]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.3030016,-161.4062493],[141.2913873,-161.9763954]]).appendPoint([141.8615334,-147.9880097]).appendPoint([127.8731477,-147.4178636]).appendPoint([127.3030016,-161.4062493]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.5271957,-180.4404455],[140.5155814,-181.0105916]]).appendPoint([141.0857275,-167.0222059]).appendPoint([127.0973418,-166.4520598]).appendPoint([126.5271957,-180.4404455]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.0788075,-142.3720531],[142.0671932,-142.9421992]]).appendPoint([142.6373393,-128.9538135]).appendPoint([128.6489536,-128.3836674]).appendPoint([128.0788075,-142.3720531]).close().innerToCAG()
).union(
    new CSG.Path2D([[338.536994,-142.0496214],[346.9342264,-142.0985728]]).appendPoint([353.8952926,-148.4402107]).appendPoint([363.3236108,-138.0909685]).appendPoint([352.9743686,-128.6626503]).appendPoint([352.6129581,-129.0593621]).appendPoint([352.6183672,-128.1314704]).appendPoint([338.6186051,-128.0498593]).appendPoint([338.536994,-142.0496214]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.0718253,-103.8704794],[352.7588549,-104.0318798]]).appendPoint([352.840466,-90.0321177]).appendPoint([325.1534364,-89.8707173]).appendPoint([325.0718253,-103.8704794]).close().innerToCAG()
).union(
    new CSG.Path2D([[345.8921487,-180.1931454],[352.3146574,-180.2305852]]).appendPoint([352.3250316,-178.4509725]).appendPoint([361.3694135,-168.5231681]).appendPoint([352.4303782,-160.37957]).appendPoint([352.5073179,-147.1811467]).appendPoint([338.5075558,-147.0995356]).appendPoint([338.504099,-147.6925163]).appendPoint([336.9378095,-146.2656025]).appendPoint([327.5094913,-156.6148447]).appendPoint([337.8587335,-166.0431629]).appendPoint([342.341874,-161.1221255]).appendPoint([349.137204,-161.1617386]).appendPoint([344.5608024,-166.1851465]).appendPoint([338.3965064,-166.149212]).appendPoint([338.3546673,-173.3263844]).appendPoint([338.190924,-173.1772117]).appendPoint([328.7626058,-183.5264539]).appendPoint([339.111848,-192.9547721]).appendPoint([348.5401662,-182.6055299]).appendPoint([345.8921487,-180.1931454]).close().innerToCAG()
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

        