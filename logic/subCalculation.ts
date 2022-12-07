import legendCalculation from './legendCalculation';
import percentageCalculation from './percentageCalculation';
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
export default function subCalculation(selectArray:null | string[], assignedColors:object[], setAssignedColors:Function, priority:object, setPriority:Function, rerender:boolean, setRerender:Function, legend:Legend, setLegend:Function, percentage:any, setPercentage:Function): void {
  fetch('visaPolicy.json')
  .then((res) => res.json())
  .then((data) => {
  for(let passports = 0; passports < selectArray.length; passports++) {
  if(selectArray[passports] != null) {
  setAssignedColors(assignedColors, assignedColors[passports] = {
    abkhaziaColor: data[selectArray[passports]].abkhazia,
    afghanistanColor: data[selectArray[passports]].afghanistan,
    albaniaColor: data[selectArray[passports]].albania,
    algeriaColor: data[selectArray[passports]].algeria,
    americanSamoaColor: data[selectArray[passports]].americanSamoa,
    andorraColor: data[selectArray[passports]].andorra,
    angolaColor: data[selectArray[passports]].angola,
    anguillaColor: data[selectArray[passports]].anguilla,
    antiguaAndBarbudaColor: data[selectArray[passports]].antiguaAndBarbuda,
    argentinaColor: data[selectArray[passports]].argentina,
    armeniaColor: data[selectArray[passports]].armenia,
    arubaColor: data[selectArray[passports]].aruba,
    australiaColor: data[selectArray[passports]].australia,
    austriaColor: data[selectArray[passports]].austria,
    azerbaijanColor: data[selectArray[passports]].azerbaijan,
    bahamasColor: data[selectArray[passports]].bahamas,
    bahrainColor: data[selectArray[passports]].bahrain,
    bangladeshColor: data[selectArray[passports]].bangladesh,
    barbadosColor: data[selectArray[passports]].barbados,
    belarusColor: data[selectArray[passports]].belarus,
    belgiumColor: data[selectArray[passports]].belgium,
    belizeColor: data[selectArray[passports]].belize,
    beninColor: data[selectArray[passports]].benin,
    bermudaColor: data[selectArray[passports]].bermuda,
    bhutanColor: data[selectArray[passports]].bhutan,
    boliviaColor: data[selectArray[passports]].bolivia,
    bonaireColor: data[selectArray[passports]].bonaire,
    bosniaAndHerzegovinaColor: data[selectArray[passports]].bosniaAndHerzegovina,
    botswanaColor: data[selectArray[passports]].botswana,
    bouvetIslandColor: data[selectArray[passports]].bouvetIsland,
    brazilColor: data[selectArray[passports]].brazil,
    britishIndianOceanTerritory: data[selectArray[passports]].britishIndianOceanTerritory,
    britishVirginIslandsColor: data[selectArray[passports]].britishVirginIslands,
    bruneiColor: data[selectArray[passports]].brunei,
    bulgariaColor: data[selectArray[passports]].bulgaria,
    burkinaFasoColor: data[selectArray[passports]].burkinaFaso,
    burundiColor: data[selectArray[passports]].burundi,
    cambodiaColor: data[selectArray[passports]].cambodia,
    cameroonColor: data[selectArray[passports]].cameroon,
    canadaColor: data[selectArray[passports]].canada,
    capeVerdeColor: data[selectArray[passports]].capeVerde,
    caymanIslandsColor: data[selectArray[passports]].caymanIslands,
    centralAfricanRepublicColor: data[selectArray[passports]].centralAfricanRepublic,
    chadColor: data[selectArray[passports]].chad,
    chileColor: data[selectArray[passports]].chile,
    chinaColor: data[selectArray[passports]].china,
    colombiaColor: data[selectArray[passports]].colombia,
    comorosColor: data[selectArray[passports]].comoros,
    cookIslandsColor: data[selectArray[passports]].cookIslands,
    costaRicaColor: data[selectArray[passports]].costaRica,
    croatiaColor: data[selectArray[passports]].croatia,
    cubaColor: data[selectArray[passports]].cuba,
    curacaoColor: data[selectArray[passports]].curacao,
    cyprusColor: data[selectArray[passports]].cyprus,
    czechRepublicColor: data[selectArray[passports]].czechRepublic,
    democraticRepublicOfTheCongoColor: data[selectArray[passports]].democraticRepublicOfTheCongo,
    denmarkColor: data[selectArray[passports]].denmark,
    djiboutiColor: data[selectArray[passports]].djibouti,
    dominicaColor: data[selectArray[passports]].dominica,
    dominicanRepublicColor: data[selectArray[passports]].dominicanRepublic,
    eastTimorColor: data[selectArray[passports]].eastTimor,
    ecuadorColor: data[selectArray[passports]].ecuador,
    egyptColor: data[selectArray[passports]].egypt,
    elSalvadorColor: data[selectArray[passports]].elSalvador,
    equatorialGuineaColor: data[selectArray[passports]].equatorialGuinea,
    eritreaColor: data[selectArray[passports]].eritrea,
    estoniaColor: data[selectArray[passports]].estonia,
    eswatiniColor: data[selectArray[passports]].eswatini,
    ethiopiaColor: data[selectArray[passports]].ethiopia,
    falklandIslandsColor: data[selectArray[passports]].falklandIslands,
    faroeIslandsColor: data[selectArray[passports]].faroeIslands,
    fijiColor: data[selectArray[passports]].fiji,
    finlandColor: data[selectArray[passports]].finland,
    franceColor: data[selectArray[passports]].france,
    frenchGuianaColor: data[selectArray[passports]].frenchGuiana,
    frenchPolynesiaColor: data[selectArray[passports]].frenchPolynesia,
    gabonColor: data[selectArray[passports]].gabon,
    gambiaColor: data[selectArray[passports]].gambia,
    georgiaColor: data[selectArray[passports]].georgia,
    germanyColor: data[selectArray[passports]].germany,
    ghanaColor: data[selectArray[passports]].ghana,
    gibraltarColor: data[selectArray[passports]].gibraltar,
    greeceColor: data[selectArray[passports]].greece,
    greenlandColor: data[selectArray[passports]].greenland,
    grenadaColor: data[selectArray[passports]].grenada,
    guadeloupeColor: data[selectArray[passports]].guadeloupe,
    guamColor: data[selectArray[passports]].guam,
    guatemalaColor: data[selectArray[passports]].guatemala,
    guernseyColor: data[selectArray[passports]].guernsey,
    guineaColor: data[selectArray[passports]].guinea,
    guineaBissauColor: data[selectArray[passports]].guineaBissau,
    guyanaColor: data[selectArray[passports]].guyana,
    haitiColor: data[selectArray[passports]].haiti,
    heardIslandAndMcDonaldIslandsColor: data[selectArray[passports]].heardIslandAndMcDonaldIslands,
    hondurasColor: data[selectArray[passports]].honduras,
    hongKongColor: data[selectArray[passports]].hongKong,
    hungaryColor: data[selectArray[passports]].hungary,
    icelandColor: data[selectArray[passports]].iceland,
    indiaColor: data[selectArray[passports]].india,
    indonesiaColor: data[selectArray[passports]].indonesia,
    iranColor: data[selectArray[passports]].iran,
    iraqColor: data[selectArray[passports]].iraq,
    irelandColor: data[selectArray[passports]].ireland,
    isleOfManColor: data[selectArray[passports]].isleOfMan,
    israelColor: data[selectArray[passports]].israel,
    italyColor: data[selectArray[passports]].italy,
    ivoryCoastColor: data[selectArray[passports]].ivoryCoast,
    jamaicaColor: data[selectArray[passports]].jamaica,
    janMayenColor: data[selectArray[passports]].janMayen,
    japanColor: data[selectArray[passports]].japan,
    jerseyColor: data[selectArray[passports]].jersey,
    jordanColor: data[selectArray[passports]].jordan,
    kazakhstanColor: data[selectArray[passports]].kazakhstan,
    kenyaColor: data[selectArray[passports]].kenya,
    kiribatiColor: data[selectArray[passports]].kiribati,
    kosovoColor: data[selectArray[passports]].kosovo,
    kuwaitColor: data[selectArray[passports]].kuwait,
    kyrgyzstanColor: data[selectArray[passports]].kyrgyzstan,
    laosColor: data[selectArray[passports]].laos,
    latviaColor: data[selectArray[passports]].latvia,
    lebanonColor: data[selectArray[passports]].lebanon,
    lesothoColor: data[selectArray[passports]].lesotho,
    liberiaColor: data[selectArray[passports]].liberia,
    libyaColor: data[selectArray[passports]].libya,
    liechtensteinColor: data[selectArray[passports]].liechtenstein,
    lithuaniaColor: data[selectArray[passports]].lithuania,
    luxembourgColor: data[selectArray[passports]].luxembourg,
    macaoColor: data[selectArray[passports]].macao,
    madagascarColor: data[selectArray[passports]].madagascar,
    malawiColor: data[selectArray[passports]].malawi,
    malaysiaColor: data[selectArray[passports]].malaysia,
    maldivesColor: data[selectArray[passports]].maldives,
    maliColor: data[selectArray[passports]].mali,
    maltaColor: data[selectArray[passports]].malta,
    marshallIslandsColor: data[selectArray[passports]].marshallIslands,
    martiniqueColor: data[selectArray[passports]].martinique,
    mauritaniaColor: data[selectArray[passports]].mauritania,
    mauritiusColor: data[selectArray[passports]].mauritius,
    mayotteColor: data[selectArray[passports]].mayotte,
    mexicoColor: data[selectArray[passports]].mexico,
    micronesiaColor: data[selectArray[passports]].micronesia,
    moldovaColor: data[selectArray[passports]].moldova,
    monacoColor: data[selectArray[passports]].monaco,
    mongoliaColor: data[selectArray[passports]].mongolia,
    montenegroColor: data[selectArray[passports]].montenegro,
    montserratColor: data[selectArray[passports]].montserrat,
    moroccoColor: data[selectArray[passports]].morocco,
    mozambiqueColor: data[selectArray[passports]].mozambique,
    myanmarColor: data[selectArray[passports]].myanmar,
    namibiaColor: data[selectArray[passports]].namibia,
    nauruColor: data[selectArray[passports]].nauru,
    nepalColor: data[selectArray[passports]].nepal,
    netherlandsColor: data[selectArray[passports]].netherlands,
    newCaledoniaColor: data[selectArray[passports]].newCaledonia,
    newZealandColor: data[selectArray[passports]].newZealand,
    nicaraguaColor: data[selectArray[passports]].nicaragua,
    nigerColor: data[selectArray[passports]].niger,
    nigeriaColor: data[selectArray[passports]].nigeria,
    niueColor: data[selectArray[passports]].niue,
    norfolkIslandColor: data[selectArray[passports]].norfolkIsland,
    northernCyprusColor: data[selectArray[passports]].northernCyprus,
    northernMarianaIslandsColor: data[selectArray[passports]].northernMarianaIslands,
    northKoreaColor: data[selectArray[passports]].northKorea,
    northMacedoniaColor: data[selectArray[passports]].northMacedonia,
    norwayColor: data[selectArray[passports]].norway,
    omanColor: data[selectArray[passports]].oman,
    pakistanColor: data[selectArray[passports]].pakistan,
    palauColor: data[selectArray[passports]].palau,
    palestineColor: data[selectArray[passports]].palestine,
    panamaColor: data[selectArray[passports]].panama,
    papuaNewGuineaColor: data[selectArray[passports]].papuaNewGuinea,
    paraguayColor: data[selectArray[passports]].paraguay,
    peruColor: data[selectArray[passports]].peru,
    philippinesColor: data[selectArray[passports]].philippines,
    pitcairnIslandsColor: data[selectArray[passports]].pitcairnIslands,
    polandColor: data[selectArray[passports]].poland,
    portugalColor: data[selectArray[passports]].portugal,
    qatarColor: data[selectArray[passports]].qatar,
    republicOfTheCongoColor: data[selectArray[passports]].republicOfTheCongo,
    reunionColor: data[selectArray[passports]].reunion,
    romaniaColor: data[selectArray[passports]].romania,
    russiaColor: data[selectArray[passports]].russia,
    rwandaColor: data[selectArray[passports]].rwanda,
    sabaColor: data[selectArray[passports]].saba,
    saintBarthelemyColor: data[selectArray[passports]].saintBarthelemy,
    saintHelenaColor: data[selectArray[passports]].saintHelena,
    saintKittsAndNevisColor: data[selectArray[passports]].saintKittsAndNevis,
    saintLuciaColor: data[selectArray[passports]].saintLucia,
    saintMartinColor: data[selectArray[passports]].saintMartin,
    saintPierreAndMiquelonColor: data[selectArray[passports]].saintPierreAndMiquelon,
    saintVincentAndTheGrenadinesColor: data[selectArray[passports]].saintVincentAndTheGrenadines,
    samoaColor: data[selectArray[passports]].samoa,
    sanMarinoColor: data[selectArray[passports]].sanMarino,
    saoTomeAndPrincipeColor: data[selectArray[passports]].saoTomeAndPrincipe,
    saudiArabiaColor: data[selectArray[passports]].saudiArabia,
    senegalColor: data[selectArray[passports]].senegal,
    serbiaColor: data[selectArray[passports]].serbia,
    seychellesColor: data[selectArray[passports]].seychelles,
    sierraLeoneColor: data[selectArray[passports]].sierraLeone,
    singaporeColor: data[selectArray[passports]].singapore,
    sintEustatiusColor: data[selectArray[passports]].sintEustatius,
    sintMaartenColor: data[selectArray[passports]].sintMaarten,
    slovakiaColor: data[selectArray[passports]].slovakia,
    sloveniaColor: data[selectArray[passports]].slovenia,
    solomonIslandsColor: data[selectArray[passports]].solomonIslands,
    somaliaColor: data[selectArray[passports]].somalia,
    southAfricaColor: data[selectArray[passports]].southAfrica,
    southGeorgiaAndTheSouthSandwichIslandsColor: data[selectArray[passports]].southGeorgiaAndTheSouthSandwichIslands,
    southKoreaColor: data[selectArray[passports]].southKorea,
    southOssetiaColor: data[selectArray[passports]].southOssetia,
    southSudanColor: data[selectArray[passports]].southSudan,
    spainColor: data[selectArray[passports]].spain,
    sriLankaColor: data[selectArray[passports]].sriLanka,
    sudanColor: data[selectArray[passports]].sudan,
    surinameColor: data[selectArray[passports]].suriname,
    svalbardColor: data[selectArray[passports]].svalbard,
    swedenColor: data[selectArray[passports]].sweden,
    switzerlandColor: data[selectArray[passports]].switzerland,
    syriaColor: data[selectArray[passports]].syria,
    taiwanColor: data[selectArray[passports]].taiwan,
    tajikistanColor: data[selectArray[passports]].tajikistan,
    tanzaniaColor: data[selectArray[passports]].tanzania,
    thailandColor: data[selectArray[passports]].thailand,
    togoColor: data[selectArray[passports]].togo,
    tokelauColor: data[selectArray[passports]].tokelau,
    tongaColor: data[selectArray[passports]].tonga,
    transnistriaColor: data[selectArray[passports]].transnistria,
    trinidadAndTobagoColor: data[selectArray[passports]].trinidadAndTobago,
    tunisiaColor: data[selectArray[passports]].tunisia,
    turkeyColor: data[selectArray[passports]].turkey,
    turkmenistanColor: data[selectArray[passports]].turkmenistan,
    turksAndCaicosColor: data[selectArray[passports]].turksAndCaicos,
    tuvaluColor: data[selectArray[passports]].tuvalu,
    ugandaColor: data[selectArray[passports]].uganda,
    ukraineColor: data[selectArray[passports]].ukraine,
    unitedArabEmiratesColor: data[selectArray[passports]].unitedArabEmirates,
    unitedKingdomColor: data[selectArray[passports]].unitedKingdom,
    unitedStatesColor: data[selectArray[passports]].unitedStates,
    unitedStatesVirginIslandsColor: data[selectArray[passports]].unitedStatesVirginIslands,
    uruguayColor: data[selectArray[passports]].uruguay,
    uzbekistanColor: data[selectArray[passports]].uzbekistan,
    vanuatuColor: data[selectArray[passports]].vanuatu,
    vaticanCityColor: data[selectArray[passports]].vaticanCity,
    venezuelaColor: data[selectArray[passports]].venezuela,
    vietnamColor: data[selectArray[passports]].vietnam,
    wallisAndFutunaColor: data[selectArray[passports]].wallisAndFutuna,
    westernSaharaColor: data[selectArray[passports]].westernSahara,
    yemenColor: data[selectArray[passports]].yemen,
    zambiaColor: data[selectArray[passports]].zambia,
    zimbabweColor: data[selectArray[passports]].zimbabwe
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
})}