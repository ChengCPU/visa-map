import { useEffect, useContext, useRef } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
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
  panzoomReset:boolean;
}

const MapSVG:React.FC<Props> = ({ setHover, panzoomReset }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  const color  = useContext(ColorContext)
  const diff = useContext(DiffContext)
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
          <Afghanistan af={color.af} AF={diff.AF} setCountrySelect={setCountrySelect} />
          <Albania al={color.al} AL={diff.AL} setCountrySelect={setCountrySelect} />
          <Algeria dz={color.dz} DZ={diff.DZ} setCountrySelect={setCountrySelect} />
          <Angola ao={color.ao} AO={diff.AO} setCountrySelect={setCountrySelect} />
          <Argentina ar={color.ar} AR={diff.AR} setCountrySelect={setCountrySelect} />
          <Armenia am={color.am} AM={diff.AM} setCountrySelect={setCountrySelect} />
          <Australia au={color.au} AU={diff.AU} setCountrySelect={setCountrySelect} />
          <Austria at={color.at} AT={diff.AT} setCountrySelect={setCountrySelect} />
          <Azerbaijan az={color.az} AZ={diff.AZ} setCountrySelect={setCountrySelect} />
          <Bangladesh bd={color.bd} BD={diff.BD} setCountrySelect={setCountrySelect} />
          <Belarus by={color.by} BY={diff.BY} setCountrySelect={setCountrySelect} />
          <Belgium be={color.be} BE={diff.BE} setCountrySelect={setCountrySelect} />
          <Benin bj={color.bj} BJ={diff.BJ} setCountrySelect={setCountrySelect} />
          <Bhutan bt={color.bt} BT={diff.BT} setCountrySelect={setCountrySelect} />
          <Bolivia bo={color.bo} BO={diff.BO} setCountrySelect={setCountrySelect} />
          <BosniaAndHerzegovina ba={color.ba} BA={diff.BA} setCountrySelect={setCountrySelect} />
          <Botswana bw={color.bw} BW={diff.BW} setCountrySelect={setCountrySelect} />
          <Brazil br={color.br} BR={diff.BR} setCountrySelect={setCountrySelect} />
          <Bulgaria bg={color.bg} BG={diff.BG} setCountrySelect={setCountrySelect} />
          <BurkinaFaso bf={color.bf} BF={diff.BF} setCountrySelect={setCountrySelect} />
          <Cambodia kh={color.kh} KH={diff.KH} setCountrySelect={setCountrySelect} />
          <Cameroon cm={color.cm} CM={diff.CM} setCountrySelect={setCountrySelect} />
          <Canada ca={color.ca} CA={diff.CA} setCountrySelect={setCountrySelect} />
          <CentralAfricanRepublic cf={color.cf} CF={diff.CF} setCountrySelect={setCountrySelect} />
          <Chad td={color.td} TD={diff.TD} setCountrySelect={setCountrySelect} />
          <Chile cl={color.cl} CL={diff.CL} setCountrySelect={setCountrySelect} />
          <China cn={color.cn} CN={diff.CN} setCountrySelect={setCountrySelect} />
          <Colombia co={color.co} CO={diff.CO} setCountrySelect={setCountrySelect} />
          <CostaRica cr={color.cr} CR={diff.CR} setCountrySelect={setCountrySelect} />
          <Croatia hr={color.hr} HR={diff.HR} setCountrySelect={setCountrySelect} />
          <Cuba cu={color.cu} CU={diff.CU} setCountrySelect={setCountrySelect} />
          <CzechRepublic cz={color.cz} CZ={diff.CZ} setCountrySelect={setCountrySelect} />
          <DemocraticRepublicOfTheCongo cd={color.cd} CD={diff.CD} setCountrySelect={setCountrySelect} />
          <Denmark dk={color.dk} DK={diff.DK} setCountrySelect={setCountrySelect} />
          <DominicanRepublic dx={color.do} DO={diff.DO} setCountrySelect={setCountrySelect} />
          <Ecuador ec={color.ec} EC={diff.EC} setCountrySelect={setCountrySelect} />
          <Egypt eg={color.eg} EG={diff.EG} setCountrySelect={setCountrySelect} />
          <Eritrea er={color.er} ER={diff.ER} setCountrySelect={setCountrySelect} />
          <Estonia ee={color.ee} EE={diff.EE} setCountrySelect={setCountrySelect} />
          <Ethiopia et={color.et} ET={diff.ET} setCountrySelect={setCountrySelect} />
          <Finland fi={color.fi} FI={diff.FI} setCountrySelect={setCountrySelect} />
          <France fr={color.fr} FR={diff.FR} setCountrySelect={setCountrySelect} />
          <FrenchGuiana gf={color.gf} GF={diff.GF} setCountrySelect={setCountrySelect} hover={'frenchGuiana'} />
          <Gabon ga={color.ga} GA={diff.GA} setCountrySelect={setCountrySelect} />
          <Georgia ge={color.ge} GE={diff.GE} setCountrySelect={setCountrySelect} />
          <Germany de={color.de} DE={diff.DE} setCountrySelect={setCountrySelect} />
          <Ghana gh={color.gh} GH={diff.GH} setCountrySelect={setCountrySelect} />
          <Greece gr={color.gr} GR={diff.GR} setCountrySelect={setCountrySelect} />
          <Greenland gl={color.gl} GL={diff.GL} setCountrySelect={setCountrySelect} hover={'greenland'} />
          <Guatemala gt={color.gt} GT={diff.GT} setCountrySelect={setCountrySelect} />
          <Guinea gn={color.gn} GN={diff.GN} setCountrySelect={setCountrySelect} />
          <GuineaBissau gw={color.gw} GW={diff.GW} setCountrySelect={setCountrySelect} />
          <Guyana gy={color.gy} GY={diff.GY} setCountrySelect={setCountrySelect} />
          <Haiti ht={color.ht} HT={diff.HT} setCountrySelect={setCountrySelect} />
          <Honduras hn={color.hn} HN={diff.HN} setCountrySelect={setCountrySelect} />
          <Hungary hu={color.hu} HU={diff.HU} setCountrySelect={setCountrySelect} />
          <Iceland is={color.is} IS={diff.IS} setCountrySelect={setCountrySelect} />
          <India ix={color.in} IN={diff.IN} setCountrySelect={setCountrySelect} />
          <Indonesia id={color.id} ID={diff.ID} setCountrySelect={setCountrySelect} />
          <Iran ir={color.ir} IR={diff.IR} setCountrySelect={setCountrySelect} />
          <Iraq iq={color.iq} IQ={diff.IQ} setCountrySelect={setCountrySelect} />
          <Ireland ie={color.ie} IE={diff.IE} setCountrySelect={setCountrySelect} />
          <Israel il={color.il} IL={diff.IL} setCountrySelect={setCountrySelect} />
          <Italy it={color.it} IT={diff.IT} setCountrySelect={setCountrySelect} />
          <IvoryCoast ci={color.ci} CI={diff.CI} setCountrySelect={setCountrySelect} />
          <Japan jp={color.jp} JP={diff.JP} setCountrySelect={setCountrySelect} />
          <Jordan jo={color.jo} JO={diff.JO} setCountrySelect={setCountrySelect} />
          <Kazakhstan kz={color.kz} KZ={diff.KZ} setCountrySelect={setCountrySelect} />
          <Kenya ke={color.ke} KE={diff.KE} setCountrySelect={setCountrySelect} />
          <Kyrgyzstan kg={color.kg} KG={diff.KG} setCountrySelect={setCountrySelect} />
          <Laos la={color.la} LA={diff.LA} setCountrySelect={setCountrySelect} />
          <Latvia lv={color.lv} LV={diff.LV} setCountrySelect={setCountrySelect} />
          <Liberia lr={color.lr} LR={diff.LR} setCountrySelect={setCountrySelect} />
          <Libya ly={color.ly} LY={diff.LY} setCountrySelect={setCountrySelect} />
          <Lithuania lt={color.lt} LT={diff.LT} setCountrySelect={setCountrySelect} />
          <Madagascar mg={color.mg} MG={diff.MG} setCountrySelect={setCountrySelect} />
          <Malawi mw={color.mw} MW={diff.MW} setCountrySelect={setCountrySelect} />
          <Malaysia my={color.my} MY={diff.MY} setCountrySelect={setCountrySelect} />
          <Mali ml={color.ml} ML={diff.ML} setCountrySelect={setCountrySelect} />
          <Mauritania mr={color.mr} MR={diff.MR} setCountrySelect={setCountrySelect} />
          <Mexico mx={color.mx} MX={diff.MX} setCountrySelect={setCountrySelect} />
          <Moldova md={color.md} MD={diff.MD} setCountrySelect={setCountrySelect} />
          <Mongolia mn={color.mn} MN={diff.MN} setCountrySelect={setCountrySelect} />
          <Morocco ma={color.ma} MA={diff.MA} setCountrySelect={setCountrySelect} />
          <Mozambique mz={color.mz} MZ={diff.MZ} setCountrySelect={setCountrySelect} />
          <Myanmar mm={color.mm} MM={diff.MM} setCountrySelect={setCountrySelect} />
          <Namibia na={color.na} NA={diff.NA} setCountrySelect={setCountrySelect} />
          <Nepal np={color.np} NP={diff.NP} setCountrySelect={setCountrySelect} />
          <Netherlands nl={color.nl} NL={diff.NL} setCountrySelect={setCountrySelect} />
          <NewZealand nz={color.nz} NZ={diff.NZ} setCountrySelect={setCountrySelect} />
          <Nicaragua ni={color.ni} NI={diff.NI} setCountrySelect={setCountrySelect} />
          <Niger ne={color.ne} NE={diff.NE} setCountrySelect={setCountrySelect} />
          <Nigeria ng={color.ng} NG={diff.NG} setCountrySelect={setCountrySelect} />
          <NorthKorea kp={color.kp} KP={diff.KP} setCountrySelect={setCountrySelect} />
          <NorthMacedonia mk={color.mk} MK={diff.MK} setCountrySelect={setCountrySelect} />
          <Norway no={color.no} NO={diff.NO} setCountrySelect={setCountrySelect} />
          <Oman om={color.om} OM={diff.OM} setCountrySelect={setCountrySelect} />
          <Pakistan pk={color.pk} PK={diff.PK} setCountrySelect={setCountrySelect} />
          <Panama pa={color.pa} PA={diff.PA} setCountrySelect={setCountrySelect} />
          <PapuaNewGuinea pg={color.pg} PG={diff.PG} setCountrySelect={setCountrySelect} />
          <Paraguay py={color.py} PY={diff.PY} setCountrySelect={setCountrySelect} />
          <Peru pe={color.pe} PE={diff.PE} setCountrySelect={setCountrySelect} />
          <Philippines ph={color.ph} PH={diff.PH} setCountrySelect={setCountrySelect} />
          <Poland pl={color.pl} PL={diff.PL} setCountrySelect={setCountrySelect} />
          <Portugal pt={color.pt} PT={diff.PT} setCountrySelect={setCountrySelect} />
          <RepublicOfTheCongo cg={color.cg} CG={diff.CG} setCountrySelect={setCountrySelect} />
          <Romania ro={color.ro} RO={diff.RO} setCountrySelect={setCountrySelect} />
          <Russia ru={color.ru} RU={diff.RU} setCountrySelect={setCountrySelect} />
          <SaudiArabia sa={color.sa} SA={diff.SA} setCountrySelect={setCountrySelect} />
          <Senegal sn={color.sn} SN={diff.SN} setCountrySelect={setCountrySelect} />
          <Serbia rs={color.rs} RS={diff.RS} setCountrySelect={setCountrySelect} />
          <SierraLeone sl={color.sl} SL={diff.SL} setCountrySelect={setCountrySelect} />
          <Slovakia sk={color.sk} SK={diff.SK} setCountrySelect={setCountrySelect} />
          <Slovenia si={color.si} SI={diff.SI} setCountrySelect={setCountrySelect} />
          <SolomonIslands sb={color.sb} SB={diff.SB} setCountrySelect={setCountrySelect} />
          <Somalia so={color.so} SO={diff.SO} setCountrySelect={setCountrySelect} />
          <SouthAfrica za={color.za} ZA={diff.ZA} setCountrySelect={setCountrySelect} />
          <SouthKorea kr={color.kr} KR={diff.KR} setCountrySelect={setCountrySelect} />
          <SouthSudan ss={color.ss} SS={diff.SS} setCountrySelect={setCountrySelect} />
          <Spain es={color.es} ES={diff.ES} setCountrySelect={setCountrySelect} />
          <SriLanka lk={color.lk} LK={diff.LK} setCountrySelect={setCountrySelect} />
          <Sudan sd={color.sd} SD={diff.SD} setCountrySelect={setCountrySelect} />
          <Suriname sr={color.sr} SR={diff.SR} setCountrySelect={setCountrySelect} />
          <Svalbard xv={color.xv} XV={diff.XV} setCountrySelect={setCountrySelect} />
          <Sweden se={color.se} SE={diff.SE} setCountrySelect={setCountrySelect} />
          <Switzerland ch={color.ch} CH={diff.CH} setCountrySelect={setCountrySelect} />
          <Syria sy={color.sy} SY={diff.SY} setCountrySelect={setCountrySelect} />
          <Taiwan tw={color.tw} TW={diff.tw} setCountrySelect={setCountrySelect} />
          <Tajikistan tj={color.tj} TJ={diff.TJ} setCountrySelect={setCountrySelect} />
          <Tanzania tz={color.tz} TZ={diff.TZ} setCountrySelect={setCountrySelect} />
          <Thailand th={color.th} TH={diff.TH} setCountrySelect={setCountrySelect} />
          <Togo tg={color.tg} TG={diff.TG} setCountrySelect={setCountrySelect} />
          <Tunisia tn={color.tn} TN={diff.TN} setCountrySelect={setCountrySelect} />
          <Turkey tr={color.tr} TR={diff.TR} setCountrySelect={setCountrySelect} />
          <Turkmenistan tm={color.tm} TM={diff.TM} setCountrySelect={setCountrySelect} />
          <Uganda ug={color.ug} UG={diff.UG} setCountrySelect={setCountrySelect} />
          <Ukraine ua={color.ua} UA={diff.UA} setCountrySelect={setCountrySelect} />
          <UnitedArabEmirates ae={color.ae} AE={diff.AE} setCountrySelect={setCountrySelect} />
          <UnitedKingdom gb={color.gb} GB={diff.GB} setCountrySelect={setCountrySelect} />
          <UnitedStates us={color.us} US={diff.US} setCountrySelect={setCountrySelect} />
          <Uruguay uy={color.uy} UY={diff.UY} setCountrySelect={setCountrySelect} />
          <Uzbekistan uz={color.uz} UZ={diff.UZ} setCountrySelect={setCountrySelect} />
          <Venezuela ve={color.ve} VE={diff.VE} setCountrySelect={setCountrySelect} />
          <Vietnam vn={color.vn} VN={diff.VN} setCountrySelect={setCountrySelect} />
          <WesternSahara eh={color.eh} EH={diff.EH} setCountrySelect={setCountrySelect} />
          <Yemen ye={color.ye} YE={diff.YE} setCountrySelect={setCountrySelect} />
          <Zambia zm={color.zm} ZM={diff.ZM} setCountrySelect={setCountrySelect} />
          <Zimbabwe zw={color.zw} ZW={diff.ZW} setCountrySelect={setCountrySelect} />
          {/* Cutoff point, all country components below are rendered on top of the previous country components*/}
          <Abkhazia ab={color.ab} AB={diff.AB} setCountrySelect={setCountrySelect} />
          <AmericanSamoa as={color.as} AS={diff.AS} setCountrySelect={setCountrySelect} />
          <Andorra ad={color.ad} AD={diff.AD} setCountrySelect={setCountrySelect} />
          <Anguilla ai={color.ai} AI={diff.AI} setCountrySelect={setCountrySelect} />
          <AntiguaAndBarbuda ag={color.ag} AG={diff.AG} setCountrySelect={setCountrySelect} />
          <Aruba aw={color.aw} AW={diff.AW} setCountrySelect={setCountrySelect} />
          <AscensionIsland ac={color.ac} AC={diff.AC} setCountrySelect={setCountrySelect} />
          <Bahamas bs={color.bs} BS={diff.BS} setCountrySelect={setCountrySelect} />
          <Bahrain bh={color.bh} BH={diff.BH} setCountrySelect={setCountrySelect} />
          <Barbados bb={color.bb} BB={diff.BB} setCountrySelect={setCountrySelect} />
          <Belize bz={color.bz} BZ={diff.BZ} setCountrySelect={setCountrySelect} />
          <Bermuda bm={color.bm} BM={diff.BM} setCountrySelect={setCountrySelect} />
          <Bonaire xb={color.xb} XB={diff.XB} setCountrySelect={setCountrySelect} />
          <BritishIndianOceanTerritory io={color.io} IO={diff.IO} setCountrySelect={setCountrySelect} />
          <BritishVirginIslands vg={color.vg} VG={diff.VG} setCountrySelect={setCountrySelect} />
          <Brunei bn={color.bn} BN={diff.BN} setCountrySelect={setCountrySelect} />
          <Burundi bi={color.bi} BI={diff.BI} setCountrySelect={setCountrySelect} />
          <CapeVerde cv={color.cv} CV={diff.CV} setCountrySelect={setCountrySelect} />
          <CaymanIslands ky={color.ky} KY={diff.KY} setCountrySelect={setCountrySelect} />
          <Comoros km={color.km} KM={diff.KM} setCountrySelect={setCountrySelect} />
          <CookIslands ck={color.ck} CK={diff.CK} setCountrySelect={setCountrySelect} />
          <Curacao cw={color.cw} CW={diff.CW} setCountrySelect={setCountrySelect} />
          <Djibouti dj={color.dj} DJ={diff.DJ} setCountrySelect={setCountrySelect} />
          <Cyprus cy={color.cy} CY={diff.CY} setCountrySelect={setCountrySelect} />
          <Dominica dm={color.dm} DM={diff.DM} setCountrySelect={setCountrySelect} />
          <EastTimor tl={color.tl} TL={diff.TL} setCountrySelect={setCountrySelect} />
          <ElSalvador sv={color.sv} SV={diff.SV} setCountrySelect={setCountrySelect} />
          <EquatorialGuinea gq={color.gq} GQ={diff.GQ} setCountrySelect={setCountrySelect} />
          <Eswatini sz={color.sz} SZ={diff.SZ} setCountrySelect={setCountrySelect} />
          <FalklandIslands fk={color.fk} FK={diff.FK} setCountrySelect={setCountrySelect} />
          <FaroeIslands fo={color.fo} FO={diff.FO} setCountrySelect={setCountrySelect} />
          <Fiji fj={color.fj} FJ={diff.FJ} setCountrySelect={setCountrySelect} />
          <FrenchPolynesia pf={color.pf} PF={diff.PF} setCountrySelect={setCountrySelect} />
          <Gambia gm={color.gm} GM={diff.GM} setCountrySelect={setCountrySelect} />
          <Gibraltar gi={color.gi} GI={diff.GI} setCountrySelect={setCountrySelect} />
          <Grenada gd={color.gd} GD={diff.GD} setCountrySelect={setCountrySelect} />
          <Guadeloupe gp={color.gp} GP={diff.GP} setCountrySelect={setCountrySelect} />
          <Guam gu={color.gu} GU={diff.GU} setCountrySelect={setCountrySelect} />
          <HongKong hk={color.hk} HK={diff.HK} setCountrySelect={setCountrySelect} />
          <Jamaica jm={color.jm} JM={diff.JM} setCountrySelect={setCountrySelect} />
          <JanMayen xm={color.xm} XM={diff.XM} setCountrySelect={setCountrySelect} />
          <Kiribati ki={color.ki} KI={diff.KI} setCountrySelect={setCountrySelect} />
          <Kosovo xk={color.xk} XK={diff.XK} setCountrySelect={setCountrySelect} />
          <Kurdistan kx={color.kx} KX={diff.KX} setCountrySelect={setCountrySelect} />
          <Kuwait kw={color.kw} KW={diff.KW} setCountrySelect={setCountrySelect} />
          <Lebanon lb={color.lb} LB={diff.LB} setCountrySelect={setCountrySelect} />
          <Lesotho ls={color.ls} LS={diff.LS} setCountrySelect={setCountrySelect} />
          <Liechtenstein li={color.li} LI={diff.LI} setCountrySelect={setCountrySelect} />
          <Luxembourg lu={color.lu} LU={diff.LU} setCountrySelect={setCountrySelect} />
          <Macao mo={color.mo} MO={diff.MO} setCountrySelect={setCountrySelect} />
          <Maldives mv={color.mv} MV={diff.MV} setCountrySelect={setCountrySelect} />
          <Malta mt={color.mt} MT={diff.MT} setCountrySelect={setCountrySelect} />
          <MarshallIslands mh={color.mh} MH={diff.MH} setCountrySelect={setCountrySelect} />
          <Martinique mq={color.mq} MQ={diff.MQ} setCountrySelect={setCountrySelect} />
          <Mauritius mu={color.mu} MU={diff.MU} setCountrySelect={setCountrySelect} />
          <Mayotte yt={color.yt} YT={diff.YT} setCountrySelect={setCountrySelect} />
          <Micronesia fm={color.fm} FM={diff.FM} setCountrySelect={setCountrySelect} />
          <Monaco mc={color.mc} MC={diff.MC} setCountrySelect={setCountrySelect} />
          <Montenegro me={color.me} ME={diff.ME} setCountrySelect={setCountrySelect} />
          <Montserrat ms={color.ms} MS={diff.MS} setCountrySelect={setCountrySelect} />
          <Nauru nr={color.nr} NR={diff.NR} setCountrySelect={setCountrySelect} />
          <NewCaledonia nc={color.nc} NC={diff.NC} setCountrySelect={setCountrySelect} />
          <Niue nu={color.nu} NU={diff.NU} setCountrySelect={setCountrySelect} />
          <NorthernCyprus rc={color.rc} RC={diff.RC} setCountrySelect={setCountrySelect} />
          <NorthernMarianaIslands mp={color.mp} MP={diff.MP} setCountrySelect={setCountrySelect} />
          <Palau pw={color.pw} PW={diff.PW} setCountrySelect={setCountrySelect} />
          <Palestine ps={color.ps} PS={diff.PS} setCountrySelect={setCountrySelect} />
          <PitcairnIslands pn={color.pn} PN={diff.PN} setCountrySelect={setCountrySelect} />
          <Qatar qa={color.qa} QA={diff.QA} setCountrySelect={setCountrySelect} />
          <Reunion re={color.re} RE={diff.RE} setCountrySelect={setCountrySelect} />
          <Rwanda rw={color.rw} RW={diff.RW} setCountrySelect={setCountrySelect} />
          <Saba xs={color.xs} XS={diff.XS} setCountrySelect={setCountrySelect} />
          <SaintBarthelemy bl={color.bl} BL={diff.BL} setCountrySelect={setCountrySelect} />
          <SaintHelena sh={color.sh} SH={diff.SH} setCountrySelect={setCountrySelect} />
          <SaintKittsAndNevis kn={color.kn} KN={diff.KN} setCountrySelect={setCountrySelect} />
          <SaintLucia lc={color.lc} LC={diff.LC} setCountrySelect={setCountrySelect} />
          <SaintMartin mf={color.mf} MF={diff.MF} setCountrySelect={setCountrySelect} />
          <SaintPierreAndMiquelon pm={color.pm} PM={diff.PM} setCountrySelect={setCountrySelect} />
          <SaintVincentAndTheGrenadines vc={color.vc} VC={diff.VC} setCountrySelect={setCountrySelect} />
          <Samoa ws={color.ws} WS={diff.WS} setCountrySelect={setCountrySelect} />
          <SanMarino sm={color.sm} SM={diff.SM} setCountrySelect={setCountrySelect} />
          <SaoTomeAndPrincipe st={color.st} ST={diff.ST} setCountrySelect={setCountrySelect} />
          <Seychelles sc={color.sc} SC={diff.SC} setCountrySelect={setCountrySelect} />
          <Singapore sg={color.sg} SG={diff.SG} setCountrySelect={setCountrySelect} />
          <SintEustatius xe={color.xe} XE={diff.XE} setCountrySelect={setCountrySelect} />
          <SintMaarten sx={color.sx} SX={diff.SX} setCountrySelect={setCountrySelect} />
          <Somaliland xx={color.xx} XX={diff.XX} setCountrySelect={setCountrySelect} />
          <SouthOssetia xo={color.xo} XO={diff.XO} setCountrySelect={setCountrySelect} />
          <Tokelau tk={color.tk} TK={diff.TK} setCountrySelect={setCountrySelect} />
          <Tonga to={color.to} TO={diff.TO} setCountrySelect={setCountrySelect} />
          <Transnistria xt={color.xt} XT={diff.XT} setCountrySelect={setCountrySelect} />
          <TrinidadAndTobago tt={color.tt} TT={diff.TT} setCountrySelect={setCountrySelect} />
          <TristanDaCunha tx={color.tx} TX={diff.TX} setCountrySelect={setCountrySelect} />
          <TurksAndCaicos tc={color.tc} TC={diff.TC} setCountrySelect={setCountrySelect} />
          <Tuvalu tv={color.tv} TV={diff.TV} setCountrySelect={setCountrySelect} />
          <UnitedStatesVirginIslands vi={color.vi} VI={diff.VI} setCountrySelect={setCountrySelect} />
          <Vanuatu vu={color.vu} VU={diff.VU} setCountrySelect={setCountrySelect} />
          <VaticanCity va={color.va} VA={diff.VA} setCountrySelect={setCountrySelect} />
          <WallisAndFutuna wf={color.wf} WF={diff.WF} setCountrySelect={setCountrySelect} />
        </g>
      </svg>
    </div>
  )
}

export default MapSVG