import { PassportContext } from '../logic/context/PassportContext'
import { ColorContext } from '../logic/context/ColorContext'
import { DiffContext } from '../logic/context/DiffContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { CountrySelectContext } from '../logic/context/CountrySelectContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect, useRef } from 'react'
import { StaticImageData } from 'next/image'
import { Drawer } from '@mui/material'
//logic imports
import mainCalculation from '../logic/visaPolicyCalculation/mainCalculation'
import fetchSortData from '../logic/rankSorting/fetchSortData'
import assignedVisaDurationCalculation from '../logic/visaPolicyCalculation/assignedVisaDurationCalculation'
import visaDurationCalculation from '../logic/visaPolicyCalculation/visaDurationCalculation'
import legendCalculation from '../logic/legendCalculation'
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
import britishNationalOverseas from '/public/passports/britishNationalOverseas.webp'
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
import kosovo from 'public/passports/kosovo.webp'
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
import northernCyprus from '/public/passports/northernCyprus.webp'
import northKorea from '/public/passports/northKorea.webp'
import northMacedonia from '/public/passports/northMacedonia.webp'
import norway from '/public/passports/norway.webp'
import oman from '/public/passports/oman.webp'
import pakistan from '/public/passports/pakistan.webp'
import palau from '/public/passports/palau.webp'
import palestine from '/public/passports/palestine.webp'
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
import somaliland from '/public/passports/somaliland.webp'
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
const passportsProvider:{[key:string]:StaticImageData} = {abkhazia,afghanistan,albania,algeria,andorra,angola,anguilla,antiguaAndBarbuda,argentina,armenia,australia,austria,azerbaijan,bahamas,bahrain,bangladesh,barbados,belarus,belgium,belize,benin,bermuda,bhutan,bolivia,bosniaAndHerzegovina,botswana,brazil,britishNationalOverseas,britishVirginIslands,brunei,bulgaria,burkinaFaso,burundi,cambodia,cameroon,canada,capeVerde,caymanIslands,centralAfricanRepublic,chad,chile,china,colombia,comoros,costaRica,croatia,cuba,cyprus,czechRepublic,democraticRepublicOfTheCongo,eastTimor,denmark,djibouti,dominica,dominicanRepublic,ecuador,egypt,elSalvador,equatorialGuinea,eritrea,estonia,eswatini,ethiopia,fiji,finland,france,gabon,gambia,georgia,germany,ghana,greece,grenada,guatemala,guinea,guineaBissau,guyana,haiti,honduras,hongKong,hungary,iceland,india,indonesia,iran,iraq,ireland,israel,italy,ivoryCoast,jamaica,japan,jordan,kazakhstan,kenya,kiribati,kosovo,kuwait,kyrgyzstan,laos,latvia,lebanon,lesotho,liberia,libya,liechtenstein,lithuania,luxembourg,macao,madagascar,malawi,malaysia,maldives,mali,malta,marshallIslands,mauritania,mauritius,mexico,micronesia,moldova,monaco,mongolia,montenegro,montserrat,morocco,mozambique,myanmar,namibia,nauru,nepal,netherlands,newZealand,nicaragua,niger,nigeria,northernCyprus,northKorea,northMacedonia,norway,oman,pakistan,palau,palestine,panama,papuaNewGuinea,paraguay,peru,philippines,poland,portugal,qatar,republicOfTheCongo,romania,russia,rwanda,saintHelena,saintKittsAndNevis,saintLucia,saintVincentAndTheGrenadines,samoa,sanMarino,saoTomeAndPrincipe,saudiArabia,senegal,serbia,seychelles,sierraLeone,singapore,slovakia,slovenia,solomonIslands,somalia,somaliland,southAfrica,southKorea,southOssetia,southSudan,spain,sriLanka,sudan,suriname,sweden,switzerland,syria,taiwan,tajikistan,tanzania,thailand,togo,tonga,trinidadAndTobago,tunisia,turkey,turkmenistan,turksAndCaicos,tuvalu,uganda,ukraine,unitedArabEmirates,unitedKingdom,unitedStates,uruguay,uzbekistan,vanuatu,vaticanCity,venezuela,vietnam,yemen,zambia,zimbabwe}

function MyApp({ Component, pageProps }) {
  //base rgb variable used to reset rgb values
  const ISOcolor:{[key:string]:string} = {ab:'rgb(150,150,150)',af:'rgb(150,150,150)',al:'rgb(150,150,150)',dz:'rgb(150,150,150)',as:'rgb(150,150,150)',ad:'rgb(150,150,150)',ao:'rgb(150,150,150)',ai:'rgb(150,150,150)',ag:'rgb(150,150,150)',ar:'rgb(150,150,150)',am:'rgb(150,150,150)',aw:'rgb(150,150,150)',ac:'rgb(150,150,150)',au:'rgb(150,150,150)',at:'rgb(150,150,150)',az:'rgb(150,150,150)',bs:'rgb(150,150,150)',bh:'rgb(150,150,150)',bd:'rgb(150,150,150)',bb:'rgb(150,150,150)',by:'rgb(150,150,150)',be:'rgb(150,150,150)',bz:'rgb(150,150,150)',bj:'rgb(150,150,150)',bm:'rgb(150,150,150)',bt:'rgb(150,150,150)',bo:'rgb(150,150,150)',xb:'rgb(150,150,150)',ba:'rgb(150,150,150)',bw:'rgb(150,150,150)',br:'rgb(150,150,150)',io:'rgb(150,150,150)',vg:'rgb(150,150,150)',bn:'rgb(150,150,150)',bg:'rgb(150,150,150)',bf:'rgb(150,150,150)',bi:'rgb(150,150,150)',kh:'rgb(150,150,150)',cm:'rgb(150,150,150)',ca:'rgb(150,150,150)',cv:'rgb(150,150,150)',ky:'rgb(150,150,150)',cf:'rgb(150,150,150)',td:'rgb(150,150,150)',cl:'rgb(150,150,150)',cn:'rgb(150,150,150)',co:'rgb(150,150,150)',km:'rgb(150,150,150)',ck:'rgb(150,150,150)',cr:'rgb(150,150,150)',hr:'rgb(150,150,150)',cu:'rgb(150,150,150)',cw:'rgb(150,150,150)',cy:'rgb(150,150,150)',cz:'rgb(150,150,150)',cd:'rgb(150,150,150)',dk:'rgb(150,150,150)',dj:'rgb(150,150,150)',dm:'rgb(150,150,150)',do:'rgb(150,150,150)',tl:'rgb(150,150,150)',ec:'rgb(150,150,150)',eg:'rgb(150,150,150)',sv:'rgb(150,150,150)',gq:'rgb(150,150,150)',er:'rgb(150,150,150)',ee:'rgb(150,150,150)',sz:'rgb(150,150,150)',et:'rgb(150,150,150)',fk:'rgb(150,150,150)',fo:'rgb(150,150,150)',fj:'rgb(150,150,150)',fi:'rgb(150,150,150)',fr:'rgb(150,150,150)',gf:'rgb(150,150,150)',pf:'rgb(150,150,150)',ga:'rgb(150,150,150)',gm:'rgb(150,150,150)',ge:'rgb(150,150,150)',de:'rgb(150,150,150)',gh:'rgb(150,150,150)',gi:'rgb(150,150,150)',gr:'rgb(150,150,150)',gl:'rgb(150,150,150)',gd:'rgb(150,150,150)',gp:'rgb(150,150,150)',gu:'rgb(150,150,150)',gt:'rgb(150,150,150)',gn:'rgb(150,150,150)',gw:'rgb(150,150,150)',gy:'rgb(150,150,150)',ht:'rgb(150,150,150)',hn:'rgb(150,150,150)',hk:'rgb(150,150,150)',hu:'rgb(150,150,150)',is:'rgb(150,150,150)',in:'rgb(150,150,150)',id:'rgb(150,150,150)',ir:'rgb(150,150,150)',iq:'rgb(150,150,150)',ie:'rgb(150,150,150)',il:'rgb(150,150,150)',it:'rgb(150,150,150)',ci:'rgb(150,150,150)',jm:'rgb(150,150,150)',xm:'rgb(150,150,150)',jp:'rgb(150,150,150)',jo:'rgb(150,150,150)',kz:'rgb(150,150,150)',ke:'rgb(150,150,150)',ki:'rgb(150,150,150)',xk:'rgb(150,150,150)',kx:'rgb(150,150,150)',kw:'rgb(150,150,150)',kg:'rgb(150,150,150)',la:'rgb(150,150,150)',lv:'rgb(150,150,150)',lb:'rgb(150,150,150)',ls:'rgb(150,150,150)',lr:'rgb(150,150,150)',ly:'rgb(150,150,150)',li:'rgb(150,150,150)',lt:'rgb(150,150,150)',lu:'rgb(150,150,150)',mo:'rgb(150,150,150)',mg:'rgb(150,150,150)',mw:'rgb(150,150,150)',my:'rgb(150,150,150)',mv:'rgb(150,150,150)',ml:'rgb(150,150,150)',mt:'rgb(150,150,150)',mh:'rgb(150,150,150)',mq:'rgb(150,150,150)',mr:'rgb(150,150,150)',mu:'rgb(150,150,150)',yt:'rgb(150,150,150)',mx:'rgb(150,150,150)',fm:'rgb(150,150,150)',md:'rgb(150,150,150)',mc:'rgb(150,150,150)',mn:'rgb(150,150,150)',me:'rgb(150,150,150)',ms:'rgb(150,150,150)',ma:'rgb(150,150,150)',mz:'rgb(150,150,150)',mm:'rgb(150,150,150)',na:'rgb(150,150,150)',nr:'rgb(150,150,150)',np:'rgb(150,150,150)',nl:'rgb(150,150,150)',nc:'rgb(150,150,150)',nz:'rgb(150,150,150)',ni:'rgb(150,150,150)',ne:'rgb(150,150,150)',ng:'rgb(150,150,150)',nu:'rgb(150,150,150)',rc:'rgb(150,150,150)',mp:'rgb(150,150,150)',kp:'rgb(150,150,150)',mk:'rgb(150,150,150)',no:'rgb(150,150,150)',om:'rgb(150,150,150)',pk:'rgb(150,150,150)',pw:'rgb(150,150,150)',ps:'rgb(150,150,150)',pa:'rgb(150,150,150)',pg:'rgb(150,150,150)',py:'rgb(150,150,150)',pe:'rgb(150,150,150)',ph:'rgb(150,150,150)',pn:'rgb(150,150,150)',pl:'rgb(150,150,150)',pt:'rgb(150,150,150)',qa:'rgb(150,150,150)',cg:'rgb(150,150,150)',re:'rgb(150,150,150)',ro:'rgb(150,150,150)',ru:'rgb(150,150,150)',rw:'rgb(150,150,150)',xs:'rgb(150,150,150)',bl:'rgb(150,150,150)',sh:'rgb(150,150,150)',kn:'rgb(150,150,150)',lc:'rgb(150,150,150)',mf:'rgb(150,150,150)',pm:'rgb(150,150,150)',vc:'rgb(150,150,150)',ws:'rgb(150,150,150)',sm:'rgb(150,150,150)',st:'rgb(150,150,150)',sa:'rgb(150,150,150)',sn:'rgb(150,150,150)',rs:'rgb(150,150,150)',sc:'rgb(150,150,150)',sl:'rgb(150,150,150)',sg:'rgb(150,150,150)',xe:'rgb(150,150,150)',sx:'rgb(150,150,150)',sk:'rgb(150,150,150)',si:'rgb(150,150,150)',sb:'rgb(150,150,150)',so:'rgb(150,150,150)',xx:'rgb(150,150,150)',za:'rgb(150,150,150)',kr:'rgb(150,150,150)',xo:'rgb(150,150,150)',ss:'rgb(150,150,150)',es:'rgb(150,150,150)',lk:'rgb(150,150,150)',sd:'rgb(150,150,150)',sr:'rgb(150,150,150)',xv:'rgb(150,150,150)',se:'rgb(150,150,150)',ch:'rgb(150,150,150)',sy:'rgb(150,150,150)',tw:'rgb(150,150,150)',tj:'rgb(150,150,150)',tz:'rgb(150,150,150)',th:'rgb(150,150,150)',tg:'rgb(150,150,150)',tk:'rgb(150,150,150)',to:'rgb(150,150,150)',xt:'rgb(150,150,150)',tt:'rgb(150,150,150)',tx:'rgb(150,150,150)',tn:'rgb(150,150,150)',tr:'rgb(150,150,150)',tm:'rgb(150,150,150)',tc:'rgb(150,150,150)',tv:'rgb(150,150,150)',ug:'rgb(150,150,150)',ua:'rgb(150,150,150)',ae:'rgb(150,150,150)',gb:'rgb(150,150,150)',us:'rgb(150,150,150)',vi:'rgb(150,150,150)',uy:'rgb(150,150,150)',uz:'rgb(150,150,150)',vu:'rgb(150,150,150)',va:'rgb(150,150,150)',ve:'rgb(150,150,150)',vn:'rgb(150,150,150)',wf:'rgb(150,150,150)',eh:'rgb(150,150,150)',ye:'rgb(150,150,150)',zm:'rgb(150,150,150)',zw:'rgb(150,150,150)'}

  const [toggle, setToggle] = useState<boolean>(false)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [percentage, setPercentage] = useState<number>(0)
  const [dimensions, setDimensions] = useState<{width:number;height:number;}>({width:0,height:0})
  const [mousePos, setMousePos] = useState<number[]>([])
  const [hover, setHover] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string>('Sort by: Total')
  const [language, setLanguage] = useState<string>('🇬🇧EN')
  const [countrySelect, setCountrySelect] = useState<string>('')
  const [selectorLoad, setSelectorLoad] = useState<boolean>(true)
  const [panzoomReset, setPanzoomReset] = useState<boolean>(false)
  const [legend, setLegend] = useState<boolean[]>(new Array(15).fill(false))
  const ESTAbanRef = useRef<boolean>(false)
  const selectRef = useRef<{selection:number;passport:null|string}>({selection:0,passport:null})
  const assignedColorsRef = useRef<{[key:string]:number}[]>([])
  const selectArrayRef = useRef<(null|string)[]>(new Array(10).fill(null))
  const priorityRef = useRef<{[key:string]:string}>(ISOcolor)
  const tempPriorityRef = useRef<{[key:string]:string}>(ISOcolor)
  const rankRef = useRef<Array<[string|number]>>([])
  const diffRef = useRef<{[key:string]:number}>({AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0})
  const tempDiffRef = useRef<{[key:string]:number}>({AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0})
  const visaDurationRef = useRef<{[key:string]:number}>({AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0})
  const assignedVisaDurationRef = useRef<{[key:string]:number}[]>([])

  const colorProvider:{[key:string]:string} = {ab:priorityRef.current.ab,af:priorityRef.current.af,al:priorityRef.current.al,dz:priorityRef.current.dz,as:priorityRef.current.as,ad:priorityRef.current.ad,ao:priorityRef.current.ao,ai:priorityRef.current.ai,ag:priorityRef.current.ag,ar:priorityRef.current.ar,am:priorityRef.current.am,aw:priorityRef.current.aw,ac:priorityRef.current.ac,au:priorityRef.current.au,at:priorityRef.current.at,az:priorityRef.current.az,bs:priorityRef.current.bs,bh:priorityRef.current.bh,bd:priorityRef.current.bd,bb:priorityRef.current.bb,by:priorityRef.current.by,be:priorityRef.current.be,bz:priorityRef.current.bz,bj:priorityRef.current.bj,bm:priorityRef.current.bm,bt:priorityRef.current.bt,bo:priorityRef.current.bo,xb:priorityRef.current.xb,ba:priorityRef.current.ba,bw:priorityRef.current.bw,br:priorityRef.current.br,io:priorityRef.current.io,vg:priorityRef.current.vg,bn:priorityRef.current.bn,bg:priorityRef.current.bg,bf:priorityRef.current.bf,bi:priorityRef.current.bi,kh:priorityRef.current.kh,cm:priorityRef.current.cm,ca:priorityRef.current.ca,cv:priorityRef.current.cv,ky:priorityRef.current.ky,cf:priorityRef.current.cf,td:priorityRef.current.td,cl:priorityRef.current.cl,cn:priorityRef.current.cn,co:priorityRef.current.co,km:priorityRef.current.km,ck:priorityRef.current.ck,cr:priorityRef.current.cr,hr:priorityRef.current.hr,cu:priorityRef.current.cu,cw:priorityRef.current.cw,cy:priorityRef.current.cy,cz:priorityRef.current.cz,cd:priorityRef.current.cd,dk:priorityRef.current.dk,dj:priorityRef.current.dj,dm:priorityRef.current.dm,do:priorityRef.current.do,tl:priorityRef.current.tl,ec:priorityRef.current.ec,eg:priorityRef.current.eg,sv:priorityRef.current.sv,gq:priorityRef.current.gq,er:priorityRef.current.er,ee:priorityRef.current.ee,sz:priorityRef.current.sz,et:priorityRef.current.et,fk:priorityRef.current.fk,fo:priorityRef.current.fo,fj:priorityRef.current.fj,fi:priorityRef.current.fi,fr:priorityRef.current.fr,gf:priorityRef.current.gf,pf:priorityRef.current.pf,ga:priorityRef.current.ga,gm:priorityRef.current.gm,ge:priorityRef.current.ge,de:priorityRef.current.de,gh:priorityRef.current.gh,gi:priorityRef.current.gi,gr:priorityRef.current.gr,gl:priorityRef.current.gl,gd:priorityRef.current.gd,gp:priorityRef.current.gp,gu:priorityRef.current.gu,gt:priorityRef.current.gt,gn:priorityRef.current.gn,gw:priorityRef.current.gw,gy:priorityRef.current.gy,ht:priorityRef.current.ht,hn:priorityRef.current.hn,hk:priorityRef.current.hk,hu:priorityRef.current.hu,is:priorityRef.current.is,in:priorityRef.current.in,id:priorityRef.current.id,ir:priorityRef.current.ir,iq:priorityRef.current.iq,ie:priorityRef.current.ie,il:priorityRef.current.il,it:priorityRef.current.it,ci:priorityRef.current.ci,jm:priorityRef.current.jm,xm:priorityRef.current.xm,jp:priorityRef.current.jp,jo:priorityRef.current.jo,kz:priorityRef.current.kz,ke:priorityRef.current.ke,ki:priorityRef.current.ki,xk:priorityRef.current.xk,kx:priorityRef.current.kx,kw:priorityRef.current.kw,kg:priorityRef.current.kg,la:priorityRef.current.la,lv:priorityRef.current.lv,lb:priorityRef.current.lb,ls:priorityRef.current.ls,lr:priorityRef.current.lr,ly:priorityRef.current.ly,li:priorityRef.current.li,lt:priorityRef.current.lt,lu:priorityRef.current.lu,mo:priorityRef.current.mo,mg:priorityRef.current.mg,mw:priorityRef.current.mw,my:priorityRef.current.my,mv:priorityRef.current.mv,ml:priorityRef.current.ml,mt:priorityRef.current.mt,mh:priorityRef.current.mh,mq:priorityRef.current.mq,mr:priorityRef.current.mr,mu:priorityRef.current.mu,yt:priorityRef.current.yt,mx:priorityRef.current.mx,fm:priorityRef.current.fm,md:priorityRef.current.md,mc:priorityRef.current.mc,mn:priorityRef.current.mn,me:priorityRef.current.me,ms:priorityRef.current.ms,ma:priorityRef.current.ma,mz:priorityRef.current.mz,mm:priorityRef.current.mm,na:priorityRef.current.na,nr:priorityRef.current.nr,np:priorityRef.current.np,nl:priorityRef.current.nl,nc:priorityRef.current.nc,nz:priorityRef.current.nz,ni:priorityRef.current.ni,ne:priorityRef.current.ne,ng:priorityRef.current.ng,nu:priorityRef.current.nu,rc:priorityRef.current.rc,mp:priorityRef.current.mp,kp:priorityRef.current.kp,mk:priorityRef.current.mk,no:priorityRef.current.no,om:priorityRef.current.om,pk:priorityRef.current.pk,pw:priorityRef.current.pw,ps:priorityRef.current.ps,pa:priorityRef.current.pa,pg:priorityRef.current.pg,py:priorityRef.current.py,pe:priorityRef.current.pe,ph:priorityRef.current.ph,pn:priorityRef.current.pn,pl:priorityRef.current.pl,pt:priorityRef.current.pt,qa:priorityRef.current.qa,cg:priorityRef.current.cg,re:priorityRef.current.re,ro:priorityRef.current.ro,ru:priorityRef.current.ru,rw:priorityRef.current.rw,xs:priorityRef.current.xs,bl:priorityRef.current.bl,sh:priorityRef.current.sh,kn:priorityRef.current.kn,lc:priorityRef.current.lc,mf:priorityRef.current.mf,pm:priorityRef.current.pm,vc:priorityRef.current.vc,ws:priorityRef.current.ws,sm:priorityRef.current.sm,st:priorityRef.current.st,sa:priorityRef.current.sa,sn:priorityRef.current.sn,rs:priorityRef.current.rs,sc:priorityRef.current.sc,sl:priorityRef.current.sl,sg:priorityRef.current.sg,xe:priorityRef.current.xe,sx:priorityRef.current.sx,sk:priorityRef.current.sk,si:priorityRef.current.si,sb:priorityRef.current.sb,so:priorityRef.current.so,xx:priorityRef.current.xx,za:priorityRef.current.za,kr:priorityRef.current.kr,xo:priorityRef.current.xo,ss:priorityRef.current.ss,es:priorityRef.current.es,lk:priorityRef.current.lk,sd:priorityRef.current.sd,sr:priorityRef.current.sr,xv:priorityRef.current.xv,se:priorityRef.current.se,ch:priorityRef.current.ch,sy:priorityRef.current.sy,tw:priorityRef.current.tw,tj:priorityRef.current.tj,tz:priorityRef.current.tz,th:priorityRef.current.th,tg:priorityRef.current.tg,tk:priorityRef.current.tk,to:priorityRef.current.to,xt:priorityRef.current.xt,tt:priorityRef.current.tt,tx:priorityRef.current.tx,tn:priorityRef.current.tn,tr:priorityRef.current.tr,tm:priorityRef.current.tm,tc:priorityRef.current.tc,tv:priorityRef.current.tv,ug:priorityRef.current.ug,ua:priorityRef.current.ua,ae:priorityRef.current.ae,gb:priorityRef.current.gb,us:priorityRef.current.us,vi:priorityRef.current.vi,uy:priorityRef.current.uy,uz:priorityRef.current.uz,vu:priorityRef.current.vu,va:priorityRef.current.va,ve:priorityRef.current.ve,vn:priorityRef.current.vn,wf:priorityRef.current.wf,eh:priorityRef.current.eh,ye:priorityRef.current.ye,zm:priorityRef.current.zm,zw:priorityRef.current.zw}
  const diffProvider:{[key:string]:number} = {AB:diffRef.current.AB,AF:diffRef.current.AF,AL:diffRef.current.AL,DZ:diffRef.current.DZ,AS:diffRef.current.AS,AD:diffRef.current.AD,AO:diffRef.current.AO,AI:diffRef.current.AI,AG:diffRef.current.AG,AR:diffRef.current.AR,AM:diffRef.current.AM,AW:diffRef.current.AW,AC:diffRef.current.AC,AU:diffRef.current.AU,AT:diffRef.current.AT,AZ:diffRef.current.AZ,BS:diffRef.current.BS,BH:diffRef.current.BH,BD:diffRef.current.BD,BB:diffRef.current.BB,BY:diffRef.current.BY,BE:diffRef.current.BE,BZ:diffRef.current.BZ,BJ:diffRef.current.BJ,BM:diffRef.current.BM,BT:diffRef.current.BT,BO:diffRef.current.BO,XB:diffRef.current.XB,BA:diffRef.current.BA,BW:diffRef.current.BW,BR:diffRef.current.BR,IO:diffRef.current.IO,VG:diffRef.current.VG,BN:diffRef.current.BN,BG:diffRef.current.BG,BF:diffRef.current.BF,BI:diffRef.current.BI,KH:diffRef.current.KH,CM:diffRef.current.CM,CA:diffRef.current.CA,CV:diffRef.current.CV,KY:diffRef.current.KY,CF:diffRef.current.CF,TD:diffRef.current.TD,CL:diffRef.current.CL,CN:diffRef.current.CN,CO:diffRef.current.CO,KM:diffRef.current.KM,CK:diffRef.current.CK,CR:diffRef.current.CR,HR:diffRef.current.HR,CU:diffRef.current.CU,CW:diffRef.current.CW,CY:diffRef.current.CY,CZ:diffRef.current.CZ,CD:diffRef.current.CD,DK:diffRef.current.DK,DJ:diffRef.current.DJ,DM:diffRef.current.DM,DO:diffRef.current.DO,TL:diffRef.current.TL,EC:diffRef.current.EC,EG:diffRef.current.EG,SV:diffRef.current.SV,GQ:diffRef.current.GQ,ER:diffRef.current.ER,EE:diffRef.current.EE,SZ:diffRef.current.SZ,ET:diffRef.current.ET,FK:diffRef.current.FK,FO:diffRef.current.FO,FJ:diffRef.current.FJ,FI:diffRef.current.FI,FR:diffRef.current.FR,GF:diffRef.current.GF,PF:diffRef.current.PF,GA:diffRef.current.GA,GM:diffRef.current.GM,GE:diffRef.current.GE,DE:diffRef.current.DE,GH:diffRef.current.GH,GI:diffRef.current.GI,GR:diffRef.current.GR,GL:diffRef.current.GL,GD:diffRef.current.GD,GP:diffRef.current.GP,GU:diffRef.current.GU,GT:diffRef.current.GT,GN:diffRef.current.GN,GW:diffRef.current.GW,GY:diffRef.current.GY,HT:diffRef.current.HT,HN:diffRef.current.HN,HK:diffRef.current.HK,HU:diffRef.current.HU,IS:diffRef.current.IS,IN:diffRef.current.IN,ID:diffRef.current.ID,IR:diffRef.current.IR,IQ:diffRef.current.IQ,IE:diffRef.current.IE,IL:diffRef.current.IL,IT:diffRef.current.IT,CI:diffRef.current.CI,JM:diffRef.current.JM,XM:diffRef.current.XM,JP:diffRef.current.JP,JO:diffRef.current.JO,KZ:diffRef.current.KZ,KE:diffRef.current.KE,KI:diffRef.current.KI,XK:diffRef.current.XK,KX:diffRef.current.KX,KW:diffRef.current.KW,KG:diffRef.current.KG,LA:diffRef.current.LA,LV:diffRef.current.LV,LB:diffRef.current.LB,LS:diffRef.current.LS,LR:diffRef.current.LR,LY:diffRef.current.LY,LI:diffRef.current.LI,LT:diffRef.current.LT,LU:diffRef.current.LU,MO:diffRef.current.MO,MG:diffRef.current.MG,MW:diffRef.current.MW,MY:diffRef.current.MY,MV:diffRef.current.MV,ML:diffRef.current.ML,MT:diffRef.current.MT,MH:diffRef.current.MH,MQ:diffRef.current.MQ,MR:diffRef.current.MR,MU:diffRef.current.MU,YT:diffRef.current.YT,MX:diffRef.current.MX,FM:diffRef.current.FM,MD:diffRef.current.MD,MC:diffRef.current.MC,MN:diffRef.current.MN,ME:diffRef.current.ME,MS:diffRef.current.MS,MA:diffRef.current.MA,MZ:diffRef.current.MZ,MM:diffRef.current.MM,NA:diffRef.current.NA,NR:diffRef.current.NR,NP:diffRef.current.NP,NL:diffRef.current.NL,NC:diffRef.current.NC,NZ:diffRef.current.NZ,NI:diffRef.current.NI,NE:diffRef.current.NE,NG:diffRef.current.NG,NU:diffRef.current.NU,RC:diffRef.current.RC,MP:diffRef.current.MP,KP:diffRef.current.KP,MK:diffRef.current.MK,NO:diffRef.current.NO,OM:diffRef.current.OM,PK:diffRef.current.PK,PW:diffRef.current.PW,PS:diffRef.current.PS,PA:diffRef.current.PA,PG:diffRef.current.PG,PY:diffRef.current.PY,PE:diffRef.current.PE,PH:diffRef.current.PH,PN:diffRef.current.PN,PL:diffRef.current.PL,PT:diffRef.current.PT,QA:diffRef.current.QA,CG:diffRef.current.CG,RE:diffRef.current.RE,RO:diffRef.current.RO,RU:diffRef.current.RU,RW:diffRef.current.RW,XS:diffRef.current.XS,BL:diffRef.current.BL,SH:diffRef.current.SH,KN:diffRef.current.KN,LC:diffRef.current.LC,MF:diffRef.current.MF,PM:diffRef.current.PM,VC:diffRef.current.VC,WS:diffRef.current.WS,SM:diffRef.current.SM,ST:diffRef.current.ST,SA:diffRef.current.SA,SN:diffRef.current.SN,RS:diffRef.current.RS,SC:diffRef.current.SC,SL:diffRef.current.SL,SG:diffRef.current.SG,XE:diffRef.current.XE,SX:diffRef.current.SX,SK:diffRef.current.SK,SI:diffRef.current.SI,SB:diffRef.current.SB,SO:diffRef.current.SO,XX:diffRef.current.XX,ZA:diffRef.current.ZA,KR:diffRef.current.KR,XO:diffRef.current.XO,SS:diffRef.current.SS,ES:diffRef.current.ES,LK:diffRef.current.LK,SD:diffRef.current.SD,SR:diffRef.current.SR,XV:diffRef.current.XV,SE:diffRef.current.SE,CH:diffRef.current.CH,SY:diffRef.current.SY,TW:diffRef.current.TW,TJ:diffRef.current.TJ,TZ:diffRef.current.TZ,TH:diffRef.current.TH,TG:diffRef.current.TG,TK:diffRef.current.TK,TO:diffRef.current.TO,XT:diffRef.current.XT,TT:diffRef.current.TT,TX:diffRef.current.TX,TN:diffRef.current.TN,TR:diffRef.current.TR,TM:diffRef.current.TM,TC:diffRef.current.TC,TV:diffRef.current.TV,UG:diffRef.current.UG,UA:diffRef.current.UA,AE:diffRef.current.AE,GB:diffRef.current.GB,US:diffRef.current.US,VI:diffRef.current.VI,UY:diffRef.current.UY,UZ:diffRef.current.UZ,VU:diffRef.current.VU,VA:diffRef.current.VA,VE:diffRef.current.VE,VN:diffRef.current.VN,WF:diffRef.current.WF,EH:diffRef.current.EH,YE:diffRef.current.YE,ZM:diffRef.current.ZM,ZW:diffRef.current.ZW}
  const languageProvider:{[key:string]:string} = {language:language}
  const dimensionsProvider:{width:number;height:number} = {width:dimensions.width,height:dimensions.height}
  const countrySelectProvider:{setCountrySelect:Function} = {setCountrySelect:setCountrySelect}

  const ESTAbancalc = () => {
    let i:number = 0
    ESTAbanRef.current = false
    while(selectArrayRef.current[i] != null) {
      switch(selectArrayRef.current[i]) {
        case 'cuba': if(priorityRef.current.us != 'rgb(50,205,50)' && priorityRef.current.us != 'rgb(255,20,147)') {ESTAbanRef.current = true}; break;
        case 'syria': if(priorityRef.current.us != 'rgb(50,205,50)' && priorityRef.current.us != 'rgb(255,20,147)') {ESTAbanRef.current = true}; break;
        case 'iran': if(priorityRef.current.us != 'rgb(50,205,50)' && priorityRef.current.us != 'rgb(255,20,147)') {ESTAbanRef.current = true}; break;
        case 'northKorea': if(priorityRef.current.us != 'rgb(50,205,50)' && priorityRef.current.us != 'rgb(255,20,147)') {ESTAbanRef.current = true}; break;
      }
      i++
    }
  }

  useEffect(() => {
    setDimensions({
      width: document.body.clientWidth - 2,
      height: document.documentElement.clientHeight
    })

    fetchSortData(rankRef, 1)

    const handleMouseMove = (event:any) => {setMousePos([event.clientX, event.clientY])}
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
      priorityRef.current = ISOcolor
      tempPriorityRef.current = ISOcolor
      diffRef.current = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
      tempDiffRef.current = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
      ESTAbanRef.current = false
      ESTAbancalc()

      mainCalculation(true, selectArrayRef.current[selectRef.current.selection], assignedColorsRef, selectRef, priorityRef, selectArrayRef, diffRef, setPercentage, ESTAbanRef)
      assignedVisaDurationCalculation(selectRef, assignedVisaDurationRef)
      legendCalculation(setLegend, priorityRef)
      visaDurationRef.current = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
      return
    }

    ESTAbancalc()
    selectArrayRef.current[selectRef.current.selection] = selectRef.current.passport
    if(selectArrayRef.current[selectRef.current.selection] != null) { mainCalculation(false, selectArrayRef.current[selectRef.current.selection], assignedColorsRef, selectRef, priorityRef, selectArrayRef, diffRef, setPercentage, ESTAbanRef); assignedVisaDurationCalculation(selectRef, assignedVisaDurationRef); visaDurationCalculation(selectRef, visaDurationRef, priorityRef, assignedColorsRef); legendCalculation(setLegend, priorityRef) }
  }, [toggle])

  return (
    <CountrySelectContext.Provider value={countrySelectProvider}>
    <DiffContext.Provider value={diffProvider}>
    <ColorContext.Provider value={colorProvider}>
    <PassportContext.Provider value={passportsProvider}>
    <LanguageContext.Provider value={languageProvider}>
    <DimensionsContext.Provider value={dimensionsProvider}>
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
        panzoomReset={panzoomReset}
        visaDurationRef={visaDurationRef}
        assignedVisaDurationRef={assignedVisaDurationRef}
        legend={legend}
        setLegend={setLegend}
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
        ESTAbanRef={ESTAbanRef}
        visaDurationRef={visaDurationRef}
        assignedVisaDurationRef={assignedVisaDurationRef}
        setLegend={setLegend}
      />
      <Header
        language={language}
        setLanguage={setLanguage}
        panzoomReset={panzoomReset}
        setPanzoomReset={setPanzoomReset}
      />
      <Analytics />
      <SpeedInsights />
    </DimensionsContext.Provider>
    </LanguageContext.Provider>
    </PassportContext.Provider>
    </ColorContext.Provider>
    </DiffContext.Provider>
    </CountrySelectContext.Provider>
  )
}

export default MyApp