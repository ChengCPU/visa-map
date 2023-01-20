import legendCalculation from './legendCalculation';
import percentageCalculation from './percentageCalculation';
import diffCalculation from './diffCalculation';
type Legend = {HC:boolean, FoM:boolean, OECSFoM:boolean, MFoM:boolean, EUFoM:boolean, GCCFoM:boolean, VF:boolean, VoAEV:boolean, VoA:boolean, EV:boolean, SP:boolean, CR:boolean}
const colors:string[] = [
  "abkhaziaColor",
  "afghanistanColor", 
  "albaniaColor",
  "algeriaColor",
  "americanSamoaColor",
  "andorraColor",
  "angolaColor",
  "anguillaColor",
  "antiguaAndBarbudaColor",
  "argentinaColor",
  "armeniaColor",
  "arubaColor",
  "australiaColor",
  "austriaColor",
  "azerbaijanColor",
  "bahamasColor",
  "bahrainColor",
  "bangladeshColor",
  "barbadosColor",
  "belarusColor",
  "belgiumColor",
  "belizeColor",
  "beninColor",
  "bermudaColor",
  "bhutanColor",
  "boliviaColor",
  "bonaireColor",
  "bosniaAndHerzegovinaColor",
  "botswanaColor",
  "bouvetIslandColor",
  "brazilColor",
  "britishIndianOceanTerritory",
  "britishVirginIslandsColor",
  "bruneiColor",
  "bulgariaColor",
  "burkinaFasoColor",
  "burundiColor",
  "cambodiaColor",
  "cameroonColor",
  "canadaColor",
  "capeVerdeColor",
  "caymanIslandsColor",
  "centralAfricanRepublicColor",
  "chadColor",
  "chileColor",
  "chinaColor",
  "colombiaColor",
  "comorosColor",
  "cookIslandsColor",
  "costaRicaColor",
  "croatiaColor",
  "cubaColor",
  "curacaoColor",
  "cyprusColor",
  "czechRepublicColor",
  "democraticRepublicOfTheCongoColor",
  "denmarkColor",
  "djiboutiColor",
  "dominicaColor",
  "dominicanRepublicColor",
  "eastTimorColor",
  "ecuadorColor",
  "egyptColor",
  "elSalvadorColor",
  "equatorialGuineaColor",
  "eritreaColor",
  "estoniaColor",
  "eswatiniColor",
  "ethiopiaColor",
  "falklandIslandsColor",
  "faroeIslandsColor",
  "fijiColor",
  "finlandColor",
  "franceColor",
  "frenchGuianaColor",
  "frenchPolynesiaColor",
  "gabonColor",
  "gambiaColor",
  "georgiaColor",
  "germanyColor",
  "ghanaColor",
  "gibraltarColor",
  "greeceColor",
  "greenlandColor",
  "grenadaColor",
  "guadeloupeColor",
  "guamColor",
  "guatemalaColor",
  "guernseyColor",
  "guineaColor",
  "guineaBissauColor",
  "guyanaColor",
  "haitiColor",
  "heardIslandAndMcDonaldIslandsColor",
  "hondurasColor",
  "hongKongColor",
  "hungaryColor",
  "icelandColor",
  "indiaColor",
  "indonesiaColor",
  "iranColor",
  "iraqColor",
  "irelandColor",
  "isleOfManColor",
  "israelColor",
  "italyColor",
  "ivoryCoastColor",
  "jamaicaColor",
  "janMayenColor",
  "japanColor",
  "jerseyColor",
  "jordanColor",
  "kazakhstanColor",
  "kenyaColor",
  "kiribatiColor",
  "kosovoColor",
  "kuwaitColor",
  "kyrgyzstanColor",
  "laosColor",
  "latviaColor",
  "lebanonColor",
  "lesothoColor",
  "liberiaColor",
  "libyaColor",
  "liechtensteinColor",
  "lithuaniaColor",
  "luxembourgColor",
  "macaoColor",
  "madagascarColor",
  "malawiColor",
  "malaysiaColor",
  "maldivesColor",
  "maliColor",
  "maltaColor",
  "marshallIslandsColor",
  "martiniqueColor",
  "mauritaniaColor",
  "mauritiusColor",
  "mayotteColor",
  "mexicoColor",
  "micronesiaColor",
  "moldovaColor",
  "monacoColor",
  "mongoliaColor",
  "montenegroColor",
  "montserratColor",
  "moroccoColor",
  "mozambiqueColor",
  "myanmarColor",
  "namibiaColor",
  "nauruColor",
  "nepalColor",
  "netherlandsColor",
  "newCaledoniaColor",
  "newZealandColor",
  "nicaraguaColor",
  "nigerColor",
  "nigeriaColor",
  "niueColor",
  "norfolkIslandColor",
  "northernCyprusColor",
  "northernMarianaIslandsColor",
  "northKoreaColor",
  "northMacedoniaColor",
  "norwayColor",
  "omanColor",
  "pakistanColor",
  "palauColor",
  "palestineColor",
  "panamaColor",
  "papuaNewGuineaColor",
  "paraguayColor",
  "peruColor",
  "philippinesColor",
  "pitcairnIslandsColor",
  "polandColor",
  "portugalColor",
  "qatarColor",
  "republicOfTheCongoColor",
  "reunionColor",
  "romaniaColor",
  "russiaColor",
  "rwandaColor",
  "sabaColor",
  "saintBarthelemyColor",
  "saintHelenaColor",
  "saintKittsAndNevisColor",
  "saintLuciaColor",
  "saintMartinColor",
  "saintPierreAndMiquelonColor",
  "saintVincentAndTheGrenadinesColor",
  "samoaColor",
  "sanMarinoColor",
  "saoTomeAndPrincipeColor",
  "saudiArabiaColor",
  "senegalColor",
  "serbiaColor",
  "seychellesColor",
  "sierraLeoneColor",
  "singaporeColor",
  "sintEustatiusColor",
  "sintMaartenColor",
  "slovakiaColor",
  "sloveniaColor",
  "solomonIslandsColor",
  "somaliaColor",
  "southAfricaColor",
  "southGeorgiaAndTheSouthSandwichIslandsColor",
  "southKoreaColor",
  "southOssetiaColor",
  "southSudanColor",
  "spainColor",
  "sriLankaColor",
  "sudanColor",
  "surinameColor",
  "svalbardColor",
  "swedenColor",
  "switzerlandColor",
  "syriaColor",
  "taiwanColor",
  "tajikistanColor",
  "tanzaniaColor",
  "thailandColor",
  "togoColor",
  "tokelauColor",
  "tongaColor",
  "transnistriaColor",
  "trinidadAndTobagoColor",
  "tunisiaColor",
  "turkeyColor",
  "turkmenistanColor",
  "turksAndCaicosColor",
  "tuvaluColor",
  "ugandaColor",
  "ukraineColor",
  "unitedArabEmiratesColor",
  "unitedKingdomColor",
  "unitedStatesColor",
  "unitedStatesVirginIslandsColor",
  "uruguayColor",
  "uzbekistanColor",
  "vanuatuColor",
  "vaticanCityColor",
  "venezuelaColor",
  "vietnamColor",
  "wallisAndFutunaColor",
  "westernSaharaColor",
  "yemenColor",
  "zambiaColor",
  "zimbabweColor"
]
export default function subCalculation(selectArray:null | string[], assignedColors:object[], setAssignedColors:Function, priority:object, setPriority:Function, rerender:boolean, setRerender:Function, legend:Legend, setLegend:Function, percentage:object, setPercentage:Function, diff:object, setDiff:Function): void {
  fetch('visaPolicy.json')
  .then((res) => res.json())
  .then((data) => {
  for(let passports = 0; passports < selectArray.length; passports++) {
  if(selectArray[passports] != null) {
  setAssignedColors(assignedColors, assignedColors[passports] = {
    abkhaziaColor: data[selectArray[passports]].AB,
    afghanistanColor: data[selectArray[passports]].AF,
    albaniaColor: data[selectArray[passports]].AL,
    algeriaColor: data[selectArray[passports]].DZ,
    americanSamoaColor: data[selectArray[passports]].AS,
    andorraColor: data[selectArray[passports]].AD,
    angolaColor: data[selectArray[passports]].AO,
    anguillaColor: data[selectArray[passports]].AI,
    antiguaAndBarbudaColor: data[selectArray[passports]].AG,
    argentinaColor: data[selectArray[passports]].AR,
    armeniaColor: data[selectArray[passports]].AM,
    arubaColor: data[selectArray[passports]].AW,
    australiaColor: data[selectArray[passports]].AU,
    austriaColor: data[selectArray[passports]].AT,
    azerbaijanColor: data[selectArray[passports]].AZ,
    bahamasColor: data[selectArray[passports]].BS,
    bahrainColor: data[selectArray[passports]].BH,
    bangladeshColor: data[selectArray[passports]].BD,
    barbadosColor: data[selectArray[passports]].BB,
    belarusColor: data[selectArray[passports]].BY,
    belgiumColor: data[selectArray[passports]].BE,
    belizeColor: data[selectArray[passports]].BZ,
    beninColor: data[selectArray[passports]].BJ,
    bermudaColor: data[selectArray[passports]].BM,
    bhutanColor: data[selectArray[passports]].BT,
    boliviaColor: data[selectArray[passports]].BO,
    bonaireColor: data[selectArray[passports]].XB,
    bosniaAndHerzegovinaColor: data[selectArray[passports]].BA,
    botswanaColor: data[selectArray[passports]].BW,
    bouvetIslandColor: data[selectArray[passports]].BV,
    brazilColor: data[selectArray[passports]].BR,
    britishIndianOceanTerritory: data[selectArray[passports]].IO,
    britishVirginIslandsColor: data[selectArray[passports]].VG,
    bruneiColor: data[selectArray[passports]].BN,
    bulgariaColor: data[selectArray[passports]].BG,
    burkinaFasoColor: data[selectArray[passports]].BF,
    burundiColor: data[selectArray[passports]].BI,
    cambodiaColor: data[selectArray[passports]].KH,
    cameroonColor: data[selectArray[passports]].CM,
    canadaColor: data[selectArray[passports]].CA,
    capeVerdeColor: data[selectArray[passports]].CV,
    caymanIslandsColor: data[selectArray[passports]].KY,
    centralAfricanRepublicColor: data[selectArray[passports]].CF,
    chadColor: data[selectArray[passports]].TD,
    chileColor: data[selectArray[passports]].CL,
    chinaColor: data[selectArray[passports]].CN,
    colombiaColor: data[selectArray[passports]].CO,
    comorosColor: data[selectArray[passports]].KM,
    cookIslandsColor: data[selectArray[passports]].CK,
    costaRicaColor: data[selectArray[passports]].CR,
    croatiaColor: data[selectArray[passports]].HR,
    cubaColor: data[selectArray[passports]].CU,
    curacaoColor: data[selectArray[passports]].CW,
    cyprusColor: data[selectArray[passports]].CY,
    czechRepublicColor: data[selectArray[passports]].CZ,
    democraticRepublicOfTheCongoColor: data[selectArray[passports]].CD,
    denmarkColor: data[selectArray[passports]].DK,
    djiboutiColor: data[selectArray[passports]].DJ,
    dominicaColor: data[selectArray[passports]].DM,
    dominicanRepublicColor: data[selectArray[passports]].DO,
    eastTimorColor: data[selectArray[passports]].TL,
    ecuadorColor: data[selectArray[passports]].EC,
    egyptColor: data[selectArray[passports]].EG,
    elSalvadorColor: data[selectArray[passports]].SV,
    equatorialGuineaColor: data[selectArray[passports]].GQ,
    eritreaColor: data[selectArray[passports]].ER,
    estoniaColor: data[selectArray[passports]].EE,
    eswatiniColor: data[selectArray[passports]].SZ,
    ethiopiaColor: data[selectArray[passports]].ET,
    falklandIslandsColor: data[selectArray[passports]].FK,
    faroeIslandsColor: data[selectArray[passports]].FO,
    fijiColor: data[selectArray[passports]].FJ,
    finlandColor: data[selectArray[passports]].FI,
    franceColor: data[selectArray[passports]].FR,
    frenchGuianaColor: data[selectArray[passports]].GF,
    frenchPolynesiaColor: data[selectArray[passports]].PF,
    gabonColor: data[selectArray[passports]].GA,
    gambiaColor: data[selectArray[passports]].GM,
    georgiaColor: data[selectArray[passports]].GE,
    germanyColor: data[selectArray[passports]].DE,
    ghanaColor: data[selectArray[passports]].GH,
    gibraltarColor: data[selectArray[passports]].GI,
    greeceColor: data[selectArray[passports]].GR,
    greenlandColor: data[selectArray[passports]].GL,
    grenadaColor: data[selectArray[passports]].GD,
    guadeloupeColor: data[selectArray[passports]].GP,
    guamColor: data[selectArray[passports]].GU,
    guatemalaColor: data[selectArray[passports]].GT,
    guernseyColor: data[selectArray[passports]].GG,
    guineaColor: data[selectArray[passports]].GN,
    guineaBissauColor: data[selectArray[passports]].GW,
    guyanaColor: data[selectArray[passports]].GY,
    haitiColor: data[selectArray[passports]].HT,
    heardIslandAndMcDonaldIslandsColor: data[selectArray[passports]].HM,
    hondurasColor: data[selectArray[passports]].HN,
    hongKongColor: data[selectArray[passports]].HK,
    hungaryColor: data[selectArray[passports]].HU,
    icelandColor: data[selectArray[passports]].IS,
    indiaColor: data[selectArray[passports]].IN,
    indonesiaColor: data[selectArray[passports]].ID,
    iranColor: data[selectArray[passports]].IR,
    iraqColor: data[selectArray[passports]].IQ,
    irelandColor: data[selectArray[passports]].IE,
    isleOfManColor: data[selectArray[passports]].IM,
    israelColor: data[selectArray[passports]].IL,
    italyColor: data[selectArray[passports]].IT,
    ivoryCoastColor: data[selectArray[passports]].CI,
    jamaicaColor: data[selectArray[passports]].JM,
    janMayenColor: data[selectArray[passports]].XM,
    japanColor: data[selectArray[passports]].JP,
    jerseyColor: data[selectArray[passports]].JE,
    jordanColor: data[selectArray[passports]].JO,
    kazakhstanColor: data[selectArray[passports]].KZ,
    kenyaColor: data[selectArray[passports]].KE,
    kiribatiColor: data[selectArray[passports]].KI,
    kosovoColor: data[selectArray[passports]].XK,
    kuwaitColor: data[selectArray[passports]].KW,
    kyrgyzstanColor: data[selectArray[passports]].KG,
    laosColor: data[selectArray[passports]].LA,
    latviaColor: data[selectArray[passports]].LV,
    lebanonColor: data[selectArray[passports]].LB,
    lesothoColor: data[selectArray[passports]].LS,
    liberiaColor: data[selectArray[passports]].LR,
    libyaColor: data[selectArray[passports]].LY,
    liechtensteinColor: data[selectArray[passports]].LI,
    lithuaniaColor: data[selectArray[passports]].LT,
    luxembourgColor: data[selectArray[passports]].LU,
    macaoColor: data[selectArray[passports]].MO,
    madagascarColor: data[selectArray[passports]].MG,
    malawiColor: data[selectArray[passports]].MW,
    malaysiaColor: data[selectArray[passports]].MY,
    maldivesColor: data[selectArray[passports]].MV,
    maliColor: data[selectArray[passports]].ML,
    maltaColor: data[selectArray[passports]].MT,
    marshallIslandsColor: data[selectArray[passports]].MH,
    martiniqueColor: data[selectArray[passports]].MQ,
    mauritaniaColor: data[selectArray[passports]].MR,
    mauritiusColor: data[selectArray[passports]].MU,
    mayotteColor: data[selectArray[passports]].YT,
    mexicoColor: data[selectArray[passports]].MX,
    micronesiaColor: data[selectArray[passports]].FM,
    moldovaColor: data[selectArray[passports]].MD,
    monacoColor: data[selectArray[passports]].MC,
    mongoliaColor: data[selectArray[passports]].MN,
    montenegroColor: data[selectArray[passports]].ME,
    montserratColor: data[selectArray[passports]].MS,
    moroccoColor: data[selectArray[passports]].MA,
    mozambiqueColor: data[selectArray[passports]].MZ,
    myanmarColor: data[selectArray[passports]].MM,
    namibiaColor: data[selectArray[passports]].NA,
    nauruColor: data[selectArray[passports]].NR,
    nepalColor: data[selectArray[passports]].NP,
    netherlandsColor: data[selectArray[passports]].NL,
    newCaledoniaColor: data[selectArray[passports]].NC,
    newZealandColor: data[selectArray[passports]].NZ,
    nicaraguaColor: data[selectArray[passports]].NI,
    nigerColor: data[selectArray[passports]].NE,
    nigeriaColor: data[selectArray[passports]].NG,
    niueColor: data[selectArray[passports]].NU,
    norfolkIslandColor: data[selectArray[passports]].NF,
    northernCyprusColor: data[selectArray[passports]].RC,
    northernMarianaIslandsColor: data[selectArray[passports]].MP,
    northKoreaColor: data[selectArray[passports]].KP,
    northMacedoniaColor: data[selectArray[passports]].MK,
    norwayColor: data[selectArray[passports]].NO,
    omanColor: data[selectArray[passports]].OM,
    pakistanColor: data[selectArray[passports]].PK,
    palauColor: data[selectArray[passports]].PW,
    palestineColor: data[selectArray[passports]].PS,
    panamaColor: data[selectArray[passports]].PA,
    papuaNewGuineaColor: data[selectArray[passports]].PG,
    paraguayColor: data[selectArray[passports]].PY,
    peruColor: data[selectArray[passports]].PE,
    philippinesColor: data[selectArray[passports]].PH,
    pitcairnIslandsColor: data[selectArray[passports]].PN,
    polandColor: data[selectArray[passports]].PL,
    portugalColor: data[selectArray[passports]].PT,
    qatarColor: data[selectArray[passports]].QA,
    republicOfTheCongoColor: data[selectArray[passports]].CG,
    reunionColor: data[selectArray[passports]].RE,
    romaniaColor: data[selectArray[passports]].RO,
    russiaColor: data[selectArray[passports]].RU,
    rwandaColor: data[selectArray[passports]].RW,
    sabaColor: data[selectArray[passports]].XS,
    saintBarthelemyColor: data[selectArray[passports]].BL,
    saintHelenaColor: data[selectArray[passports]].SH,
    saintKittsAndNevisColor: data[selectArray[passports]].KN,
    saintLuciaColor: data[selectArray[passports]].LC,
    saintMartinColor: data[selectArray[passports]].MF,
    saintPierreAndMiquelonColor: data[selectArray[passports]].PM,
    saintVincentAndTheGrenadinesColor: data[selectArray[passports]].VC,
    samoaColor: data[selectArray[passports]].WS,
    sanMarinoColor: data[selectArray[passports]].SM,
    saoTomeAndPrincipeColor: data[selectArray[passports]].ST,
    saudiArabiaColor: data[selectArray[passports]].SA,
    senegalColor: data[selectArray[passports]].SN,
    serbiaColor: data[selectArray[passports]].RS,
    seychellesColor: data[selectArray[passports]].SC,
    sierraLeoneColor: data[selectArray[passports]].SL,
    singaporeColor: data[selectArray[passports]].SG,
    sintEustatiusColor: data[selectArray[passports]].XE,
    sintMaartenColor: data[selectArray[passports]].SX,
    slovakiaColor: data[selectArray[passports]].SK,
    sloveniaColor: data[selectArray[passports]].SI,
    solomonIslandsColor: data[selectArray[passports]].SB,
    somaliaColor: data[selectArray[passports]].SO,
    southAfricaColor: data[selectArray[passports]].ZA,
    southGeorgiaAndTheSouthSandwichIslandsColor: data[selectArray[passports]].GS,
    southKoreaColor: data[selectArray[passports]].KR,
    southOssetiaColor: data[selectArray[passports]].XO,
    southSudanColor: data[selectArray[passports]].SS,
    spainColor: data[selectArray[passports]].ES,
    sriLankaColor: data[selectArray[passports]].LK,
    sudanColor: data[selectArray[passports]].SD,
    surinameColor: data[selectArray[passports]].SR,
    svalbardColor: data[selectArray[passports]].XV,
    swedenColor: data[selectArray[passports]].SE,
    switzerlandColor: data[selectArray[passports]].CH,
    syriaColor: data[selectArray[passports]].SY,
    taiwanColor: data[selectArray[passports]].TW,
    tajikistanColor: data[selectArray[passports]].TJ,
    tanzaniaColor: data[selectArray[passports]].TZ,
    thailandColor: data[selectArray[passports]].TH,
    togoColor: data[selectArray[passports]].TG,
    tokelauColor: data[selectArray[passports]].TK,
    tongaColor: data[selectArray[passports]].TO,
    transnistriaColor: data[selectArray[passports]].XT,
    trinidadAndTobagoColor: data[selectArray[passports]].TT,
    tunisiaColor: data[selectArray[passports]].TN,
    turkeyColor: data[selectArray[passports]].TR,
    turkmenistanColor: data[selectArray[passports]].TM,
    turksAndCaicosColor: data[selectArray[passports]].TC,
    tuvaluColor: data[selectArray[passports]].TV,
    ugandaColor: data[selectArray[passports]].UG,
    ukraineColor: data[selectArray[passports]].UA,
    unitedArabEmiratesColor: data[selectArray[passports]].AE,
    unitedKingdomColor: data[selectArray[passports]].GB,
    unitedStatesColor: data[selectArray[passports]].US,
    unitedStatesVirginIslandsColor: data[selectArray[passports]].VI,
    uruguayColor: data[selectArray[passports]].UY,
    uzbekistanColor: data[selectArray[passports]].UZ,
    vanuatuColor: data[selectArray[passports]].VU,
    vaticanCityColor: data[selectArray[passports]].VA,
    venezuelaColor: data[selectArray[passports]].VE,
    vietnamColor: data[selectArray[passports]].VN,
    wallisAndFutunaColor: data[selectArray[passports]].WF,
    westernSaharaColor: data[selectArray[passports]].EH,
    yemenColor: data[selectArray[passports]].YE,
    zambiaColor: data[selectArray[passports]].ZM,
    zimbabweColor: data[selectArray[passports]].ZW
  });
  for(let mainColorCalculation = 0; mainColorCalculation < assignedColors.length; mainColorCalculation++) {
  for(let subColorCalculation = 0; subColorCalculation < colors.length; subColorCalculation++) {
    switch(assignedColors[mainColorCalculation][colors[subColorCalculation]]) {
    case 0: setPriority(priority, priority[colors[subColorCalculation]] = "rgb(255,20,147)"); break; //home country (pink)
    case 1: setPriority(priority, priority[colors[subColorCalculation]] = "rgb(255,0,0)"); break; //permit required (red)
    case 2: //OECS freedom of movement
      for(let OECSfom = 0; OECSfom < assignedColors.length; OECSfom++) {
        switch(assignedColors[OECSfom][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
        default: if(OECSfom == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(255,145,0)")}}}
    break;
    case 3: //MERCSOUR freedom of movement ()
      for(let MERCSOURfom = 0; MERCSOURfom < assignedColors.length; MERCSOURfom++) {
        switch(assignedColors[MERCSOURfom][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
        default: if(MERCSOURfom == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(0,135,93)")}}}
    break;
    case 4: //EU freedom of movement (dark blue)
      for(let EUfom = 0; EUfom < assignedColors.length; EUfom++) {
        switch(assignedColors[EUfom][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
        default: if(EUfom == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(0,51,153)")}}}
    break;
    case 5: //GCC freedom of movement (brown)
      for(let GCCfom = 0; GCCfom < assignedColors.length; GCCfom++) {
        switch(assignedColors[GCCfom][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
        default: if(GCCfom == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(153,123,61)")}}}
    break;
    case 6: //freedom of movement (light pink)
      for(let fom = 0; fom < assignedColors.length; fom++) {
        switch(assignedColors[fom][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
        default: if(fom == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(255,179,191)")}}}
    break;
    case 7: //visa free (green)
      for(let vf = 0; vf < assignedColors.length; vf++) {
        switch(assignedColors[vf][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
          case "rgb(255,179,191)": break; //freedom of movement (light pink)
        default: if(vf == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(50,205,50)")}}}
    break;
    case 8: //visa on arrival/evisa (light green)
      for(let voaEv = 0; voaEv < assignedColors.length; voaEv++) {
        switch(assignedColors[voaEv][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
          case "rgb(255,179,191)": break; //freedom of movement (light pink)
          case "rgb(50,205,50)": break; //visa free (green)
        default: if(voaEv == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(161,224,123)")}}}
    break;
    case 9: //visa on arrival (yellow)
      for(let voa = 0; voa < assignedColors.length; voa++) {
        switch(assignedColors[voa][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
          case "rgb(255,179,191)": break; //freedom of movement (light pink)
          case "rgb(50,205,50)": break; //visa free (green)
          case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
        default: if(voa == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(255,255,92)")}}}
    break;
    case 10: //evisa (blue)
      for(let ev = 0; ev < assignedColors.length; ev++) {
        switch(assignedColors[ev][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
          case "rgb(255,179,191)": break; //freedom of movement (light pink)
          case "rgb(50,205,50)": break; //visa free (green)
          case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
          case "rgb(255,255,92)": //visa on arrival (yellow)
            for(let voaEvCalc = 0; voaEvCalc < assignedColors.length; voaEvCalc++) {
              switch(assignedColors[voaEvCalc][colors[subColorCalculation]]) {
                case "rgb(255,20,147)": break; //home country (pink)
                case "rgb(255,145,0)": break; //OECS freedom of movement
                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                case "rgb(50,205,50)": break; //visa free (green)
              default: if(voaEvCalc == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(161,224,123)")}}}
          default: if(ev == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(135,206,250)")}}}
    break;
    case 11: //Special permit/police check (purple)
      for(let sppc = 0; sppc < assignedColors.length; sppc++) {
        switch(assignedColors[sppc][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
          case "rgb(255,179,191)": break; //freedom of movement (light pink)
          case "rgb(50,205,50)": break; //visa free (green)
          case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
          case "rgb(255,255,92)": break; //visa on arrival (yellow)
          case "rgb(135,206,250)": break; //evisa (blue)
        default: if(sppc == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(118,65,171)")}}}
    break;
    case 12: //simplified visa (light grey)
      for(let sv = 0; sv < assignedColors.length; sv++) {
        switch(assignedColors[sv][colors[subColorCalculation]]) {
          case "rgb(255,20,147)": break; //home country (pink)
          case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
          case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
          case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
          case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
          case "rgb(255,179,191)": break; //freedom of movement (light pink)
          case "rgb(50,205,50)": break; //visa free (green)
          case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
          case "rgb(255,255,92)": break; //visa on arrival (yellow)
          case "rgb(135,206,250)": break; //evisa (blue)
          case "rgb(118,65,171)": break; //Special permit/police check (purple)
        default: if(sv == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(200,200,200)")}}}
    break;
    case 13: //confirmation required (black)
    for(let cr = 0; cr < assignedColors.length; cr++) {
      switch(assignedColors[cr][colors[subColorCalculation]]) {
        case "rgb(255,20,147)": break; //home country (pink)
        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
        case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
        case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
        case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
        case "rgb(255,179,191)": break; //freedom of movement (light pink)
        case "rgb(50,205,50)": break; //visa free (green)
        case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
        case "rgb(255,255,92)": break; //visa on arrival (yellow)
        case "rgb(135,206,250)": break; //evisa (blue)
        case "rgb(118,65,171)": break; //Special permit/police check (purple)
        case "rgb(200,200,200)": break; //simplified visa (light grey)
        case "rgb(149,150,150)": setPriority(priority, priority[colors[subColorCalculation]] = "rgb(0,0,0)"); break;
        case 14:
          for(let crCalc = 0; crCalc < assignedColors.length; crCalc++) {
            switch(assignedColors[crCalc][colors[subColorCalculation]]) {
              case "rgb(255,20,147)": break; //home country (pink)
              case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
              case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
              case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
              case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
              case "rgb(255,179,191)": break; //freedom of movement (light pink)
              case "rgb(50,205,50)": break; //visa free (green)
              case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
              case "rgb(255,255,92)": break; //visa on arrival (yellow)
              case "rgb(135,206,250)": break; //evisa (blue)
              case "rgb(118,65,171)": break; //Special permit/police check (purple)
              case "rgb(200,200,200)": break; //simplified visa (light grey)
            default: if(crCalc == assignedColors.length - 1) {setPriority(priority, priority[colors[subColorCalculation]] = "rgb(150,150,150)")}}}}}
break;}}}}}
legendCalculation(priority, legend, setLegend, rerender, setRerender)
percentageCalculation(selectArray, priority, assignedColors, percentage, setPercentage)
diffCalculation(selectArray, assignedColors, diff, setDiff)
})}