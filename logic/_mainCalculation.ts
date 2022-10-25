interface Select {selection: number,passport: null | string;}
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

export default function mainCalculation(country:string, assignedColors:object[], setAssignedColors:Function, select:Select, priority:object, setPriority:Function, rerender:boolean, setRerender:Function, selectArray:null | string[]) {
    fetch('visaPolicy.json')
    .then((res) => res.json())
    .then((data) => {
    setAssignedColors(assignedColors, assignedColors[select.selection] = {
        abkhaziaColor: data[country].abkhazia,
        afghanistanColor: data[country].afghanistan,
        albaniaColor: data[country].albania,
        algeriaColor: data[country].algeria,
        americanSamoaColor: data[country].americanSamoa,
        andorraColor: data[country].andorra,
        angolaColor: data[country].angola,
        anguillaColor: data[country].anguilla,
        antiguaAndBarbudaColor: data[country].antiguaAndBarbuda,
        argentinaColor: data[country].argentina,
        armeniaColor: data[country].armenia,
        arubaColor: data[country].aruba,
        australiaColor: data[country].australia,
        austriaColor: data[country].austria,
        azerbaijanColor: data[country].azerbaijan,
        bahamasColor: data[country].bahamas,
        bahrainColor: data[country].bahrain,
        bangladeshColor: data[country].bangladesh,
        barbadosColor: data[country].barbados,
        belarusColor: data[country].belarus,
        belgiumColor: data[country].belgium,
        belizeColor: data[country].belize,
        beninColor: data[country].benin,
        bermudaColor: data[country].bermuda,
        bhutanColor: data[country].bhutan,
        boliviaColor: data[country].bolivia,
        bonaireColor: data[country].bonaire,
        bosniaAndHerzegovinaColor: data[country].bosniaAndHerzegovina,
        botswanaColor: data[country].botswana,
        bouvetIslandColor: data[country].bouvetIsland,
        brazilColor: data[country].brazil,
        britishIndianOceanTerritory: data[country].britishIndianOceanTerritory,
        britishVirginIslandsColor: data[country].britishVirginIslands,
        bruneiColor: data[country].brunei,
        bulgariaColor: data[country].bulgaria,
        burkinaFasoColor: data[country].burkinaFaso,
        burundiColor: data[country].burundi,
        cambodiaColor: data[country].cambodia,
        cameroonColor: data[country].cameroon,
        canadaColor: data[country].canada,
        capeVerdeColor: data[country].capeVerde,
        caymanIslandsColor: data[country].caymanIslands,
        centralAfricanRepublicColor: data[country].centralAfricanRepublic,
        chadColor: data[country].chad,
        chileColor: data[country].chile,
        chinaColor: data[country].china,
        colombiaColor: data[country].colombia,
        comorosColor: data[country].comoros,
        cookIslandsColor: data[country].cookIslands,
        costaRicaColor: data[country].costaRica,
        croatiaColor: data[country].croatia,
        cubaColor: data[country].cuba,
        curacaoColor: data[country].curacao,
        cyprusColor: data[country].cyprus,
        czechRepublicColor: data[country].czechRepublic,
        democraticRepublicOfTheCongoColor: data[country].democraticRepublicOfTheCongo,
        denmarkColor: data[country].denmark,
        djiboutiColor: data[country].djibouti,
        dominicaColor: data[country].dominica,
        dominicanRepublicColor: data[country].dominicanRepublic,
        eastTimorColor: data[country].eastTimor,
        ecuadorColor: data[country].ecuador,
        egyptColor: data[country].egypt,
        elSalvadorColor: data[country].elSalvador,
        equatorialGuineaColor: data[country].equatorialGuinea,
        eritreaColor: data[country].eritrea,
        estoniaColor: data[country].estonia,
        eswatiniColor: data[country].eswatini,
        ethiopiaColor: data[country].ethiopia,
        falklandIslandsColor: data[country].falklandIslands,
        faroeIslandsColor: data[country].faroeIslands,
        fijiColor: data[country].fiji,
        finlandColor: data[country].finland,
        franceColor: data[country].france,
        frenchGuianaColor: data[country].frenchGuiana,
        frenchPolynesiaColor: data[country].frenchPolynesia,
        gabonColor: data[country].gabon,
        gambiaColor: data[country].gambia,
        georgiaColor: data[country].georgia,
        germanyColor: data[country].germany,
        ghanaColor: data[country].ghana,
        gibraltarColor: data[country].gibraltar,
        greeceColor: data[country].greece,
        greenlandColor: data[country].greenland,
        grenadaColor: data[country].grenada,
        guadeloupeColor: data[country].guadeloupe,
        guamColor: data[country].guam,
        guatemalaColor: data[country].guatemala,
        guernseyColor: data[country].guernsey,
        guineaColor: data[country].guinea,
        guineaBissauColor: data[country].guineaBissau,
        guyanaColor: data[country].guyana,
        haitiColor: data[country].haiti,
        heardIslandAndMcDonaldIslandsColor: data[country].heardIslandAndMcDonaldIslands,
        hondurasColor: data[country].honduras,
        hongKongColor: data[country].hongKong,
        hungaryColor: data[country].hungary,
        icelandColor: data[country].iceland,
        indiaColor: data[country].india,
        indonesiaColor: data[country].indonesia,
        iranColor: data[country].iran,
        iraqColor: data[country].iraq,
        irelandColor: data[country].ireland,
        isleOfManColor: data[country].isleOfMan,
        israelColor: data[country].israel,
        italyColor: data[country].italy,
        ivoryCoastColor: data[country].ivoryCoast,
        jamaicaColor: data[country].jamaica,
        janMayenColor: data[country].janMayen,
        japanColor: data[country].japan,
        jerseyColor: data[country].jersey,
        jordanColor: data[country].jordan,
        kazakhstanColor: data[country].kazakhstan,
        kenyaColor: data[country].kenya,
        kiribatiColor: data[country].kiribati,
        kosovoColor: data[country].kosovo,
        kuwaitColor: data[country].kuwait,
        kyrgyzstanColor: data[country].kyrgyzstan,
        laosColor: data[country].laos,
        latviaColor: data[country].latvia,
        lebanonColor: data[country].lebanon,
        lesothoColor: data[country].lesotho,
        liberiaColor: data[country].liberia,
        libyaColor: data[country].libya,
        liechtensteinColor: data[country].liechtenstein,
        lithuaniaColor: data[country].lithuania,
        luxembourgColor: data[country].luxembourg,
        macaoColor: data[country].macao,
        madagascarColor: data[country].madagascar,
        malawiColor: data[country].malawi,
        malaysiaColor: data[country].malaysia,
        maldivesColor: data[country].maldives,
        maliColor: data[country].mali,
        maltaColor: data[country].malta,
        marshallIslandsColor: data[country].marshallIslands,
        martiniqueColor: data[country].martinique,
        mauritaniaColor: data[country].mauritania,
        mauritiusColor: data[country].mauritius,
        mayotteColor: data[country].mayotte,
        mexicoColor: data[country].mexico,
        micronesiaColor: data[country].micronesia,
        moldovaColor: data[country].moldova,
        monacoColor: data[country].monaco,
        mongoliaColor: data[country].mongolia,
        montenegroColor: data[country].montenegro,
        montserratColor: data[country].montserrat,
        moroccoColor: data[country].morocco,
        mozambiqueColor: data[country].mozambique,
        myanmarColor: data[country].myanmar,
        namibiaColor: data[country].namibia,
        nauruColor: data[country].nauru,
        nepalColor: data[country].nepal,
        netherlandsColor: data[country].netherlands,
        newCaledoniaColor: data[country].newCaledonia,
        newZealandColor: data[country].newZealand,
        nicaraguaColor: data[country].nicaragua,
        nigerColor: data[country].niger,
        nigeriaColor: data[country].nigeria,
        niueColor: data[country].niue,
        norfolkIslandColor: data[country].norfolkIsland,
        northernCyprusColor: data[country].northernCyprus,
        northernMarianaIslandsColor: data[country].northernMarianaIslands,
        northKoreaColor: data[country].northKorea,
        northMacedoniaColor: data[country].northMacedonia,
        norwayColor: data[country].norway,
        omanColor: data[country].oman,
        pakistanColor: data[country].pakistan,
        palauColor: data[country].palau,
        palestineColor: data[country].palestine,
        panamaColor: data[country].panama,
        papuaNewGuineaColor: data[country].papuaNewGuinea,
        paraguayColor: data[country].paraguay,
        peruColor: data[country].peru,
        philippinesColor: data[country].philippines,
        pitcairnIslandsColor: data[country].pitcairnIslands,
        polandColor: data[country].poland,
        portugalColor: data[country].portugal,
        qatarColor: data[country].qatar,
        republicOfTheCongoColor: data[country].republicOfTheCongo,
        reunionColor: data[country].reunion,
        romaniaColor: data[country].romania,
        russiaColor: data[country].russia,
        rwandaColor: data[country].rwanda,
        sabaColor: data[country].saba,
        saintBarthelemyColor: data[country].saintBarthelemy,
        saintHelenaColor: data[country].saintHelena,
        saintKittsAndNevisColor: data[country].saintKittsAndNevis,
        saintLuciaColor: data[country].saintLucia,
        saintMartinColor: data[country].saintMartin,
        saintPierreAndMiquelonColor: data[country].saintPierreAndMiquelon,
        saintVincentAndTheGrenadinesColor: data[country].saintVincentAndTheGrenadines,
        samoaColor: data[country].samoa,
        sanMarinoColor: data[country].sanMarino,
        saoTomeAndPrincipeColor: data[country].saoTomeAndPrincipe,
        saudiArabiaColor: data[country].saudiArabia,
        senegalColor: data[country].senegal,
        serbiaColor: data[country].serbia,
        seychellesColor: data[country].seychelles,
        sierraLeoneColor: data[country].sierraLeone,
        singaporeColor: data[country].singapore,
        sintEustatiusColor: data[country].sintEustatius,
        sintMaartenColor: data[country].sintMaarten,
        slovakiaColor: data[country].slovakia,
        sloveniaColor: data[country].slovenia,
        solomonIslandsColor: data[country].solomonIslands,
        somaliaColor: data[country].somalia,
        southAfricaColor: data[country].southAfrica,
        southGeorgiaAndTheSouthSandwichIslandsColor: data[country].southGeorgiaAndTheSouthSandwichIslands,
        southKoreaColor: data[country].southKorea,
        southOssetiaColor: data[country].southOssetia,
        southSudanColor: data[country].southSudan,
        spainColor: data[country].spain,
        sriLankaColor: data[country].sriLanka,
        sudanColor: data[country].sudan,
        surinameColor: data[country].suriname,
        svalbardColor: data[country].svalbard,
        swedenColor: data[country].sweden,
        switzerlandColor: data[country].switzerland,
        syriaColor: data[country].syria,
        taiwanColor: data[country].taiwan,
        tajikistanColor: data[country].tajikistan,
        tanzaniaColor: data[country].tanzania,
        thailandColor: data[country].thailand,
        togoColor: data[country].togo,
        tokelauColor: data[country].tokelau,
        tongaColor: data[country].tonga,
        transnistriaColor: data[country].transnistria,
        trinidadAndTobagoColor: data[country].trinidadAndTobago,
        tunisiaColor: data[country].tunisia,
        turkeyColor: data[country].turkey,
        turkmenistanColor: data[country].turkmenistan,
        turksAndCaicosColor: data[country].turksAndCaicos,
        tuvaluColor: data[country].tuvalu,
        ugandaColor: data[country].uganda,
        ukraineColor: data[country].ukraine,
        unitedArabEmiratesColor: data[country].unitedArabEmirates,
        unitedKingdomColor: data[country].unitedKingdom,
        unitedStatesColor: data[country].unitedStates,
        unitedStatesVirginIslandsColor: data[country].unitedStatesVirginIslands,
        uruguayColor: data[country].uruguay,
        uzbekistanColor: data[country].uzbekistan,
        vanuatuColor: data[country].vanuatu,
        vaticanCityColor: data[country].vaticanCity,
        venezuelaColor: data[country].venezuela,
        vietnamColor: data[country].vietnam,
        wallisAndFutunaColor: data[country].wallisAndFutuna,
        westernSaharaColor: data[country].westernSahara,
        yemenColor: data[country].yemen,
        zambiaColor: data[country].zambia,
        zimbabweColor: data[country].zimbabwe
    });
    for(let main = 0; main < assignedColors.length; main++) {
    for(let sub = 0; sub < colors.length; sub++) {
    switch(assignedColors[main][colors[sub]]) {
        case "rgb(255,0,0)": setPriority(priority, priority[colors[sub]] = "rgb(255,0,0)"); break; //permit required (red)
        case "rgb(255,20,147)": setPriority(priority, priority[colors[sub]] = "rgb(255,20,147)"); break; //home country (pink)
        case "rgb(255,145,0)": //OECS freedom of movement (orange)
            for(let OECSfom = 0; OECSfom < assignedColors.length; OECSfom++) {
                switch(assignedColors[OECSfom][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                default: if(OECSfom == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(255,145,0)")}}}
        break;
        case "rgb(0,135,93)": //MERCSOUR freedom of movement (dark green)
            for(let MERCSOURfom = 0; MERCSOURfom < assignedColors.length; MERCSOURfom++) {
                switch(assignedColors[MERCSOURfom][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                default: if(MERCSOURfom == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(0,135,93)")}}}
        break;
        case "rgb(0,51,153)": //EU freedom of movement (dark blue)
            for(let EUfom = 0; EUfom < assignedColors.length; EUfom++) {
                switch(assignedColors[EUfom][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                default: if(EUfom == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(0,51,153)")}}}
        break;
        case "rgb(153,123,61)": //GCC freedom of movement (brown)
            for(let GCCfom = 0; GCCfom < assignedColors.length; GCCfom++) {
                switch(assignedColors[GCCfom][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                default: if(GCCfom == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(153,123,61)")}}}
        break;
        case "rgb(255,179,191)": //freedom of movement (light pink)
            for(let fom = 0; fom < assignedColors.length; fom++) {
                switch(assignedColors[fom][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                    case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                    case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
                    case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
                    case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
                default: if(fom == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(255,179,191)")}}}
        break;
        case "rgb(50,205,50)": //visa free (green)
            for(let vf = 0; vf < assignedColors.length; vf++) {
                switch(assignedColors[vf][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                    case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                    case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
                    case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
                    case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
                    case "rgb(255,179,191)": break; //freedom of movement (light pink)
                default: if(vf == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(50,205,50)")}}}
        break;
        case "rgb(161,224,123)": //visa on arrival/evisa (light green)
            for(let voaEv = 0; voaEv < assignedColors.length; voaEv++) {
                switch(assignedColors[voaEv][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                    case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                    case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
                    case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
                    case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
                    case "rgb(255,179,191)": break; //freedom of movement (light pink)
                    case "rgb(50,205,50)": break; //visa free (green)
                default: if(voaEv == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(161,224,123)")}}}
        break;
        case "rgb(255,255,92)": //visa on arrival (yellow)
            for(let voa = 0; voa < assignedColors.length; voa++) {
                switch(assignedColors[voa][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                    case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                    case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
                    case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
                    case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
                    case "rgb(255,179,191)": break; //freedom of movement (light pink)
                    case "rgb(50,205,50)": break; //visa free (green)
                    case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                default: if(voa == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(255,255,92)")}}}
        break;
        case "rgb(135,206,250)": //evisa (blue)
            for(let ev = 0; ev < assignedColors.length; ev++) {
                switch(assignedColors[ev][colors[sub]]) {
                    case "rgb(255,20,147)": break; //home country (pink)
                    case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                    case "rgb(0,135,93)": break; //MERCSOUR freedom of movement (dark green)
                    case "rgb(0,51,153)": break; //EU freedom of movement (dark blue)
                    case "rgb(153,123,61)": break; //GCC freedom of movement (brown)
                    case "rgb(255,179,191)": break; //freedom of movement (light pink)
                    case "rgb(50,205,50)": break; //visa free (green)
                    case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                    case "rgb(255,255,92)": //visa on arrival (yellow)
                        for(let voaEvCalc = 0; voaEvCalc < assignedColors.length; voaEvCalc++) {
                            switch(assignedColors[voaEvCalc][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                            default: if(voaEvCalc == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(161,224,123)")}}}
                default: if(ev == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(135,206,250)")}}}
        break;
        case "rgb(118,65,171)": //Special permit/police check (purple)
            for(let sppc = 0; sppc < assignedColors.length; sppc++) {
                switch(assignedColors[sppc][colors[sub]]) {
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
                default: if(sppc == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(118,65,171)")}}}
        break;
        case "rgb(200,200,200)": //simplified visa (light grey)
            for(let sv = 0; sv < assignedColors.length; sv++) {
                switch(assignedColors[sv][colors[sub]]) {
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
                default: if(sv == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(200,200,200)")}}}
        break;
        case "rgb(0,0,0)": //confirmation required (black)
            for(let cr = 0; cr < assignedColors.length; cr++) {
                switch(assignedColors[cr][colors[sub]]) {
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
                    case "rgb(200,200,200)": break; //simplified visa (light grey)
                    case "rgb(118,65,171)": break; //Special permit/police check (purple)
                    case "rgb(149,150,150)": setPriority(priority, priority[colors[sub]] = "rgb(0,0,0)"); break;
                    case "rgb(150,150,150)": 
                        for(let crCalc = 0; crCalc < assignedColors.length; crCalc++) {
                            switch(assignedColors[crCalc][colors[sub]]) {
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
                                case "rgb(200,200,200)": break; //simplified visa (light grey)
                            default: if(crCalc == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(150,150,150)")}}}}}
        break;}}}
        setRerender(!rerender)
        })
}