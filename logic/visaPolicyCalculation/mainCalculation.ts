import { fetchAndCacheJsonData } from '../jsonUtils';
import diffCalculation from './diffCalculation'
import percentageCalculation from '../percentageCalculation'
const colors:string[] = ['abkhaziaColor','afghanistanColor','albaniaColor','algeriaColor','americanSamoaColor','andorraColor','angolaColor','anguillaColor','antiguaAndBarbudaColor','argentinaColor','armeniaColor','arubaColor','ascensionIslandColor','australiaColor','austriaColor','azerbaijanColor','bahamasColor','bahrainColor','bangladeshColor','barbadosColor','belarusColor','belgiumColor','belizeColor','beninColor','bermudaColor','bhutanColor','boliviaColor','bonaireColor','bosniaAndHerzegovinaColor','botswanaColor','brazilColor','britishIndianOceanTerritoryColor','britishVirginIslandsColor','bruneiColor','bulgariaColor','burkinaFasoColor','burundiColor','cambodiaColor','cameroonColor','canadaColor','capeVerdeColor','caymanIslandsColor','centralAfricanRepublicColor','chadColor','chileColor','chinaColor','colombiaColor','comorosColor','cookIslandsColor','costaRicaColor','croatiaColor','cubaColor','curacaoColor','cyprusColor','czechRepublicColor','democraticRepublicOfTheCongoColor','denmarkColor','djiboutiColor','dominicaColor','dominicanRepublicColor','eastTimorColor','ecuadorColor','egyptColor','elSalvadorColor','equatorialGuineaColor','eritreaColor','estoniaColor','eswatiniColor','ethiopiaColor','falklandIslandsColor','faroeIslandsColor','fijiColor','finlandColor','franceColor','frenchGuianaColor','frenchPolynesiaColor','gabonColor','gambiaColor','georgiaColor','germanyColor','ghanaColor','gibraltarColor','greeceColor','greenlandColor','grenadaColor','guadeloupeColor','guamColor','guatemalaColor','guineaColor','guineaBissauColor','guyanaColor','haitiColor','hondurasColor','hongKongColor','hungaryColor','icelandColor','indiaColor','indonesiaColor','iranColor','iraqColor','irelandColor','israelColor','italyColor','ivoryCoastColor','jamaicaColor','janMayenColor','japanColor','jordanColor','kazakhstanColor','kenyaColor','kiribatiColor','kosovoColor','kurdistanColor','kuwaitColor','kyrgyzstanColor','laosColor','latviaColor','lebanonColor','lesothoColor','liberiaColor','libyaColor','liechtensteinColor','lithuaniaColor','luxembourgColor','macaoColor','madagascarColor','malawiColor','malaysiaColor','maldivesColor','maliColor','maltaColor','marshallIslandsColor','martiniqueColor','mauritaniaColor','mauritiusColor','mayotteColor','mexicoColor','micronesiaColor','moldovaColor','monacoColor','mongoliaColor','montenegroColor','montserratColor','moroccoColor','mozambiqueColor','myanmarColor','namibiaColor','nauruColor','nepalColor','netherlandsColor','newCaledoniaColor','newZealandColor','nicaraguaColor','nigerColor','nigeriaColor','niueColor','northernCyprusColor','northernMarianaIslandsColor','northKoreaColor','northMacedoniaColor','norwayColor','omanColor','pakistanColor','palauColor','palestineColor','panamaColor','papuaNewGuineaColor','paraguayColor','peruColor','philippinesColor','pitcairnIslandsColor','polandColor','portugalColor','qatarColor','republicOfTheCongoColor','reunionColor','romaniaColor','russiaColor','rwandaColor','sabaColor','saintBarthelemyColor','saintHelenaColor','saintKittsAndNevisColor','saintLuciaColor','saintMartinColor','saintPierreAndMiquelonColor','saintVincentAndTheGrenadinesColor','samoaColor','sanMarinoColor','saoTomeAndPrincipeColor','saudiArabiaColor','senegalColor','serbiaColor','seychellesColor','sierraLeoneColor','singaporeColor','sintEustatiusColor','sintMaartenColor','slovakiaColor','sloveniaColor','solomonIslandsColor','somaliaColor','somalilandColor','southAfricaColor','southKoreaColor','southOssetiaColor','southSudanColor','spainColor','sriLankaColor','sudanColor','surinameColor','svalbardColor','swedenColor','switzerlandColor','syriaColor','taiwanColor','tajikistanColor','tanzaniaColor','thailandColor','togoColor','tokelauColor','tongaColor','transnistriaColor','trinidadAndTobagoColor','tristanDaCunhaColor','tunisiaColor','turkeyColor','turkmenistanColor','turksAndCaicosColor','tuvaluColor','ugandaColor','ukraineColor','unitedArabEmiratesColor','unitedKingdomColor','unitedStatesColor','unitedStatesVirginIslandsColor','uruguayColor','uzbekistanColor','vanuatuColor','vaticanCityColor','venezuelaColor','vietnamColor','wallisAndFutunaColor','westernSaharaColor','yemenColor','zambiaColor','zimbabweColor']
const data = await fetchAndCacheJsonData()

export default function mainCalculation(enableDiffCalculation:boolean, country:string, assignedColorsRef:any, selectRef:any, priorityRef:any, selectArrayRef:any, diffRef:any, setPercentage:Function, ESTAbanRef:any) {
  if(enableDiffCalculation == true) { assignedColorsRef.current.push({ abkhaziaColor: 14, afghanistanColor: 14, albaniaColor: 14, algeriaColor: 14, americanSamoaColor: 14, andorraColor: 14, angolaColor: 14, anguillaColor: 14, antiguaAndBarbudaColor: 14, argentinaColor: 14, armeniaColor: 14, arubaColor: 14, ascensionIslandColor: 14, australiaColor: 14, austriaColor: 14, azerbaijanColor: 14, bahamasColor: 14, bahrainColor: 14, bangladeshColor: 14, barbadosColor: 14, belarusColor: 14, belgiumColor: 14, belizeColor: 14, beninColor: 14, bermudaColor: 14, bhutanColor: 14, boliviaColor: 14, bonaireColor: 14, bosniaAndHerzegovinaColor: 14, botswanaColor: 14, brazilColor: 14, britishIndianOceanTerritoryColor: 14, britishVirginIslandsColor: 14, bruneiColor: 14, bulgariaColor: 14, burkinaFasoColor: 14, burundiColor: 14, cambodiaColor: 14, cameroonColor: 14, canadaColor: 14, capeVerdeColor: 14, caymanIslandsColor: 14, centralAfricanRepublicColor: 14, chadColor: 14, chileColor: 14, chinaColor: 14, colombiaColor: 14, comorosColor: 14, cookIslandsColor: 14, costaRicaColor: 14, croatiaColor: 14, cubaColor: 14, curacaoColor: 14, cyprusColor: 14, czechRepublicColor: 14, democraticRepublicOfTheCongoColor: 14, denmarkColor: 14, djiboutiColor: 14, dominicaColor: 14, dominicanRepublicColor: 14, eastTimorColor: 14, ecuadorColor: 14, egyptColor: 14, elSalvadorColor: 14, equatorialGuineaColor: 14, eritreaColor: 14, estoniaColor: 14, eswatiniColor: 14, ethiopiaColor: 14, falklandIslandsColor: 14, faroeIslandsColor: 14, fijiColor: 14, finlandColor: 14, franceColor: 14, frenchGuianaColor: 14, frenchPolynesiaColor: 14, gabonColor: 14, gambiaColor: 14, georgiaColor: 14, germanyColor: 14, ghanaColor: 14, gibraltarColor: 14, greeceColor: 14, greenlandColor: 14, grenadaColor: 14, guadeloupeColor: 14, guamColor: 14, guatemalaColor: 14, guineaColor: 14, guineaBissauColor: 14, guyanaColor: 14, haitiColor: 14, hondurasColor: 14, hongKongColor: 14, hungaryColor: 14, icelandColor: 14, indiaColor: 14, indonesiaColor: 14, iranColor: 14, iraqColor: 14, irelandColor: 14, kosovoColor: 14, kurdistanColor: 14, israelColor: 14, italyColor: 14, ivoryCoastColor: 14, jamaicaColor: 14, janMayenColor: 14, japanColor: 14, jordanColor: 14, kazakhstanColor: 14, kenyaColor: 14, kiribatiColor: 14, kuwaitColor: 14, kyrgyzstanColor: 14, laosColor: 14, latviaColor: 14, lebanonColor: 14, lesothoColor: 14, liberiaColor: 14, libyaColor: 14, liechtensteinColor: 14, lithuaniaColor: 14, luxembourgColor: 14, macaoColor: 14, madagascarColor: 14, malawiColor: 14, malaysiaColor: 14, maldivesColor: 14, maliColor: 14, maltaColor: 14, marshallIslandsColor: 14, martiniqueColor: 14, mauritaniaColor: 14, mauritiusColor: 14, mayotteColor: 14, mexicoColor: 14, micronesiaColor: 14, moldovaColor: 14, monacoColor: 14, mongoliaColor: 14, montenegroColor: 14, montserratColor: 14, moroccoColor: 14, mozambiqueColor: 14, myanmarColor: 14, namibiaColor: 14, nauruColor: 14, nepalColor: 14, netherlandsColor: 14, newCaledoniaColor: 14, newZealandColor: 14, nicaraguaColor: 14, nigerColor: 14, nigeriaColor: 14, niueColor: 14, northernCyprusColor: 14, northernMarianaIslandsColor: 14, northKoreaColor: 14, northMacedoniaColor: 14, norwayColor: 14, omanColor: 14, pakistanColor: 14, palauColor: 14, palestineColor: 14, panamaColor: 14, papuaNewGuineaColor: 14, paraguayColor: 14, peruColor: 14, philippinesColor: 14, pitcairnIslandsColor: 14, polandColor: 14, portugalColor: 14, qatarColor: 14, republicOfTheCongoColor: 14, reunionColor: 14, romaniaColor: 14, russiaColor: 14, rwandaColor: 14, sabaColor: 14, saintBarthelemyColor: 14, saintHelenaColor: 14, saintKittsAndNevisColor: 14, saintLuciaColor: 14, saintMartinColor: 14, saintPierreAndMiquelonColor: 14, saintVincentAndTheGrenadinesColor: 14, samoaColor: 14, sanMarinoColor: 14, saoTomeAndPrincipeColor: 14, saudiArabiaColor: 14, senegalColor: 14, serbiaColor: 14, seychellesColor: 14, sierraLeoneColor: 14, singaporeColor: 14, sintEustatiusColor: 14, sintMaartenColor: 14, slovakiaColor: 14, sloveniaColor: 14, solomonIslandsColor: 14, somaliaColor: 14, somalilandColor: 14, southAfricaColor: 14, southKoreaColor: 14, southOssetiaColor: 14, southSudanColor: 14, spainColor: 14, sriLankaColor: 14, sudanColor: 14, surinameColor: 14, svalbardColor: 14, swedenColor: 14, switzerlandColor: 14, syriaColor: 14, taiwanColor: 14, tajikistanColor: 14, tanzaniaColor: 14, thailandColor: 14, togoColor: 14, tokelauColor: 14, tongaColor: 14, transnistriaColor: 14, trinidadAndTobagoColor: 14, tristanDaCunhaColor:14, tunisiaColor: 14, turkeyColor: 14, turkmenistanColor: 14, turksAndCaicosColor: 14, tuvaluColor: 14, ugandaColor: 14, ukraineColor: 14, unitedArabEmiratesColor: 14, unitedKingdomColor: 14, unitedStatesColor: 14, unitedStatesVirginIslandsColor: 14, uruguayColor: 14, uzbekistanColor: 14, vanuatuColor: 14, vaticanCityColor: 14, venezuelaColor: 14, vietnamColor: 14, wallisAndFutunaColor: 14, westernSaharaColor: 14, yemenColor: 14, zambiaColor: 14, zimbabweColor: 14 }) }
  assignedColorsRef.current[selectRef.current.selection] = { abkhaziaColor: data[country].AB, afghanistanColor: data[country].AF, albaniaColor: data[country].AL, algeriaColor: data[country].DZ, americanSamoaColor: data[country].AS, andorraColor: data[country].AD, angolaColor: data[country].AO, anguillaColor: data[country].AI, antiguaAndBarbudaColor: data[country].AG, argentinaColor: data[country].AR, armeniaColor: data[country].AM, arubaColor: data[country].AW, ascensionIslandColor: data[country].AC, australiaColor: data[country].AU, austriaColor: data[country].AT, azerbaijanColor: data[country].AZ, bahamasColor: data[country].BS, bahrainColor: data[country].BH, bangladeshColor: data[country].BD, barbadosColor: data[country].BB, belarusColor: data[country].BY, belgiumColor: data[country].BE, belizeColor: data[country].BZ, beninColor: data[country].BJ, bermudaColor: data[country].BM, bhutanColor: data[country].BT, boliviaColor: data[country].BO, bonaireColor: data[country].XB, bosniaAndHerzegovinaColor: data[country].BA, botswanaColor: data[country].BW, brazilColor: data[country].BR, britishIndianOceanTerritoryColor: data[country].IO, britishVirginIslandsColor: data[country].VG, bruneiColor: data[country].BN, bulgariaColor: data[country].BG, burkinaFasoColor: data[country].BF, burundiColor: data[country].BI, cambodiaColor: data[country].KH, cameroonColor: data[country].CM, canadaColor: data[country].CA, capeVerdeColor: data[country].CV, caymanIslandsColor: data[country].KY, centralAfricanRepublicColor: data[country].CF, chadColor: data[country].TD, chileColor: data[country].CL, chinaColor: data[country].CN, colombiaColor: data[country].CO, comorosColor: data[country].KM, cookIslandsColor: data[country].CK, costaRicaColor: data[country].CR, croatiaColor: data[country].HR, cubaColor: data[country].CU, curacaoColor: data[country].CW, cyprusColor: data[country].CY, czechRepublicColor: data[country].CZ, democraticRepublicOfTheCongoColor: data[country].CD, denmarkColor: data[country].DK, djiboutiColor: data[country].DJ, dominicaColor: data[country].DM, dominicanRepublicColor: data[country].DO, eastTimorColor: data[country].TL, ecuadorColor: data[country].EC, egyptColor: data[country].EG, elSalvadorColor: data[country].SV, equatorialGuineaColor: data[country].GQ, eritreaColor: data[country].ER, estoniaColor: data[country].EE, eswatiniColor: data[country].SZ, ethiopiaColor: data[country].ET, falklandIslandsColor: data[country].FK, faroeIslandsColor: data[country].FO, fijiColor: data[country].FJ, finlandColor: data[country].FI, franceColor: data[country].FR, frenchGuianaColor: data[country].GF, frenchPolynesiaColor: data[country].PF, gabonColor: data[country].GA, gambiaColor: data[country].GM, georgiaColor: data[country].GE, germanyColor: data[country].DE, ghanaColor: data[country].GH, gibraltarColor: data[country].GI, greeceColor: data[country].GR, greenlandColor: data[country].GL, grenadaColor: data[country].GD, guadeloupeColor: data[country].GP, guamColor: data[country].GU, guatemalaColor: data[country].GT, guineaColor: data[country].GN, guineaBissauColor: data[country].GW, guyanaColor: data[country].GY, haitiColor: data[country].HT, hondurasColor: data[country].HN, hongKongColor: data[country].HK, hungaryColor: data[country].HU, icelandColor: data[country].IS, indiaColor: data[country].IN, indonesiaColor: data[country].ID, iranColor: data[country].IR, iraqColor: data[country].IQ, irelandColor: data[country].IE, israelColor: data[country].IL, italyColor: data[country].IT, ivoryCoastColor: data[country].CI, jamaicaColor: data[country].JM, janMayenColor: data[country].XM, japanColor: data[country].JP, jordanColor: data[country].JO, kazakhstanColor: data[country].KZ, kenyaColor: data[country].KE, kiribatiColor: data[country].KI, kosovoColor: data[country].XK, kurdistanColor: data[country].KX, kuwaitColor: data[country].KW, kyrgyzstanColor: data[country].KG, laosColor: data[country].LA, latviaColor: data[country].LV, lebanonColor: data[country].LB, lesothoColor: data[country].LS, liberiaColor: data[country].LR, libyaColor: data[country].LY, liechtensteinColor: data[country].LI, lithuaniaColor: data[country].LT, luxembourgColor: data[country].LU, macaoColor: data[country].MO, madagascarColor: data[country].MG, malawiColor: data[country].MW, malaysiaColor: data[country].MY, maldivesColor: data[country].MV, maliColor: data[country].ML, maltaColor: data[country].MT, marshallIslandsColor: data[country].MH, martiniqueColor: data[country].MQ, mauritaniaColor: data[country].MR, mauritiusColor: data[country].MU, mayotteColor: data[country].YT, mexicoColor: data[country].MX, micronesiaColor: data[country].FM, moldovaColor: data[country].MD, monacoColor: data[country].MC, mongoliaColor: data[country].MN, montenegroColor: data[country].ME, montserratColor: data[country].MS, moroccoColor: data[country].MA, mozambiqueColor: data[country].MZ, myanmarColor: data[country].MM, namibiaColor: data[country].NA, nauruColor: data[country].NR, nepalColor: data[country].NP, netherlandsColor: data[country].NL, newCaledoniaColor: data[country].NC, newZealandColor: data[country].NZ, nicaraguaColor: data[country].NI, nigerColor: data[country].NE, nigeriaColor: data[country].NG, niueColor: data[country].NU, northernCyprusColor: data[country].RC, northernMarianaIslandsColor: data[country].MP, northKoreaColor: data[country].KP, northMacedoniaColor: data[country].MK, norwayColor: data[country].NO, omanColor: data[country].OM, pakistanColor: data[country].PK, palauColor: data[country].PW, palestineColor: data[country].PS, panamaColor: data[country].PA, papuaNewGuineaColor: data[country].PG, paraguayColor: data[country].PY, peruColor: data[country].PE, philippinesColor: data[country].PH, pitcairnIslandsColor: data[country].PN, polandColor: data[country].PL, portugalColor: data[country].PT, qatarColor: data[country].QA, republicOfTheCongoColor: data[country].CG, reunionColor: data[country].RE, romaniaColor: data[country].RO, russiaColor: data[country].RU, rwandaColor: data[country].RW, sabaColor: data[country].XS, saintBarthelemyColor: data[country].BL, saintHelenaColor: data[country].SH, saintKittsAndNevisColor: data[country].KN, saintLuciaColor: data[country].LC, saintMartinColor: data[country].MF, saintPierreAndMiquelonColor: data[country].PM, saintVincentAndTheGrenadinesColor: data[country].VC, samoaColor: data[country].WS, sanMarinoColor: data[country].SM, saoTomeAndPrincipeColor: data[country].ST, saudiArabiaColor: data[country].SA, senegalColor: data[country].SN, serbiaColor: data[country].RS, seychellesColor: data[country].SC, sierraLeoneColor: data[country].SL, singaporeColor: data[country].SG, sintEustatiusColor: data[country].XE, sintMaartenColor: data[country].SX, slovakiaColor: data[country].SK, sloveniaColor: data[country].SI, solomonIslandsColor: data[country].SB, somaliaColor: data[country].SO, somalilandColor: data[country].XX, southAfricaColor: data[country].ZA, southKoreaColor: data[country].KR, southOssetiaColor: data[country].XO, southSudanColor: data[country].SS, spainColor: data[country].ES, sriLankaColor: data[country].LK, sudanColor: data[country].SD, surinameColor: data[country].SR, svalbardColor: data[country].XV, swedenColor: data[country].SE, switzerlandColor: data[country].CH, syriaColor: data[country].SY, taiwanColor: data[country].TW, tajikistanColor: data[country].TJ, tanzaniaColor: data[country].TZ, thailandColor: data[country].TH, togoColor: data[country].TG, tokelauColor: data[country].TK, tongaColor: data[country].TO, transnistriaColor: data[country].XT, trinidadAndTobagoColor: data[country].TT, tristanDaCunhaColor: data[country].TX, tunisiaColor: data[country].TN, turkeyColor: data[country].TR, turkmenistanColor: data[country].TM, turksAndCaicosColor: data[country].TC, tuvaluColor: data[country].TV, ugandaColor: data[country].UG, ukraineColor: data[country].UA, unitedArabEmiratesColor: data[country].AE, unitedKingdomColor: data[country].GB, unitedStatesColor: data[country].US, unitedStatesVirginIslandsColor: data[country].VI, uruguayColor: data[country].UY, uzbekistanColor: data[country].UZ, vanuatuColor: data[country].VU, vaticanCityColor: data[country].VA, venezuelaColor: data[country].VE, vietnamColor: data[country].VN, wallisAndFutunaColor: data[country].WF, westernSaharaColor: data[country].EH, yemenColor: data[country].YE, zambiaColor: data[country].ZM, zimbabweColor: data[country].ZW }
  const assignedColorsRefLength = assignedColorsRef.current.length

  for(let main = 0; main < assignedColorsRefLength; main++) {
    for(let sub = 0; sub < colors.length; sub++) {
      switch(assignedColorsRef.current[main][colors[sub]]) {
        case 0: priorityRef.current[colors[sub]] = 'rgb(255,20,147)'; break; //home country (pink)
        case 1: priorityRef.current[colors[sub]] = 'rgb(255,0,0)'; break; //permit required (red)
        case 2: //OECS freedom of movement (orange)
          let oecsFlag = false
          for(let oecs = 0; oecs < assignedColorsRefLength; oecs++) {
            switch(assignedColorsRef.current[oecs][colors[sub]]) {
              case 0: oecsFlag = true; break;
            }
          }
          if(oecsFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(255,145,0)'
        break;
        case 3: //MERCOSUR freedom of movement (dark green)
          let msFlag = false
          for(let ms = 0; ms < assignedColorsRefLength; ms++) {
            switch(assignedColorsRef.current[ms][colors[sub]]) {
              case 0: msFlag = true; break;
            }
          }
          if(msFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(0,135,93)'
        break;
        case 4: //EU freedom of movement (dark blue)
          let euFlag = false
          for(let eu = 0; eu < assignedColorsRefLength; eu++) {
            switch(assignedColorsRef.current[eu][colors[sub]]) {
              case 0: euFlag = true; break;
            }
          }
          if(euFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(0,51,153)'
        break;
        case 5: //GCC freedom of movement (brown)
          let gccFlag = false
          for(let gcc = 0; gcc < assignedColorsRefLength; gcc++) {
            switch(assignedColorsRef.current[gcc][colors[sub]]) {
              case 0: gccFlag = true; break;
            }
          }
          if(gccFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(153,123,61)'
        break;
        case 6: //freedom of movement (light pink)
          let fomFlag = false
          for(let fom = 0; fom < assignedColorsRefLength; fom++) {
            switch(assignedColorsRef.current[fom][colors[sub]]) {
              case 0: fomFlag = true; break;
              case 1: fomFlag = true; break;
              case 2: fomFlag = true; break;
              case 3: fomFlag = true; break;
              case 4: fomFlag = true; break;
              case 5: fomFlag = true; break;
            }
          }
          if(fomFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(255,179,191)'
        break;
        case 7: //visa free (green)
          let vfFlag = false
          for(let vf = 0; vf < assignedColorsRefLength; vf++) {
            switch(assignedColorsRef.current[vf][colors[sub]]) {
              case 0: vfFlag = true; break;
              case 1: vfFlag = true; break;
              case 2: vfFlag = true; break;
              case 3: vfFlag = true; break;
              case 4: vfFlag = true; break;
              case 5: vfFlag = true; break;
              case 6: vfFlag = true; break;
            }
          }
          if(vfFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(50,205,50)'
        break;
        case 8: //visa on arrival/evisa (light green)
          let voaevFlag = false
          for(let voaev = 0; voaev < assignedColorsRefLength; voaev++) {
            switch(assignedColorsRef.current[voaev][colors[sub]]) {
              case 0: voaevFlag = true; break;
              case 1: voaevFlag = true; break;
              case 2: voaevFlag = true; break;
              case 3: voaevFlag = true; break;
              case 4: voaevFlag = true; break;
              case 5: voaevFlag = true; break;
              case 6: voaevFlag = true; break;
              case 7: voaevFlag = true; break;
            }
          }
          if(voaevFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(161,224,123)'
        break;
        case 9: //visa on arrival (yellow)
          let voaFlag = false
          for(let voa = 0; voa < assignedColorsRefLength; voa++) {
            switch(assignedColorsRef.current[voa][colors[sub]]) {
              case 0: voaFlag = true; break;
              case 1: voaFlag = true; break;
              case 2: voaFlag = true; break;
              case 3: voaFlag = true; break;
              case 4: voaFlag = true; break;
              case 5: voaFlag = true; break;
              case 6: voaFlag = true; break;
              case 7: voaFlag = true; break;
              case 8: voaFlag = true; break;
              case 10: priorityRef.current[colors[sub]] = 'rgb(161,224,123)'; voaFlag = true; break;
            }
          }
          if(voaFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(255,255,92)'
        break;
        case 10: //evisa (blue)
          let evFlag = false
          for(let ev = 0; ev < assignedColorsRefLength; ev++) {
            switch(assignedColorsRef.current[ev][colors[sub]]) {
              case 0: evFlag = true; break;
              case 1: evFlag = true; break;
              case 2: evFlag = true; break;
              case 3: evFlag = true; break;
              case 4: evFlag = true; break;
              case 5: evFlag = true; break;
              case 6: evFlag = true; break;
              case 7: evFlag = true; break;
              case 8: evFlag = true; break;
              case 9: priorityRef.current[colors[sub]] = 'rgb(161,224,123)'; evFlag = true; break;
            }
          }
          if(evFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(135,206,250)'
        break;
        case 11: //Special permit/police check (purple)
          let spFlag = false
          for(let sp = 0; sp < assignedColorsRefLength; sp++) {
            switch(assignedColorsRef.current[sp][colors[sub]]) {
              case 0: spFlag = true; break;
              case 1: spFlag = true; break;
              case 2: spFlag = true; break;
              case 3: spFlag = true; break;
              case 4: spFlag = true; break;
              case 5: spFlag = true; break;
              case 6: spFlag = true; break;
              case 7: spFlag = true; break;
              case 8: spFlag = true; break;
              case 9: spFlag = true; break;
              case 10: spFlag = true; break;
            }
          }
          if(spFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(118,65,171)'
        break;
        case 12: //simplified visa (light grey)
          let svFlag = false
          for(let sv = 0; sv < assignedColorsRefLength; sv++) {
            switch(assignedColorsRef.current[sv][colors[sub]]) {
              case 0: svFlag = true; break;
              case 1: svFlag = true; break;
              case 2: svFlag = true; break;
              case 3: svFlag = true; break;
              case 4: svFlag = true; break;
              case 5: svFlag = true; break;
              case 6: svFlag = true; break;
              case 7: svFlag = true; break;
              case 8: svFlag = true; break;
              case 9: svFlag = true; break;
              case 10: svFlag = true; break;
              case 11: svFlag = true; break;
            }
          }
          if(svFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(200,200,200)'
        break;
        case 13: //confirmation required (black)
          let crFlag = false
          for(let cr = 0; cr < assignedColorsRefLength; cr++) {
            switch(assignedColorsRef.current[cr][colors[sub]]) {
              case 0: crFlag = true; break;
              case 1: crFlag = true; break;
              case 2: crFlag = true; break;
              case 3: crFlag = true; break;
              case 4: crFlag = true; break;
              case 5: crFlag = true; break;
              case 6: crFlag = true; break;
              case 7: crFlag = true; break;
              case 8: crFlag = true; break;
              case 9: crFlag = true; break;
              case 10: crFlag = true; break;
              case 11: crFlag = true; break;
              case 12: crFlag = true; break;
              case 14: 
                let vrFlag = false
                for(let vr = 0; vr < assignedColorsRefLength; vr++) {
                  switch(assignedColorsRef.current[vr][colors[sub]]) {
                    case 0: vrFlag = true; break;
                    case 1: vrFlag = true; break;
                    case 2: vrFlag = true; break;
                    case 3: vrFlag = true; break;
                    case 4: vrFlag = true; break;
                    case 5: vrFlag = true; break;
                    case 6: vrFlag = true; break;
                    case 7: vrFlag = true; break;
                    case 8: vrFlag = true; break;
                    case 9: vrFlag = true; break;
                    case 10: vrFlag = true; break;
                    case 11: vrFlag = true; break;
                    case 12: vrFlag = true; break;
                  }
                }
                if(vrFlag == true) { break; }
                priorityRef.current[colors[sub]] = 'rgb(150,150,150)'; crFlag = true;
            }
          }
          if(crFlag == true) { break; }
          priorityRef.current[colors[sub]] = 'rgb(0,0,0)'
        break;
      }
    }
  }


//State sponsors of terrorism ESTA ban
const ESTAban = () => {
  priorityRef.current.unitedStatesColor = 'rgb(150,150,150)'
  priorityRef.current.unitedStatesVirginIslandsColor = 'rgb(150,150,150)'
  if(priorityRef.current.guamColor == 'rgb(135,206,250)') {
    priorityRef.current.guamColor = 'rgb(150,150,150)'
    diffRef.current.GU = 1
  }
  if(priorityRef.current.northernMarianaIslandsColor == 'rgb(135,206,250)') {
    priorityRef.current.northernMarianaIslandsColor = 'rgb(150,150,150)'
    diffRef.current.MP = 1
  }

  diffRef.current.US = 1
  diffRef.current.VI = 1
  ESTAbanRef.current = true
}

switch(country) {
  case 'cuba': if(priorityRef.current.unitedStatesColor == 'rgb(135,206,250)') {ESTAban()} break;
  case 'syria': if(priorityRef.current.unitedStatesColor == 'rgb(135,206,250)') {ESTAban()} break;
  case 'iran': if(priorityRef.current.unitedStatesColor == 'rgb(135,206,250)') {ESTAban()} break;
  case 'northKorea': if(priorityRef.current.unitedStatesColor == 'rgb(135,206,250)') {ESTAban()} break;
}

if(ESTAbanRef.current == true) {
  ESTAban()
}

if(enableDiffCalculation == true) { diffCalculation(selectArrayRef, assignedColorsRef, diffRef) }
percentageCalculation(priorityRef, setPercentage)
}