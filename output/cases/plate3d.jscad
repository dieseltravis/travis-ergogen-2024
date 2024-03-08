function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[4.261399,-104.9205101],[14.6222449,-61.8487273]]).appendArc([17.5041727,-59.550561],{"radius":3,"clockwise":true,"large":false}).appendPoint([27.6186023,-59.4329866]).appendArc([27.7666397,-59.4276082],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.7480436,-56.9854221]).appendArc([67.8086349,-56.9823356],{"radius":3,"clockwise":true,"large":false}).appendPoint([88.6765328,-56.1307945]).appendArc([89.0133431,-56.1359776],{"radius":3,"clockwise":true,"large":false}).appendPoint([109.8425834,-57.6290435]).appendArc([109.9116164,-57.6331927],{"radius":3,"clockwise":false,"large":false}).appendPoint([140.9787881,-59.1413149]).appendArc([142.7990528,-59.8715285],{"radius":3,"clockwise":true,"large":false}).appendPoint([147.2173492,-63.703906]).appendArc([149.1961078,-64.4376199],{"radius":3,"clockwise":false,"large":false}).appendPoint([158.996312,-64.3950427]).appendArc([160.9621022,-63.6499007],{"radius":3,"clockwise":false,"large":false}).appendPoint([165.3620267,-59.7885556]).appendArc([167.1775871,-59.0478311],{"radius":3,"clockwise":true,"large":false}).appendPoint([197.6129694,-57.3890467]).appendArc([197.7287328,-57.3804884],{"radius":3,"clockwise":false,"large":false}).appendPoint([218.4958703,-55.4405511]).appendArc([218.8324904,-55.4280998],{"radius":3,"clockwise":true,"large":false}).appendPoint([239.7043514,-55.8288669]).appendArc([239.7874088,-55.8316129],{"radius":3,"clockwise":true,"large":false}).appendPoint([279.8174484,-57.7104324]).appendArc([279.940611,-57.7136803],{"radius":3,"clockwise":false,"large":false}).appendPoint([394.1770532,-58.3796176]).appendArc([397.159514,-61.3970548],{"radius":3,"clockwise":true,"large":false}).appendPoint([396.878822,-109.5476218]).appendArc([396.7566874,-110.377591],{"radius":3,"clockwise":true,"large":false}).appendPoint([389.2359706,-135.9166084]).appendArc([388.575851,-137.0895049],{"radius":3,"clockwise":true,"large":false}).appendPoint([331.8692512,-199.3350003]).appendArc([328.5511261,-200.1055339],{"radius":3,"clockwise":true,"large":false}).appendPoint([292.1808581,-185.7649541]).appendArc([291.0979159,-185.5558926],{"radius":3,"clockwise":false,"large":false}).appendPoint([260.2169392,-185.375873]).appendArc([259.9525891,-185.3626559],{"radius":3,"clockwise":true,"large":false}).appendPoint([241.3676117,-183.6089136]).appendArc([241.0940012,-183.5956568],{"radius":3,"clockwise":false,"large":false}).appendPoint([210.0968931,-183.5106425]).appendArc([209.6238567,-183.5468578],{"radius":3,"clockwise":false,"large":false}).appendPoint([196.6307745,-185.5845634]).appendArc([196.3851834,-185.6127699],{"radius":3,"clockwise":true,"large":false}).appendPoint([159.1272091,-188.3425993]).appendArc([158.9139922,-188.3506134],{"radius":3,"clockwise":true,"large":false}).appendPoint([149.3895426,-188.3696641]).appendArc([149.1816651,-188.36287],{"radius":3,"clockwise":true,"large":false}).appendPoint([111.8689205,-185.846307]).appendArc([111.6963299,-185.8296444],{"radius":3,"clockwise":true,"large":false}).appendPoint([98.6071372,-184.1829395]).appendArc([98.1752293,-184.1600269],{"radius":3,"clockwise":false,"large":false}).appendPoint([67.1811471,-184.7535736]).appendArc([66.8867997,-184.7737208],{"radius":3,"clockwise":false,"large":false}).appendPoint([48.384526,-186.9584171]).appendArc([48.067609,-186.9789116],{"radius":3,"clockwise":true,"large":false}).appendPoint([18.3449603,-187.3244199]).appendArc([15.7614988,-185.9072424],{"radius":3,"clockwise":true,"large":false}).appendPoint([5.3495712,-169.14027]).appendArc([4.8983646,-167.592521],{"radius":3,"clockwise":true,"large":false}).appendPoint([4.1784004,-105.657012]).appendArc([4.2613991,-104.9205102],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[16.5081575,-174.8199255],"radius":1.5})
.union(
    CAG.circle({"center":[308.2529537,-186.7899404],"radius":1.5})
).union(
    CAG.circle({"center":[385.4142128,-120.3285272],"radius":1.5})
).union(
    CAG.circle({"center":[392.1393419,-64.8428489],"radius":1.5})
).union(
    CAG.circle({"center":[170.4415433,-155.2083051],"radius":1.5})
).union(
    CAG.circle({"center":[138.2723396,-155.3189461],"radius":1.5})
).union(
    CAG.circle({"center":[167.783286,-98.1201611],"radius":1.5})
).union(
    CAG.circle({"center":[140.5997574,-98.2163576],"radius":1.5})
).union(
    CAG.circle({"center":[20.2434593,-65.9941558],"radius":1.5})
).union(
    new CSG.Path2D([[329.0089918,-169.3616292],[341.5015134,-155.6488832]]).appendPoint([327.7887674,-143.1563616]).appendPoint([315.2962458,-156.8691076]).appendPoint([329.0089918,-169.3616292]).close().innerToCAG()
).union(
    new CSG.Path2D([[316.1797444,-183.443991],[328.672266,-169.731245]]).appendPoint([314.95952,-157.2387234]).appendPoint([302.4669984,-170.9514694]).appendPoint([316.1797444,-183.443991]).close().innerToCAG()
).union(
    new CSG.Path2D([[357.8747981,-137.6763152],[370.3673197,-123.9635692]]).appendPoint([356.6545737,-111.4710476]).appendPoint([344.1620521,-125.1837936]).appendPoint([357.8747981,-137.6763152]).close().innerToCAG()
).union(
    new CSG.Path2D([[371.9571599,-150.5055625],[384.4496815,-136.7928165]]).appendPoint([370.7369355,-124.3002949]).appendPoint([358.2444139,-138.0130409]).appendPoint([371.9571599,-150.5055625]).close().innerToCAG()
).union(
    new CSG.Path2D([[345.0455508,-151.758677],[357.5380724,-138.045931]]).appendPoint([343.8253264,-125.5534094]).appendPoint([331.3328048,-139.2661554]).appendPoint([345.0455508,-151.758677]).close().innerToCAG()
).union(
    new CSG.Path2D([[359.1279126,-164.5879243],[371.6204342,-150.8751783]]).appendPoint([357.9076882,-138.3826567]).appendPoint([345.4151666,-152.0954027]).appendPoint([359.1279126,-164.5879243]).close().innerToCAG()
).union(
    new CSG.Path2D([[343.0913535,-182.1908765],[355.5838751,-168.4781305]]).appendPoint([341.8711291,-155.9856089]).appendPoint([329.3786075,-169.6983549]).appendPoint([343.0913535,-182.1908765]).close().innerToCAG()
).union(
    new CSG.Path2D([[330.2621062,-196.2732383],[342.7546278,-182.5604923]]).appendPoint([329.0418818,-170.0679707]).appendPoint([316.5493602,-183.7807167]).appendPoint([330.2621062,-196.2732383]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.9189599,-180.4540615],[250.4677067,-180.2384431]]).appendPoint([250.2520883,-161.6896963]).appendPoint([231.7033415,-161.9053147]).appendPoint([231.9189599,-180.4540615]).close().innerToCAG()
).union(
    new CSG.Path2D([[230.8118091,-85.2104962],[249.3605559,-84.9948778]]).appendPoint([249.1449375,-66.446131]).appendPoint([230.5961907,-66.6617494]).appendPoint([230.8118091,-85.2104962]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.2546694,-123.3079223],[249.8034162,-123.0923039]]).appendPoint([249.5877978,-104.5435571]).appendPoint([231.039051,-104.7591755]).appendPoint([231.2546694,-123.3079223]).close().innerToCAG()
).union(
    new CSG.Path2D([[38.9144603,-183.835092],[57.4632071,-183.6194736]]).appendPoint([57.2475887,-165.0707268]).appendPoint([38.6988419,-165.2863452]).appendPoint([38.9144603,-183.835092]).close().innerToCAG()
).union(
    new CSG.Path2D([[14.3821726,-165.0689785],[32.9309194,-164.8533601]]).appendPoint([32.715301,-146.3046133]).appendPoint([14.1665542,-146.5202317]).appendPoint([14.3821726,-165.0689785]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.4760996,-142.3566354],[250.0248464,-142.141017]]).appendPoint([249.809228,-123.5922702]).appendPoint([231.2604812,-123.8078886]).appendPoint([231.4760996,-142.3566354]).close().innerToCAG()
).union(
    new CSG.Path2D([[38.4715999,-145.7376659],[57.0203467,-145.5220475]]).appendPoint([56.8047283,-126.9733007]).appendPoint([38.2559815,-127.1889191]).appendPoint([38.4715999,-145.7376659]).close().innerToCAG()
).union(
    new CSG.Path2D([[14.1607424,-146.0202654],[32.7094892,-145.804647]]).appendPoint([32.4938708,-127.2559002]).appendPoint([13.945124,-127.4715186]).appendPoint([14.1607424,-146.0202654]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.0332393,-104.2592093],[249.5819861,-104.0435909]]).appendPoint([249.3663677,-85.4948441]).appendPoint([230.8176209,-85.7104625]).appendPoint([231.0332393,-104.2592093]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.6975298,-161.4053484],[250.2462766,-161.18973]]).appendPoint([250.0306582,-142.6409832]).appendPoint([231.4819114,-142.8566016]).appendPoint([231.6975298,-161.4053484]).close().innerToCAG()
).union(
    new CSG.Path2D([[38.0287396,-107.6402398],[56.5774864,-107.4246214]]).appendPoint([56.361868,-88.8758746]).appendPoint([37.8131212,-89.091493]).appendPoint([38.0287396,-107.6402398]).close().innerToCAG()
).union(
    new CSG.Path2D([[38.2501697,-126.6889528],[56.7989165,-126.4733344]]).appendPoint([56.5832981,-107.9245876]).appendPoint([38.0345513,-108.140206]).appendPoint([38.2501697,-126.6889528]).close().innerToCAG()
).union(
    new CSG.Path2D([[38.6930301,-164.7863789],[57.2417769,-164.5707605]]).appendPoint([57.0261585,-146.0220137]).appendPoint([38.4774117,-146.2376321]).appendPoint([38.6930301,-164.7863789]).close().innerToCAG()
).union(
    new CSG.Path2D([[18.7585963,-88.8129569],[37.3073431,-88.5973385]]).appendPoint([37.0917247,-70.0485917]).appendPoint([18.5429779,-70.2642101]).appendPoint([18.7585963,-88.8129569]).close().innerToCAG()
).union(
    new CSG.Path2D([[18.9800265,-107.86167],[37.5287733,-107.6460516]]).appendPoint([37.3131549,-89.0973048]).appendPoint([18.7644081,-89.3129232]).appendPoint([18.9800265,-107.86167]).close().innerToCAG()
).union(
    new CSG.Path2D([[13.9393122,-126.9715524],[32.488059,-126.755934]]).appendPoint([32.2724406,-108.2071872]).appendPoint([13.7236938,-108.4228056]).appendPoint([13.9393122,-126.9715524]).close().innerToCAG()
).union(
    new CSG.Path2D([[19.8657472,-184.0565221],[38.414494,-183.8409037]]).appendPoint([38.1988756,-165.2921569]).appendPoint([19.6501288,-165.5077753]).appendPoint([19.8657472,-184.0565221]).close().innerToCAG()
).union(
    new CSG.Path2D([[375.0956684,-106.5942045],[393.6453532,-106.7023393]]).appendPoint([393.753488,-88.1526545]).appendPoint([375.2038032,-88.0445197]).appendPoint([375.0956684,-106.5942045]).close().innerToCAG()
).union(
    new CSG.Path2D([[356.1570414,-87.4334787],[374.7067262,-87.5416135]]).appendPoint([374.814861,-68.9919287]).appendPoint([356.2651762,-68.8837939]).appendPoint([356.1570414,-87.4334787]).close().innerToCAG()
).union(
    new CSG.Path2D([[308.5328506,-87.1558553],[327.0825354,-87.2639901]]).appendPoint([327.1906702,-68.7143053]).appendPoint([308.6409854,-68.6061705]).appendPoint([308.5328506,-87.1558553]).close().innerToCAG()
).union(
    new CSG.Path2D([[289.3721249,-106.0944821],[307.9218097,-106.2026169]]).appendPoint([308.0299445,-87.6529321]).appendPoint([289.4802597,-87.5447973]).appendPoint([289.3721249,-106.0944821]).close().innerToCAG()
).union(
    new CSG.Path2D([[294.512435,-144.2250948],[313.0621198,-144.3332296]]).appendPoint([313.1702546,-125.7835448]).appendPoint([294.6205698,-125.67541]).appendPoint([294.512435,-144.2250948]).close().innerToCAG()
).union(
    new CSG.Path2D([[270.3224486,-105.9834326],[288.8721334,-106.0915674]]).appendPoint([288.9802682,-87.5418826]).appendPoint([270.4305834,-87.4337478]).appendPoint([270.3224486,-105.9834326]).close().innerToCAG()
).union(
    new CSG.Path2D([[270.2113992,-125.033109],[288.761084,-125.1412438]]).appendPoint([288.8692188,-106.591559]).appendPoint([270.319534,-106.4834242]).appendPoint([270.2113992,-125.033109]).close().innerToCAG()
).union(
    new CSG.Path2D([[275.3517093,-163.1637216],[293.9013941,-163.2718564]]).appendPoint([294.0095289,-144.7221716]).appendPoint([275.4598441,-144.6140368]).appendPoint([275.3517093,-163.1637216]).close().innerToCAG()
).union(
    new CSG.Path2D([[375.2067178,-87.5445281],[393.7564026,-87.6526629]]).appendPoint([393.8645374,-69.1029781]).appendPoint([375.3148526,-68.9948433]).appendPoint([375.2067178,-87.5445281]).close().innerToCAG()
).union(
    new CSG.Path2D([[356.045992,-106.4831551],[374.5956768,-106.5912899]]).appendPoint([374.7038116,-88.0416051]).appendPoint([356.1541268,-87.9334703]).appendPoint([356.045992,-106.4831551]).close().innerToCAG()
).union(
    new CSG.Path2D([[327.582527,-87.2669046],[346.1322118,-87.3750394]]).appendPoint([346.2403466,-68.8253546]).appendPoint([327.6906618,-68.7172198]).appendPoint([327.582527,-87.2669046]).close().innerToCAG()
).union(
    new CSG.Path2D([[313.7842101,-106.2367916],[332.3338949,-106.3449264]]).appendPoint([332.4420297,-87.7952416]).appendPoint([313.8923449,-87.6871068]).appendPoint([313.7842101,-106.2367916]).close().innerToCAG()
).union(
    new CSG.Path2D([[308.3107518,-125.255208],[326.8604366,-125.3633428]]).appendPoint([326.9685714,-106.813658]).appendPoint([308.4188866,-106.7055232]).appendPoint([308.3107518,-125.255208]).close().innerToCAG()
).union(
    new CSG.Path2D([[289.4831743,-87.0448058],[308.0328591,-87.1529406]]).appendPoint([308.1409939,-68.6032558]).appendPoint([289.5913091,-68.495121]).appendPoint([289.4831743,-87.0448058]).close().innerToCAG()
).union(
    new CSG.Path2D([[289.2610755,-125.1441585],[307.8107603,-125.2522933]]).appendPoint([307.9188951,-106.7026085]).appendPoint([289.3692103,-106.5944737]).appendPoint([289.2610755,-125.1441585]).close().innerToCAG()
).union(
    new CSG.Path2D([[270.4334979,-86.9337563],[288.9831827,-87.0418911]]).appendPoint([289.0913175,-68.4922063]).appendPoint([270.5416327,-68.3840715]).appendPoint([270.4334979,-86.9337563]).close().innerToCAG()
).union(
    new CSG.Path2D([[58.221778,-105.253684],[76.7714628,-105.3618188]]).appendPoint([76.8795976,-86.812134]).appendPoint([58.3299128,-86.7039992]).appendPoint([58.221778,-105.253684]).close().innerToCAG()
).union(
    new CSG.Path2D([[57.9996792,-143.3530367],[76.549364,-143.4611715]]).appendPoint([76.6574988,-124.9114867]).appendPoint([58.107814,-124.8033519]).appendPoint([57.9996792,-143.3530367]).close().innerToCAG()
).union(
    new CSG.Path2D([[270.1003498,-144.0827853],[288.6500346,-144.1909201]]).appendPoint([288.7581694,-125.6412353]).appendPoint([270.2084846,-125.5331005]).appendPoint([270.1003498,-144.0827853]).close().innerToCAG()
).union(
    new CSG.Path2D([[269.878251,-182.182138],[288.4279358,-182.2902728]]).appendPoint([288.5360706,-163.740588]).appendPoint([269.9863858,-163.6324532]).appendPoint([269.878251,-182.182138]).close().innerToCAG()
).union(
    new CSG.Path2D([[58.3328274,-86.2040077],[76.8825122,-86.3121425]]).appendPoint([76.990647,-67.7624577]).appendPoint([58.4409622,-67.6543229]).appendPoint([58.3328274,-86.2040077]).close().innerToCAG()
).union(
    new CSG.Path2D([[58.1107286,-124.3033603],[76.6604134,-124.4114951]]).appendPoint([76.7685482,-105.8618103]).appendPoint([58.2188634,-105.7536755]).appendPoint([58.1107286,-124.3033603]).close().innerToCAG()
).union(
    new CSG.Path2D([[57.8886298,-162.402713],[76.4383146,-162.5108478]]).appendPoint([76.5464494,-143.961163]).appendPoint([57.9967646,-143.8530282]).appendPoint([57.8886298,-162.402713]).close().innerToCAG()
).union(
    new CSG.Path2D([[57.7775804,-181.4523893],[76.3272652,-181.5605241]]).appendPoint([76.4354,-163.0108393]).appendPoint([57.8857152,-162.9027045]).appendPoint([57.7775804,-181.4523893]).close().innerToCAG()
).union(
    new CSG.Path2D([[251.2727722,-105.8723833],[269.822457,-105.9805181]]).appendPoint([269.9305918,-87.4308333]).appendPoint([251.380907,-87.3226985]).appendPoint([251.2727722,-105.8723833]).close().innerToCAG()
).union(
    new CSG.Path2D([[251.1617228,-124.9220596],[269.7114076,-125.0301944]]).appendPoint([269.8195424,-106.4805096]).appendPoint([251.2698576,-106.3723748]).appendPoint([251.1617228,-124.9220596]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.939624,-163.0214122],[269.4893088,-163.129547]]).appendPoint([269.5974436,-144.5798622]).appendPoint([251.0477588,-144.4717274]).appendPoint([250.939624,-163.0214122]).close().innerToCAG()
).union(
    new CSG.Path2D([[251.0506734,-143.9717359],[269.6003582,-144.0798707]]).appendPoint([269.708493,-125.5301859]).appendPoint([251.1588082,-125.4220511]).appendPoint([251.0506734,-143.9717359]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.8285746,-182.0710886],[269.3782594,-182.1792234]]).appendPoint([269.4863942,-163.6295386]).appendPoint([250.9367094,-163.5214038]).appendPoint([250.8285746,-182.0710886]).close().innerToCAG()
).union(
    new CSG.Path2D([[210.7977081,-103.9990866],[229.3398668,-103.4597809]]).appendPoint([228.8005611,-84.9176222]).appendPoint([210.2584024,-85.4569279]).appendPoint([210.7977081,-103.9990866]).close().innerToCAG()
).union(
    new CSG.Path2D([[211.9053926,-142.0829814],[230.4475513,-141.5436757]]).appendPoint([229.9082456,-123.001517]).appendPoint([211.3660869,-123.5408227]).appendPoint([211.9053926,-142.0829814]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.4592349,-161.1249287],[231.0013936,-160.585623]]).appendPoint([230.4620879,-142.0434643]).appendPoint([211.9199292,-142.58277]).appendPoint([212.4592349,-161.1249287]).close().innerToCAG()
).union(
    new CSG.Path2D([[213.0130772,-180.1668761],[231.5552359,-179.6275704]]).appendPoint([231.0159302,-161.0854117]).appendPoint([212.4737715,-161.6247174]).appendPoint([213.0130772,-180.1668761]).close().innerToCAG()
).union(
    new CSG.Path2D([[210.2438658,-84.9571393],[228.7860245,-84.4178336]]).appendPoint([228.2467188,-65.8756749]).appendPoint([209.7045601,-66.4149806]).appendPoint([210.2438658,-84.9571393]).close().innerToCAG()
).union(
    new CSG.Path2D([[211.3515503,-123.041034],[229.893709,-122.5017283]]).appendPoint([229.3544033,-103.9595696]).appendPoint([210.8122446,-104.4988753]).appendPoint([211.3515503,-123.041034]).close().innerToCAG()
).union(
    new CSG.Path2D([[119.0410719,-87.5545412],[137.5756829,-88.3099848]]).appendPoint([138.3311265,-69.7753738]).appendPoint([119.7965155,-69.0199302]).appendPoint([119.0410719,-87.5545412]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.4894601,-125.6229335],[136.0240711,-126.3783771]]).appendPoint([136.7795147,-107.8437661]).appendPoint([118.2449037,-107.0883225]).appendPoint([117.4894601,-125.6229335]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.6417487,-105.538704],[117.1763597,-106.2941476]]).appendPoint([117.9318033,-87.7595366]).appendPoint([99.3971923,-87.004093]).appendPoint([98.6417487,-105.538704]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.8659428,-124.5729001],[116.4005538,-125.3283437]]).appendPoint([117.1559974,-106.7937327]).appendPoint([98.6213864,-106.0382891]).appendPoint([97.8659428,-124.5729001]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.0901368,-143.6070963],[115.6247478,-144.3625399]]).appendPoint([116.3801914,-125.8279289]).appendPoint([97.8455804,-125.0724853]).appendPoint([97.0901368,-143.6070963]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.265266,-106.5887374],[136.799877,-107.344181]]).appendPoint([137.5553206,-88.80957]).appendPoint([119.0207096,-88.0541264]).appendPoint([118.265266,-106.5887374]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.9378482,-163.6913259],[134.4724592,-164.4467695]]).appendPoint([135.2279028,-145.9121585]).appendPoint([116.6932918,-145.1567149]).appendPoint([115.9378482,-163.6913259]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.1620423,-182.725522],[133.6966533,-183.4809656]]).appendPoint([134.4520969,-164.9463546]).appendPoint([115.9174859,-164.190911]).appendPoint([115.1620423,-182.725522]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.4175546,-86.5045078],[117.9521656,-87.2599514]]).appendPoint([118.7076092,-68.7253404]).appendPoint([100.1729982,-67.9698968]).appendPoint([99.4175546,-86.5045078]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.7136541,-144.6571297],[135.2482651,-145.4125733]]).appendPoint([136.0037087,-126.8779623]).appendPoint([117.4690977,-126.1225187]).appendPoint([116.7136541,-144.6571297]).close().innerToCAG()
).union(
    new CSG.Path2D([[96.3143309,-162.6412925],[114.8489419,-163.3967361]]).appendPoint([115.6043855,-144.8621251]).appendPoint([97.0697745,-144.1066815]).appendPoint([96.3143309,-162.6412925]).close().innerToCAG()
).union(
    new CSG.Path2D([[77.1170774,-161.3544025],[95.6620498,-161.7862575]]).appendPoint([96.0939048,-143.2412851]).appendPoint([77.5489324,-142.8094301]).appendPoint([77.1170774,-161.3544025]).close().innerToCAG()
).union(
    new CSG.Path2D([[77.5605726,-142.3095655],[96.105545,-142.7414205]]).appendPoint([96.5374,-124.1964481]).appendPoint([77.9924276,-123.7645931]).appendPoint([77.5605726,-142.3095655]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.8910582,-85.1750547],[97.4360306,-85.6069097]]).appendPoint([97.8678856,-67.0619373]).appendPoint([79.3229132,-66.6300823]).appendPoint([78.8910582,-85.1750547]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.447563,-104.2198917],[96.9925354,-104.6517467]]).appendPoint([97.4243904,-86.1067743]).appendPoint([78.879418,-85.6749193]).appendPoint([78.447563,-104.2198917]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.0040678,-123.2647286],[96.5490402,-123.6965836]]).appendPoint([96.9808952,-105.1516112]).appendPoint([78.4359228,-104.7197562]).appendPoint([78.0040678,-123.2647286]).close().innerToCAG()
).union(
    new CSG.Path2D([[76.6735822,-180.3992394],[95.2185546,-180.8310944]]).appendPoint([95.6504096,-162.286122]).appendPoint([77.1054372,-161.854267]).appendPoint([76.6735822,-180.3992394]).close().innerToCAG()
).union(
    new CSG.Path2D([[189.7676605,-87.0606164],[208.297583,-86.1977875]]).appendPoint([207.4347541,-67.667865]).appendPoint([188.9048316,-68.5306939]).appendPoint([189.7676605,-87.0606164]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.4259178,-144.1487604],[210.9558403,-143.2859315]]).appendPoint([210.0930114,-124.756009]).appendPoint([191.5630889,-125.6188379]).appendPoint([192.4259178,-144.1487604]).close().innerToCAG()
).union(
    new CSG.Path2D([[193.3120036,-163.1781417],[211.8419261,-162.3153128]]).appendPoint([210.9790972,-143.7853903]).appendPoint([192.4491747,-144.6482192]).appendPoint([193.3120036,-163.1781417]).close().innerToCAG()
).union(
    new CSG.Path2D([[171.6359934,-107.2258129],[190.1659159,-106.362984]]).appendPoint([189.303087,-87.8330615]).appendPoint([170.7731645,-88.6958904]).appendPoint([171.6359934,-107.2258129]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.408165,-145.2845756],[191.9380875,-144.4217467]]).appendPoint([191.0752586,-125.8918242]).appendPoint([172.5453361,-126.7546531]).appendPoint([173.408165,-145.2845756]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.2942507,-164.3139569],[192.8241732,-163.451128]]).appendPoint([191.9613443,-144.9212055]).appendPoint([173.4314218,-145.7840344]).appendPoint([174.2942507,-164.3139569]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.5809859,-183.3712464],[193.1109084,-182.5084175]]).appendPoint([192.2480795,-163.978495]).appendPoint([173.718157,-164.8413239]).appendPoint([174.5809859,-183.3712464]).close().innerToCAG()
).union(
    new CSG.Path2D([[190.6537463,-106.0899977],[209.1836688,-105.2271688]]).appendPoint([208.3208399,-86.6972463]).appendPoint([189.7909174,-87.5600752]).appendPoint([190.6537463,-106.0899977]).close().innerToCAG()
).union(
    new CSG.Path2D([[191.5398321,-125.1193791],[210.0697546,-124.2565502]]).appendPoint([209.2069257,-105.7266277]).appendPoint([190.6770032,-106.5894566]).appendPoint([191.5398321,-125.1193791]).close().innerToCAG()
).union(
    new CSG.Path2D([[170.7499077,-88.1964316],[189.2798302,-87.3336027]]).appendPoint([188.4170013,-68.8036802]).appendPoint([169.8870788,-69.6665091]).appendPoint([170.7499077,-88.1964316]).close().innerToCAG()
).union(
    new CSG.Path2D([[172.5220792,-126.2551942],[191.0520017,-125.3923653]]).appendPoint([190.1891728,-106.8624428]).appendPoint([171.6592503,-107.7252717]).appendPoint([172.5220792,-126.2551942]).close().innerToCAG()
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

        