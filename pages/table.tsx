import Country from '../components/Table/Country';
import VisaPolicy from '../components/Table/VisaPolicy';
import TablePassport from '../components/Table/TablePassport';
import styles from '../styles/Table.module.css';
interface Props {
	selectArray:null | string[];
  assignedColors:object[];
}
const countries:string[] = ["abkhazia","afghanistan", "albania","algeria","american Samoa","andorra","angola","anguilla","antigua and Barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bonaire","bosnia and Herzegovina","botswana","bouvet Island","brazil","british Indian Ocean Territory","british Virgin Islands","brunei","bulgaria","burkina Faso","burundi","cambodia","cameroon","canada","cape Verde","cayman Islands","central African Republic","chad","chile","china","colombia","comoros","cook Islands","costa Rica","croatia","cuba","curacao","cyprus","czech Republic","democratic Republic of the Congo","denmark","djibouti","dominica","dominican Republic","east Timor","ecuador","egypt","el Salvador","equatorial Guinea","eritrea","estonia","eswatini","ethiopia","falkland Islands","faroe Islands","fiji","finland","france","french Guiana","french Polynesia","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea Bissau","guyana","haiti","heard Island and McDonald Islands","honduras","hong Kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle of Man","israel","italy","ivory Coast","jamaica","jan Mayen","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macao","madagascar","malawi","malaysia","maldives","mali","malta","marshall Islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new Caledonia","new Zealand","nicaragua","niger","nigeria","niue","norfolk Island","northern Cyprus","northern Mariana Islands","northKorea","north Macedonia","norway","oman","pakistan","palau","palestine","panama","papua New Guinea","paraguay","peru","philippines","pitcairn Islands","poland","portugal","qatar","republic of the Congo","reunion","romania","russia","rwanda","saba","saint Barthelemy","saint Helena","saint Kitts and Nevis","saint Lucia","saint Martin","saint Pierre and Miquelon","saint Vincent and the Grenadines","samoa","san Marino","sao Tome and Principe","saudi Arabia","senegal","serbia","seychelles","sierra Leone","singapore","sint Eustatius","sint Maarten","slovakia","slovenia","solomon Islands","somalia","south Africa","south Georgia and the South Sandwich Islands","south Korea","south Ossetia","south Sudan","spain","sri Lanka","sudan","suriname","svalbard","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tokelau","tonga","transnistria","trinidad and Tobago","tunisia","turkey","turkmenistan","turks and Caicos","tuvalu","uganda","ukraine","united Arab Emirates","united Kingdom","united States","united States Virgin Islands","uruguay","uzbekistan","vanuatu","vatican City","venezuela","vietnam","wallis and Futuna","western Sahara","yemen","zambia","zimbabwe"]
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