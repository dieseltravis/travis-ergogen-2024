// KiCad-Logo5Copper
module.exports = {
    params: {
        designator: 'SYM',
        side: 'F',
        layer: 'Cu'
    },
    body: p => `
    (module KiCad-Logo_5mm_Copper (layer ${p.side}.${p.layer}) (tedit 0)
    (descr "KiCad Logo")
    (tags "Logo KiCad")
    ${p.at /* parametric position */}
    (attr virtual)
    (fp_text reference "${p.ref}" (at 0 -5.08) (layer ${p.side}.SilkS) hide
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value KiCad-Logo_5mm_Copper (at 0 3.81) (layer ${p.side}.Fab) hide
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_poly (pts (xy -2.9464 -2.510946) (xy -2.935535 -2.397007) (xy -2.903918 -2.289384) (xy -2.853015 -2.190385)
      (xy -2.784293 -2.102316) (xy -2.699219 -2.027484) (xy -2.602232 -1.969616) (xy -2.495964 -1.929995)
      (xy -2.38895 -1.911427) (xy -2.2833 -1.912566) (xy -2.181125 -1.93207) (xy -2.084534 -1.968594)
      (xy -1.995638 -2.020795) (xy -1.916546 -2.087327) (xy -1.849369 -2.166848) (xy -1.796217 -2.258013)
      (xy -1.759199 -2.359477) (xy -1.740427 -2.469898) (xy -1.738489 -2.519794) (xy -1.738489 -2.607733)
      (xy -1.68656 -2.607733) (xy -1.650253 -2.604889) (xy -1.623355 -2.593089) (xy -1.596249 -2.569351)
      (xy -1.557867 -2.530969) (xy -1.557867 -0.339398) (xy -1.557876 -0.077261) (xy -1.557908 0.163241)
      (xy -1.557972 0.383048) (xy -1.558076 0.583101) (xy -1.558227 0.764344) (xy -1.558434 0.927716)
      (xy -1.558706 1.07416) (xy -1.55905 1.204617) (xy -1.559474 1.320029) (xy -1.559987 1.421338)
      (xy -1.560597 1.509484) (xy -1.561312 1.58541) (xy -1.56214 1.650057) (xy -1.563089 1.704367)
      (xy -1.564167 1.74928) (xy -1.565383 1.78574) (xy -1.566745 1.814687) (xy -1.568261 1.837063)
      (xy -1.569938 1.853809) (xy -1.571786 1.865868) (xy -1.573813 1.87418) (xy -1.576025 1.879687)
      (xy -1.577108 1.881537) (xy -1.581271 1.888549) (xy -1.584805 1.894996) (xy -1.588635 1.9009)
      (xy -1.593682 1.906286) (xy -1.600871 1.911178) (xy -1.611123 1.915598) (xy -1.625364 1.919572)
      (xy -1.644514 1.923121) (xy -1.669499 1.92627) (xy -1.70124 1.929042) (xy -1.740662 1.931461)
      (xy -1.788686 1.933551) (xy -1.846237 1.935335) (xy -1.914237 1.936837) (xy -1.99361 1.93808)
      (xy -2.085279 1.939089) (xy -2.190166 1.939885) (xy -2.309196 1.940494) (xy -2.44329 1.940939)
      (xy -2.593373 1.941243) (xy -2.760367 1.94143) (xy -2.945196 1.941524) (xy -3.148783 1.941548)
      (xy -3.37205 1.941525) (xy -3.615922 1.94148) (xy -3.881321 1.941437) (xy -3.919704 1.941432)
      (xy -4.186682 1.941389) (xy -4.432002 1.941318) (xy -4.656583 1.941213) (xy -4.861345 1.941066)
      (xy -5.047206 1.940869) (xy -5.215088 1.940616) (xy -5.365908 1.9403) (xy -5.500587 1.939913)
      (xy -5.620044 1.939447) (xy -5.725199 1.938897) (xy -5.816971 1.938253) (xy -5.896279 1.937511)
      (xy -5.964043 1.936661) (xy -6.021182 1.935697) (xy -6.068617 1.934611) (xy -6.107266 1.933397)
      (xy -6.138049 1.932047) (xy -6.161885 1.930555) (xy -6.179694 1.928911) (xy -6.192395 1.927111)
      (xy -6.200908 1.925145) (xy -6.205266 1.923477) (xy -6.213728 1.919906) (xy -6.221497 1.91727)
      (xy -6.228602 1.914634) (xy -6.235073 1.911062) (xy -6.240939 1.905621) (xy -6.246229 1.897375)
      (xy -6.250974 1.88539) (xy -6.255202 1.868731) (xy -6.258943 1.846463) (xy -6.262227 1.817652)
      (xy -6.265083 1.781363) (xy -6.26754 1.736661) (xy -6.269629 1.682611) (xy -6.271378 1.618279)
      (xy -6.272817 1.54273) (xy -6.273976 1.45503) (xy -6.274883 1.354243) (xy -6.275569 1.239434)
      (xy -6.276063 1.10967) (xy -6.276395 0.964015) (xy -6.276593 0.801535) (xy -6.276687 0.621295)
      (xy -6.276708 0.42236) (xy -6.276685 0.203796) (xy -6.276646 -0.035332) (xy -6.276622 -0.29596)
      (xy -6.276622 -0.338111) (xy -6.276636 -0.601008) (xy -6.276661 -0.842268) (xy -6.276671 -1.062835)
      (xy -6.276642 -1.263648) (xy -6.276548 -1.445651) (xy -6.276362 -1.609784) (xy -6.276059 -1.756989)
      (xy -6.275614 -1.888208) (xy -6.275034 -1.998133) (xy -5.972197 -1.998133) (xy -5.932407 -1.940289)
      (xy -5.921236 -1.924521) (xy -5.911166 -1.910559) (xy -5.902138 -1.897216) (xy -5.894097 -1.883307)
      (xy -5.886986 -1.867644) (xy -5.880747 -1.849042) (xy -5.875325 -1.826314) (xy -5.870662 -1.798273)
      (xy -5.866701 -1.763733) (xy -5.863385 -1.721508) (xy -5.860659 -1.670411) (xy -5.858464 -1.609256)
      (xy -5.856745 -1.536856) (xy -5.855444 -1.452025) (xy -5.854505 -1.353578) (xy -5.85387 -1.240326)
      (xy -5.853484 -1.111084) (xy -5.853288 -0.964666) (xy -5.853227 -0.799884) (xy -5.853243 -0.615553)
      (xy -5.85328 -0.410487) (xy -5.853289 -0.287867) (xy -5.853265 -0.070918) (xy -5.853231 0.124642)
      (xy -5.853243 0.299999) (xy -5.853358 0.456341) (xy -5.85363 0.594857) (xy -5.854118 0.716734)
      (xy -5.854876 0.82316) (xy -5.855962 0.915322) (xy -5.857431 0.994409) (xy -5.85934 1.061608)
      (xy -5.861744 1.118107) (xy -5.864701 1.165093) (xy -5.868266 1.203755) (xy -5.872495 1.23528)
      (xy -5.877446 1.260855) (xy -5.883173 1.28167) (xy -5.889733 1.298911) (xy -5.897183 1.313765)
      (xy -5.905579 1.327422) (xy -5.914976 1.341069) (xy -5.925432 1.355893) (xy -5.931523 1.364783)
      (xy -5.970296 1.4224) (xy -5.438732 1.4224) (xy -5.315483 1.422365) (xy -5.212987 1.422215)
      (xy -5.12942 1.421878) (xy -5.062956 1.421286) (xy -5.011771 1.420367) (xy -4.974041 1.419051)
      (xy -4.94794 1.417269) (xy -4.931644 1.414951) (xy -4.923328 1.412026) (xy -4.921168 1.408424)
      (xy -4.923339 1.404075) (xy -4.924535 1.402645) (xy -4.949685 1.365573) (xy -4.975583 1.312772)
      (xy -4.999192 1.25077) (xy -5.007461 1.224357) (xy -5.012078 1.206416) (xy -5.015979 1.185355)
      (xy -5.019248 1.159089) (xy -5.021966 1.125532) (xy -5.024215 1.082599) (xy -5.026077 1.028204)
      (xy -5.027636 0.960262) (xy -5.028972 0.876688) (xy -5.030169 0.775395) (xy -5.031308 0.6543)
      (xy -5.031685 0.6096) (xy -5.032702 0.484449) (xy -5.03346 0.380082) (xy -5.033903 0.294707)
      (xy -5.03397 0.226533) (xy -5.033605 0.173765) (xy -5.032748 0.134614) (xy -5.031341 0.107285)
      (xy -5.029325 0.089986) (xy -5.026643 0.080926) (xy -5.023236 0.078312) (xy -5.019044 0.080351)
      (xy -5.014571 0.084667) (xy -5.004216 0.097602) (xy -4.982158 0.126676) (xy -4.949957 0.169759)
      (xy -4.909174 0.224718) (xy -4.86137 0.289423) (xy -4.808105 0.361742) (xy -4.75094 0.439544)
      (xy -4.691437 0.520698) (xy -4.631155 0.603072) (xy -4.571655 0.684536) (xy -4.514498 0.762957)
      (xy -4.461245 0.836204) (xy -4.413457 0.902147) (xy -4.372693 0.958654) (xy -4.340516 1.003593)
      (xy -4.318485 1.034834) (xy -4.313917 1.041466) (xy -4.290996 1.078369) (xy -4.264188 1.126359)
      (xy -4.238789 1.175897) (xy -4.235568 1.182577) (xy -4.21389 1.230772) (xy -4.201304 1.268334)
      (xy -4.195574 1.30416) (xy -4.194456 1.3462) (xy -4.19509 1.4224) (xy -3.040651 1.4224)
      (xy -3.131815 1.328669) (xy -3.178612 1.278775) (xy -3.228899 1.222295) (xy -3.274944 1.168026)
      (xy -3.295369 1.142673) (xy -3.325807 1.103128) (xy -3.365862 1.049916) (xy -3.414361 0.984667)
      (xy -3.470135 0.909011) (xy -3.532011 0.824577) (xy -3.598819 0.732994) (xy -3.669387 0.635892)
      (xy -3.742545 0.534901) (xy -3.817121 0.43165) (xy -3.891944 0.327768) (xy -3.965843 0.224885)
      (xy -4.037646 0.124631) (xy -4.106184 0.028636) (xy -4.170284 -0.061473) (xy -4.228775 -0.144064)
      (xy -4.280486 -0.217508) (xy -4.324247 -0.280176) (xy -4.358885 -0.330439) (xy -4.38323 -0.366666)
      (xy -4.396111 -0.387229) (xy -4.397869 -0.391332) (xy -4.38991 -0.402658) (xy -4.369115 -0.429838)
      (xy -4.336847 -0.471171) (xy -4.29447 -0.524956) (xy -4.243347 -0.589494) (xy -4.184841 -0.663082)
      (xy -4.120314 -0.744022) (xy -4.051131 -0.830612) (xy -3.978653 -0.921152) (xy -3.904246 -1.01394)
      (xy -3.844517 -1.088298) (xy -2.833511 -1.088298) (xy -2.827602 -1.075341) (xy -2.813272 -1.053092)
      (xy -2.812225 -1.051609) (xy -2.793438 -1.021456) (xy -2.773791 -0.984625) (xy -2.769892 -0.976489)
      (xy -2.766356 -0.96806) (xy -2.76323 -0.957941) (xy -2.760486 -0.94474) (xy -2.758092 -0.927062)
      (xy -2.756019 -0.903516) (xy -2.754235 -0.872707) (xy -2.752712 -0.833243) (xy -2.751419 -0.783731)
      (xy -2.750326 -0.722777) (xy -2.749403 -0.648989) (xy -2.748619 -0.560972) (xy -2.747945 -0.457335)
      (xy -2.74735 -0.336684) (xy -2.746805 -0.197626) (xy -2.746279 -0.038768) (xy -2.745745 0.140089)
      (xy -2.745206 0.325207) (xy -2.744772 0.489145) (xy -2.744509 0.633303) (xy -2.744484 0.759079)
      (xy -2.744765 0.867871) (xy -2.745419 0.961077) (xy -2.746514 1.040097) (xy -2.748118 1.106328)
      (xy -2.750297 1.16117) (xy -2.753119 1.206021) (xy -2.756651 1.242278) (xy -2.760961 1.271341)
      (xy -2.766117 1.294609) (xy -2.772185 1.313479) (xy -2.779233 1.329351) (xy -2.787329 1.343622)
      (xy -2.79654 1.357691) (xy -2.80504 1.370158) (xy -2.822176 1.396452) (xy -2.832322 1.414037)
      (xy -2.833511 1.417257) (xy -2.822604 1.418334) (xy -2.791411 1.419335) (xy -2.742223 1.420235)
      (xy -2.677333 1.42101) (xy -2.59903 1.421637) (xy -2.509607 1.422091) (xy -2.411356 1.422349)
      (xy -2.342445 1.4224) (xy -2.237452 1.42218) (xy -2.14061 1.421548) (xy -2.054107 1.420549)
      (xy -1.980132 1.419227) (xy -1.920874 1.417626) (xy -1.87852 1.415791) (xy -1.85526 1.413765)
      (xy -1.851378 1.412493) (xy -1.859076 1.397591) (xy -1.867074 1.38956) (xy -1.880246 1.372434)
      (xy -1.897485 1.342183) (xy -1.909407 1.317622) (xy -1.936045 1.258711) (xy -1.93912 0.081845)
      (xy -1.942195 -1.095022) (xy -2.387853 -1.095022) (xy -2.48567 -1.094858) (xy -2.576064 -1.094389)
      (xy -2.65663 -1.093653) (xy -2.724962 -1.092684) (xy -2.778656 -1.09152) (xy -2.815305 -1.090197)
      (xy -2.832504 -1.088751) (xy -2.833511 -1.088298) (xy -3.844517 -1.088298) (xy -3.82927 -1.107278)
      (xy -3.75509 -1.199463) (xy -3.683069 -1.288796) (xy -3.614569 -1.373576) (xy -3.550955 -1.452102)
      (xy -3.493588 -1.522674) (xy -3.443833 -1.583591) (xy -3.403052 -1.633153) (xy -3.385888 -1.653822)
      (xy -3.299596 -1.754484) (xy -3.222997 -1.837741) (xy -3.154183 -1.905562) (xy -3.091248 -1.959911)
      (xy -3.081867 -1.967278) (xy -3.042356 -1.997883) (xy -4.174116 -1.998133) (xy -4.168827 -1.950156)
      (xy -4.17213 -1.892812) (xy -4.193661 -1.824537) (xy -4.233635 -1.744788) (xy -4.278943 -1.672505)
      (xy -4.295161 -1.64986) (xy -4.323214 -1.612304) (xy -4.36143 -1.561979) (xy -4.408137 -1.501027)
      (xy -4.461661 -1.431589) (xy -4.520331 -1.355806) (xy -4.582475 -1.27582) (xy -4.646421 -1.193772)
      (xy -4.710495 -1.111804) (xy -4.773027 -1.032057) (xy -4.832343 -0.956673) (xy -4.886771 -0.887793)
      (xy -4.934639 -0.827558) (xy -4.974275 -0.778111) (xy -5.004006 -0.741592) (xy -5.022161 -0.720142)
      (xy -5.02522 -0.716844) (xy -5.028079 -0.724851) (xy -5.030293 -0.755145) (xy -5.031857 -0.807444)
      (xy -5.032767 -0.881469) (xy -5.03302 -0.976937) (xy -5.032613 -1.093566) (xy -5.031704 -1.213555)
      (xy -5.030382 -1.345667) (xy -5.028857 -1.457406) (xy -5.026881 -1.550975) (xy -5.024206 -1.628581)
      (xy -5.020582 -1.692426) (xy -5.015761 -1.744717) (xy -5.009494 -1.787656) (xy -5.001532 -1.823449)
      (xy -4.991627 -1.8543) (xy -4.979531 -1.882414) (xy -4.964993 -1.909995) (xy -4.950311 -1.935034)
      (xy -4.912314 -1.998133) (xy -5.972197 -1.998133) (xy -6.275034 -1.998133) (xy -6.275001 -2.004383)
      (xy -6.274195 -2.106456) (xy -6.27317 -2.195367) (xy -6.2719 -2.272059) (xy -6.27036 -2.337473)
      (xy -6.268524 -2.392551) (xy -6.266367 -2.438235) (xy -6.263863 -2.475466) (xy -6.260987 -2.505187)
      (xy -6.257713 -2.528338) (xy -6.254015 -2.545861) (xy -6.249869 -2.558699) (xy -6.245247 -2.567792)
      (xy -6.240126 -2.574082) (xy -6.234478 -2.578512) (xy -6.228279 -2.582022) (xy -6.221504 -2.585555)
      (xy -6.215508 -2.589124) (xy -6.210275 -2.5917) (xy -6.202099 -2.594028) (xy -6.189886 -2.596122)
      (xy -6.172541 -2.597993) (xy -6.148969 -2.599653) (xy -6.118077 -2.601116) (xy -6.078768 -2.602392)
      (xy -6.02995 -2.603496) (xy -5.970527 -2.604439) (xy -5.899404 -2.605233) (xy -5.815488 -2.605891)
      (xy -5.717683 -2.606425) (xy -5.604894 -2.606847) (xy -5.476029 -2.607171) (xy -5.329991 -2.607408)
      (xy -5.165686 -2.60757) (xy -4.98202 -2.60767) (xy -4.777897 -2.60772) (xy -4.566753 -2.607733)
      (xy -2.9464 -2.607733) (xy -2.9464 -2.510946)) (layer ${p.side}.${p.layer}) (width 0.01))
    (fp_poly (pts (xy 0.328429 -2.050929) (xy 0.48857 -2.029755) (xy 0.65251 -1.989615) (xy 0.822313 -1.930111)
      (xy 1.000043 -1.850846) (xy 1.01131 -1.845301) (xy 1.069005 -1.817275) (xy 1.120552 -1.793198)
      (xy 1.162191 -1.774751) (xy 1.190162 -1.763614) (xy 1.199733 -1.761067) (xy 1.21895 -1.756059)
      (xy 1.223561 -1.751853) (xy 1.218458 -1.74142) (xy 1.202418 -1.715132) (xy 1.177288 -1.675743)
      (xy 1.144914 -1.626009) (xy 1.107143 -1.568685) (xy 1.065822 -1.506524) (xy 1.022798 -1.442282)
      (xy 0.979917 -1.378715) (xy 0.939026 -1.318575) (xy 0.901971 -1.26462) (xy 0.8706 -1.219603)
      (xy 0.846759 -1.186279) (xy 0.832294 -1.167403) (xy 0.830309 -1.165213) (xy 0.820191 -1.169862)
      (xy 0.79785 -1.187038) (xy 0.76728 -1.21356) (xy 0.751536 -1.228036) (xy 0.655047 -1.303318)
      (xy 0.548336 -1.358759) (xy 0.432832 -1.393859) (xy 0.309962 -1.40812) (xy 0.240561 -1.406949)
      (xy 0.119423 -1.389788) (xy 0.010205 -1.353906) (xy -0.087418 -1.299041) (xy -0.173772 -1.22493)
      (xy -0.249185 -1.131312) (xy -0.313982 -1.017924) (xy -0.351399 -0.931333) (xy -0.395252 -0.795634)
      (xy -0.427572 -0.64815) (xy -0.448443 -0.492686) (xy -0.457949 -0.333044) (xy -0.456173 -0.173027)
      (xy -0.443197 -0.016439) (xy -0.419106 0.132918) (xy -0.383982 0.27124) (xy -0.337908 0.394724)
      (xy -0.321627 0.428978) (xy -0.25338 0.543064) (xy -0.172921 0.639557) (xy -0.08143 0.71767)
      (xy 0.019911 0.776617) (xy 0.12992 0.815612) (xy 0.247415 0.833868) (xy 0.288883 0.835211)
      (xy 0.410441 0.82429) (xy 0.530878 0.791474) (xy 0.648666 0.737439) (xy 0.762277 0.662865)
      (xy 0.853685 0.584539) (xy 0.900215 0.540008) (xy 1.081483 0.837271) (xy 1.12658 0.911433)
      (xy 1.167819 0.979646) (xy 1.203735 1.039459) (xy 1.232866 1.08842) (xy 1.25375 1.124079)
      (xy 1.264924 1.143984) (xy 1.266375 1.147079) (xy 1.258146 1.156718) (xy 1.232567 1.173999)
      (xy 1.192873 1.197283) (xy 1.142297 1.224934) (xy 1.084074 1.255315) (xy 1.021437 1.28679)
      (xy 0.957621 1.317722) (xy 0.89586 1.346473) (xy 0.839388 1.371408) (xy 0.791438 1.390889)
      (xy 0.767986 1.399318) (xy 0.634221 1.437133) (xy 0.496327 1.462136) (xy 0.348622 1.47514)
      (xy 0.221833 1.477468) (xy 0.153878 1.476373) (xy 0.088277 1.474275) (xy 0.030847 1.471434)
      (xy -0.012597 1.468106) (xy -0.026702 1.466422) (xy -0.165716 1.437587) (xy -0.307243 1.392468)
      (xy -0.444725 1.33375) (xy -0.571606 1.26412) (xy -0.649111 1.211441) (xy -0.776519 1.103239)
      (xy -0.894822 0.976671) (xy -1.001828 0.834866) (xy -1.095348 0.680951) (xy -1.17319 0.518053)
      (xy -1.217044 0.400756) (xy -1.267292 0.217128) (xy -1.300791 0.022581) (xy -1.317551 -0.178675)
      (xy -1.317584 -0.382432) (xy -1.300899 -0.584479) (xy -1.267507 -0.780608) (xy -1.21742 -0.966609)
      (xy -1.213603 -0.978197) (xy -1.150719 -1.14025) (xy -1.073972 -1.288168) (xy -0.980758 -1.426135)
      (xy -0.868473 -1.558339) (xy -0.824608 -1.603601) (xy -0.688466 -1.727543) (xy -0.548509 -1.830085)
      (xy -0.402589 -1.912344) (xy -0.248558 -1.975436) (xy -0.084268 -2.020477) (xy 0.011289 -2.037967)
      (xy 0.170023 -2.053534) (xy 0.328429 -2.050929)) (layer ${p.side}.${p.layer}) (width 0.01))
    (fp_poly (pts (xy 2.673574 -1.133448) (xy 2.825492 -1.113433) (xy 2.960756 -1.079798) (xy 3.080239 -1.032275)
      (xy 3.184815 -0.970595) (xy 3.262424 -0.907035) (xy 3.331265 -0.832901) (xy 3.385006 -0.753129)
      (xy 3.42791 -0.660909) (xy 3.443384 -0.617839) (xy 3.456244 -0.578858) (xy 3.467446 -0.542711)
      (xy 3.47712 -0.507566) (xy 3.485396 -0.47159) (xy 3.492403 -0.43295) (xy 3.498272 -0.389815)
      (xy 3.503131 -0.340351) (xy 3.50711 -0.282727) (xy 3.51034 -0.215109) (xy 3.512949 -0.135666)
      (xy 3.515067 -0.042564) (xy 3.516824 0.066027) (xy 3.518349 0.191942) (xy 3.519772 0.337012)
      (xy 3.521025 0.479778) (xy 3.522351 0.635968) (xy 3.523556 0.771239) (xy 3.524766 0.887246)
      (xy 3.526106 0.985645) (xy 3.5277 1.068093) (xy 3.529675 1.136246) (xy 3.532156 1.19176)
      (xy 3.535269 1.236292) (xy 3.539138 1.271498) (xy 3.543889 1.299034) (xy 3.549648 1.320556)
      (xy 3.556539 1.337722) (xy 3.564689 1.352186) (xy 3.574223 1.365606) (xy 3.585266 1.379638)
      (xy 3.589566 1.385071) (xy 3.605386 1.40791) (xy 3.612422 1.423463) (xy 3.612444 1.423922)
      (xy 3.601567 1.426121) (xy 3.570582 1.428147) (xy 3.521957 1.429942) (xy 3.458163 1.431451)
      (xy 3.381669 1.432616) (xy 3.294944 1.43338) (xy 3.200457 1.433686) (xy 3.18955 1.433689)
      (xy 2.766657 1.433689) (xy 2.763395 1.337622) (xy 2.760133 1.241556) (xy 2.698044 1.292543)
      (xy 2.600714 1.360057) (xy 2.490813 1.414749) (xy 2.404349 1.444978) (xy 2.335278 1.459666)
      (xy 2.251925 1.469659) (xy 2.162159 1.474646) (xy 2.073845 1.474313) (xy 1.994851 1.468351)
      (xy 1.958622 1.462638) (xy 1.818603 1.424776) (xy 1.692178 1.369932) (xy 1.58026 1.298924)
      (xy 1.483762 1.212568) (xy 1.4036 1.111679) (xy 1.340687 0.997076) (xy 1.296312 0.870984)
      (xy 1.283978 0.814401) (xy 1.276368 0.752202) (xy 1.272739 0.677363) (xy 1.272245 0.643467)
      (xy 1.27231 0.640282) (xy 2.032248 0.640282) (xy 2.041541 0.715333) (xy 2.069728 0.77916)
      (xy 2.118197 0.834798) (xy 2.123254 0.839211) (xy 2.171548 0.874037) (xy 2.223257 0.89662)
      (xy 2.283989 0.90854) (xy 2.359352 0.911383) (xy 2.377459 0.910978) (xy 2.431278 0.908325)
      (xy 2.471308 0.902909) (xy 2.506324 0.892745) (xy 2.545103 0.87585) (xy 2.555745 0.870672)
      (xy 2.616396 0.834844) (xy 2.663215 0.792212) (xy 2.675952 0.776973) (xy 2.720622 0.720462)
      (xy 2.720622 0.524586) (xy 2.720086 0.445939) (xy 2.718396 0.387988) (xy 2.715428 0.348875)
      (xy 2.711057 0.326741) (xy 2.706972 0.320274) (xy 2.691047 0.317111) (xy 2.657264 0.314488)
      (xy 2.61034 0.312655) (xy 2.554993 0.311857) (xy 2.546106 0.311842) (xy 2.42533 0.317096)
      (xy 2.32266 0.333263) (xy 2.236106 0.360961) (xy 2.163681 0.400808) (xy 2.108751 0.447758)
      (xy 2.064204 0.505645) (xy 2.03948 0.568693) (xy 2.032248 0.640282) (xy 1.27231 0.640282)
      (xy 1.274178 0.549712) (xy 1.282522 0.470812) (xy 1.298768 0.39959) (xy 1.324405 0.328864)
      (xy 1.348401 0.276493) (xy 1.40702 0.181196) (xy 1.485117 0.09317) (xy 1.580315 0.014017)
      (xy 1.690238 -0.05466) (xy 1.81251 -0.111259) (xy 1.944755 -0.154179) (xy 2.009422 -0.169118)
      (xy 2.145604 -0.191223) (xy 2.294049 -0.205806) (xy 2.445505 -0.212187) (xy 2.572064 -0.210555)
      (xy 2.73395 -0.203776) (xy 2.72653 -0.262755) (xy 2.707238 -0.361908) (xy 2.676104 -0.442628)
      (xy 2.632269 -0.505534) (xy 2.574871 -0.551244) (xy 2.503048 -0.580378) (xy 2.415941 -0.593553)
      (xy 2.312686 -0.591389) (xy 2.274711 -0.587388) (xy 2.13352 -0.56222) (xy 1.996707 -0.521186)
      (xy 1.902178 -0.483185) (xy 1.857018 -0.46381) (xy 1.818585 -0.44824) (xy 1.792234 -0.438595)
      (xy 1.784546 -0.436548) (xy 1.774802 -0.445626) (xy 1.758083 -0.474595) (xy 1.734232 -0.523783)
      (xy 1.703093 -0.593516) (xy 1.664507 -0.684121) (xy 1.65791 -0.699911) (xy 1.627853 -0.772228)
      (xy 1.600874 -0.837575) (xy 1.578136 -0.893094) (xy 1.560806 -0.935928) (xy 1.550048 -0.963219)
      (xy 1.546941 -0.972058) (xy 1.55694 -0.976813) (xy 1.583217 -0.98209) (xy 1.611489 -0.985769)
      (xy 1.641646 -0.990526) (xy 1.689433 -0.999972) (xy 1.750612 -1.01318) (xy 1.820946 -1.029224)
      (xy 1.896194 -1.04718) (xy 1.924755 -1.054203) (xy 2.029816 -1.079791) (xy 2.11748 -1.099853)
      (xy 2.192068 -1.115031) (xy 2.257903 -1.125965) (xy 2.319307 -1.133296) (xy 2.380602 -1.137665)
      (xy 2.44611 -1.139713) (xy 2.504128 -1.140111) (xy 2.673574 -1.133448)) (layer ${p.side}.${p.layer}) (width 0.01))
    (fp_poly (pts (xy 6.186507 -0.527755) (xy 6.186526 -0.293338) (xy 6.186552 -0.080397) (xy 6.186625 0.112168)
      (xy 6.186782 0.285459) (xy 6.187064 0.440576) (xy 6.187509 0.57862) (xy 6.188156 0.700692)
      (xy 6.189045 0.807894) (xy 6.190213 0.901326) (xy 6.191701 0.98209) (xy 6.193546 1.051286)
      (xy 6.195789 1.110015) (xy 6.198469 1.159379) (xy 6.201623 1.200478) (xy 6.205292 1.234413)
      (xy 6.209513 1.262286) (xy 6.214327 1.285198) (xy 6.219773 1.304249) (xy 6.225888 1.32054)
      (xy 6.232712 1.335173) (xy 6.240285 1.349249) (xy 6.248645 1.363868) (xy 6.253839 1.372974)
      (xy 6.288104 1.433689) (xy 5.429955 1.433689) (xy 5.429955 1.337733) (xy 5.429224 1.29437)
      (xy 5.427272 1.261205) (xy 5.424463 1.243424) (xy 5.423221 1.241778) (xy 5.411799 1.248662)
      (xy 5.389084 1.266505) (xy 5.366385 1.285879) (xy 5.3118 1.326614) (xy 5.242321 1.367617)
      (xy 5.16527 1.405123) (xy 5.087965 1.435364) (xy 5.057113 1.445012) (xy 4.988616 1.459578)
      (xy 4.905764 1.469539) (xy 4.816371 1.474583) (xy 4.728248 1.474396) (xy 4.649207 1.468666)
      (xy 4.611511 1.462858) (xy 4.473414 1.424797) (xy 4.346113 1.367073) (xy 4.230292 1.290211)
      (xy 4.126637 1.194739) (xy 4.035833 1.081179) (xy 3.969031 0.970381) (xy 3.914164 0.853625)
      (xy 3.872163 0.734276) (xy 3.842167 0.608283) (xy 3.823311 0.471594) (xy 3.814732 0.320158)
      (xy 3.814006 0.242711) (xy 3.8161 0.185934) (xy 4.645217 0.185934) (xy 4.645424 0.279002)
      (xy 4.648337 0.366692) (xy 4.654 0.443772) (xy 4.662455 0.505009) (xy 4.665038 0.51735)
      (xy 4.69684 0.624633) (xy 4.738498 0.711658) (xy 4.790363 0.778642) (xy 4.852781 0.825805)
      (xy 4.9261 0.853365) (xy 5.010669 0.861541) (xy 5.106835 0.850551) (xy 5.170311 0.834829)
      (xy 5.219454 0.816639) (xy 5.273583 0.790791) (xy 5.314244 0.767089) (xy 5.3848 0.720721)
      (xy 5.3848 -0.42947) (xy 5.317392 -0.473038) (xy 5.238867 -0.51396) (xy 5.154681 -0.540611)
      (xy 5.069557 -0.552535) (xy 4.988216 -0.549278) (xy 4.91538 -0.530385) (xy 4.883426 -0.514816)
      (xy 4.825501 -0.471819) (xy 4.776544 -0.415047) (xy 4.73539 -0.342425) (xy 4.700874 -0.251879)
      (xy 4.671833 -0.141334) (xy 4.670552 -0.135467) (xy 4.660381 -0.073212) (xy 4.652739 0.004594)
      (xy 4.64767 0.09272) (xy 4.645217 0.185934) (xy 3.8161 0.185934) (xy 3.821857 0.029895)
      (xy 3.843802 -0.165941) (xy 3.879786 -0.344668) (xy 3.929759 -0.506155) (xy 3.993668 -0.650274)
      (xy 4.071462 -0.776894) (xy 4.163089 -0.885885) (xy 4.268497 -0.977117) (xy 4.313662 -1.008068)
      (xy 4.414611 -1.064215) (xy 4.517901 -1.103826) (xy 4.627989 -1.127986) (xy 4.74933 -1.137781)
      (xy 4.841836 -1.136735) (xy 4.97149 -1.125769) (xy 5.084084 -1.103954) (xy 5.182875 -1.070286)
      (xy 5.271121 -1.023764) (xy 5.319986 -0.989552) (xy 5.349353 -0.967638) (xy 5.371043 -0.952667)
      (xy 5.379253 -0.948267) (xy 5.380868 -0.959096) (xy 5.382159 -0.989749) (xy 5.383138 -1.037474)
      (xy 5.383817 -1.099521) (xy 5.38421 -1.173138) (xy 5.38433 -1.255573) (xy 5.384188 -1.344075)
      (xy 5.383797 -1.435893) (xy 5.383171 -1.528276) (xy 5.38232 -1.618472) (xy 5.38126 -1.703729)
      (xy 5.380001 -1.781297) (xy 5.378556 -1.848424) (xy 5.376938 -1.902359) (xy 5.375161 -1.94035)
      (xy 5.374669 -1.947333) (xy 5.367092 -2.017749) (xy 5.355531 -2.072898) (xy 5.337792 -2.120019)
      (xy 5.311682 -2.166353) (xy 5.305415 -2.175933) (xy 5.280983 -2.212622) (xy 6.186311 -2.212622)
      (xy 6.186507 -0.527755)) (layer ${p.side}.${p.layer}) (width 0.01))
    (fp_poly (pts (xy -2.273043 -2.973429) (xy -2.176768 -2.949191) (xy -2.090184 -2.906359) (xy -2.015373 -2.846581)
      (xy -1.954418 -2.771506) (xy -1.909399 -2.68278) (xy -1.883136 -2.58647) (xy -1.877286 -2.489205)
      (xy -1.89214 -2.395346) (xy -1.92584 -2.307489) (xy -1.976528 -2.22823) (xy -2.042345 -2.160164)
      (xy -2.121434 -2.105888) (xy -2.211934 -2.067998) (xy -2.2632 -2.055574) (xy -2.307698 -2.048053)
      (xy -2.341999 -2.045081) (xy -2.37496 -2.046906) (xy -2.415434 -2.053775) (xy -2.448531 -2.06075)
      (xy -2.541947 -2.092259) (xy -2.625619 -2.143383) (xy -2.697665 -2.212571) (xy -2.7562 -2.298272)
      (xy -2.770148 -2.325511) (xy -2.786586 -2.361878) (xy -2.796894 -2.392418) (xy -2.80246 -2.42455)
      (xy -2.804669 -2.465693) (xy -2.804948 -2.511778) (xy -2.800861 -2.596135) (xy -2.787446 -2.665414)
      (xy -2.762256 -2.726039) (xy -2.722846 -2.784433) (xy -2.684298 -2.828698) (xy -2.612406 -2.894516)
      (xy -2.537313 -2.939947) (xy -2.454562 -2.96715) (xy -2.376928 -2.977424) (xy -2.273043 -2.973429)) (layer ${p.side}.${p.layer}) (width 0.01))
  )`
};