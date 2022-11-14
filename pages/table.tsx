import Country from '../components/Table/Country';
import styles from '../styles/Table.module.css';
import TablePassport from '../components/Table/TablePassport';
interface Props {
	selectArray:null | string[];
}
const countries:string[] = [
  "abkhazia",
  "afghanistan", 
  "albania",
  "algeria",
  "americanSamoa",
  "andorra",
  "angola",
  "anguilla",
  "antiguaAndBarbuda",
  "argentina",
  "armenia",
  "aruba",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bermuda",
  "bhutan",
  "bolivia",
  "bonaire",
  "bosniaAndHerzegovina",
  "botswana",
  "bouvetIsland",
  "brazil",
  "britishIndianOceanTerritory",
  "britishVirginIslands",
  "brunei",
  "bulgaria",
  "burkinaFaso",
  "burundi",
  "cambodia",
  "cameroon",
  "canada",
  "capeVerde",
  "caymanIslands",
  "centralAfricanRepublic",
  "chad",
  "chile",
  "china",
  "colombia",
  "comoros",
  "cookIslands",
  "costaRica",
  "croatia",
  "cuba",
  "curacao",
  "cyprus",
  "czechRepublic",
  "democraticRepublicOfTheCongo",
  "denmark",
  "djibouti",
  "dominica",
  "dominicanRepublic",
  "eastTimor",
  "ecuador",
  "egypt",
  "elSalvador",
  "equatorialGuinea",
  "eritrea",
  "estonia",
  "eswatini",
  "ethiopia",
  "falklandIslands",
  "faroeIslands",
  "fiji",
  "finland",
  "france",
  "frenchGuiana",
  "frenchPolynesia",
  "gabon",
  "gambia",
  "georgia",
  "germany",
  "ghana",
  "gibraltar",
  "greece",
  "greenland",
  "grenada",
  "guadeloupe",
  "guam",
  "guatemala",
  "guernsey",
  "guinea",
  "guineaBissau",
  "guyana",
  "haiti",
  "heardIslandAndMcDonaldIslands",
  "honduras",
  "hongKong",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "isleOfMan",
  "israel",
  "italy",
  "ivoryCoast",
  "jamaica",
  "janMayen",
  "japan",
  "jersey",
  "jordan",
  "kazakhstan",
  "kenya",
  "kiribati",
  "kosovo",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "macao",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "marshallIslands",
  "martinique",
  "mauritania",
  "mauritius",
  "mayotte",
  "mexico",
  "micronesia",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "montserrat",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nauru",
  "nepal",
  "netherlands",
  "newCaledonia",
  "newZealand",
  "nicaragua",
  "niger",
  "nigeria",
  "niue",
  "norfolkIsland",
  "northernCyprus",
  "northernMarianaIslands",
  "northKorea",
  "northMacedonia",
  "norway",
  "oman",
  "pakistan",
  "palau",
  "palestine",
  "panama",
  "papuaNewGuinea",
  "paraguay",
  "peru",
  "philippines",
  "pitcairnIslands",
  "poland",
  "portugal",
  "qatar",
  "republicOfTheCongo",
  "reunion",
  "romania",
  "russia",
  "rwanda",
  "saba",
  "saintBarthelemy",
  "saintHelena",
  "saintKittsAndNevis",
  "saintLucia",
  "saintMartin",
  "saintPierreAndMiquelon",
  "saintVincentAndTheGrenadines",
  "samoa",
  "sanMarino",
  "saoTomeAndPrincipe",
  "saudiArabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierraLeone",
  "singapore",
  "sintEustatius",
  "sintMaarten",
  "slovakia",
  "slovenia",
  "solomonIslands",
  "somalia",
  "southAfrica",
  "southGeorgiaAndTheSouthSandwichIslands",
  "southKorea",
  "southOssetia",
  "southSudan",
  "spain",
  "sriLanka",
  "sudan",
  "suriname",
  "svalbard",
  "sweden",
  "switzerland",
  "syria",
  "taiwan",
  "tajikistan",
  "tanzania",
  "thailand",
  "togo",
  "tokelau",
  "tonga",
  "transnistria",
  "trinidadAndTobago",
  "tunisia",
  "turkey",
  "turkmenistan",
  "turksAndCaicos",
  "tuvalu",
  "uganda",
  "ukraine",
  "unitedArabEmirates",
  "unitedKingdom",
  "unitedStates",
  "unitedStatesVirginIslands",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "vaticanCity",
  "venezuela",
  "vietnam",
  "wallisAndFutuna",
  "westernSahara",
  "yemen",
  "zambia",
  "zimbabwe"
]

const Table:React.FC<Props> = ({ selectArray }) => {

  return (
	<>
	<br />
	<br />
	<br />
	<div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
				<tr>
					<th><TablePassport selectArray={selectArray} num={0}/></th>
					<th><TablePassport selectArray={selectArray} num={1}/></th>
					<th><TablePassport selectArray={selectArray} num={2}/></th>
					<th><TablePassport selectArray={selectArray} num={3}/></th>
					<th><TablePassport selectArray={selectArray} num={4}/></th>
					<th><TablePassport selectArray={selectArray} num={5}/></th>
					<th><TablePassport selectArray={selectArray} num={6}/></th>
					<th><TablePassport selectArray={selectArray} num={7}/></th>
					<th><TablePassport selectArray={selectArray} num={8}/></th>
					<th><TablePassport selectArray={selectArray} num={9}/></th>
				</tr>
				<tr className={styles.subRow}>
					<Country country={countries[0]} flag={""} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[1]} flag={"🇦🇫"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[2]} flag={"🇦🇱"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[3]} flag={"🇩🇿"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[4]} flag={"🇦🇸"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[5]} flag={"🇦🇩"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[6]} flag={"🇦🇴"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[7]} flag={"🇦🇮"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[8]} flag={"🇦🇬"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[9]} flag={"🇦🇷"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[10]} flag={"🇦🇲"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[11]} flag={"🇦🇼"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[12]} flag={"🇦🇺"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[13]} flag={"🇦🇹"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[14]} flag={"🇦🇿"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[15]} flag={"🇧🇸"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
				<tr className={styles.subRow}>
          <Country country={countries[16]} flag={"🇧🇭"} />
					<td className={styles.text}>text 2</td>
					<td className={styles.text}>text 3</td>
					<td className={styles.text}>text 4</td>
					<td className={styles.text}>text 5</td>
					<td className={styles.text}>text 6</td>
					<td className={styles.text}>text 7</td>
					<td className={styles.text}>text 8</td>
					<td className={styles.text}>text 9</td>
					<td className={styles.text}>text 10</td>
				</tr>
			</tbody>
	</table>
	</div>
    </>
  )
}

export default Table