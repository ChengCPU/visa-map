import { useCallback, useEffect, useRef, useContext } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import { ColorContext } from '../../logic/context/ColorContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
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
}

const MapSVG:React.FC<Props> = ({ setHover, selected }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  const color = useContext(ColorContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

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
      case 'AS': return <AmericanSamoa as={color.as} AS={false} setCountrySelect={setCountrySelect} />
      case 'AW': return <Aruba aw={color.aw} AW={false} setCountrySelect={setCountrySelect} />
      case 'AC': return <AscensionIsland ac={color.ac} AC={false} setCountrySelect={setCountrySelect} />
      case 'CK': return <CookIslands ck={color.ck} CK={false} setCountrySelect={setCountrySelect} />
      case 'XB': return <Bonaire xb={color.xb} XB={false} setCountrySelect={setCountrySelect} />
      case 'IO': return <BritishIndianOceanTerritory io={color.io} IO={false} setCountrySelect={setCountrySelect} />
      case 'CW': return <Curacao cw={color.cw} CW={false} setCountrySelect={setCountrySelect} />
      case 'FK': return <FalklandIslands fk={color.fk} FK={false} setCountrySelect={setCountrySelect} />
      case 'FO': return <FaroeIslands fo={color.fo} FO={false} setCountrySelect={setCountrySelect} />
      case 'PF': return <FrenchPolynesia pf={color.pf} PF={false} setCountrySelect={setCountrySelect} />
      case 'GI': return <Gibraltar gi={color.gi} GI={false} setCountrySelect={setCountrySelect} />
      case 'GP': return <Guadeloupe gp={color.gp} GP={false} setCountrySelect={setCountrySelect} />
      case 'GU': return <Guam gu={color.gu} GU={false} setCountrySelect={setCountrySelect} />
      case 'XM': return <JanMayen xm={color.xm} XM={false} setCountrySelect={setCountrySelect} />
      case 'KX': return <Kurdistan kx={color.kx} KX={false} setCountrySelect={setCountrySelect} />
      case 'MQ': return <Martinique mq={color.mq} MQ={false} setCountrySelect={setCountrySelect} />
      case 'YT': return <Mayotte yt={color.yt} YT={false} setCountrySelect={setCountrySelect} />
      case 'NC': return <NewCaledonia nc={color.nc} NC={false} setCountrySelect={setCountrySelect} />
      case 'NU': return <Niue nu={color.nu} NU={false} setCountrySelect={setCountrySelect} />
      case 'MP': return <NorthernMarianaIslands mp={color.mp} MP={false} setCountrySelect={setCountrySelect} />
      case 'PN': return <PitcairnIslands pn={color.pn} PN={false} setCountrySelect={setCountrySelect} />
      case 'RE': return <Reunion re={color.re} RE={false} setCountrySelect={setCountrySelect} />
      case 'XS': return <Saba xs={color.xs} XS={false} setCountrySelect={setCountrySelect} />
      case 'BL': return <SaintBarthelemy bl={color.bl} BL={false} setCountrySelect={setCountrySelect} />
      case 'MF': return <SaintMartin mf={color.mf} MF={false} setCountrySelect={setCountrySelect} />
      case 'PM': return <SaintPierreAndMiquelon pm={color.pm} PM={false} setCountrySelect={setCountrySelect} />
      case 'XE': return <SintEustatius xe={color.xe} XE={false} setCountrySelect={setCountrySelect} />
      case 'SX': return <SintMaarten sx={color.sx} SX={false} setCountrySelect={setCountrySelect} />
      case 'XV': return <Svalbard xv={color.xv} XV={false} setCountrySelect={setCountrySelect} />
      case 'TK': return <Tokelau tk={color.tk} TK={false} setCountrySelect={setCountrySelect} />
      case 'XT': return <Transnistria xt={color.xt} XT={false} setCountrySelect={setCountrySelect} />
      case 'TX': return <TristanDaCunha tx={color.tx} TX={false} setCountrySelect={setCountrySelect} />
      case 'VI': return <UnitedStatesVirginIslands vi={color.vi} VI={false} setCountrySelect={setCountrySelect} />
      case 'WF': return <WallisAndFutuna wf={color.wf} WF={false} setCountrySelect={setCountrySelect} />
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
          <Afghanistan af={color.af} AF={false} setCountrySelect={setCountrySelect} />
          <Albania al={color.al} AL={false} setCountrySelect={setCountrySelect} />
          <Algeria dz={color.dz} DZ={false} setCountrySelect={setCountrySelect} />
          <Angola ao={color.ao} AO={false} setCountrySelect={setCountrySelect} />
          <Argentina ar={color.ar} AR={false} setCountrySelect={setCountrySelect} />
          <Armenia am={color.am} AM={false} setCountrySelect={setCountrySelect} />
          <Australia au={color.au} AU={false} setCountrySelect={setCountrySelect} />
          <Austria at={color.at} AT={false} setCountrySelect={setCountrySelect} />
          <Azerbaijan az={color.az} AZ={false} setCountrySelect={setCountrySelect} />
          <Bangladesh bd={color.bd} BD={false} setCountrySelect={setCountrySelect} />
          <Belarus by={color.by} BY={false} setCountrySelect={setCountrySelect} />
          <Belgium be={color.be} BE={false} setCountrySelect={setCountrySelect} />
          <Benin bj={color.bj} BJ={false} setCountrySelect={setCountrySelect} />
          <Bhutan bt={color.bt} BT={false} setCountrySelect={setCountrySelect} />
          <Bolivia bo={color.bo} BO={false} setCountrySelect={setCountrySelect} />
          <BosniaAndHerzegovina ba={color.ba} BA={false} setCountrySelect={setCountrySelect} />
          <Botswana bw={color.bw} BW={false} setCountrySelect={setCountrySelect} />
          <Brazil br={color.br} BR={false} setCountrySelect={setCountrySelect} />
          <Bulgaria bg={color.bg} BG={false} setCountrySelect={setCountrySelect} />
          <BurkinaFaso bf={color.bf} BF={false} setCountrySelect={setCountrySelect} />
          <Cambodia kh={color.kh} KH={false} setCountrySelect={setCountrySelect} />
          <Cameroon cm={color.cm} CM={false} setCountrySelect={setCountrySelect} />
          <Canada ca={color.ca} CA={false} setCountrySelect={setCountrySelect} />
          <CentralAfricanRepublic cf={color.cf} CF={false} setCountrySelect={setCountrySelect} />
          <Chad td={color.td} TD={false} setCountrySelect={setCountrySelect} />
          <Chile cl={color.cl} CL={false} setCountrySelect={setCountrySelect} />
          <China cn={color.cn} CN={false} setCountrySelect={setCountrySelect} />
          <Colombia co={color.co} CO={false} setCountrySelect={setCountrySelect} />
          <CostaRica cr={color.cr} CR={false} setCountrySelect={setCountrySelect} />
          <Croatia hr={color.hr} HR={false} setCountrySelect={setCountrySelect} />
          <Cuba cu={color.cu} CU={false} setCountrySelect={setCountrySelect} />
          <CzechRepublic cz={color.cz} CZ={false} setCountrySelect={setCountrySelect} />
          <DemocraticRepublicOfTheCongo cd={color.cd} CD={false} setCountrySelect={setCountrySelect} />
          <Denmark dk={color.dk} DK={false} setCountrySelect={setCountrySelect} />
          <DominicanRepublic dx={color.do} DO={false} setCountrySelect={setCountrySelect} />
          <Ecuador ec={color.ec} EC={false} setCountrySelect={setCountrySelect} />
          <Egypt eg={color.eg} EG={false} setCountrySelect={setCountrySelect} />
          <Eritrea er={color.er} ER={false} setCountrySelect={setCountrySelect} />
          <Estonia ee={color.ee} EE={false} setCountrySelect={setCountrySelect} />
          <Ethiopia et={color.et} ET={false} setCountrySelect={setCountrySelect} />
          <Finland fi={color.fi} FI={false} setCountrySelect={setCountrySelect} />
          <France fr={color.fr} FR={false} setCountrySelect={setCountrySelect} />
          <FrenchGuiana gf={color.gf} GF={false} setCountrySelect={setCountrySelect} hover={'france'}/>
          <Gabon ga={color.ga} GA={false} setCountrySelect={setCountrySelect} />
          <Georgia ge={color.ge} GE={false} setCountrySelect={setCountrySelect} />
          <Germany de={color.de} DE={false} setCountrySelect={setCountrySelect} />
          <Ghana gh={color.gh} GH={false} setCountrySelect={setCountrySelect} />
          <Greece gr={color.gr} GR={false} setCountrySelect={setCountrySelect} />
          <Greenland gl={color.gl} GL={false} setCountrySelect={setCountrySelect} hover={'denmark'}/>
          <Guatemala gt={color.gt} GT={false} setCountrySelect={setCountrySelect} />
          <Guinea gn={color.gn} GN={false} setCountrySelect={setCountrySelect} />
          <GuineaBissau gw={color.gw} GW={false} setCountrySelect={setCountrySelect} />
          <Guyana gy={color.gy} GY={false} setCountrySelect={setCountrySelect} />
          <Haiti ht={color.ht} HT={false} setCountrySelect={setCountrySelect} />
          <Honduras hn={color.hn} HN={false} setCountrySelect={setCountrySelect} />
          <Hungary hu={color.hu} HU={false} setCountrySelect={setCountrySelect} />
          <Iceland is={color.is} IS={false} setCountrySelect={setCountrySelect} />
          <India ix={color.in} IN={false} setCountrySelect={setCountrySelect} />
          <Indonesia id={color.id} ID={false} setCountrySelect={setCountrySelect} />
          <Iran ir={color.ir} IR={false} setCountrySelect={setCountrySelect} />
          <Iraq iq={color.iq} IQ={false} setCountrySelect={setCountrySelect} />
          <Ireland ie={color.ie} IE={false} setCountrySelect={setCountrySelect} />
          <Israel il={color.il} IL={false} setCountrySelect={setCountrySelect} />
          <Italy it={color.it} IT={false} setCountrySelect={setCountrySelect} />
          <IvoryCoast ci={color.ci} CI={false} setCountrySelect={setCountrySelect} />
          <Japan jp={color.jp} JP={false} setCountrySelect={setCountrySelect} />
          <Jordan jo={color.jo} JO={false} setCountrySelect={setCountrySelect} />
          <Kazakhstan kz={color.kz} KZ={false} setCountrySelect={setCountrySelect} />
          <Kenya ke={color.ke} KE={false} setCountrySelect={setCountrySelect} />
          <Kyrgyzstan kg={color.kg} KG={false} setCountrySelect={setCountrySelect} />
          <Laos la={color.la} LA={false} setCountrySelect={setCountrySelect} />
          <Latvia lv={color.lv} LV={false} setCountrySelect={setCountrySelect} />
          <Liberia lr={color.lr} LR={false} setCountrySelect={setCountrySelect} />
          <Libya ly={color.ly} LY={false} setCountrySelect={setCountrySelect} />
          <Lithuania lt={color.lt} LT={false} setCountrySelect={setCountrySelect} />
          <Madagascar mg={color.mg} MG={false} setCountrySelect={setCountrySelect} />
          <Malawi mw={color.mw} MW={false} setCountrySelect={setCountrySelect} />
          <Malaysia my={color.my} MY={false} setCountrySelect={setCountrySelect} />
          <Mali ml={color.ml} ML={false} setCountrySelect={setCountrySelect} />
          <Mauritania mr={color.mr} MR={false} setCountrySelect={setCountrySelect} />
          <Mexico mx={color.mx} MX={false} setCountrySelect={setCountrySelect} />
          <Moldova md={color.md} MD={false} setCountrySelect={setCountrySelect} />
          <Mongolia mn={color.mn} MN={false} setCountrySelect={setCountrySelect} />
          <Morocco ma={color.ma} MA={false} setCountrySelect={setCountrySelect} />
          <Mozambique mz={color.mz} MZ={false} setCountrySelect={setCountrySelect} />
          <Myanmar mm={color.mm} MM={false} setCountrySelect={setCountrySelect} />
          <Namibia na={color.na} NA={false} setCountrySelect={setCountrySelect} />
          <Nepal np={color.np} NP={false} setCountrySelect={setCountrySelect} />
          <Netherlands nl={color.nl} NL={false} setCountrySelect={setCountrySelect} />
          <NewZealand nz={color.nz} NZ={false} setCountrySelect={setCountrySelect} />
          <Nicaragua ni={color.ni} NI={false} setCountrySelect={setCountrySelect} />
          <Niger ne={color.ne} NE={false} setCountrySelect={setCountrySelect} />
          <Nigeria ng={color.ng} NG={false} setCountrySelect={setCountrySelect} />
          <NorthKorea kp={color.kp} KP={false} setCountrySelect={setCountrySelect} />
          <NorthMacedonia mk={color.mk} MK={false} setCountrySelect={setCountrySelect} />
          <Norway no={color.no} NO={false} setCountrySelect={setCountrySelect} />
          <Oman om={color.om} OM={false} setCountrySelect={setCountrySelect} />
          <Pakistan pk={color.pk} PK={false} setCountrySelect={setCountrySelect} />
          <Panama pa={color.pa} PA={false} setCountrySelect={setCountrySelect} />
          <PapuaNewGuinea pg={color.pg} PG={false} setCountrySelect={setCountrySelect} />
          <Paraguay py={color.py} PY={false} setCountrySelect={setCountrySelect} />
          <Peru pe={color.pe} PE={false} setCountrySelect={setCountrySelect} />
          <Philippines ph={color.ph} PH={false} setCountrySelect={setCountrySelect} />
          <Poland pl={color.pl} PL={false} setCountrySelect={setCountrySelect} />
          <Portugal pt={color.pt} PT={false} setCountrySelect={setCountrySelect} />
          <RepublicOfTheCongo cg={color.cg} CG={false} setCountrySelect={setCountrySelect} />
          <Romania ro={color.ro} RO={false} setCountrySelect={setCountrySelect} />
          <Russia ru={color.ru} RU={false} setCountrySelect={setCountrySelect} />
          <SaudiArabia sa={color.sa} SA={false} setCountrySelect={setCountrySelect} />
          <Senegal sn={color.sn} SN={false} setCountrySelect={setCountrySelect} />
          <Serbia rs={color.rs} RS={false} setCountrySelect={setCountrySelect} />
          <SierraLeone sl={color.sl} SL={false} setCountrySelect={setCountrySelect} />
          <Slovakia sk={color.sk} SK={false} setCountrySelect={setCountrySelect} />
          <Slovenia si={color.si} SI={false} setCountrySelect={setCountrySelect} />
          <SolomonIslands sb={color.sb} SB={false} setCountrySelect={setCountrySelect} />
          <Somalia so={color.so} SO={false} setCountrySelect={setCountrySelect} />
          <SouthAfrica za={color.za} ZA={false} setCountrySelect={setCountrySelect} />
          <SouthKorea kr={color.kr} KR={false} setCountrySelect={setCountrySelect} />
          <SouthSudan ss={color.ss} SS={false} setCountrySelect={setCountrySelect} />
          <Spain es={color.es} ES={false} setCountrySelect={setCountrySelect} />
          <SriLanka lk={color.lk} LK={false} setCountrySelect={setCountrySelect} />
          <Sudan sd={color.sd} SD={false} setCountrySelect={setCountrySelect} />
          <Suriname sr={color.sr} SR={false} setCountrySelect={setCountrySelect} />
          <Sweden se={color.se} SE={false} setCountrySelect={setCountrySelect} />
          <Switzerland ch={color.ch} CH={false} setCountrySelect={setCountrySelect} />
          <Syria sy={color.sy} SY={false} setCountrySelect={setCountrySelect} />
          <Taiwan tw={color.tw} TW={false} setCountrySelect={setCountrySelect} />
          <Tajikistan tj={color.tj} TJ={false} setCountrySelect={setCountrySelect} />
          <Tanzania tz={color.tz} TZ={false} setCountrySelect={setCountrySelect} />
          <Thailand th={color.th} TH={false} setCountrySelect={setCountrySelect} />
          <Togo tg={color.tg} TG={false} setCountrySelect={setCountrySelect} />
          <Tunisia tn={color.tn} TN={false} setCountrySelect={setCountrySelect} />
          <Turkey tr={color.tr} TR={false} setCountrySelect={setCountrySelect} />
          <Turkmenistan tm={color.tm} TM={false} setCountrySelect={setCountrySelect} />
          <Uganda ug={color.ug} UG={false} setCountrySelect={setCountrySelect} />
          <Ukraine ua={color.ua} UA={false} setCountrySelect={setCountrySelect} />
          <UnitedArabEmirates ae={color.ae} AE={false} setCountrySelect={setCountrySelect} />
          <UnitedKingdom gb={color.gb} GB={false} setCountrySelect={setCountrySelect} />
          <UnitedStates us={color.us} US={false} setCountrySelect={setCountrySelect} />
          <Uruguay uy={color.uy} UY={false} setCountrySelect={setCountrySelect} />
          <Uzbekistan uz={color.uz} UZ={false} setCountrySelect={setCountrySelect} />
          <Venezuela ve={color.ve} VE={false} setCountrySelect={setCountrySelect} />
          <Vietnam vn={color.vn} VN={false} setCountrySelect={setCountrySelect} />
          <WesternSahara eh={color.eh} EH={false} setCountrySelect={setCountrySelect} />
          <Yemen ye={color.ye} YE={false} setCountrySelect={setCountrySelect} />
          <Zambia zm={color.zm} ZM={false} setCountrySelect={setCountrySelect} />
          <Zimbabwe zw={color.zw} ZW={false} setCountrySelect={setCountrySelect} />
          {/* Cutoff point, all country components below are rendered on top of the previous country components*/}
          <Abkhazia ab={color.ab} AB={false} setCountrySelect={setCountrySelect} />
          <Andorra ad={color.ad} AD={false} setCountrySelect={setCountrySelect} />
          <Anguilla ai={color.ai} AI={false} setCountrySelect={setCountrySelect} />
          <AntiguaAndBarbuda ag={color.ag} AG={false} setCountrySelect={setCountrySelect} />
          <Bahamas bs={color.bs} BS={false} setCountrySelect={setCountrySelect} />
          <Bahrain bh={color.bh} BH={false} setCountrySelect={setCountrySelect} />
          <Barbados bb={color.bb} BB={false} setCountrySelect={setCountrySelect} />
          <Belize bz={color.bz} BZ={false} setCountrySelect={setCountrySelect} />
          <Bermuda bm={color.bm} BM={false} setCountrySelect={setCountrySelect} />
          <BritishVirginIslands vg={color.vg} VG={false} setCountrySelect={setCountrySelect} />
          <Brunei bn={color.bn} BN={false} setCountrySelect={setCountrySelect} />
          <Burundi bi={color.bi} BI={false} setCountrySelect={setCountrySelect} />
          <CapeVerde cv={color.cv} CV={false} setCountrySelect={setCountrySelect} />
          <CaymanIslands ky={color.ky} KY={false} setCountrySelect={setCountrySelect} />
          <Comoros km={color.km} KM={false} setCountrySelect={setCountrySelect} />
          <Djibouti dj={color.dj} DJ={false} setCountrySelect={setCountrySelect} />
          <Cyprus cy={color.cy} CY={false} setCountrySelect={setCountrySelect} />
          <Dominica dm={color.dm} DM={false} setCountrySelect={setCountrySelect} />
          <EastTimor tl={color.tl} TL={false} setCountrySelect={setCountrySelect} />
          <ElSalvador sv={color.sv} SV={false} setCountrySelect={setCountrySelect} />
          <EquatorialGuinea gq={color.gq} GQ={false} setCountrySelect={setCountrySelect} />
          <Eswatini sz={color.sz} SZ={false} setCountrySelect={setCountrySelect} />
          <Fiji fj={color.fj} FJ={false} setCountrySelect={setCountrySelect} />
          <Gambia gm={color.gm} GM={false} setCountrySelect={setCountrySelect} />
          <Grenada gd={color.gd} GD={false} setCountrySelect={setCountrySelect} />
          <HongKong hk={color.hk} HK={false} setCountrySelect={setCountrySelect} />
          <Jamaica jm={color.jm} JM={false} setCountrySelect={setCountrySelect} />
          <Kiribati ki={color.ki} KI={false} setCountrySelect={setCountrySelect} />
          <Kosovo xk={color.xk} XK={false} setCountrySelect={setCountrySelect} />
          <Kuwait kw={color.kw} KW={false} setCountrySelect={setCountrySelect} />
          <Lebanon lb={color.lb} LB={false} setCountrySelect={setCountrySelect} />
          <Lesotho ls={color.ls} LS={false} setCountrySelect={setCountrySelect} />
          <Liechtenstein li={color.li} LI={false} setCountrySelect={setCountrySelect} />
          <Luxembourg lu={color.lu} LU={false} setCountrySelect={setCountrySelect} />
          <Macao mo={color.mo} MO={false} setCountrySelect={setCountrySelect} />
          <Maldives mv={color.mv} MV={false} setCountrySelect={setCountrySelect} />
          <Malta mt={color.mt} MT={false} setCountrySelect={setCountrySelect} />
          <MarshallIslands mh={color.mh} MH={false} setCountrySelect={setCountrySelect} />
          <Mauritius mu={color.mu} MU={false} setCountrySelect={setCountrySelect} />
          <Micronesia fm={color.fm} FM={false} setCountrySelect={setCountrySelect} />
          <Monaco mc={color.mc} MC={false} setCountrySelect={setCountrySelect} />
          <Montenegro me={color.me} ME={false} setCountrySelect={setCountrySelect} />
          <Montserrat ms={color.ms} MS={false} setCountrySelect={setCountrySelect} />
          <Nauru nr={color.nr} NR={false} setCountrySelect={setCountrySelect} />
          <NorthernCyprus rc={color.rc} RC={false} setCountrySelect={setCountrySelect} />
          <Palau pw={color.pw} PW={false} setCountrySelect={setCountrySelect} />
          <Palestine ps={color.ps} PS={false} setCountrySelect={setCountrySelect} />
          <Qatar qa={color.qa} QA={false} setCountrySelect={setCountrySelect} />
          <Rwanda rw={color.rw} RW={false} setCountrySelect={setCountrySelect} />
          <SaintHelena sh={color.sh} SH={false} setCountrySelect={setCountrySelect} />
          <SaintKittsAndNevis kn={color.kn} KN={false} setCountrySelect={setCountrySelect} />
          <SaintLucia lc={color.lc} LC={false} setCountrySelect={setCountrySelect} />
          <SaintVincentAndTheGrenadines vc={color.vc} VC={false} setCountrySelect={setCountrySelect} />
          <Samoa ws={color.ws} WS={false} setCountrySelect={setCountrySelect} />
          <SanMarino sm={color.sm} SM={false} setCountrySelect={setCountrySelect} />
          <SaoTomeAndPrincipe st={color.st} ST={false} setCountrySelect={setCountrySelect} />
          <Seychelles sc={color.sc} SC={false} setCountrySelect={setCountrySelect} />
          <Singapore sg={color.sg} SG={false} setCountrySelect={setCountrySelect} />
          <Somaliland xx={color.xx} XX={false} setCountrySelect={setCountrySelect} />
          <SouthOssetia xo={color.xo} XO={false} setCountrySelect={setCountrySelect} />
          <Tonga to={color.to} TO={false} setCountrySelect={setCountrySelect} />
          <TrinidadAndTobago tt={color.tt} TT={false} setCountrySelect={setCountrySelect} />
          <TurksAndCaicos tc={color.tc} TC={false} setCountrySelect={setCountrySelect} />
          <Tuvalu tv={color.tv} TV={false} setCountrySelect={setCountrySelect} />
          <Vanuatu vu={color.vu} VU={false} setCountrySelect={setCountrySelect} />
          <VaticanCity va={color.va} VA={false} setCountrySelect={setCountrySelect} />
          {selectedCalculation(selected)}
        </g>
      </svg>
    </div>
  )
}

export default MapSVG
