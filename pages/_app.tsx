import { PassportContext } from '../logic/context/PassportContext'
import { ColorContext } from '../logic/context/ColorContext'
import { DiffContext } from '../logic/context/DiffContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import { WidthContext } from '../logic/context/WidthContext'
import { CountrySelectContext } from '../logic/context/CountrySelectContext'
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect, useRef } from 'react'
import { Drawer } from '@mui/material'
//logic imports
import mainCalculation from '../logic/visaPolicyCalculation/mainCalculation'
import fetchSortData from '../logic/rankSorting/fetchSortData'
//component imports
import Header from '../components/Header'
import Selector from '../components/Selector/Selector'
//passport imports
import abkhazia from '/public/passports/abkhazia.webp'
import afghanistan from '/public/passports/afghanistan.webp'
import albania from '/public/passports/albania.webp'
import algeria from '/public/passports/algeria.webp'
import andorra from '/public/passports/andorra.webp'
import angola from '/public/passports/angola.webp'
import anguilla from '/public/passports/anguilla.webp'
import antiguaAndBarbuda from '/public/passports/antiguaAndBarbuda.webp'
import argentina from '/public/passports/argentina.webp'
import armenia from '/public/passports/armenia.webp'
import australia from '/public/passports/australia.webp'
import austria from '/public/passports/austria.webp'
import azerbaijan from '/public/passports/azerbaijan.webp'
import bahamas from '/public/passports/bahamas.webp'
import bahrain from '/public/passports/bahrain.webp'
import bangladesh from '/public/passports/bangladesh.webp'
import barbados from '/public/passports/barbados.webp'
import belarus from '/public/passports/belarus.webp'
import belgium from '/public/passports/belgium.webp'
import belize from '/public/passports/belize.webp'
import benin from '/public/passports/benin.webp'
import bermuda from '/public/passports/bermuda.webp'
import bhutan from '/public/passports/bhutan.webp'
import bolivia from '/public/passports/bolivia.webp'
import bosniaAndHerzegovina from '/public/passports/bosniaAndHerzegovina.webp'
import botswana from '/public/passports/botswana.webp'
import brazil from '/public/passports/brazil.webp'
import britishVirginIslands from '/public/passports/britishVirginIslands.webp'
import brunei from '/public/passports/brunei.webp'
import bulgaria from '/public/passports/bulgaria.webp'
import burkinaFaso from '/public/passports/burkinaFaso.webp'
import burundi from '/public/passports/burundi.webp'
import cambodia from '/public/passports/cambodia.webp'
import cameroon from '/public/passports/cameroon.webp'
import canada from '/public/passports/canada.webp'
import capeVerde from '/public/passports/capeVerde.webp'
import caymanIslands from '/public/passports/caymanIslands.webp'
import centralAfricanRepublic from '/public/passports/centralAfricanRepublic.webp'
import chad from '/public/passports/chad.webp'
import chile from '/public/passports/chile.webp'
import china from '/public/passports/china.webp'
import colombia from '/public/passports/colombia.webp'
import comoros from '/public/passports/comoros.webp'
import costaRica from '/public/passports/costaRica.webp'
import croatia from '/public/passports/croatia.webp'
import cuba from '/public/passports/cuba.webp'
import cyprus from '/public/passports/cyprus.webp'
import czechRepublic from '/public/passports/czechRepublic.webp'
import democraticRepublicOfTheCongo from '/public/passports/democraticRepublicOfTheCongo.webp'
import eastTimor from '/public/passports/eastTimor.webp'
import denmark from '/public/passports/denmark.webp'
import djibouti from '/public/passports/djibouti.webp'
import dominica from '/public/passports/dominica.webp'
import dominicanRepublic from '/public/passports/dominicanRepublic.webp'
import ecuador from '/public/passports/ecuador.webp'
import egypt from '/public/passports/egypt.webp'
import elSalvador from '/public/passports/elSalvador.webp'
import equatorialGuinea from '/public/passports/equatorialGuinea.webp'
import eritrea from '/public/passports/eritrea.webp'
import estonia from '/public/passports/estonia.webp'
import eswatini from '/public/passports/eswatini.webp'
import ethiopia from '/public/passports/ethiopia.webp'
import fiji from '/public/passports/fiji.webp'
import finland from '/public/passports/finland.webp'
import france from '/public/passports/france.webp'
import gabon from '/public/passports/gabon.webp'
import gambia from '/public/passports/gambia.webp'
import georgia from '/public/passports/georgia.webp'
import germany from '/public/passports/germany.webp'
import ghana from '/public/passports/ghana.webp'
import greece from '/public/passports/greece.webp'
import grenada from '/public/passports/grenada.webp'
import guatemala from '/public/passports/guatemala.webp'
import guinea from '/public/passports/guinea.webp'
import guineaBissau from '/public/passports/guineaBissau.webp'
import guyana from '/public/passports/guyana.webp'
import haiti from '/public/passports/haiti.webp'
import honduras from '/public/passports/honduras.webp'
import hongKong from '/public/passports/hongKong.webp'
import hungary from '/public/passports/hungary.webp'
import iceland from '/public/passports/iceland.webp'
import india from '/public/passports/india.webp'
import indonesia from '/public/passports/indonesia.webp'
import iran from '/public/passports/iran.webp'
import iraq from '/public/passports/iraq.webp'
import ireland from '/public/passports/ireland.webp'
import israel from '/public/passports/israel.webp'
import italy from '/public/passports/italy.webp'
import ivoryCoast from '/public/passports/ivoryCoast.webp'
import jamaica from '/public/passports/jamaica.webp'
import japan from '/public/passports/japan.webp'
import jordan from '/public/passports/jordan.webp'
import kazakhstan from '/public/passports/kazakhstan.webp'
import kenya from '/public/passports/kenya.webp'
import kiribati from '/public/passports/kiribati.webp'
import kuwait from '/public/passports/kuwait.webp'
import kyrgyzstan from '/public/passports/kyrgyzstan.webp'
import laos from '/public/passports/laos.webp'
import latvia from '/public/passports/latvia.webp'
import lebanon from '/public/passports/lebanon.webp'
import lesotho from '/public/passports/lesotho.webp'
import liberia from '/public/passports/liberia.webp'
import libya from '/public/passports/libya.webp'
import liechtenstein from '/public/passports/liechtenstein.webp'
import lithuania from '/public/passports/lithuania.webp'
import luxembourg from '/public/passports/luxembourg.webp'
import macao from '/public/passports/macao.webp'
import madagascar from '/public/passports/madagascar.webp'
import malawi from '/public/passports/malawi.webp'
import malaysia from '/public/passports/malaysia.webp'
import maldives from '/public/passports/maldives.webp'
import mali from '/public/passports/mali.webp'
import malta from '/public/passports/malta.webp'
import marshallIslands from '/public/passports/marshallIslands.webp'
import mauritania from '/public/passports/mauritania.webp'
import mauritius from '/public/passports/mauritius.webp'
import mexico from '/public/passports/mexico.webp'
import micronesia from '/public/passports/micronesia.webp'
import moldova from '/public/passports/moldova.webp'
import monaco from '/public/passports/monaco.webp'
import mongolia from '/public/passports/mongolia.webp'
import montenegro from '/public/passports/montenegro.webp'
import montserrat from '/public/passports/montserrat.webp'
import morocco from '/public/passports/morocco.webp'
import mozambique from '/public/passports/mozambique.webp'
import myanmar from '/public/passports/myanmar.webp'
import namibia from '/public/passports/namibia.webp'
import nauru from '/public/passports/nauru.webp'
import nepal from '/public/passports/nepal.webp'
import netherlands from '/public/passports/netherlands.webp'
import newZealand from '/public/passports/newZealand.webp'
import nicaragua from '/public/passports/nicaragua.webp'
import niger from '/public/passports/niger.webp'
import nigeria from '/public/passports/nigeria.webp'
import northKorea from '/public/passports/northKorea.webp'
import northMacedonia from '/public/passports/northMacedonia.webp'
import norway from '/public/passports/norway.webp'
import oman from '/public/passports/oman.webp'
import pakistan from '/public/passports/pakistan.webp'
import palau from '/public/passports/palau.webp'
import panama from '/public/passports/panama.webp'
import papuaNewGuinea from '/public/passports/papuaNewGuinea.webp'
import paraguay from '/public/passports/paraguay.webp'
import peru from '/public/passports/peru.webp'
import philippines from '/public/passports/philippines.webp'
import poland from '/public/passports/poland.webp'
import portugal from '/public/passports/portugal.webp'
import qatar from '/public/passports/qatar.webp'
import republicOfTheCongo from '/public/passports/republicOfTheCongo.webp'
import romania from '/public/passports/romania.webp'
import russia from '/public/passports/russia.webp'
import rwanda from '/public/passports/rwanda.webp'
import saintHelena from '/public/passports/saintHelena.webp'
import saintKittsAndNevis from '/public/passports/saintKittsAndNevis.webp'
import saintLucia from '/public/passports/saintLucia.webp'
import saintVincentAndTheGrenadines from '/public/passports/saintVincentAndTheGrenadines.webp'
import samoa from '/public/passports/samoa.webp'
import sanMarino from '/public/passports/sanMarino.webp'
import saoTomeAndPrincipe from '/public/passports/saoTomeAndPrincipe.webp'
import saudiArabia from '/public/passports/saudiArabia.webp'
import senegal from '/public/passports/senegal.webp'
import serbia from '/public/passports/serbia.webp'
import seychelles from '/public/passports/seychelles.webp'
import sierraLeone from '/public/passports/sierraLeone.webp'
import singapore from '/public/passports/singapore.webp'
import slovakia from '/public/passports/slovakia.webp'
import slovenia from '/public/passports/slovenia.webp'
import solomonIslands from '/public/passports/solomonIslands.webp'
import somalia from '/public/passports/somalia.webp'
import southAfrica from '/public/passports/southAfrica.webp'
import southKorea from '/public/passports/southKorea.webp'
import southOssetia from '/public/passports/southOssetia.webp'
import southSudan from '/public/passports/southSudan.webp'
import spain from '/public/passports/spain.webp'
import sriLanka from '/public/passports/sriLanka.webp'
import sudan from '/public/passports/sudan.webp'
import suriname from '/public/passports/suriname.webp'
import sweden from '/public/passports/sweden.webp'
import switzerland from '/public/passports/switzerland.webp'
import syria from '/public/passports/syria.webp'
import taiwan from '/public/passports/taiwan.webp'
import tajikistan from '/public/passports/tajikistan.webp'
import tanzania from '/public/passports/tanzania.webp'
import thailand from '/public/passports/thailand.webp'
import togo from '/public/passports/togo.webp'
import tonga from '/public/passports/tonga.webp'
import trinidadAndTobago from '/public/passports/trinidadAndTobago.webp'
import tunisia from '/public/passports/tunisia.webp'
import turkey from '/public/passports/turkey.webp'
import turkmenistan from '/public/passports/turkmenistan.webp'
import turksAndCaicos from '/public/passports/turksAndCaicos.webp'
import tuvalu from '/public/passports/tuvalu.webp'
import uganda from '/public/passports/uganda.webp'
import ukraine from '/public/passports/ukraine.webp'
import unitedArabEmirates from '/public/passports/unitedArabEmirates.webp'
import unitedKingdom from '/public/passports/unitedKingdom.webp'
import unitedStates from '/public/passports/unitedStates.webp'
import uruguay from '/public/passports/uruguay.webp'
import uzbekistan from '/public/passports/uzbekistan.webp'
import vanuatu from '/public/passports/vanuatu.webp'
import vaticanCity from '/public/passports/vaticanCity.webp'
import venezuela from '/public/passports/venezuela.webp'
import vietnam from '/public/passports/vietnam.webp'
import yemen from '/public/passports/yemen.webp'
import zambia from '/public/passports/zambia.webp'
import zimbabwe from '/public/passports/zimbabwe.webp'
import '../styles/globals.css'
const passportsProvider:any = {abkhazia,afghanistan,albania,algeria,andorra,angola,anguilla,antiguaAndBarbuda,argentina,armenia,australia,austria,azerbaijan,bahamas,bahrain,bangladesh,barbados,belarus,belgium,belize,benin,bermuda,bhutan,bolivia,bosniaAndHerzegovina,botswana,brazil,britishVirginIslands,brunei,bulgaria,burkinaFaso,burundi,cambodia,cameroon,canada,capeVerde,caymanIslands,centralAfricanRepublic,chad,chile,china,colombia,comoros,costaRica,croatia,cuba,cyprus,czechRepublic,democraticRepublicOfTheCongo,eastTimor,denmark,djibouti,dominica,dominicanRepublic,ecuador,egypt,elSalvador,equatorialGuinea,eritrea,estonia,eswatini,ethiopia,fiji,finland,france,gabon,gambia,georgia,germany,ghana,greece,grenada,guatemala,guinea,guineaBissau,guyana,haiti,honduras,hongKong,hungary,iceland,india,indonesia,iran,iraq,ireland,israel,italy,ivoryCoast,jamaica,japan,jordan,kazakhstan,kenya,kiribati,kuwait,kyrgyzstan,laos,latvia,lebanon,lesotho,liberia,libya,liechtenstein,lithuania,luxembourg,macao,madagascar,malawi,malaysia,maldives,mali,malta,marshallIslands,mauritania,mauritius,mexico,micronesia,moldova,monaco,mongolia,montenegro,montserrat,morocco,mozambique,myanmar,namibia,nauru,nepal,netherlands,newZealand,nicaragua,niger,nigeria,northKorea,northMacedonia,norway,oman,pakistan,palau,panama,papuaNewGuinea,paraguay,peru,philippines,poland,portugal,qatar,republicOfTheCongo,romania,russia,rwanda,saintHelena,saintKittsAndNevis,saintLucia,saintVincentAndTheGrenadines,samoa,sanMarino,saoTomeAndPrincipe,saudiArabia,senegal,serbia,seychelles,sierraLeone,singapore,slovakia,slovenia,solomonIslands,somalia,southAfrica,southKorea,southOssetia,southSudan,spain,sriLanka,sudan,suriname,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,tonga,trinidadAndTobago,tunisia,turkey,turkmenistan,turksAndCaicos,tuvalu,uganda,ukraine,unitedArabEmirates,unitedKingdom,unitedStates,uruguay,uzbekistan,vanuatu,vaticanCity,venezuela,vietnam,yemen,zambia,zimbabwe}

function MyApp({ Component, pageProps }) {
  //base rgb variable used to reset rgb values
  const color:object = { abkhaziaColor: 'rgb(149,150,150)', afghanistanColor: 'rgb(149,150,150)', albaniaColor: 'rgb(149,150,150)', algeriaColor: 'rgb(149,150,150)', americanSamoaColor: 'rgb(149,150,150)', andorraColor: 'rgb(149,150,150)', angolaColor: 'rgb(149,150,150)', anguillaColor: 'rgb(149,150,150)', antiguaAndBarbudaColor: 'rgb(149,150,150)', argentinaColor: 'rgb(149,150,150)', armeniaColor: 'rgb(149,150,150)', artsakhColor: 'rgb(149,150,150)', arubaColor: 'rgb(149,150,150)', ascensionIslandColor: 'rgb(149,150,150)', australiaColor: 'rgb(149,150,150)', austriaColor: 'rgb(149,150,150)', azerbaijanColor: 'rgb(149,150,150)', bahamasColor: 'rgb(149,150,150)', bahrainColor: 'rgb(149,150,150)', bangladeshColor: 'rgb(149,150,150)', barbadosColor: 'rgb(149,150,150)', belarusColor: 'rgb(149,150,150)', belgiumColor: 'rgb(149,150,150)', belizeColor: 'rgb(149,150,150)', beninColor: 'rgb(149,150,150)', bermudaColor: 'rgb(149,150,150)', bhutanColor: 'rgb(149,150,150)', boliviaColor: 'rgb(149,150,150)', bonaireColor: 'rgb(149,150,150)', bosniaAndHerzegovinaColor: 'rgb(149,150,150)', botswanaColor: 'rgb(149,150,150)', brazilColor: 'rgb(149,150,150)', britishIndianOceanTerritoryColor: 'rgb(149,150,150)', britishVirginIslandsColor: 'rgb(149,150,150)', bruneiColor: 'rgb(149,150,150)', bulgariaColor: 'rgb(149,150,150)', burkinaFasoColor: 'rgb(149,150,150)', burundiColor: 'rgb(149,150,150)', cambodiaColor: 'rgb(149,150,150)', cameroonColor: 'rgb(149,150,150)', canadaColor: 'rgb(149,150,150)', capeVerdeColor: 'rgb(149,150,150)', caymanIslandsColor: 'rgb(149,150,150)', centralAfricanRepublicColor: 'rgb(149,150,150)', chadColor: 'rgb(149,150,150)', chileColor: 'rgb(149,150,150)', chinaColor: 'rgb(149,150,150)', colombiaColor: 'rgb(149,150,150)', comorosColor: 'rgb(149,150,150)', cookIslandsColor: 'rgb(149,150,150)', costaRicaColor: 'rgb(149,150,150)', croatiaColor: 'rgb(149,150,150)', cubaColor: 'rgb(149,150,150)', curacaoColor: 'rgb(149,150,150)', cyprusColor: 'rgb(149,150,150)', czechRepublicColor: 'rgb(149,150,150)', democraticRepublicOfTheCongoColor: 'rgb(149,150,150)', denmarkColor: 'rgb(149,150,150)', djiboutiColor: 'rgb(149,150,150)', dominicaColor: 'rgb(149,150,150)', dominicanRepublicColor: 'rgb(149,150,150)', eastTimorColor: 'rgb(149,150,150)', ecuadorColor: 'rgb(149,150,150)', egyptColor: 'rgb(149,150,150)', elSalvadorColor: 'rgb(149,150,150)', equatorialGuineaColor: 'rgb(149,150,150)', eritreaColor: 'rgb(149,150,150)', estoniaColor: 'rgb(149,150,150)', eswatiniColor: 'rgb(149,150,150)', ethiopiaColor: 'rgb(149,150,150)', falklandIslandsColor: 'rgb(149,150,150)', faroeIslandsColor: 'rgb(149,150,150)', fijiColor: 'rgb(149,150,150)', finlandColor: 'rgb(149,150,150)', franceColor: 'rgb(149,150,150)', frenchGuianaColor: 'rgb(149,150,150)', frenchPolynesiaColor: 'rgb(149,150,150)', gabonColor: 'rgb(149,150,150)', gambiaColor: 'rgb(149,150,150)', georgiaColor: 'rgb(149,150,150)', germanyColor: 'rgb(149,150,150)', ghanaColor: 'rgb(149,150,150)', gibraltarColor: 'rgb(149,150,150)', greeceColor: 'rgb(149,150,150)', greenlandColor: 'rgb(149,150,150)', grenadaColor: 'rgb(149,150,150)', guadeloupeColor: 'rgb(149,150,150)', guamColor: 'rgb(149,150,150)', guatemalaColor: 'rgb(149,150,150)', guineaColor: 'rgb(149,150,150)', guineaBissauColor: 'rgb(149,150,150)', guyanaColor: 'rgb(149,150,150)', haitiColor: 'rgb(149,150,150)', hondurasColor: 'rgb(149,150,150)', hongKongColor: 'rgb(149,150,150)', hungaryColor: 'rgb(149,150,150)', icelandColor: 'rgb(149,150,150)', indiaColor: 'rgb(149,150,150)', indonesiaColor: 'rgb(149,150,150)', iranColor: 'rgb(149,150,150)', iraqColor: 'rgb(149,150,150)', irelandColor: 'rgb(149,150,150)', kosovoColor: 'rgb(149,150,150)', kurdistanColor: 'rgb(149,150,150)', israelColor: 'rgb(149,150,150)', italyColor: 'rgb(149,150,150)', ivoryCoastColor: 'rgb(149,150,150)', jamaicaColor: 'rgb(149,150,150)', janMayenColor: 'rgb(149,150,150)', japanColor: 'rgb(149,150,150)', jordanColor: 'rgb(149,150,150)', kazakhstanColor: 'rgb(149,150,150)', kenyaColor: 'rgb(149,150,150)', kiribatiColor: 'rgb(149,150,150)', kuwaitColor: 'rgb(149,150,150)', kyrgyzstanColor: 'rgb(149,150,150)', laosColor: 'rgb(149,150,150)', latviaColor: 'rgb(149,150,150)', lebanonColor: 'rgb(149,150,150)', lesothoColor: 'rgb(149,150,150)', liberiaColor: 'rgb(149,150,150)', libyaColor: 'rgb(149,150,150)', liechtensteinColor: 'rgb(149,150,150)', lithuaniaColor: 'rgb(149,150,150)', luxembourgColor: 'rgb(149,150,150)', macaoColor: 'rgb(149,150,150)', madagascarColor: 'rgb(149,150,150)', malawiColor: 'rgb(149,150,150)', malaysiaColor: 'rgb(149,150,150)', maldivesColor: 'rgb(149,150,150)', maliColor: 'rgb(149,150,150)', maltaColor: 'rgb(149,150,150)', marshallIslandsColor: 'rgb(149,150,150)', martiniqueColor: 'rgb(149,150,150)', mauritaniaColor: 'rgb(149,150,150)', mauritiusColor: 'rgb(149,150,150)', mayotteColor: 'rgb(149,150,150)', mexicoColor: 'rgb(149,150,150)', micronesiaColor: 'rgb(149,150,150)', moldovaColor: 'rgb(149,150,150)', monacoColor: 'rgb(149,150,150)', mongoliaColor: 'rgb(149,150,150)', montenegroColor: 'rgb(149,150,150)', montserratColor: 'rgb(149,150,150)', moroccoColor: 'rgb(149,150,150)', mozambiqueColor: 'rgb(149,150,150)', myanmarColor: 'rgb(149,150,150)', namibiaColor: 'rgb(149,150,150)', nauruColor: 'rgb(149,150,150)', nepalColor: 'rgb(149,150,150)', netherlandsColor: 'rgb(149,150,150)', newCaledoniaColor: 'rgb(149,150,150)', newZealandColor: 'rgb(149,150,150)', nicaraguaColor: 'rgb(149,150,150)', nigerColor: 'rgb(149,150,150)', nigeriaColor: 'rgb(149,150,150)', niueColor: 'rgb(149,150,150)', northernCyprusColor: 'rgb(149,150,150)', northernMarianaIslandsColor: 'rgb(149,150,150)', northKoreaColor: 'rgb(149,150,150)', northMacedoniaColor: 'rgb(149,150,150)', norwayColor: 'rgb(149,150,150)', omanColor: 'rgb(149,150,150)', pakistanColor: 'rgb(149,150,150)', palauColor: 'rgb(149,150,150)', palestineColor: 'rgb(149,150,150)', panamaColor: 'rgb(149,150,150)', papuaNewGuineaColor: 'rgb(149,150,150)', paraguayColor: 'rgb(149,150,150)', peruColor: 'rgb(149,150,150)', philippinesColor: 'rgb(149,150,150)', pitcairnIslandsColor: 'rgb(149,150,150)', polandColor: 'rgb(149,150,150)', portugalColor: 'rgb(149,150,150)', qatarColor: 'rgb(149,150,150)', republicOfTheCongoColor: 'rgb(149,150,150)', reunionColor: 'rgb(149,150,150)', romaniaColor: 'rgb(149,150,150)', russiaColor: 'rgb(149,150,150)', rwandaColor: 'rgb(149,150,150)', sabaColor: 'rgb(149,150,150)', saintBarthelemyColor: 'rgb(149,150,150)', saintHelenaColor: 'rgb(149,150,150)', saintKittsAndNevisColor: 'rgb(149,150,150)', saintLuciaColor: 'rgb(149,150,150)', saintMartinColor: 'rgb(149,150,150)', saintPierreAndMiquelonColor: 'rgb(149,150,150)', saintVincentAndTheGrenadinesColor: 'rgb(149,150,150)', samoaColor: 'rgb(149,150,150)', sanMarinoColor: 'rgb(149,150,150)', saoTomeAndPrincipeColor: 'rgb(149,150,150)', saudiArabiaColor: 'rgb(149,150,150)', senegalColor: 'rgb(149,150,150)', serbiaColor: 'rgb(149,150,150)', seychellesColor: 'rgb(149,150,150)', sierraLeoneColor: 'rgb(149,150,150)', singaporeColor: 'rgb(149,150,150)', sintEustatiusColor: 'rgb(149,150,150)', sintMaartenColor: 'rgb(149,150,150)', slovakiaColor: 'rgb(149,150,150)', sloveniaColor: 'rgb(149,150,150)', solomonIslandsColor: 'rgb(149,150,150)', somaliaColor: 'rgb(149,150,150)', somalilandColor: 'rgb(149,150,150)', southAfricaColor: 'rgb(149,150,150)', southKoreaColor: 'rgb(149,150,150)', southOssetiaColor: 'rgb(149,150,150)', southSudanColor: 'rgb(149,150,150)', spainColor: 'rgb(149,150,150)', sriLankaColor: 'rgb(149,150,150)', sudanColor: 'rgb(149,150,150)', surinameColor: 'rgb(149,150,150)', svalbardColor: 'rgb(149,150,150)', swedenColor: 'rgb(149,150,150)', switzerlandColor: 'rgb(149,150,150)', syriaColor: 'rgb(149,150,150)', taiwanColor: 'rgb(149,150,150)', tajikistanColor: 'rgb(149,150,150)', tanzaniaColor: 'rgb(149,150,150)', thailandColor: 'rgb(149,150,150)', togoColor: 'rgb(149,150,150)', tokelauColor: 'rgb(149,150,150)', tongaColor: 'rgb(149,150,150)', transnistriaColor: 'rgb(149,150,150)', trinidadAndTobagoColor: 'rgb(149,150,150)', tristanDaCunhaColor:'rgb(149,150,150)', tunisiaColor: 'rgb(149,150,150)', turkeyColor: 'rgb(149,150,150)', turkmenistanColor: 'rgb(149,150,150)', turksAndCaicosColor: 'rgb(149,150,150)', tuvaluColor: 'rgb(149,150,150)', ugandaColor: 'rgb(149,150,150)', ukraineColor: 'rgb(149,150,150)', unitedArabEmiratesColor: 'rgb(149,150,150)', unitedKingdomColor: 'rgb(149,150,150)', unitedStatesColor: 'rgb(149,150,150)', unitedStatesVirginIslandsColor: 'rgb(149,150,150)', uruguayColor: 'rgb(149,150,150)', uzbekistanColor: 'rgb(149,150,150)', vanuatuColor: 'rgb(149,150,150)', vaticanCityColor: 'rgb(149,150,150)', venezuelaColor: 'rgb(149,150,150)', vietnamColor: 'rgb(149,150,150)', wallisAndFutunaColor: 'rgb(149,150,150)', westernSaharaColor: 'rgb(149,150,150)', yemenColor: 'rgb(149,150,150)', zambiaColor: 'rgb(149,150,150)', zimbabweColor: 'rgb(149,150,150)' }

  const [toggle, setToggle] = useState<boolean>(false) //used by SelectorPassport to trigger useEffect
  const [openDrawer, setOpenDrawer] = useState<boolean>(false) //MUI drawer toggle
  const [percentage, setPercentage] = useState<number>(0)
  const [width, setWidth] = useState(0)
  const [mousePos, setMousePos] = useState<number[]>([])
  const [hover, setHover] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>('Sort by: Total (Descending)')
  const [language, setLanguage] = useState<string>('🇬🇧EN')
  const [countrySelect, setCountrySelect] = useState<string>('')
  const [selectorLoad, setSelectorLoad] = useState<boolean>(true)
  const selectRef = useRef<any>({ selection: 0, passport: null })
  const assignedColorsRef = useRef<any>([color,color,color,color,color,color,color,color,color,color,color])
  const selectArrayRef = useRef<any>([null,null,null,null,null,null,null,null,null,null,null])
  const priorityRef = useRef<any>(color) //priority is the color that is passed onto each country component as context
  const tempPriorityRef = useRef<any>(color)
  const rankRef = useRef<any>([])
  const diffRef = useRef<any>({AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AK:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0})
  const tempDiffRef = useRef<any>({AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AK:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0})

  //value is passed in as context to the country components
  const colorProvider:any = { abkhaziaColor: priorityRef.current.abkhaziaColor, afghanistanColor: priorityRef.current.afghanistanColor, albaniaColor: priorityRef.current.albaniaColor, algeriaColor: priorityRef.current.algeriaColor, americanSamoaColor: priorityRef.current.americanSamoaColor, andorraColor: priorityRef.current.andorraColor, angolaColor: priorityRef.current.angolaColor, anguillaColor: priorityRef.current.anguillaColor, antiguaAndBarbudaColor: priorityRef.current.antiguaAndBarbudaColor, argentinaColor: priorityRef.current.argentinaColor, armeniaColor: priorityRef.current.armeniaColor, artsakhColor: priorityRef.current.artsakhColor, arubaColor: priorityRef.current.arubaColor, ascensionIslandColor: priorityRef.current.ascensionIslandColor, australiaColor: priorityRef.current.australiaColor, austriaColor: priorityRef.current.austriaColor, azerbaijanColor: priorityRef.current.azerbaijanColor, bahamasColor: priorityRef.current.bahamasColor, bahrainColor: priorityRef.current.bahrainColor, bangladeshColor: priorityRef.current.bangladeshColor, barbadosColor: priorityRef.current.barbadosColor, belarusColor: priorityRef.current.belarusColor, belgiumColor: priorityRef.current.belgiumColor, belizeColor: priorityRef.current.belizeColor, beninColor: priorityRef.current.beninColor, bermudaColor: priorityRef.current.bermudaColor, bhutanColor: priorityRef.current.bhutanColor, boliviaColor: priorityRef.current.boliviaColor, bonaireColor: priorityRef.current.bonaireColor, bosniaAndHerzegovinaColor: priorityRef.current.bosniaAndHerzegovinaColor, botswanaColor: priorityRef.current.botswanaColor, brazilColor: priorityRef.current.brazilColor, britishIndianOceanTerritoryColor: priorityRef.current.britishIndianOceanTerritoryColor, britishVirginIslandsColor: priorityRef.current.britishVirginIslandsColor, bruneiColor: priorityRef.current.bruneiColor, bulgariaColor: priorityRef.current.bulgariaColor, burkinaFasoColor: priorityRef.current.burkinaFasoColor, burundiColor: priorityRef.current.burundiColor, cambodiaColor: priorityRef.current.cambodiaColor, cameroonColor: priorityRef.current.cameroonColor, canadaColor: priorityRef.current.canadaColor, capeVerdeColor: priorityRef.current.capeVerdeColor, caymanIslandsColor: priorityRef.current.caymanIslandsColor, centralAfricanRepublicColor: priorityRef.current.centralAfricanRepublicColor, chadColor: priorityRef.current.chadColor, chileColor: priorityRef.current.chileColor, chinaColor: priorityRef.current.chinaColor, colombiaColor: priorityRef.current.colombiaColor, comorosColor: priorityRef.current.comorosColor, cookIslandsColor: priorityRef.current.cookIslandsColor, costaRicaColor: priorityRef.current.costaRicaColor, croatiaColor: priorityRef.current.croatiaColor, cubaColor: priorityRef.current.cubaColor, curacaoColor: priorityRef.current.curacaoColor, cyprusColor: priorityRef.current.cyprusColor, czechRepublicColor: priorityRef.current.czechRepublicColor, democraticRepublicOfTheCongoColor: priorityRef.current.democraticRepublicOfTheCongoColor, denmarkColor: priorityRef.current.denmarkColor, djiboutiColor: priorityRef.current.djiboutiColor, dominicaColor: priorityRef.current.dominicaColor, dominicanRepublicColor: priorityRef.current.dominicanRepublicColor, eastTimorColor: priorityRef.current.eastTimorColor, ecuadorColor: priorityRef.current.ecuadorColor, egyptColor: priorityRef.current.egyptColor, elSalvadorColor: priorityRef.current.elSalvadorColor, equatorialGuineaColor: priorityRef.current.equatorialGuineaColor, eritreaColor: priorityRef.current.eritreaColor, estoniaColor: priorityRef.current.estoniaColor, eswatiniColor: priorityRef.current.eswatiniColor, ethiopiaColor: priorityRef.current.ethiopiaColor, falklandIslandsColor: priorityRef.current.falklandIslandsColor, faroeIslandsColor: priorityRef.current.faroeIslandsColor, fijiColor: priorityRef.current.fijiColor, finlandColor: priorityRef.current.finlandColor, franceColor: priorityRef.current.franceColor, frenchGuianaColor: priorityRef.current.frenchGuianaColor, frenchPolynesiaColor: priorityRef.current.frenchPolynesiaColor, gabonColor: priorityRef.current.gabonColor, gambiaColor: priorityRef.current.gambiaColor, georgiaColor: priorityRef.current.georgiaColor, germanyColor: priorityRef.current.germanyColor, ghanaColor: priorityRef.current.ghanaColor, gibraltarColor: priorityRef.current.gibraltarColor, greeceColor: priorityRef.current.greeceColor, greenlandColor: priorityRef.current.greenlandColor, grenadaColor: priorityRef.current.grenadaColor, guadeloupeColor: priorityRef.current.guadeloupeColor, guamColor: priorityRef.current.guamColor, guatemalaColor: priorityRef.current.guatemalaColor, guineaColor: priorityRef.current.guineaColor, guineaBissauColor: priorityRef.current.guineaBissauColor, guyanaColor: priorityRef.current.guyanaColor, haitiColor: priorityRef.current.haitiColor, hondurasColor: priorityRef.current.hondurasColor, hongKongColor: priorityRef.current.hongKongColor, hungaryColor: priorityRef.current.hungaryColor, icelandColor: priorityRef.current.icelandColor, indiaColor: priorityRef.current.indiaColor, indonesiaColor: priorityRef.current.indonesiaColor, iranColor: priorityRef.current.iranColor, iraqColor: priorityRef.current.iraqColor, irelandColor: priorityRef.current.irelandColor, israelColor: priorityRef.current.israelColor, italyColor: priorityRef.current.italyColor, ivoryCoastColor: priorityRef.current.ivoryCoastColor, jamaicaColor: priorityRef.current.jamaicaColor, janMayenColor: priorityRef.current.janMayenColor, japanColor: priorityRef.current.japanColor, jordanColor: priorityRef.current.jordanColor, kazakhstanColor: priorityRef.current.kazakhstanColor, kenyaColor: priorityRef.current.kenyaColor, kiribatiColor: priorityRef.current.kiribatiColor, kosovoColor: priorityRef.current.kosovoColor, kurdistanColor: priorityRef.current.kurdistanColor, kuwaitColor: priorityRef.current.kuwaitColor, kyrgyzstanColor: priorityRef.current.kyrgyzstanColor, laosColor: priorityRef.current.laosColor, latviaColor: priorityRef.current.latviaColor, lebanonColor: priorityRef.current.lebanonColor, lesothoColor: priorityRef.current.lesothoColor, liberiaColor: priorityRef.current.liberiaColor, libyaColor: priorityRef.current.libyaColor, liechtensteinColor: priorityRef.current.liechtensteinColor, lithuaniaColor: priorityRef.current.lithuaniaColor, luxembourgColor: priorityRef.current.luxembourgColor, macaoColor: priorityRef.current.macaoColor, madagascarColor: priorityRef.current.madagascarColor, malawiColor: priorityRef.current.malawiColor, malaysiaColor: priorityRef.current.malaysiaColor, maldivesColor: priorityRef.current.maldivesColor, maliColor: priorityRef.current.maliColor, maltaColor: priorityRef.current.maltaColor, marshallIslandsColor: priorityRef.current.marshallIslandsColor, martiniqueColor: priorityRef.current.martiniqueColor, mauritaniaColor: priorityRef.current.mauritaniaColor, mauritiusColor: priorityRef.current.mauritiusColor, mayotteColor: priorityRef.current.mayotteColor, mexicoColor: priorityRef.current.mexicoColor, micronesiaColor: priorityRef.current.micronesiaColor, moldovaColor: priorityRef.current.moldovaColor, monacoColor: priorityRef.current.monacoColor, mongoliaColor: priorityRef.current.mongoliaColor, montenegroColor: priorityRef.current.montenegroColor, montserratColor: priorityRef.current.montserratColor, moroccoColor: priorityRef.current.moroccoColor, mozambiqueColor: priorityRef.current.mozambiqueColor, myanmarColor: priorityRef.current.myanmarColor, namibiaColor: priorityRef.current.namibiaColor, nauruColor: priorityRef.current.nauruColor, nepalColor: priorityRef.current.nepalColor, netherlandsColor: priorityRef.current.netherlandsColor, newCaledoniaColor: priorityRef.current.newCaledoniaColor, newZealandColor: priorityRef.current.newZealandColor, nicaraguaColor: priorityRef.current.nicaraguaColor, nigerColor: priorityRef.current.nigerColor, nigeriaColor: priorityRef.current.nigeriaColor, niueColor: priorityRef.current.niueColor, northernCyprusColor: priorityRef.current.northernCyprusColor, northernMarianaIslandsColor: priorityRef.current.northernMarianaIslandsColor, northKoreaColor: priorityRef.current.northKoreaColor, northMacedoniaColor: priorityRef.current.northMacedoniaColor, norwayColor: priorityRef.current.norwayColor, omanColor: priorityRef.current.omanColor, pakistanColor: priorityRef.current.pakistanColor, palauColor: priorityRef.current.palauColor, palestineColor: priorityRef.current.palestineColor, panamaColor: priorityRef.current.panamaColor, papuaNewGuineaColor: priorityRef.current.papuaNewGuineaColor, paraguayColor: priorityRef.current.paraguayColor, peruColor: priorityRef.current.peruColor, philippinesColor: priorityRef.current.philippinesColor, pitcairnIslandsColor: priorityRef.current.pitcairnIslandsColor, polandColor: priorityRef.current.polandColor, portugalColor: priorityRef.current.portugalColor, qatarColor: priorityRef.current.qatarColor, republicOfTheCongoColor: priorityRef.current.republicOfTheCongoColor, reunionColor: priorityRef.current.reunionColor, romaniaColor: priorityRef.current.romaniaColor, russiaColor: priorityRef.current.russiaColor, rwandaColor: priorityRef.current.rwandaColor, sabaColor: priorityRef.current.sabaColor, saintBarthelemyColor: priorityRef.current.saintBarthelemyColor, saintHelenaColor: priorityRef.current.saintHelenaColor, saintKittsAndNevisColor: priorityRef.current.saintKittsAndNevisColor, saintLuciaColor: priorityRef.current.saintLuciaColor, saintMartinColor: priorityRef.current.saintMartinColor, saintPierreAndMiquelonColor: priorityRef.current.saintPierreAndMiquelonColor, saintVincentAndTheGrenadinesColor: priorityRef.current.saintVincentAndTheGrenadinesColor, samoaColor: priorityRef.current.samoaColor, sanMarinoColor: priorityRef.current.sanMarinoColor, saoTomeAndPrincipeColor: priorityRef.current.saoTomeAndPrincipeColor, saudiArabiaColor: priorityRef.current.saudiArabiaColor, senegalColor: priorityRef.current.senegalColor, serbiaColor: priorityRef.current.serbiaColor, seychellesColor: priorityRef.current.seychellesColor, sierraLeoneColor: priorityRef.current.sierraLeoneColor, singaporeColor: priorityRef.current.singaporeColor, sintEustatiusColor: priorityRef.current.sintEustatiusColor, sintMaartenColor: priorityRef.current.sintMaartenColor, slovakiaColor: priorityRef.current.slovakiaColor, sloveniaColor: priorityRef.current.sloveniaColor, solomonIslandsColor: priorityRef.current.solomonIslandsColor, somaliaColor: priorityRef.current.somaliaColor, somalilandColor: priorityRef.current.somalilandColor, southAfricaColor: priorityRef.current.southAfricaColor, southKoreaColor: priorityRef.current.southKoreaColor, southOssetiaColor: priorityRef.current.southOssetiaColor, southSudanColor: priorityRef.current.southSudanColor, spainColor: priorityRef.current.spainColor, sriLankaColor: priorityRef.current.sriLankaColor, sudanColor: priorityRef.current.sudanColor, surinameColor: priorityRef.current.surinameColor, svalbardColor: priorityRef.current.svalbardColor, swedenColor: priorityRef.current.swedenColor, switzerlandColor: priorityRef.current.switzerlandColor, syriaColor: priorityRef.current.syriaColor, taiwanColor: priorityRef.current.taiwanColor, tajikistanColor: priorityRef.current.tajikistanColor, tanzaniaColor: priorityRef.current.tanzaniaColor, thailandColor: priorityRef.current.thailandColor, togoColor: priorityRef.current.togoColor, tokelauColor: priorityRef.current.tokelauColor, tongaColor: priorityRef.current.tongaColor, transnistriaColor: priorityRef.current.transnistriaColor, trinidadAndTobagoColor: priorityRef.current.trinidadAndTobagoColor, tristanDaCunhaColor: priorityRef.current.tristanDaCunhaColor, tunisiaColor: priorityRef.current.tunisiaColor, turkeyColor: priorityRef.current.turkeyColor, turkmenistanColor: priorityRef.current.turkmenistanColor, turksAndCaicosColor: priorityRef.current.turksAndCaicosColor, tuvaluColor: priorityRef.current.tuvaluColor, ugandaColor: priorityRef.current.ugandaColor, ukraineColor: priorityRef.current.ukraineColor, unitedArabEmiratesColor: priorityRef.current.unitedArabEmiratesColor, unitedKingdomColor: priorityRef.current.unitedKingdomColor, unitedStatesColor: priorityRef.current.unitedStatesColor, unitedStatesVirginIslandsColor: priorityRef.current.unitedStatesVirginIslandsColor, uruguayColor: priorityRef.current.uruguayColor, uzbekistanColor: priorityRef.current.uzbekistanColor, vanuatuColor: priorityRef.current.vanuatuColor, vaticanCityColor: priorityRef.current.vaticanCityColor, venezuelaColor: priorityRef.current.venezuelaColor, vietnamColor: priorityRef.current.vietnamColor, wallisAndFutunaColor: priorityRef.current.wallisAndFutunaColor, westernSaharaColor: priorityRef.current.westernSaharaColor, yemenColor: priorityRef.current.yemenColor, zambiaColor: priorityRef.current.zambiaColor, zimbabweColor: priorityRef.current.zimbabweColor }
  const diffProvider:any = { AB:diffRef.current.AB,AF:diffRef.current.AF,AL:diffRef.current.AL,DZ:diffRef.current.DZ,AS:diffRef.current.AS,AD:diffRef.current.AD,AO:diffRef.current.AO,AI:diffRef.current.AI,AG:diffRef.current.AG,AR:diffRef.current.AR,AM:diffRef.current.AM,AK:diffRef.current.AK,AW:diffRef.current.AW,AC:diffRef.current.AC,AU:diffRef.current.AU,AT:diffRef.current.AT,AZ:diffRef.current.AZ,BS:diffRef.current.BS,BH:diffRef.current.BH,BD:diffRef.current.BD,BB:diffRef.current.BB,BY:diffRef.current.BY,BE:diffRef.current.BE,BZ:diffRef.current.BZ,BJ:diffRef.current.BJ,BM:diffRef.current.BM,BT:diffRef.current.BT,BO:diffRef.current.BO,XB:diffRef.current.XB,BA:diffRef.current.BA,BW:diffRef.current.BW,BR:diffRef.current.BR,IO:diffRef.current.IO,VG:diffRef.current.VG,BN:diffRef.current.BN,BG:diffRef.current.BG,BF:diffRef.current.BF,BI:diffRef.current.BI,KH:diffRef.current.KH,CM:diffRef.current.CM,CA:diffRef.current.CA,CV:diffRef.current.CV,KY:diffRef.current.KY,CF:diffRef.current.CF,TD:diffRef.current.TD,CL:diffRef.current.CL,CN:diffRef.current.CN,CO:diffRef.current.CO,KM:diffRef.current.KM,CK:diffRef.current.CK,CR:diffRef.current.CR,HR:diffRef.current.HR,CU:diffRef.current.CU,CW:diffRef.current.CW,CY:diffRef.current.CY,CZ:diffRef.current.CZ,CD:diffRef.current.CD,DK:diffRef.current.DK,DJ:diffRef.current.DJ,DM:diffRef.current.DM,DO:diffRef.current.DO,TL:diffRef.current.TL,EC:diffRef.current.EC,EG:diffRef.current.EG,SV:diffRef.current.SV,GQ:diffRef.current.GQ,ER:diffRef.current.ER,EE:diffRef.current.EE,SZ:diffRef.current.SZ,ET:diffRef.current.ET,FK:diffRef.current.FK,FO:diffRef.current.FO,FJ:diffRef.current.FJ,FI:diffRef.current.FI,FR:diffRef.current.FR,GF:diffRef.current.GF,PF:diffRef.current.PF,GA:diffRef.current.GA,GM:diffRef.current.GM,GE:diffRef.current.GE,DE:diffRef.current.DE,GH:diffRef.current.GH,GI:diffRef.current.GI,GR:diffRef.current.GR,GL:diffRef.current.GL,GD:diffRef.current.GD,GP:diffRef.current.GP,GU:diffRef.current.GU,GT:diffRef.current.GT,GN:diffRef.current.GN,GW:diffRef.current.GW,GY:diffRef.current.GY,HT:diffRef.current.HT,HN:diffRef.current.HN,HK:diffRef.current.HK,HU:diffRef.current.HU,IS:diffRef.current.IS,IN:diffRef.current.IN,ID:diffRef.current.ID,IR:diffRef.current.IR,IQ:diffRef.current.IQ,IE:diffRef.current.IE,IL:diffRef.current.IL,IT:diffRef.current.IT,CI:diffRef.current.CI,JM:diffRef.current.JM,XM:diffRef.current.XM,JP:diffRef.current.JP,JO:diffRef.current.JO,KZ:diffRef.current.KZ,KE:diffRef.current.KE,KI:diffRef.current.KI,XK:diffRef.current.XK,KX:diffRef.current.KX,KW:diffRef.current.KW,KG:diffRef.current.KG,LA:diffRef.current.LA,LV:diffRef.current.LV,LB:diffRef.current.LB,LS:diffRef.current.LS,LR:diffRef.current.LR,LY:diffRef.current.LY,LI:diffRef.current.LI,LT:diffRef.current.LT,LU:diffRef.current.LU,MO:diffRef.current.MO,MG:diffRef.current.MG,MW:diffRef.current.MW,MY:diffRef.current.MY,MV:diffRef.current.MV,ML:diffRef.current.ML,MT:diffRef.current.MT,MH:diffRef.current.MH,MQ:diffRef.current.MQ,MR:diffRef.current.MR,MU:diffRef.current.MU,YT:diffRef.current.YT,MX:diffRef.current.MX,FM:diffRef.current.FM,MD:diffRef.current.MD,MC:diffRef.current.MC,MN:diffRef.current.MN,ME:diffRef.current.ME,MS:diffRef.current.MS,MA:diffRef.current.MA,MZ:diffRef.current.MZ,MM:diffRef.current.MM,NA:diffRef.current.NA,NR:diffRef.current.NR,NP:diffRef.current.NP,NL:diffRef.current.NL,NC:diffRef.current.NC,NZ:diffRef.current.NZ,NI:diffRef.current.NI,NE:diffRef.current.NE,NG:diffRef.current.NG,NU:diffRef.current.NU,RC:diffRef.current.RC,MP:diffRef.current.MP,KP:diffRef.current.KP,MK:diffRef.current.MK,NO:diffRef.current.NO,OM:diffRef.current.OM,PK:diffRef.current.PK,PW:diffRef.current.PW,PS:diffRef.current.PS,PA:diffRef.current.PA,PG:diffRef.current.PG,PY:diffRef.current.PY,PE:diffRef.current.PE,PH:diffRef.current.PH,PN:diffRef.current.PN,PL:diffRef.current.PL,PT:diffRef.current.PT,QA:diffRef.current.QA,CG:diffRef.current.CG,RE:diffRef.current.RE,RO:diffRef.current.RO,RU:diffRef.current.RU,RW:diffRef.current.RW,XS:diffRef.current.XS,BL:diffRef.current.BL,SH:diffRef.current.SH,KN:diffRef.current.KN,LC:diffRef.current.LC,MF:diffRef.current.MF,PM:diffRef.current.PM,VC:diffRef.current.VC,WS:diffRef.current.WS,SM:diffRef.current.SM,ST:diffRef.current.ST,SA:diffRef.current.SA,SN:diffRef.current.SN,RS:diffRef.current.RS,SC:diffRef.current.SC,SL:diffRef.current.SL,SG:diffRef.current.SG,XE:diffRef.current.XE,SX:diffRef.current.SX,SK:diffRef.current.SK,SI:diffRef.current.SI,SB:diffRef.current.SB,SO:diffRef.current.SO,XX:diffRef.current.XX,ZA:diffRef.current.ZA,KR:diffRef.current.KR,XO:diffRef.current.XO,SS:diffRef.current.SS,ES:diffRef.current.ES,LK:diffRef.current.LK,SD:diffRef.current.SD,SR:diffRef.current.SR,XV:diffRef.current.XV,SE:diffRef.current.SE,CH:diffRef.current.CH,SY:diffRef.current.SY,TW:diffRef.current.TW,TJ:diffRef.current.TJ,TZ:diffRef.current.TZ,TH:diffRef.current.TH,TG:diffRef.current.TG,TK:diffRef.current.TK,TO:diffRef.current.TO,XT:diffRef.current.XT,TT:diffRef.current.TT,TX:diffRef.current.TX,TN:diffRef.current.TN,TR:diffRef.current.TR,TM:diffRef.current.TM,TC:diffRef.current.TC,TV:diffRef.current.TV,UG:diffRef.current.UG,UA:diffRef.current.UA,AE:diffRef.current.AE,GB:diffRef.current.GB,US:diffRef.current.US,VI:diffRef.current.VI,UY:diffRef.current.UY,UZ:diffRef.current.UZ,VU:diffRef.current.VU,VA:diffRef.current.VA,VE:diffRef.current.VE,VN:diffRef.current.VN,WF:diffRef.current.WF,EH:diffRef.current.EH,YE:diffRef.current.YE,ZM:diffRef.current.ZM,ZW:diffRef.current.ZW }
  const languageProvider:any = { language: language }
  const widthProvider:any = { width: width }
  const countrySelectProvider:any = { setCountrySelect: setCountrySelect }

  useEffect(() => {
    setWidth(document.body.clientWidth - 2)
    fetchSortData(rankRef, 1, 'Descending')

    const handleMouseMove = (event) => {setMousePos([event.clientX, event.clientY])}
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )
    }
  }, [])

  useEffect(() => {
    if(selectArrayRef.current[selectRef.current.selection] != null && selectArrayRef.current[selectRef.current.selection] != selectRef.current.passport) {
      selectArrayRef.current[selectRef.current.selection] = selectRef.current.passport
      priorityRef.current = color
      tempPriorityRef.current = color
      assignedColorsRef.current = [color,color,color,color,color,color,color,color,color,color,color]
      diffRef.current = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AK:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BV:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
      tempDiffRef.current = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AK:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
      let i = 0
      while(selectArrayRef.current[i] != null) {
        mainCalculation(false, selectArrayRef.current[i], assignedColorsRef, selectRef, priorityRef, selectArrayRef, diffRef, setPercentage)
        i++
      }

      return
    }
    selectArrayRef.current[selectRef.current.selection] = selectRef.current.passport
    if(selectArrayRef.current[selectRef.current.selection] != null) { mainCalculation(true, selectArrayRef.current[selectRef.current.selection], assignedColorsRef, selectRef, priorityRef, selectArrayRef, diffRef, setPercentage) }
  }, [toggle])

  return (
    <CountrySelectContext.Provider value={countrySelectProvider}>
    <DiffContext.Provider value={diffProvider}>
    <ColorContext.Provider value={colorProvider}>
    <PassportContext.Provider value={passportsProvider}>
    <LanguageContext.Provider value={languageProvider}>
    <WidthContext.Provider value={widthProvider}>
      <Component {...pageProps}
        selectArrayRef={selectArrayRef}
        assignedColorsRef={assignedColorsRef}
        rankRef={rankRef}
        sortBy={sortBy}
        setSortBy={setSortBy}
        mousePos={mousePos}
        hover={hover}
        setHover={setHover}
        priorityRef={priorityRef}
        tempPriorityRef={tempPriorityRef}
        countrySelect={countrySelect}
        setSelectorLoad={setSelectorLoad}
        diffRef={diffRef}
        tempDiffRef={tempDiffRef}
      />
      <Selector
        Drawer={Drawer}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        selectRef={selectRef}
        toggle={toggle}
        setToggle={setToggle}
        selectArrayRef={selectArrayRef}
        priorityRef={priorityRef}
        tempPriorityRef={tempPriorityRef}
        assignedColorsRef={assignedColorsRef}
        diffRef={diffRef}
        percentage={percentage}
        setPercentage={setPercentage}
        selectorLoad={selectorLoad}
        tempDiffRef={tempDiffRef}
      />
      <Header
        language={language}
        setLanguage={setLanguage}
      />
      <Analytics />
    </WidthContext.Provider>
    </LanguageContext.Provider>
    </PassportContext.Provider>
    </ColorContext.Provider>
    </DiffContext.Provider>
    </CountrySelectContext.Provider>
  )
}

export default MyApp