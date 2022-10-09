import { useState, useEffect } from 'react';
import { ColorContext } from '../components/context/ColorContext';
import { PassportContext } from '../components/context/PassportContext';
import { Drawer } from '@mui/material';
import selectArrayCalculation from '../logic/_selectArrayCalculation';
import reset from '../logic/_reset';
import mainCalculation from '../logic/_mainCalculation';
import subCalculation from '../logic/_subCalculation';
import Map from '../components/Map/Map';
import Selector from '../components/Selector';
import Head from 'next/head';
//passport imports
import abkhazia from '/public/passports/abkhazia.png';
import afghanistan from '/public/passports/afghanistan.png';
import albania from '/public/passports/albania.png'
import algeria from '/public/passports/algeria.png';
import andorra from '/public/passports/andorra.png'
import angola from '/public/passports/angola.png';
import anguilla from '/public/passports/anguilla.png';
import antiguaAndBarbuda from '/public/passports/antiguaAndBarbuda.png';
import argentina from '/public/passports/argentina.png';
import armenia from '/public/passports/armenia.png';
import australia from '/public/passports/australia.png';
import austria from '/public/passports/austria.png';
import azerbaijan from '/public/passports/azerbaijan.png';
import bahamas from '/public/passports/bahamas.png';
import bahrain from '/public/passports/bahrain.png';
import bangladesh from '/public/passports/bangladesh.png';
import barbados from '/public/passports/barbados.png';
import belarus from '/public/passports/belarus.png';
import belgium from '/public/passports/belgium.png';
import belize from '/public/passports/belize.png';
import benin from '/public/passports/benin.png';
import bermuda from '/public/passports/bermuda.png';
import bhutan from '/public/passports/bhutan.png';
import bolivia from '/public/passports/bolivia.png';
import bosniaAndHerzegovina from '/public/passports/bosniaAndHerzegovina.png';
import botswana from '/public/passports/botswana.png';
import brazil from '/public/passports/brazil.png';
import britishVirginIslands from '/public/passports/britishVirginIslands.png';
import brunei from '/public/passports/brunei.png';
import bulgaria from '/public/passports/bulgaria.png';
import burkinaFaso from '/public/passports/burkinaFaso.png';
import burundi from '/public/passports/burundi.png';
import cambodia from '/public/passports/cambodia.png';
import cameroon from '/public/passports/cameroon.png';
import canada from '/public/passports/canada.png';
import capeVerde from '/public/passports/capeVerde.png';
import caymanIslands from '/public/passports/caymanIslands.png';
import centralAfricanRepublic from '/public/passports/centralAfricanRepublic.png';
import chad from '/public/passports/chad.png';
import chile from '/public/passports/chile.png';
import china from '/public/passports/china.png';
import colombia from '/public/passports/colombia.png';
import comoros from '/public/passports/comoros.png';
import costaRica from '/public/passports/costaRica.png';
import croatia from '/public/passports/croatia.png';
import cuba from '/public/passports/cuba.png';
import cyprus from '/public/passports/cyprus.png';
import czechRepublic from '/public/passports/czechRepublic.png';
import democraticRepublicOfTheCongo from '/public/passports/democraticRepublicOfTheCongo.png';
import eastTimor from '/public/passports/eastTimor.png';
import denmark from '/public/passports/denmark.png';
import djibouti from '/public/passports/djibouti.png';
import dominica from '/public/passports/dominica.png';
import dominicanRepublic from '/public/passports/dominicanRepublic.png';
import ecuador from '/public/passports/ecuador.png';
import egypt from '/public/passports/egypt.png';
import elSalvador from '/public/passports/elSalvador.png';
import equatorialGuinea from '/public/passports/equatorialGuinea.png';
import eritrea from '/public/passports/eritrea.png';
import estonia from '/public/passports/estonia.png';
import eswatini from '/public/passports/eswatini.png';
import ethiopia from '/public/passports/ethiopia.png';
import fiji from '/public/passports/fiji.png';
import finland from '/public/passports/finland.png';
import france from '/public/passports/france.png';
import gabon from '/public/passports/gabon.png';
import gambia from '/public/passports/gambia.png';
import georgia from '/public/passports/georgia.png';
import germany from '/public/passports/germany.png';
import ghana from '/public/passports/ghana.png';
import greece from '/public/passports/greece.png';
import grenada from '/public/passports/grenada.png';
import guatemala from '/public/passports/guatemala.png';
import guinea from '/public/passports/guinea.png';
import guineaBissau from '/public/passports/guineaBissau.png';
import guyana from '/public/passports/guyana.png';
import haiti from '/public/passports/haiti.png';
import honduras from '/public/passports/honduras.png';
import hongKong from '/public/passports/hongKong.png';
import hungary from '/public/passports/hungary.png';
import iceland from '/public/passports/iceland.png';
import india from '/public/passports/india.png';
import indonesia from '/public/passports/indonesia.png';
import iran from '/public/passports/iran.png';
import iraq from '/public/passports/iraq.png';
import ireland from '/public/passports/ireland.png'
import israel from '/public/passports/israel.png';
import italy from '/public/passports/italy.png';
import ivoryCoast from '/public/passports/ivoryCoast.png';
import jamaica from '/public/passports/jamaica.png';
import japan from '/public/passports/japan.png';
import jordan from '/public/passports/jordan.png';
import kazakhstan from '/public/passports/kazakhstan.png';
import kenya from '/public/passports/kenya.png';
import kiribati from '/public/passports/kiribati.png';
import kosovo from '/public/passports/kosovo.png';
import kuwait from '/public/passports/kuwait.png';
import kyrgyzstan from '/public/passports/kyrgyzstan.png';
import laos from '/public/passports/laos.png';
import latvia from '/public/passports/latvia.png';
import lebanon from '/public/passports/lebanon.png';
import lesotho from '/public/passports/lesotho.png';
import liberia from '/public/passports/liberia.png';
import libya from '/public/passports/libya.png';
import liechtenstein from '/public/passports/liechtenstein.png';
import lithuania from '/public/passports/lithuania.png';
import luxembourg from '/public/passports/luxembourg.png';
import macao from '/public/passports/macao.png';
import madagascar from '/public/passports/madagascar.png';
import malawi from '/public/passports/malawi.png';
import malaysia from '/public/passports/malaysia.png';
import maldives from '/public/passports/maldives.png';
import mali from '/public/passports/mali.png';
import malta from '/public/passports/malta.png';
import marshallIslands from '/public/passports/marshallIslands.png';
import mauritania from '/public/passports/mauritania.png';
import mauritius from '/public/passports/mauritius.png';
import mexico from '/public/passports/mexico.png';
import micronesia from '/public/passports/micronesia.png';
import moldova from '/public/passports/moldova.png';
import monaco from '/public/passports/monaco.png';
import mongolia from '/public/passports/mongolia.png';
import montenegro from '/public/passports/montenegro.png';
import montserrat from '/public/passports/montserrat.png';
import morocco from '/public/passports/morocco.png';
import mozambique from '/public/passports/mozambique.png';
import myanmar from '/public/passports/myanmar.png';
import namibia from '/public/passports/namibia.png';
import nauru from '/public/passports/nauru.png';
import nepal from '/public/passports/nepal.png';
import netherlands from '/public/passports/netherlands.png';
import newZealand from '/public/passports/newZealand.png';
import nicaragua from '/public/passports/nicaragua.png';
import niger from '/public/passports/niger.png';
import nigeria from '/public/passports/nigeria.png';
import northKorea from '/public/passports/northKorea.png';
import northMacedonia from '/public/passports/northMacedonia.png';
import norway from '/public/passports/norway.png';
import oman from '/public/passports/oman.png';
import pakistan from '/public/passports/pakistan.png';
import palau from '/public/passports/palau.png';
import palestine from '/public/passports/palestine.png';
import panama from '/public/passports/panama.png';
import papuaNewGuinea from '/public/passports/papuaNewGuinea.png';
import paraguay from '/public/passports/paraguay.png';
import peru from '/public/passports/peru.png';
import philippines from '/public/passports/philippines.png';
import poland from '/public/passports/poland.png';
import portugal from '/public/passports/portugal.png';
import qatar from '/public/passports/qatar.png';
import republicOfTheCongo from '/public/passports/republicOfTheCongo.png';
import romania from '/public/passports/romania.png';
import russia from '/public/passports/russia.png';
import rwanda from '/public/passports/rwanda.png';
import saintHelena from '/public/passports/saintHelena.png';
import saintKittsAndNevis from '/public/passports/saintKittsAndNevis.png';
import saintLucia from '/public/passports/saintLucia.png';
import saintVincentAndTheGrenadines from '/public/passports/saintVincentAndTheGrenadines.png';
import samoa from '/public/passports/samoa.png';
import sanMarino from '/public/passports/sanMarino.png';
import saoTomeAndPrincipe from '/public/passports/saoTomeAndPrincipe.png';
import saudiArabia from '/public/passports/saudiArabia.png';
import senegal from '/public/passports/senegal.png';
import serbia from '/public/passports/serbia.png';
import seychelles from '/public/passports/seychelles.png';
import sierraLeone from '/public/passports/sierraLeone.png';
import singapore from '/public/passports/singapore.png';
import slovakia from '/public/passports/slovakia.png';
import slovenia from '/public/passports/slovenia.png';
import solomonIslands from '/public/passports/solomonIslands.png';
import somalia from '/public/passports/somalia.png';
import southAfrica from '/public/passports/southAfrica.png';
import southKorea from '/public/passports/southKorea.png';
import southOssetia from '/public/passports/southOssetia.png';
import southSudan from '/public/passports/southSudan.png';
import spain from '/public/passports/spain.png';
import sriLanka from '/public/passports/sriLanka.png';
import sudan from '/public/passports/sudan.png';
import suriname from '/public/passports/suriname.png';
import sweden from '/public/passports/sweden.png';
import switzerland from '/public/passports/switzerland.png';
import syria from '/public/passports/syria.png';
import taiwan from '/public/passports/taiwan.png';
import tajikistan from '/public/passports/tajikistan.png';
import tanzania from '/public/passports/tanzania.png';
import thailand from '/public/passports/thailand.png';
import togo from '/public/passports/togo.png';
import tonga from '/public/passports/tonga.png';
import trinidadAndTobago from '/public/passports/trinidadAndTobago.png';
import tunisia from '/public/passports/tunisia.png';
import turkey from '/public/passports/turkey.png';
import turkmenistan from '/public/passports/turkmenistan.png';
import turksAndCaicos from '/public/passports/turksAndCaicos.png';
import tuvalu from '/public/passports/tuvalu.png';
import uganda from '/public/passports/uganda.png';
import ukraine from '/public/passports/ukraine.png';
import unitedArabEmirates from '/public/passports/unitedArabEmirates.png';
import unitedKingdom from '/public/passports/unitedKingdom.png';
import unitedStates from '/public/passports/unitedStates.png';
import uruguay from '/public/passports/uruguay.png';
import uzbekistan from '/public/passports/uzbekistan.png';
import vanuatu from '/public/passports/vanuatu.png';
import vaticanCity from '/public/passports/vaticanCity.png';
import venezuela from '/public/passports/venezuela.png';
import vietnam from '/public/passports/vietnam.png';
import yemen from '/public/passports/yemen.png';
import zambia from '/public/passports/zambia.png';
import zimbabwe from '/public/passports/zimbabwe.png';
const passportsProvider:any = {
  abkhazia,afghanistan,albania,algeria,andorra,angola,anguilla,antiguaAndBarbuda,argentina,armenia,australia,austria,azerbaijan,bahamas,bahrain,bangladesh,barbados,belarus,belgium,belize,benin,bermuda,bhutan,bolivia,bosniaAndHerzegovina,botswana,brazil,britishVirginIslands,brunei,bulgaria,burkinaFaso,burundi,cambodia,cameroon,canada,capeVerde,caymanIslands,centralAfricanRepublic,chad,chile,china,colombia,comoros,costaRica,croatia,cuba,cyprus,czechRepublic,democraticRepublicOfTheCongo,eastTimor,denmark,djibouti,dominica,dominicanRepublic,ecuador,egypt,elSalvador,equatorialGuinea,eritrea,estonia,eswatini,ethiopia,fiji,finland,france,gabon,gambia,georgia,germany,ghana,greece,grenada,guatemala,guinea,guineaBissau,guyana,haiti,honduras,hongKong,hungary,iceland,india,indonesia,iran,iraq,ireland,israel,italy,ivoryCoast,jamaica,japan,jordan,kazakhstan,kenya,kiribati,kosovo,kuwait,kyrgyzstan,laos,latvia,lebanon,lesotho,liberia,libya,liechtenstein,lithuania,luxembourg,macao,madagascar,malawi,malaysia,maldives,mali,malta,marshallIslands,mauritania,mauritius,mexico,micronesia,moldova,monaco,mongolia,montenegro,montserrat,morocco,mozambique,myanmar,namibia,nauru,nepal,netherlands,newZealand,nicaragua,niger,nigeria,northKorea,northMacedonia,norway,oman,pakistan,palau,palestine,panama,papuaNewGuinea,paraguay,peru,philippines,poland,portugal,qatar,republicOfTheCongo,romania,russia,rwanda,saintHelena,saintKittsAndNevis,saintLucia,saintVincentAndTheGrenadines,samoa,sanMarino,saoTomeAndPrincipe,saudiArabia,senegal,serbia,seychelles,sierraLeone,singapore,slovakia,slovenia,solomonIslands,somalia,southAfrica,southKorea,southOssetia,southSudan,spain,sriLanka,sudan,suriname,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,tonga,trinidadAndTobago,tunisia,turkey,turkmenistan,turksAndCaicos,tuvalu,uganda,ukraine,unitedArabEmirates,unitedKingdom,unitedStates,uruguay,uzbekistan,vanuatu,vaticanCity,venezuela,vietnam,yemen,zambia,zimbabwe
}

export default function Home() {
  //base rgb variable used to reset rgb values
  const color:object = {
    abkhaziaColor: "rgb(149,150,150)",
    afghanistanColor: "rgb(149,150,150)",
    albaniaColor: "rgb(149,150,150)",
    algeriaColor: "rgb(149,150,150)",
    americanSamoaColor: "rgb(149,150,150)",
    andorraColor: "rgb(149,150,150)",
    angolaColor: "rgb(149,150,150)",
    anguillaColor: "rgb(149,150,150)",
    antiguaAndBarbudaColor: "rgb(149,150,150)",
    argentinaColor: "rgb(149,150,150)",
    armeniaColor: "rgb(149,150,150)",
    arubaColor: "rgb(149,150,150)",
    australiaColor: "rgb(149,150,150)",
    austriaColor: "rgb(149,150,150)",
    azerbaijanColor: "rgb(149,150,150)",
    bahamasColor: "rgb(149,150,150)",
    bahrainColor: "rgb(149,150,150)",
    bangladeshColor: "rgb(149,150,150)",
    barbadosColor: "rgb(149,150,150)",
    belarusColor: "rgb(149,150,150)",
    belgiumColor: "rgb(149,150,150)",
    belizeColor: "rgb(149,150,150)",
    beninColor: "rgb(149,150,150)",
    bermudaColor: "rgb(149,150,150)",
    bhutanColor: "rgb(149,150,150)",
    boliviaColor: "rgb(149,150,150)",
    bonaireColor: "rgb(149,150,150)",
    bosniaAndHerzegovinaColor: "rgb(149,150,150)",
    botswanaColor: "rgb(149,150,150)",
    bouvetIslandColor: "rgb(149,150,150)",
    brazilColor: "rgb(149,150,150)",
    britishIndianOceanTerritory: "rgb(149,150,150)",
    britishVirginIslandsColor: "rgb(149,150,150)",
    bruneiColor: "rgb(149,150,150)",
    bulgariaColor: "rgb(149,150,150)",
    burkinaFasoColor: "rgb(149,150,150)",
    burundiColor: "rgb(149,150,150)",
    cambodiaColor: "rgb(149,150,150)",
    cameroonColor: "rgb(149,150,150)",
    canadaColor: "rgb(149,150,150)",
    capeVerdeColor: "rgb(149,150,150)",
    caymanIslandsColor: "rgb(149,150,150)",
    centralAfricanRepublicColor: "rgb(149,150,150)",
    chadColor: "rgb(149,150,150)",
    chileColor: "rgb(149,150,150)",
    chinaColor: "rgb(149,150,150)",
    colombiaColor: "rgb(149,150,150)",
    comorosColor: "rgb(149,150,150)",
    cookIslandsColor: "rgb(149,150,150)",
    costaRicaColor: "rgb(149,150,150)",
    croatiaColor: "rgb(149,150,150)",
    cubaColor: "rgb(149,150,150)",
    curacaoColor: "rgb(149,150,150)",
    cyprusColor: "rgb(149,150,150)",
    czechRepublicColor: "rgb(149,150,150)",
    democraticRepublicOfTheCongoColor: "rgb(149,150,150)",
    denmarkColor: "rgb(149,150,150)",
    djiboutiColor: "rgb(149,150,150)",
    dominicaColor: "rgb(149,150,150)",
    dominicanRepublicColor: "rgb(149,150,150)",
    eastTimorColor: "rgb(149,150,150)",
    ecuadorColor: "rgb(149,150,150)",
    egyptColor: "rgb(149,150,150)",
    elSalvadorColor: "rgb(149,150,150)",
    equatorialGuineaColor: "rgb(149,150,150)",
    eritreaColor: "rgb(149,150,150)",
    estoniaColor: "rgb(149,150,150)",
    eswatiniColor: "rgb(149,150,150)",
    ethiopiaColor: "rgb(149,150,150)",
    falklandIslandsColor: "rgb(149,150,150)",
    faroeIslandsColor: "rgb(149,150,150)",
    fijiColor: "rgb(149,150,150)",
    finlandColor: "rgb(149,150,150)",
    franceColor: "rgb(149,150,150)",
    frenchGuianaColor: "rgb(149,150,150)",
    frenchPolynesiaColor: "rgb(149,150,150)",
    gabonColor: "rgb(149,150,150)",
    gambiaColor: "rgb(149,150,150)",
    georgiaColor: "rgb(149,150,150)",
    germanyColor: "rgb(149,150,150)",
    ghanaColor: "rgb(149,150,150)",
    gibraltarColor: "rgb(149,150,150)",
    greeceColor: "rgb(149,150,150)",
    greenlandColor: "rgb(149,150,150)",
    grenadaColor: "rgb(149,150,150)",
    guadeloupeColor: "rgb(149,150,150)",
    guamColor: "rgb(149,150,150)",
    guatemalaColor: "rgb(149,150,150)",
    guernseyColor: "rgb(149,150,150)",
    guineaColor: "rgb(149,150,150)",
    guineaBissauColor: "rgb(149,150,150)",
    guyanaColor: "rgb(149,150,150)",
    haitiColor: "rgb(149,150,150)",
    heardIslandAndMcDonaldIslandsColor: "rgb(149,150,150)",
    hondurasColor: "rgb(149,150,150)",
    hongKongColor: "rgb(149,150,150)",
    hungaryColor: "rgb(149,150,150)",
    icelandColor: "rgb(149,150,150)",
    indiaColor: "rgb(149,150,150)",
    indonesiaColor: "rgb(149,150,150)",
    iranColor: "rgb(149,150,150)",
    iraqColor: "rgb(149,150,150)",
    irelandColor: "rgb(149,150,150)",
    isleOfManColor: "rgb(149,150,150)",
    israelColor: "rgb(149,150,150)",
    italyColor: "rgb(149,150,150)",
    ivoryCoastColor: "rgb(149,150,150)",
    jamaicaColor: "rgb(149,150,150)",
    janMayenColor: "rgb(149,150,150)",
    japanColor: "rgb(149,150,150)",
    jerseyColor: "rgb(149,150,150)",
    jordanColor: "rgb(149,150,150)",
    kazakhstanColor: "rgb(149,150,150)",
    kenyaColor: "rgb(149,150,150)",
    kiribatiColor: "rgb(149,150,150)",
    kosovoColor: "rgb(149,150,150)",
    kuwaitColor: "rgb(149,150,150)",
    kyrgyzstanColor: "rgb(149,150,150)",
    laosColor: "rgb(149,150,150)",
    latviaColor: "rgb(149,150,150)",
    lebanonColor: "rgb(149,150,150)",
    lesothoColor: "rgb(149,150,150)",
    liberiaColor: "rgb(149,150,150)",
    libyaColor: "rgb(149,150,150)",
    liechtensteinColor: "rgb(149,150,150)",
    lithuaniaColor: "rgb(149,150,150)",
    luxembourgColor: "rgb(149,150,150)",
    macaoColor: "rgb(149,150,150)",
    madagascarColor: "rgb(149,150,150)",
    malawiColor: "rgb(149,150,150)",
    malaysiaColor: "rgb(149,150,150)",
    maldivesColor: "rgb(149,150,150)",
    maliColor: "rgb(149,150,150)",
    maltaColor: "rgb(149,150,150)",
    marshallIslandsColor: "rgb(149,150,150)",
    martiniqueColor: "rgb(149,150,150)",
    mauritaniaColor: "rgb(149,150,150)",
    mauritiusColor: "rgb(149,150,150)",
    mayotteColor: "rgb(149,150,150)",
    mexicoColor: "rgb(149,150,150)",
    micronesiaColor: "rgb(149,150,150)",
    moldovaColor: "rgb(149,150,150)",
    monacoColor: "rgb(149,150,150)",
    mongoliaColor: "rgb(149,150,150)",
    montenegroColor: "rgb(149,150,150)",
    montserratColor: "rgb(149,150,150)",
    moroccoColor: "rgb(149,150,150)",
    mozambiqueColor: "rgb(149,150,150)",
    myanmarColor: "rgb(149,150,150)",
    namibiaColor: "rgb(149,150,150)",
    nauruColor: "rgb(149,150,150)",
    nepalColor: "rgb(149,150,150)",
    netherlandsColor: "rgb(149,150,150)",
    newCaledoniaColor: "rgb(149,150,150)",
    newZealandColor: "rgb(149,150,150)",
    nicaraguaColor: "rgb(149,150,150)",
    nigerColor: "rgb(149,150,150)",
    nigeriaColor: "rgb(149,150,150)",
    niueColor: "rgb(149,150,150)",
    norfolkIslandColor: "rgb(149,150,150)",
    northernCyprusColor: "rgb(149,150,150)",
    northernMarianaIslandsColor: "rgb(149,150,150)",
    northKoreaColor: "rgb(149,150,150)",
    northMacedoniaColor: "rgb(149,150,150)",
    norwayColor: "rgb(149,150,150)",
    omanColor: "rgb(149,150,150)",
    pakistanColor: "rgb(149,150,150)",
    palauColor: "rgb(149,150,150)",
    palestineColor: "rgb(149,150,150)",
    panamaColor: "rgb(149,150,150)",
    papuaNewGuineaColor: "rgb(149,150,150)",
    paraguayColor: "rgb(149,150,150)",
    peruColor: "rgb(149,150,150)",
    philippinesColor: "rgb(149,150,150)",
    pitcairnIslandsColor: "rgb(149,150,150)",
    polandColor: "rgb(149,150,150)",
    portugalColor: "rgb(149,150,150)",
    qatarColor: "rgb(149,150,150)",
    republicOfTheCongoColor: "rgb(149,150,150)",
    reunionColor: "rgb(149,150,150)",
    romaniaColor: "rgb(149,150,150)",
    russiaColor: "rgb(149,150,150)",
    rwandaColor: "rgb(149,150,150)",
    sabaColor: "rgb(149,150,150)",
    saintBarthelemyColor: "rgb(149,150,150)",
    saintHelenaColor: "rgb(149,150,150)",
    saintKittsAndNevisColor: "rgb(149,150,150)",
    saintLuciaColor: "rgb(149,150,150)",
    saintMartinColor: "rgb(149,150,150)",
    saintPierreAndMiquelonColor: "rgb(149,150,150)",
    saintVincentAndTheGrenadinesColor: "rgb(149,150,150)",
    samoaColor: "rgb(149,150,150)",
    sanMarinoColor: "rgb(149,150,150)",
    saoTomeAndPrincipeColor: "rgb(149,150,150)",
    saudiArabiaColor: "rgb(149,150,150)",
    senegalColor: "rgb(149,150,150)",
    serbiaColor: "rgb(149,150,150)",
    seychellesColor: "rgb(149,150,150)",
    sierraLeoneColor: "rgb(149,150,150)",
    singaporeColor: "rgb(149,150,150)",
    sintEustatiusColor: "rgb(149,150,150)",
    sintMaartenColor: "rgb(149,150,150)",
    slovakiaColor: "rgb(149,150,150)",
    sloveniaColor: "rgb(149,150,150)",
    solomonIslandsColor: "rgb(149,150,150)",
    somaliaColor: "rgb(149,150,150)",
    southAfricaColor: "rgb(149,150,150)",
    southGeorgiaAndTheSouthSandwichIslandsColor: "rgb(149,150,150)",
    southKoreaColor: "rgb(149,150,150)",
    southOssetiaColor: "rgb(149,150,150)",
    southSudanColor: "rgb(149,150,150)",
    spainColor: "rgb(149,150,150)",
    sriLankaColor: "rgb(149,150,150)",
    sudanColor: "rgb(149,150,150)",
    surinameColor: "rgb(149,150,150)",
    svalbardColor: "rgb(149,150,150)",
    swedenColor: "rgb(149,150,150)",
    switzerlandColor: "rgb(149,150,150)",
    syriaColor: "rgb(149,150,150)",
    taiwanColor: "rgb(149,150,150)",
    tajikistanColor: "rgb(149,150,150)",
    tanzaniaColor: "rgb(149,150,150)",
    thailandColor: "rgb(149,150,150)",
    togoColor: "rgb(149,150,150)",
    tokelauColor: "rgb(149,150,150)",
    tongaColor: "rgb(149,150,150)",
    transnistriaColor: "rgb(149,150,150)",
    trinidadAndTobagoColor: "rgb(149,150,150)",
    tunisiaColor: "rgb(149,150,150)",
    turkeyColor: "rgb(149,150,150)",
    turkmenistanColor: "rgb(149,150,150)",
    turksAndCaicosColor: "rgb(149,150,150)",
    tuvaluColor: "rgb(149,150,150)",
    ugandaColor: "rgb(149,150,150)",
    ukraineColor: "rgb(149,150,150)",
    unitedArabEmiratesColor: "rgb(149,150,150)",
    unitedKingdomColor: "rgb(149,150,150)",
    unitedStatesColor: "rgb(149,150,150)",
    unitedStatesVirginIslandsColor: "rgb(149,150,150)",
    uruguayColor: "rgb(149,150,150)",
    uzbekistanColor: "rgb(149,150,150)",
    vanuatuColor: "rgb(149,150,150)",
    vaticanCityColor: "rgb(149,150,150)",
    venezuelaColor: "rgb(149,150,150)",
    vietnamColor: "rgb(149,150,150)",
    wallisAndFutunaColor: "rgb(149,150,150)",
    westernSaharaColor: "rgb(149,150,150)",
    yemenColor: "rgb(149,150,150)",
    zambiaColor: "rgb(149,150,150)",
    zimbabweColor: "rgb(149,150,150)"
  }
  const [toggle, setToggle] = useState<boolean>(false) //used by SelectorPassport to trigger useEffect
  const [secondToggle, setSecondToggle] = useState<boolean>(false) //used by reset function to trigger secondToggle useEffect
  const [rerender, setRerender] = useState<boolean>(false) //used to rerender map
  const [openDrawer, setOpenDrawer] = useState<boolean>(false) //MUI drawer toggle
  const [select, setSelect] = useState<{selection: number,passport: null | string}>({ selection: 0, passport: null }) //used to keep track of which button is currently selected
  const [selectArray, setSelectArray] = useState<null | string[]>([null,null,null,null,null,null,null,null,null,null,null]) // keeps track of which passport is currently selected
  const [assignedColors, setAssignedColors] = useState<object[]>([color,color,color,color,color,color,color,color,color,color,color]) // keeps track of each color for each passport
  const [priority, setPriority] = useState<any>(color) //priority is the color that is passed onto each country component as context
  //value is passed in as context to the country components
  const colorProvider:any = {
    abkhaziaColor: priority.abkhaziaColor,
    afghanistanColor: priority.afghanistanColor,
    albaniaColor: priority.albaniaColor,
    algeriaColor: priority.algeriaColor,
    americanSamoaColor: priority.americanSamoaColor,
    andorraColor: priority.andorraColor,
    angolaColor: priority.angolaColor,
    anguillaColor: priority.anguillaColor,
    antiguaAndBarbudaColor: priority.antiguaAndBarbudaColor,
    argentinaColor: priority.argentinaColor,
    armeniaColor: priority.armeniaColor,
    arubaColor: priority.arubaColor,
    australiaColor: priority.australiaColor,
    austriaColor: priority.austriaColor,
    azerbaijanColor: priority.azerbaijanColor,
    bahamasColor: priority.bahamasColor,
    bahrainColor: priority.bahrainColor,
    bangladeshColor: priority.bangladeshColor,
    barbadosColor: priority.barbadosColor,
    belarusColor: priority.belarusColor,
    belgiumColor: priority.belgiumColor,
    belizeColor: priority.belizeColor,
    beninColor: priority.beninColor,
    bermudaColor: priority.bermudaColor,
    bhutanColor: priority.bhutanColor,
    boliviaColor: priority.boliviaColor,
    bonaireColor: priority.bonaireColor,
    bosniaAndHerzegovinaColor: priority.bosniaAndHerzegovinaColor,
    botswanaColor: priority.botswanaColor,
    bouvetIslandColor: priority.bouvetIslandColor,
    brazilColor: priority.brazilColor,
    britishIndianOceanTerritoryColor: priority.britishIndianOceanTerritory,
    britishVirginIslandsColor: priority.britishVirginIslandsColor,
    bruneiColor: priority.bruneiColor,
    bulgariaColor: priority.bulgariaColor,
    burkinaFasoColor: priority.burkinaFasoColor,
    burundiColor: priority.burundiColor,
    cambodiaColor: priority.cambodiaColor,
    cameroonColor: priority.cameroonColor,
    canadaColor: priority.canadaColor,
    capeVerdeColor: priority.capeVerdeColor,
    caymanIslandsColor: priority.caymanIslandsColor,
    centralAfricanRepublicColor: priority.centralAfricanRepublicColor,
    chadColor: priority.chadColor,
    chileColor: priority.chileColor,
    chinaColor: priority.chinaColor,
    colombiaColor: priority.colombiaColor,
    comorosColor: priority.comorosColor,
    cookIslandsColor: priority.cookIslandsColor,
    costaRicaColor: priority.costaRicaColor,
    croatiaColor: priority.croatiaColor,
    cubaColor: priority.cubaColor,
    curacaoColor: priority.curacaoColor,
    cyprusColor: priority.cyprusColor,
    czechRepublicColor: priority.czechRepublicColor,
    democraticRepublicOfTheCongoColor: priority.democraticRepublicOfTheCongoColor,
    denmarkColor: priority.denmarkColor,
    djiboutiColor: priority.djiboutiColor,
    dominicaColor: priority.dominicaColor,
    dominicanRepublicColor: priority.dominicanRepublicColor,
    eastTimorColor: priority.eastTimorColor,
    ecuadorColor: priority.ecuadorColor,
    egyptColor: priority.egyptColor,
    elSalvadorColor: priority.elSalvadorColor,
    equatorialGuineaColor: priority.equatorialGuineaColor,
    eritreaColor: priority.eritreaColor,
    estoniaColor: priority.estoniaColor,
    eswatiniColor: priority.eswatiniColor,
    ethiopiaColor: priority.ethiopiaColor,
    falklandIslandsColor: priority.falklandIslandsColor,
    faroeIslandsColor: priority.faroeIslandsColor,
    fijiColor: priority.fijiColor,
    finlandColor: priority.finlandColor,
    franceColor: priority.franceColor,
    frenchGuianaColor: priority.frenchGuianaColor,
    frenchPolynesiaColor: priority.frenchPolynesiaColor,
    gabonColor: priority.gabonColor,
    gambiaColor: priority.gambiaColor,
    georgiaColor: priority.georgiaColor,
    germanyColor: priority.germanyColor,
    ghanaColor: priority.ghanaColor,
    gibraltarColor: priority.gibraltarColor,
    greeceColor: priority.greeceColor,
    greenlandColor: priority.greenlandColor,
    grenadaColor: priority.grenadaColor,
    guadeloupeColor: priority.guadeloupeColor,
    guamColor: priority.guamColor,
    guatemalaColor: priority.guatemalaColor,
    guernseyColor: priority.guernseyColor,
    guineaColor: priority.guineaColor,
    guineaBissauColor: priority.guineaBissauColor,
    guyanaColor: priority.guyanaColor,
    haitiColor: priority.haitiColor,
    heardIslandAndMcDonaldIslandsColor: priority.heardIslandAndMcDonaldIslandsColor,
    hondurasColor: priority.hondurasColor,
    hongKongColor: priority.hongKongColor,
    hungaryColor: priority.hungaryColor,
    icelandColor: priority.icelandColor,
    indiaColor: priority.indiaColor,
    indonesiaColor: priority.indonesiaColor,
    iranColor: priority.iranColor,
    iraqColor: priority.iraqColor,
    irelandColor: priority.irelandColor,
    isleOfManColor: priority.isleOfManColor,
    israelColor: priority.israelColor,
    italyColor: priority.italyColor,
    ivoryCoastColor: priority.ivoryCoastColor,
    jamaicaColor: priority.jamaicaColor,
    janMayenColor: priority.janMayenColor,
    japanColor: priority.japanColor,
    jerseyColor: priority.jerseyColor,
    jordanColor: priority.jordanColor,
    kazakhstanColor: priority.kazakhstanColor,
    kenyaColor: priority.kenyaColor,
    kiribatiColor: priority.kiribatiColor,
    kosovoColor: priority.kosovoColor,
    kuwaitColor: priority.kuwaitColor,
    kyrgyzstanColor: priority.kyrgyzstanColor,
    laosColor: priority.laosColor,
    latviaColor: priority.latviaColor,
    lebanonColor: priority.lebanonColor,
    lesothoColor: priority.lesothoColor,
    liberiaColor: priority.liberiaColor,
    libyaColor: priority.libyaColor,
    liechtensteinColor: priority.liechtensteinColor,
    lithuaniaColor: priority.lithuaniaColor,
    luxembourgColor: priority.luxembourgColor,
    macaoColor: priority.macaoColor,
    madagascarColor: priority.madagascarColor,
    malawiColor: priority.malawiColor,
    malaysiaColor: priority.malaysiaColor,
    maldivesColor: priority.maldivesColor,
    maliColor: priority.maliColor,
    maltaColor: priority.maltaColor,
    marshallIslandsColor: priority.marshallIslandsColor,
    martiniqueColor: priority.martiniqueColor,
    mauritaniaColor: priority.mauritaniaColor,
    mauritiusColor: priority.mauritiusColor,
    mayotteColor: priority.mayotteColor,
    mexicoColor: priority.mexicoColor,
    micronesiaColor: priority.micronesiaColor,
    moldovaColor: priority.moldovaColor,
    monacoColor: priority.monacoColor,
    mongoliaColor: priority.mongoliaColor,
    montenegroColor: priority.montenegroColor,
    montserratColor: priority.montserratColor,
    moroccoColor: priority.moroccoColor,
    mozambiqueColor: priority.mozambiqueColor,
    myanmarColor: priority.myanmarColor,
    namibiaColor: priority.namibiaColor,
    nauruColor: priority.nauruColor,
    nepalColor: priority.nepalColor,
    netherlandsColor: priority.netherlandsColor,
    newCaledoniaColor: priority.newCaledoniaColor,
    newZealandColor: priority.newZealandColor,
    nicaraguaColor: priority.nicaraguaColor,
    nigerColor: priority.nigerColor,
    nigeriaColor: priority.nigeriaColor,
    niueColor: priority.niueColor,
    norfolkIslandColor: priority.norfolkIslandColor,
    northernCyprusColor: priority.northernCyprusColor,
    northernMarianaIslandsColor: priority.northernMarianaIslandsColor,
    northKoreaColor: priority.northKoreaColor,
    northMacedoniaColor: priority.northMacedoniaColor,
    norwayColor: priority.norwayColor,
    omanColor: priority.omanColor,
    pakistanColor: priority.pakistanColor,
    palauColor: priority.palauColor,
    palestineColor: priority.palestineColor,
    panamaColor: priority.panamaColor,
    papuaNewGuineaColor: priority.papuaNewGuineaColor,
    paraguayColor: priority.paraguayColor,
    peruColor: priority.peruColor,
    philippinesColor: priority.philippinesColor,
    pitcairnIslandsColor: priority.pitcairnIslandsColor,
    polandColor: priority.polandColor,
    portugalColor: priority.portugalColor,
    qatarColor: priority.qatarColor,
    republicOfTheCongoColor: priority.republicOfTheCongoColor,
    reunionColor: priority.reunionColor,
    romaniaColor: priority.romaniaColor,
    russiaColor: priority.russiaColor,
    rwandaColor: priority.rwandaColor,
    sabaColor: priority.sabaColor,
    saintBarthelemyColor: priority.saintBarthelemyColor,
    saintHelenaColor: priority.saintHelenaColor,
    saintKittsAndNevisColor: priority.saintKittsAndNevisColor,
    saintLuciaColor: priority.saintLuciaColor,
    saintMartinColor: priority.saintMartinColor,
    saintPierreAndMiquelonColor: priority.saintPierreAndMiquelonColor,
    saintVincentAndTheGrenadinesColor: priority.saintVincentAndTheGrenadinesColor,
    samoaColor: priority.samoaColor,
    sanMarinoColor: priority.sanMarinoColor,
    saoTomeAndPrincipeColor: priority.saoTomeAndPrincipeColor,
    saudiArabiaColor: priority.saudiArabiaColor,
    senegalColor: priority.senegalColor,
    serbiaColor: priority.serbiaColor,
    seychellesColor: priority.seychellesColor,
    sierraLeoneColor: priority.sierraLeoneColor,
    singaporeColor: priority.singaporeColor,
    sintEustatiusColor: priority.sintEustatiusColor,
    sintMaartenColor: priority.sintMaartenColor,
    slovakiaColor: priority.slovakiaColor,
    sloveniaColor: priority.sloveniaColor,
    solomonIslandsColor: priority.solomonIslandsColor,
    somaliaColor: priority.somaliaColor,
    southAfricaColor: priority.southAfricaColor,
    southGeorgiaAndTheSouthSandwichIslandsColor: priority.southGeorgiaAndTheSouthSandwichIslandsColor,
    southKoreaColor: priority.southKoreaColor,
    southOssetiaColor: priority.southOssetiaColor,
    southSudanColor: priority.southSudanColor,
    spainColor: priority.spainColor,
    sriLankaColor: priority.sriLankaColor,
    sudanColor: priority.sudanColor,
    surinameColor: priority.surinameColor,
    svalbardColor: priority.svalbardColor,
    swedenColor: priority.swedenColor,
    switzerlandColor: priority.switzerlandColor,
    syriaColor: priority.syriaColor,
    taiwanColor: priority.taiwanColor,
    tajikistanColor: priority.tajikistanColor,
    tanzaniaColor: priority.tanzaniaColor,
    thailandColor: priority.thailandColor,
    togoColor: priority.togoColor,
    tokelauColor: priority.tokelauColor,
    tongaColor: priority.tongaColor,
    transnistriaColor: priority.transnistriaColor,
    trinidadAndTobagoColor: priority.trinidadAndTobagoColor,
    tunisiaColor: priority.tunisiaColor,
    turkeyColor: priority.turkeyColor,
    turkmenistanColor: priority.turkmenistanColor,
    turksAndCaicosColor: priority.turksAndCaicosColor,
    tuvaluColor: priority.tuvaluColor,
    ugandaColor: priority.ugandaColor,
    ukraineColor: priority.ukraineColor,
    unitedArabEmiratesColor: priority.unitedArabEmiratesColor,
    unitedKingdomColor: priority.unitedKingdomColor,
    unitedStatesColor: priority.unitedStatesColor,
    unitedStatesVirginIslandsColor: priority.unitedStatesVirginIslandsColor,
    uruguayColor: priority.uruguayColor,
    uzbekistanColor: priority.uzbekistanColor,
    vanuatuColor: priority.vanuatuColor,
    vaticanCityColor: priority.vaticanCityColor,
    venezuelaColor: priority.venezuelaColor,
    vietnamColor: priority.vietnamColor,
    wallisAndFutunaColor: priority.wallisAndFutunaColor,
    westernSaharaColor: priority.westernSaharaColor,
    yemenColor: priority.yemenColor,
    zambiaColor: priority.zambiaColor,
    zimbabweColor: priority.zimbabweColor
  }
  
  useEffect(() => {
    //function that takes in logic function
    const mainCalculationContainer:Function = () => {
      mainCalculation(selectArray[select.selection], assignedColors, setAssignedColors, select, priority, setPriority, rerender, setRerender, selectArray)
    }
    if(selectArray[select.selection] != null && selectArray[select.selection] != select.passport) {reset(setAssignedColors, setPriority, secondToggle, setSecondToggle); return}
    selectArrayCalculation(selectArray, setSelectArray, select);
    if(selectArray[select.selection] != null) {mainCalculationContainer()}
  }, [toggle])

  useEffect(() => {
    subCalculation(selectArray, assignedColors, setAssignedColors, priority, setPriority, rerender, setRerender)
    selectArrayCalculation(selectArray, setSelectArray, select)
  }, [secondToggle])

  return (
    <PassportContext.Provider value={passportsProvider}>
    <ColorContext.Provider value={colorProvider}>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map />
    <Selector
      Drawer={Drawer}
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
      select={select}
      setSelect={setSelect}
      selectArray={selectArray}
      setSelectArray={setSelectArray}
      toggle={toggle}
      setToggle={setToggle}
      setPriority={setPriority}
      setAssignedColors={setAssignedColors}
    />
    </ColorContext.Provider>
    </PassportContext.Provider>
  )
}
