import { useCallback, useEffect, useRef, useContext, MutableRefObject } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import Panzoom from 'panzoom'
import Abkhazia from '../countries/Abkhazia'
import Afghanistan from '../countries/Afghanistan'
import Albania from '../countries/Albania'
import Algeria from '../countries/Algeria'
import AmericanSamoa from '../countries/AmericanSamoa'
import Andorra from '../countries/Andorra'
import Angola from '../countries/Angola'
import Anguilla from '../countries/Anguilla'
import AntiguaAndBarbuda from '../countries/AntiguaAndBarbuda'
import Argentina from '../countries/Argentina'
import Armenia from '../countries/Armenia'
import Aruba from '../countries/Aruba'
import AscensionIsland from '../countries/AscensionIsland'
import Australia from '../countries/Australia'
import Austria from '../countries/Austria'
import Azerbaijan from '../countries/Azerbaijan'
import Bahamas from '../countries/Bahamas'
import Bahrain from '../countries/Bahrain'
import Bangladesh from '../countries/Bangladesh'
import Barbados from '../countries/Barbados'
import Belarus from '../countries/Belarus'
import Belgium from '../countries/Belgium'
import Belize from '../countries/Belize'
import Benin from '../countries/Benin'
import Bermuda from '../countries/Bermuda'
import Bhutan from '../countries/Bhutan'
import Bolivia from '../countries/Bolivia'
import Bonaire from '../countries/Bonaire'
import BosniaAndHerzegovina from '../countries/BosniaAndHerzegovina'
import Botswana from '../countries/Botswana'
import Brazil from '../countries/Brazil'
import BritishIndianOceanTerritory from '../countries/BritishIndianOceanTerritory'
import BritishVirginIslands from '../countries/BritishVirginIslands'
import Brunei from '../countries/Brunei'
import Bulgaria from '../countries/Bulgaria'
import BurkinaFaso from '../countries/BurkinaFaso'
import Burundi from '../countries/Burundi'
import CapeVerde from '../countries/CapeVerde'
import Cambodia from '../countries/Cambodia'
import Cameroon from '../countries/Cameroon'
import Canada from '../countries/Canada'
import CaymanIslands from '../countries/CaymanIslands'
import CentralAfricanRepublic from '../countries/CentralAfricanRepublic'
import Chad from '../countries/Chad'
import Chile from '../countries/Chile'
import China from '../countries/China'
import Colombia from '../countries/Colombia'
import Comoros from '../countries/Comoros'
import CookIslands from '../countries/CookIslands'
import CostaRica from '../countries/CostaRica'
import Croatia from '../countries/Croatia'
import Cuba from '../countries/Cuba'
import Curacao from '../countries/Curacao'
import Cyprus from '../countries/Cyprus'
import CzechRepublic from '../countries/CzechRepublic'
import DemocraticRepublicOfTheCongo from '../countries/DemocraticRepublicOfTheCongo'
import Denmark from '../countries/Denmark'
import Djibouti from '../countries/Djibouti'
import Dominica from '../countries/Dominica'
import DominicanRepublic from '../countries/DominicanRepublic'
import EastTimor from '../countries/EastTimor'
import Ecuador from '../countries/Ecuador'
import Egypt from '../countries/Egypt'
import ElSalvador from '../countries/ElSalvador'
import EquatorialGuinea from '../countries/EquatorialGuinea'
import Eritrea from '../countries/Eritrea'
import Estonia from '../countries/Estonia'
import Eswatini from '../countries/Eswatini'
import Ethiopia from '../countries/Ethiopia'
import FalklandIslands from '../countries/FalklandIslands'
import FaroeIslands from '../countries/FaroeIslands'
import Fiji from '../countries/Fiji'
import Finland from '../countries/Finland'
import France from '../countries/France'
import FrenchGuiana from '../countries/FrenchGuiana'
import FrenchPolynesia from '../countries/FrenchPolynesia'
import Gabon from '../countries/Gabon'
import Gambia from '../countries/Gambia'
import Georgia from '../countries/Georgia'
import Germany from '../countries/Germany'
import Ghana from '../countries/Ghana'
import Gibraltar from '../countries/Gibraltar'
import Greece from '../countries/Greece'
import Greenland from '../countries/Greenland'
import Grenada from '../countries/Grenada'
import Guadeloupe from '../countries/Guadeloupe'
import Guam from '../countries/Guam'
import Guatemala from '../countries/Guatemala'
import Guinea from '../countries/Guinea'
import GuineaBissau from '../countries/GuineaBissau'
import Guyana from '../countries/Guyana'
import Haiti from '../countries/Haiti'
import Honduras from '../countries/Honduras'
import HongKong from '../countries/HongKong'
import Hungary from '../countries/Hungary'
import Iceland from '../countries/Iceland'
import India from '../countries/India'
import Indonesia from '../countries/Indonesia'
import Iran from '../countries/Iran'
import Iraq from '../countries/Iraq'
import Ireland from '../countries/Ireland'
import Israel from '../countries/Israel'
import Italy from '../countries/Italy'
import IvoryCoast from '../countries/IvoryCoast'
import Jamaica from '../countries/Jamaica'
import JanMayen from '../countries/JanMayen'
import Japan from '../countries/Japan'
import Jordan from '../countries/Jordan'
import Kazakhstan from '../countries/Kazakhstan'
import Kenya from '../countries/Kenya'
import Kiribati from '../countries/Kiribati'
import Kosovo from '../countries/Kosovo'
import Kurdistan from '../countries/Kurdistan'
import Kuwait from '../countries/Kuwait'
import Kyrgyzstan from '../countries/Kyrgyzstan'
import Laos from '../countries/Laos'
import Latvia from '../countries/Latvia'
import Lebanon from '../countries/Lebanon'
import Lesotho from '../countries/Lesotho'
import Liberia  from '../countries/Liberia'
import Libya from '../countries/Libya'
import Liechtenstein from '../countries/Liechtenstein'
import Lithuania from '../countries/Lithuania'
import Luxembourg from '../countries/Luxembourg'
import Macao from '../countries/Macao'
import Madagascar from '../countries/Madagascar'
import Malawi from '../countries/Malawi'
import Malaysia from '../countries/Malaysia'
import Maldives from '../countries/Maldives'
import Mali from '../countries/Mali'
import Malta from '../countries/Malta'
import MarshallIslands from '../countries/MarshallIslands'
import Martinique from '../countries/Martinique'
import Mauritania from '../countries/Mauritania'
import Mauritius from '../countries/Mauritius'
import Mayotte from '../countries/Mayotte'
import Mexico from '../countries/Mexico'
import Micronesia from '../countries/Micronesia'
import Moldova from '../countries/Moldova'
import Monaco from '../countries/Monaco'
import Mongolia from '../countries/Mongolia'
import Montenegro from '../countries/Montenegro'
import Montserrat from '../countries/Montserrat'
import Morocco from '../countries/Morocco'
import Mozambique from '../countries/Mozambique'
import Myanmar from '../countries/Myanmar'
import Namibia from '../countries/Namibia'
import Nauru from '../countries/Nauru'
import Nepal from '../countries/Nepal'
import Netherlands from '../countries/Netherlands'
import NewCaledonia from '../countries/NewCaledonia'
import NewZealand from '../countries/NewZealand'
import Nicaragua from '../countries/Nicaragua'
import Niger from '../countries/Niger'
import Nigeria from '../countries/Nigeria'
import Niue from '../countries/Niue'
import NorthernCyprus from '../countries/NorthernCyprus'
import NorthernMarianaIslands from '../countries/NorthernMarianaIslands'
import NorthKorea from '../countries/NorthKorea'
import NorthMacedonia from '../countries/NorthMacedonia'
import Norway from '../countries/Norway'
import Oman from '../countries/Oman'
import Pakistan from '../countries/Pakistan'
import Palau from '../countries/Palau'
import Palestine from '../countries/Palestine'
import Panama from '../countries/Panama'
import PapuaNewGuinea from '../countries/PapuaNewGuinea'
import Paraguay from '../countries/Paraguay'
import Peru from '../countries/Peru'
import Philippines from '../countries/Philippines'
import PitcairnIslands from '../countries/PitcairnIslands'
import Poland from '../countries/Poland'
import Portugal from '../countries/Portugal'
import Qatar from '../countries/Qatar'
import RepublicOfTheCongo from '../countries/RepublicOfTheCongo'
import Reunion from '../countries/Reunion'
import Romania from '../countries/Romania'
import Russia from '../countries/Russia'
import Rwanda from '../countries/Rwanda'
import Saba from '../countries/Saba'
import SaintBarthelemy from '../countries/SaintBarthelemy'
import SaintHelena from '../countries/SaintHelena'
import SaintKittsAndNevis from '../countries/SaintKittsAndNevis'
import SaintLucia from '../countries/SaintLucia'
import SaintMartin from '../countries/SaintMartin'
import SaintPierreAndMiquelon from '../countries/SaintPierreAndMiquelon'
import SaintVincentAndTheGrenadines from '../countries/SaintVincentAndTheGrenadines'
import Samoa from '../countries/Samoa'
import SanMarino from '../countries/SanMarino'
import SaoTomeAndPrincipe from '../countries/SaoTomeAndPrincipe'
import SaudiArabia from '../countries/SaudiArabia'
import Senegal from '../countries/Senegal'
import Serbia from '../countries/Serbia'
import Seychelles from '../countries/Seychelles'
import SierraLeone from '../countries/SierraLeone'
import Singapore from '../countries/Singapore'
import SintEustatius from '../countries/SintEustatius'
import SintMaarten from '../countries/SintMaarten'
import Slovakia from '../countries/Slovakia'
import Slovenia from '../countries/Slovenia'
import SolomonIslands from '../countries/SolomonIslands'
import Somalia from '../countries/Somalia'
import Somaliland from '../countries/Somaliland'
import SouthAfrica from '../countries/SouthAfrica'
import SouthKorea from '../countries/SouthKorea'
import SouthOssetia from '../countries/SouthOssetia'
import SouthSudan from '../countries/SouthSudan'
import Spain from '../countries/Spain'
import SriLanka from '../countries/SriLanka'
import Sudan from '../countries/Sudan'
import Suriname from '../countries/Suriname'
import Svalbard from '../countries/Svalbard'
import Sweden from '../countries/Sweden'
import Switzerland from '../countries/Switzerland'
import Syria from '../countries/Syria'
import Taiwan from '../countries/Taiwan'
import Tajikistan from '../countries/Tajikistan'
import Tanzania from '../countries/Tanzania'
import Thailand from '../countries/Thailand'
import Togo from '../countries/Togo'
import Tokelau from '../countries/Tokelau'
import Tonga from '../countries/Tonga'
import Transnistria from '../countries/Transnistria'
import TrinidadAndTobago from '../countries/TrinidadAndTobago'
import TristanDaCunha from '../countries/TristanDaCunha'
import Tunisia from '../countries/Tunisia'
import Turkey from '../countries/Turkey'
import Turkmenistan from '../countries/Turkmenistan'
import TurksAndCaicos from '../countries/TurksAndCaicos'
import Tuvalu from '../countries/Tuvalu'
import Uganda from '../countries/Uganda'
import Ukraine from '../countries/Ukraine'
import UnitedArabEmirates from '../countries/UnitedArabEmirates'
import UnitedKingdom from '../countries/UnitedKingdom'
import UnitedStates from '../countries/UnitedStates'
import UnitedStatesVirginIslands from '../countries/UnitedStatesVirginIslands'
import Uruguay from '../countries/Uruguay'
import Uzbekistan from '../countries/Uzbekistan'
import Vanuatu from '../countries/Vanuatu'
import VaticanCity from '../countries/VaticanCity'
import Venezuela from '../countries/Venezuela'
import Vietnam from '../countries/Vietnam'
import WallisAndFutuna from '../countries/WallisAndFutuna'
import WesternSahara from '../countries/WesternSahara'
import Yemen from '../countries/Yemen'
import Zambia from '../countries/Zambia'
import Zimbabwe from '../countries/Zimbabwe'
interface Props {
  setHover:Function;
  selected:string;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  setCountrySelect:Function;
}

const MapSVG:React.FC<Props> = ({ setHover, selected, priorityRef, setCountrySelect }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)

  const panzoomRef = useRef(null)

  useEffect(() => {
    if(panzoomRef.current) {
      let panzoom = null

      if(dimensions.width > 800) {
        panzoom = Panzoom(panzoomRef.current, {
          smoothScroll: false,
          maxZoom: 8,
          minZoom: 0.4
        })
      } else {
        panzoom = Panzoom(panzoomRef.current, {
          smoothScroll: false,
          initialX: dimensions.width / 2,
          initialY: 0,
          initialZoom: 3,
          maxZoom: 25,
          minZoom: 1.075
        })
      }

      return () => {
        panzoom.dispose()
      }
    }
  }, [dimensions.width])

  const selectedCalculation:Function = useCallback((selected:string) => {
    switch(selected) {
      case 'AS': return <AmericanSamoa as={priorityRef.current.as} AS={false} setCountrySelect={setCountrySelect} />
      case 'AW': return <Aruba aw={priorityRef.current.aw} AW={false} setCountrySelect={setCountrySelect} />
      case 'AC': return <AscensionIsland ac={priorityRef.current.ac} AC={false} setCountrySelect={setCountrySelect} />
      case 'CK': return <CookIslands ck={priorityRef.current.ck} CK={false} setCountrySelect={setCountrySelect} />
      case 'XB': return <Bonaire xb={priorityRef.current.xb} XB={false} setCountrySelect={setCountrySelect} />
      case 'IO': return <BritishIndianOceanTerritory io={priorityRef.current.io} IO={false} setCountrySelect={setCountrySelect} />
      case 'CW': return <Curacao cw={priorityRef.current.cw} CW={false} setCountrySelect={setCountrySelect} />
      case 'FK': return <FalklandIslands fk={priorityRef.current.fk} FK={false} setCountrySelect={setCountrySelect} />
      case 'FO': return <FaroeIslands fo={priorityRef.current.fo} FO={false} setCountrySelect={setCountrySelect} />
      case 'PF': return <FrenchPolynesia pf={priorityRef.current.pf} PF={false} setCountrySelect={setCountrySelect} />
      case 'GI': return <Gibraltar gi={priorityRef.current.gi} GI={false} setCountrySelect={setCountrySelect} />
      case 'GP': return <Guadeloupe gp={priorityRef.current.gp} GP={false} setCountrySelect={setCountrySelect} />
      case 'GU': return <Guam gu={priorityRef.current.gu} GU={false} setCountrySelect={setCountrySelect} />
      case 'XM': return <JanMayen xm={priorityRef.current.xm} XM={false} setCountrySelect={setCountrySelect} />
      case 'KX': return <Kurdistan kx={priorityRef.current.kx} KX={false} setCountrySelect={setCountrySelect} />
      case 'MQ': return <Martinique mq={priorityRef.current.mq} MQ={false} setCountrySelect={setCountrySelect} />
      case 'YT': return <Mayotte yt={priorityRef.current.yt} YT={false} setCountrySelect={setCountrySelect} />
      case 'NC': return <NewCaledonia nc={priorityRef.current.nc} NC={false} setCountrySelect={setCountrySelect} />
      case 'NU': return <Niue nu={priorityRef.current.nu} NU={false} setCountrySelect={setCountrySelect} />
      case 'MP': return <NorthernMarianaIslands mp={priorityRef.current.mp} MP={false} setCountrySelect={setCountrySelect} />
      case 'PN': return <PitcairnIslands pn={priorityRef.current.pn} PN={false} setCountrySelect={setCountrySelect} />
      case 'RE': return <Reunion re={priorityRef.current.re} RE={false} setCountrySelect={setCountrySelect} />
      case 'XS': return <Saba xs={priorityRef.current.xs} XS={false} setCountrySelect={setCountrySelect} />
      case 'BL': return <SaintBarthelemy bl={priorityRef.current.bl} BL={false} setCountrySelect={setCountrySelect} />
      case 'MF': return <SaintMartin mf={priorityRef.current.mf} MF={false} setCountrySelect={setCountrySelect} />
      case 'PM': return <SaintPierreAndMiquelon pm={priorityRef.current.pm} PM={false} setCountrySelect={setCountrySelect} />
      case 'XE': return <SintEustatius xe={priorityRef.current.xe} XE={false} setCountrySelect={setCountrySelect} />
      case 'SX': return <SintMaarten sx={priorityRef.current.sx} SX={false} setCountrySelect={setCountrySelect} />
      case 'XV': return <Svalbard xv={priorityRef.current.xv} XV={false} setCountrySelect={setCountrySelect} />
      case 'TK': return <Tokelau tk={priorityRef.current.tk} TK={false} setCountrySelect={setCountrySelect} />
      case 'XT': return <Transnistria xt={priorityRef.current.xt} XT={false} setCountrySelect={setCountrySelect} />
      case 'TX': return <TristanDaCunha tx={priorityRef.current.tx} TX={false} setCountrySelect={setCountrySelect} />
      case 'VI': return <UnitedStatesVirginIslands vi={priorityRef.current.vi} VI={false} setCountrySelect={setCountrySelect} />
      case 'WF': return <WallisAndFutuna wf={priorityRef.current.wf} WF={false} setCountrySelect={setCountrySelect} />
    }
  }, [])

  return (
    <div ref={panzoomRef} className={'container'}>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-content: space-around;
          position: absolute;
        }
      `}</style>
      <svg version="1.2" viewBox="-50 -25 2190 890" width={dimensions.width}>
        <g onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Afghanistan af={priorityRef.current.af} AF={false} setCountrySelect={setCountrySelect} />
          <Albania al={priorityRef.current.al} AL={false} setCountrySelect={setCountrySelect} />
          <Algeria dz={priorityRef.current.dz} DZ={false} setCountrySelect={setCountrySelect} />
          <Angola ao={priorityRef.current.ao} AO={false} setCountrySelect={setCountrySelect} />
          <Argentina ar={priorityRef.current.ar} AR={false} setCountrySelect={setCountrySelect} />
          <Armenia am={priorityRef.current.am} AM={false} setCountrySelect={setCountrySelect} />
          <Australia au={priorityRef.current.au} AU={false} setCountrySelect={setCountrySelect} />
          <Austria at={priorityRef.current.at} AT={false} setCountrySelect={setCountrySelect} />
          <Azerbaijan az={priorityRef.current.az} AZ={false} setCountrySelect={setCountrySelect} />
          <Bangladesh bd={priorityRef.current.bd} BD={false} setCountrySelect={setCountrySelect} />
          <Belarus by={priorityRef.current.by} BY={false} setCountrySelect={setCountrySelect} />
          <Belgium be={priorityRef.current.be} BE={false} setCountrySelect={setCountrySelect} />
          <Benin bj={priorityRef.current.bj} BJ={false} setCountrySelect={setCountrySelect} />
          <Bhutan bt={priorityRef.current.bt} BT={false} setCountrySelect={setCountrySelect} />
          <Bolivia bo={priorityRef.current.bo} BO={false} setCountrySelect={setCountrySelect} />
          <BosniaAndHerzegovina ba={priorityRef.current.ba} BA={false} setCountrySelect={setCountrySelect} />
          <Botswana bw={priorityRef.current.bw} BW={false} setCountrySelect={setCountrySelect} />
          <Brazil br={priorityRef.current.br} BR={false} setCountrySelect={setCountrySelect} />
          <Bulgaria bg={priorityRef.current.bg} BG={false} setCountrySelect={setCountrySelect} />
          <BurkinaFaso bf={priorityRef.current.bf} BF={false} setCountrySelect={setCountrySelect} />
          <Cambodia kh={priorityRef.current.kh} KH={false} setCountrySelect={setCountrySelect} />
          <Cameroon cm={priorityRef.current.cm} CM={false} setCountrySelect={setCountrySelect} />
          <Canada ca={priorityRef.current.ca} CA={false} setCountrySelect={setCountrySelect} />
          <CentralAfricanRepublic cf={priorityRef.current.cf} CF={false} setCountrySelect={setCountrySelect} />
          <Chad td={priorityRef.current.td} TD={false} setCountrySelect={setCountrySelect} />
          <Chile cl={priorityRef.current.cl} CL={false} setCountrySelect={setCountrySelect} />
          <China cn={priorityRef.current.cn} CN={false} setCountrySelect={setCountrySelect} />
          <Colombia co={priorityRef.current.co} CO={false} setCountrySelect={setCountrySelect} />
          <CostaRica cr={priorityRef.current.cr} CR={false} setCountrySelect={setCountrySelect} />
          <Croatia hr={priorityRef.current.hr} HR={false} setCountrySelect={setCountrySelect} />
          <Cuba cu={priorityRef.current.cu} CU={false} setCountrySelect={setCountrySelect} />
          <CzechRepublic cz={priorityRef.current.cz} CZ={false} setCountrySelect={setCountrySelect} />
          <DemocraticRepublicOfTheCongo cd={priorityRef.current.cd} CD={false} setCountrySelect={setCountrySelect} />
          <Denmark dk={priorityRef.current.dk} DK={false} setCountrySelect={setCountrySelect} />
          <DominicanRepublic dx={priorityRef.current.do} DO={false} setCountrySelect={setCountrySelect} />
          <Ecuador ec={priorityRef.current.ec} EC={false} setCountrySelect={setCountrySelect} />
          <Egypt eg={priorityRef.current.eg} EG={false} setCountrySelect={setCountrySelect} />
          <Eritrea er={priorityRef.current.er} ER={false} setCountrySelect={setCountrySelect} />
          <Estonia ee={priorityRef.current.ee} EE={false} setCountrySelect={setCountrySelect} />
          <Ethiopia et={priorityRef.current.et} ET={false} setCountrySelect={setCountrySelect} />
          <Finland fi={priorityRef.current.fi} FI={false} setCountrySelect={setCountrySelect} />
          <France fr={priorityRef.current.fr} FR={false} setCountrySelect={setCountrySelect} />
          <FrenchGuiana gf={priorityRef.current.gf} GF={false} setCountrySelect={setCountrySelect} hover={'france'}/>
          <Gabon ga={priorityRef.current.ga} GA={false} setCountrySelect={setCountrySelect} />
          <Georgia ge={priorityRef.current.ge} GE={false} setCountrySelect={setCountrySelect} />
          <Germany de={priorityRef.current.de} DE={false} setCountrySelect={setCountrySelect} />
          <Ghana gh={priorityRef.current.gh} GH={false} setCountrySelect={setCountrySelect} />
          <Greece gr={priorityRef.current.gr} GR={false} setCountrySelect={setCountrySelect} />
          <Greenland gl={priorityRef.current.gl} GL={false} setCountrySelect={setCountrySelect} hover={'denmark'}/>
          <Guatemala gt={priorityRef.current.gt} GT={false} setCountrySelect={setCountrySelect} />
          <Guinea gn={priorityRef.current.gn} GN={false} setCountrySelect={setCountrySelect} />
          <GuineaBissau gw={priorityRef.current.gw} GW={false} setCountrySelect={setCountrySelect} />
          <Guyana gy={priorityRef.current.gy} GY={false} setCountrySelect={setCountrySelect} />
          <Haiti ht={priorityRef.current.ht} HT={false} setCountrySelect={setCountrySelect} />
          <Honduras hn={priorityRef.current.hn} HN={false} setCountrySelect={setCountrySelect} />
          <Hungary hu={priorityRef.current.hu} HU={false} setCountrySelect={setCountrySelect} />
          <Iceland is={priorityRef.current.is} IS={false} setCountrySelect={setCountrySelect} />
          <India ix={priorityRef.current.in} IN={false} setCountrySelect={setCountrySelect} />
          <Indonesia id={priorityRef.current.id} ID={false} setCountrySelect={setCountrySelect} />
          <Iran ir={priorityRef.current.ir} IR={false} setCountrySelect={setCountrySelect} />
          <Iraq iq={priorityRef.current.iq} IQ={false} setCountrySelect={setCountrySelect} />
          <Ireland ie={priorityRef.current.ie} IE={false} setCountrySelect={setCountrySelect} />
          <Israel il={priorityRef.current.il} IL={false} setCountrySelect={setCountrySelect} />
          <Italy it={priorityRef.current.it} IT={false} setCountrySelect={setCountrySelect} />
          <IvoryCoast ci={priorityRef.current.ci} CI={false} setCountrySelect={setCountrySelect} />
          <Japan jp={priorityRef.current.jp} JP={false} setCountrySelect={setCountrySelect} />
          <Jordan jo={priorityRef.current.jo} JO={false} setCountrySelect={setCountrySelect} />
          <Kazakhstan kz={priorityRef.current.kz} KZ={false} setCountrySelect={setCountrySelect} />
          <Kenya ke={priorityRef.current.ke} KE={false} setCountrySelect={setCountrySelect} />
          <Kyrgyzstan kg={priorityRef.current.kg} KG={false} setCountrySelect={setCountrySelect} />
          <Laos la={priorityRef.current.la} LA={false} setCountrySelect={setCountrySelect} />
          <Latvia lv={priorityRef.current.lv} LV={false} setCountrySelect={setCountrySelect} />
          <Liberia lr={priorityRef.current.lr} LR={false} setCountrySelect={setCountrySelect} />
          <Libya ly={priorityRef.current.ly} LY={false} setCountrySelect={setCountrySelect} />
          <Lithuania lt={priorityRef.current.lt} LT={false} setCountrySelect={setCountrySelect} />
          <Madagascar mg={priorityRef.current.mg} MG={false} setCountrySelect={setCountrySelect} />
          <Malawi mw={priorityRef.current.mw} MW={false} setCountrySelect={setCountrySelect} />
          <Malaysia my={priorityRef.current.my} MY={false} setCountrySelect={setCountrySelect} />
          <Mali ml={priorityRef.current.ml} ML={false} setCountrySelect={setCountrySelect} />
          <Mauritania mr={priorityRef.current.mr} MR={false} setCountrySelect={setCountrySelect} />
          <Mexico mx={priorityRef.current.mx} MX={false} setCountrySelect={setCountrySelect} />
          <Moldova md={priorityRef.current.md} MD={false} setCountrySelect={setCountrySelect} />
          <Mongolia mn={priorityRef.current.mn} MN={false} setCountrySelect={setCountrySelect} />
          <Morocco ma={priorityRef.current.ma} MA={false} setCountrySelect={setCountrySelect} />
          <Mozambique mz={priorityRef.current.mz} MZ={false} setCountrySelect={setCountrySelect} />
          <Myanmar mm={priorityRef.current.mm} MM={false} setCountrySelect={setCountrySelect} />
          <Namibia na={priorityRef.current.na} NA={false} setCountrySelect={setCountrySelect} />
          <Nepal np={priorityRef.current.np} NP={false} setCountrySelect={setCountrySelect} />
          <Netherlands nl={priorityRef.current.nl} NL={false} setCountrySelect={setCountrySelect} />
          <NewZealand nz={priorityRef.current.nz} NZ={false} setCountrySelect={setCountrySelect} />
          <Nicaragua ni={priorityRef.current.ni} NI={false} setCountrySelect={setCountrySelect} />
          <Niger ne={priorityRef.current.ne} NE={false} setCountrySelect={setCountrySelect} />
          <Nigeria ng={priorityRef.current.ng} NG={false} setCountrySelect={setCountrySelect} />
          <NorthKorea kp={priorityRef.current.kp} KP={false} setCountrySelect={setCountrySelect} />
          <NorthMacedonia mk={priorityRef.current.mk} MK={false} setCountrySelect={setCountrySelect} />
          <Norway no={priorityRef.current.no} NO={false} setCountrySelect={setCountrySelect} />
          <Oman om={priorityRef.current.om} OM={false} setCountrySelect={setCountrySelect} />
          <Pakistan pk={priorityRef.current.pk} PK={false} setCountrySelect={setCountrySelect} />
          <Panama pa={priorityRef.current.pa} PA={false} setCountrySelect={setCountrySelect} />
          <PapuaNewGuinea pg={priorityRef.current.pg} PG={false} setCountrySelect={setCountrySelect} />
          <Paraguay py={priorityRef.current.py} PY={false} setCountrySelect={setCountrySelect} />
          <Peru pe={priorityRef.current.pe} PE={false} setCountrySelect={setCountrySelect} />
          <Philippines ph={priorityRef.current.ph} PH={false} setCountrySelect={setCountrySelect} />
          <Poland pl={priorityRef.current.pl} PL={false} setCountrySelect={setCountrySelect} />
          <Portugal pt={priorityRef.current.pt} PT={false} setCountrySelect={setCountrySelect} />
          <RepublicOfTheCongo cg={priorityRef.current.cg} CG={false} setCountrySelect={setCountrySelect} />
          <Romania ro={priorityRef.current.ro} RO={false} setCountrySelect={setCountrySelect} />
          <Russia ru={priorityRef.current.ru} RU={false} setCountrySelect={setCountrySelect} />
          <SaudiArabia sa={priorityRef.current.sa} SA={false} setCountrySelect={setCountrySelect} />
          <Senegal sn={priorityRef.current.sn} SN={false} setCountrySelect={setCountrySelect} />
          <Serbia rs={priorityRef.current.rs} RS={false} setCountrySelect={setCountrySelect} />
          <SierraLeone sl={priorityRef.current.sl} SL={false} setCountrySelect={setCountrySelect} />
          <Slovakia sk={priorityRef.current.sk} SK={false} setCountrySelect={setCountrySelect} />
          <Slovenia si={priorityRef.current.si} SI={false} setCountrySelect={setCountrySelect} />
          <SolomonIslands sb={priorityRef.current.sb} SB={false} setCountrySelect={setCountrySelect} />
          <Somalia so={priorityRef.current.so} SO={false} setCountrySelect={setCountrySelect} />
          <SouthAfrica za={priorityRef.current.za} ZA={false} setCountrySelect={setCountrySelect} />
          <SouthKorea kr={priorityRef.current.kr} KR={false} setCountrySelect={setCountrySelect} />
          <SouthSudan ss={priorityRef.current.ss} SS={false} setCountrySelect={setCountrySelect} />
          <Spain es={priorityRef.current.es} ES={false} setCountrySelect={setCountrySelect} />
          <SriLanka lk={priorityRef.current.lk} LK={false} setCountrySelect={setCountrySelect} />
          <Sudan sd={priorityRef.current.sd} SD={false} setCountrySelect={setCountrySelect} />
          <Suriname sr={priorityRef.current.sr} SR={false} setCountrySelect={setCountrySelect} />
          <Sweden se={priorityRef.current.se} SE={false} setCountrySelect={setCountrySelect} />
          <Switzerland ch={priorityRef.current.ch} CH={false} setCountrySelect={setCountrySelect} />
          <Syria sy={priorityRef.current.sy} SY={false} setCountrySelect={setCountrySelect} />
          <Taiwan tw={priorityRef.current.tw} TW={false} setCountrySelect={setCountrySelect} />
          <Tajikistan tj={priorityRef.current.tj} TJ={false} setCountrySelect={setCountrySelect} />
          <Tanzania tz={priorityRef.current.tz} TZ={false} setCountrySelect={setCountrySelect} />
          <Thailand th={priorityRef.current.th} TH={false} setCountrySelect={setCountrySelect} />
          <Togo tg={priorityRef.current.tg} TG={false} setCountrySelect={setCountrySelect} />
          <Tunisia tn={priorityRef.current.tn} TN={false} setCountrySelect={setCountrySelect} />
          <Turkey tr={priorityRef.current.tr} TR={false} setCountrySelect={setCountrySelect} />
          <Turkmenistan tm={priorityRef.current.tm} TM={false} setCountrySelect={setCountrySelect} />
          <Uganda ug={priorityRef.current.ug} UG={false} setCountrySelect={setCountrySelect} />
          <Ukraine ua={priorityRef.current.ua} UA={false} setCountrySelect={setCountrySelect} />
          <UnitedArabEmirates ae={priorityRef.current.ae} AE={false} setCountrySelect={setCountrySelect} />
          <UnitedKingdom gb={priorityRef.current.gb} GB={false} setCountrySelect={setCountrySelect} />
          <UnitedStates us={priorityRef.current.us} US={false} setCountrySelect={setCountrySelect} />
          <Uruguay uy={priorityRef.current.uy} UY={false} setCountrySelect={setCountrySelect} />
          <Uzbekistan uz={priorityRef.current.uz} UZ={false} setCountrySelect={setCountrySelect} />
          <Venezuela ve={priorityRef.current.ve} VE={false} setCountrySelect={setCountrySelect} />
          <Vietnam vn={priorityRef.current.vn} VN={false} setCountrySelect={setCountrySelect} />
          <WesternSahara eh={priorityRef.current.eh} EH={false} setCountrySelect={setCountrySelect} />
          <Yemen ye={priorityRef.current.ye} YE={false} setCountrySelect={setCountrySelect} />
          <Zambia zm={priorityRef.current.zm} ZM={false} setCountrySelect={setCountrySelect} />
          <Zimbabwe zw={priorityRef.current.zw} ZW={false} setCountrySelect={setCountrySelect} />
          {/* Cutoff point, all country components below are rendered on top of the previous country components*/}
          <Abkhazia ab={priorityRef.current.ab} AB={false} setCountrySelect={setCountrySelect} />
          <Andorra ad={priorityRef.current.ad} AD={false} setCountrySelect={setCountrySelect} />
          <Anguilla ai={priorityRef.current.ai} AI={false} setCountrySelect={setCountrySelect} />
          <AntiguaAndBarbuda ag={priorityRef.current.ag} AG={false} setCountrySelect={setCountrySelect} />
          <Bahamas bs={priorityRef.current.bs} BS={false} setCountrySelect={setCountrySelect} />
          <Bahrain bh={priorityRef.current.bh} BH={false} setCountrySelect={setCountrySelect} />
          <Barbados bb={priorityRef.current.bb} BB={false} setCountrySelect={setCountrySelect} />
          <Belize bz={priorityRef.current.bz} BZ={false} setCountrySelect={setCountrySelect} />
          <Bermuda bm={priorityRef.current.bm} BM={false} setCountrySelect={setCountrySelect} />
          <BritishVirginIslands vg={priorityRef.current.vg} VG={false} setCountrySelect={setCountrySelect} />
          <Brunei bn={priorityRef.current.bn} BN={false} setCountrySelect={setCountrySelect} />
          <Burundi bi={priorityRef.current.bi} BI={false} setCountrySelect={setCountrySelect} />
          <CapeVerde cv={priorityRef.current.cv} CV={false} setCountrySelect={setCountrySelect} />
          <CaymanIslands ky={priorityRef.current.ky} KY={false} setCountrySelect={setCountrySelect} />
          <Comoros km={priorityRef.current.km} KM={false} setCountrySelect={setCountrySelect} />
          <Djibouti dj={priorityRef.current.dj} DJ={false} setCountrySelect={setCountrySelect} />
          <Cyprus cy={priorityRef.current.cy} CY={false} setCountrySelect={setCountrySelect} />
          <Dominica dm={priorityRef.current.dm} DM={false} setCountrySelect={setCountrySelect} />
          <EastTimor tl={priorityRef.current.tl} TL={false} setCountrySelect={setCountrySelect} />
          <ElSalvador sv={priorityRef.current.sv} SV={false} setCountrySelect={setCountrySelect} />
          <EquatorialGuinea gq={priorityRef.current.gq} GQ={false} setCountrySelect={setCountrySelect} />
          <Eswatini sz={priorityRef.current.sz} SZ={false} setCountrySelect={setCountrySelect} />
          <Fiji fj={priorityRef.current.fj} FJ={false} setCountrySelect={setCountrySelect} />
          <Gambia gm={priorityRef.current.gm} GM={false} setCountrySelect={setCountrySelect} />
          <Grenada gd={priorityRef.current.gd} GD={false} setCountrySelect={setCountrySelect} />
          <HongKong hk={priorityRef.current.hk} HK={false} setCountrySelect={setCountrySelect} />
          <Jamaica jm={priorityRef.current.jm} JM={false} setCountrySelect={setCountrySelect} />
          <Kiribati ki={priorityRef.current.ki} KI={false} setCountrySelect={setCountrySelect} />
          <Kosovo xk={priorityRef.current.xk} XK={false} setCountrySelect={setCountrySelect} />
          <Kuwait kw={priorityRef.current.kw} KW={false} setCountrySelect={setCountrySelect} />
          <Lebanon lb={priorityRef.current.lb} LB={false} setCountrySelect={setCountrySelect} />
          <Lesotho ls={priorityRef.current.ls} LS={false} setCountrySelect={setCountrySelect} />
          <Liechtenstein li={priorityRef.current.li} LI={false} setCountrySelect={setCountrySelect} />
          <Luxembourg lu={priorityRef.current.lu} LU={false} setCountrySelect={setCountrySelect} />
          <Macao mo={priorityRef.current.mo} MO={false} setCountrySelect={setCountrySelect} />
          <Maldives mv={priorityRef.current.mv} MV={false} setCountrySelect={setCountrySelect} />
          <Malta mt={priorityRef.current.mt} MT={false} setCountrySelect={setCountrySelect} />
          <MarshallIslands mh={priorityRef.current.mh} MH={false} setCountrySelect={setCountrySelect} />
          <Mauritius mu={priorityRef.current.mu} MU={false} setCountrySelect={setCountrySelect} />
          <Micronesia fm={priorityRef.current.fm} FM={false} setCountrySelect={setCountrySelect} />
          <Monaco mc={priorityRef.current.mc} MC={false} setCountrySelect={setCountrySelect} />
          <Montenegro me={priorityRef.current.me} ME={false} setCountrySelect={setCountrySelect} />
          <Montserrat ms={priorityRef.current.ms} MS={false} setCountrySelect={setCountrySelect} />
          <Nauru nr={priorityRef.current.nr} NR={false} setCountrySelect={setCountrySelect} />
          <NorthernCyprus rc={priorityRef.current.rc} RC={false} setCountrySelect={setCountrySelect} />
          <Palau pw={priorityRef.current.pw} PW={false} setCountrySelect={setCountrySelect} />
          <Palestine ps={priorityRef.current.ps} PS={false} setCountrySelect={setCountrySelect} />
          <Qatar qa={priorityRef.current.qa} QA={false} setCountrySelect={setCountrySelect} />
          <Rwanda rw={priorityRef.current.rw} RW={false} setCountrySelect={setCountrySelect} />
          <SaintHelena sh={priorityRef.current.sh} SH={false} setCountrySelect={setCountrySelect} />
          <SaintKittsAndNevis kn={priorityRef.current.kn} KN={false} setCountrySelect={setCountrySelect} />
          <SaintLucia lc={priorityRef.current.lc} LC={false} setCountrySelect={setCountrySelect} />
          <SaintVincentAndTheGrenadines vc={priorityRef.current.vc} VC={false} setCountrySelect={setCountrySelect} />
          <Samoa ws={priorityRef.current.ws} WS={false} setCountrySelect={setCountrySelect} />
          <SanMarino sm={priorityRef.current.sm} SM={false} setCountrySelect={setCountrySelect} />
          <SaoTomeAndPrincipe st={priorityRef.current.st} ST={false} setCountrySelect={setCountrySelect} />
          <Seychelles sc={priorityRef.current.sc} SC={false} setCountrySelect={setCountrySelect} />
          <Singapore sg={priorityRef.current.sg} SG={false} setCountrySelect={setCountrySelect} />
          <Somaliland xx={priorityRef.current.xx} XX={false} setCountrySelect={setCountrySelect} />
          <SouthOssetia xo={priorityRef.current.xo} XO={false} setCountrySelect={setCountrySelect} />
          <Tonga to={priorityRef.current.to} TO={false} setCountrySelect={setCountrySelect} />
          <TrinidadAndTobago tt={priorityRef.current.tt} TT={false} setCountrySelect={setCountrySelect} />
          <TurksAndCaicos tc={priorityRef.current.tc} TC={false} setCountrySelect={setCountrySelect} />
          <Tuvalu tv={priorityRef.current.tv} TV={false} setCountrySelect={setCountrySelect} />
          <Vanuatu vu={priorityRef.current.vu} VU={false} setCountrySelect={setCountrySelect} />
          <VaticanCity va={priorityRef.current.va} VA={false} setCountrySelect={setCountrySelect} />
          {selectedCalculation(selected)}
        </g>
      </svg>
    </div>
  )
}

export default MapSVG
