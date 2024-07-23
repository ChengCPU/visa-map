import { useEffect, useContext, useRef, MutableRefObject } from 'react'
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
import Jeju from '../countries/Jeju'
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
  panzoomReset:boolean;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  diffRef:MutableRefObject<{[key:string]:boolean}>;
  setCountrySelect:Function;
}

const MapSVG:React.FC<Props> = ({ setHover, panzoomReset, priorityRef, diffRef, setCountrySelect }) => {

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
          minZoom: 1.075,
          /*
          onTouch: function(e) {
            return false;
          }
          */
        })
      }

      return () => {
        panzoom.dispose()
      }
    }
  }, [dimensions.width, panzoomReset])

  return (
    <div ref={panzoomRef} id={'map'} className={'container'}>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-content: space-around;
          position: absolute;
        }
      `}</style>
      <svg id='scene' version="1.2" viewBox="-50 -25 2190 890" width={dimensions.width}>
        <g onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Afghanistan af={priorityRef.current.af} AF={diffRef.current.AF} setCountrySelect={setCountrySelect} />
          <Albania al={priorityRef.current.al} AL={diffRef.current.AL} setCountrySelect={setCountrySelect} />
          <Algeria dz={priorityRef.current.dz} DZ={diffRef.current.DZ} setCountrySelect={setCountrySelect} />
          <Angola ao={priorityRef.current.ao} AO={diffRef.current.AO} setCountrySelect={setCountrySelect} />
          <Argentina ar={priorityRef.current.ar} AR={diffRef.current.AR} setCountrySelect={setCountrySelect} />
          <Armenia am={priorityRef.current.am} AM={diffRef.current.AM} setCountrySelect={setCountrySelect} />
          <Australia au={priorityRef.current.au} AU={diffRef.current.AU} setCountrySelect={setCountrySelect} />
          <Austria at={priorityRef.current.at} AT={diffRef.current.AT} setCountrySelect={setCountrySelect} />
          <Azerbaijan az={priorityRef.current.az} AZ={diffRef.current.AZ} setCountrySelect={setCountrySelect} />
          <Bangladesh bd={priorityRef.current.bd} BD={diffRef.current.BD} setCountrySelect={setCountrySelect} />
          <Belarus by={priorityRef.current.by} BY={diffRef.current.BY} setCountrySelect={setCountrySelect} />
          <Belgium be={priorityRef.current.be} BE={diffRef.current.BE} setCountrySelect={setCountrySelect} />
          <Benin bj={priorityRef.current.bj} BJ={diffRef.current.BJ} setCountrySelect={setCountrySelect} />
          <Bhutan bt={priorityRef.current.bt} BT={diffRef.current.BT} setCountrySelect={setCountrySelect} />
          <Bolivia bo={priorityRef.current.bo} BO={diffRef.current.BO} setCountrySelect={setCountrySelect} />
          <BosniaAndHerzegovina ba={priorityRef.current.ba} BA={diffRef.current.BA} setCountrySelect={setCountrySelect} />
          <Botswana bw={priorityRef.current.bw} BW={diffRef.current.BW} setCountrySelect={setCountrySelect} />
          <Brazil br={priorityRef.current.br} BR={diffRef.current.BR} setCountrySelect={setCountrySelect} />
          <Bulgaria bg={priorityRef.current.bg} BG={diffRef.current.BG} setCountrySelect={setCountrySelect} />
          <BurkinaFaso bf={priorityRef.current.bf} BF={diffRef.current.BF} setCountrySelect={setCountrySelect} />
          <Cambodia kh={priorityRef.current.kh} KH={diffRef.current.KH} setCountrySelect={setCountrySelect} />
          <Cameroon cm={priorityRef.current.cm} CM={diffRef.current.CM} setCountrySelect={setCountrySelect} />
          <Canada ca={priorityRef.current.ca} CA={diffRef.current.CA} setCountrySelect={setCountrySelect} />
          <CentralAfricanRepublic cf={priorityRef.current.cf} CF={diffRef.current.CF} setCountrySelect={setCountrySelect} />
          <Chad td={priorityRef.current.td} TD={diffRef.current.TD} setCountrySelect={setCountrySelect} />
          <Chile cl={priorityRef.current.cl} CL={diffRef.current.CL} setCountrySelect={setCountrySelect} />
          <China cn={priorityRef.current.cn} CN={diffRef.current.CN} setCountrySelect={setCountrySelect} />
          <Colombia co={priorityRef.current.co} CO={diffRef.current.CO} setCountrySelect={setCountrySelect} />
          <CostaRica cr={priorityRef.current.cr} CR={diffRef.current.CR} setCountrySelect={setCountrySelect} />
          <Croatia hr={priorityRef.current.hr} HR={diffRef.current.HR} setCountrySelect={setCountrySelect} />
          <Cuba cu={priorityRef.current.cu} CU={diffRef.current.CU} setCountrySelect={setCountrySelect} />
          <CzechRepublic cz={priorityRef.current.cz} CZ={diffRef.current.CZ} setCountrySelect={setCountrySelect} />
          <DemocraticRepublicOfTheCongo cd={priorityRef.current.cd} CD={diffRef.current.CD} setCountrySelect={setCountrySelect} />
          <Denmark dk={priorityRef.current.dk} DK={diffRef.current.DK} setCountrySelect={setCountrySelect} />
          <DominicanRepublic dx={priorityRef.current.do} DO={diffRef.current.DO} setCountrySelect={setCountrySelect} />
          <Ecuador ec={priorityRef.current.ec} EC={diffRef.current.EC} setCountrySelect={setCountrySelect} />
          <Egypt eg={priorityRef.current.eg} EG={diffRef.current.EG} setCountrySelect={setCountrySelect} />
          <Eritrea er={priorityRef.current.er} ER={diffRef.current.ER} setCountrySelect={setCountrySelect} />
          <Estonia ee={priorityRef.current.ee} EE={diffRef.current.EE} setCountrySelect={setCountrySelect} />
          <Ethiopia et={priorityRef.current.et} ET={diffRef.current.ET} setCountrySelect={setCountrySelect} />
          <Finland fi={priorityRef.current.fi} FI={diffRef.current.FI} setCountrySelect={setCountrySelect} />
          <France fr={priorityRef.current.fr} FR={diffRef.current.FR} setCountrySelect={setCountrySelect} />
          <FrenchGuiana gf={priorityRef.current.gf} GF={diffRef.current.GF} setCountrySelect={setCountrySelect} hover={'frenchGuiana'} />
          <Gabon ga={priorityRef.current.ga} GA={diffRef.current.GA} setCountrySelect={setCountrySelect} />
          <Georgia ge={priorityRef.current.ge} GE={diffRef.current.GE} setCountrySelect={setCountrySelect} />
          <Germany de={priorityRef.current.de} DE={diffRef.current.DE} setCountrySelect={setCountrySelect} />
          <Ghana gh={priorityRef.current.gh} GH={diffRef.current.GH} setCountrySelect={setCountrySelect} />
          <Greece gr={priorityRef.current.gr} GR={diffRef.current.GR} setCountrySelect={setCountrySelect} />
          <Greenland gl={priorityRef.current.gl} GL={diffRef.current.GL} setCountrySelect={setCountrySelect} hover={'greenland'} />
          <Guatemala gt={priorityRef.current.gt} GT={diffRef.current.GT} setCountrySelect={setCountrySelect} />
          <Guinea gn={priorityRef.current.gn} GN={diffRef.current.GN} setCountrySelect={setCountrySelect} />
          <GuineaBissau gw={priorityRef.current.gw} GW={diffRef.current.GW} setCountrySelect={setCountrySelect} />
          <Guyana gy={priorityRef.current.gy} GY={diffRef.current.GY} setCountrySelect={setCountrySelect} />
          <Haiti ht={priorityRef.current.ht} HT={diffRef.current.HT} setCountrySelect={setCountrySelect} />
          <Honduras hn={priorityRef.current.hn} HN={diffRef.current.HN} setCountrySelect={setCountrySelect} />
          <Hungary hu={priorityRef.current.hu} HU={diffRef.current.HU} setCountrySelect={setCountrySelect} />
          <Iceland is={priorityRef.current.is} IS={diffRef.current.IS} setCountrySelect={setCountrySelect} />
          <India ix={priorityRef.current.in} IN={diffRef.current.IN} setCountrySelect={setCountrySelect} />
          <Indonesia id={priorityRef.current.id} ID={diffRef.current.ID} setCountrySelect={setCountrySelect} />
          <Iran ir={priorityRef.current.ir} IR={diffRef.current.IR} setCountrySelect={setCountrySelect} />
          <Iraq iq={priorityRef.current.iq} IQ={diffRef.current.IQ} setCountrySelect={setCountrySelect} />
          <Ireland ie={priorityRef.current.ie} IE={diffRef.current.IE} setCountrySelect={setCountrySelect} />
          <Israel il={priorityRef.current.il} IL={diffRef.current.IL} setCountrySelect={setCountrySelect} />
          <Italy it={priorityRef.current.it} IT={diffRef.current.IT} setCountrySelect={setCountrySelect} />
          <IvoryCoast ci={priorityRef.current.ci} CI={diffRef.current.CI} setCountrySelect={setCountrySelect} />
          <Japan jp={priorityRef.current.jp} JP={diffRef.current.JP} setCountrySelect={setCountrySelect} />
          <Jordan jo={priorityRef.current.jo} JO={diffRef.current.JO} setCountrySelect={setCountrySelect} />
          <Kazakhstan kz={priorityRef.current.kz} KZ={diffRef.current.KZ} setCountrySelect={setCountrySelect} />
          <Kenya ke={priorityRef.current.ke} KE={diffRef.current.KE} setCountrySelect={setCountrySelect} />
          <Kyrgyzstan kg={priorityRef.current.kg} KG={diffRef.current.KG} setCountrySelect={setCountrySelect} />
          <Laos la={priorityRef.current.la} LA={diffRef.current.LA} setCountrySelect={setCountrySelect} />
          <Latvia lv={priorityRef.current.lv} LV={diffRef.current.LV} setCountrySelect={setCountrySelect} />
          <Liberia lr={priorityRef.current.lr} LR={diffRef.current.LR} setCountrySelect={setCountrySelect} />
          <Libya ly={priorityRef.current.ly} LY={diffRef.current.LY} setCountrySelect={setCountrySelect} />
          <Lithuania lt={priorityRef.current.lt} LT={diffRef.current.LT} setCountrySelect={setCountrySelect} />
          <Madagascar mg={priorityRef.current.mg} MG={diffRef.current.MG} setCountrySelect={setCountrySelect} />
          <Malawi mw={priorityRef.current.mw} MW={diffRef.current.MW} setCountrySelect={setCountrySelect} />
          <Malaysia my={priorityRef.current.my} MY={diffRef.current.MY} setCountrySelect={setCountrySelect} />
          <Mali ml={priorityRef.current.ml} ML={diffRef.current.ML} setCountrySelect={setCountrySelect} />
          <Mauritania mr={priorityRef.current.mr} MR={diffRef.current.MR} setCountrySelect={setCountrySelect} />
          <Mexico mx={priorityRef.current.mx} MX={diffRef.current.MX} setCountrySelect={setCountrySelect} />
          <Moldova md={priorityRef.current.md} MD={diffRef.current.MD} setCountrySelect={setCountrySelect} />
          <Mongolia mn={priorityRef.current.mn} MN={diffRef.current.MN} setCountrySelect={setCountrySelect} />
          <Morocco ma={priorityRef.current.ma} MA={diffRef.current.MA} setCountrySelect={setCountrySelect} />
          <Mozambique mz={priorityRef.current.mz} MZ={diffRef.current.MZ} setCountrySelect={setCountrySelect} />
          <Myanmar mm={priorityRef.current.mm} MM={diffRef.current.MM} setCountrySelect={setCountrySelect} />
          <Namibia na={priorityRef.current.na} NA={diffRef.current.NA} setCountrySelect={setCountrySelect} />
          <Nepal np={priorityRef.current.np} NP={diffRef.current.NP} setCountrySelect={setCountrySelect} />
          <Netherlands nl={priorityRef.current.nl} NL={diffRef.current.NL} setCountrySelect={setCountrySelect} />
          <NewZealand nz={priorityRef.current.nz} NZ={diffRef.current.NZ} setCountrySelect={setCountrySelect} />
          <Nicaragua ni={priorityRef.current.ni} NI={diffRef.current.NI} setCountrySelect={setCountrySelect} />
          <Niger ne={priorityRef.current.ne} NE={diffRef.current.NE} setCountrySelect={setCountrySelect} />
          <Nigeria ng={priorityRef.current.ng} NG={diffRef.current.NG} setCountrySelect={setCountrySelect} />
          <NorthKorea kp={priorityRef.current.kp} KP={diffRef.current.KP} setCountrySelect={setCountrySelect} />
          <NorthMacedonia mk={priorityRef.current.mk} MK={diffRef.current.MK} setCountrySelect={setCountrySelect} />
          <Norway no={priorityRef.current.no} NO={diffRef.current.NO} setCountrySelect={setCountrySelect} />
          <Oman om={priorityRef.current.om} OM={diffRef.current.OM} setCountrySelect={setCountrySelect} />
          <Pakistan pk={priorityRef.current.pk} PK={diffRef.current.PK} setCountrySelect={setCountrySelect} />
          <Panama pa={priorityRef.current.pa} PA={diffRef.current.PA} setCountrySelect={setCountrySelect} />
          <PapuaNewGuinea pg={priorityRef.current.pg} PG={diffRef.current.PG} setCountrySelect={setCountrySelect} />
          <Paraguay py={priorityRef.current.py} PY={diffRef.current.PY} setCountrySelect={setCountrySelect} />
          <Peru pe={priorityRef.current.pe} PE={diffRef.current.PE} setCountrySelect={setCountrySelect} />
          <Philippines ph={priorityRef.current.ph} PH={diffRef.current.PH} setCountrySelect={setCountrySelect} />
          <Poland pl={priorityRef.current.pl} PL={diffRef.current.PL} setCountrySelect={setCountrySelect} />
          <Portugal pt={priorityRef.current.pt} PT={diffRef.current.PT} setCountrySelect={setCountrySelect} />
          <RepublicOfTheCongo cg={priorityRef.current.cg} CG={diffRef.current.CG} setCountrySelect={setCountrySelect} />
          <Romania ro={priorityRef.current.ro} RO={diffRef.current.RO} setCountrySelect={setCountrySelect} />
          <Russia ru={priorityRef.current.ru} RU={diffRef.current.RU} setCountrySelect={setCountrySelect} />
          <SaudiArabia sa={priorityRef.current.sa} SA={diffRef.current.SA} setCountrySelect={setCountrySelect} />
          <Senegal sn={priorityRef.current.sn} SN={diffRef.current.SN} setCountrySelect={setCountrySelect} />
          <Serbia rs={priorityRef.current.rs} RS={diffRef.current.RS} setCountrySelect={setCountrySelect} />
          <SierraLeone sl={priorityRef.current.sl} SL={diffRef.current.SL} setCountrySelect={setCountrySelect} />
          <Slovakia sk={priorityRef.current.sk} SK={diffRef.current.SK} setCountrySelect={setCountrySelect} />
          <Slovenia si={priorityRef.current.si} SI={diffRef.current.SI} setCountrySelect={setCountrySelect} />
          <SolomonIslands sb={priorityRef.current.sb} SB={diffRef.current.SB} setCountrySelect={setCountrySelect} />
          <Somalia so={priorityRef.current.so} SO={diffRef.current.SO} setCountrySelect={setCountrySelect} />
          <SouthAfrica za={priorityRef.current.za} ZA={diffRef.current.ZA} setCountrySelect={setCountrySelect} />
          <SouthKorea kr={priorityRef.current.kr} KR={diffRef.current.KR} setCountrySelect={setCountrySelect} />
          <SouthSudan ss={priorityRef.current.ss} SS={diffRef.current.SS} setCountrySelect={setCountrySelect} />
          <Spain es={priorityRef.current.es} ES={diffRef.current.ES} setCountrySelect={setCountrySelect} />
          <SriLanka lk={priorityRef.current.lk} LK={diffRef.current.LK} setCountrySelect={setCountrySelect} />
          <Sudan sd={priorityRef.current.sd} SD={diffRef.current.SD} setCountrySelect={setCountrySelect} />
          <Suriname sr={priorityRef.current.sr} SR={diffRef.current.SR} setCountrySelect={setCountrySelect} />
          <Svalbard xv={priorityRef.current.xv} XV={diffRef.current.XV} setCountrySelect={setCountrySelect} />
          <Sweden se={priorityRef.current.se} SE={diffRef.current.SE} setCountrySelect={setCountrySelect} />
          <Switzerland ch={priorityRef.current.ch} CH={diffRef.current.CH} setCountrySelect={setCountrySelect} />
          <Syria sy={priorityRef.current.sy} SY={diffRef.current.SY} setCountrySelect={setCountrySelect} />
          <Taiwan tw={priorityRef.current.tw} TW={diffRef.current.tw} setCountrySelect={setCountrySelect} />
          <Tajikistan tj={priorityRef.current.tj} TJ={diffRef.current.TJ} setCountrySelect={setCountrySelect} />
          <Tanzania tz={priorityRef.current.tz} TZ={diffRef.current.TZ} setCountrySelect={setCountrySelect} />
          <Thailand th={priorityRef.current.th} TH={diffRef.current.TH} setCountrySelect={setCountrySelect} />
          <Togo tg={priorityRef.current.tg} TG={diffRef.current.TG} setCountrySelect={setCountrySelect} />
          <Tunisia tn={priorityRef.current.tn} TN={diffRef.current.TN} setCountrySelect={setCountrySelect} />
          <Turkey tr={priorityRef.current.tr} TR={diffRef.current.TR} setCountrySelect={setCountrySelect} />
          <Turkmenistan tm={priorityRef.current.tm} TM={diffRef.current.TM} setCountrySelect={setCountrySelect} />
          <Uganda ug={priorityRef.current.ug} UG={diffRef.current.UG} setCountrySelect={setCountrySelect} />
          <Ukraine ua={priorityRef.current.ua} UA={diffRef.current.UA} setCountrySelect={setCountrySelect} />
          <UnitedArabEmirates ae={priorityRef.current.ae} AE={diffRef.current.AE} setCountrySelect={setCountrySelect} />
          <UnitedKingdom gb={priorityRef.current.gb} GB={diffRef.current.GB} setCountrySelect={setCountrySelect} />
          <UnitedStates us={priorityRef.current.us} US={diffRef.current.US} setCountrySelect={setCountrySelect} />
          <Uruguay uy={priorityRef.current.uy} UY={diffRef.current.UY} setCountrySelect={setCountrySelect} />
          <Uzbekistan uz={priorityRef.current.uz} UZ={diffRef.current.UZ} setCountrySelect={setCountrySelect} />
          <Venezuela ve={priorityRef.current.ve} VE={diffRef.current.VE} setCountrySelect={setCountrySelect} />
          <Vietnam vn={priorityRef.current.vn} VN={diffRef.current.VN} setCountrySelect={setCountrySelect} />
          <WesternSahara eh={priorityRef.current.eh} EH={diffRef.current.EH} setCountrySelect={setCountrySelect} />
          <Yemen ye={priorityRef.current.ye} YE={diffRef.current.YE} setCountrySelect={setCountrySelect} />
          <Zambia zm={priorityRef.current.zm} ZM={diffRef.current.ZM} setCountrySelect={setCountrySelect} />
          <Zimbabwe zw={priorityRef.current.zw} ZW={diffRef.current.ZW} setCountrySelect={setCountrySelect} />
          {/* Cutoff point, all country components below are rendered on top of the previous country components*/}
          <Abkhazia ab={priorityRef.current.ab} AB={diffRef.current.AB} setCountrySelect={setCountrySelect} />
          <AmericanSamoa as={priorityRef.current.as} AS={diffRef.current.AS} setCountrySelect={setCountrySelect} />
          <Andorra ad={priorityRef.current.ad} AD={diffRef.current.AD} setCountrySelect={setCountrySelect} />
          <Anguilla ai={priorityRef.current.ai} AI={diffRef.current.AI} setCountrySelect={setCountrySelect} />
          <AntiguaAndBarbuda ag={priorityRef.current.ag} AG={diffRef.current.AG} setCountrySelect={setCountrySelect} />
          <Aruba aw={priorityRef.current.aw} AW={diffRef.current.AW} setCountrySelect={setCountrySelect} />
          <AscensionIsland ac={priorityRef.current.ac} AC={diffRef.current.AC} setCountrySelect={setCountrySelect} />
          <Bahamas bs={priorityRef.current.bs} BS={diffRef.current.BS} setCountrySelect={setCountrySelect} />
          <Bahrain bh={priorityRef.current.bh} BH={diffRef.current.BH} setCountrySelect={setCountrySelect} />
          <Barbados bb={priorityRef.current.bb} BB={diffRef.current.BB} setCountrySelect={setCountrySelect} />
          <Belize bz={priorityRef.current.bz} BZ={diffRef.current.BZ} setCountrySelect={setCountrySelect} />
          <Bermuda bm={priorityRef.current.bm} BM={diffRef.current.BM} setCountrySelect={setCountrySelect} />
          <Bonaire xb={priorityRef.current.xb} XB={diffRef.current.XB} setCountrySelect={setCountrySelect} />
          <BritishIndianOceanTerritory io={priorityRef.current.io} IO={diffRef.current.IO} setCountrySelect={setCountrySelect} />
          <BritishVirginIslands vg={priorityRef.current.vg} VG={diffRef.current.VG} setCountrySelect={setCountrySelect} />
          <Brunei bn={priorityRef.current.bn} BN={diffRef.current.BN} setCountrySelect={setCountrySelect} />
          <Burundi bi={priorityRef.current.bi} BI={diffRef.current.BI} setCountrySelect={setCountrySelect} />
          <CapeVerde cv={priorityRef.current.cv} CV={diffRef.current.CV} setCountrySelect={setCountrySelect} />
          <CaymanIslands ky={priorityRef.current.ky} KY={diffRef.current.KY} setCountrySelect={setCountrySelect} />
          <Comoros km={priorityRef.current.km} KM={diffRef.current.KM} setCountrySelect={setCountrySelect} />
          <CookIslands ck={priorityRef.current.ck} CK={diffRef.current.CK} setCountrySelect={setCountrySelect} />
          <Curacao cw={priorityRef.current.cw} CW={diffRef.current.CW} setCountrySelect={setCountrySelect} />
          <Djibouti dj={priorityRef.current.dj} DJ={diffRef.current.DJ} setCountrySelect={setCountrySelect} />
          <Cyprus cy={priorityRef.current.cy} CY={diffRef.current.CY} setCountrySelect={setCountrySelect} />
          <Dominica dm={priorityRef.current.dm} DM={diffRef.current.DM} setCountrySelect={setCountrySelect} />
          <EastTimor tl={priorityRef.current.tl} TL={diffRef.current.TL} setCountrySelect={setCountrySelect} />
          <ElSalvador sv={priorityRef.current.sv} SV={diffRef.current.SV} setCountrySelect={setCountrySelect} />
          <EquatorialGuinea gq={priorityRef.current.gq} GQ={diffRef.current.GQ} setCountrySelect={setCountrySelect} />
          <Eswatini sz={priorityRef.current.sz} SZ={diffRef.current.SZ} setCountrySelect={setCountrySelect} />
          <FalklandIslands fk={priorityRef.current.fk} FK={diffRef.current.FK} setCountrySelect={setCountrySelect} />
          <FaroeIslands fo={priorityRef.current.fo} FO={diffRef.current.FO} setCountrySelect={setCountrySelect} />
          <Fiji fj={priorityRef.current.fj} FJ={diffRef.current.FJ} setCountrySelect={setCountrySelect} />
          <FrenchPolynesia pf={priorityRef.current.pf} PF={diffRef.current.PF} setCountrySelect={setCountrySelect} />
          <Gambia gm={priorityRef.current.gm} GM={diffRef.current.GM} setCountrySelect={setCountrySelect} />
          <Gibraltar gi={priorityRef.current.gi} GI={diffRef.current.GI} setCountrySelect={setCountrySelect} />
          <Grenada gd={priorityRef.current.gd} GD={diffRef.current.GD} setCountrySelect={setCountrySelect} />
          <Guadeloupe gp={priorityRef.current.gp} GP={diffRef.current.GP} setCountrySelect={setCountrySelect} />
          <Guam gu={priorityRef.current.gu} GU={diffRef.current.GU} setCountrySelect={setCountrySelect} />
          <HongKong hk={priorityRef.current.hk} HK={diffRef.current.HK} setCountrySelect={setCountrySelect} />
          <Jamaica jm={priorityRef.current.jm} JM={diffRef.current.JM} setCountrySelect={setCountrySelect} />
          <JanMayen xm={priorityRef.current.xm} XM={diffRef.current.XM} setCountrySelect={setCountrySelect} />
          <Jeju jj={priorityRef.current.jj} JJ={diffRef.current.JJ} setCountrySelect={setCountrySelect} />
          <Kiribati ki={priorityRef.current.ki} KI={diffRef.current.KI} setCountrySelect={setCountrySelect} />
          <Kosovo xk={priorityRef.current.xk} XK={diffRef.current.XK} setCountrySelect={setCountrySelect} />
          <Kurdistan kx={priorityRef.current.kx} KX={diffRef.current.KX} setCountrySelect={setCountrySelect} />
          <Kuwait kw={priorityRef.current.kw} KW={diffRef.current.KW} setCountrySelect={setCountrySelect} />
          <Lebanon lb={priorityRef.current.lb} LB={diffRef.current.LB} setCountrySelect={setCountrySelect} />
          <Lesotho ls={priorityRef.current.ls} LS={diffRef.current.LS} setCountrySelect={setCountrySelect} />
          <Liechtenstein li={priorityRef.current.li} LI={diffRef.current.LI} setCountrySelect={setCountrySelect} />
          <Luxembourg lu={priorityRef.current.lu} LU={diffRef.current.LU} setCountrySelect={setCountrySelect} />
          <Macao mo={priorityRef.current.mo} MO={diffRef.current.MO} setCountrySelect={setCountrySelect} />
          <Maldives mv={priorityRef.current.mv} MV={diffRef.current.MV} setCountrySelect={setCountrySelect} />
          <Malta mt={priorityRef.current.mt} MT={diffRef.current.MT} setCountrySelect={setCountrySelect} />
          <MarshallIslands mh={priorityRef.current.mh} MH={diffRef.current.MH} setCountrySelect={setCountrySelect} />
          <Martinique mq={priorityRef.current.mq} MQ={diffRef.current.MQ} setCountrySelect={setCountrySelect} />
          <Mauritius mu={priorityRef.current.mu} MU={diffRef.current.MU} setCountrySelect={setCountrySelect} />
          <Mayotte yt={priorityRef.current.yt} YT={diffRef.current.YT} setCountrySelect={setCountrySelect} />
          <Micronesia fm={priorityRef.current.fm} FM={diffRef.current.FM} setCountrySelect={setCountrySelect} />
          <Monaco mc={priorityRef.current.mc} MC={diffRef.current.MC} setCountrySelect={setCountrySelect} />
          <Montenegro me={priorityRef.current.me} ME={diffRef.current.ME} setCountrySelect={setCountrySelect} />
          <Montserrat ms={priorityRef.current.ms} MS={diffRef.current.MS} setCountrySelect={setCountrySelect} />
          <Nauru nr={priorityRef.current.nr} NR={diffRef.current.NR} setCountrySelect={setCountrySelect} />
          <NewCaledonia nc={priorityRef.current.nc} NC={diffRef.current.NC} setCountrySelect={setCountrySelect} />
          <Niue nu={priorityRef.current.nu} NU={diffRef.current.NU} setCountrySelect={setCountrySelect} />
          <NorthernCyprus rc={priorityRef.current.rc} RC={diffRef.current.RC} setCountrySelect={setCountrySelect} />
          <NorthernMarianaIslands mp={priorityRef.current.mp} MP={diffRef.current.MP} setCountrySelect={setCountrySelect} />
          <Palau pw={priorityRef.current.pw} PW={diffRef.current.PW} setCountrySelect={setCountrySelect} />
          <Palestine ps={priorityRef.current.ps} PS={diffRef.current.PS} setCountrySelect={setCountrySelect} />
          <PitcairnIslands pn={priorityRef.current.pn} PN={diffRef.current.PN} setCountrySelect={setCountrySelect} />
          <Qatar qa={priorityRef.current.qa} QA={diffRef.current.QA} setCountrySelect={setCountrySelect} />
          <Reunion re={priorityRef.current.re} RE={diffRef.current.RE} setCountrySelect={setCountrySelect} />
          <Rwanda rw={priorityRef.current.rw} RW={diffRef.current.RW} setCountrySelect={setCountrySelect} />
          <Saba xs={priorityRef.current.xs} XS={diffRef.current.XS} setCountrySelect={setCountrySelect} />
          <SaintBarthelemy bl={priorityRef.current.bl} BL={diffRef.current.BL} setCountrySelect={setCountrySelect} />
          <SaintHelena sh={priorityRef.current.sh} SH={diffRef.current.SH} setCountrySelect={setCountrySelect} />
          <SaintKittsAndNevis kn={priorityRef.current.kn} KN={diffRef.current.KN} setCountrySelect={setCountrySelect} />
          <SaintLucia lc={priorityRef.current.lc} LC={diffRef.current.LC} setCountrySelect={setCountrySelect} />
          <SaintMartin mf={priorityRef.current.mf} MF={diffRef.current.MF} setCountrySelect={setCountrySelect} />
          <SaintPierreAndMiquelon pm={priorityRef.current.pm} PM={diffRef.current.PM} setCountrySelect={setCountrySelect} />
          <SaintVincentAndTheGrenadines vc={priorityRef.current.vc} VC={diffRef.current.VC} setCountrySelect={setCountrySelect} />
          <Samoa ws={priorityRef.current.ws} WS={diffRef.current.WS} setCountrySelect={setCountrySelect} />
          <SanMarino sm={priorityRef.current.sm} SM={diffRef.current.SM} setCountrySelect={setCountrySelect} />
          <SaoTomeAndPrincipe st={priorityRef.current.st} ST={diffRef.current.ST} setCountrySelect={setCountrySelect} />
          <Seychelles sc={priorityRef.current.sc} SC={diffRef.current.SC} setCountrySelect={setCountrySelect} />
          <Singapore sg={priorityRef.current.sg} SG={diffRef.current.SG} setCountrySelect={setCountrySelect} />
          <SintEustatius xe={priorityRef.current.xe} XE={diffRef.current.XE} setCountrySelect={setCountrySelect} />
          <SintMaarten sx={priorityRef.current.sx} SX={diffRef.current.SX} setCountrySelect={setCountrySelect} />
          <Somaliland xx={priorityRef.current.xx} XX={diffRef.current.XX} setCountrySelect={setCountrySelect} />
          <SouthOssetia xo={priorityRef.current.xo} XO={diffRef.current.XO} setCountrySelect={setCountrySelect} />
          <Tokelau tk={priorityRef.current.tk} TK={diffRef.current.TK} setCountrySelect={setCountrySelect} />
          <Tonga to={priorityRef.current.to} TO={diffRef.current.TO} setCountrySelect={setCountrySelect} />
          <Transnistria xt={priorityRef.current.xt} XT={diffRef.current.XT} setCountrySelect={setCountrySelect} />
          <TrinidadAndTobago tt={priorityRef.current.tt} TT={diffRef.current.TT} setCountrySelect={setCountrySelect} />
          <TristanDaCunha tx={priorityRef.current.tx} TX={diffRef.current.TX} setCountrySelect={setCountrySelect} />
          <TurksAndCaicos tc={priorityRef.current.tc} TC={diffRef.current.TC} setCountrySelect={setCountrySelect} />
          <Tuvalu tv={priorityRef.current.tv} TV={diffRef.current.TV} setCountrySelect={setCountrySelect} />
          <UnitedStatesVirginIslands vi={priorityRef.current.vi} VI={diffRef.current.VI} setCountrySelect={setCountrySelect} />
          <Vanuatu vu={priorityRef.current.vu} VU={diffRef.current.VU} setCountrySelect={setCountrySelect} />
          <VaticanCity va={priorityRef.current.va} VA={diffRef.current.VA} setCountrySelect={setCountrySelect} />
          <WallisAndFutuna wf={priorityRef.current.wf} WF={diffRef.current.WF} setCountrySelect={setCountrySelect} />
        </g>
      </svg>
    </div>
  )
}

export default MapSVG