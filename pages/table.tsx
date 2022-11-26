import { useState } from 'react';
import Country from '../components/Table/Country';
import styles from '../styles/Table.module.css';
import TablePassport from '../components/Table/TablePassport';
interface Props {
	selectArray:null | string[];
  assignedColors: object[];
  tableData: any;
  setTableData: Function;
}
const countries:string[] = ["abkhazia","afghanistan", "albania","algeria","americanSamoa","andorra","angola","anguilla","antiguaAndBarbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bonaire","bosniaAndHerzegovina","botswana","bouvetIsland","brazil","britishIndianOceanTerritory","britishVirginIslands","brunei","bulgaria","burkinaFaso","burundi","cambodia","cameroon","canada","capeVerde","caymanIslands","centralAfricanRepublic","chad","chile","china","colombia","comoros","cookIslands","costaRica","croatia","cuba","curacao","cyprus","czechRepublic","democraticRepublicOfTheCongo","denmark","djibouti","dominica","dominicanRepublic","eastTimor","ecuador","egypt","elSalvador","equatorialGuinea","eritrea","estonia","eswatini","ethiopia","falklandIslands","faroeIslands","fiji","finland","france","frenchGuiana","frenchPolynesia","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guineaBissau","guyana","haiti","heardIslandAndMcDonaldIslands","honduras","hongKong","hungary","iceland","india","indonesia","iran","iraq","ireland","isleOfMan","israel","italy","ivoryCoast","jamaica","janMayen","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macao","madagascar","malawi","malaysia","maldives","mali","malta","marshallIslands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","newCaledonia","newZealand","nicaragua","niger","nigeria","niue","norfolkIsland","northernCyprus","northernMarianaIslands","northKorea","northMacedonia","norway","oman","pakistan","palau","palestine","panama","papuaNewGuinea","paraguay","peru","philippines","pitcairnIslands","poland","portugal","qatar","republicOfTheCongo","reunion","romania","russia","rwanda","saba","saintBarthelemy","saintHelena","saintKittsAndNevis","saintLucia","saintMartin","saintPierreAndMiquelon","saintVincentAndTheGrenadines","samoa","sanMarino","saoTomeAndPrincipe","saudiArabia","senegal","serbia","seychelles","sierraLeone","singapore","sintEustatius","sintMaarten","slovakia","slovenia","solomonIslands","somalia","southAfrica","southGeorgiaAndTheSouthSandwichIslands","southKorea","southOssetia","southSudan","spain","sriLanka","sudan","suriname","svalbard","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tokelau","tonga","transnistria","trinidadAndTobago","tunisia","turkey","turkmenistan","turksAndCaicos","tuvalu","uganda","ukraine","unitedArabEmirates","unitedKingdom","unitedStates","unitedStatesVirginIslands","uruguay","uzbekistan","vanuatu","vaticanCity","venezuela","vietnam","wallisAndFutuna","westernSahara","yemen","zambia","zimbabwe"]
const flags:string[] = ["", "🇦🇫", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹",  "🇦🇿",  "🇧🇸",  "🇧🇭"]
const main:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const main2:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const sub:number[] = [0,1,2,3,4,5,6,7,8,9]
const colors:string[] = [
  "abkhaziaColor",
  "afghanistanColor", 
  "albaniaColor",
  "algeriaColor",
  "americanSamoaColor",
  "andorraColor",
  "angolaColor",
  "anguillaColor",
  "antiguaAndBarbudaColor",
  "argentinaColor",
  "armeniaColor",
  "arubaColor",
  "australiaColor",
  "austriaColor",
  "azerbaijanColor",
  "bahamasColor",
  "bahrainColor",
  "bangladeshColor",
  "barbadosColor",
  "belarusColor",
  "belgiumColor",
  "belizeColor",
  "beninColor",
  "bermudaColor",
  "bhutanColor",
  "boliviaColor",
  "bonaireColor",
  "bosniaAndHerzegovinaColor",
  "botswanaColor",
  "bouvetIslandColor",
  "brazilColor",
  "britishIndianOceanTerritory",
  "britishVirginIslandsColor",
  "bruneiColor",
  "bulgariaColor",
  "burkinaFasoColor",
  "burundiColor",
  "cambodiaColor",
  "cameroonColor",
  "canadaColor",
  "capeVerdeColor",
  "caymanIslandsColor",
  "centralAfricanRepublicColor",
  "chadColor",
  "chileColor",
  "chinaColor",
  "colombiaColor",
  "comorosColor",
  "cookIslandsColor",
  "costaRicaColor",
  "croatiaColor",
  "cubaColor",
  "curacaoColor",
  "cyprusColor",
  "czechRepublicColor",
  "democraticRepublicOfTheCongoColor",
  "denmarkColor",
  "djiboutiColor",
  "dominicaColor",
  "dominicanRepublicColor",
  "eastTimorColor",
  "ecuadorColor",
  "egyptColor",
  "elSalvadorColor",
  "equatorialGuineaColor",
  "eritreaColor",
  "estoniaColor",
  "eswatiniColor",
  "ethiopiaColor",
  "falklandIslandsColor",
  "faroeIslandsColor",
  "fijiColor",
  "finlandColor",
  "franceColor",
  "frenchGuianaColor",
  "frenchPolynesiaColor",
  "gabonColor",
  "gambiaColor",
  "georgiaColor",
  "germanyColor",
  "ghanaColor",
  "gibraltarColor",
  "greeceColor",
  "greenlandColor",
  "grenadaColor",
  "guadeloupeColor",
  "guamColor",
  "guatemalaColor",
  "guernseyColor",
  "guineaColor",
  "guineaBissauColor",
  "guyanaColor",
  "haitiColor",
  "heardIslandAndMcDonaldIslandsColor",
  "hondurasColor",
  "hongKongColor",
  "hungaryColor",
  "icelandColor",
  "indiaColor",
  "indonesiaColor",
  "iranColor",
  "iraqColor",
  "irelandColor",
  "isleOfManColor",
  "israelColor",
  "italyColor",
  "ivoryCoastColor",
  "jamaicaColor",
  "janMayenColor",
  "japanColor",
  "jerseyColor",
  "jordanColor",
  "kazakhstanColor",
  "kenyaColor",
  "kiribatiColor",
  "kosovoColor",
  "kuwaitColor",
  "kyrgyzstanColor",
  "laosColor",
  "latviaColor",
  "lebanonColor",
  "lesothoColor",
  "liberiaColor",
  "libyaColor",
  "liechtensteinColor",
  "lithuaniaColor",
  "luxembourgColor",
  "macaoColor",
  "madagascarColor",
  "malawiColor",
  "malaysiaColor",
  "maldivesColor",
  "maliColor",
  "maltaColor",
  "marshallIslandsColor",
  "martiniqueColor",
  "mauritaniaColor",
  "mauritiusColor",
  "mayotteColor",
  "mexicoColor",
  "micronesiaColor",
  "moldovaColor",
  "monacoColor",
  "mongoliaColor",
  "montenegroColor",
  "montserratColor",
  "moroccoColor",
  "mozambiqueColor",
  "myanmarColor",
  "namibiaColor",
  "nauruColor",
  "nepalColor",
  "netherlandsColor",
  "newCaledoniaColor",
  "newZealandColor",
  "nicaraguaColor",
  "nigerColor",
  "nigeriaColor",
  "niueColor",
  "norfolkIslandColor",
  "northernCyprusColor",
  "northernMarianaIslandsColor",
  "northKoreaColor",
  "northMacedoniaColor",
  "norwayColor",
  "omanColor",
  "pakistanColor",
  "palauColor",
  "palestineColor",
  "panamaColor",
  "papuaNewGuineaColor",
  "paraguayColor",
  "peruColor",
  "philippinesColor",
  "pitcairnIslandsColor",
  "polandColor",
  "portugalColor",
  "qatarColor",
  "republicOfTheCongoColor",
  "reunionColor",
  "romaniaColor",
  "russiaColor",
  "rwandaColor",
  "sabaColor",
  "saintBarthelemyColor",
  "saintHelenaColor",
  "saintKittsAndNevisColor",
  "saintLuciaColor",
  "saintMartinColor",
  "saintPierreAndMiquelonColor",
  "saintVincentAndTheGrenadinesColor",
  "samoaColor",
  "sanMarinoColor",
  "saoTomeAndPrincipeColor",
  "saudiArabiaColor",
  "senegalColor",
  "serbiaColor",
  "seychellesColor",
  "sierraLeoneColor",
  "singaporeColor",
  "sintEustatiusColor",
  "sintMaartenColor",
  "slovakiaColor",
  "sloveniaColor",
  "solomonIslandsColor",
  "somaliaColor",
  "southAfricaColor",
  "southGeorgiaAndTheSouthSandwichIslandsColor",
  "southKoreaColor",
  "southOssetiaColor",
  "southSudanColor",
  "spainColor",
  "sriLankaColor",
  "sudanColor",
  "surinameColor",
  "svalbardColor",
  "swedenColor",
  "switzerlandColor",
  "syriaColor",
  "taiwanColor",
  "tajikistanColor",
  "tanzaniaColor",
  "thailandColor",
  "togoColor",
  "tokelauColor",
  "tongaColor",
  "transnistriaColor",
  "trinidadAndTobagoColor",
  "tunisiaColor",
  "turkeyColor",
  "turkmenistanColor",
  "turksAndCaicosColor",
  "tuvaluColor",
  "ugandaColor",
  "ukraineColor",
  "unitedArabEmiratesColor",
  "unitedKingdomColor",
  "unitedStatesColor",
  "unitedStatesVirginIslandsColor",
  "uruguayColor",
  "uzbekistanColor",
  "vanuatuColor",
  "vaticanCityColor",
  "venezuelaColor",
  "vietnamColor",
  "wallisAndFutunaColor",
  "westernSaharaColor",
  "yemenColor",
  "zambiaColor",
  "zimbabweColor"
]

const Table:React.FC<Props> = ({ selectArray, assignedColors, tableData, setTableData }) => {

  const visaPolicyCalculation = (main:number) => {
    switch(assignedColors[main]?.[colors[main]]) {
      case "rgb(50,205,50)": return "Visa-free";
      case "rgb(161,224,123)": return "Visa on arrival/E-visa";
      case "rgb(255,255,92)": return "Visa on arrival";
      case "rgb(135,206,250)": return "E-visa";
      case "rgb(200,200,200)": return "Simplified visa";
      case "rgb(149,150,150)": return "Visa required";
      case 7: return "Visa-free";
      case 8: return "Visa on arrival/E-visa";
      case 9: return "Visa on arrival";
      case 10: return "E-visa";
      case 12: return "Simplified visa"
      case 14: return "Visa required";
      default: return assignedColors[main]?.[colors[main]]
    }
  }

  const renderPassports = (sub: number[]) => {
    return sub.map(sub => <th key={sub}><TablePassport selectArray={selectArray} num={sub}/></th>)
  }

  const renderTables = (main:number[], sub:number[], flags:string[]) => {
    return main.map(main => 
    <tr className={styles.subRow} key={main}>
      <Country country={countries[main]} flag={flags[main]} />
      {sub.map(sub =>
        <td className={styles.text} key={sub}>{(selectArray[sub] != null) ? visaPolicyCalculation(main) : null}</td>
      )}
    </tr>)
  }

  return (
	<>
	<br />
	<br />
	<br />
	<div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
				<tr>
          <th></th>
          {renderPassports(sub)}
				</tr>
        {renderTables(main, sub, flags)}
			</tbody>
	</table>
	</div>
  </>
  )
}

export default Table