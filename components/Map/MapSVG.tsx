import { useState, useEffect, useContext, useRef } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import { ProToggleContext } from '../../logic/context/ProToggleContext'
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

  const dimensions = useContext(DimensionsContext)
  const proToggle = useContext(ProToggleContext)

  const panzoomRef = useRef(null);

  useEffect(() => {
    if(panzoomRef.current) {
      let panzoom = null

      if(dimensions.width > 800) {
        panzoom = Panzoom(panzoomRef.current, {
          smoothScroll: false,
          maxZoom: (proToggle.proToggle) ? 50 : 8,
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
  }, [dimensions.width, proToggle.proToggle, panzoomReset])

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
    <Afghanistan />
    <Albania />
    <Algeria />
    <Angola />
    <Argentina />
    <Armenia />
    <Australia />
    <Austria />
    <Azerbaijan />
    <Bangladesh />
    <Belarus />
    <Belgium />
    <Benin />
    <Bhutan />
    <Bolivia />
    <BosniaAndHerzegovina />
    <Botswana />
    <Brazil />
    <Bulgaria />
    <BurkinaFaso />
    <Cambodia />
    <Cameroon />
    <Canada />
    <CentralAfricanRepublic />
    <Chad />
    <Chile />
    <China />
    <Colombia />
    <CostaRica />
    <Croatia />
    <Cuba />
    <CzechRepublic />
    <DemocraticRepublicOfTheCongo />
    <Denmark />
    <DominicanRepublic />
    <Ecuador />
    <Egypt />
    <Eritrea />
    <Estonia />
    <Ethiopia />
    <Finland />
    <France />
    <FrenchGuiana />
    <Gabon />
    <Georgia />
    <Germany />
    <Ghana />
    <Greece />
    <Greenland />
    <Guatemala />
    <Guinea />
    <GuineaBissau />
    <Guyana />
    <Haiti />
    <Honduras />
    <Hungary />
    <Iceland />
    <India />
    <Indonesia />
    <Iran />
    <Iraq />
    <Ireland />
    <Israel />
    <Italy />
    <IvoryCoast />
    <Japan />
    <Jordan />
    <Kazakhstan />
    <Kenya />
    <Kyrgyzstan />
    <Laos />
    <Latvia />
    <Liberia />
    <Libya />
    <Lithuania />
    <Madagascar />
    <Malawi />
    <Malaysia />
    <Mali />
    <Mauritania />
    <Mexico />
    <Moldova />
    <Mongolia />
    <Morocco />
    <Mozambique />
    <Myanmar />
    <Namibia />
    <Nepal />
    <Netherlands />
    <NewZealand />
    <Nicaragua />
    <Niger />
    <Nigeria />
    <NorthKorea />
    <NorthMacedonia />
    <Norway />
    <Oman />
    <Pakistan />
    <Panama />
    <PapuaNewGuinea />
    <Paraguay />
    <Peru />
    <Philippines />
    <Poland />
    <Portugal />
    <RepublicOfTheCongo />
    <Romania />
    <Russia />
    <SaudiArabia />
    <Senegal />
    <Serbia />
    <SierraLeone />
    <Slovakia />
    <Slovenia />
    <SolomonIslands />
    <Somalia />
    <SouthAfrica />
    <SouthKorea />
    <SouthSudan />
    <Spain />
    <SriLanka />
    <Sudan />
    <Suriname />
    <Svalbard />
    <Sweden />
    <Switzerland />
    <Syria />
    <Taiwan />
    <Tajikistan />
    <Tanzania />
    <Thailand />
    <Togo />
    <Tunisia />
    <Turkey />
    <Turkmenistan />
    <Uganda />
    <Ukraine />
    <UnitedArabEmirates />
    <UnitedKingdom />
    <UnitedStates />
    <Uruguay />
    <Uzbekistan />
    <Venezuela />
    <Vietnam />
    <WesternSahara />
    <Yemen />
    <Zambia />
    <Zimbabwe />
    {/* Cutoff point, all country components below are rendered on top of the previous country components*/}
    <Abkhazia />
    <AmericanSamoa />
    <Andorra />
    <Anguilla />
    <AntiguaAndBarbuda />
    <Aruba />
    <AscensionIsland />
    <Bahamas />
    <Bahrain />
    <Barbados />
    <Belize />
    <Bermuda />
    <Bonaire />
    <BritishIndianOceanTerritory />
    <BritishVirginIslands />
    <Brunei />
    <Burundi />
    <CapeVerde />
    <CaymanIslands />
    <Comoros />
    <CookIslands />
    <Curacao />
    <Djibouti />
    <Cyprus />
    <Dominica />
    <EastTimor />
    <ElSalvador />
    <EquatorialGuinea />
    <Eswatini />
    <FalklandIslands />
    <FaroeIslands />
    <Fiji />
    <FrenchPolynesia />
    <Gambia />
    <Gibraltar />
    <Grenada />
    <Guadeloupe />
    <Guam />
    <HongKong />
    <Jamaica />
    <JanMayen />
    <Kiribati />
    <Kosovo />
    <Kurdistan />
    <Kuwait />
    <Lebanon />
    <Lesotho />
    <Liechtenstein />
    <Luxembourg />
    <Macao />
    <Maldives />
    <Malta />
    <MarshallIslands />
    <Martinique />
    <Mauritius />
    <Mayotte />
    <Micronesia />
    <Monaco />
    <Montenegro />
    <Montserrat />
    <Nauru />
    <NewCaledonia />
    <Niue />
    <NorthernCyprus />
    <NorthernMarianaIslands />
    <Palau />
    <Palestine />
    <PitcairnIslands />
    <Qatar />
    <Reunion />
    <Rwanda />
    <Saba />
    <SaintBarthelemy />
    <SaintHelena />
    <SaintKittsAndNevis />
    <SaintLucia />
    <SaintMartin />
    <SaintPierreAndMiquelon />
    <SaintVincentAndTheGrenadines />
    <Samoa />
    <SanMarino />
    <SaoTomeAndPrincipe />
    <Seychelles />
    <Singapore />
    <SintEustatius />
    <SintMaarten />
    <Somaliland />
    <SouthOssetia />
    <Tokelau />
    <Tonga />
    <Transnistria />
    <TrinidadAndTobago />
    <TristanDaCunha />
    <TurksAndCaicos />
    <Tuvalu />
    <UnitedStatesVirginIslands />
    <Vanuatu />
    <VaticanCity />
    <WallisAndFutuna />
    </g>
    </svg>
    </div>
  )
}

export default MapSVG