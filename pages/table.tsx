import Country from '../components/Table/Country';
import VisaPolicy from '../components/Table/VisaPolicy';
import TablePassport from '../components/Table/TablePassport';
import styles from '../styles/Table.module.css';
interface Props {
	selectArray:null | string[];
  assignedColors: object[];
}
const countries:string[] = ["abkhazia","afghanistan", "albania","algeria","americanSamoa","andorra","angola","anguilla","antiguaAndBarbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bonaire","bosniaAndHerzegovina","botswana","bouvetIsland","brazil","britishIndianOceanTerritory","britishVirginIslands","brunei","bulgaria","burkinaFaso","burundi","cambodia","cameroon","canada","capeVerde","caymanIslands","centralAfricanRepublic","chad","chile","china","colombia","comoros","cookIslands","costaRica","croatia","cuba","curacao","cyprus","czechRepublic","democraticRepublicOfTheCongo","denmark","djibouti","dominica","dominicanRepublic","eastTimor","ecuador","egypt","elSalvador","equatorialGuinea","eritrea","estonia","eswatini","ethiopia","falklandIslands","faroeIslands","fiji","finland","france","frenchGuiana","frenchPolynesia","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guineaBissau","guyana","haiti","heardIslandAndMcDonaldIslands","honduras","hongKong","hungary","iceland","india","indonesia","iran","iraq","ireland","isleOfMan","israel","italy","ivoryCoast","jamaica","janMayen","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macao","madagascar","malawi","malaysia","maldives","mali","malta","marshallIslands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","newCaledonia","newZealand","nicaragua","niger","nigeria","niue","norfolkIsland","northernCyprus","northernMarianaIslands","northKorea","northMacedonia","norway","oman","pakistan","palau","palestine","panama","papuaNewGuinea","paraguay","peru","philippines","pitcairnIslands","poland","portugal","qatar","republicOfTheCongo","reunion","romania","russia","rwanda","saba","saintBarthelemy","saintHelena","saintKittsAndNevis","saintLucia","saintMartin","saintPierreAndMiquelon","saintVincentAndTheGrenadines","samoa","sanMarino","saoTomeAndPrincipe","saudiArabia","senegal","serbia","seychelles","sierraLeone","singapore","sintEustatius","sintMaarten","slovakia","slovenia","solomonIslands","somalia","southAfrica","southGeorgiaAndTheSouthSandwichIslands","southKorea","southOssetia","southSudan","spain","sriLanka","sudan","suriname","svalbard","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tokelau","tonga","transnistria","trinidadAndTobago","tunisia","turkey","turkmenistan","turksAndCaicos","tuvalu","uganda","ukraine","unitedArabEmirates","unitedKingdom","unitedStates","unitedStatesVirginIslands","uruguay","uzbekistan","vanuatu","vaticanCity","venezuela","vietnam","wallisAndFutuna","westernSahara","yemen","zambia","zimbabwe"]
const flags:string[] = ["","🇦🇫","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇶","🇧🇦","🇧🇼","","🇧🇷","","🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇨🇻","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇴","🇰🇲","🇨🇰","🇨🇷","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿"]
const main:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]
const sub:number[] = [0,1,2,3,4,5,6,7,8,9]

const Table:React.FC<Props> = ({ selectArray, assignedColors }) => {

  const renderPassports = (sub: number[]) => {
    return sub.map(sub => <th key={sub}><TablePassport selectArray={selectArray} num={sub}/></th>)
  }

  const renderTables = (main:number[], sub:number[], flags:string[]) => {
    return main.map(main => 
    <tr className={styles.subRow} key={main}>
      <Country country={countries[main]} flag={flags[main]} />
      {sub.map(sub =>
        <VisaPolicy
          key={sub}
          assignedColors={assignedColors}
          selectArray={selectArray}
          main={main}
          sub={sub}
        />
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