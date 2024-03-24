function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[12.4694341,-105.0302281],[23.3603086,-61.158329]]).appendArc([25.292667,-59.640208],{"radius":2,"clockwise":true,"large":false}).appendPoint([36.2122791,-59.5925619]).appendArc([36.3083889,-59.5898313],{"radius":2,"clockwise":false,"large":false}).appendPoint([77.1407823,-57.4465255]).appendArc([77.1845375,-57.4447088],{"radius":2,"clockwise":true,"large":false}).appendPoint([98.922729,-56.7805022]).appendArc([99.1458004,-56.7861403],{"radius":2,"clockwise":true,"large":false}).appendPoint([119.4295206,-58.4344379]).appendArc([119.4795382,-58.437872],{"radius":2,"clockwise":false,"large":false}).appendPoint([149.8912196,-60.1431855]).appendArc([151.1006652,-60.6387645],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.0329106,-64.9800877]).appendArc([157.3484967,-65.4787952],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.8985873,-65.5095601]).appendArc([169.2126865,-65.0223268],{"radius":2,"clockwise":false,"large":false}).appendPoint([174.1850396,-60.7221255]).appendArc([175.3989668,-60.2371099],{"radius":2,"clockwise":true,"large":false}).appendPoint([206.2137768,-58.781959]).appendArc([206.2841202,-58.7773935],{"radius":2,"clockwise":false,"large":false}).appendPoint([228.3456591,-56.9546202]).appendArc([228.5652393,-56.9485821],{"radius":2,"clockwise":true,"large":false}).appendPoint([249.5069839,-57.5236185]).appendArc([249.5612501,-57.5258463],{"radius":2,"clockwise":true,"large":false}).appendPoint([289.932435,-59.7326612]).appendArc([289.9892442,-59.7349572],{"radius":2,"clockwise":false,"large":false}).appendPoint([405.2213121,-62.752415]).appendArc([407.1682727,-64.8040836],{"radius":2,"clockwise":true,"large":false}).appendPoint([405.8788225,-114.0461958]).appendArc([405.765286,-114.6600556],{"radius":2,"clockwise":true,"large":false}).appendPoint([397.176243,-138.9721126]).appendArc([396.75911,-139.6635003],{"radius":2,"clockwise":true,"large":false}).appendPoint([338.9483792,-202.2027963]).appendArc([336.7263828,-202.6978853],{"radius":2,"clockwise":true,"large":false}).appendPoint([300.4735848,-187.9565674]).appendArc([299.7725872,-187.8099431],{"radius":2,"clockwise":false,"large":false}).appendPoint([274.1352115,-187.1386049]).appendArc([274.0554917,-187.1381067],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.046925,-187.2203295]).appendArc([267.81685,-187.2102174],{"radius":2,"clockwise":true,"large":false}).appendPoint([249.1826715,-185.3117828]).appendArc([249.0001911,-185.3015858],{"radius":2,"clockwise":false,"large":false}).appendPoint([217.8777881,-184.9867891]).appendArc([217.5656809,-185.0080997],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.235484,-186.9745531]).appendArc([204.0752642,-186.9916278],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.7199592,-189.4560518]).appendArc([166.5777796,-189.4603623],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.9831763,-189.4098905]).appendArc([156.8446281,-189.4043551],{"radius":2,"clockwise":true,"large":false}).appendPoint([119.4908161,-186.6124405]).appendArc([119.3696839,-186.5996674],{"radius":2,"clockwise":true,"large":false}).appendPoint([106.5980195,-184.8582417]).appendArc([106.3048025,-184.8400379],{"radius":2,"clockwise":false,"large":false}).appendPoint([74.9877311,-185.2004543]).appendArc([74.7932055,-185.2121882],{"radius":2,"clockwise":false,"large":false}).appendPoint([55.9718034,-187.2716244]).appendArc([55.7629886,-187.2834717],{"radius":2,"clockwise":true,"large":false}).appendPoint([25.4205494,-187.4158663]).appendArc([23.7051467,-186.4586013],{"radius":2,"clockwise":true,"large":false}).appendPoint([12.9758653,-168.8973399]).appendArc([12.6825605,-167.8633506],{"radius":2,"clockwise":true,"large":false}).appendPoint([12.4105381,-105.5208147]).appendArc([12.4694341,-105.0302281],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[24.2383556,-174.8959054],"radius":1.5})
.union(
    CAG.circle({"center":[315.8311953,-189.0082407],"radius":1.5})
).union(
    CAG.circle({"center":[393.9957246,-123.8288613],"radius":1.5})
).union(
    CAG.circle({"center":[402.0528442,-69.1466653],"radius":1.5})
).union(
    CAG.circle({"center":[178.3100743,-156.4024362],"radius":1.5})
).union(
    CAG.circle({"center":[146.1409153,-156.2795096],"radius":1.5})
).union(
    CAG.circle({"center":[176.0663759,-99.2964966],"radius":1.5})
).union(
    CAG.circle({"center":[148.8828654,-99.1953244],"radius":1.5})
).union(
    CAG.circle({"center":[28.7636891,-66.1001244],"radius":1.5})
).union(
    new CSG.Path2D([[87.686672,-159.6785403],[101.6801422,-160.1060795]]).appendPoint([102.1076814,-146.1126093]).appendPoint([88.1142112,-145.6850701]).appendPoint([87.686672,-159.6785403]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.1049134,-178.7196553],[101.0983836,-179.1471945]]).appendPoint([101.5259228,-165.1537243]).appendPoint([87.5324526,-164.7261851]).appendPoint([87.1049134,-178.7196553]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.6682441,-140.6496408],[102.6617143,-141.07718]]).appendPoint([103.0892535,-127.0837098]).appendPoint([89.0957833,-126.6561706]).appendPoint([88.6682441,-140.6496408]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.2131469,-83.5507267],[105.2066171,-83.9782659]]).appendPoint([105.6341563,-69.9847957]).appendPoint([91.6406861,-69.5572565]).appendPoint([91.2131469,-83.5507267]).close().innerToCAG()
).union(
    new CSG.Path2D([[90.2315748,-102.5796263],[104.225045,-103.0071655]]).appendPoint([104.6525842,-89.0136953]).appendPoint([90.659114,-88.5861561]).appendPoint([90.2315748,-102.5796263]).close().innerToCAG()
).union(
    new CSG.Path2D([[89.6498162,-121.6207412],[103.6432864,-122.0482804]]).appendPoint([104.0708256,-108.0548102]).appendPoint([90.0773554,-107.627271]).appendPoint([89.6498162,-121.6207412]).close().innerToCAG()
).union(
    new CSG.Path2D([[386.9955397,-89.2844117],[400.9907422,-89.650889]]).appendPoint([401.3572195,-75.6556865]).appendPoint([387.362017,-75.2892092]).appendPoint([386.9955397,-89.2844117]).close().innerToCAG()
).union(
    new CSG.Path2D([[386.4968688,-108.3278837],[400.4920713,-108.694361]]).appendPoint([400.8585486,-94.6991585]).appendPoint([386.8633461,-94.3326812]).appendPoint([386.4968688,-108.3278837]).close().innerToCAG()
).union(
    new CSG.Path2D([[367.9520677,-88.7857408],[381.9472702,-89.1522181]]).appendPoint([382.3137475,-75.1570156]).appendPoint([368.318545,-74.7905383]).appendPoint([367.9520677,-88.7857408]).close().innerToCAG()
).union(
    new CSG.Path2D([[367.4533968,-107.8292128],[381.4485993,-108.1956901]]).appendPoint([381.8150766,-94.2004876]).appendPoint([367.8198741,-93.8340103]).appendPoint([367.4533968,-107.8292128]).close().innerToCAG()
).union(
    new CSG.Path2D([[339.3868596,-88.0377345],[353.3820621,-88.4042118]]).appendPoint([353.7485394,-74.4090093]).appendPoint([339.7533369,-74.042532]).appendPoint([339.3868596,-88.0377345]).close().innerToCAG()
).union(
    new CSG.Path2D([[320.3433874,-87.5390638],[334.3385899,-87.9055411]]).appendPoint([334.7050672,-73.9103386]).appendPoint([320.7098647,-73.5438613]).appendPoint([320.3433874,-87.5390638]).close().innerToCAG()
).union(
    new CSG.Path2D([[325.205379,-106.7229098],[339.2005815,-107.0893871]]).appendPoint([339.5670588,-93.0941846]).appendPoint([325.5718563,-92.7277073]).appendPoint([325.205379,-106.7229098]).close().innerToCAG()
).union(
    new CSG.Path2D([[319.3460457,-125.6260079],[333.3412482,-125.9924852]]).appendPoint([333.7077255,-111.9972827]).appendPoint([319.712523,-111.6308054]).appendPoint([319.3460457,-125.6260079]).close().innerToCAG()
).union(
    new CSG.Path2D([[301.2999154,-87.0403929],[315.2951179,-87.4068702]]).appendPoint([315.6615952,-73.4116677]).appendPoint([301.6663927,-73.0451904]).appendPoint([301.2999154,-87.0403929]).close().innerToCAG()
).union(
    new CSG.Path2D([[300.8012445,-106.0838649],[314.796447,-106.4503422]]).appendPoint([315.1629243,-92.4551397]).appendPoint([301.1677218,-92.0886624]).appendPoint([300.8012445,-106.0838649]).close().innerToCAG()
).union(
    new CSG.Path2D([[300.3025736,-125.1273369],[314.2977761,-125.4938142]]).appendPoint([314.6642534,-111.4986117]).appendPoint([300.6690509,-111.1321344]).appendPoint([300.3025736,-125.1273369]).close().innerToCAG()
).union(
    new CSG.Path2D([[282.2564434,-86.541722],[296.2516459,-86.9081993]]).appendPoint([296.6181232,-72.9129968]).appendPoint([282.6229207,-72.5465195]).appendPoint([282.2564434,-86.541722]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.7577725,-105.585194],[295.752975,-105.9516713]]).appendPoint([296.1194523,-91.9564688]).appendPoint([282.1242498,-91.5899915]).appendPoint([281.7577725,-105.585194]).close().innerToCAG()
).union(
    new CSG.Path2D([[281.2591016,-124.628666],[295.2543041,-124.9951433]]).appendPoint([295.6207814,-110.9999408]).appendPoint([281.6255789,-110.6334635]).appendPoint([281.2591016,-124.628666]).close().innerToCAG()
).union(
    new CSG.Path2D([[305.1645652,-144.3111829],[319.1597677,-144.6776602]]).appendPoint([319.526245,-130.6824577]).appendPoint([305.5310425,-130.3159804]).appendPoint([305.1645652,-144.3111829]).close().innerToCAG()
).union(
    new CSG.Path2D([[280.7604307,-143.6721381],[294.7556332,-144.0386154]]).appendPoint([295.1221105,-130.0434129]).appendPoint([281.126908,-129.6769356]).appendPoint([280.7604307,-143.6721381]).close().innerToCAG()
).union(
    new CSG.Path2D([[285.6224222,-162.855984],[299.6176247,-163.2224613]]).appendPoint([299.984102,-149.2272588]).appendPoint([285.9888995,-148.8607815]).appendPoint([285.6224222,-162.855984]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.7630889,-181.7590821],[293.7582914,-182.1255594]]).appendPoint([294.1247687,-168.1303569]).appendPoint([280.1295662,-167.7638796]).appendPoint([279.7630889,-181.7590821]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.1845005,-160.7574154],[256.1843672,-160.6963291]]).appendPoint([256.1232809,-146.6964624]).appendPoint([242.1234142,-146.7575487]).appendPoint([242.1845005,-160.7574154]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.6774228,-143.6889731],[62.6772895,-143.6278868]]).appendPoint([62.6162032,-129.6280201]).appendPoint([48.6163365,-129.6891064]).appendPoint([48.6774228,-143.6889731]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.7605438,-162.7387918],[62.7604105,-162.6777055]]).appendPoint([62.6993242,-148.6778388]).appendPoint([48.6994575,-148.7389251]).appendPoint([48.7605438,-162.7387918]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.8436649,-181.7886105],[62.8435316,-181.7275242]]).appendPoint([62.7824453,-167.7276575]).appendPoint([48.7825786,-167.7887438]).appendPoint([48.8436649,-181.7886105]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.3651542,-143.7950561],[38.3650209,-143.7339698]]).appendPoint([38.3039346,-129.7341031]).appendPoint([24.3040679,-129.7951894]).appendPoint([24.3651542,-143.7950561]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.4482753,-162.8448747],[38.448142,-162.7837884]]).appendPoint([38.3870557,-148.7839217]).appendPoint([24.387189,-148.845008]).appendPoint([24.4482753,-162.8448747]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.7938462,-181.8717315],[43.7937129,-181.8106452]]).appendPoint([43.7326266,-167.8107785]).appendPoint([29.7327599,-167.8718648]).appendPoint([29.7938462,-181.8717315]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.3013776,-141.7067241],[256.3012443,-141.6456378]]).appendPoint([256.240158,-127.6457711]).appendPoint([242.2402913,-127.7068574]).appendPoint([242.3013776,-141.7067241]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.0676235,-179.8081067],[256.0674902,-179.7470204]]).appendPoint([256.0064039,-165.7471537]).appendPoint([242.0065372,-165.80824]).appendPoint([242.0676235,-179.8081067]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.5111807,-105.5893358],[62.5110474,-105.5282495]]).appendPoint([62.4499611,-91.5283828]).appendPoint([48.4500944,-91.5894691]).appendPoint([48.5111807,-105.5893358]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.5943018,-124.6391545],[62.5941685,-124.5780682]]).appendPoint([62.5330822,-110.5782015]).appendPoint([48.5332155,-110.6392878]).appendPoint([48.5943018,-124.6391545]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.4613621,-105.6724569],[43.4612288,-105.6113706]]).appendPoint([43.4001425,-91.6115039]).appendPoint([29.4002758,-91.6725902]).appendPoint([29.4613621,-105.6724569]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.5351317,-103.6053414],[256.5349984,-103.5442551]]).appendPoint([256.4739121,-89.5443884]).appendPoint([242.4740454,-89.6054747]).appendPoint([242.5351317,-103.6053414]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.4182547,-122.6560327],[256.4181214,-122.5949464]]).appendPoint([256.3570351,-108.5950797]).appendPoint([242.3571684,-108.656166]).appendPoint([242.4182547,-122.6560327]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.378241,-86.6226382],[43.3781077,-86.5615519]]).appendPoint([43.3170214,-72.5616852]).appendPoint([29.3171547,-72.6227715]).appendPoint([29.378241,-86.6226382]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.2820332,-124.7452374],[38.2818999,-124.6841511]]).appendPoint([38.2208136,-110.6842844]).appendPoint([24.2209469,-110.7453707]).appendPoint([24.2820332,-124.7452374]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.6520088,-84.5546501],[256.6518755,-84.4935638]]).appendPoint([256.5907892,-70.4936971]).appendPoint([242.5909225,-70.5547834]).appendPoint([242.6520088,-84.5546501]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.9557219,-124.2701557],[141.9395993,-124.9418495]]).appendPoint([142.6112931,-110.9579721]).appendPoint([128.6274157,-110.2862783]).appendPoint([127.9557219,-124.2701557]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1671608,-85.069528],[125.1510382,-85.7412218]]).appendPoint([125.822732,-71.7573444]).appendPoint([111.8388546,-71.0856506]).appendPoint([111.1671608,-85.069528]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.0534077,-104.0879941],[124.0372851,-104.7596879]]).appendPoint([124.7089789,-90.7758105]).appendPoint([110.7251015,-90.1041167]).appendPoint([110.0534077,-104.0879941]).close().innerToCAG()
).union(
    new CSG.Path2D([[109.1394243,-123.1160559],[123.1233017,-123.7877497]]).appendPoint([123.7949955,-109.8038723]).appendPoint([109.8111181,-109.1321785]).appendPoint([109.1394243,-123.1160559]).close().innerToCAG()
).union(
    new CSG.Path2D([[108.0256713,-142.1345219],[122.0095487,-142.8062157]]).appendPoint([122.6812425,-128.8223383]).appendPoint([108.6973651,-128.1506445]).appendPoint([108.0256713,-142.1345219]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.9119182,-161.152988],[120.8957956,-161.8246818]]).appendPoint([121.5674894,-147.8408044]).appendPoint([107.583612,-147.1691106]).appendPoint([106.9119182,-161.152988]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.0417386,-143.2982174],[141.025616,-143.9699112]]).appendPoint([141.6973098,-129.9860338]).appendPoint([127.7134324,-129.31434]).appendPoint([127.0417386,-143.2982174]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.1277552,-162.3262792],[140.1116326,-162.997973]]).appendPoint([140.7833264,-149.0140956]).appendPoint([126.799449,-148.3424018]).appendPoint([126.1277552,-162.3262792]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.7836887,-86.2140323],[143.7675661,-86.8857261]]).appendPoint([144.4392599,-72.9018487]).appendPoint([130.4553825,-72.2301549]).appendPoint([129.7836887,-86.2140323]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.8697053,-105.242094],[142.8535827,-105.9137878]]).appendPoint([143.5252765,-91.9299104]).appendPoint([129.5413991,-91.2582166]).appendPoint([128.8697053,-105.242094]).close().innerToCAG()
).union(
    new CSG.Path2D([[125.2137718,-181.3543409],[139.1976492,-182.0260347]]).appendPoint([139.869343,-168.0421573]).appendPoint([125.8854656,-167.3704635]).appendPoint([125.2137718,-181.3543409]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.5580974,-143.1402386],[216.5473039,-142.5906011]]).appendPoint([215.9976664,-128.6013946]).appendPoint([202.0084599,-129.1510321]).appendPoint([202.5580974,-143.1402386]).close().innerToCAG()
).union(
    new CSG.Path2D([[203.3059968,-162.1755518],[217.2952033,-161.6259143]]).appendPoint([216.7455658,-147.6367078]).appendPoint([202.7563593,-148.1863453]).appendPoint([203.3059968,-162.1755518]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.5325992,-144.1379453],[197.5218057,-143.5883078]]).appendPoint([196.9721682,-129.5991013]).appendPoint([182.9829617,-130.1487388]).appendPoint([183.5325992,-144.1379453]).close().innerToCAG()
).union(
    new CSG.Path2D([[184.2804986,-163.1732585],[198.2697051,-162.623621]]).appendPoint([197.7200676,-148.6344145]).appendPoint([183.7308611,-149.184052]).appendPoint([184.2804986,-163.1732585]).close().innerToCAG()
).union(
    new CSG.Path2D([[184.4288607,-182.2321276],[198.4180672,-181.6824901]]).appendPoint([197.8684297,-167.6932836]).appendPoint([183.8792232,-168.2429211]).appendPoint([184.4288607,-182.2321276]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.0622984,-105.0696122],[215.0515049,-104.5199747]]).appendPoint([214.5018674,-90.5307682]).appendPoint([200.5126609,-91.0804057]).appendPoint([201.0622984,-105.0696122]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.8101979,-124.1049254],[215.7994044,-123.5552879]]).appendPoint([215.2497669,-109.5660814]).appendPoint([201.2605604,-110.1157189]).appendPoint([201.8101979,-124.1049254]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.2889007,-87.0320057],[195.2781072,-86.4823682]]).appendPoint([194.7284697,-72.4931617]).appendPoint([180.7392632,-73.0427992]).appendPoint([181.2889007,-87.0320057]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.7846997,-125.1026321],[196.7739062,-124.5529946]]).appendPoint([196.2242687,-110.5637881]).appendPoint([182.2350622,-111.1134256]).appendPoint([182.7846997,-125.1026321]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.3143989,-86.034299],[214.3036054,-85.4846615]]).appendPoint([213.7539679,-71.495455]).appendPoint([199.7647614,-72.0450925]).appendPoint([200.3143989,-86.034299]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.0368002,-106.0673189],[196.0260067,-105.5176814]]).appendPoint([195.4763692,-91.5284749]).appendPoint([181.4871627,-92.0781124]).appendPoint([182.0368002,-106.0673189]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.8018745,-105.4227538],[276.8006751,-105.6060082]]).appendPoint([276.9839295,-91.6072076]).appendPoint([262.9851289,-91.4239532]).appendPoint([262.8018745,-105.4227538]).close().innerToCAG()
).union(
    new CSG.Path2D([[262.3525349,-124.4685038],[276.3513355,-124.6517582]]).appendPoint([276.5345899,-110.6529576]).appendPoint([262.5357893,-110.4697032]).appendPoint([262.3525349,-124.4685038]).close().innerToCAG()
).union(
    new CSG.Path2D([[67.9631025,-179.585423],[81.9619031,-179.7686774]]).appendPoint([82.1451575,-165.7698768]).appendPoint([68.1463569,-165.5866224]).appendPoint([67.9631025,-179.585423]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.9031954,-143.5142538],[275.901996,-143.6975082]]).appendPoint([276.0852504,-129.6987076]).appendPoint([262.0864498,-129.5154532]).appendPoint([261.9031954,-143.5142538]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.4538558,-162.5600038],[275.4526564,-162.7432582]]).appendPoint([275.6359108,-148.7444576]).appendPoint([261.6371102,-148.5612032]).appendPoint([261.4538558,-162.5600038]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.0045162,-181.6057538],[275.0033168,-181.7890082]]).appendPoint([275.1865712,-167.7902076]).appendPoint([261.1877706,-167.6069532]).appendPoint([261.0045162,-181.6057538]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.8098347,-84.3514371],[83.8086353,-84.5346915]]).appendPoint([83.9918897,-70.5358909]).appendPoint([69.9930891,-70.3526365]).appendPoint([69.8098347,-84.3514371]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.3604951,-103.3971871],[83.3592957,-103.5804415]]).appendPoint([83.5425501,-89.5816409]).appendPoint([69.5437495,-89.3983865]).appendPoint([69.3604951,-103.3971871]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.1111384,-122.445555],[83.109939,-122.6288094]]).appendPoint([83.2931934,-108.6300088]).appendPoint([69.2943928,-108.4467544]).appendPoint([69.1111384,-122.445555]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.6617988,-141.491305],[82.6605994,-141.6745594]]).appendPoint([82.8438538,-127.6757588]).appendPoint([68.8450532,-127.4925044]).appendPoint([68.6617988,-141.491305]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.2124592,-160.537055],[82.2112598,-160.7203094]]).appendPoint([82.3945142,-146.7215088]).appendPoint([68.3957136,-146.5382544]).appendPoint([68.2124592,-160.537055]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.7282117,-149.9480675],[389.2314222,-139.6675524]]).appendPoint([378.9509071,-130.1643419]).appendPoint([369.4476966,-140.444857]).appendPoint([379.7282117,-149.9480675]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.8082136,-151.0057571],[362.3114241,-140.725242]]).appendPoint([352.030909,-131.2220315]).appendPoint([342.5276985,-141.5025466]).appendPoint([352.8082136,-151.0057571]).close().innerToCAG()
).union(
    new CSG.Path2D([[336.6442709,-168.4918118],[346.1474814,-158.2112967]]).appendPoint([335.8669663,-148.7080862]).appendPoint([326.3637558,-158.9886013]).appendPoint([336.6442709,-168.4918118]).close().innerToCAG()
).union(
    new CSG.Path2D([[350.6331147,-181.422966],[360.1363252,-171.1424509]]).appendPoint([349.8558101,-161.6392404]).appendPoint([340.3525996,-171.9197555]).appendPoint([350.6331147,-181.422966]).close().innerToCAG()
).union(
    new CSG.Path2D([[323.7131167,-182.4806556],[333.2163272,-172.2001405]]).appendPoint([322.9358121,-162.69693]).appendPoint([313.4326016,-172.9774451]).appendPoint([323.7131167,-182.4806556]).close().innerToCAG()
).union(
    new CSG.Path2D([[365.7393679,-137.0169133],[375.2425784,-126.7363982]]).appendPoint([364.9620633,-117.2331877]).appendPoint([355.4588528,-127.5137028]).appendPoint([365.7393679,-137.0169133]).close().innerToCAG()
).union(
    new CSG.Path2D([[366.7970574,-163.9369113],[376.3002679,-153.6563962]]).appendPoint([366.0197528,-144.1531857]).appendPoint([356.5165423,-154.4337008]).appendPoint([366.7970574,-163.9369113]).close().innerToCAG()
).union(
    new CSG.Path2D([[337.7019605,-195.4118098],[347.205171,-185.1312947]]).appendPoint([336.9246559,-175.6280842]).appendPoint([327.4214454,-185.9085993]).appendPoint([337.7019605,-195.4118098]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.0459507,-84.0918417],[236.0426191,-83.7864333]]).appendPoint([235.7372107,-69.7897649]).appendPoint([221.7405423,-70.0951733]).appendPoint([222.0459507,-84.0918417]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.2615719,-103.1416713],[236.2582403,-102.8362629]]).appendPoint([235.9528319,-88.8395945]).appendPoint([221.9561635,-89.1450029]).appendPoint([222.2615719,-103.1416713]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.477193,-122.1915009],[236.4738614,-121.8860925]]).appendPoint([236.168453,-107.8894241]).appendPoint([222.1717846,-108.1948325]).appendPoint([222.477193,-122.1915009]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.6928142,-141.2413305],[236.6894826,-140.9359221]]).appendPoint([236.3840742,-126.9392537]).appendPoint([222.3874058,-127.2446621]).appendPoint([222.6928142,-141.2413305]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.9084353,-160.2911601],[236.9051037,-159.9857517]]).appendPoint([236.5996953,-145.9890833]).appendPoint([222.6030269,-146.2944917]).appendPoint([222.9084353,-160.2911601]).close().innerToCAG()
).union(
    new CSG.Path2D([[223.1240565,-179.3409898],[237.1207249,-179.0355814]]).appendPoint([236.8153165,-165.038913]).appendPoint([222.8186481,-165.3443214]).appendPoint([223.1240565,-179.3409898]).close().innerToCAG()
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

        