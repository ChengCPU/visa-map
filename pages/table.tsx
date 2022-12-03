import Country from '../components/Table/Country';
import VisaPolicy from '../components/Table/VisaPolicy';
import TablePassport from '../components/Table/TablePassport';
import styles from '../styles/Table.module.css';
interface Props {
	selectArray:null | string[];
  assignedColors: object[];
}
const countries:string[] = ["abkhazia","afghanistan", "albania","algeria","americanSamoa","andorra","angola","anguilla","antiguaAndBarbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bonaire","bosniaAndHerzegovina","botswana","bouvetIsland","brazil","britishIndianOceanTerritory","britishVirginIslands","brunei","bulgaria","burkinaFaso","burundi","cambodia","cameroon","canada","capeVerde","caymanIslands","centralAfricanRepublic","chad","chile","china","colombia","comoros","cookIslands","costaRica","croatia","cuba","curacao","cyprus","czechRepublic","democraticRepublicOfTheCongo","denmark","djibouti","dominica","dominicanRepublic","eastTimor","ecuador","egypt","elSalvador","equatorialGuinea","eritrea","estonia","eswatini","ethiopia","falklandIslands","faroeIslands","fiji","finland","france","frenchGuiana","frenchPolynesia","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guineaBissau","guyana","haiti","heardIslandAndMcDonaldIslands","honduras","hongKong","hungary","iceland","india","indonesia","iran","iraq","ireland","isleOfMan","israel","italy","ivoryCoast","jamaica","janMayen","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macao","madagascar","malawi","malaysia","maldives","mali","malta","marshallIslands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","newCaledonia","newZealand","nicaragua","niger","nigeria","niue","norfolkIsland","northernCyprus","northernMarianaIslands","northKorea","northMacedonia","norway","oman","pakistan","palau","palestine","panama","papuaNewGuinea","paraguay","peru","philippines","pitcairnIslands","poland","portugal","qatar","republicOfTheCongo","reunion","romania","russia","rwanda","saba","saintBarthelemy","saintHelena","saintKittsAndNevis","saintLucia","saintMartin","saintPierreAndMiquelon","saintVincentAndTheGrenadines","samoa","sanMarino","saoTomeAndPrincipe","saudiArabia","senegal","serbia","seychelles","sierraLeone","singapore","sintEustatius","sintMaarten","slovakia","slovenia","solomonIslands","somalia","southAfrica","southGeorgiaAndTheSouthSandwichIslands","southKorea","southOssetia","southSudan","spain","sriLanka","sudan","suriname","svalbard","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tokelau","tonga","transnistria","trinidadAndTobago","tunisia","turkey","turkmenistan","turksAndCaicos","tuvalu","uganda","ukraine","unitedArabEmirates","unitedKingdom","unitedStates","unitedStatesVirginIslands","uruguay","uzbekistan","vanuatu","vaticanCity","venezuela","vietnam","wallisAndFutuna","westernSahara","yemen","zambia","zimbabwe"]
const flags:string[] = ["🏳️","🇦🇫","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇶","🇧🇦","🇧🇼","🏳️","🇧🇷","🏳️","🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇨🇻","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇴","🇰🇲","🇨🇰","🇨🇷","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇨🇩","🇩🇰","🇩🇯","🇩🇲","🇩🇴","🇹🇱","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇸🇿","🇪🇹","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫","🇵🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳","🇬🇼","🇬🇾","🇭🇹","🇭🇲","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇨🇮","🇯🇲","🇸🇯","🇯🇵","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮","🇱🇹","🇱🇺","🇲🇴","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽","🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇳🇺","🇳🇫","🏳️","🇲🇵","🇰🇵","🇲🇰","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭","🇵🇳","🇵🇱","🇵🇹","🇶🇦","🇨🇬","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🏳️","🇧🇱","🇸🇭","🇰🇳","🇱🇨","🇲🇫","🇵🇲","🇻🇨","🇼🇸","🇸🇲","🇸🇹","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱","🇸🇬","🏳️","🇸🇽","🇸🇰","🇸🇮","🇸🇧","🇸🇴","🇿🇦","🇬🇸","🇰🇷","🏳️","🇸🇸","🇪🇸","🇱🇰","🇸🇩","🇸🇷","🇸🇯","🇸🇪","🇨🇭","🇸🇾","🇹🇼","🇹🇯","🇹🇿","🇹🇭","🇹🇬","🇹🇰","🇹🇴","🏳️","🇹🇹","🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🇺🇸","🇻🇮","🇺🇾","🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇿🇲","🇿🇼"]
const horizontalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]
let verticalColumn:number[] = []
for(let countryCount = 0; countryCount < countries.length; countryCount++) {
  verticalColumn.push(countryCount)
}

const Table:React.FC<Props> = ({ selectArray, assignedColors }) => {

  const renderPassports = (horizontalColumn: number[]) => {
    return horizontalColumn.map(horizontalColumn => <th key={horizontalColumn}><TablePassport selectArray={selectArray} horizontalColumn={horizontalColumn}/></th>)
  }

  const renderTables = (verticalColumn:number[], horizontalColumn:number[], flags:string[]) => {
    return verticalColumn.map(verticalColumn => 
    <tr className={styles.subRow} key={verticalColumn}>
      <Country country={countries[verticalColumn]} flag={flags[verticalColumn]} />
      {horizontalColumn.map(horizontalColumn =>
        <VisaPolicy
          key={horizontalColumn}
          assignedColors={assignedColors}
          selectArray={selectArray}
          verticalColumn={verticalColumn}
          horizontalColumn={horizontalColumn}
        />
      )}
    </tr>
    )
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
          {renderPassports(horizontalColumn)}
				</tr>
          {renderTables(verticalColumn, horizontalColumn, flags)}
			</tbody>
	</table>
	</div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  </>
  )
}

export default Table