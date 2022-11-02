import { useState, useEffect } from 'react';
import { ColorContext } from '../components/context/ColorContext';
import { PassportContext } from '../components/context/PassportContext';
import { Drawer } from '@mui/material';
import selectArrayCalculation from '../logic/selectArrayCalculation';
import reset from '../logic/reset';
import mainCalculation from '../logic/mainCalculation';
import subCalculation from '../logic/subCalculation';
import percentageCalculation from '../logic/percentageCalculation';
import Map from '../components/Map/Map';
import Selector from '../components/Selector';
import Head from 'next/head';
//passport imports
import abkhazia from '/public/passports/abkhazia.webp';
import afghanistan from '/public/passports/afghanistan.webp';
import albania from '/public/passports/albania.webp'
import algeria from '/public/passports/algeria.webp';
import andorra from '/public/passports/andorra.webp'
import angola from '/public/passports/angola.webp';
import anguilla from '/public/passports/anguilla.webp';
import antiguaAndBarbuda from '/public/passports/antiguaAndBarbuda.webp';
import argentina from '/public/passports/argentina.webp';
import armenia from '/public/passports/armenia.webp';
import australia from '/public/passports/australia.webp';
import austria from '/public/passports/austria.webp';
import azerbaijan from '/public/passports/azerbaijan.webp';
import bahamas from '/public/passports/bahamas.webp';
import bahrain from '/public/passports/bahrain.webp';
import bangladesh from '/public/passports/bangladesh.webp';
import barbados from '/public/passports/barbados.webp';
import belarus from '/public/passports/belarus.webp';
import belgium from '/public/passports/belgium.webp';
import belize from '/public/passports/belize.webp';
import benin from '/public/passports/benin.webp';
import bermuda from '/public/passports/bermuda.webp';
import bhutan from '/public/passports/bhutan.webp';
import bolivia from '/public/passports/bolivia.webp';
import bosniaAndHerzegovina from '/public/passports/bosniaAndHerzegovina.webp';
import botswana from '/public/passports/botswana.webp';
import brazil from '/public/passports/brazil.webp';
import britishVirginIslands from '/public/passports/britishVirginIslands.webp';
import brunei from '/public/passports/brunei.webp';
import bulgaria from '/public/passports/bulgaria.webp';
import burkinaFaso from '/public/passports/burkinaFaso.webp';
import burundi from '/public/passports/burundi.webp';
import cambodia from '/public/passports/cambodia.webp';
import cameroon from '/public/passports/cameroon.webp';
import canada from '/public/passports/canada.webp';
import capeVerde from '/public/passports/capeVerde.webp';
import caymanIslands from '/public/passports/caymanIslands.webp';
import centralAfricanRepublic from '/public/passports/centralAfricanRepublic.webp';
import chad from '/public/passports/chad.webp';
import chile from '/public/passports/chile.webp';
import china from '/public/passports/china.webp';
import colombia from '/public/passports/colombia.webp';
import comoros from '/public/passports/comoros.webp';
import costaRica from '/public/passports/costaRica.webp';
import croatia from '/public/passports/croatia.webp';
import cuba from '/public/passports/cuba.webp';
import cyprus from '/public/passports/cyprus.webp';
import czechRepublic from '/public/passports/czechRepublic.webp';
import democraticRepublicOfTheCongo from '/public/passports/democraticRepublicOfTheCongo.webp';
import eastTimor from '/public/passports/eastTimor.webp';
import denmark from '/public/passports/denmark.webp';
import djibouti from '/public/passports/djibouti.webp';
import dominica from '/public/passports/dominica.webp';
import dominicanRepublic from '/public/passports/dominicanRepublic.webp';
import ecuador from '/public/passports/ecuador.webp';
import egypt from '/public/passports/egypt.webp';
import elSalvador from '/public/passports/elSalvador.webp';
import equatorialGuinea from '/public/passports/equatorialGuinea.webp';
import eritrea from '/public/passports/eritrea.webp';
import estonia from '/public/passports/estonia.webp';
import eswatini from '/public/passports/eswatini.webp';
import ethiopia from '/public/passports/ethiopia.webp';
import fiji from '/public/passports/fiji.webp';
import finland from '/public/passports/finland.webp';
import france from '/public/passports/france.webp';
import gabon from '/public/passports/gabon.webp';
import gambia from '/public/passports/gambia.webp';
import georgia from '/public/passports/georgia.webp';
import germany from '/public/passports/germany.webp';
import ghana from '/public/passports/ghana.webp';
import greece from '/public/passports/greece.webp';
import grenada from '/public/passports/grenada.webp';
import guatemala from '/public/passports/guatemala.webp';
import guinea from '/public/passports/guinea.webp';
import guineaBissau from '/public/passports/guineaBissau.webp';
import guyana from '/public/passports/guyana.webp';
import haiti from '/public/passports/haiti.webp';
import honduras from '/public/passports/honduras.webp';
import hongKong from '/public/passports/hongKong.webp';
import hungary from '/public/passports/hungary.webp';
import iceland from '/public/passports/iceland.webp';
import india from '/public/passports/india.webp';
import indonesia from '/public/passports/indonesia.webp';
import iran from '/public/passports/iran.webp';
import iraq from '/public/passports/iraq.webp';
import ireland from '/public/passports/ireland.webp'
import israel from '/public/passports/israel.webp';
import italy from '/public/passports/italy.webp';
import ivoryCoast from '/public/passports/ivoryCoast.webp';
import jamaica from '/public/passports/jamaica.webp';
import japan from '/public/passports/japan.webp';
import jordan from '/public/passports/jordan.webp';
import kazakhstan from '/public/passports/kazakhstan.webp';
import kenya from '/public/passports/kenya.webp';
import kiribati from '/public/passports/kiribati.webp';
import kuwait from '/public/passports/kuwait.webp';
import kyrgyzstan from '/public/passports/kyrgyzstan.webp';
import laos from '/public/passports/laos.webp';
import latvia from '/public/passports/latvia.webp';
import lebanon from '/public/passports/lebanon.webp';
import lesotho from '/public/passports/lesotho.webp';
import liberia from '/public/passports/liberia.webp';
import libya from '/public/passports/libya.webp';
import liechtenstein from '/public/passports/liechtenstein.webp';
import lithuania from '/public/passports/lithuania.webp';
import luxembourg from '/public/passports/luxembourg.webp';
import macao from '/public/passports/macao.webp';
import madagascar from '/public/passports/madagascar.webp';
import malawi from '/public/passports/malawi.webp';
import malaysia from '/public/passports/malaysia.webp';
import maldives from '/public/passports/maldives.webp';
import mali from '/public/passports/mali.webp';
import malta from '/public/passports/malta.webp';
import marshallIslands from '/public/passports/marshallIslands.webp';
import mauritania from '/public/passports/mauritania.webp';
import mauritius from '/public/passports/mauritius.webp';
import mexico from '/public/passports/mexico.webp';
import micronesia from '/public/passports/micronesia.webp';
import moldova from '/public/passports/moldova.webp';
import monaco from '/public/passports/monaco.webp';
import mongolia from '/public/passports/mongolia.webp';
import montenegro from '/public/passports/montenegro.webp';
import montserrat from '/public/passports/montserrat.webp';
import morocco from '/public/passports/morocco.webp';
import mozambique from '/public/passports/mozambique.webp';
import myanmar from '/public/passports/myanmar.webp';
import namibia from '/public/passports/namibia.webp';
import nauru from '/public/passports/nauru.webp';
import nepal from '/public/passports/nepal.webp';
import netherlands from '/public/passports/netherlands.webp';
import newZealand from '/public/passports/newZealand.webp';
import nicaragua from '/public/passports/nicaragua.webp';
import niger from '/public/passports/niger.webp';
import nigeria from '/public/passports/nigeria.webp';
import northKorea from '/public/passports/northKorea.webp';
import northMacedonia from '/public/passports/northMacedonia.webp';
import norway from '/public/passports/norway.webp';
import oman from '/public/passports/oman.webp';
import pakistan from '/public/passports/pakistan.webp';
import palau from '/public/passports/palau.webp';
import palestine from '/public/passports/palestine.webp';
import panama from '/public/passports/panama.webp';
import papuaNewGuinea from '/public/passports/papuaNewGuinea.webp';
import paraguay from '/public/passports/paraguay.webp';
import peru from '/public/passports/peru.webp';
import philippines from '/public/passports/philippines.webp';
import poland from '/public/passports/poland.webp';
import portugal from '/public/passports/portugal.webp';
import qatar from '/public/passports/qatar.webp';
import republicOfTheCongo from '/public/passports/republicOfTheCongo.webp';
import romania from '/public/passports/romania.webp';
import russia from '/public/passports/russia.webp';
import rwanda from '/public/passports/rwanda.webp';
import saintHelena from '/public/passports/saintHelena.webp';
import saintKittsAndNevis from '/public/passports/saintKittsAndNevis.webp';
import saintLucia from '/public/passports/saintLucia.webp';
import saintVincentAndTheGrenadines from '/public/passports/saintVincentAndTheGrenadines.webp';
import samoa from '/public/passports/samoa.webp';
import sanMarino from '/public/passports/sanMarino.webp';
import saoTomeAndPrincipe from '/public/passports/saoTomeAndPrincipe.webp';
import saudiArabia from '/public/passports/saudiArabia.webp';
import senegal from '/public/passports/senegal.webp';
import serbia from '/public/passports/serbia.webp';
import seychelles from '/public/passports/seychelles.webp';
import sierraLeone from '/public/passports/sierraLeone.webp';
import singapore from '/public/passports/singapore.webp';
import slovakia from '/public/passports/slovakia.webp';
import slovenia from '/public/passports/slovenia.webp';
import solomonIslands from '/public/passports/solomonIslands.webp';
import somalia from '/public/passports/somalia.webp';
import southAfrica from '/public/passports/southAfrica.webp';
import southKorea from '/public/passports/southKorea.webp';
import southOssetia from '/public/passports/southOssetia.webp';
import southSudan from '/public/passports/southSudan.webp';
import spain from '/public/passports/spain.webp';
import sriLanka from '/public/passports/sriLanka.webp';
import sudan from '/public/passports/sudan.webp';
import suriname from '/public/passports/suriname.webp';
import sweden from '/public/passports/sweden.webp';
import switzerland from '/public/passports/switzerland.webp';
import syria from '/public/passports/syria.webp';
import taiwan from '/public/passports/taiwan.webp';
import tajikistan from '/public/passports/tajikistan.webp';
import tanzania from '/public/passports/tanzania.webp';
import thailand from '/public/passports/thailand.webp';
import togo from '/public/passports/togo.webp';
import tonga from '/public/passports/tonga.webp';
import trinidadAndTobago from '/public/passports/trinidadAndTobago.webp';
import tunisia from '/public/passports/tunisia.webp';
import turkey from '/public/passports/turkey.webp';
import turkmenistan from '/public/passports/turkmenistan.webp';
import turksAndCaicos from '/public/passports/turksAndCaicos.webp';
import tuvalu from '/public/passports/tuvalu.webp';
import uganda from '/public/passports/uganda.webp';
import ukraine from '/public/passports/ukraine.webp';
import unitedArabEmirates from '/public/passports/unitedArabEmirates.webp';
import unitedKingdom from '/public/passports/unitedKingdom.webp';
import unitedStates from '/public/passports/unitedStates.webp';
import uruguay from '/public/passports/uruguay.webp';
import uzbekistan from '/public/passports/uzbekistan.webp';
import vanuatu from '/public/passports/vanuatu.webp';
import vaticanCity from '/public/passports/vaticanCity.webp';
import venezuela from '/public/passports/venezuela.webp';
import vietnam from '/public/passports/vietnam.webp';
import yemen from '/public/passports/yemen.webp';
import zambia from '/public/passports/zambia.webp';
import zimbabwe from '/public/passports/zimbabwe.webp';
const passportsProvider:any = {abkhazia,afghanistan,albania,algeria,andorra,angola,anguilla,antiguaAndBarbuda,argentina,armenia,australia,austria,azerbaijan,bahamas,bahrain,bangladesh,barbados,belarus,belgium,belize,benin,bermuda,bhutan,bolivia,bosniaAndHerzegovina,botswana,brazil,britishVirginIslands,brunei,bulgaria,burkinaFaso,burundi,cambodia,cameroon,canada,capeVerde,caymanIslands,centralAfricanRepublic,chad,chile,china,colombia,comoros,costaRica,croatia,cuba,cyprus,czechRepublic,democraticRepublicOfTheCongo,eastTimor,denmark,djibouti,dominica,dominicanRepublic,ecuador,egypt,elSalvador,equatorialGuinea,eritrea,estonia,eswatini,ethiopia,fiji,finland,france,gabon,gambia,georgia,germany,ghana,greece,grenada,guatemala,guinea,guineaBissau,guyana,haiti,honduras,hongKong,hungary,iceland,india,indonesia,iran,iraq,ireland,israel,italy,ivoryCoast,jamaica,japan,jordan,kazakhstan,kenya,kiribati,kuwait,kyrgyzstan,laos,latvia,lebanon,lesotho,liberia,libya,liechtenstein,lithuania,luxembourg,macao,madagascar,malawi,malaysia,maldives,mali,malta,marshallIslands,mauritania,mauritius,mexico,micronesia,moldova,monaco,mongolia,montenegro,montserrat,morocco,mozambique,myanmar,namibia,nauru,nepal,netherlands,newZealand,nicaragua,niger,nigeria,northKorea,northMacedonia,norway,oman,pakistan,palau,palestine,panama,papuaNewGuinea,paraguay,peru,philippines,poland,portugal,qatar,republicOfTheCongo,romania,russia,rwanda,saintHelena,saintKittsAndNevis,saintLucia,saintVincentAndTheGrenadines,samoa,sanMarino,saoTomeAndPrincipe,saudiArabia,senegal,serbia,seychelles,sierraLeone,singapore,slovakia,slovenia,solomonIslands,somalia,southAfrica,southKorea,southOssetia,southSudan,spain,sriLanka,sudan,suriname,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,tonga,trinidadAndTobago,tunisia,turkey,turkmenistan,turksAndCaicos,tuvalu,uganda,ukraine,unitedArabEmirates,unitedKingdom,unitedStates,uruguay,uzbekistan,vanuatu,vaticanCity,venezuela,vietnam,yemen,zambia,zimbabwe}
type Legend = {HC: boolean, FoM: boolean, OECSFoM: boolean, MFoM: boolean, EUFoM: boolean, GCCFoM: boolean, VF: boolean, VoAEV: boolean, VoA: boolean, EV: boolean, SP: boolean, CR: boolean}

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
    kosovoColor: "rgb(149,150,150)",
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
  const [legend, setLegend] = useState<Legend>({HC: false, FoM: false, OECSFoM: false, MFoM: false, EUFoM: false, GCCFoM: false, VF: false, VoAEV: false, VoA: false, EV: false, SP: false, CR: false})
  const [percentage, setPercentage]= useState<number>(0)
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
    if(selectArray[select.selection] != null && selectArray[select.selection] != select.passport) {
      reset(setAssignedColors, setPriority, secondToggle, setSecondToggle, legend, setLegend); return
    }
    selectArrayCalculation(selectArray, setSelectArray, select);
    if(selectArray[select.selection] != null) {
      mainCalculation(selectArray[select.selection], assignedColors, setAssignedColors, select, priority, setPriority, rerender, setRerender, legend, setLegend, percentage, setPercentage)
    }
  }, [toggle])

  useEffect(() => {
    subCalculation(selectArray, assignedColors, setAssignedColors, priority, setPriority, rerender, setRerender, legend, setLegend)
    selectArrayCalculation(selectArray, setSelectArray, select)
  }, [secondToggle])

  return (
    <PassportContext.Provider value={passportsProvider}>
    <ColorContext.Provider value={colorProvider}>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map
      legend={legend}
    />
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
      legend={legend}
      setLegend={setLegend}
      percentage={percentage}
    />
    </ColorContext.Provider>
    </PassportContext.Provider>
  )
}
