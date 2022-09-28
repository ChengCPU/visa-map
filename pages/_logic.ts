const colors = [
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
    "congoColor",
    "cookIslandsColor",
    "costaRicaColor",
    "croatiaColor",
    "cubaColor",
    "curacaoColor",
    "cyprusColor",
    "czechRepublicColor",
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

export const mainCalculation = (country, assignedColors, setAssignedColors, select, priority, setPriority, rerender, setRerender, selectArray) => {
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
        congoColor: data[country].congo,
        cookIslandsColor: data[country].cookIslands,
        costaRicaColor: data[country].costaRica,
        croatiaColor: data[country].croatia,
        cubaColor: data[country].cuba,
        curacaoColor: data[country].curacao,
        cyprusColor: data[country].cyprus,
        czechRepublicColor: data[country].czechRepublic,
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
                    default: if(OECSfom == assignedColors.length - 1) setPriority(priority, priority[colors[sub]] = "rgb(255,145,0)")}}
            break;
            case "rgb(255,179,191)": //freedom of movement (light pink)
                for(let fom = 0; fom < assignedColors.length; fom++) {
                    switch(assignedColors[fom][colors[sub]]) {
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                    default: if(fom == assignedColors.length - 1) setPriority(priority, priority[colors[sub]] = "rgb(255,179,191)")}}
            break;
            case "rgb(50,205,50)": //visa free (green)
                for(let vf = 0; vf < assignedColors.length; vf++) {
                    switch(assignedColors[vf][colors[sub]]) {
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                        case "rgb(255,179,191)": break; //freedom of movement (light pink)
                    default: if(vf == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(50,205,50)")}}}
            break;
            case "rgb(161,224,123)": //visa on arrival/evisa (light green)
                for(let voaEv = 0; voaEv < assignedColors.length; voaEv++) {
                    switch(assignedColors[voaEv][colors[sub]]) {
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                        case "rgb(255,179,191)": break; //freedom of movement (light pink)
                        case "rgb(50,205,50)": break; //visa free (green)
                    default: if(voaEv == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(161,224,123)")}}}
            break;
            case "rgb(255,255,92)": //visa on arrival (yellow)
                for(let voa = 0; voa < assignedColors.length; voa++) {
                    switch(assignedColors[voa][colors[sub]]) {
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
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
            case "rgb(200,200,200)": //simplified visa (light grey)
                for(let sv = 0; sv < assignedColors.length; sv++) {
                    switch(assignedColors[sv][colors[sub]]) {
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                        case "rgb(255,179,191)": break; //freedom of movement (light pink)
                        case "rgb(50,205,50)": break; //visa free (green)
                        case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                        case "rgb(255,255,92)": break; //visa on arrival (yellow)
                        case "rgb(135,206,250)": break; //evisa (blue)
                    default: if(sv == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(200,200,200)")}}}
            break;
            case "rgb(0,0,0)": //confirmation required (black)
                for(let cr = 0; cr < assignedColors.length; cr++) {
                    switch(assignedColors[cr][colors[sub]]) {
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                        case "rgb(255,179,191)": break; //freedom of movement (light pink)
                        case "rgb(50,205,50)": break; //visa free (green)
                        case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                        case "rgb(255,255,92)": break; //visa on arrival (yellow)
                        case "rgb(135,206,250)": break; //evisa (blue)
                        case "rgb(200,200,200)": break; //simplified visa (light grey)
                        case "rgb(150,150,150)": //visa required
                            for(let crSub = 0; crSub < selectArray.length; crSub++) {
                                switch(selectArray[crSub]) {
                                    case "afghanistan": setPriority(priority, priority[colors[sub]] = "rgb(0,0,0)"); break;
                                    case "indonesia": console.log('indonesia'); break;
                                    case "iran": console.log('iran'); break;
                                    case "iraq": console.log('iraq'); break;
                                    case "jordan": console.log('jordan'); break;
                                    case "kuwait": console.log('kuwait'); break;
                                    case "lebanon": console.log('lebanon'); break;
                                    case "libya": console.log('libya'); break;
                                    case "malaysia": console.log('malaysia'); break;
                                    case "mauritania": console.log('mauritania'); break;
                                    case "northKorea": console.log('northKorea'); break;
                                    case "oman": console.log('oman'); break;
                                    case "pakistan": console.log('pakistan'); break;
                                    case "qatar": console.log('qatar'); break;
                                    case "saudiArabia": console.log('saudiArabia'); break;
                                    case "somalia": console.log('somalia'); break;
                                    case "sudan": console.log('sudan'); break;
                                    case "syria": console.log('syria'); break;
                                    case "tunisia": console.log('tunisia'); break;
                                    case "yemen": console.log('yemen'); break;
                                    case null: break;
                                default: setPriority(priority, priority[colors[sub]] = "rgb(150,150,150)"); crSub = selectArray.length}}}}
            break;
            case "unrecognised": //passport not recognised
                for(let nr = 0; nr < assignedColors.length; nr++) {
                    switch(assignedColors[nr][colors[sub]]) {
                        case "rgb(255,0,0)": break; //permit required (red)
                        case "rgb(255,20,147)": break; //home country (pink)
                        case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                        case "rgb(255,179,191)": break; //freedom of movement (light pink)
                        case "rgb(50,205,50)": break; //visa free (green)
                        case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                        case "rgb(255,255,92)": break; //visa on arrival (yellow)
                        case "rgb(135,206,250)": break; //evisa (blue)
                        case "rgb(200,200,200)": break; //simplified visa (light grey)
                    default: if(nr == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(0,0,0)")}}}
            break;
            }
        }
    }
    setRerender(!rerender)
    })
}
export const subCalculation = (selectArray, assignedColors, setAssignedColors, priority, setPriority, rerender, setRerender) => {
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
                congoColor: data[selectArray[passports]].congo,
                cookIslandsColor: data[selectArray[passports]].cookIslands,
                costaRicaColor: data[selectArray[passports]].costaRica,
                croatiaColor: data[selectArray[passports]].croatia,
                cubaColor: data[selectArray[passports]].cuba,
                curacaoColor: data[selectArray[passports]].curacao,
                cyprusColor: data[selectArray[passports]].cyprus,
                czechRepublicColor: data[selectArray[passports]].czechRepublic,
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
            for(let main = 0; main < assignedColors.length; main++) {
                for(let sub = 0; sub < colors.length; sub++) {
                    switch(assignedColors[main][colors[sub]]) {
                    case "rgb(255,0,0)": setPriority(priority, priority[colors[sub]] = "rgb(255,0,0)"); break; //permit required (red)
                    case "rgb(255,20,147)": setPriority(priority, priority[colors[sub]] = "rgb(255,20,147)"); break; //home country (pink)
                    case "rgb(255,145,0)": //OECS freedom of movement
                        for(let OECSfom = 0; OECSfom < assignedColors.length; OECSfom++) {
                            switch(assignedColors[OECSfom][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                            default: if(OECSfom == assignedColors.length - 1) setPriority(priority, priority[colors[sub]] = "rgb(255,145,0)")}}
                    break;
                    case "rgb(255,179,191)": //freedom of movement (light pink)
                        for(let fom = 0; fom < assignedColors.length; fom++) {
                            switch(assignedColors[fom][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                            default: if(fom == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(255,179,191)")}}}
                    break;
                    case "rgb(50,205,50)": //visa free (green)
                        for(let vf = 0; vf < assignedColors.length; vf++) {
                            switch(assignedColors[vf][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                            default: if(vf == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(50,205,50)")}}}
                    break;
                    case "rgb(161,224,123)": //visa on arrival/evisa (light green)
                        for(let voaEv = 0; voaEv < assignedColors.length; voaEv++) {
                            switch(assignedColors[voaEv][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                            default: if(voaEv == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(161,224,123)")}}}
                    break;
                    case "rgb(255,255,92)": //visa on arrival (yellow)
                        for(let voa = 0; voa < assignedColors.length; voa++) {
                            switch(assignedColors[voa][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                                case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                            default: if(voa == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(255,255,92)")}}}
                    break;
                    case "rgb(135,206,250)": //evisa (blue)
                        for(let ev = 0; ev < assignedColors.length; ev++) {
                            switch(assignedColors[ev][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                                case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                                case "rgb(255,255,92)": //visa on arrival (yellow)
                                    for(let voaEvCalc = 0; voaEvCalc < assignedColors.length; voaEvCalc++) {
                                        switch(assignedColors[voaEvCalc][colors[sub]]) {
                                            case "rgb(255,20,147)": break; //home country (pink)
                                            case "rgb(255,145,0)": break; //OECS freedom of movement
                                            case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                            case "rgb(50,205,50)": break; //visa free (green)
                                        default: if(voaEvCalc == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(161,224,123)")}}}
                            default: if(ev == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(135,206,250)")}}}
                    break;
                    case "rgb(200,200,200)": //simplified visa (light grey)
                        for(let sv = 0; sv < assignedColors.length; sv++) {
                            switch(assignedColors[sv][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                                case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                                case "rgb(255,255,92)": break; //visa on arrival (yellow)
                                case "rgb(135,206,250)": break; //evisa (blue)
                            default: if(sv == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(200,200,200)")}}}
                    break;
                    case "rgb(0,0,0)": //confirmation required (black)
                        for(let cr = 0; cr < assignedColors.length; cr++) {
                            switch(assignedColors[cr][colors[sub]]) {
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                                case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                                case "rgb(255,255,92)": break; //visa on arrival (yellow)
                                case "rgb(135,206,250)": break; //evisa (blue)
                                case "rgb(200,200,200)": break; //simplified visa (light grey)
                                case "rgb(150,150,150)": 
                                    for(let crSub = 0; crSub < selectArray.length; crSub++) {
                                        switch(selectArray[crSub]) {
                                            case "afghanistan": setPriority(priority, priority[colors[sub]] = "rgb(0,0,0)"); break;
                                            case "indonesia": console.log('indonesia'); break;
                                            case "iran": console.log('iran'); break;
                                            case "iraq": console.log('iraq'); break;
                                            case "jordan": console.log('jordan'); break;
                                            case "kuwait": console.log('kuwait'); break;
                                            case "lebanon": console.log('lebanon'); break;
                                            case "libya": console.log('libya'); break;
                                            case "malaysia": console.log('malaysia'); break;
                                            case "mauritania": console.log('mauritania'); break;
                                            case "northKorea": console.log('northKorea'); break;
                                            case "oman": console.log('oman'); break;
                                            case "pakistan": console.log('pakistan'); break;
                                            case "qatar": console.log('qatar'); break;
                                            case "saudiArabia": console.log('saudiArabia'); break;
                                            case "somalia": console.log('somalia'); break;
                                            case "sudan": console.log('sudan'); break;
                                            case "syria": console.log('syria'); break;
                                            case "tunisia": console.log('tunisia'); break;
                                            case "yemen": console.log('yemen'); break;
                                            case null: break;
                                        default: setPriority(priority, priority[colors[sub]] = "rgb(150,150,150)"); crSub = selectArray.length}}}}
                    break;
                    case "unrecognised": //passport not recognised
                        for(let nr = 0; nr < assignedColors.length; nr++) {
                            switch(assignedColors[nr][colors[sub]]) {
                                case "rgb(255,0,0)": break; //permit required (red)
                                case "rgb(255,20,147)": break; //home country (pink)
                                case "rgb(255,145,0)": break; //OECS freedom of movement (orange)
                                case "rgb(255,179,191)": break; //freedom of movement (light pink)
                                case "rgb(50,205,50)": break; //visa free (green)
                                case "rgb(161,224,123)": break; //visa on arrival/evisa (light green)
                                case "rgb(255,255,92)": break; //visa on arrival (yellow)
                                case "rgb(135,206,250)": break; //evisa (blue)
                                case "rgb(200,200,200)": break; //simplified visa (light grey)
                            default: if(nr == assignedColors.length - 1) {setPriority(priority, priority[colors[sub]] = "rgb(0,0,0)")}}}
                    break;
                    }
                }
            }
        }
    }
    setRerender(!rerender)
    })
}
export const selectArrayCalculation = (selectArray, setSelectArray, select) => {
    setSelectArray(selectArray, selectArray[select.selection] = select.passport);
}
export const reset = (setAssignedColors, setPriority, secondToggle, setSecondToggle) => {
    const color = {
        abkhaziaColor: "rgb(150,150,150)",
        afghanistanColor: "rgb(150,150,150)",
        albaniaColor: "rgb(150,150,150)",
        algeriaColor: "rgb(150,150,150)",
        americanSamoaColor: "rgb(150,150,150)",
        andorraColor: "rgb(150,150,150)",
        angolaColor: "rgb(150,150,150)",
        anguillaColor: "rgb(150,150,150)",
        antiguaAndBarbudaColor: "rgb(150,150,150)",
        argentinaColor: "rgb(150,150,150)",
        armeniaColor: "rgb(150,150,150)",
        arubaColor: "rgb(150,150,150)",
        australiaColor: "rgb(150,150,150)",
        austriaColor: "rgb(150,150,150)",
        azerbaijanColor: "rgb(150,150,150)",
        bahamasColor: "rgb(150,150,150)",
        bahrainColor: "rgb(150,150,150)",
        bangladeshColor: "rgb(150,150,150)",
        barbadosColor: "rgb(150,150,150)",
        belarusColor: "rgb(150,150,150)",
        belgiumColor: "rgb(150,150,150)",
        belizeColor: "rgb(150,150,150)",
        beninColor: "rgb(150,150,150)",
        bermudaColor: "rgb(150,150,150)",
        bhutanColor: "rgb(150,150,150)",
        boliviaColor: "rgb(150,150,150)",
        bonaireColor: "rgb(150,150,150)",
        bosniaAndHerzegovinaColor: "rgb(150,150,150)",
        botswanaColor: "rgb(150,150,150)",
        bouvetIslandColor: "rgb(150,150,150)",
        brazilColor: "rgb(150,150,150)",
        britishIndianOceanTerritory: "rgb(150,150,150)",
        britishVirginIslandsColor: "rgb(150,150,150)",
        bruneiColor: "rgb(150,150,150)",
        bulgariaColor: "rgb(150,150,150)",
        burkinaFasoColor: "rgb(150,150,150)",
        burundiColor: "rgb(150,150,150)",
        cambodiaColor: "rgb(150,150,150)",
        cameroonColor: "rgb(150,150,150)",
        canadaColor: "rgb(150,150,150)",
        capeVerdeColor: "rgb(150,150,150)",
        caymanIslandsColor: "rgb(150,150,150)",
        centralAfricanRepublicColor: "rgb(150,150,150)",
        chadColor: "rgb(150,150,150)",
        chileColor: "rgb(150,150,150)",
        chinaColor: "rgb(150,150,150)",
        colombiaColor: "rgb(150,150,150)",
        comorosColor: "rgb(150,150,150)",
        congoColor: "rgb(150,150,150)",
        cookIslandsColor: "rgb(150,150,150)",
        costaRicaColor: "rgb(150,150,150)",
        croatiaColor: "rgb(150,150,150)",
        cubaColor: "rgb(150,150,150)",
        curacaoColor: "rgb(150,150,150)",
        cyprusColor: "rgb(150,150,150)",
        czechRepublicColor: "rgb(150,150,150)",
        denmarkColor: "rgb(150,150,150)",
        djiboutiColor: "rgb(150,150,150)",
        dominicaColor: "rgb(150,150,150)",
        dominicanRepublicColor: "rgb(150,150,150)",
        eastTimorColor: "rgb(150,150,150)",
        ecuadorColor: "rgb(150,150,150)",
        egyptColor: "rgb(150,150,150)",
        elSalvadorColor: "rgb(150,150,150)",
        equatorialGuineaColor: "rgb(150,150,150)",
        eritreaColor: "rgb(150,150,150)",
        estoniaColor: "rgb(150,150,150)",
        eswatiniColor: "rgb(150,150,150)",
        ethiopiaColor: "rgb(150,150,150)",
        falklandIslandsColor: "rgb(150,150,150)",
        faroeIslandsColor: "rgb(150,150,150)",
        fijiColor: "rgb(150,150,150)",
        finlandColor: "rgb(150,150,150)",
        franceColor: "rgb(150,150,150)",
        frenchGuianaColor: "rgb(150,150,150)",
        frenchPolynesiaColor: "rgb(150,150,150)",
        gabonColor: "rgb(150,150,150)",
        gambiaColor: "rgb(150,150,150)",
        georgiaColor: "rgb(150,150,150)",
        germanyColor: "rgb(150,150,150)",
        ghanaColor: "rgb(150,150,150)",
        gibraltarColor: "rgb(150,150,150)",
        greeceColor: "rgb(150,150,150)",
        greenlandColor: "rgb(150,150,150)",
        grenadaColor: "rgb(150,150,150)",
        guadeloupeColor: "rgb(150,150,150)",
        guamColor: "rgb(150,150,150)",
        guatemalaColor: "rgb(150,150,150)",
        guernseyColor: "rgb(150,150,150)",
        guineaColor: "rgb(150,150,150)",
        guineaBissauColor: "rgb(150,150,150)",
        guyanaColor: "rgb(150,150,150)",
        haitiColor: "rgb(150,150,150)",
        heardIslandAndMcDonaldIslandsColor: "rgb(150,150,150)",
        hondurasColor: "rgb(150,150,150)",
        hongKongColor: "rgb(150,150,150)",
        hungaryColor: "rgb(150,150,150)",
        icelandColor: "rgb(150,150,150)",
        indiaColor: "rgb(150,150,150)",
        indonesiaColor: "rgb(150,150,150)",
        iranColor: "rgb(150,150,150)",
        iraqColor: "rgb(150,150,150)",
        irelandColor: "rgb(150,150,150)",
        isleOfManColor: "rgb(150,150,150)",
        israelColor: "rgb(150,150,150)",
        italyColor: "rgb(150,150,150)",
        ivoryCoastColor: "rgb(150,150,150)",
        jamaicaColor: "rgb(150,150,150)",
        janMayenColor: "rgb(150,150,150)",
        japanColor: "rgb(150,150,150)",
        jerseyColor: "rgb(150,150,150)",
        jordanColor: "rgb(150,150,150)",
        kazakhstanColor: "rgb(150,150,150)",
        kenyaColor: "rgb(150,150,150)",
        kiribatiColor: "rgb(150,150,150)",
        kosovoColor: "rgb(150,150,150)",
        kuwaitColor: "rgb(150,150,150)",
        kyrgyzstanColor: "rgb(150,150,150)",
        laosColor: "rgb(150,150,150)",
        latviaColor: "rgb(150,150,150)",
        lebanonColor: "rgb(150,150,150)",
        lesothoColor: "rgb(150,150,150)",
        liberiaColor: "rgb(150,150,150)",
        libyaColor: "rgb(150,150,150)",
        liechtensteinColor: "rgb(150,150,150)",
        lithuaniaColor: "rgb(150,150,150)",
        luxembourgColor: "rgb(150,150,150)",
        macaoColor: "rgb(150,150,150)",
        madagascarColor: "rgb(150,150,150)",
        malawiColor: "rgb(150,150,150)",
        malaysiaColor: "rgb(150,150,150)",
        maldivesColor: "rgb(150,150,150)",
        maliColor: "rgb(150,150,150)",
        maltaColor: "rgb(150,150,150)",
        marshallIslandsColor: "rgb(150,150,150)",
        martiniqueColor: "rgb(150,150,150)",
        mauritaniaColor: "rgb(150,150,150)",
        mauritiusColor: "rgb(150,150,150)",
        mayotteColor: "rgb(150,150,150)",
        mexicoColor: "rgb(150,150,150)",
        micronesiaColor: "rgb(150,150,150)",
        moldovaColor: "rgb(150,150,150)",
        monacoColor: "rgb(150,150,150)",
        mongoliaColor: "rgb(150,150,150)",
        montenegroColor: "rgb(150,150,150)",
        montserratColor: "rgb(150,150,150)",
        moroccoColor: "rgb(150,150,150)",
        mozambiqueColor: "rgb(150,150,150)",
        myanmarColor: "rgb(150,150,150)",
        namibiaColor: "rgb(150,150,150)",
        nauruColor: "rgb(150,150,150)",
        nepalColor: "rgb(150,150,150)",
        netherlandsColor: "rgb(150,150,150)",
        newCaledoniaColor: "rgb(150,150,150)",
        newZealandColor: "rgb(150,150,150)",
        nicaraguaColor: "rgb(150,150,150)",
        nigerColor: "rgb(150,150,150)",
        nigeriaColor: "rgb(150,150,150)",
        niueColor: "rgb(150,150,150)",
        norfolkIslandColor: "rgb(150,150,150)",
        northernCyprusColor: "rgb(150,150,150)",
        northernMarianaIslandsColor: "rgb(150,150,150)",
        northKoreaColor: "rgb(150,150,150)",
        northMacedoniaColor: "rgb(150,150,150)",
        norwayColor: "rgb(150,150,150)",
        omanColor: "rgb(150,150,150)",
        pakistanColor: "rgb(150,150,150)",
        palauColor: "rgb(150,150,150)",
        palestineColor: "rgb(150,150,150)",
        panamaColor: "rgb(150,150,150)",
        papuaNewGuineaColor: "rgb(150,150,150)",
        paraguayColor: "rgb(150,150,150)",
        peruColor: "rgb(150,150,150)",
        philippinesColor: "rgb(150,150,150)",
        pitcairnIslandsColor: "rgb(150,150,150)",
        polandColor: "rgb(150,150,150)",
        portugalColor: "rgb(150,150,150)",
        qatarColor: "rgb(150,150,150)",
        republicOfTheCongoColor: "rgb(150,150,150)",
        reunionColor: "rgb(150,150,150)",
        romaniaColor: "rgb(150,150,150)",
        russiaColor: "rgb(150,150,150)",
        rwandaColor: "rgb(150,150,150)",
        sabaColor: "rgb(150,150,150)",
        saintBarthelemyColor: "rgb(150,150,150)",
        saintHelenaColor: "rgb(150,150,150)",
        saintKittsAndNevisColor: "rgb(150,150,150)",
        saintLuciaColor: "rgb(150,150,150)",
        saintMartinColor: "rgb(150,150,150)",
        saintPierreAndMiquelonColor: "rgb(150,150,150)",
        saintVincentAndTheGrenadinesColor: "rgb(150,150,150)",
        samoaColor: "rgb(150,150,150)",
        sanMarinoColor: "rgb(150,150,150)",
        saoTomeAndPrincipeColor: "rgb(150,150,150)",
        saudiArabiaColor: "rgb(150,150,150)",
        senegalColor: "rgb(150,150,150)",
        serbiaColor: "rgb(150,150,150)",
        seychellesColor: "rgb(150,150,150)",
        sierraLeoneColor: "rgb(150,150,150)",
        singaporeColor: "rgb(150,150,150)",
        sintEustatiusColor: "rgb(150,150,150)",
        sintMaartenColor: "rgb(150,150,150)",
        slovakiaColor: "rgb(150,150,150)",
        sloveniaColor: "rgb(150,150,150)",
        solomonIslandsColor: "rgb(150,150,150)",
        somaliaColor: "rgb(150,150,150)",
        southAfricaColor: "rgb(150,150,150)",
        southGeorgiaAndTheSouthSandwichIslandsColor: "rgb(150,150,150)",
        southKoreaColor: "rgb(150,150,150)",
        southOssetiaColor: "rgb(150,150,150)",
        southSudanColor: "rgb(150,150,150)",
        spainColor: "rgb(150,150,150)",
        sriLankaColor: "rgb(150,150,150)",
        sudanColor: "rgb(150,150,150)",
        surinameColor: "rgb(150,150,150)",
        svalbardColor: "rgb(150,150,150)",
        swedenColor: "rgb(150,150,150)",
        switzerlandColor: "rgb(150,150,150)",
        syriaColor: "rgb(150,150,150)",
        taiwanColor: "rgb(150,150,150)",
        tajikistanColor: "rgb(150,150,150)",
        tanzaniaColor: "rgb(150,150,150)",
        thailandColor: "rgb(150,150,150)",
        togoColor: "rgb(150,150,150)",
        tokelauColor: "rgb(150,150,150)",
        tongaColor: "rgb(150,150,150)",
        transnistriaColor: "rgb(150,150,150)",
        trinidadAndTobagoColor: "rgb(150,150,150)",
        tunisiaColor: "rgb(150,150,150)",
        turkeyColor: "rgb(150,150,150)",
        turkmenistanColor: "rgb(150,150,150)",
        turksAndCaicosColor: "rgb(150,150,150)",
        tuvaluColor: "rgb(150,150,150)",
        ugandaColor: "rgb(150,150,150)",
        ukraineColor: "rgb(150,150,150)",
        unitedArabEmiratesColor: "rgb(150,150,150)",
        unitedKingdomColor: "rgb(150,150,150)",
        unitedStatesColor: "rgb(150,150,150)",
        unitedStatesVirginIslandsColor: "rgb(150,150,150)",
        uruguayColor: "rgb(150,150,150)",
        uzbekistanColor: "rgb(150,150,150)",
        vanuatuColor: "rgb(150,150,150)",
        vaticanCityColor: "rgb(150,150,150)",
        venezuelaColor: "rgb(150,150,150)",
        vietnamColor: "rgb(150,150,150)",
        wallisAndFutunaColor: "rgb(150,150,150)",
        westernSaharaColor: "rgb(150,150,150)",
        yemenColor: "rgb(150,150,150)",
        zambiaColor: "rgb(150,150,150)",
        zimbabweColor: "rgb(150,150,150)"
    }
    setAssignedColors([color,color,color,color,color,color,color,color,color,color,color])
    setPriority(color)
    setSecondToggle(!secondToggle)
}