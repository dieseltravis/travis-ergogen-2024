function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[17.1456057,-129.9389626],[27.84495,-86.0199604]]).appendArc([29.7706661,-84.4934225],{"radius":2,"clockwise":true,"large":false}).appendPoint([40.6886578,-84.3981425]).appendArc([40.7873594,-84.3948429],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.8104237,-82.0664811]).appendArc([80.8508237,-82.0645405],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.7873952,-81.2709496]).appendArc([102.0119244,-81.2750555],{"radius":2,"clockwise":true,"large":false}).appendPoint([122.907326,-82.833727]).appendArc([122.9473184,-82.8363076],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.0136669,-84.2017156]).appendArc([149.2263029,-84.6974709],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.1542664,-89.0350253]).appendArc([155.4767101,-89.5337409],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.8150567,-89.5258771]).appendArc([172.1354495,-89.0271615],{"radius":2,"clockwise":false,"large":false}).appendPoint([177.0671955,-84.6862779]).appendArc([178.2729327,-84.1909102],{"radius":2,"clockwise":true,"large":false}).appendPoint([202.819364,-82.7687521]).appendArc([202.89262,-82.7631561],{"radius":2,"clockwise":false,"large":false}).appendPoint([223.7340837,-80.7854493]).appendArc([223.9584845,-80.7768194],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.9009871,-81.1482288]).appendArc([244.9563615,-81.1499784],{"radius":2,"clockwise":true,"large":false}).appendPoint([285.0234598,-82.9716709]).appendArc([285.1055714,-82.9737159],{"radius":2,"clockwise":false,"large":false}).appendPoint([400.3633989,-83.4766263]).appendArc([402.3546533,-85.4853339],{"radius":2,"clockwise":true,"large":false}).appendPoint([402.1392499,-134.8518003]).appendArc([402.0946269,-135.2632821],{"radius":2,"clockwise":true,"large":false}).appendPoint([396.5525618,-161.0522072]).appendArc([396.07764,-161.9767324],{"radius":2,"clockwise":true,"large":false}).appendPoint([338.8846568,-224.9412967]).appendArc([336.6951268,-225.4666395],{"radius":2,"clockwise":true,"large":false}).appendPoint([298.370275,-210.9346591]).appendArc([297.6699077,-210.8047546],{"radius":2,"clockwise":false,"large":false}).appendPoint([265.5454676,-210.6645844]).appendArc([265.3692214,-210.6560313],{"radius":2,"clockwise":true,"large":false}).appendPoint([246.6922207,-208.9212273]).appendArc([246.5098011,-208.9126568],{"radius":2,"clockwise":false,"large":false}).appendPoint([215.4077184,-208.8729528]).appendArc([215.0529598,-208.9042076],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.0801399,-210.8672289]).appendArc([203.8770036,-210.8929222],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.5686221,-213.6814413]).appendArc([166.4221312,-213.6870027],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.8710458,-213.6954479]).appendArc([159.7193986,-213.6898865],{"radius":2,"clockwise":true,"large":false}).appendPoint([122.3752781,-210.8986963]).appendArc([122.2478887,-210.8850599],{"radius":2,"clockwise":true,"large":false}).appendPoint([111.2294674,-209.3472291]).appendArc([110.920509,-209.3282938],{"radius":2,"clockwise":false,"large":false}).appendPoint([79.8140316,-209.8338414]).appendArc([79.617762,-209.8467043],{"radius":2,"clockwise":false,"large":false}).appendPoint([61.0076709,-211.9894801]).appendArc([60.7963543,-212.0025309],{"radius":2,"clockwise":true,"large":false}).appendPoint([30.4560719,-212.2673065]).appendArc([28.7365087,-211.3175355],{"radius":2,"clockwise":true,"large":false}).appendPoint([17.9307041,-193.8032564]).appendArc([17.6328905,-192.7705566],{"radius":2,"clockwise":true,"large":false}).appendPoint([17.088851,-130.4298014]).appendArc([17.1456058,-129.9389626],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[29.2192609,-199.7526231],"radius":1.5})
.union(
    CAG.circle({"center":[314.6764513,-211.9580415],"radius":1.5})
).union(
    CAG.circle({"center":[391.7401899,-145.3835758],"radius":1.5})
).union(
    CAG.circle({"center":[397.335175,-89.9384748],"radius":1.5})
).union(
    CAG.circle({"center":[175.7700971,-180.6288592],"radius":1.5})
).union(
    CAG.circle({"center":[150.5204982,-180.637497],"radius":1.5})
).union(
    CAG.circle({"center":[173.028147,-123.5446741],"radius":1.5})
).union(
    CAG.circle({"center":[153.2624482,-123.5533118],"radius":1.5})
).union(
    CAG.circle({"center":[33.2698416,-90.9381322],"radius":1.5})
).union(
    new CSG.Path2D([[119.6268121,-206.2347538],[126.6187508,-206.5706007]]).appendPoint([127.3864009,-190.5890266]).appendPoint([120.3944622,-190.2531797]).appendPoint([119.6268121,-206.2347538]).close().innerToCAG()
).union(
    new CSG.Path2D([[175.839322,-207.7067212],[182.8312607,-207.3708743]]).appendPoint([182.0636106,-191.3893002]).appendPoint([175.0716719,-191.7251471]).appendPoint([175.839322,-207.7067212]).close().innerToCAG()
).union(
    new CSG.Path2D([[199.6718446,-206.561963],[206.6637833,-206.2261161]]).appendPoint([205.8961332,-190.244542]).appendPoint([198.9041945,-190.5803889]).appendPoint([199.6718446,-206.561963]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.4593347,-207.379512],[150.4512734,-207.7153589]]).appendPoint([151.2189235,-191.7337848]).appendPoint([144.2269848,-191.3979379]).appendPoint([143.4593347,-207.379512]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.8373641,-146.0582316],[232.8308343,-145.6306924]]).appendPoint([232.4032951,-131.6372222]).appendPoint([218.4098249,-132.0647614]).appendPoint([218.8373641,-146.0582316]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.4191229,-165.0993465],[233.4125931,-164.6718073]]).appendPoint([232.9850539,-150.6783371]).appendPoint([218.9915837,-151.1058763]).appendPoint([219.4191229,-165.0993465]).close().innerToCAG()
).union(
    new CSG.Path2D([[220.0008816,-184.1404614],[233.9943518,-183.7129222]]).appendPoint([233.5668126,-169.719452]).appendPoint([219.5733424,-170.1469912]).appendPoint([220.0008816,-184.1404614]).close().innerToCAG()
).union(
    new CSG.Path2D([[220.5826403,-203.1815762],[234.5761105,-202.754037]]).appendPoint([234.1485713,-188.7605668]).appendPoint([220.1551011,-189.188106]).appendPoint([220.5826403,-203.1815762]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.6738467,-107.9760018],[231.6673169,-107.5484626]]).appendPoint([231.2397777,-93.5549924]).appendPoint([217.2463075,-93.9825316]).appendPoint([217.6738467,-107.9760018]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.2556054,-127.0171167],[232.2490756,-126.5895775]]).appendPoint([231.8215364,-112.5961073]).appendPoint([217.8280662,-113.0236465]).appendPoint([218.2556054,-127.0171167]).close().innerToCAG()
).union(
    new CSG.Path2D([[365.1206671,-159.5077119],[374.5338024,-149.1446582]]).appendPoint([364.1707487,-139.7315229]).appendPoint([354.7576134,-150.0945766]).appendPoint([365.1206671,-159.5077119]).close().innerToCAG()
).union(
    new CSG.Path2D([[379.2218224,-172.3162996],[388.6349577,-161.9532459]]).appendPoint([378.271904,-152.5401106]).appendPoint([368.8587687,-162.9031643]).appendPoint([379.2218224,-172.3162996]).close().innerToCAG()
).union(
    new CSG.Path2D([[352.3120794,-173.6088673],[361.7252147,-163.2458136]]).appendPoint([351.362161,-153.8326783]).appendPoint([341.9490257,-164.195732]).appendPoint([352.3120794,-173.6088673]).close().innerToCAG()
).union(
    new CSG.Path2D([[366.4132347,-186.4174549],[375.82637,-176.0544012]]).appendPoint([365.4633163,-166.6412659]).appendPoint([356.050181,-177.0043196]).appendPoint([366.4132347,-186.4174549]).close().innerToCAG()
).union(
    new CSG.Path2D([[336.3013448,-191.2353115],[345.7144801,-180.8722578]]).appendPoint([335.3514264,-171.4591225]).appendPoint([325.9382911,-181.8221762]).appendPoint([336.3013448,-191.2353115]).close().innerToCAG()
).union(
    new CSG.Path2D([[350.4025001,-204.0438992],[359.8156354,-193.6808455]]).appendPoint([349.4525817,-184.2677102]).appendPoint([340.0394464,-194.6307639]).appendPoint([350.4025001,-204.0438992]).close().innerToCAG()
).union(
    new CSG.Path2D([[323.4927571,-205.3364668],[332.9058924,-194.9734131]]).appendPoint([322.5428387,-185.5602778]).appendPoint([313.1297034,-195.9233315]).appendPoint([323.4927571,-205.3364668]).close().innerToCAG()
).union(
    new CSG.Path2D([[337.5939124,-218.1450545],[347.0070477,-207.7820008]]).appendPoint([336.643994,-198.3688655]).appendPoint([327.2308587,-208.7319192]).appendPoint([337.5939124,-218.1450545]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.1953958,-108.074199],[108.1905983,-108.4406763]]).appendPoint([108.5570756,-94.4454738]).appendPoint([94.5618731,-94.0789965]).appendPoint([94.1953958,-108.074199]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.6967249,-127.1176711],[107.6919274,-127.4841484]]).appendPoint([108.0584047,-113.4889459]).appendPoint([94.0632022,-113.1224686]).appendPoint([93.6967249,-127.1176711]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.198054,-146.1611432],[107.1932565,-146.5276205]]).appendPoint([107.5597338,-132.532418]).appendPoint([93.5645313,-132.1659407]).appendPoint([93.198054,-146.1611432]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.6993832,-165.2046153],[106.6945857,-165.5710926]]).appendPoint([107.061063,-151.5758901]).appendPoint([93.0658605,-151.2094128]).appendPoint([92.6993832,-165.2046153]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.2007123,-184.2480874],[106.1959148,-184.6145647]]).appendPoint([106.5623921,-170.6193622]).appendPoint([92.5671896,-170.2528849]).appendPoint([92.2007123,-184.2480874]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.7020415,-203.2915595],[105.697244,-203.6580368]]).appendPoint([106.0637213,-189.6628343]).appendPoint([92.0685188,-189.296357]).appendPoint([91.7020415,-203.2915595]).close().innerToCAG()
).union(
    new CSG.Path2D([[382.6376353,-129.449721],[396.637502,-129.5108073]]).appendPoint([396.6985883,-115.5109406]).appendPoint([382.6987216,-115.4498543]).appendPoint([382.6376353,-129.449721]).close().innerToCAG()
).union(
    new CSG.Path2D([[363.5878167,-129.3665999],[377.5876834,-129.4276862]]).appendPoint([377.6487697,-115.4278195]).appendPoint([363.648903,-115.3667332]).appendPoint([363.5878167,-129.3665999]).close().innerToCAG()
).union(
    new CSG.Path2D([[321.325719,-129.1821955],[335.3255857,-129.2432818]]).appendPoint([335.386672,-115.2434151]).appendPoint([321.3868053,-115.1823288]).appendPoint([321.325719,-129.1821955]).close().innerToCAG()
).union(
    new CSG.Path2D([[315.880149,-148.2086158],[329.8800157,-148.2697021]]).appendPoint([329.941102,-134.2698354]).appendPoint([315.9412353,-134.2087491]).appendPoint([315.880149,-148.2086158]).close().innerToCAG()
).union(
    new CSG.Path2D([[296.9134514,-129.0756763],[310.9133181,-129.1367626]]).appendPoint([310.9744044,-115.1368959]).appendPoint([296.9745377,-115.0758096]).appendPoint([296.9134514,-129.0756763]).close().innerToCAG()
).union(
    new CSG.Path2D([[296.8303303,-148.1254949],[310.830197,-148.1865812]]).appendPoint([310.8912833,-134.1867145]).appendPoint([296.8914166,-134.1256282]).appendPoint([296.8303303,-148.1254949]).close().innerToCAG()
).union(
    new CSG.Path2D([[302.1096583,-167.1987118],[316.109525,-167.2597981]]).appendPoint([316.1706113,-153.2599314]).appendPoint([302.1707446,-153.1988451]).appendPoint([302.1096583,-167.1987118]).close().innerToCAG()
).union(
    new CSG.Path2D([[277.8636327,-128.9925551],[291.8634994,-129.0536414]]).appendPoint([291.9245857,-115.0537747]).appendPoint([277.924719,-114.9926884]).appendPoint([277.8636327,-128.9925551]).close().innerToCAG()
).union(
    new CSG.Path2D([[277.7805116,-148.0423737],[291.7803783,-148.10346]]).appendPoint([291.8414646,-134.1035933]).appendPoint([277.8415979,-134.042507]).appendPoint([277.7805116,-148.0423737]).close().innerToCAG()
).union(
    new CSG.Path2D([[277.6973906,-167.0921923],[291.6972573,-167.1532786]]).appendPoint([291.7583436,-153.1534119]).appendPoint([277.7584769,-153.0923256]).appendPoint([277.6973906,-167.0921923]).close().innerToCAG()
).union(
    new CSG.Path2D([[282.9767185,-186.1654093],[296.9765852,-186.2264956]]).appendPoint([297.0376715,-172.2266289]).appendPoint([283.0378048,-172.1655426]).appendPoint([282.9767185,-186.1654093]).close().innerToCAG()
).union(
    new CSG.Path2D([[277.5311485,-205.1918296],[291.5310152,-205.2529159]]).appendPoint([291.5921015,-191.2530492]).appendPoint([277.5922348,-191.1919629]).appendPoint([277.5311485,-205.1918296]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.8138141,-128.9094341],[272.8136808,-128.9705204]]).appendPoint([272.8747671,-114.9706537]).appendPoint([258.8749004,-114.9095674]).appendPoint([258.8138141,-128.9094341]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.730693,-147.9592527],[272.7305597,-148.020339]]).appendPoint([272.791646,-134.0204723]).appendPoint([258.7917793,-133.959386]).appendPoint([258.730693,-147.9592527]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.647572,-167.0090713],[272.6474387,-167.0701576]]).appendPoint([272.708525,-153.0702909]).appendPoint([258.7086583,-153.0092046]).appendPoint([258.647572,-167.0090713]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.5644509,-186.0588899],[272.5643176,-186.1199762]]).appendPoint([272.6254039,-172.1201095]).appendPoint([258.6255372,-172.0590232]).appendPoint([258.5644509,-186.0588899]).close().innerToCAG()
).union(
    new CSG.Path2D([[258.4813299,-205.1087085],[272.4811966,-205.1697948]]).appendPoint([272.5422829,-191.1699281]).appendPoint([258.5424162,-191.1088418]).appendPoint([258.4813299,-205.1087085]).close().innerToCAG()
).union(
    new CSG.Path2D([[296.9965724,-110.0258576],[310.9964391,-110.0869439]]).appendPoint([311.0575254,-96.0870772]).appendPoint([297.0576587,-96.0259909]).appendPoint([296.9965724,-110.0258576]).close().innerToCAG()
).union(
    new CSG.Path2D([[277.9467537,-109.9427365],[291.9466204,-110.0038228]]).appendPoint([292.0077067,-96.0039561]).appendPoint([278.00784,-95.9428698]).appendPoint([277.9467537,-109.9427365]).close().innerToCAG()
).union(
    new CSG.Path2D([[382.7207564,-110.3999023],[396.7206231,-110.4609886]]).appendPoint([396.7817094,-96.4611219]).appendPoint([382.7818427,-96.4000356]).appendPoint([382.7207564,-110.3999023]).close().innerToCAG()
).union(
    new CSG.Path2D([[363.6709378,-110.3167813],[377.6708045,-110.3778676]]).appendPoint([377.7318908,-96.3780009]).appendPoint([363.7320241,-96.3169146]).appendPoint([363.6709378,-110.3167813]).close().innerToCAG()
).union(
    new CSG.Path2D([[335.0962098,-110.1920997],[349.0960765,-110.253186]]).appendPoint([349.1571628,-96.2533193]).appendPoint([335.1572961,-96.192233]).appendPoint([335.0962098,-110.1920997]).close().innerToCAG()
).union(
    new CSG.Path2D([[316.0463911,-110.1089786],[330.0462578,-110.1700649]]).appendPoint([330.1073441,-96.1701982]).appendPoint([316.1074774,-96.1091119]).appendPoint([316.0463911,-110.1089786]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.3556895,-149.390078],[67.3551564,-149.2679065]]).appendPoint([67.2329849,-135.2684396]).appendPoint([53.233518,-135.3906111]).appendPoint([53.3556895,-149.390078]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.52193,-168.4393526],[67.5213969,-168.3171811]]).appendPoint([67.3992254,-154.3177142]).appendPoint([53.3997585,-154.4398857]).appendPoint([53.52193,-168.4393526]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.6881705,-187.4886273],[67.6876374,-187.3664558]]).appendPoint([67.5654659,-173.3669889]).appendPoint([53.565999,-173.4891604]).appendPoint([53.6881705,-187.4886273]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.854411,-206.5379019],[67.8538779,-206.4157304]]).appendPoint([67.7317064,-192.4162635]).appendPoint([53.7322395,-192.538435]).appendPoint([53.854411,-206.5379019]).close().innerToCAG()
).union(
    new CSG.Path2D([[34.8051363,-206.7041424],[48.8046032,-206.5819709]]).appendPoint([48.6824317,-192.582504]).appendPoint([34.6829648,-192.7046755]).appendPoint([34.8051363,-206.7041424]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.2627824,-147.1017421],[87.2622493,-147.2239136]]).appendPoint([87.3844208,-133.2244467]).appendPoint([73.3849539,-133.1022752]).appendPoint([73.2627824,-147.1017421]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.0965419,-166.1510168],[87.0960088,-166.2731883]]).appendPoint([87.2181803,-152.2737214]).appendPoint([73.2187134,-152.1515499]).appendPoint([73.0965419,-166.1510168]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.9303015,-185.2002914],[86.9297684,-185.3224629]]).appendPoint([87.0519399,-171.322996]).appendPoint([73.052473,-171.2008245]).appendPoint([72.9303015,-185.2002914]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.764061,-204.249566],[86.7635279,-204.3717375]]).appendPoint([86.8856994,-190.3722706]).appendPoint([72.8862325,-190.2500991]).appendPoint([72.764061,-204.249566]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.0441152,-149.6022419],[43.0435821,-149.4800704]]).appendPoint([42.9214106,-135.4806035]).appendPoint([28.9219437,-135.602775]).appendPoint([29.0441152,-149.6022419]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.2103557,-168.6515165],[43.2098226,-168.529345]]).appendPoint([43.0876511,-154.5298781]).appendPoint([29.0881842,-154.6520496]).appendPoint([29.2103557,-168.6515165]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.3765962,-187.7007912],[43.3760631,-187.5786197]]).appendPoint([43.2538916,-173.5791528]).appendPoint([29.2544247,-173.7013243]).appendPoint([29.3765962,-187.7007912]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.189449,-130.3408034],[67.1889159,-130.2186319]]).appendPoint([67.0667444,-116.219165]).appendPoint([53.0672775,-116.3413365]).appendPoint([53.189449,-130.3408034]).close().innerToCAG()
).union(
    new CSG.Path2D([[34.1401743,-130.5070439],[48.1396412,-130.3848724]]).appendPoint([48.0174697,-116.3854055]).appendPoint([34.0180028,-116.507577]).appendPoint([34.1401743,-130.5070439]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.4290229,-128.0524675],[87.4284898,-128.174639]]).appendPoint([87.5506613,-114.1751721]).appendPoint([73.5511944,-114.0530006]).appendPoint([73.4290229,-128.0524675]).close().innerToCAG()
).union(
    new CSG.Path2D([[33.9739338,-111.4577692],[47.9734007,-111.3355977]]).appendPoint([47.8512292,-97.3361308]).appendPoint([33.8517623,-97.4583023]).appendPoint([33.9739338,-111.4577692]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.5952633,-109.0031928],[87.5947302,-109.1253643]]).appendPoint([87.7169017,-95.1258974]).appendPoint([73.7174348,-95.0037259]).appendPoint([73.5952633,-109.0031928]).close().innerToCAG()
).union(
    new CSG.Path2D([[197.1595136,-110.0713803],[211.143391,-109.3996865]]).appendPoint([210.4716972,-95.4158091]).appendPoint([196.4878198,-96.0875029]).appendPoint([197.1595136,-110.0713803]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.9874803,-148.1275038],[212.9713577,-147.45581]]).appendPoint([212.2996639,-133.4719326]).appendPoint([198.3157865,-134.1436264]).appendPoint([198.9874803,-148.1275038]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.815447,-186.1836272],[214.7993244,-185.5119334]]).appendPoint([214.1276306,-171.528056]).appendPoint([200.1437532,-172.1997498]).appendPoint([200.815447,-186.1836272]).close().innerToCAG()
).union(
    new CSG.Path2D([[178.1434464,-111.2350757],[192.1273238,-110.5633819]]).appendPoint([191.45563,-96.5795045]).appendPoint([177.4717526,-97.2511983]).appendPoint([178.1434464,-111.2350757]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.9714131,-149.2911992],[193.9552905,-148.6195054]]).appendPoint([193.2835967,-134.635628]).appendPoint([179.2997193,-135.3073218]).appendPoint([179.9714131,-149.2911992]).close().innerToCAG()
).union(
    new CSG.Path2D([[184.2116358,-206.3034172],[198.1955132,-205.6317234]]).appendPoint([197.5238194,-191.647846]).appendPoint([183.539942,-192.3195398]).appendPoint([184.2116358,-206.3034172]).close().innerToCAG()
).union(
    new CSG.Path2D([[134.1632715,-110.5720197],[148.1471489,-111.2437135]]).appendPoint([148.8188427,-97.2598361]).appendPoint([134.8349653,-96.5881423]).appendPoint([134.1632715,-110.5720197]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.4213214,-167.6562049],[145.4051988,-168.3278987]]).appendPoint([146.0768926,-154.3440213]).appendPoint([132.0930152,-153.6723275]).appendPoint([131.4213214,-167.6562049]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.2492881,-129.6000814],[147.2331655,-130.2717752]]).appendPoint([147.9048593,-116.2878978]).appendPoint([133.9209819,-115.616204]).appendPoint([133.2492881,-129.6000814]).close().innerToCAG()
).union(
    new CSG.Path2D([[199.9014637,-167.1555655],[213.8853411,-166.4838717]]).appendPoint([213.2136473,-152.4999943]).appendPoint([199.2297699,-153.1716881]).appendPoint([199.9014637,-167.1555655]).close().innerToCAG()
).union(
    new CSG.Path2D([[132.3353048,-148.6281431],[146.3191822,-149.2998369]]).appendPoint([146.990876,-135.3159595]).appendPoint([133.0069986,-134.6442657]).appendPoint([132.3353048,-148.6281431]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.073497,-129.0994421],[212.0573744,-128.4277483]]).appendPoint([211.3856806,-114.4438709]).appendPoint([197.4018032,-115.1155647]).appendPoint([198.073497,-129.0994421]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.0574297,-130.2631375],[193.0413071,-129.5914437]]).appendPoint([192.3696133,-115.6075663]).appendPoint([178.3857359,-116.2792601]).appendPoint([179.0574297,-130.2631375]).close().innerToCAG()
).union(
    new CSG.Path2D([[180.8853964,-168.3192609],[194.8692738,-167.6475671]]).appendPoint([194.19758,-153.6636897]).appendPoint([180.2137026,-154.3353835]).appendPoint([180.8853964,-168.3192609]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.7993798,-187.3473226],[195.7832572,-186.6756288]]).appendPoint([195.1115634,-172.6917514]).appendPoint([181.127686,-173.3634452]).appendPoint([181.7993798,-187.3473226]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.5073381,-186.6842666],[144.4912155,-187.3559604]]).appendPoint([145.1629093,-173.372083]).appendPoint([131.1790319,-172.7003892]).appendPoint([130.5073381,-186.6842666]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.0950822,-205.6403611],[142.0789596,-206.3120549]]).appendPoint([142.7506534,-192.3281775]).appendPoint([128.766776,-191.6564837]).appendPoint([128.0950822,-205.6403611]).close().innerToCAG()
).union(
    new CSG.Path2D([[113.9253007,-128.5360526],[127.9119758,-129.1467241]]).appendPoint([128.5226473,-115.160049]).appendPoint([114.5359722,-114.5493775]).appendPoint([113.9253007,-128.5360526]).close().innerToCAG()
).union(
    new CSG.Path2D([[113.0943513,-147.5679212],[127.0810264,-148.1785927]]).appendPoint([127.6916979,-134.1919176]).appendPoint([113.7050228,-133.5812461]).appendPoint([113.0943513,-147.5679212]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.263402,-166.5997898],[126.2500771,-167.2104613]]).appendPoint([126.8607486,-153.2237862]).appendPoint([112.8740735,-152.6131147]).appendPoint([112.263402,-166.5997898]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.4324526,-185.6316583],[125.4191277,-186.2423298]]).appendPoint([126.0297992,-172.2556547]).appendPoint([112.0431241,-171.6449832]).appendPoint([111.4324526,-185.6316583]).close().innerToCAG()
).union(
    new CSG.Path2D([[114.75625,-109.504184],[128.7429251,-110.1148555]]).appendPoint([129.3535966,-96.1281804]).appendPoint([115.3669215,-95.5175089]).appendPoint([114.75625,-109.504184]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.7814159,-146.33477],[252.7802165,-146.1515156]]).appendPoint([252.5969621,-132.152715]).appendPoint([238.5981615,-132.3359694]).appendPoint([238.7814159,-146.33477]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.5320591,-127.2864021],[252.5308597,-127.1031477]]).appendPoint([252.3476053,-113.1043471]).appendPoint([238.3488047,-113.2876015]).appendPoint([238.5320591,-127.2864021]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.2801294,-184.431506],[253.27893,-184.2482516]]).appendPoint([253.0956756,-170.249451]).appendPoint([239.096875,-170.4327054]).appendPoint([239.2801294,-184.431506]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.5294861,-203.479874],[253.5282867,-203.2966196]]).appendPoint([253.3450323,-189.297819]).appendPoint([239.3462317,-189.4810734]).appendPoint([239.5294861,-203.479874]).close().innerToCAG()
).union(
    new CSG.Path2D([[238.2827023,-108.2380341],[252.2815029,-108.0547797]]).appendPoint([252.0982485,-94.0559791]).appendPoint([238.0994479,-94.2392335]).appendPoint([238.2827023,-108.2380341]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.0307726,-165.383138],[253.0295732,-165.1998836]]).appendPoint([252.8463188,-151.201083]).appendPoint([238.8475182,-151.3843374]).appendPoint([239.0307726,-165.383138]).close().innerToCAG()
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

        