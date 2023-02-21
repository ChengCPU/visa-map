import Country from '../components/Table/Country';
import VisaPolicy from '../components/Table/VisaPolicy';
import TablePassport from '../components/Table/TablePassport';
import { LanguageContext } from '../components/context/LanguageContext';
import { useContext } from 'react';
import styles from '../styles/Table.module.css';
interface Props {
	selectArray:null | string[];
  assignedColors:object[];
}
const countriesEN:string[] = ["abkhazia","afghanistan", "albania","algeria","american Samoa","andorra","angola","anguilla","antigua and Barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","bonaire","bosnia and Herzegovina","botswana","bouvet Island","brazil","british Indian Ocean Territory","british Virgin Islands","brunei","bulgaria","burkina Faso","burundi","cambodia","cameroon","canada","cape Verde","cayman Islands","central African Republic","chad","chile","china","colombia","comoros","cook Islands","costa Rica","croatia","cuba","curacao","cyprus","czech Republic","democratic Republic of the Congo","denmark","djibouti","dominica","dominican Republic","east Timor","ecuador","egypt","el Salvador","equatorial Guinea","eritrea","estonia","eswatini","ethiopia","falkland Islands","faroe Islands","fiji","finland","france","french Guiana","french Polynesia","gabon","gambia","georgia","germany","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea Bissau","guyana","haiti","heard Island and McDonald Islands","honduras","hong Kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle of Man","israel","italy","ivory Coast","jamaica","jan Mayen","japan","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macao","madagascar","malawi","malaysia","maldives","mali","malta","marshall Islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new Caledonia","new Zealand","nicaragua","niger","nigeria","niue","norfolk Island","northern Cyprus","northern Mariana Islands","north Korea","north Macedonia","norway","oman","pakistan","palau","palestine","panama","papua New Guinea","paraguay","peru","philippines","pitcairn Islands","poland","portugal","qatar","republic of the Congo","reunion","romania","russia","rwanda","saba","saint Barthelemy","saint Helena","saint Kitts and Nevis","saint Lucia","saint Martin","saint Pierre and Miquelon","saint Vincent and the Grenadines","samoa","san Marino","sao Tome and Principe","saudi Arabia","senegal","serbia","seychelles","sierra Leone","singapore","sint Eustatius","sint Maarten","slovakia","slovenia","solomon Islands","somalia","south Africa","south Georgia and the South Sandwich Islands","south Korea","south Ossetia","south Sudan","spain","sri Lanka","sudan","suriname","svalbard","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tokelau","tonga","transnistria","trinidad and Tobago","tunisia","turkey","turkmenistan","turks and Caicos","tuvalu","uganda","ukraine","united Arab Emirates","united Kingdom","united States","united States Virgin Islands","uruguay","uzbekistan","vanuatu","vatican City","venezuela","vietnam","wallis and Futuna","western Sahara","yemen","zambia","zimbabwe"]
const countriesES:string[] = ["abjasia","afganistán", "albania","argelia","samoa Americana","andorra","angola","anguila","antigua y Barbuda","argentina","armenia","aruba","australia","austria","azerbaiyán","bahamas","bahrein","bangladesh","barbados","bielorrusia","bélgica","belice","benín","bermudas","bután","bolivia","bonaire","bosnia y Herzegovina","botswana","isla Bouvet","brasil","territorio Británico del Océano Índico","islas Vírgenes Británicas ","brunei","bulgaria","burkina Faso","burundi","camboya","camerún","canadá","cabo Verde","islas Caimán","república Centroafricana","chad","chile","china","colombia","comoras","islas Cook","costa Rica","croacia","cuba","curazao","chipre","república Checa","república Democrática del Congo","dinamarca","yibuti","domenica","república Dominicana","timor-Leste","ecuador","egipto","el Salvador","guinea Ecuatorial","eritrea","estonia","esuatini","etiopía","islas Malvinas","islas Feroe","fiyi","finlandia","francia","guayana Francesa","polinesia Francesa","gabón","gambia","georgia","alemania","ghana","gibraltar","grecia","groenlandia","granada","guadalupe","guam","guatemala","guernsey","guinea","guinea Bissau","guyana","haití","islas Heard y McDonald","honduras","hong Kong","hungría","islandia","india","indonesia","irán","irak","irlanda","isla de Man","israel","italia","costa de marfil","jamaica","jan Mayen","japón","jersey","jordania","kazajstán","kenia","kiribati","kosovo","kuwait","kirguistán","laos","letonia","líbano","lesotho","liberia","libia","liechtenstein","lituania","luxemburgo","macao","madagascar","malawi","malasia","maldivas","mali","malta","islas Marshall","martinica","mauritania","mauricio","mayotte","méjico","micronesia","moldavia","mónaco","mongolia","montenegro","montserrat","marruecos","mozambique","myanmar","namibia","nauru","nepal","países Bajos","nueva Caledonia","nueva Zelanda","nicaragua","níger","nigeria","niue","isla norfolk","chipre del norte","islas Marianas del Norte","corea del Norte","macedonia del Norte","noruega","omán","pakistán","palau","palestina","panamá","papúa Nueva Guinea","paraguay","perú","filipinas","islas Pitcairn","polonia","portugal","catar","república del Congo","réunion","rumania","rusia","ruanda","saba","san Bartolomé","santa Elena","san Cristóbal y Nieves","santa Lucía","san Martín","san Pedro y Miquelón","san Vicente y las Granadinas","samoa","san Marino","santo Tomé y Príncipe","arabia Saudita","senegal","serbia","seychelles","sierra Leona","singapur","san Eustaquio","san Martín","slovaquia","eslovenia","islas Solomon","somalia","sudáfrica","islas Georgias del Sur y Sandwich del Sur","corea del Sur","osetia del Sur","sudán del Sur","españa","sri Lanka","sudán","suriname","svalbard","suecia","suiza","siria","taiwán","tayikistán","tanzania","tailandia","togo","tokelau","tonga","transnistria","trinidad y Tobago","túnez","turquía","turkmenistán","islas Turcas y Caicos","tuvalu","uganda","ucrania","emiratos Árabes Unidos","reino Unido","estados Unidos","islas Vírgenes de los Estados Unidos","uruguay","uzbekistan","vanuatu","santa Sede","venezuela","vietnam","wallis y Futuna","sahara Occidental","yemen","zambia","zimbabue"]
const countriesPT:string[] = ["abcázia","afeganistão", "albânia","argélia","samoa Americana","andorra","angola","anguila","antígua e Barbuda","argentina","arménia","aruba","austrália","áustria","azerbaijão","baamas","baharem","bangladesh","barbados","bielorrússia","bélgica","belize","benim","bermudas","butão","bolívia","bonaire","bósnia e Herzegovina","botsuana","ilha Bouvet","brasil","território Britânico do Oceano Índico","ilhas Virgens Britânicas","brunei","bulgária","burkina Faso","burundi","camboja","camarões","canadá","cabo Verde","ilhas Caymans","república Centro-Africana","chade","chile","china","colômbia","comores","ilhas Cook","costa Rica","croácia","cuba","curaçau","chipre","república Checa","república Democrática do Congo ","dinamarca","djibouti","dominica","república Dominicana","timor-Leste","equador","egipto","el Salvador","guiné Equatorial","eritreia","estónia","esuatini","etiópia","ilhas Malvinas","ilhas Faroé","fídji","finlândia","frança","guiana Francesa","polinésia Francesa","gabão","gâmbia","geórgia","alemanha","gana","gibraltar","grécia","gronelândia","granada","guadalupe","guam","guatemala","guernsey","guiné-Conakri","guiné-Bissau","guiana","haiti","ilha Heard e Ilhas McDonald","honduras","hong Kong","hungria","islândia","índia","indonésia","irão","iraque","irlanda","ilha de Man","israel","itália","costa do Marfim","jamaica","jan Mayen","japão","jersey","jordânia","cazaquistão","quénia","kiribati","kosovo","koweit","quirguistão","laos","letónia","líbano","lesoto","libéria","líbia","liechtenstein","lituânia","luxemburgo","macau","madagáscar","malaui","malásia","maldivas","mali","malta","ilhas Marshalls","martinica","mauritânia","maurícias","mayotte","méxico","micronésia","moldávia","mónaco","mongólia","montenegro","monserrate","marrocos","moçambique","myanmar","namíbia","nauru","nepal","países Baixos","nova Caledônia","nova Zelândia","nicarágua","níger","nigéria","niue","ilha Norfolk","chipre del Norte","marianas Setentrionais","coreia do Nortea","macedónia do Norte","noruega","oman","paquistão","palau","palestina","panamá","papua-Nova Guiné","paraguai","peru","filipinas","ilhas Pitcairn","polónia","portugal","qatar","república do Congo","reunião","roménia","rússia","ruanda","saba","são Bartolomeu","santa Helena","são Cristóvão e Neves","santa Lúcia","são Martinho","são Pedro e Miquelão","são Vicente e as Granadinas","samoa","san Marino","são Tomé e Príncipe","arábia Saudita","senegal","sérvia","seychelles","serra Leoa","singapura","santo Eustáquio","são Martinho","eslováquia","eslovénia","ilhas Salomão","somália","áfrica do Sul","ilhas Geórgia do Sul e Sandwich do Sul","coreia do Sul","ossétia do Sul","sudão do Sul","espanha","sri Lanka","sudão","suriname","svalbard","suécia","suíça","síria","taiwan","tajiquistão","tanzânia","tailândia","togo","tokelau","tonga","transdniestre","trinidad e Tobago","tunísia","turquia","turquemenistão","turcas e Caicos ","tuvalu","uganda","ucrânia","emiratos Árabes Unidos","reino Unido","estados Unidos da América","ilhas Virgens Americanas","uruguai","uzbequistão","vanuatu","santa Sé","venezuela","vietnã","wallis e Futuna","saara Ocidental","iémen","zâmbia","zimbabwe"]
const countriesFR:string[] = ["abkhazie","afghanistan", "albanie","algérie","samoa Américaines","andorre","angola","anguilla","antigua-et-Barbuda","argentine","arménie","aruba","australie","autriche","azerbaïdjan","bahamas","bahreïn","bangladesh","barbade","biélorussie","belgique","belize","bénin","bermudes","bhoutan","bolivie","bonaire","bosnie-Herzégovine","botswana","ile Bouvet","brésil","territoire britannique de l'océan Indien","Îles Vierges britanniques","brunei","bulgarie","burkina Faso","burundi","cambodge","cameroun","canada","cap-Vert","îles Caïmans","république centrafricaine","tchad","chili","chine","colombie","comores","îles Cook","costa Rica","croatie","cuba","curacao","chypre","république tchèque","république Démocratique du Congo","danemark","djibouti","dominique","république dominicaine","timor Oriental","équateur","égypte","salvador","guinée équatoriale","érythrée","estonie","eswatini","éthiopie","îles Malouines","îles Féroé","fidji","finlande","france","guyane","polynésie française","gabon","gambie","géorgie","allemagne","ghana","gibraltar","grèce","groenland","grenade","guadeloupe","guam","guatemala","guernesey","guinée","guinée-Bissau","guyana","haïti","îles Heard-et-MacDonald","honduras","hong Kong","hongrie","islande","inde","indonésie","iran","irak","irlande","île de Man","israël","italie","côte d'Ivoire","jamaïque","jan Mayen","japon","jersey","jordanie","kazakhstan","kenya","kiribati","kosovo","koweït","kirghizistan","laos","lettonie","liban","lesotho","liberia","libye","liechtenstein","lituanie","luxembourg","macao","madagascar","malawi","malaisie","maldives","mali","malte","îles Marshall","martinique","mauritanie","maurice","mayotte","mexique","micronésie","moldavie","monaco","mongolie","monténégro","montserrat","maroc","mozambique","myanmar","namibie","nauru","népal","pays-Bas","nouvelle-Calédonie","nouvelle-Zélande","nicaragua","niger","nigeria","niue","île Norfolk","chypre du Nord","îles Mariannes du Nord","corée du Nord","macédoine du Nord","norvège","oman","pakistan","palaos","palestina","panamá","papouasie-Nouvelle-Guinée","paraguay","pérou","philippines","îles Pitcairn","pologne","portugal","qatar","république du Congo","la Réunion","roumanie","russie","rouanda","saba","saint-Barthélemy","sainte-Hélène","saint-Christophe-et-Niévès","sainte-Lucie","saint-Martin","saint-Pierre-et-Miquelon","saint-Vincent-et-les Grenadines","samoa","saint-Marin","são Tomé-et-Príncipe","arabie Saoudite","sénégal","serbie","seychelles","sierra Leone","singapour","saint Eustache","st Martin","slovaquie","slovénie","îles Salomon","somalie","afrique du Sud","géorgie du Sud-et-les îles Sandwich du Sud'","corée du Sud","ossétie du Sud","soudan du Sud","espagne","sri Lanca","soudan","suriname","svalbard","suède","suisse","syrie","taïwan","tadjikistan","tanzanie","thaïlande","togo","tokelau","tonga","transnistrie","trinité-et-Tobago","tunisie","turquie","turkménistan","îles Turques-et-Caïques","tuvalu","ouganda","ukraine","émirats arabes unis","royaume-Uni","états-Unis d'Amérique","îles Vierges des États-Unis","uruguay","ouzbékistan","vanuatu","saint-Siège","venezuela","viêt Nam","wallis-et-Futuna","sahara Occidental","yémen","zambie","zimbábue"]
const flags:string[] = ["🏳️","🇦🇫","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇶","🇧🇦","🇧🇼","🏳️","🇧🇷","🏳️","🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇨🇻","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇴","🇰🇲","🇨🇰","🇨🇷","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇨🇩","🇩🇰","🇩🇯","🇩🇲","🇩🇴","🇹🇱","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇸🇿","🇪🇹","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫","🇵🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳","🇬🇼","🇬🇾","🇭🇹","🇭🇲","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇨🇮","🇯🇲","🇸🇯","🇯🇵","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮","🇱🇹","🇱🇺","🇲🇴","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽","🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇳🇺","🇳🇫","🏳️","🇲🇵","🇰🇵","🇲🇰","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭","🇵🇳","🇵🇱","🇵🇹","🇶🇦","🇨🇬","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🏳️","🇧🇱","🇸🇭","🇰🇳","🇱🇨","🇲🇫","🇵🇲","🇻🇨","🇼🇸","🇸🇲","🇸🇹","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱","🇸🇬","🏳️","🇸🇽","🇸🇰","🇸🇮","🇸🇧","🇸🇴","🇿🇦","🇬🇸","🇰🇷","🏳️","🇸🇸","🇪🇸","🇱🇰","🇸🇩","🇸🇷","🇸🇯","🇸🇪","🇨🇭","🇸🇾","🇹🇼","🇹🇯","🇹🇿","🇹🇭","🇹🇬","🇹🇰","🇹🇴","🏳️","🇹🇹","🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🇺🇸","🇻🇮","🇺🇾","🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇿🇲","🇿🇼"]
const horizontalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]
let verticalColumn:number[] = []
for(let countryCount = 0; countryCount < countriesEN.length; countryCount++) {
  verticalColumn.push(countryCount)
}

const Table:React.FC<Props> = ({ selectArray, assignedColors }) => {

  const { language } = useContext(LanguageContext)

  const languageCaculation = () => {
    switch(language){
      case '🇬🇧EN': return countriesEN
      case '🇪🇸ES': return countriesES
      case '🇵🇹PT': return countriesPT
      case '🇫🇷FR': return countriesFR
    }
  }

  const renderPassports = (horizontalColumn: number[]) => {
    return horizontalColumn.map(horizontalColumn => (selectArray[horizontalColumn] != null || horizontalColumn == 0) ? <th key={horizontalColumn}><TablePassport selectArray={selectArray} horizontalColumn={horizontalColumn}/></th> : null)
  }

  const renderTables = (verticalColumn:number[], horizontalColumn:number[], flags:string[]) => {
    return verticalColumn.map(verticalColumn =>
    <tr className={styles.subRow} key={verticalColumn}>
      <Country country={languageCaculation()[verticalColumn]} flag={flags[verticalColumn]} />
      {horizontalColumn.map(horizontalColumn =>
        (selectArray[horizontalColumn] != null || horizontalColumn == 0) ?
        <VisaPolicy
          key={horizontalColumn}
          assignedColors={assignedColors}
          selectArray={selectArray}
          verticalColumn={verticalColumn}
          horizontalColumn={horizontalColumn}
        />
        : null
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