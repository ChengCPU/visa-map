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

export default function percentageCalculation(selectArray:null | string[], assignedColors:any, percentage:any, setPercentage:Function, key:string) {
  let totalCount = 0, visaFreeCount = 0, visaOnArrivalEVisaCount = 0, visaOnArrivalCount = 0, eVisaCount = 0

  switch(key) {
  case 'total':
    for(let selectArrayCalculation = 0; selectArrayCalculation < selectArray.length - 1; selectArrayCalculation++) {
      if(selectArray[selectArrayCalculation] != null && percentage[selectArrayCalculation].total == null) {
        for(let total = 0; total < colors.length; total++) {
          switch(assignedColors[selectArrayCalculation][colors[total]]){
            case 0: totalCount++; break;
            case 2: totalCount++; break;
            case 3: totalCount++; break;
            case 4: totalCount++; break;
            case 5: totalCount++; break;
            case 6: totalCount++; break;
            case 7: totalCount++; break;
            case 8: totalCount++; break;
            case 9: totalCount++; break;
            case 10: totalCount++; break;
            case 11: totalCount++; break;
          }
          if(total == colors.length - 1) {
            setPercentage(percentage, percentage[selectArrayCalculation].total = totalCount)
          }
        }
      }
    }
  break;
  case 'visaFree':
    for(let selectArrayCalculation = 0; selectArrayCalculation < selectArray.length - 1; selectArrayCalculation++) {
      if(selectArray[selectArrayCalculation] != null && percentage[selectArrayCalculation].visaFree == null) {
        for(let visaFree = 0; visaFree < colors.length; visaFree++) {
          switch(assignedColors[selectArrayCalculation][colors[visaFree]]){
            case 0: visaFreeCount++; break;
            case 2: visaFreeCount++; break;
            case 3: visaFreeCount++; break;
            case 4: visaFreeCount++; break;
            case 5: visaFreeCount++; break;
            case 6: visaFreeCount++; break;
            case 7: visaFreeCount++; break;
          }
          if(visaFree == colors.length - 1) {
            setPercentage(percentage, percentage[selectArrayCalculation].visaFree = visaFreeCount)
          }
        }
      }
    }
  break;
  case 'visaOnArrivalEVisa':
    for(let selectArrayCalculation = 0; selectArrayCalculation < selectArray.length - 1; selectArrayCalculation++) {
      if(selectArray[selectArrayCalculation] != null && percentage[selectArrayCalculation].visaOnArrivalEVisa == null) {
        for(let visaOnArrivalEVisa = 0; visaOnArrivalEVisa < colors.length; visaOnArrivalEVisa++) {
          switch(assignedColors[selectArrayCalculation][colors[visaOnArrivalEVisa]]){
            case 8: visaOnArrivalEVisaCount++; break;
          }
          if(visaOnArrivalEVisa == colors.length - 1) {
            setPercentage(percentage, percentage[selectArrayCalculation].visaOnArrivalEVisa = visaOnArrivalEVisaCount)
          }
        }
      }
    }
  break;
  case 'visaOnArrival':
    for(let selectArrayCalculation = 0; selectArrayCalculation < selectArray.length - 1; selectArrayCalculation++) {
      if(selectArray[selectArrayCalculation] != null && percentage[selectArrayCalculation].visaOnArrival == null) {
        for(let visaOnArrival = 0; visaOnArrival < colors.length; visaOnArrival++) {
          switch(assignedColors[selectArrayCalculation][colors[visaOnArrival]]){
            case 9: visaOnArrivalCount++; break;
          }
          if(visaOnArrival == colors.length - 1) {
            setPercentage(percentage, percentage[selectArrayCalculation].visaOnArrival = visaOnArrivalCount)
          }
        }
      }
    }
  break;
  case 'eVisa':
    for(let selectArrayCalculation = 0; selectArrayCalculation < selectArray.length - 1; selectArrayCalculation++) {
      if(selectArray[selectArrayCalculation] != null && percentage[selectArrayCalculation].eVisa == null) {
        for(let eVisa = 0; eVisa < colors.length; eVisa++) {
          switch(assignedColors[selectArrayCalculation][colors[eVisa]]){
            case 10: eVisaCount++; break;
          }
          if(eVisa == colors.length - 1) {
            setPercentage(percentage, percentage[selectArrayCalculation].eVisa = eVisaCount)
          }
        }
      }
    }
  }
  
}