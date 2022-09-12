import { memo } from 'react'
import styles from '../styles/MapSVG.module.css'
import Afghanistan from './countries/Afghanistan'
import Albania from './countries/Albania'
import Algeria from './countries/Algeria'
import AmericanSamoa from './countries/AmericanSamoa'
import Andorra from './countries/Andorra'
import Angola from './countries/Angola'
import Anguilla from './countries/Anguilla'
import AntiguaAndBarbuda from './countries/AntiguaAndBarbuda'
import Argentina from './countries/Argentina'
import Armenia from './countries/Armenia'
import Aruba from './countries/Aruba'
import Australia from './countries/Australia'
import Austria from './countries/Austria'
import Azerbaijan from './countries/Azerbaijan'
import Bahamas from './countries/Bahamas'
import Bahrain from './countries/Bahrain'
import Bangladesh from './countries/Bangladesh'
import Barbados from './countries/Barbados'
import Belarus from './countries/Belarus'
import Belgium from './countries/Belgium'
import Belize from './countries/Belize'
import Benin from './countries/Benin'
import Bermuda from './countries/Bermuda'
import Bhutan from './countries/Bhutan'
import Bolivia from './countries/Bolivia'
import BosniaAndHerzegovina from './countries/BosniaAndHerzegovina'
import Botswana from './countries/Botswana'
import BouvetIsland from './countries/BouvetIsland'
import Brazil from './countries/Brazil'
import BritishIndianOceanTerritory from './countries/BritishIndianOceanTerritory'
import BritishVirginIslands from './countries/BritishVirginIslands'
import Brunei from './countries/Brunei'
import Bulgaria from './countries/Bulgaria'
import BurkinaFaso from './countries/BurkinaFaso'
import Burundi from './countries/Burundi'
import CapeVerde from './countries/CapeVerde'
import Cambodia from './countries/Cambodia'
import Cameroon from './countries/Cameroon'
import Canada from './countries/Canada'
import CaymanIslands from './countries/CaymanIslands'
import CentralAfricanRepublic from './countries/CentralAfricanRepublic'
import Chad from './countries/Chad'
import Chile from './countries/Chile'
import China from './countries/China'
import Colombia from './countries/Colombia'
import Comoros from './countries/Comoros'
import Congo from './countries/Congo'
import CookIslands from './countries/CookIslands'
import Croatia from './countries/Croatia'
import Cuba from './countries/Cuba'
import Curacao from './countries/Curacao'
import Cyprus from './countries/Cyprus'
import CzechRepublic from './countries/CzechRepublic'
import Denmark from './countries/Denmark'
import Djibouti from './countries/Djibouti'
import Dominica from './countries/Dominica'
import DominicanRepublic from './countries/DominicanRepublic'
import EastTimor from './countries/EastTimor'
import Ecuador from './countries/Ecuador'
import Egypt from './countries/Egypt'
import ElSalvador from './countries/ElSalvador'
import EquatorialGuinea from './countries/EquatorialGuinea'
import Eritrea from './countries/Eritrea'
import Estonia from './countries/Estonia'
import Eswatini from './countries/Eswatini'
import Ethiopia from './countries/Ethiopia'
import FalklandIslands from './countries/FalklandIslands'
import Fiji from './countries/Fiji'
import Finland from './countries/Finland'
import France from './countries/France'
import FrenchGuiana from './countries/FrenchGuiana'
import Gabon from './countries/Gabon'
import Gambia from './countries/Gambia'
import Georgia from './countries/Georgia'
import Germany from './countries/Germany'
import Ghana from './countries/Ghana'
import Gibraltar from './countries/Gibraltar'
import Greece from './countries/Greece'
import Greenland from './countries/Greenland'
import Grenada from './countries/Grenada'
import Guadeloupe from './countries/Guadeloupe'
import Guam from './countries/Guam'
import Guatemala from './countries/Guatemala'
import Guernsey from './countries/Guernsey'
import Guinea from './countries/Guinea'
import GuineaBissau from './countries/GuineaBissau'
import Guyana from './countries/Guyana'
import Haiti from './countries/Haiti'
import HeardIslandAndMcDonaldIslands from './countries/HeardIslandAndMcDonaldIslands'
import Honduras from './countries/Honduras'
import HongKong from './countries/HongKong'
import Hungary from './countries/Hungary'
import Iceland from './countries/Iceland'
import India from './countries/India'
import Indonesia from './countries/Indonesia'
import Iran from './countries/Iran'
import Iraq from './countries/Iraq'
import Ireland from './countries/Ireland'
import IsleOfMan from './countries/IsleOfMan'
import Israel from './countries/Israel'
import Italy from './countries/Italy'
import IvoryCoast from './countries/IvoryCoast'
import Jamaica from './countries/Jamaica'
import Japan from './countries/Japan'
import Jersey from './countries/Jersey'
import Jordan from './countries/Jordan'
import Kazakhstan from './countries/Kazakhstan'
import Kenya from './countries/Kenya'
import Kiribati from './countries/Kiribati'
import Kosovo from './countries/Kosovo'
import Kuwait from './countries/Kuwait'
import Kyrgyzstan from './countries/Kyrgyzstan'
import Laos from './countries/Laos'
import Latvia from './countries/Latvia'
import Lebanon from './countries/Lebanon'
import Lesotho from './countries/Lesotho'
import Liberia  from './countries/Liberia'
import Libya from './countries/Libya'
import Liechtenstein from './countries/Liechtenstein'
import Lithuania from './countries/Lithuania'
import Luxembourg from './countries/Luxembourg'
import Macao from './countries/Macao'
import Madagascar from './countries/Madagascar'
import Malawi from './countries/Malawi'
import Malaysia from './countries/Malaysia'
import Maldives from './countries/Maldives'
import Mali from './countries/Mali'
import Malta from './countries/Malta'
import MarshallIslands from './countries/MarshallIslands'
import Martinique from './countries/Martinique'
import Mauritius from './countries/Mauritius'
import Mayotte from './countries/Mayotte'
import Mexico from './countries/Mexico'
import Micronesia from './countries/Micronesia'
import Moldova from './countries/Moldova'
import Monaco from './countries/Monaco'
import Mongolia from './countries/Mongolia'
import Montenegro from './countries/Montenegro'
import Montserrat from './countries/Montserrat'
import Morocco from './countries/Morocco'
import Mozambique from './countries/Mozambique'
import Myanmar from './countries/Myanmar'
import Namibia from './countries/Namibia'
import Nauru from './countries/Nauru'
import Nepal from './countries/Nepal'
import Netherlands from './countries/Netherlands'
import NewCaledonia from './countries/NewCaledonia'
import NewZealand from './countries/NewZealand'
import Nicaragua from './countries/Nicaragua'
import Niger from './countries/Niger'
import Nigeria from './countries/Nigeria'
import Niue from './countries/Niue'
import NorfolkIsland from './countries/NorfolkIsland'
import NorthernMarianaIslands from './countries/NorthernMarianaIslands'
import NorthKorea from './countries/NorthKorea'
import NorthMacedonia from './countries/NorthMacedonia'
import Norway from './countries/Norway'
import Oman from './countries/Oman'
import Pakistan from './countries/Pakistan'
import Palau from './countries/Palau'
import Palestine from './countries/Palestine'
import Panama from './countries/Panama'
import PapuaNewGuinea from './countries/PapuaNewGuinea'
import Paraguay from './countries/Paraguay'
import Peru from './countries/Peru'
import Philippines from './countries/Philippines'
import PitcairnIslands from './countries/PitcairnIslands'
import Poland from './countries/Poland'
import Portugal from './countries/Portugal'
import Qatar from './countries/Qatar'
import RepublicOfTheCongo from './countries/RepublicOfTheCongo'
import Reunion from './countries/Reunion'
import Romania from './countries/Romania'
import Russia from './countries/Russia'
import Rwanda from './countries/Rwanda'
import SaintBarthelemy from './countries/SaintBarthelemy'
import SaintKittsAndNevis from './countries/SaintKittsAndNevis'
import SaintLucia from './countries/SaintLucia'
import SaintMartin from './countries/SaintMartin'
import SaintPierreAndMiquelon from './countries/SaintPierreAndMiquelon'
import SaintVincentAndTheGrenadines from './countries/SaintVincentAndTheGrenadines'
import Samoa from './countries/Samoa'
import SanMarino from './countries/SanMarino'
import SaoTomeAndPrincipe from './countries/SaoTomeAndPrincipe'
import SaudiArabia from './countries/SaudiArabia'
import Senegal from './countries/Senegal'
import Serbia from './countries/Serbia'
import Seychelles from './countries/Seychelles'
import SierraLeone from './countries/SierraLeone'
import Singapore from './countries/Singapore'
import SintMaarten from './countries/SintMaarten'
import Slovakia from './countries/Slovakia'
import Slovenia from './countries/Slovenia'
import SolomonIslands from './countries/SolomonIslands'
import Somalia from './countries/Somalia'
import SouthAfrica from './countries/SouthAfrica'
import SouthGeorgiaAndTheSouthSandwichIslands from './countries/SouthGeorgiaAndTheSouthSandwichIslands'
import SouthKorea from './countries/SouthKorea'
import SouthSudan from './countries/SouthSudan'
import Spain from './countries/Spain'
import SriLanka from './countries/SriLanka'
import Sudan from './countries/Sudan'
import Suriname from './countries/Suriname'
import Sweden from './countries/Sweden'
import Switzerland from './countries/Switzerland'
import Syria from './countries/Syria'
import Taiwan from './countries/Taiwan'
import Tajikistan from './countries/Tajikistan'
import Tanzania from './countries/Tanzania'
import Thailand from './countries/Thailand'
import Togo from './countries/Togo'
import Tokelau from './countries/Tokelau'
import Tonga from './countries/Tonga'
import TrinidadAndTobago from './countries/TrinidadAndTobago'
import Tunisia from './countries/Tunisia'
import Turkey from './countries/Turkey'
import Turkmenistan from './countries/Turkmenistan'
import TurksAndCaicos from './countries/TurksAndCaicos'
import Tuvalu from './countries/Tuvalu'
import Uganda from './countries/Uganda'
import Ukraine from './countries/Ukraine'
import UnitedArabEmirates from './countries/UnitedArabEmirates'
import UnitedKingdom from './countries/UnitedKingdom'
import UnitedStates from './countries/UnitedStates'
import UnitedStatesVirginIslands from './countries/UnitedStatesVirginIslands'
import Uruguay from './countries/Uruguay'
import Uzbekistan from './countries/Uzbekistan'
import Vanuatu from './countries/Vanuatu'
import VaticanCity from './countries/VaticanCity'
import Venezuela from './countries/Venezuela'
import Vietnam from './countries/Vietnam'
import WallisAndFutuna from './countries/WallisAndFutuna'
import WesternSahara from './countries/WesternSahara'
import Yemen from './countries/Yemen'
import Zambia from './countries/Zambia'
import Zimbabwe from './countries/Zimbabwe'

const MapSVG = () => {

  return (
      <svg version="1.2" viewBox="-10 -50 2200 1000" width="1600" className={styles.main}>
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
      <Belize />
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
      <Congo />
      <Croatia />
      <Cuba />
      <CzechRepublic />
      <Denmark />
      <Djibouti />
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
      <Gambia />
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
      <Kuwait />
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
      <UnitedStatesVirginIslands />
      <Uruguay />
      <Uzbekistan />
      <Venezuela />
      <Vietnam />
      <WesternSahara />
      <Yemen />
      <Zambia />
      <Zimbabwe />
      <path d="M634.2 384.9l-0.2 0 0.3-0.4 0.3 0-0.2 0.3-0.2 0.1z" id="AI" name="Anguilla">
      </path>
      <path d="M599 424.5l-0.3 0-0.4-0.3-0.3-0.1-0.3-0.3-0.1-0.2-0.3-0.1-0.2-0.4-0.3-0.3 0.1-0.5 0.5 0.3 0.1 0.5 0.4 0.4 0.7 0.2 0.2 0.3 0.3 0.4-0.1 0.1z" id="CW" name="Curaçao">
      </path>
      <path className="Faeroe Islands" d="M 955.6 112 956 112.2 956.3 112.2 956.4 112.4 956.4 112.8 956.6 113.1 956.5 113.3 955.9 112.9 955.7 112.5 955.5 112.3 955.3 112 955.6 112 Z">
      </path>
      <path className="Faeroe Islands" d="M 955.9 110.4 956.7 110.6 956.9 110.8 956.8 111.2 956.7 111.3 956.3 110.8 955.8 110.7 955.6 110.3 955.9 110.4 Z">
      </path>
      <path className="Faeroe Islands" d="M 954.62 109.03999999999999 954.7 109.2 955 109.2 955 109.5 954.6 109.5 954.4 109.7 953.8 109.5 953.6 109.4 953.4 109.1 953.9 109 954 108.9 954.5571428571428 108.99285714285715 954.3 108.8 954.5 108 955 108.1 955.3 108.6 955.3 108.7 955.9 108.9 956.2 109.4 956.5 109.6 956.4 110.2 955.9 109.8 955.7 109.6 955.5 109.5 955.4 109.3 955.2 109.1 954.7 109.1 954.62 109.03999999999999 Z">
      </path>
      <path className="Faeroe Islands" d="M 958.3 108.4 958.1 108.2 958.4 108 958.3 108.4 Z">
      </path>
      <path className="Faeroe Islands" d="M 955.9 108.9 955.5 108.7 955.2 108.4 955.1 108.1 955.2 108 955.6 107.9 955.9 107.9 956.5 108.3 956.4 108.5 956.5 108.7 957.1 108.9 957.1 109.1 956.7 109.4 955.9 108.9 Z">
      </path>
      <path className="Faeroe Islands" d="M 958.1 108.3 957.8 108.7 957.5 108.5 957.2 108.5 957.4 108.2 957.3 107.8 957.4 107.7 957.6 108.1 958.1 108.3 Z">
      </path>
      <path className="Faeroe Islands" d="M 957.2 108.3 957 108.3 956.8 107.9 956.9 107.6 957.1 108 957.2 108.3 Z">
      </path>
      <path d="M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z" id="NR" name="Nauru">
      </path>
      <path className="Puerto Rico" d="M 607.1 385.9 606.8 385.7 606.9 385.5 607.2 385.5 607.3 385.6 607.1 385.9 Z">
      </path>
      <path className="Puerto Rico" d="M 621.7 385.4 621.5 385.4 620.6 385.7 620 385.7 620.2 385.5 620.6 385.3 621 385.2 621.6 385.3 621.7 385.4 Z">
      </path>
      <path className="Puerto Rico" d="M 612.2 383 612.8 383.1 613.4 383.1 613.7 383.2 614.3 383.1 614.6 383.2 615 383.1 615.2 383.2 615.7 383.1 616.1 383.2 616.4 383.2 617.2 383.4 617.2 383.2 617.8 383.4 617.9 383.3 618.7 383.4 618.9 383.6 619.1 383.6 619.7 383.9 619.9 383.8 619.8 384.5 620 384.8 619.1 385.1 618.8 385.5 618.5 386.1 618.2 386.3 617.9 386.4 617.5 386.4 616.9 386.5 616.6 386.7 615.9 386.6 615.7 386.4 615.2 386.6 614.9 386.3 614.2 386.5 613.3 386.4 613 386.5 612.4 386.6 612.2 386.7 612 386.5 611.6 386.4 611.3 386.6 610.7 386.5 611 385.8 611 385.4 611.2 385 611 384.4 610.8 384.3 610.7 383.9 611.1 383.7 611.3 383.6 611.3 383.1 611.7 382.9 612.2 383 Z">
      </path>
      <path className="French Polynesia" d="M 195.3 679.3 195.2 679.2 195 678.9 195.1 678.7 195.4 678.9 195.3 679.3 Z">
      </path>
      <path className="French Polynesia" d="M 205.6 641.2 205.5 641.3 205.2 641.1 205.4 640.9 205.6 641.2 Z">
      </path>
      <path className="French Polynesia" d="M 199.4 616.5 199.2 616.4 199.4 615.8 199.9 615.4 200.2 615.4 200.2 615.6 200 616 199.4 616.5 Z">
      </path>
      <path className="French Polynesia" d="M 151.7 615.5 152.4 615.7 152.7 616.1 152.7 616.4 152.5 616.5 152 616.4 151.6 615.8 151.5 615.6 150.9 615.8 150.7 615.8 150.1 615.7 149.9 615.3 149.6 614.8 149.6 614.5 149.7 614.3 150.2 614.2 150.7 614.2 151.2 614.4 151.4 614.8 151.5 615.4 151.7 615.5 Z">
      </path>
      <path className="French Polynesia" d="M 148.7 614 148.5 614.6 148 614.4 148.1 614.1 148.6 613.9 148.7 614 Z">
      </path>
      <path className="French Polynesia" d="M 141.1 609.7 140.9 609.8 140.7 609.5 141 609.4 141.1 609.7 Z">
      </path>
      <path className="French Polynesia" d="M 139 610.1 138.7 610.3 138.4 610.3 138.2 609.5 138.4 609.3 139.1 610.1 139 610.1 Z">
      </path>
      <path className="French Polynesia" d="M 138 608.3 138.2 608.4 138.2 608.9 137.8 608.7 137.7 608.4 138 608.3 Z">
      </path>
      <path className="French Polynesia" d="M 166.3 605.4 166 605.5 166.1 605.2 166.3 605.4 Z">
      </path>
      <path className="French Polynesia" d="M 204.3 569.5 204 569.5 204 569.1 203.8 568.8 204.2 568.9 204.3 569.3 204.3 569.5 Z">
      </path>
      <path className="French Polynesia" d="M 201.2 566 201 566 201 565.6 201.2 565.3 201.5 565.5 201.3 565.7 201.2 566 Z">
      </path>
      <path className="French Polynesia" d="M 202.4 564.4 202.4 564.7 202 564.8 201.4 564.8 201.4 565.1 201 565 200.8 564.8 200.7 564.5 201.4 564.1 201.7 564.1 201.9 564.3 202.4 564.4 Z">
      </path>
      <path className="French Polynesia" d="M 195.5 561.8 195.5 562.2 195.5 562.4 195.2 562.4 194.9 562 195.2 561.7 195.5 561.8 Z">
      </path>
      <path className="French Polynesia" d="M 197.9 558.8 198.2 558.9 198.3 559 197.7 559.2 197.6 558.9 197.9 558.8 Z">
      </path>
      <path className="French Polynesia" d="M 194.2 558.2 195.1 558.3 195.4 558.6 195.4 558.8 195 559.1 194.2 559.1 194.1 558.6 194 558.2 194.2 558.2 Z">
      </path>
      <path className="Solomon Islands" d="M 1926.8 576.2 1927.1 576.4 1927 576.8 1927.3 576.8 1927.3 577 1926.5 577 1926.2 576.5 1926.4 576.2 1926.8 576.2 Z">
      </path>
      <path className="Solomon Islands" d="M 1888.5 575.6 1888.7 575.6 1889.7 576.4 1890.2 576.7 1891.1 577.4 1891 577.7 1890.8 577.7 1890.6 577.9 1890.4 577.6 1890.3 577.6 1890.1 577.4 1890 577 1889.6 576.9 1889.6 576.6 1889.3 576.5 1889.2 576.6 1889 576.6 1888.1 576.2 1887.9 575.8 1888.2 575.4 1888.5 575.6 Z">
      </path>
      <path className="Solomon Islands" d="M 1925.4 574.1 1925.2 574.4 1924.9 574.2 1924.9 574 1925.2 573.8 1925.4 574.1 Z">
      </path>
      <path className="Solomon Islands" d="M 1923.1 570.2 1923.2 570.3 1923.5 570.3 1923.4 570.7 1922.9 570.9 1922.6 570.9 1922.2 571 1921.8 571.6 1921.7 571.3 1921.4 571.4 1921.2 571.2 1921.2 570.9 1921.7 570.8 1921.7 570.6 1922 570.2 1922.7 570.3 1923.1 570.2 Z">
      </path>
      <path className="Solomon Islands" d="M 1896.8 567.4 1897.1 567.3 1897.7 567.6 1898.2 568.1 1898.5 568.4 1898.7 568.4 1898.9 568.6 1899.1 568.6 1899.4 568.9 1899.7 568.8 1900.1 568.9 1900.3 569.1 1900.7 569.1 1901 569 1901.2 569.3 1901.4 570.1 1901.7 570.4 1901.7 570.9 1901.5 571.1 1901.6 571.4 1901.2 571.2 1900.9 571.4 1900.6 571.3 1900.1 571 1899.9 571 1899.3 570.8 1898.9 570.7 1898.7 570.4 1898.4 570.2 1898.1 570.1 1897.9 569.8 1897.5 569.6 1897.7 569.2 1897.6 568.8 1897.6 568.4 1897.4 568.3 1896.8 568.1 1896.5 568.2 1896.4 568 1896.5 567.7 1896.6 567.4 1896.8 567.4 Z">
      </path>
      <path className="Solomon Islands" d="M 1900.8 564 1900.7 564.2 1900.7 564.9 1900.5 564.7 1900.5 564.2 1900.8 564 Z">
      </path>
      <path className="Solomon Islands" d="M 1897.9 562.2 1898.2 563.1 1898.4 563.5 1898.4 563.9 1898.5 564.4 1898.3 564.7 1897.9 564 1897.8 564.3 1897.5 563.8 1897.6 562.8 1897.7 562.6 1897.7 562.3 1897.9 562.2 Z">
      </path>
      <path className="Solomon Islands" d="M 1889.5 562.4 1889.8 562.4 1890.1 562.3 1890.5 562.4 1890.6 562.3 1891.1 562.3 1891.9 562.3 1892.1 562.6 1892.4 562.7 1892.6 563 1892.8 563 1893 563.1 1893.4 563.5 1893.4 564.1 1893.6 564.1 1894 564.3 1894.1 564.6 1894.1 565.2 1894 565.3 1893.3 565.5 1893.1 565.6 1892.7 565.5 1892.3 565.3 1891.9 565.3 1891.8 565.1 1891.3 564.8 1890.7 564.8 1890.2 564.9 1889.7 564.9 1889.2 564.8 1888.9 564.6 1888.6 564.7 1888.3 564.3 1888 564.1 1887.7 563.3 1887.5 562.9 1887.7 562.7 1887.6 562.5 1887.6 561.8 1887.7 561.5 1888.3 561.2 1888.7 561.4 1889.1 561.9 1889.2 562.2 1889.5 562.4 Z">
      </path>
      <path className="Solomon Islands" d="M 1891.8 560 1892.3 560.5 1892 560.8 1891.7 560.6 1891.7 560.5 1891.8 560 Z">
      </path>
      <path className="Solomon Islands" d="M 1891.8 560 1891.6 560.4 1891.5 560.4 1891.1 560.1 1890.8 560.2 1890.6 560.1 1890.5 559.9 1890.8 559.8 1891 559.6 1891.5 559.7 1891.8 560 Z">
      </path>
      <path className="Solomon Islands" d="M 1885.2 559.5 1885.3 559.7 1885.5 559.8 1885.3 560.2 1884.9 560.4 1884.6 560 1885.2 559.5 Z">
      </path>
      <path className="Solomon Islands" d="M 1876.7 557.7 1876.9 558 1876.8 558.3 1876 557.9 1876.5 557.6 1876.7 557.7 Z">
      </path>
      <path className="Solomon Islands" d="M 1880.1 558.5 1879.8 558.3 1879.9 558 1880.2 557.7 1880.2 558.2 1880.3 558.4 1880.1 558.5 Z">
      </path>
      <path className="Solomon Islands" d="M 1879.2 556.7 1879.4 556.6 1879.8 556.6 1879.8 556.8 1879.4 557.1 1879.6 557.3 1879.6 557.6 1879.2 558 1879 558.1 1878.7 558 1878.3 557.6 1878.4 557 1878.7 556.9 1878.9 556.5 1879.2 556.4 1879.2 556.7 Z">
      </path>
      <path className="Solomon Islands" d="M 1875.6 556.8 1875.4 556.9 1875.2 557.4 1875.6 557.9 1875.1 557.7 1875.1 557.5 1875 557.2 1874.6 556.8 1874.6 556.6 1875 556.4 1875.1 556.1 1875.5 555.8 1875.8 556 1875.8 556.4 1875.6 556.8 Z">
      </path>
      <path className="Solomon Islands" d="M 1888.5 556.3 1888.7 556.5 1888.6 556.7 1888.4 556.6 1887.8 556.1 1888 555.7 1888.3 555.6 1888.5 555.8 1888.4 556.1 1888.5 556.3 Z">
      </path>
      <path className="Solomon Islands" d="M 1895 555.5 1895.4 556.3 1896 557.1 1896 557.4 1895.6 557.6 1895.6 558.1 1895.6 558.4 1895.7 558.6 1895.9 558.6 1896.1 558.9 1896.6 559.3 1896.7 559.8 1896.8 560.1 1897 560.3 1896.8 560.5 1897.1 560.8 1897 560.9 1897.1 561.4 1896.9 561.6 1897.2 561.9 1897.3 562.4 1897.5 562.9 1897.5 563.5 1897.4 563.6 1897.1 563.3 1896.8 562.8 1896.8 562.5 1896.5 562.1 1896.1 561.8 1895.8 561.5 1895.3 560.9 1894.9 560.6 1894.6 559.7 1894.4 558.7 1894.2 558 1894.2 557.5 1894.1 557.1 1894.5 556.7 1894.4 556.4 1893.9 555.7 1893.8 555.4 1893.9 555.3 1894.3 555.4 1894.5 555.5 1894.8 555.2 1895 555.5 Z">
      </path>
      <path className="Solomon Islands" d="M 1874.3 555.2 1874.1 554.8 1873.8 554.5 1874.2 554.5 1874.3 555.2 Z">
      </path>
      <path className="Solomon Islands" d="M 1874.2 554.2 1874.6 554.3 1874.7 554.4 1874.8 554.9 1874.6 554.9 1874.4 554.5 1874.2 554.2 Z">
      </path>
      <path className="Solomon Islands" d="M 1877.3 554.4 1877.2 554.7 1877.4 554.7 1877.9 554.7 1878.3 555.4 1878.3 555.6 1878.5 555.9 1878.6 556.4 1878.4 556.6 1878.4 556.9 1877.8 556.7 1877.6 556.5 1877.3 556.5 1876.9 556.2 1876.8 556 1876.7 555.7 1877.1 555.8 1876.8 555 1876.7 554.8 1876.2 554.9 1876 555 1875.6 555 1875.3 555.4 1874.9 555.2 1874.9 554.6 1875.1 554.4 1875.5 554.4 1875.5 554 1875.9 553.4 1876.3 553.1 1876.6 552.9 1877 553.2 1877.2 553.6 1877.1 554.3 1877.3 554.4 Z">
      </path>
      <path className="Solomon Islands" d="M 1871.4 554.4 1871.3 554.4 1871.1 553.6 1871.2 553.3 1871.2 552.9 1871.4 553 1871.5 553.4 1871.5 554.1 1871.4 554.4 Z">
      </path>
      <path className="Solomon Islands" d="M 1874.8 553.9 1874.5 554.1 1874.4 554 1874 554 1873.7 553.7 1873.6 553.4 1873.5 553.1 1873.6 552.8 1873.9 552.4 1874.4 552.2 1874.6 552.4 1874.9 552.9 1874.9 553.5 1874.8 553.9 Z">
      </path>
      <path className="Solomon Islands" d="M 1871.8 550.4 1872.2 550.9 1872.2 551 1872.9 551.4 1872.8 551.7 1872.2 552.4 1872.2 552.7 1871.9 552.8 1871.9 552.4 1871.7 552.4 1871.7 552 1871.5 551.6 1871.2 551.4 1871.1 551.1 1871.2 550.8 1871.4 550.6 1871.6 550.4 1871.8 550.4 Z">
      </path>
      <path className="Solomon Islands" d="M 1882.1 550.5 1882.4 550.7 1882.2 550.8 1881.7 550.9 1881.6 550.6 1881.8 550.4 1882.1 550.5 Z">
      </path>
      <path className="Solomon Islands" d="M 1883 550.5 1883.2 550.4 1883.7 550.7 1884 550.8 1884.2 551 1884.5 551.5 1884.8 551.6 1885.1 551.9 1885.1 552.2 1885.6 552.3 1885.6 552.6 1885.9 552.7 1886.2 552.6 1886.3 552.7 1886.7 552.9 1886.8 553.1 1887.1 553 1887.4 553.1 1887.5 553.4 1887.9 553.7 1888.2 554 1888.6 554.3 1889.6 555.3 1889.3 555.7 1889.6 556.2 1889.7 556.8 1889.4 556.7 1889.1 556.3 1888.4 555.5 1888 555.4 1887.5 555 1886.9 554.9 1886.8 554.6 1886.2 554.4 1885.7 553.9 1885.5 553.9 1884.7 553.3 1884.2 553 1884.2 552.8 1883.8 552.6 1883.6 552.4 1883.4 552 1883 551.7 1882.9 551.5 1882.9 551.1 1882.5 550.6 1882.3 550.5 1882.3 550.2 1883 550.5 Z">
      </path>
      <path className="Solomon Islands" d="M 1881.5 549.9 1881.7 550.1 1881.9 550 1882.2 550.2 1882.1 550.4 1881.8 550.3 1881.5 549.9 Z">
      </path>
      <path className="Solomon Islands" d="M 1877 549.3 1877.5 549.3 1877.3 549.5 1877 549.4 1877 549.3 Z">
      </path>
      <path className="Solomon Islands" d="M 1881.3 549.3 1881.1 549.8 1881 549.6 1881.3 549.3 Z">
      </path>
      <path className="Solomon Islands" d="M 1878.6 549.7 1878.1 549.8 1877.9 549.6 1878.2 549.2 1878.5 549.3 1878.6 549.7 Z">
      </path>
      <path className="Solomon Islands" d="M 1866.1 548.8 1866.3 549.1 1866.1 549.3 1865.8 549.2 1865.7 549.1 1866.1 548.8 Z">
      </path>
      <path className="Solomon Islands" d="M 1867.6 546.9 1867.9 547.1 1867.8 547.4 1867.1 547.6 1866.8 547.3 1867.1 546.7 1867.3 546.6 1867.6 546.9 Z">
      </path>
      <path className="Solomon Islands" d="M 1869.3 546 1869.3 546.5 1869.1 546.3 1869.1 546.1 1869.3 546 Z">
      </path>
      <path className="Solomon Islands" d="M 1872.2 544.5 1872.5 544.6 1872.9 545.1 1873.2 545.3 1873.5 545.4 1873.8 545.7 1874.6 546.1 1875 546.6 1875 547 1875.1 547.6 1875.3 547.8 1875.6 548.1 1875.8 548.1 1875.9 548.5 1876.6 548.8 1877 548.7 1877.1 548.8 1877.1 549.1 1876.8 549.2 1876.6 549.5 1876.1 549.3 1875.3 548.9 1874.8 548.9 1874.5 548.5 1873.8 548.1 1873.2 547.1 1872.6 546.1 1872.1 545.8 1871.4 545.1 1871.4 544.6 1871.4 544.4 1871.7 544.2 1872 544.3 1872.2 544.5 Z">
      </path>
      <path d="M602 424.6l-0.2 0-0.1-0.5 0.1-0.3-0.1-0.3-0.4-0.1-0.3-0.3 0.1-0.3 1.2 0.6-0.1 0.2 0 0.4-0.2 0.2 0 0.4z" id="BQBO" name="Netherlands">
      </path>
      <path d="M634.3 389.6l-0.2 0.1 0-0.2 0.1-0.1 0.1 0.2z" id="BQSE" name="St. Eustatius (Netherlands)">
      </path>
      <path d="M632.8 388.7l-0.1 0 0.1-0.2 0.1 0.1-0.1 0.1z" id="BQSA" name="Saba (Netherlands)">
      </path>
      <circle cx="997.9" cy="189.1" id="0">
      </circle>
      <circle cx="673.5" cy="724.1" id="1">
      </circle>
      <circle cx="1798.2" cy="719.3" id="2">
      </circle>
      //microstates
      <AmericanSamoa />
      <Andorra />
      <Anguilla />
      <AntiguaAndBarbuda />
      <Aruba />
      <Bahamas />
      <Bahrain />
      <Barbados />
      <Bermuda />
      <BouvetIsland />
      <BritishIndianOceanTerritory />
      <BritishVirginIslands />
      <Brunei />
      <Burundi />
      <CapeVerde />
      <CaymanIslands />
      <Comoros />
      <CookIslands />
      <Curacao />
      <Cyprus />
      <Dominica />
      <EastTimor />
      <ElSalvador />
      <EquatorialGuinea />
      <Eswatini />
      <FalklandIslands />
      <Fiji />
      <Gibraltar />
      <Grenada />
      <Guadeloupe />
      <Guam />
      <Guernsey />
      <HeardIslandAndMcDonaldIslands />
      <HongKong />
      <IsleOfMan />
      <Jamaica />
      <Jersey />
      <Kiribati />
      <Kosovo />
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
      <NorfolkIsland />
      <NorthernMarianaIslands />
      <NorthMacedonia />
      <Palau />
      <Palestine />
      <PitcairnIslands />
      <Qatar />
      <Reunion />
      <Rwanda />
      <SaintBarthelemy />
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
      <SintMaarten />
      <SouthGeorgiaAndTheSouthSandwichIslands />
      <Tokelau />
      <Tonga />
      <TrinidadAndTobago />
      <TurksAndCaicos />
      <Tuvalu />
      <Vanuatu />
      <VaticanCity />
      <WallisAndFutuna />
      </svg>
  )
}

export default memo(MapSVG)