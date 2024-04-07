import { fetchAndCacheJsonData } from '../jsonUtils';
const countries:string[] = ['abkhazia','afghanistan','albania','algeria','americanSamoa','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','aruba','ascensionIsland','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosniaAndHerzegovina','botswana','brazil','britishIndianOceanTerritory','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','cookIslands','costaRica','croatia','cuba','curacao','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','falklandIslands','faroeIslands','fiji','finland','france','frenchGuiana','frenchPolynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','janMayen','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kurdistan','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newCaledonia','newZealand','nicaragua','niger','nigeria','niue','northernCyprus','northernMarianaIslands','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','pitcairnIslands','poland','portugal','qatar','republicOfTheCongo','reunion','romania','russia','rwanda','saba','saintBarthelemy','saintHelena','saintKittsAndNevis','saintLucia','saintMartin','saintPierreAndMiquelon','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','sintEustatius','sintMaarten','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidadAndTobago','tristanDaCunha','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','unitedStatesVirginIslands','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','wallisAndFutuna','westernSahara','yemen','zambia','zimbabwe']
const isoCodesLowercase:string[] = ['ab','af','al','dz','as','ad','ao','ai','ag','ar','am','aw','ac','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','xb','ba','bw','br','io','vg','bn','bg','bf','bi','kh','cm','ca','cv','ky','cf','td','cl','cn','co','km','ck','cr','hr','cu','cw','cy','cz','cd','dk','dj','dm','do','tl','ec','eg','sv','gq','er','ee','sz','et','fk','fo','fj','fi','fr','gf','pf','ga','gm','ge','de','gh','gi','gr','gl','gd','gp','gu','gt','gn','gw','gy','ht','hn','hk','hu','is','in','id','ir','iq','ie','il','it','ci','jm','xm','jp','jo','kz','ke','ki','xk','kx','kw','kg','la','lv','lb','ls','lr','ly','li','lt','lu','mo','mg','mw','my','mv','ml','mt','mh','mq','mr','mu','yt','mx','fm','md','mc','mn','me','ms','ma','mz','mm','na','nr','np','nl','nc','nz','ni','ne','ng','nu','rc','mp','kp','mk','no','om','pk','pw','ps','pa','pg','py','pe','ph','pn','pl','pt','qa','cg','re','ro','ru','rw','xs','bl','sh','kn','lc','mf','pm','vc','ws','sm','st','sa','sn','rs','sc','sl','sg','xe','sx','sk','si','sb','so','xx','za','kr','xo','ss','es','lk','sd','sr','xv','se','ch','sy','tw','tj','tz','th','tg','tk','to','xt','tt','tx','tn','tr','tm','tc','tv','ug','ua','ae','gb','us','vi','uy','uz','vu','va','ve','vn','wf','eh','ye','zm','zw']
const data = await fetchAndCacheJsonData()

export default function individualVisaPolicyCalculation(countryCode:string, priorityRef:any) {
  const ISOcolor:{[key:string]:string} = {ab:'rgb(150,150,150)',af:'rgb(150,150,150)',al:'rgb(150,150,150)',dz:'rgb(150,150,150)',as:'rgb(150,150,150)',ad:'rgb(150,150,150)',ao:'rgb(150,150,150)',ai:'rgb(150,150,150)',ag:'rgb(150,150,150)',ar:'rgb(150,150,150)',am:'rgb(150,150,150)',aw:'rgb(150,150,150)',ac:'rgb(150,150,150)',au:'rgb(150,150,150)',at:'rgb(150,150,150)',az:'rgb(150,150,150)',bs:'rgb(150,150,150)',bh:'rgb(150,150,150)',bd:'rgb(150,150,150)',bb:'rgb(150,150,150)',by:'rgb(150,150,150)',be:'rgb(150,150,150)',bz:'rgb(150,150,150)',bj:'rgb(150,150,150)',bm:'rgb(150,150,150)',bt:'rgb(150,150,150)',bo:'rgb(150,150,150)',xb:'rgb(150,150,150)',ba:'rgb(150,150,150)',bw:'rgb(150,150,150)',br:'rgb(150,150,150)',io:'rgb(150,150,150)',vg:'rgb(150,150,150)',bn:'rgb(150,150,150)',bg:'rgb(150,150,150)',bf:'rgb(150,150,150)',bi:'rgb(150,150,150)',kh:'rgb(150,150,150)',cm:'rgb(150,150,150)',ca:'rgb(150,150,150)',cv:'rgb(150,150,150)',ky:'rgb(150,150,150)',cf:'rgb(150,150,150)',td:'rgb(150,150,150)',cl:'rgb(150,150,150)',cn:'rgb(150,150,150)',co:'rgb(150,150,150)',km:'rgb(150,150,150)',ck:'rgb(150,150,150)',cr:'rgb(150,150,150)',hr:'rgb(150,150,150)',cu:'rgb(150,150,150)',cw:'rgb(150,150,150)',cy:'rgb(150,150,150)',cz:'rgb(150,150,150)',cd:'rgb(150,150,150)',dk:'rgb(150,150,150)',dj:'rgb(150,150,150)',dm:'rgb(150,150,150)',do:'rgb(150,150,150)',tl:'rgb(150,150,150)',ec:'rgb(150,150,150)',eg:'rgb(150,150,150)',sv:'rgb(150,150,150)',gq:'rgb(150,150,150)',er:'rgb(150,150,150)',ee:'rgb(150,150,150)',sz:'rgb(150,150,150)',et:'rgb(150,150,150)',fk:'rgb(150,150,150)',fo:'rgb(150,150,150)',fj:'rgb(150,150,150)',fi:'rgb(150,150,150)',fr:'rgb(150,150,150)',gf:'rgb(150,150,150)',pf:'rgb(150,150,150)',ga:'rgb(150,150,150)',gm:'rgb(150,150,150)',ge:'rgb(150,150,150)',de:'rgb(150,150,150)',gh:'rgb(150,150,150)',gi:'rgb(150,150,150)',gr:'rgb(150,150,150)',gl:'rgb(150,150,150)',gd:'rgb(150,150,150)',gp:'rgb(150,150,150)',gu:'rgb(150,150,150)',gt:'rgb(150,150,150)',gn:'rgb(150,150,150)',gw:'rgb(150,150,150)',gy:'rgb(150,150,150)',ht:'rgb(150,150,150)',hn:'rgb(150,150,150)',hk:'rgb(150,150,150)',hu:'rgb(150,150,150)',is:'rgb(150,150,150)',in:'rgb(150,150,150)',id:'rgb(150,150,150)',ir:'rgb(150,150,150)',iq:'rgb(150,150,150)',ie:'rgb(150,150,150)',il:'rgb(150,150,150)',it:'rgb(150,150,150)',ci:'rgb(150,150,150)',jm:'rgb(150,150,150)',xm:'rgb(150,150,150)',jp:'rgb(150,150,150)',jo:'rgb(150,150,150)',kz:'rgb(150,150,150)',ke:'rgb(150,150,150)',ki:'rgb(150,150,150)',xk:'rgb(150,150,150)',kx:'rgb(150,150,150)',kw:'rgb(150,150,150)',kg:'rgb(150,150,150)',la:'rgb(150,150,150)',lv:'rgb(150,150,150)',lb:'rgb(150,150,150)',ls:'rgb(150,150,150)',lr:'rgb(150,150,150)',ly:'rgb(150,150,150)',li:'rgb(150,150,150)',lt:'rgb(150,150,150)',lu:'rgb(150,150,150)',mo:'rgb(150,150,150)',mg:'rgb(150,150,150)',mw:'rgb(150,150,150)',my:'rgb(150,150,150)',mv:'rgb(150,150,150)',ml:'rgb(150,150,150)',mt:'rgb(150,150,150)',mh:'rgb(150,150,150)',mq:'rgb(150,150,150)',mr:'rgb(150,150,150)',mu:'rgb(150,150,150)',yt:'rgb(150,150,150)',mx:'rgb(150,150,150)',fm:'rgb(150,150,150)',md:'rgb(150,150,150)',mc:'rgb(150,150,150)',mn:'rgb(150,150,150)',me:'rgb(150,150,150)',ms:'rgb(150,150,150)',ma:'rgb(150,150,150)',mz:'rgb(150,150,150)',mm:'rgb(150,150,150)',na:'rgb(150,150,150)',nr:'rgb(150,150,150)',np:'rgb(150,150,150)',nl:'rgb(150,150,150)',nc:'rgb(150,150,150)',nz:'rgb(150,150,150)',ni:'rgb(150,150,150)',ne:'rgb(150,150,150)',ng:'rgb(150,150,150)',nu:'rgb(150,150,150)',rc:'rgb(150,150,150)',mp:'rgb(150,150,150)',kp:'rgb(150,150,150)',mk:'rgb(150,150,150)',no:'rgb(150,150,150)',om:'rgb(150,150,150)',pk:'rgb(150,150,150)',pw:'rgb(150,150,150)',ps:'rgb(150,150,150)',pa:'rgb(150,150,150)',pg:'rgb(150,150,150)',py:'rgb(150,150,150)',pe:'rgb(150,150,150)',ph:'rgb(150,150,150)',pn:'rgb(150,150,150)',pl:'rgb(150,150,150)',pt:'rgb(150,150,150)',qa:'rgb(150,150,150)',cg:'rgb(150,150,150)',re:'rgb(150,150,150)',ro:'rgb(150,150,150)',ru:'rgb(150,150,150)',rw:'rgb(150,150,150)',xs:'rgb(150,150,150)',bl:'rgb(150,150,150)',sh:'rgb(150,150,150)',kn:'rgb(150,150,150)',lc:'rgb(150,150,150)',mf:'rgb(150,150,150)',pm:'rgb(150,150,150)',vc:'rgb(150,150,150)',ws:'rgb(150,150,150)',sm:'rgb(150,150,150)',st:'rgb(150,150,150)',sa:'rgb(150,150,150)',sn:'rgb(150,150,150)',rs:'rgb(150,150,150)',sc:'rgb(150,150,150)',sl:'rgb(150,150,150)',sg:'rgb(150,150,150)',xe:'rgb(150,150,150)',sx:'rgb(150,150,150)',sk:'rgb(150,150,150)',si:'rgb(150,150,150)',sb:'rgb(150,150,150)',so:'rgb(150,150,150)',xx:'rgb(150,150,150)',za:'rgb(150,150,150)',kr:'rgb(150,150,150)',xo:'rgb(150,150,150)',ss:'rgb(150,150,150)',es:'rgb(150,150,150)',lk:'rgb(150,150,150)',sd:'rgb(150,150,150)',sr:'rgb(150,150,150)',xv:'rgb(150,150,150)',se:'rgb(150,150,150)',ch:'rgb(150,150,150)',sy:'rgb(150,150,150)',tw:'rgb(150,150,150)',tj:'rgb(150,150,150)',tz:'rgb(150,150,150)',th:'rgb(150,150,150)',tg:'rgb(150,150,150)',tk:'rgb(150,150,150)',to:'rgb(150,150,150)',xt:'rgb(150,150,150)',tt:'rgb(150,150,150)',tx:'rgb(150,150,150)',tn:'rgb(150,150,150)',tr:'rgb(150,150,150)',tm:'rgb(150,150,150)',tc:'rgb(150,150,150)',tv:'rgb(150,150,150)',ug:'rgb(150,150,150)',ua:'rgb(150,150,150)',ae:'rgb(150,150,150)',gb:'rgb(150,150,150)',us:'rgb(150,150,150)',vi:'rgb(150,150,150)',uy:'rgb(150,150,150)',uz:'rgb(150,150,150)',vu:'rgb(150,150,150)',va:'rgb(150,150,150)',ve:'rgb(150,150,150)',vn:'rgb(150,150,150)',wf:'rgb(150,150,150)',eh:'rgb(150,150,150)',ye:'rgb(150,150,150)',zm:'rgb(150,150,150)',zw:'rgb(150,150,150)'}

  for(let i = 0; i < countries.length; i++) {
    switch(data[countries[i]]?.[countryCode]) {
      case 0: ISOcolor[isoCodesLowercase[i]] = 'rgb(255,20,147)'; break
      case 1: ISOcolor[isoCodesLowercase[i]] = 'rgb(255,0,0)'; break
      case 2: ISOcolor[isoCodesLowercase[i]] = 'rgb(255,145,0)'; break
      case 3: ISOcolor[isoCodesLowercase[i]] = 'rgb(0,135,93)'; break
      case 4: ISOcolor[isoCodesLowercase[i]] = 'rgb(0,51,153)'; break
      case 5: ISOcolor[isoCodesLowercase[i]] = 'rgb(153,123,61)'; break
      case 6: ISOcolor[isoCodesLowercase[i]] = 'rgb(255,179,191)'; break
      case 7: ISOcolor[isoCodesLowercase[i]] = 'rgb(50,205,50)'; break
      case 8: ISOcolor[isoCodesLowercase[i]] = 'rgb(81,205,123)'; break
      case 9: ISOcolor[isoCodesLowercase[i]] = 'rgb(161,224,123)'; break
      case 10: ISOcolor[isoCodesLowercase[i]] = 'rgb(255,255,92)'; break
      case 11: ISOcolor[isoCodesLowercase[i]] = 'rgb(135,206,250)'; break
      case 12: ISOcolor[isoCodesLowercase[i]] = 'rgb(118,65,171)'; break
      case 13: ISOcolor[isoCodesLowercase[i]] = 'rgb(200,200,200)'; break
      case 14: ISOcolor[isoCodesLowercase[i]] = 'rgb(0,0,0)'; break
      case 15: ISOcolor[isoCodesLowercase[i]] = 'rgb(150,150,150)'; break
    }
  }

  switch(countryCode) {
    case 'AS': ISOcolor.as = 'rgb(255,20,147)'; break
    case 'AW': ISOcolor.aw = 'rgb(255,20,147)'; break
    case 'AC': ISOcolor.ac = 'rgb(255,20,147)'; break
    case 'CK': ISOcolor.ck = 'rgb(255,20,147)'; break
    case 'XB': ISOcolor.xb = 'rgb(255,20,147)'; break
    case 'IO': ISOcolor.io = 'rgb(255,20,147)'; break
    case 'CW': ISOcolor.cw = 'rgb(255,20,147)'; break
    case 'FK': ISOcolor.fk = 'rgb(255,20,147)'; break
    case 'FO': ISOcolor.fo = 'rgb(255,20,147)'; break
    case 'PF': ISOcolor.pf = 'rgb(255,20,147)'; break
    case 'GI': ISOcolor.gi = 'rgb(255,20,147)'; break
    case 'GP': ISOcolor.gp = 'rgb(255,20,147)'; break
    case 'GU': ISOcolor.gu = 'rgb(255,20,147)'; break
    case 'XM': ISOcolor.xm = 'rgb(255,20,147)'; break
    case 'KX': ISOcolor.kx = 'rgb(255,20,147)'; break
    case 'MQ': ISOcolor.mq = 'rgb(255,20,147)'; break
    case 'YT': ISOcolor.yt = 'rgb(255,20,147)'; break
    case 'NC': ISOcolor.nc = 'rgb(255,20,147)'; break
    case 'NU': ISOcolor.nu = 'rgb(255,20,147)'; break
    case 'RC': ISOcolor.rc = 'rgb(255,20,147)'; break
    case 'MP': ISOcolor.mp = 'rgb(255,20,147)'; break
    case 'PN': ISOcolor.pn = 'rgb(255,20,147)'; break
    case 'RE': ISOcolor.re = 'rgb(255,20,147)'; break
    case 'XS': ISOcolor.xs = 'rgb(255,20,147)'; break
    case 'BL': ISOcolor.bl = 'rgb(255,20,147)'; break
    case 'MF': ISOcolor.mf = 'rgb(255,20,147)'; break
    case 'PM': ISOcolor.pm = 'rgb(255,20,147)'; break
    case 'XE': ISOcolor.xe = 'rgb(255,20,147)'; break
    case 'SX': ISOcolor.sx = 'rgb(255,20,147)'; break
    case 'XX': ISOcolor.xx = 'rgb(255,20,147)'; break
    case 'XV': ISOcolor.xv = 'rgb(255,20,147)'; break
    case 'TK': ISOcolor.tk = 'rgb(255,20,147)'; break
    case 'XT': ISOcolor.xt = 'rgb(255,20,147)'; break
    case 'TX': ISOcolor.tx = 'rgb(255,20,147)'; break
    case 'VI': ISOcolor.vi = 'rgb(255,20,147)'; break
    case 'WF': ISOcolor.wf = 'rgb(255,20,147)'; break
  }

  ISOcolor.gf = ISOcolor.fr
  ISOcolor.gl = ISOcolor.dk

  priorityRef.current = ISOcolor
}