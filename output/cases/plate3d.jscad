function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[12.2608586,-104.8275211],[22.6217045,-61.7557383]]).appendArc([25.5036323,-59.457572],{"radius":3,"clockwise":true,"large":false}).appendPoint([35.6180619,-59.3399976]).appendArc([35.7660993,-59.3346192],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.7475031,-56.8924331]).appendArc([75.8080944,-56.8893465],{"radius":3,"clockwise":true,"large":false}).appendPoint([96.6759924,-56.0378055]).appendArc([97.0128027,-56.0429886],{"radius":3,"clockwise":true,"large":false}).appendPoint([117.842043,-57.5360544]).appendArc([117.911076,-57.5402036],{"radius":3,"clockwise":false,"large":false}).appendPoint([148.9782477,-59.0483259]).appendArc([150.7985124,-59.7785395],{"radius":3,"clockwise":true,"large":false}).appendPoint([155.2168088,-63.610917]).appendArc([157.1955674,-64.3446309],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.9957715,-64.3020536]).appendArc([168.9615617,-63.5569116],{"radius":3,"clockwise":false,"large":false}).appendPoint([173.3614862,-59.6955665]).appendArc([175.1770466,-58.954842],{"radius":3,"clockwise":true,"large":false}).appendPoint([205.612429,-57.2960577]).appendArc([205.7281924,-57.2874994],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.4953298,-55.347562]).appendArc([226.8319499,-55.3351107],{"radius":3,"clockwise":true,"large":false}).appendPoint([247.7038109,-55.7358779]).appendArc([247.7868683,-55.7386239],{"radius":3,"clockwise":true,"large":false}).appendPoint([287.816908,-57.6174434]).appendArc([287.9400706,-57.6206913],{"radius":3,"clockwise":false,"large":false}).appendPoint([402.1765127,-58.2866286]).appendArc([405.1589735,-61.3040658],{"radius":3,"clockwise":true,"large":false}).appendPoint([404.8782815,-109.4546327]).appendArc([404.7561469,-110.2846019],{"radius":3,"clockwise":true,"large":false}).appendPoint([397.2354302,-135.8236194]).appendArc([396.5753106,-136.9965159],{"radius":3,"clockwise":true,"large":false}).appendPoint([339.8687108,-199.2420113]).appendArc([336.5505857,-200.0125449],{"radius":3,"clockwise":true,"large":false}).appendPoint([300.1803176,-185.671965]).appendArc([299.0973754,-185.4629035],{"radius":3,"clockwise":false,"large":false}).appendPoint([268.2163988,-185.2828839]).appendArc([267.9520487,-185.2696668],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.3670713,-183.5159245]).appendArc([249.0934608,-183.5026677],{"radius":3,"clockwise":false,"large":false}).appendPoint([218.0963527,-183.4176534]).appendArc([217.6233163,-183.4538687],{"radius":3,"clockwise":false,"large":false}).appendPoint([204.630234,-185.4915744]).appendArc([204.3846429,-185.5197809],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.1266686,-188.2496103]).appendArc([166.9134517,-188.2576244],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.3890021,-188.2766751]).appendArc([157.1811246,-188.269881],{"radius":3,"clockwise":true,"large":false}).appendPoint([119.86838,-185.753318]).appendArc([119.6957894,-185.7366554],{"radius":3,"clockwise":true,"large":false}).appendPoint([106.6065968,-184.0899504]).appendArc([106.1746889,-184.0670378],{"radius":3,"clockwise":false,"large":false}).appendPoint([75.1806067,-184.6605846]).appendArc([74.8862593,-184.6807318],{"radius":3,"clockwise":false,"large":false}).appendPoint([56.3839855,-186.865428]).appendArc([56.0670685,-186.8859225],{"radius":3,"clockwise":true,"large":false}).appendPoint([26.3444199,-187.2314309]).appendArc([23.7609584,-185.8142534],{"radius":3,"clockwise":true,"large":false}).appendPoint([13.3490307,-169.0472809]).appendArc([12.8978241,-167.4995319],{"radius":3,"clockwise":true,"large":false}).appendPoint([12.17786,-105.5640229]).appendArc([12.2608587,-104.8275211],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[24.5076171,-174.7269365],"radius":1.5})
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
).union(
    new CSG.Path2D([[365.8742577,-137.5833261],[378.3667793,-123.8705801]]).appendPoint([364.6540333,-111.3780585]).appendPoint([352.1615117,-125.0908045]).appendPoint([365.8742577,-137.5833261]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.9566195,-150.4125735],[392.4491411,-136.6998275]]).appendPoint([378.7363951,-124.2073059]).appendPoint([366.2438735,-137.9200519]).appendPoint([379.9566195,-150.4125735]).close().innerToCAG()
).union(
    new CSG.Path2D([[353.0450104,-151.6656879],[365.537532,-137.9529419]]).appendPoint([351.824786,-125.4604203]).appendPoint([339.3322644,-139.1731663]).appendPoint([353.0450104,-151.6656879]).close().innerToCAG()
).union(
    new CSG.Path2D([[367.1273721,-164.4949353],[379.6198937,-150.7821893]]).appendPoint([365.9071477,-138.2896677]).appendPoint([353.4146261,-152.0024137]).appendPoint([367.1273721,-164.4949353]).close().innerToCAG()
).union(
    new CSG.Path2D([[337.0084513,-169.2686402],[349.5009729,-155.5558942]]).appendPoint([335.7882269,-143.0633726]).appendPoint([323.2957053,-156.7761186]).appendPoint([337.0084513,-169.2686402]).close().innerToCAG()
).union(
    new CSG.Path2D([[351.0908131,-182.0978875],[363.5833347,-168.3851415]]).appendPoint([349.8705887,-155.8926199]).appendPoint([337.3780671,-169.6053659]).appendPoint([351.0908131,-182.0978875]).close().innerToCAG()
).union(
    new CSG.Path2D([[324.179204,-183.351002],[336.6717256,-169.638256]]).appendPoint([322.9589796,-157.1457344]).appendPoint([310.466458,-170.8584804]).appendPoint([324.179204,-183.351002]).close().innerToCAG()
).union(
    new CSG.Path2D([[338.2615658,-196.1802493],[350.7540874,-182.4675033]]).appendPoint([337.0413414,-169.9749817]).appendPoint([324.5488198,-183.6877277]).appendPoint([338.2615658,-196.1802493]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.8112686,-85.1175072],[257.3600154,-84.9018888]]).appendPoint([257.144397,-66.353142]).appendPoint([238.5956502,-66.5687604]).appendPoint([238.8112686,-85.1175072]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.9184195,-180.3610724],[258.4671663,-180.145454]]).appendPoint([258.2515479,-161.5967072]).appendPoint([239.7028011,-161.8123256]).appendPoint([239.9184195,-180.3610724]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.9139198,-183.7421029],[65.4626666,-183.5264845]]).appendPoint([65.2470482,-164.9777377]).appendPoint([46.6983014,-165.1933561]).appendPoint([46.9139198,-183.7421029]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.4755591,-142.2636463],[258.0243059,-142.0480279]]).appendPoint([257.8086875,-123.4992811]).appendPoint([239.2599407,-123.7148995]).appendPoint([239.4755591,-142.2636463]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.4710595,-145.6446768],[65.0198063,-145.4290584]]).appendPoint([64.8041879,-126.8803116]).appendPoint([46.2554411,-127.09593]).appendPoint([46.4710595,-145.6446768]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.1602019,-145.9272764],[40.7089487,-145.711658]]).appendPoint([40.4933303,-127.1629112]).appendPoint([21.9445835,-127.3785296]).appendPoint([22.1602019,-145.9272764]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.0326988,-104.1662202],[257.5814456,-103.9506018]]).appendPoint([257.3658272,-85.401855]).appendPoint([238.8170804,-85.6174734]).appendPoint([239.0326988,-104.1662202]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.254129,-123.2149333],[257.8028758,-122.9993149]]).appendPoint([257.5872574,-104.4505681]).appendPoint([239.0385106,-104.6661865]).appendPoint([239.254129,-123.2149333]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.6969893,-161.3123594],[258.2457361,-161.096741]]).appendPoint([258.0301177,-142.5479942]).appendPoint([239.4813709,-142.7636126]).appendPoint([239.6969893,-161.3123594]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.0281991,-107.5472507],[64.5769459,-107.3316323]]).appendPoint([64.3613275,-88.7828855]).appendPoint([45.8125807,-88.9985039]).appendPoint([46.0281991,-107.5472507]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.2496293,-126.5959638],[64.7983761,-126.3803454]]).appendPoint([64.5827577,-107.8315986]).appendPoint([46.0340109,-108.047217]).appendPoint([46.2496293,-126.5959638]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.6924896,-164.6933899],[65.2412364,-164.4777715]]).appendPoint([65.025618,-145.9290247]).appendPoint([46.4768712,-146.1446431]).appendPoint([46.6924896,-164.6933899]).close().innerToCAG()
).union(
    new CSG.Path2D([[26.7580559,-88.7199679],[45.3068027,-88.5043495]]).appendPoint([45.0911843,-69.9556027]).appendPoint([26.5424375,-70.1712211]).appendPoint([26.7580559,-88.7199679]).close().innerToCAG()
).union(
    new CSG.Path2D([[26.9794861,-107.7686809],[45.5282329,-107.5530625]]).appendPoint([45.3126145,-89.0043157]).appendPoint([26.7638677,-89.2199341]).appendPoint([26.9794861,-107.7686809]).close().innerToCAG()
).union(
    new CSG.Path2D([[21.9387718,-126.8785633],[40.4875186,-126.6629449]]).appendPoint([40.2719002,-108.1141981]).appendPoint([21.7231534,-108.3298165]).appendPoint([21.9387718,-126.8785633]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.3816321,-164.9759894],[40.9303789,-164.760371]]).appendPoint([40.7147605,-146.2116242]).appendPoint([22.1660137,-146.4272426]).appendPoint([22.3816321,-164.9759894]).close().innerToCAG()
).union(
    new CSG.Path2D([[27.8652068,-183.9635331],[46.4139536,-183.7479147]]).appendPoint([46.1983352,-165.1991679]).appendPoint([27.6495884,-165.4147863]).appendPoint([27.8652068,-183.9635331]).close().innerToCAG()
).union(
    new CSG.Path2D([[383.2061773,-87.4515391],[401.7558621,-87.5596739]]).appendPoint([401.8639969,-69.0099891]).appendPoint([383.3143121,-68.9018543]).appendPoint([383.2061773,-87.4515391]).close().innerToCAG()
).union(
    new CSG.Path2D([[364.0454516,-106.390166],[382.5951364,-106.4983008]]).appendPoint([382.7032712,-87.948616]).appendPoint([364.1535864,-87.8404812]).appendPoint([364.0454516,-106.390166]).close().innerToCAG()
).union(
    new CSG.Path2D([[335.5819866,-87.1739155],[354.1316714,-87.2820503]]).appendPoint([354.2398062,-68.7323655]).appendPoint([335.6901214,-68.6242307]).appendPoint([335.5819866,-87.1739155]).close().innerToCAG()
).union(
    new CSG.Path2D([[316.5323102,-87.0628663],[335.081995,-87.1710011]]).appendPoint([335.1901298,-68.6213163]).appendPoint([316.640445,-68.5131815]).appendPoint([316.5323102,-87.0628663]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.7836697,-106.1438025],[340.3333545,-106.2519373]]).appendPoint([340.4414893,-87.7022525]).appendPoint([321.8918045,-87.5941177]).appendPoint([321.7836697,-106.1438025]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.4826338,-86.9518168],[316.0323186,-87.0599516]]).appendPoint([316.1404534,-68.5102668]).appendPoint([297.5907686,-68.402132]).appendPoint([297.4826338,-86.9518168]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.260535,-125.0511694],[315.8102198,-125.1593042]]).appendPoint([315.9183546,-106.6096194]).appendPoint([297.3686698,-106.5014846]).appendPoint([297.260535,-125.0511694]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.2108587,-124.9401199],[296.7605435,-125.0482547]]).appendPoint([296.8686783,-106.4985699]).appendPoint([278.3189935,-106.3904351]).appendPoint([278.2108587,-124.9401199]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.0998093,-143.9897963],[296.6494941,-144.0979311]]).appendPoint([296.7576289,-125.5482463]).appendPoint([278.2079441,-125.4401115]).appendPoint([278.0998093,-143.9897963]).close().innerToCAG()
).union(
    new CSG.Path2D([[283.3511688,-163.0707325],[301.9008536,-163.1788673]]).appendPoint([302.0089884,-144.6291825]).appendPoint([283.4593036,-144.5210477]).appendPoint([283.3511688,-163.0707325]).close().innerToCAG()
).union(
    new CSG.Path2D([[259.2722318,-105.7793942],[277.8219166,-105.887529]]).appendPoint([277.9300514,-87.3378442]).appendPoint([259.3803666,-87.2297094]).appendPoint([259.2722318,-105.7793942]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.8280342,-181.9780995],[277.377719,-182.0862343]]).appendPoint([277.4858538,-163.5365495]).appendPoint([258.936169,-163.4284147]).appendPoint([258.8280342,-181.9780995]).close().innerToCAG()
).union(
    new CSG.Path2D([[383.0951279,-106.5012154],[401.6448127,-106.6093502]]).appendPoint([401.7529475,-88.0596654]).appendPoint([383.2032627,-87.9515306]).appendPoint([383.0951279,-106.5012154]).close().innerToCAG()
).union(
    new CSG.Path2D([[364.156501,-87.3404897],[382.7061858,-87.4486245]]).appendPoint([382.8143206,-68.8989397]).appendPoint([364.2646358,-68.7908049]).appendPoint([364.156501,-87.3404897]).close().innerToCAG()
).union(
    new CSG.Path2D([[316.3102114,-125.1622189],[334.8598962,-125.2703537]]).appendPoint([334.968031,-106.7206689]).appendPoint([316.4183462,-106.6125341]).appendPoint([316.3102114,-125.1622189]).close().innerToCAG()
).union(
    new CSG.Path2D([[297.3715844,-106.0014931],[315.9212692,-106.1096279]]).appendPoint([316.029404,-87.5599431]).appendPoint([297.4797192,-87.4518083]).appendPoint([297.3715844,-106.0014931]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.4329575,-86.8407673],[296.9826423,-86.9489021]]).appendPoint([297.0907771,-68.3992173]).appendPoint([278.5410923,-68.2910825]).appendPoint([278.4329575,-86.8407673]).close().innerToCAG()
).union(
    new CSG.Path2D([[278.3219081,-105.8904436],[296.8715929,-105.9985784]]).appendPoint([296.9797277,-87.4488936]).appendPoint([278.4300429,-87.3407588]).appendPoint([278.3219081,-105.8904436]).close().innerToCAG()
).union(
    new CSG.Path2D([[259.1611824,-124.8290705],[277.7108672,-124.9372053]]).appendPoint([277.819002,-106.3875205]).appendPoint([259.2693172,-106.2793857]).appendPoint([259.1611824,-124.8290705]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.3322869,-86.1110186],[84.8819717,-86.2191534]]).appendPoint([84.9901065,-67.6694686]).appendPoint([66.4404217,-67.5613338]).appendPoint([66.3322869,-86.1110186]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.2212376,-105.1606949],[84.7709224,-105.2688297]]).appendPoint([84.8790572,-86.7191449]).appendPoint([66.3293724,-86.6110101]).appendPoint([66.2212376,-105.1606949]).close().innerToCAG()
).union(
    new CSG.Path2D([[66.1101882,-124.2103713],[84.659873,-124.3185061]]).appendPoint([84.7680078,-105.7688213]).appendPoint([66.218323,-105.6606865]).appendPoint([66.1101882,-124.2103713]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.5118946,-144.1321057],[321.0615794,-144.2402405]]).appendPoint([321.1697142,-125.6905557]).appendPoint([302.6200294,-125.5824209]).appendPoint([302.5118946,-144.1321057]).close().innerToCAG()
).union(
    new CSG.Path2D([[277.8777105,-182.0891489],[296.4273953,-182.1972837]]).appendPoint([296.5355301,-163.6475989]).appendPoint([277.9858453,-163.5394641]).appendPoint([277.8777105,-182.0891489]).close().innerToCAG()
).union(
    new CSG.Path2D([[259.050133,-143.8787469],[277.5998178,-143.9868817]]).appendPoint([277.7079526,-125.4371969]).appendPoint([259.1582678,-125.3290621]).appendPoint([259.050133,-143.8787469]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.9390836,-162.9284232],[277.4887684,-163.036558]]).appendPoint([277.5969032,-144.4868732]).appendPoint([259.0472184,-144.3787384]).appendPoint([258.9390836,-162.9284232]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.9991388,-143.2600476],[84.5488236,-143.3681824]]).appendPoint([84.6569584,-124.8184976]).appendPoint([66.1072736,-124.7103628]).appendPoint([65.9991388,-143.2600476]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.77704,-181.3594003],[84.3267248,-181.4675351]]).appendPoint([84.4348596,-162.9178503]).appendPoint([65.8851748,-162.8097155]).appendPoint([65.77704,-181.3594003]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.8880894,-162.3097239],[84.4377742,-162.4178587]]).appendPoint([84.545909,-143.8681739]).appendPoint([65.9962242,-143.7600391]).appendPoint([65.8880894,-162.3097239]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.7971676,-103.9060976],[237.3393263,-103.3667919]]).appendPoint([236.8000206,-84.8246332]).appendPoint([218.2578619,-85.3639389]).appendPoint([218.7971676,-103.9060976]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.3510099,-122.9480449],[237.8931686,-122.4087392]]).appendPoint([237.3538629,-103.8665805]).appendPoint([218.8117042,-104.4058862]).appendPoint([219.3510099,-122.9480449]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.0125368,-180.073887],[239.5546955,-179.5345813]]).appendPoint([239.0153898,-160.9924226]).appendPoint([220.4732311,-161.5317283]).appendPoint([221.0125368,-180.073887]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.2433253,-84.8641502],[236.785484,-84.3248445]]).appendPoint([236.2461783,-65.7826858]).appendPoint([217.7040196,-66.3219915]).appendPoint([218.2433253,-84.8641502]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.9048522,-141.9899923],[238.4470109,-141.4506866]]).appendPoint([237.9077052,-122.9085279]).appendPoint([219.3655465,-123.4478336]).appendPoint([219.9048522,-141.9899923]).close().innerToCAG()
).union(
    new CSG.Path2D([[220.4586945,-161.0319397],[239.0008532,-160.492634]]).appendPoint([238.4615475,-141.9504753]).appendPoint([219.9193888,-142.489781]).appendPoint([220.4586945,-161.0319397]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.4170142,-86.4115187],[125.9516252,-87.1669623]]).appendPoint([126.7070688,-68.6323513]).appendPoint([108.1724578,-67.8769077]).appendPoint([107.4170142,-86.4115187]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.2647256,-106.4957483],[144.7993366,-107.2511919]]).appendPoint([145.5547802,-88.7165809]).appendPoint([127.0201692,-87.9611373]).appendPoint([126.2647256,-106.4957483]).close().innerToCAG()
).union(
    new CSG.Path2D([[125.4889196,-125.5299445],[144.0235306,-126.2853881]]).appendPoint([144.7789742,-107.7507771]).appendPoint([126.2443632,-106.9953335]).appendPoint([125.4889196,-125.5299445]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.7131137,-144.5641407],[143.2477247,-145.3195843]]).appendPoint([144.0031683,-126.7849733]).appendPoint([125.4685573,-126.0295297]).appendPoint([124.7131137,-144.5641407]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.6412083,-105.4457149],[125.1758193,-106.2011585]]).appendPoint([125.9312629,-87.6665475]).appendPoint([107.3966519,-86.9111039]).appendPoint([106.6412083,-105.4457149]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.8654023,-124.4799111],[124.4000133,-125.2353547]]).appendPoint([125.1554569,-106.7007437]).appendPoint([106.6208459,-105.9453001]).appendPoint([105.8654023,-124.4799111]).close().innerToCAG()
).union(
    new CSG.Path2D([[105.0895964,-143.5141073],[123.6242074,-144.2695509]]).appendPoint([124.379651,-125.7349399]).appendPoint([105.84504,-124.9794963]).appendPoint([105.0895964,-143.5141073]).close().innerToCAG()
).union(
    new CSG.Path2D([[104.3137904,-162.5483034],[122.8484014,-163.303747]]).appendPoint([123.603845,-144.769136]).appendPoint([105.069234,-144.0136924]).appendPoint([104.3137904,-162.5483034]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.9373077,-163.5983368],[142.4719187,-164.3537804]]).appendPoint([143.2273623,-145.8191694]).appendPoint([124.6927513,-145.0637258]).appendPoint([123.9373077,-163.5983368]).close().innerToCAG()
).union(
    new CSG.Path2D([[127.0405315,-87.4615522],[145.5751425,-88.2169958]]).appendPoint([146.3305861,-69.6823848]).appendPoint([127.7959751,-68.9269412]).appendPoint([127.0405315,-87.4615522]).close().innerToCAG()
).union(
    new CSG.Path2D([[123.1615018,-182.632533],[141.6961128,-183.3879766]]).appendPoint([142.4515564,-164.8533656]).appendPoint([123.9169454,-164.097922]).appendPoint([123.1615018,-182.632533]).close().innerToCAG()
).union(
    new CSG.Path2D([[85.116537,-161.2614134],[103.6615094,-161.6932684]]).appendPoint([104.0933644,-143.148296]).appendPoint([85.548392,-142.716441]).appendPoint([85.116537,-161.2614134]).close().innerToCAG()
).union(
    new CSG.Path2D([[84.6730418,-180.3062503],[103.2180142,-180.7381053]]).appendPoint([103.6498692,-162.1931329]).appendPoint([85.1048968,-161.7612779]).appendPoint([84.6730418,-180.3062503]).close().innerToCAG()
).union(
    new CSG.Path2D([[85.5600322,-142.2165765],[104.1050046,-142.6484315]]).appendPoint([104.5368596,-124.1034591]).appendPoint([85.9918872,-123.6716041]).appendPoint([85.5600322,-142.2165765]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.8905178,-85.0820657],[105.4354902,-85.5139207]]).appendPoint([105.8673452,-66.9689483]).appendPoint([87.3223728,-66.5370933]).appendPoint([86.8905178,-85.0820657]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.4470226,-104.1269026],[104.991995,-104.5587576]]).appendPoint([105.42385,-86.0137852]).appendPoint([86.8788776,-85.5819302]).appendPoint([86.4470226,-104.1269026]).close().innerToCAG()
).union(
    new CSG.Path2D([[86.0035274,-123.1717396],[104.5484998,-123.6035946]]).appendPoint([104.9803548,-105.0586222]).appendPoint([86.4353824,-104.6267672]).appendPoint([86.0035274,-123.1717396]).close().innerToCAG()
).union(
    new CSG.Path2D([[199.5392916,-125.02639],[218.0692141,-124.1635611]]).appendPoint([217.2063852,-105.6336386]).appendPoint([198.6764627,-106.4964675]).appendPoint([199.5392916,-125.02639]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.4253774,-144.0557713],[218.9552999,-143.1929424]]).appendPoint([218.092471,-124.6630199]).appendPoint([199.5625485,-125.5258488]).appendPoint([200.4253774,-144.0557713]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.3114632,-163.0851527],[219.8413857,-162.2223238]]).appendPoint([218.9785568,-143.6924013]).appendPoint([200.4486343,-144.5552302]).appendPoint([201.3114632,-163.0851527]).close().innerToCAG()
).union(
    new CSG.Path2D([[180.5215387,-126.1622052],[199.0514612,-125.2993763]]).appendPoint([198.1886323,-106.7694538]).appendPoint([179.6587098,-107.6322827]).appendPoint([180.5215387,-126.1622052]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.4076245,-145.1915865],[199.937547,-144.3287576]]).appendPoint([199.0747181,-125.7988351]).appendPoint([180.5447956,-126.661664]).appendPoint([181.4076245,-145.1915865]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.2937103,-164.2209678],[200.8236328,-163.3581389]]).appendPoint([199.9608039,-144.8282164]).appendPoint([181.4308814,-145.6910453]).appendPoint([182.2937103,-164.2209678]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.5804454,-183.2782574],[201.1103679,-182.4154285]]).appendPoint([200.247539,-163.885506]).appendPoint([181.7176165,-164.7483349]).appendPoint([182.5804454,-183.2782574]).close().innerToCAG()
).union(
    new CSG.Path2D([[197.7671201,-86.9676274],[216.2970426,-86.1047985]]).appendPoint([215.4342137,-67.574876]).appendPoint([196.9042912,-68.4377049]).appendPoint([197.7671201,-86.9676274]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.6532058,-105.9970087],[217.1831283,-105.1341798]]).appendPoint([216.3202994,-86.6042573]).appendPoint([197.7903769,-87.4670862]).appendPoint([198.6532058,-105.9970087]).close().innerToCAG()
).union(
    new CSG.Path2D([[178.7493672,-88.1034425],[197.2792897,-87.2406136]]).appendPoint([196.4164608,-68.7106911]).appendPoint([177.8865383,-69.57352]).appendPoint([178.7493672,-88.1034425]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.635453,-107.1328239],[198.1653755,-106.269995]]).appendPoint([197.3025466,-87.7400725]).appendPoint([178.7726241,-88.6029014]).appendPoint([179.635453,-107.1328239]).close().innerToCAG()
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

        