import diffCalculation from './diffCalculation';
import percentageCalculation from '../percentageCalculation';
interface Select {selection:number,passport:null | string;}
const colors:string[] = ['abkhaziaColor','afghanistanColor','albaniaColor','algeriaColor','americanSamoaColor','andorraColor','angolaColor','anguillaColor','antiguaAndBarbudaColor','argentinaColor','armeniaColor','artsakhColor','arubaColor','ascensionIslandColor','australiaColor','austriaColor','azerbaijanColor','bahamasColor','bahrainColor','bangladeshColor','barbadosColor','belarusColor','belgiumColor','belizeColor','beninColor','bermudaColor','bhutanColor','boliviaColor','bonaireColor','bosniaAndHerzegovinaColor','botswanaColor','brazilColor','britishIndianOceanTerritoryColor','britishVirginIslandsColor','bruneiColor','bulgariaColor','burkinaFasoColor','burundiColor','cambodiaColor','cameroonColor','canadaColor','capeVerdeColor','caymanIslandsColor','centralAfricanRepublicColor','chadColor','chileColor','chinaColor','colombiaColor','comorosColor','cookIslandsColor','costaRicaColor','croatiaColor','cubaColor','curacaoColor','cyprusColor','czechRepublicColor','democraticRepublicOfTheCongoColor','denmarkColor','djiboutiColor','dominicaColor','dominicanRepublicColor','eastTimorColor','ecuadorColor','egyptColor','elSalvadorColor','equatorialGuineaColor','eritreaColor','estoniaColor','eswatiniColor','ethiopiaColor','falklandIslandsColor','faroeIslandsColor','fijiColor','finlandColor','franceColor','frenchGuianaColor','frenchPolynesiaColor','gabonColor','gambiaColor','georgiaColor','germanyColor','ghanaColor','gibraltarColor','greeceColor','greenlandColor','grenadaColor','guadeloupeColor','guamColor','guatemalaColor','guineaColor','guineaBissauColor','guyanaColor','haitiColor','hondurasColor','hongKongColor','hungaryColor','icelandColor','indiaColor','indonesiaColor','iranColor','iraqColor','irelandColor','israelColor','italyColor','ivoryCoastColor','jamaicaColor','janMayenColor','japanColor','jordanColor','kazakhstanColor','kenyaColor','kiribatiColor','kosovoColor','kuwaitColor','kyrgyzstanColor','laosColor','latviaColor','lebanonColor','lesothoColor','liberiaColor','libyaColor','liechtensteinColor','lithuaniaColor','luxembourgColor','macaoColor','madagascarColor','malawiColor','malaysiaColor','maldivesColor','maliColor','maltaColor','marshallIslandsColor','martiniqueColor','mauritaniaColor','mauritiusColor','mayotteColor','mexicoColor','micronesiaColor','moldovaColor','monacoColor','mongoliaColor','montenegroColor','montserratColor','moroccoColor','mozambiqueColor','myanmarColor','namibiaColor','nauruColor','nepalColor','netherlandsColor','newCaledoniaColor','newZealandColor','nicaraguaColor','nigerColor','nigeriaColor','niueColor','northernCyprusColor','northernMarianaIslandsColor','northKoreaColor','northMacedoniaColor','norwayColor','omanColor','pakistanColor','palauColor','palestineColor','panamaColor','papuaNewGuineaColor','paraguayColor','peruColor','philippinesColor','pitcairnIslandsColor','polandColor','portugalColor','qatarColor','republicOfTheCongoColor','reunionColor','romaniaColor','russiaColor','rwandaColor','sabaColor','saintBarthelemyColor','saintHelenaColor','saintKittsAndNevisColor','saintLuciaColor','saintMartinColor','saintPierreAndMiquelonColor','saintVincentAndTheGrenadinesColor','samoaColor','sanMarinoColor','saoTomeAndPrincipeColor','saudiArabiaColor','senegalColor','serbiaColor','seychellesColor','sierraLeoneColor','singaporeColor','sintEustatiusColor','sintMaartenColor','slovakiaColor','sloveniaColor','solomonIslandsColor','somaliaColor','somalilandColor','southAfricaColor','southKoreaColor','southOssetiaColor','southSudanColor','spainColor','sriLankaColor','sudanColor','surinameColor','svalbardColor','swedenColor','switzerlandColor','syriaColor','taiwanColor','tajikistanColor','tanzaniaColor','thailandColor','togoColor','tokelauColor','tongaColor','transnistriaColor','trinidadAndTobagoColor','tristanDaCunhaColor','tunisiaColor','turkeyColor','turkmenistanColor','turksAndCaicosColor','tuvaluColor','ugandaColor','ukraineColor','unitedArabEmiratesColor','unitedKingdomColor','unitedStatesColor','unitedStatesVirginIslandsColor','uruguayColor','uzbekistanColor','vanuatuColor','vaticanCityColor','venezuelaColor','vietnamColor','wallisAndFutunaColor','westernSaharaColor','yemenColor','zambiaColor','zimbabweColor']
export default function mainCalculation(country:string, assignedColors:object[], setAssignedColors:Function, select:Select, priorityRef:any, selectArrayRef:any, diffRef:any, setPercentage:Function) {
  fetch('visaPolicy.json')
  .then((res) => res.json())
  .then((data) => {
  setAssignedColors(assignedColors, assignedColors[select.selection] = { abkhaziaColor: data[country].AB, afghanistanColor: data[country].AF, albaniaColor: data[country].AL, algeriaColor: data[country].DZ, americanSamoaColor: data[country].AS, andorraColor: data[country].AD, angolaColor: data[country].AO, anguillaColor: data[country].AI, antiguaAndBarbudaColor: data[country].AG, argentinaColor: data[country].AR, armeniaColor: data[country].AM, artsakhColor: data[country].AK, arubaColor: data[country].AW, ascensionIslandColor: data[country].AC, australiaColor: data[country].AU, austriaColor: data[country].AT, azerbaijanColor: data[country].AZ, bahamasColor: data[country].BS, bahrainColor: data[country].BH, bangladeshColor: data[country].BD, barbadosColor: data[country].BB, belarusColor: data[country].BY, belgiumColor: data[country].BE, belizeColor: data[country].BZ, beninColor: data[country].BJ, bermudaColor: data[country].BM, bhutanColor: data[country].BT, boliviaColor: data[country].BO, bonaireColor: data[country].XB, bosniaAndHerzegovinaColor: data[country].BA, botswanaColor: data[country].BW, brazilColor: data[country].BR, britishIndianOceanTerritoryColor: data[country].IO, britishVirginIslandsColor: data[country].VG, bruneiColor: data[country].BN, bulgariaColor: data[country].BG, burkinaFasoColor: data[country].BF, burundiColor: data[country].BI, cambodiaColor: data[country].KH, cameroonColor: data[country].CM, canadaColor: data[country].CA, capeVerdeColor: data[country].CV, caymanIslandsColor: data[country].KY, centralAfricanRepublicColor: data[country].CF, chadColor: data[country].TD, chileColor: data[country].CL, chinaColor: data[country].CN, colombiaColor: data[country].CO, comorosColor: data[country].KM, cookIslandsColor: data[country].CK, costaRicaColor: data[country].CR, croatiaColor: data[country].HR, cubaColor: data[country].CU, curacaoColor: data[country].CW, cyprusColor: data[country].CY, czechRepublicColor: data[country].CZ, democraticRepublicOfTheCongoColor: data[country].CD, denmarkColor: data[country].DK, djiboutiColor: data[country].DJ, dominicaColor: data[country].DM, dominicanRepublicColor: data[country].DO, eastTimorColor: data[country].TL, ecuadorColor: data[country].EC, egyptColor: data[country].EG, elSalvadorColor: data[country].SV, equatorialGuineaColor: data[country].GQ, eritreaColor: data[country].ER, estoniaColor: data[country].EE, eswatiniColor: data[country].SZ, ethiopiaColor: data[country].ET, falklandIslandsColor: data[country].FK, faroeIslandsColor: data[country].FO, fijiColor: data[country].FJ, finlandColor: data[country].FI, franceColor: data[country].FR, frenchGuianaColor: data[country].GF, frenchPolynesiaColor: data[country].PF, gabonColor: data[country].GA, gambiaColor: data[country].GM, georgiaColor: data[country].GE, germanyColor: data[country].DE, ghanaColor: data[country].GH, gibraltarColor: data[country].GI, greeceColor: data[country].GR, greenlandColor: data[country].GL, grenadaColor: data[country].GD, guadeloupeColor: data[country].GP, guamColor: data[country].GU, guatemalaColor: data[country].GT, guineaColor: data[country].GN, guineaBissauColor: data[country].GW, guyanaColor: data[country].GY, haitiColor: data[country].HT, hondurasColor: data[country].HN, hongKongColor: data[country].HK, hungaryColor: data[country].HU, icelandColor: data[country].IS, indiaColor: data[country].IN, indonesiaColor: data[country].ID, iranColor: data[country].IR, iraqColor: data[country].IQ, irelandColor: data[country].IE, israelColor: data[country].IL, italyColor: data[country].IT, ivoryCoastColor: data[country].CI, jamaicaColor: data[country].JM, janMayenColor: data[country].XM, japanColor: data[country].JP, jordanColor: data[country].JO, kazakhstanColor: data[country].KZ, kenyaColor: data[country].KE, kiribatiColor: data[country].KI, kosovoColor: data[country].XK, kuwaitColor: data[country].KW, kyrgyzstanColor: data[country].KG, laosColor: data[country].LA, latviaColor: data[country].LV, lebanonColor: data[country].LB, lesothoColor: data[country].LS, liberiaColor: data[country].LR, libyaColor: data[country].LY, liechtensteinColor: data[country].LI, lithuaniaColor: data[country].LT, luxembourgColor: data[country].LU, macaoColor: data[country].MO, madagascarColor: data[country].MG, malawiColor: data[country].MW, malaysiaColor: data[country].MY, maldivesColor: data[country].MV, maliColor: data[country].ML, maltaColor: data[country].MT, marshallIslandsColor: data[country].MH, martiniqueColor: data[country].MQ, mauritaniaColor: data[country].MR, mauritiusColor: data[country].MU, mayotteColor: data[country].YT, mexicoColor: data[country].MX, micronesiaColor: data[country].FM, moldovaColor: data[country].MD, monacoColor: data[country].MC, mongoliaColor: data[country].MN, montenegroColor: data[country].ME, montserratColor: data[country].MS, moroccoColor: data[country].MA, mozambiqueColor: data[country].MZ, myanmarColor: data[country].MM, namibiaColor: data[country].NA, nauruColor: data[country].NR, nepalColor: data[country].NP, netherlandsColor: data[country].NL, newCaledoniaColor: data[country].NC, newZealandColor: data[country].NZ, nicaraguaColor: data[country].NI, nigerColor: data[country].NE, nigeriaColor: data[country].NG, niueColor: data[country].NU, northernCyprusColor: data[country].RC, northernMarianaIslandsColor: data[country].MP, northKoreaColor: data[country].KP, northMacedoniaColor: data[country].MK, norwayColor: data[country].NO, omanColor: data[country].OM, pakistanColor: data[country].PK, palauColor: data[country].PW, palestineColor: data[country].PS, panamaColor: data[country].PA, papuaNewGuineaColor: data[country].PG, paraguayColor: data[country].PY, peruColor: data[country].PE, philippinesColor: data[country].PH, pitcairnIslandsColor: data[country].PN, polandColor: data[country].PL, portugalColor: data[country].PT, qatarColor: data[country].QA, republicOfTheCongoColor: data[country].CG, reunionColor: data[country].RE, romaniaColor: data[country].RO, russiaColor: data[country].RU, rwandaColor: data[country].RW, sabaColor: data[country].XS, saintBarthelemyColor: data[country].BL, saintHelenaColor: data[country].SH, saintKittsAndNevisColor: data[country].KN, saintLuciaColor: data[country].LC, saintMartinColor: data[country].MF, saintPierreAndMiquelonColor: data[country].PM, saintVincentAndTheGrenadinesColor: data[country].VC, samoaColor: data[country].WS, sanMarinoColor: data[country].SM, saoTomeAndPrincipeColor: data[country].ST, saudiArabiaColor: data[country].SA, senegalColor: data[country].SN, serbiaColor: data[country].RS, seychellesColor: data[country].SC, sierraLeoneColor: data[country].SL, singaporeColor: data[country].SG, sintEustatiusColor: data[country].XE, sintMaartenColor: data[country].SX, slovakiaColor: data[country].SK, sloveniaColor: data[country].SI, solomonIslandsColor: data[country].SB, somaliaColor: data[country].SO, somalilandColor: data[country].XX, southAfricaColor: data[country].ZA, southKoreaColor: data[country].KR, southOssetiaColor: data[country].XO, southSudanColor: data[country].SS, spainColor: data[country].ES, sriLankaColor: data[country].LK, sudanColor: data[country].SD, surinameColor: data[country].SR, svalbardColor: data[country].XV, swedenColor: data[country].SE, switzerlandColor: data[country].CH, syriaColor: data[country].SY, taiwanColor: data[country].TW, tajikistanColor: data[country].TJ, tanzaniaColor: data[country].TZ, thailandColor: data[country].TH, togoColor: data[country].TG, tokelauColor: data[country].TK, tongaColor: data[country].TO, transnistriaColor: data[country].XT, trinidadAndTobagoColor: data[country].TT, tristanDaCunhaColor: data[country].TX, tunisiaColor: data[country].TN, turkeyColor: data[country].TR, turkmenistanColor: data[country].TM, turksAndCaicosColor: data[country].TC, tuvaluColor: data[country].TV, ugandaColor: data[country].UG, ukraineColor: data[country].UA, unitedArabEmiratesColor: data[country].AE, unitedKingdomColor: data[country].GB, unitedStatesColor: data[country].US, unitedStatesVirginIslandsColor: data[country].VI, uruguayColor: data[country].UY, uzbekistanColor: data[country].UZ, vanuatuColor: data[country].VU, vaticanCityColor: data[country].VA, venezuelaColor: data[country].VE, vietnamColor: data[country].VN, wallisAndFutunaColor: data[country].WF, westernSaharaColor: data[country].EH, yemenColor: data[country].YE, zambiaColor: data[country].ZM, zimbabweColor: data[country].ZW });
  for(let mainColorCalculation = 0; mainColorCalculation < assignedColors.length; mainColorCalculation++) {
  for(let subColorCalculation = 0; subColorCalculation < colors.length; subColorCalculation++) {
  switch(assignedColors[mainColorCalculation][colors[subColorCalculation]]) {
    case 0: priorityRef.current[colors[subColorCalculation]] = 'rgb(255,20,147)'; break; //home country (pink)
    case 1: priorityRef.current[colors[subColorCalculation]] = 'rgb(255,0,0)'; break; //permit required (red)
    case 2: //OECS freedom of movement (orange)
      for(let OECSfom = 0; OECSfom < assignedColors.length; OECSfom++) {
        switch(assignedColors[OECSfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(OECSfom == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(255,145,0)'}}}
    break;
    case 3: //MERCSOUR freedom of movement (dark green)
      for(let MERCSOURfom = 0; MERCSOURfom < assignedColors.length; MERCSOURfom++) {
        switch(assignedColors[MERCSOURfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(MERCSOURfom == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(0,135,93)'}}}
    break;
    case 4: //EU freedom of movement (dark blue)
      for(let EUfom = 0; EUfom < assignedColors.length; EUfom++) {
        switch(assignedColors[EUfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(EUfom == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(0,51,153)'}}}
    break;
    case 5: //GCC freedom of movement (brown)
      for(let GCCfom = 0; GCCfom < assignedColors.length; GCCfom++) {
        switch(assignedColors[GCCfom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
        default: if(GCCfom == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(153,123,61)'}}}
    break;
    case 6: //freedom of movement (light pink)
      for(let fom = 0; fom < assignedColors.length; fom++) {
        switch(assignedColors[fom][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
        default: if(fom == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(255,179,191)'}}}
    break;
    case 7: //visa free (green)
      for(let vf = 0; vf < assignedColors.length; vf++) {
        switch(assignedColors[vf][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
        default: if(vf == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(50,205,50)'}}}
    break;
    case 8: //visa on arrival/evisa (light green)
      for(let voaEv = 0; voaEv < assignedColors.length; voaEv++) {
        switch(assignedColors[voaEv][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
        default: if(voaEv == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(161,224,123)'}}}
    break;
    case 9: //visa on arrival (yellow)
      for(let voa = 0; voa < assignedColors.length; voa++) {
        switch(assignedColors[voa][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
        default: if(voa == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(255,255,92)'}}}
    break;
    case 10: //evisa (blue)
      for(let ev = 0; ev < assignedColors.length; ev++) {
        switch(assignedColors[ev][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
          case 'rgb(255,255,92)': //visa on arrival (yellow)
            for(let voaEvCalc = 0; voaEvCalc < assignedColors.length; voaEvCalc++) {
              switch(assignedColors[voaEvCalc][colors[subColorCalculation]]) {
                case 'rgb(255,20,147)': break; //home country (pink)
                case 'rgb(255,179,191)': break; //freedom of movement (light pink)
                case 'rgb(50,205,50)': break; //visa free (green)
              default: if(voaEvCalc == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(161,224,123)'}}}
        default: if(ev == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(135,206,250)'}}}
    break;
    case 11: //Special permit/police check (purple)
      for(let sppc = 0; sppc < assignedColors.length; sppc++) {
        switch(assignedColors[sppc][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
          case 'rgb(255,255,92)': break; //visa on arrival (yellow)
          case 'rgb(135,206,250)': break; //evisa (blue)
        default: if(sppc == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(118,65,171)'}}}
    break;
    case 12: //simplified visa (light grey)
      for(let sv = 0; sv < assignedColors.length; sv++) {
        switch(assignedColors[sv][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
          case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
          case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
          case 'rgb(255,179,191)': break; //freedom of movement (light pink)
          case 'rgb(50,205,50)': break; //visa free (green)
          case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
          case 'rgb(255,255,92)': break; //visa on arrival (yellow)
          case 'rgb(135,206,250)': break; //evisa (blue)
          case 'rgb(118,65,171)': break; //Special permit/police check (purple)
        default: if(sv == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(200,200,200)'}}}
    break;
    case 13: //confirmation required (black)
      for(let cr = 0; cr < assignedColors.length; cr++) {
        switch(assignedColors[cr][colors[subColorCalculation]]) {
          case 'rgb(255,20,147)': break; //home country (pink)
          case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
          case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
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
            for(let crCalc = 0; crCalc < assignedColors.length; crCalc++) {
              switch(assignedColors[crCalc][colors[subColorCalculation]]) {
                case 'rgb(255,20,147)': break; //home country (pink)
                case 'rgb(255,145,0)': break; //OECS freedom of movement (orange)
                case 'rgb(0,135,93)': break; //MERCSOUR freedom of movement (dark green)
                case 'rgb(0,51,153)': break; //EU freedom of movement (dark blue)
                case 'rgb(153,123,61)': break; //GCC freedom of movement (brown)
                case 'rgb(255,179,191)': break; //freedom of movement (light pink)
                case 'rgb(50,205,50)': break; //visa free (green)
                case 'rgb(161,224,123)': break; //visa on arrival/evisa (light green)
                case 'rgb(255,255,92)': break; //visa on arrival (yellow)
                case 'rgb(135,206,250)': break; //evisa (blue)
                case 'rgb(118,65,171)': break; //Special permit/police check (purple)
                case 'rgb(200,200,200)': break; //simplified visa (light grey)
              default: if(crCalc == assignedColors.length - 1) {priorityRef.current[colors[subColorCalculation]] = 'rgb(150,150,150)'}}}}}
break;}}}
diffCalculation(selectArrayRef, assignedColors, diffRef)
percentageCalculation(priorityRef, setPercentage)
})}