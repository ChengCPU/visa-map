import { useState, useMemo, useContext, useEffect, useCallback, MutableRefObject } from 'react'
import { LanguageContext } from '../logic/context/LanguageContext'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import Head from 'next/head'
import Script from 'next/script'
import Switch from '@mui/material/Switch'
import Country from '../components/Table/Country'
import VisaPolicy from '../components/Table/VisaPolicy'
import TablePassport from '../components/Table/TablePassport'
import AdTable from '../components/Ads/AdTable'
const dataEN:string[] = ['abkhazia','afghanistan','albania','algeria','american Samoa','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','aruba','ascension Island','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosnia and Herzegovina','botswana','brazil','british Indian Ocean Territory','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','cook Islands','costa Rica','croatia','cuba','curacao','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','falkland Islands','faroe Islands','fiji','finland','france','french Guiana','french Polynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','jan Mayen','japan','jeju','jordan','kazakhstan','kenya','kiribati','kosovo','kurdistan','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Caledonia','new Zealand','nicaragua','niger','nigeria','niue','northern Cyprus','northern Mariana Islands','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','pitcairn Islands','poland','portugal','qatar','republic of the Congo','reunion','romania','russia','rwanda','saba','saint Barthelemy','saint Helena','saint Kitts and Nevis','saint Lucia','saint Martin','saint Pierre and Miquelon','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','sint Eustatius','sint Maarten','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidad and Tobago','tristan Da Cunha','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','united States Virgin Islands','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','wallis and Futuna','western Sahara','yemen','zambia','zimbabwe','Highlight']
const dataES:string[] = ['abjasia','afganistán','albania','argelia','samoa Americana','andorra','angola','anguila','antigua y Barbuda','argentina','armenia','aruba','isla Ascencion','australia','austria','azerbaiyán','bahamas','bahrein','bangladesh','barbados','bielorrusia','bélgica','belice','benín','bermudas','bután','bolivia','bonaire','bosnia y Herzegovina','botswana','brasil','territorio Británico del Océano Índico','islas Vírgenes Británicas ','brunei','bulgaria','burkina Faso','burundi','camboya','camerún','canadá','cabo Verde','islas Caimán','república Centroafricana','chad','chile','china','colombia','comoras','islas Cook','costa Rica','croacia','cuba','curazao','chipre','república Checa','república Democrática del Congo','dinamarca','yibuti','domenica','república Dominicana','timor-Leste','ecuador','egipto','el Salvador','guinea Ecuatorial','eritrea','estonia','esuatini','etiopía','islas Malvinas','islas Feroe','fiyi','finlandia','francia','guayana Francesa','polinesia Francesa','gabón','gambia','georgia','alemania','ghana','gibraltar','grecia','groenlandia','granada','guadalupe','guam','guatemala','guinea','guinea Bissau','guyana','haití','honduras','hong Kong','hungría','islandia','india','indonesia','irán','irak','irlanda','israel','italia','costa de marfil','jamaica','jan Mayen','japón','jeju','jordania','kazajstán','kenia','kiribati','kosovo','curdistán','kuwait','kirguistán','laos','letonia','líbano','lesotho','liberia','libia','liechtenstein','lituania','luxemburgo','macao','madagascar','malawi','malasia','maldivas','mali','malta','islas Marshall','martinica','mauritania','mauricio','mayotte','méjico','micronesia','moldavia','mónaco','mongolia','montenegro','montserrat','marruecos','mozambique','myanmar','namibia','nauru','nepal','países Bajos','nueva Caledonia','nueva Zelanda','nicaragua','níger','nigeria','niue','chipre del norte','islas Marianas del Norte','corea del Norte','macedonia del Norte','noruega','omán','pakistán','palau','palestina','panamá','papúa Nueva Guinea','paraguay','perú','filipinas','islas Pitcairn','polonia','portugal','catar','república del Congo','réunion','rumania','rusia','ruanda','saba','san Bartolomé','santa Elena','san Cristóbal y Nieves','santa Lucía','san Martín','san Pedro y Miquelón','san Vicente y las Granadinas','samoa','san Marino','santo Tomé y Príncipe','arabia Saudita','senegal','serbia','seychelles','sierra Leona','singapur','san Eustaquio','san Martín','slovaquia','eslovenia','islas Solomon','somalia','somalilandia','sudáfrica','corea del Sur','osetia del Sur','sudán del Sur','españa','sri Lanka','sudán','suriname','svalbard','suecia','suiza','siria','taiwán','tayikistán','tanzania','tailandia','togo','tokelau','tonga','transnistria','trinidad y Tobago','tristán De Cunha','túnez','turquía','turkmenistán','islas Turcas y Caicos','tuvalu','uganda','ucrania','emiratos Árabes Unidos','reino Unido','estados Unidos','islas Vírgenes de los Estados Unidos','uruguay','uzbekistan','vanuatu','santa Sede','venezuela','vietnam','wallis y Futuna','sahara Occidental','yemen','zambia','zimbabue','Destacar']
const dataPT:string[] = ['abcázia','afeganistão','albânia','argélia','samoa Americana','andorra','angola','anguila','antígua e Barbuda','argentina','arménia','aruba','ilha Da Ascensão','austrália','áustria','azerbaijão','baamas','baharem','bangladesh','barbados','bielorrússia','bélgica','belize','benim','bermudas','butão','bolívia','bonaire','bósnia e Herzegovina','botsuana','brasil','território Britânico do Oceano Índico','ilhas Virgens Britânicas','brunei','bulgária','burkina Faso','burundi','camboja','camarões','canadá','cabo Verde','ilhas Caymans','república Centro-Africana','chade','chile','china','colômbia','comores','ilhas Cook','costa Rica','croácia','cuba','curaçau','chipre','república Checa','república Democrática do Congo ','dinamarca','djibouti','dominica','república Dominicana','timor-Leste','equador','egipto','el Salvador','guiné Equatorial','eritreia','estónia','esuatini','etiópia','ilhas Malvinas','ilhas Faroé','fídji','finlândia','frança','guiana Francesa','polinésia Francesa','gabão','gâmbia','geórgia','alemanha','gana','gibraltar','grécia','gronelândia','granada','guadalupe','guam','guatemala','guiné-Conakri','guiné-Bissau','guiana','haiti','honduras','hong Kong','hungria','islândia','índia','indonésia','irão','iraque','irlanda','israel','itália','costa do Marfim','jamaica','jan Mayen','japão','jeju','jordânia','cazaquistão','quénia','kiribati','kosovo','curdistão','koweit','quirguistão','laos','letónia','líbano','lesoto','libéria','líbia','liechtenstein','lituânia','luxemburgo','macau','madagáscar','malaui','malásia','maldivas','mali','malta','ilhas Marshalls','martinica','mauritânia','maurícias','mayotte','méxico','micronésia','moldávia','mónaco','mongólia','montenegro','monserrate','marrocos','moçambique','myanmar','namíbia','nauru','nepal','países Baixos','nova Caledônia','nova Zelândia','nicarágua','níger','nigéria','niue','chipre del Norte','marianas Setentrionais','coreia do Nortea','macedónia do Norte','noruega','oman','paquistão','palau','palestina','panamá','papua-Nova Guiné','paraguai','peru','filipinas','ilhas Pitcairn','polónia','portugal','qatar','república do Congo','reunião','roménia','rússia','ruanda','saba','são Bartolomeu','santa Helena','são Cristóvão e Neves','santa Lúcia','são Martinho','são Pedro e Miquelão','são Vicente e as Granadinas','samoa','san Marino','são Tomé e Príncipe','arábia Saudita','senegal','sérvia','seychelles','serra Leoa','singapura','santo Eustáquio','são Martinho','eslováquia','eslovénia','ilhas Salomão','somália','somalilândia','áfrica do Sul','coreia do Sul','ossétia do Sul','sudão do Sul','espanha','sri Lanka','sudão','suriname','svalbard','suécia','suíça','síria','taiwan','tajiquistão','tanzânia','tailândia','togo','tokelau','tonga','transdniestre','trinidad e Tobago','tristão Da Cunha','tunísia','turquia','turquemenistão','turcas e Caicos ','tuvalu','uganda','ucrânia','emiratos Árabes Unidos','reino Unido','estados Unidos da América','ilhas Virgens Americanas','uruguai','uzbequistão','vanuatu','santa Sé','venezuela','vietnã','wallis e Futuna','saara Ocidental','iémen','zâmbia','zimbabwe','Destaque']
const dataFR:string[] = ['abkhazie','afghanistan','albanie','algérie','samoa Américaines','andorre','angola','anguilla','antigua-et-Barbuda','argentine','arménie','aruba','île De L\'ascension','australie','autriche','azerbaïdjan','bahamas','bahreïn','bangladesh','barbade','biélorussie','belgique','belize','bénin','bermudes','bhoutan','bolivie','bonaire','bosnie-Herzégovine','botswana','brésil','territoire britannique de l\'océan Indien','Îles Vierges britanniques','brunei','bulgarie','burkina Faso','burundi','cambodge','cameroun','canada','cap-Vert','îles Caïmans','république centrafricaine','tchad','chili','chine','colombie','comores','îles Cook','costa Rica','croatie','cuba','curacao','chypre','république tchèque','république Démocratique du Congo','danemark','djibouti','dominique','république dominicaine','timor Oriental','équateur','égypte','salvador','guinée équatoriale','érythrée','estonie','eswatini','éthiopie','îles Malouines','îles Féroé','fidji','finlande','france','guyane','polynésie française','gabon','gambie','géorgie','allemagne','ghana','gibraltar','grèce','groenland','grenade','guadeloupe','guam','guatemala','guinée','guinée-Bissau','guyana','haïti','honduras','hong Kong','hongrie','islande','inde','indonésie','iran','irak','irlande','israël','italie','côte d\'Ivoire','jamaïque','jan Mayen','japon','jeju','jordanie','kazakhstan','kenya','kiribati','kosovo','kurdistan','koweït','kirghizistan','laos','lettonie','liban','lesotho','liberia','libye','liechtenstein','lituanie','luxembourg','macao','madagascar','malawi','malaisie','maldives','mali','malte','îles Marshall','martinique','mauritanie','maurice','mayotte','mexique','micronésie','moldavie','monaco','mongolie','monténégro','montserrat','maroc','mozambique','myanmar','namibie','nauru','népal','pays-Bas','nouvelle-Calédonie','nouvelle-Zélande','nicaragua','niger','nigeria','niue','chypre du Nord','îles Mariannes du Nord','corée du Nord','macédoine du Nord','norvège','oman','pakistan','palaos','palestina','panamá','papouasie-Nouvelle-Guinée','paraguay','pérou','philippines','îles Pitcairn','pologne','portugal','qatar','république du Congo','la Réunion','roumanie','russie','rouanda','saba','saint-Barthélemy','sainte-Hélène','saint-Christophe-et-Niévès','sainte-Lucie','saint-Martin','saint-Pierre-et-Miquelon','saint-Vincent-et-les Grenadines','samoa','saint-Marin','são Tomé-et-Príncipe','arabie Saoudite','sénégal','serbie','seychelles','sierra Leone','singapour','saint Eustache','st Martin','slovaquie','slovénie','îles Salomon','somalie','somaliland','afrique du Sud','corée du Sud','ossétie du Sud','soudan du Sud','espagne','sri Lanca','soudan','suriname','svalbard','suède','suisse','syrie','taïwan','tadjikistan','tanzanie','thaïlande','togo','tokelau','tonga','transnistrie','trinité-et-Tobago','tristan Da Cunha','tunisie','turquie','turkménistan','îles Turques-et-Caïques','tuvalu','ouganda','ukraine','émirats arabes unis','royaume-Uni','états-Unis d\'Amérique','îles Vierges des États-Unis','uruguay','ouzbékistan','vanuatu','saint-Siège','venezuela','viêt Nam','wallis-et-Futuna','sahara Occidental','yémen','zambie','zimbábue','Souligner']
const dataHR:string[] = ['abhazija','afganistan','albanija','alžir','američka Samoa','andora','angola','angvila','antigua i Barbuda','argentina','armenija','aruba','otok Ascension','australija','austrija','azerbajdžan','bahami','bahrein','bangladeš','barbados','bjelarus','belgija','belize','benin','bermudi','butan','bolivija','bonaire','bosna i hercegovina','bocvana','brazil','britanski Indijskooceanski Teritorij','britanski Djevičanski Otoci','brunej','bugarska','burkina Faso','burundi','kambodža','kamerun','kanada','zelenortski Otoci','kajmanski Otoci','srednjoafrička Republika','čad','čile','kina','kolumbija','komori','cookovo Otočje','kostarika','hrvatska','kuba','curaçao','cipar','češka Republika','demokratska Republika Kongo','danska','džibuti','dominika','dominikanska Republika','istočni Timor','ekvador','egipat','el Salvador','ekvatorska Gvineja','eritreja','estonija','esvatini','etiopija','falklandski Otoci','farski Otoci','fidži','finska','francuska','francuska Gvajana','francuska Polinezija','gabon','gambija','gruzija','njemačka','gana','gibraltar','grčka','grenland','grenada','gvadalupa','guam','gvatemala','gvineja','gvineja Bisau','gvajana','haiti','honduras','hong Kong','mađarska','island','indija','indonezija','iran','irak','irska','izrael','italija','obala bjelokosti','jamajka','jan Mayen','japan','jeju','jordan','kazahstan','kenija','kiribati','kosovo','kurdistan','kuvajt','kirgistan','laos','latvija','libanon','lesoto','liberija','libija','lihtenštajn','litva','luksemburg','makao','madagaskar','malavi','malezija','maldivi','mali','malta','maršalovi Otoci','martinik','mauritanija','mauricijus','mayotte','meksiko','mikronezija','moldova','monako','mongolija','crna gora','montserrat','maroko','mozambik','mjanmar','namibija','nauru','nepal','nizozemska','nova Kaledonija','novi Zeland','nikaragva','niger','nigerija','niue','sjeverni Cipar','sjevernomarijanski Otoci','sjeverna Koreja','sjeverna Makedonija','norveška','oman','pakistan','palau','palestina','panama','papua Nova Gvineja','paragvaj','peru','filipini','pitcairnovo Otočje','poljska','portugal','katar','republika Kongo','réunion','rumunjska','rusija','ruanda','saba','sveti Bartolomej','sveta Helena','sveti Kitts i Nevis','sveta Lucija','sveti Martin','sveti Petar i Mikelon','sveti Vincent i Grenadini','samoa','san Marino','sveti Toma i Princip','saudijska Arabija','senegal','srbija','sejšeli','sijera Leone','singapur','sveti Eustahije','sveti Martin','slovačka','slovenija','solomonski Otoci','somalija','somaliland','južna Afrika','južna Koreja','južna Osetija','južni Sudan','španjolska','šri lanka','sudan','surinam','svalbard','švedska','švicarska','sirija','tajvan','tadžikistan','tanzanija','tajland','togo','tokelau','tonga','pridnjestrovlje','trinidad i Tobago','tristan Da Cunha','tunis','turska','turkmenistan','otoci Turks i Caicos','tuvalu','uganda','ukrajina','ujedinjeni Arapski Emirati','ujedinjena Kraljevina','sjedinjene Američke Države','američki Djevičanski Otoci','urugvaj','uzbekistan','vanuatu','vatikan','venezuela','vijetnam','wallis i Futuna','zapadna Sahara','jemen','zambija','zimbabve','Istaknuti']
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JJ','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇰🇷','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🏳️','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
const horizontalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]
const verticalColumn: number[] = dataEN.slice(0, -1).map((_, index) => index)
const dataSize = dataEN.length - 1
const falseArray = new Array(ISOcodes.length).fill(false)
let tempTableDiffRef = []
interface Props {
	selectArrayRef:MutableRefObject<(null|string)[]>;
  assignedColorsRef:MutableRefObject<{[key:string]:number}[]>;
  setSelectorLoad:Function;
  assignedVisaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  tableDiffRef:MutableRefObject<number[]>;
}

const Table:React.FC<Props> = ({ selectArrayRef, assignedColorsRef, setSelectorLoad, assignedVisaDurationRef, tableDiffRef }) => {

  useEffect(() => {
    setSelectorLoad(true)
  }, [])
  
  const dimensions = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return dataEN
      case '🇪🇸ES': return dataES
      case '🇵🇹PT': return dataPT
      case '🇫🇷FR': return dataFR
      case '🇭🇷HR': return dataHR
    }
  }, [language])

  const [checked, setChecked] = useState<boolean>(true)
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if(checked) {
      tempTableDiffRef = tableDiffRef.current
      tableDiffRef.current = falseArray
    } else {
      tableDiffRef.current = tempTableDiffRef
    }
    
    setChecked(event.target.checked)
  }, [checked])

  const renderPassports = useCallback((horizontalColumn: number[]) => {
    return horizontalColumn.map(horizontalColumn => (selectArrayRef.current[horizontalColumn] != null || horizontalColumn == 0) && <th key={horizontalColumn}><TablePassport selectArrayRef={selectArrayRef} horizontalColumn={horizontalColumn}/></th>)
  }, [])

  const renderTables = useCallback((verticalColumn:number[], horizontalColumn:number[], flags:string[]) => {
    return verticalColumn.map(verticalColumn =>
    <tr className={'subRow'} key={verticalColumn}>
      <style jsx>{`
        .subRow {
          background-color: ${tableDiffRef.current[verticalColumn] ? '#B3BD00;' : '#333333;'}
        }
      `}</style>
      <Country country={languageCaculation[verticalColumn]} flag={flags[verticalColumn]} />
      {horizontalColumn.map(horizontalColumn =>
        (selectArrayRef.current[horizontalColumn] != null || horizontalColumn == 0) &&
        <VisaPolicy
          key={horizontalColumn}
          assignedColorsRef={assignedColorsRef}
          selectArrayRef={selectArrayRef}
          verticalColumn={verticalColumn}
          horizontalColumn={horizontalColumn}
          assignedVisaDurationRef={assignedVisaDurationRef}
        />
      )}
    </tr>
    )
  }, [language])

  return (
	<>
  <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147951612524944" crossOrigin="anonymous"></Script>
  <Head>
    <title>Visa-map</title>
    <link rel="shortcut icon" href="/favicon.png" />
  </Head>
	<br />
	<br />
	<br />
  <div className={'ad'}>
    <style jsx>{`
      .ad {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  <AdTable />
  </div>
	<div className={'container'}>
    <style jsx>{`
      .container {
        overflow-x: scroll;
        ${(dimensions.width > 800) &&
        `
        display: flex;
        align-items: center;
        justify-content: center;
        `
        }
        position: static;
        border-spacing: 0;
      }
      .ad {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .text {
        color: white;
      }
    `}</style>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
				<tr>
          <th>
            <p className={'text'}>{languageCaculation[dataSize]}</p>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{'aria-label':'controlled'}}
            />
          </th>
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