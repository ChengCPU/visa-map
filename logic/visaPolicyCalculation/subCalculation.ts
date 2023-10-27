import diffCalculation from './diffCalculation'
import percentageCalculation from '../percentageCalculation'
const colors:string[] = ['abkhaziaColor','afghanistanColor','albaniaColor','algeriaColor','americanSamoaColor','andorraColor','angolaColor','anguillaColor','antiguaAndBarbudaColor','argentinaColor','armeniaColor','artsakhColor','arubaColor','ascensionIslandColor','australiaColor','austriaColor','azerbaijanColor','bahamasColor','bahrainColor','bangladeshColor','barbadosColor','belarusColor','belgiumColor','belizeColor','beninColor','bermudaColor','bhutanColor','boliviaColor','bonaireColor','bosniaAndHerzegovinaColor','botswanaColor','brazilColor','britishIndianOceanTerritoryColor','britishVirginIslandsColor','bruneiColor','bulgariaColor','burkinaFasoColor','burundiColor','cambodiaColor','cameroonColor','canadaColor','capeVerdeColor','caymanIslandsColor','centralAfricanRepublicColor','chadColor','chileColor','chinaColor','colombiaColor','comorosColor','cookIslandsColor','costaRicaColor','croatiaColor','cubaColor','curacaoColor','cyprusColor','czechRepublicColor','democraticRepublicOfTheCongoColor','denmarkColor','djiboutiColor','dominicaColor','dominicanRepublicColor','eastTimorColor','ecuadorColor','egyptColor','elSalvadorColor','equatorialGuineaColor','eritreaColor','estoniaColor','eswatiniColor','ethiopiaColor','falklandIslandsColor','faroeIslandsColor','fijiColor','finlandColor','franceColor','frenchGuianaColor','frenchPolynesiaColor','gabonColor','gambiaColor','georgiaColor','germanyColor','ghanaColor','gibraltarColor','greeceColor','greenlandColor','grenadaColor','guadeloupeColor','guamColor','guatemalaColor','guineaColor','guineaBissauColor','guyanaColor','haitiColor','heardIslandAndMcDonaldIslandsColor','hondurasColor','hongKongColor','hungaryColor','icelandColor','indiaColor','indonesiaColor','iranColor','iraqColor','irelandColor','israelColor','italyColor','ivoryCoastColor','jamaicaColor','janMayenColor','japanColor','jordanColor','kazakhstanColor','kenyaColor','kiribatiColor','kosovoColor','kuwaitColor','kyrgyzstanColor','laosColor','latviaColor','lebanonColor','lesothoColor','liberiaColor','libyaColor','liechtensteinColor','lithuaniaColor','luxembourgColor','macaoColor','madagascarColor','malawiColor','malaysiaColor','maldivesColor','maliColor','maltaColor','marshallIslandsColor','martiniqueColor','mauritaniaColor','mauritiusColor','mayotteColor','mexicoColor','micronesiaColor','moldovaColor','monacoColor','mongoliaColor','montenegroColor','montserratColor','moroccoColor','mozambiqueColor','myanmarColor','namibiaColor','nauruColor','nepalColor','netherlandsColor','newCaledoniaColor','newZealandColor','nicaraguaColor','nigerColor','nigeriaColor','niueColor','northernCyprusColor','northernMarianaIslandsColor','northKoreaColor','northMacedoniaColor','norwayColor','omanColor','pakistanColor','palauColor','palestineColor','panamaColor','papuaNewGuineaColor','paraguayColor','peruColor','philippinesColor','pitcairnIslandsColor','polandColor','portugalColor','qatarColor','republicOfTheCongoColor','reunionColor','romaniaColor','russiaColor','rwandaColor','sabaColor','saintBarthelemyColor','saintHelenaColor','saintKittsAndNevisColor','saintLuciaColor','saintMartinColor','saintPierreAndMiquelonColor','saintVincentAndTheGrenadinesColor','samoaColor','sanMarinoColor','saoTomeAndPrincipeColor','saudiArabiaColor','senegalColor','serbiaColor','seychellesColor','sierraLeoneColor','singaporeColor','sintEustatiusColor','sintMaartenColor','slovakiaColor','sloveniaColor','solomonIslandsColor','somaliaColor','somalilandColor','southAfricaColor','southKoreaColor','southOssetiaColor','southSudanColor','spainColor','sriLankaColor','sudanColor','surinameColor','svalbardColor','swedenColor','switzerlandColor','syriaColor','taiwanColor','tajikistanColor','tanzaniaColor','thailandColor','togoColor','tokelauColor','tongaColor','transnistriaColor','trinidadAndTobagoColor','tristanDaCunhaColor','tunisiaColor','turkeyColor','turkmenistanColor','turksAndCaicosColor','tuvaluColor','ugandaColor','ukraineColor','unitedArabEmiratesColor','unitedKingdomColor','unitedStatesColor','unitedStatesVirginIslandsColor','uruguayColor','uzbekistanColor','vanuatuColor','vaticanCityColor','venezuelaColor','vietnamColor','wallisAndFutunaColor','westernSaharaColor','yemenColor','zambiaColor','zimbabweColor']
export default function subCalculation(selectArrayRef:any, assignedColorsRef:any, priorityRef:any, diffRef:any, setPercentage:Function): void {
  fetch('visaPolicy.json')
  .then((res) => res.json())
  .then((data) => {

  const selectArrayRefLength = selectArrayRef.current.length
  const assignedColorsRefLength = assignedColorsRef.current.length

  for(let passports = 0; passports < selectArrayRefLength; passports++) {
  if(selectArrayRef.current[passports] != null) {
  assignedColorsRef.current[passports] = { abkhaziaColor: data[selectArrayRef.current[passports]].AB, afghanistanColor: data[selectArrayRef.current[passports]].AF, albaniaColor: data[selectArrayRef.current[passports]].AL, algeriaColor: data[selectArrayRef.current[passports]].DZ, americanSamoaColor: data[selectArrayRef.current[passports]].AS, andorraColor: data[selectArrayRef.current[passports]].AD, angolaColor: data[selectArrayRef.current[passports]].AO, anguillaColor: data[selectArrayRef.current[passports]].AI, antiguaAndBarbudaColor: data[selectArrayRef.current[passports]].AG, argentinaColor: data[selectArrayRef.current[passports]].AR, armeniaColor: data[selectArrayRef.current[passports]].AM, artsakhColor: data[selectArrayRef.current[passports]].AK, arubaColor: data[selectArrayRef.current[passports]].AW, ascensionIslandColor: data[selectArrayRef.current[passports]].AC, australiaColor: data[selectArrayRef.current[passports]].AU, austriaColor: data[selectArrayRef.current[passports]].AT, azerbaijanColor: data[selectArrayRef.current[passports]].AZ, bahamasColor: data[selectArrayRef.current[passports]].BS, bahrainColor: data[selectArrayRef.current[passports]].BH, bangladeshColor: data[selectArrayRef.current[passports]].BD, barbadosColor: data[selectArrayRef.current[passports]].BB, belarusColor: data[selectArrayRef.current[passports]].BY, belgiumColor: data[selectArrayRef.current[passports]].BE, belizeColor: data[selectArrayRef.current[passports]].BZ, beninColor: data[selectArrayRef.current[passports]].BJ, bermudaColor: data[selectArrayRef.current[passports]].BM, bhutanColor: data[selectArrayRef.current[passports]].BT, boliviaColor: data[selectArrayRef.current[passports]].BO, bonaireColor: data[selectArrayRef.current[passports]].XB, bosniaAndHerzegovinaColor: data[selectArrayRef.current[passports]].BA, botswanaColor: data[selectArrayRef.current[passports]].BW, brazilColor: data[selectArrayRef.current[passports]].BR, britishIndianOceanTerritoryColor: data[selectArrayRef.current[passports]].IO, britishVirginIslandsColor: data[selectArrayRef.current[passports]].VG, bruneiColor: data[selectArrayRef.current[passports]].BN, bulgariaColor: data[selectArrayRef.current[passports]].BG, burkinaFasoColor: data[selectArrayRef.current[passports]].BF, burundiColor: data[selectArrayRef.current[passports]].BI, cambodiaColor: data[selectArrayRef.current[passports]].KH, cameroonColor: data[selectArrayRef.current[passports]].CM, canadaColor: data[selectArrayRef.current[passports]].CA, capeVerdeColor: data[selectArrayRef.current[passports]].CV, caymanIslandsColor: data[selectArrayRef.current[passports]].KY, centralAfricanRepublicColor: data[selectArrayRef.current[passports]].CF, chadColor: data[selectArrayRef.current[passports]].TD, chileColor: data[selectArrayRef.current[passports]].CL, chinaColor: data[selectArrayRef.current[passports]].CN, colombiaColor: data[selectArrayRef.current[passports]].CO, comorosColor: data[selectArrayRef.current[passports]].KM, cookIslandsColor: data[selectArrayRef.current[passports]].CK, costaRicaColor: data[selectArrayRef.current[passports]].CR, croatiaColor: data[selectArrayRef.current[passports]].HR, cubaColor: data[selectArrayRef.current[passports]].CU, curacaoColor: data[selectArrayRef.current[passports]].CW, cyprusColor: data[selectArrayRef.current[passports]].CY, czechRepublicColor: data[selectArrayRef.current[passports]].CZ, democraticRepublicOfTheCongoColor: data[selectArrayRef.current[passports]].CD, denmarkColor: data[selectArrayRef.current[passports]].DK, djiboutiColor: data[selectArrayRef.current[passports]].DJ, dominicaColor: data[selectArrayRef.current[passports]].DM, dominicanRepublicColor: data[selectArrayRef.current[passports]].DO, eastTimorColor: data[selectArrayRef.current[passports]].TL, ecuadorColor: data[selectArrayRef.current[passports]].EC, egyptColor: data[selectArrayRef.current[passports]].EG, elSalvadorColor: data[selectArrayRef.current[passports]].SV, equatorialGuineaColor: data[selectArrayRef.current[passports]].GQ, eritreaColor: data[selectArrayRef.current[passports]].ER, estoniaColor: data[selectArrayRef.current[passports]].EE, eswatiniColor: data[selectArrayRef.current[passports]].SZ, ethiopiaColor: data[selectArrayRef.current[passports]].ET, falklandIslandsColor: data[selectArrayRef.current[passports]].FK, faroeIslandsColor: data[selectArrayRef.current[passports]].FO, fijiColor: data[selectArrayRef.current[passports]].FJ, finlandColor: data[selectArrayRef.current[passports]].FI, franceColor: data[selectArrayRef.current[passports]].FR, frenchGuianaColor: data[selectArrayRef.current[passports]].GF, frenchPolynesiaColor: data[selectArrayRef.current[passports]].PF, gabonColor: data[selectArrayRef.current[passports]].GA, gambiaColor: data[selectArrayRef.current[passports]].GM, georgiaColor: data[selectArrayRef.current[passports]].GE, germanyColor: data[selectArrayRef.current[passports]].DE, ghanaColor: data[selectArrayRef.current[passports]].GH, gibraltarColor: data[selectArrayRef.current[passports]].GI, greeceColor: data[selectArrayRef.current[passports]].GR, greenlandColor: data[selectArrayRef.current[passports]].GL, grenadaColor: data[selectArrayRef.current[passports]].GD, guadeloupeColor: data[selectArrayRef.current[passports]].GP, guamColor: data[selectArrayRef.current[passports]].GU, guatemalaColor: data[selectArrayRef.current[passports]].GT, guineaColor: data[selectArrayRef.current[passports]].GN, guineaBissauColor: data[selectArrayRef.current[passports]].GW, guyanaColor: data[selectArrayRef.current[passports]].GY, haitiColor: data[selectArrayRef.current[passports]].HT, heardIslandAndMcDonaldIslandsColor: data[selectArrayRef.current[passports]].HM, hondurasColor: data[selectArrayRef.current[passports]].HN, hongKongColor: data[selectArrayRef.current[passports]].HK, hungaryColor: data[selectArrayRef.current[passports]].HU, icelandColor: data[selectArrayRef.current[passports]].IS, indiaColor: data[selectArrayRef.current[passports]].IN, indonesiaColor: data[selectArrayRef.current[passports]].ID, iranColor: data[selectArrayRef.current[passports]].IR, iraqColor: data[selectArrayRef.current[passports]].IQ, irelandColor: data[selectArrayRef.current[passports]].IE, israelColor: data[selectArrayRef.current[passports]].IL, italyColor: data[selectArrayRef.current[passports]].IT, ivoryCoastColor: data[selectArrayRef.current[passports]].CI, jamaicaColor: data[selectArrayRef.current[passports]].JM, janMayenColor: data[selectArrayRef.current[passports]].XM, japanColor: data[selectArrayRef.current[passports]].JP, jordanColor: data[selectArrayRef.current[passports]].JO, kazakhstanColor: data[selectArrayRef.current[passports]].KZ, kenyaColor: data[selectArrayRef.current[passports]].KE, kiribatiColor: data[selectArrayRef.current[passports]].KI, kosovoColor: data[selectArrayRef.current[passports]].XK, kuwaitColor: data[selectArrayRef.current[passports]].KW, kyrgyzstanColor: data[selectArrayRef.current[passports]].KG, laosColor: data[selectArrayRef.current[passports]].LA, latviaColor: data[selectArrayRef.current[passports]].LV, lebanonColor: data[selectArrayRef.current[passports]].LB, lesothoColor: data[selectArrayRef.current[passports]].LS, liberiaColor: data[selectArrayRef.current[passports]].LR, libyaColor: data[selectArrayRef.current[passports]].LY, liechtensteinColor: data[selectArrayRef.current[passports]].LI, lithuaniaColor: data[selectArrayRef.current[passports]].LT, luxembourgColor: data[selectArrayRef.current[passports]].LU, macaoColor: data[selectArrayRef.current[passports]].MO, madagascarColor: data[selectArrayRef.current[passports]].MG, malawiColor: data[selectArrayRef.current[passports]].MW, malaysiaColor: data[selectArrayRef.current[passports]].MY, maldivesColor: data[selectArrayRef.current[passports]].MV, maliColor: data[selectArrayRef.current[passports]].ML, maltaColor: data[selectArrayRef.current[passports]].MT, marshallIslandsColor: data[selectArrayRef.current[passports]].MH, martiniqueColor: data[selectArrayRef.current[passports]].MQ, mauritaniaColor: data[selectArrayRef.current[passports]].MR, mauritiusColor: data[selectArrayRef.current[passports]].MU, mayotteColor: data[selectArrayRef.current[passports]].YT, mexicoColor: data[selectArrayRef.current[passports]].MX, micronesiaColor: data[selectArrayRef.current[passports]].FM, moldovaColor: data[selectArrayRef.current[passports]].MD, monacoColor: data[selectArrayRef.current[passports]].MC, mongoliaColor: data[selectArrayRef.current[passports]].MN, montenegroColor: data[selectArrayRef.current[passports]].ME, montserratColor: data[selectArrayRef.current[passports]].MS, moroccoColor: data[selectArrayRef.current[passports]].MA, mozambiqueColor: data[selectArrayRef.current[passports]].MZ, myanmarColor: data[selectArrayRef.current[passports]].MM, namibiaColor: data[selectArrayRef.current[passports]].NA, nauruColor: data[selectArrayRef.current[passports]].NR, nepalColor: data[selectArrayRef.current[passports]].NP, netherlandsColor: data[selectArrayRef.current[passports]].NL, newCaledoniaColor: data[selectArrayRef.current[passports]].NC, newZealandColor: data[selectArrayRef.current[passports]].NZ, nicaraguaColor: data[selectArrayRef.current[passports]].NI, nigerColor: data[selectArrayRef.current[passports]].NE, nigeriaColor: data[selectArrayRef.current[passports]].NG, niueColor: data[selectArrayRef.current[passports]].NU, northernCyprusColor: data[selectArrayRef.current[passports]].RC, northernMarianaIslandsColor: data[selectArrayRef.current[passports]].MP, northKoreaColor: data[selectArrayRef.current[passports]].KP, northMacedoniaColor: data[selectArrayRef.current[passports]].MK, norwayColor: data[selectArrayRef.current[passports]].NO, omanColor: data[selectArrayRef.current[passports]].OM, pakistanColor: data[selectArrayRef.current[passports]].PK, palauColor: data[selectArrayRef.current[passports]].PW, palestineColor: data[selectArrayRef.current[passports]].PS, panamaColor: data[selectArrayRef.current[passports]].PA, papuaNewGuineaColor: data[selectArrayRef.current[passports]].PG, paraguayColor: data[selectArrayRef.current[passports]].PY, peruColor: data[selectArrayRef.current[passports]].PE, philippinesColor: data[selectArrayRef.current[passports]].PH, pitcairnIslandsColor: data[selectArrayRef.current[passports]].PN, polandColor: data[selectArrayRef.current[passports]].PL, portugalColor: data[selectArrayRef.current[passports]].PT, qatarColor: data[selectArrayRef.current[passports]].QA, republicOfTheCongoColor: data[selectArrayRef.current[passports]].CG, reunionColor: data[selectArrayRef.current[passports]].RE, romaniaColor: data[selectArrayRef.current[passports]].RO, russiaColor: data[selectArrayRef.current[passports]].RU, rwandaColor: data[selectArrayRef.current[passports]].RW, sabaColor: data[selectArrayRef.current[passports]].XS, saintBarthelemyColor: data[selectArrayRef.current[passports]].BL, saintHelenaColor: data[selectArrayRef.current[passports]].SH, saintKittsAndNevisColor: data[selectArrayRef.current[passports]].KN, saintLuciaColor: data[selectArrayRef.current[passports]].LC, saintMartinColor: data[selectArrayRef.current[passports]].MF, saintPierreAndMiquelonColor: data[selectArrayRef.current[passports]].PM, saintVincentAndTheGrenadinesColor: data[selectArrayRef.current[passports]].VC, samoaColor: data[selectArrayRef.current[passports]].WS, sanMarinoColor: data[selectArrayRef.current[passports]].SM, saoTomeAndPrincipeColor: data[selectArrayRef.current[passports]].ST, saudiArabiaColor: data[selectArrayRef.current[passports]].SA, senegalColor: data[selectArrayRef.current[passports]].SN, serbiaColor: data[selectArrayRef.current[passports]].RS, seychellesColor: data[selectArrayRef.current[passports]].SC, sierraLeoneColor: data[selectArrayRef.current[passports]].SL, singaporeColor: data[selectArrayRef.current[passports]].SG, sintEustatiusColor: data[selectArrayRef.current[passports]].XE, sintMaartenColor: data[selectArrayRef.current[passports]].SX, slovakiaColor: data[selectArrayRef.current[passports]].SK, sloveniaColor: data[selectArrayRef.current[passports]].SI, solomonIslandsColor: data[selectArrayRef.current[passports]].SB, somaliaColor: data[selectArrayRef.current[passports]].SO, somalilandColor: data[selectArrayRef.current[passports]].XX, southAfricaColor: data[selectArrayRef.current[passports]].ZA, southKoreaColor: data[selectArrayRef.current[passports]].KR, southOssetiaColor: data[selectArrayRef.current[passports]].XO, southSudanColor: data[selectArrayRef.current[passports]].SS, spainColor: data[selectArrayRef.current[passports]].ES, sriLankaColor: data[selectArrayRef.current[passports]].LK, sudanColor: data[selectArrayRef.current[passports]].SD, surinameColor: data[selectArrayRef.current[passports]].SR, svalbardColor: data[selectArrayRef.current[passports]].XV, swedenColor: data[selectArrayRef.current[passports]].SE, switzerlandColor: data[selectArrayRef.current[passports]].CH, syriaColor: data[selectArrayRef.current[passports]].SY, taiwanColor: data[selectArrayRef.current[passports]].TW, tajikistanColor: data[selectArrayRef.current[passports]].TJ, tanzaniaColor: data[selectArrayRef.current[passports]].TZ, thailandColor: data[selectArrayRef.current[passports]].TH, togoColor: data[selectArrayRef.current[passports]].TG, tokelauColor: data[selectArrayRef.current[passports]].TK, tongaColor: data[selectArrayRef.current[passports]].TO, transnistriaColor: data[selectArrayRef.current[passports]].XT, trinidadAndTobagoColor: data[selectArrayRef.current[passports]].TT, tristanDaCunhaColor: data[selectArrayRef.current[passports]].TX, tunisiaColor: data[selectArrayRef.current[passports]].TN, turkeyColor: data[selectArrayRef.current[passports]].TR, turkmenistanColor: data[selectArrayRef.current[passports]].TM, turksAndCaicosColor: data[selectArrayRef.current[passports]].TC, tuvaluColor: data[selectArrayRef.current[passports]].TV, ugandaColor: data[selectArrayRef.current[passports]].UG, ukraineColor: data[selectArrayRef.current[passports]].UA, unitedArabEmiratesColor: data[selectArrayRef.current[passports]].AE, unitedKingdomColor: data[selectArrayRef.current[passports]].GB, unitedStatesColor: data[selectArrayRef.current[passports]].US, unitedStatesVirginIslandsColor: data[selectArrayRef.current[passports]].VI, uruguayColor: data[selectArrayRef.current[passports]].UY, uzbekistanColor: data[selectArrayRef.current[passports]].UZ, vanuatuColor: data[selectArrayRef.current[passports]].VU, vaticanCityColor: data[selectArrayRef.current[passports]].VA, venezuelaColor: data[selectArrayRef.current[passports]].VE, vietnamColor: data[selectArrayRef.current[passports]].VN, wallisAndFutunaColor: data[selectArrayRef.current[passports]].WF, westernSaharaColor: data[selectArrayRef.current[passports]].EH, yemenColor: data[selectArrayRef.current[passports]].YE, zambiaColor: data[selectArrayRef.current[passports]].ZM, zimbabweColor: data[selectArrayRef.current[passports]].ZW };
  for(let mainColorCalculation = 0; mainColorCalculation < assignedColorsRefLength; mainColorCalculation++) {
  for(let subColorCalculation = 0; subColorCalculation < colors.length; subColorCalculation++) {
    switch(assignedColorsRef.current[mainColorCalculation][colors[subColorCalculation]]) {
    case 0: priorityRef.current[colors[subColorCalculation]] = 'rgb(255,20,147)'; break; //home country (pink)
    case 1: priorityRef.current[colors[subColorCalculation]] = 'rgb(255,0,0)'; break; //permit required (red)
    case 2: //OECS freedom of movement
      for(let OECSfom = 0; OECSfom < assignedColorsRefLength; OECSfom++) {
        switch(assignedColorsRef.current[OECSfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(OECSfom == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(255,145,0)'}}}
    break;
    case 3: //MERCOSUR freedom of movement ()
      for(let MERCOSURfom = 0; MERCOSURfom < assignedColorsRefLength; MERCOSURfom++) {
        switch(assignedColorsRef.current[MERCOSURfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(MERCOSURfom == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(0,135,93)'}}}
    break;
    case 4: //EU freedom of movement (dark blue)
      for(let EUfom = 0; EUfom < assignedColorsRefLength; EUfom++) {
        switch(assignedColorsRef.current[EUfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(EUfom == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(0,51,153)'}}}
    break;
    case 5: //GCC freedom of movement (brown)
      for(let GCCfom = 0; GCCfom < assignedColorsRefLength; GCCfom++) {
        switch(assignedColorsRef.current[GCCfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(GCCfom == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(153,123,61)'}}}
    break;
    case 6: //freedom of movement (light pink)
      for(let fom = 0; fom < assignedColorsRefLength; fom++) {
        switch(assignedColorsRef.current[fom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
        default: if(fom == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(255,179,191)'}}}
    break;
    case 7: //visa free (green)
      for(let vf = 0; vf < assignedColorsRefLength; vf++) {
        switch(assignedColorsRef.current[vf][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
        default: if(vf == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(50,205,50)'}}}
    break;
    case 8: //visa on arrival/evisa (light green)
      for(let voaEv = 0; voaEv < assignedColorsRefLength; voaEv++) {
        switch(assignedColorsRef.current[voaEv][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
        default: if(voaEv == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(161,224,123)'}}}
    break;
    case 9: //visa on arrival (yellow)
      for(let voa = 0; voa < assignedColorsRefLength; voa++) {
        switch(assignedColorsRef.current[voa][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
        default: if(voa == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(255,255,92)'}}}
    break;
    case 10: //evisa (blue)
      for(let ev = 0; ev < assignedColorsRefLength; ev++) {
        switch(assignedColorsRef.current[ev][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
          case 'rgb(255,255,92)': //visa on arrival (yellow)
            for(let voaEvCalc = 0; voaEvCalc < assignedColorsRefLength; voaEvCalc++) {
              switch(assignedColorsRef.current[voaEvCalc][colors[subColorCalculation]]) {
                case 'rgb(255,20,147)': break; //home country (pink)
                case 'rgb(255,145,0)': break; //OECS freedom of movement
                case 'rgb(255,179,191)': break; //freedom of movement (light pink)
                case 'rgb(50,205,50)': break; //visa free (green)
              default: if(voaEvCalc == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(161,224,123)'}}}
          default: if(ev == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(135,206,250)'}}}
    break;
    case 11: //Special permit/police check (purple)
      for(let sppc = 0; sppc < assignedColorsRefLength; sppc++) {
        switch(assignedColorsRef.current[sppc][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
          case 'rgb(255,255,92)': break; //visa on arrival (yellow)
          case 'rgb(135,206,250)': break; //evisa (blue)
        default: if(sppc == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(118,65,171)'}}}
    break;
    case 12: //simplified visa (light grey)
      for(let sv = 0; sv < assignedColorsRefLength; sv++) {
        switch(assignedColorsRef.current[sv][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
          case 'rgb(255,255,92)': break; //visa on arrival (yellow)
          case 'rgb(135,206,250)': break; //evisa (blue)
          case 'rgb(118,65,171)': break; //Special permit/police check (purple)
        default: if(sv == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(200,200,200)'}}}
    break;
    case 13: //confirmation required (black)
    for(let cr = 0; cr < assignedColorsRefLength; cr++) {
      switch(assignedColorsRef.current[cr][colors[subColorCalculation]]) {
        case 'rgb(255,20,147)': break; //home country (pink)
        case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
        case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
        case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
        case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
        case 'rgb(255,179,191)': break; //freedom of movement (light pink)
        case 'rgb(50,205,50)': break; //visa free (green)
        case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
        case 'rgb(255,255,92)': break; //visa on arrival (yellow)
        case 'rgb(135,206,250)': break; //evisa (blue)
        case 'rgb(118,65,171)': break; //Special permit/police check (purple)
        case 'rgb(200,200,200)': break; //simplified visa (light grey)
        case 'rgb(149,150,150)': priorityRef.current[colors[subColorCalculation]] = 'rgb(0,0,0)'; break;
        case 14:
          for(let crCalc = 0; crCalc < assignedColorsRefLength; crCalc++) {
            switch(assignedColorsRef.current[crCalc][colors[subColorCalculation]]) {
              case 'rgb(255,20,147)': break; //home country (pink)
              case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
              case 'rgb(0,135,93)': break; //MERCOSUR freedom of movement (dark green)
              case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
              case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
              case 'rgb(255,179,191)': break; //freedom of movement (light pink)
              case 'rgb(50,205,50)': break; //visa free (green)
              case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
              case 'rgb(255,255,92)': break; //visa on arrival (yellow)
              case 'rgb(135,206,250)': break; //evisa (blue)
              case 'rgb(118,65,171)': break; //Special permit/police check (purple)
              case 'rgb(200,200,200)': break; //simplified visa (light grey)
            default: if(crCalc == assignedColorsRefLength - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(150,150,150)'}}}}}
break;}}}}}
diffCalculation(selectArrayRef, assignedColorsRef, diffRef)
percentageCalculation(priorityRef, setPercentage)
})}