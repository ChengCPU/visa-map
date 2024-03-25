import { useContext } from 'react'
import { LanguageContext } from '../logic/context/LanguageContext'
import Rectangle from './Map/Legend/Rectangle'
const countries:string[] = ['abkhazia','afghanistan','albania','algeria','americanSamoa','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','aruba','ascensionIsland','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosniaAndHerzegovina','botswana','brazil','britishIndianOceanTerritory','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','cookIslands','costaRica','croatia','cuba','curacao','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','falklandIslands','faroeIslands','fiji','finland','france','frenchGuiana','frenchPolynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','janMayen','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kurdistan','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newCaledonia','newZealand','nicaragua','niger','nigeria','niue','northernCyprus','northernMarianaIslands','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','pitcairnIslands','poland','portugal','qatar','republicOfTheCongo','reunion','romania','russia','rwanda','saba','saintBarthelemy','saintHelena','saintKittsAndNevis','saintLucia','saintMartin','saintPierreAndMiquelon','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','sintEustatius','sintMaarten','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidadAndTobago','tristanDaCunha','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','unitedStatesVirginIslands','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','wallisAndFutuna','westernSahara','yemen','zambia','zimbabwe']
const ISOcodesLowercase:string[] = ['ab','af','al','dz','as','ad','ao','ai','ag','ar','am','aw','ac','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','xb','ba','bw','br','io','vg','bn','bg','bf','bi','kh','cm','ca','cv','ky','cf','td','cl','cn','co','km','ck','cr','hr','cu','cw','cy','cz','cd','dk','dj','dm','do','tl','ec','eg','sv','gq','er','ee','sz','et','fk','fo','fj','fi','fr','gf','pf','ga','gm','ge','de','gh','gi','gr','gl','gd','gp','gu','gt','gn','gw','gy','ht','hn','hk','hu','is','in','id','ir','iq','ie','il','it','ci','jm','xm','jp','jo','kz','ke','ki','xk','kx','kw','kg','la','lv','lb','ls','lr','ly','li','lt','lu','mo','mg','mw','my','mv','ml','mt','mh','mq','mr','mu','yt','mx','fm','md','mc','mn','me','ms','ma','mz','mm','na','nr','np','nl','nc','nz','ni','ne','ng','nu','rc','mp','kp','mk','no','om','pk','pw','ps','pa','pg','py','pe','ph','pn','pl','pt','qa','cg','re','ro','ru','rw','xs','bl','sh','kn','lc','mf','pm','vc','ws','sm','st','sa','sn','rs','sc','sl','sg','xe','sx','sk','si','sb','so','xx','za','kr','xo','ss','es','lk','sd','sr','xv','se','ch','sy','tw','tj','tz','th','tg','tk','to','xt','tt','tx','tn','tr','tm','tc','tv','ug','ua','ae','gb','us','vi','uy','uz','vu','va','ve','vn','wf','eh','ye','zm','zw']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🏳️','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
const policyEN = ['Home country', 'Permit required', 'OECS freedom of movement', 'MERCOSUR freedom of movement', 'EU freedom of movement', 'GCC freedom of movement', 'Freedom of movement', 'Visa-free', 'Visa on arrival/E-visa', 'Visa on arrival', 'E-visa', 'Special permit/Police check', 'Simplified visa', 'Confirmation required', 'Visa required']
const policyES = ['País de origen', 'Permiso requerido', 'OECS libertad de movimiento', 'MERCOSUR libertad de movimiento', 'EU libertad de movimiento', 'GCC libertad de movimiento', 'Libertad de movimiento', 'Visado libre', 'Visado a llegada/Visado electronico', 'Visado a llegada', 'Visado electronico', 'Permiso especial/Verificación de antecedentes', 'Visado simplificado', 'Confirmación requerida', 'Visado requerido']
const policyPT = ['País natal', 'Permissão necessária', 'OECS liberdade de movimento', 'MERCOSUR liberdade de movimento', 'EU liberdade de movimento', 'GCC liberdade de movimento', 'Liberdade de movimento', 'Sem visto', 'Visto na chegada/Visto eletrônico', 'Visto na chegada', 'Visto eletrônico', 'Permissão especial/Verificação de antecedentes', 'Visto simplificado', 'Necessária confirmação', 'Visto necessário']
const policyFR = ['Pays natal', 'Permis requis', 'OECS liberté de mouvement', 'MERCOSUR liberté de mouvement', 'EU liberté de mouvement', 'GCC liberté de mouvement', 'Liberté de mouvement', 'Sans visa', 'Visa à l\'arrivée/Visa électronique', 'Visa à l\'arrivée', 'Visa électronique', 'Permis spécial/Vérification des antécédents', 'Visa simplifié', 'Confirmation requise', 'Visa requis']
const countriesEN:string[] = ['abkhazia','afghanistan','albania','algeria','american Samoa','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','aruba','ascension Island','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosnia and Herzegovina','botswana','brazil','british Indian Ocean Territory','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','cook Islands','costa Rica','croatia','cuba','curacao','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','falkland Islands','faroe Islands','fiji','finland','france','french Guiana','french Polynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','jan Mayen','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kurdistan','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Caledonia','new Zealand','nicaragua','niger','nigeria','niue','northern Cyprus','northern Mariana Islands','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','pitcairn Islands','poland','portugal','qatar','republic of the Congo','reunion','romania','russia','rwanda','saba','saint Barthelemy','saint Helena','saint Kitts and Nevis','saint Lucia','saint Martin','saint Pierre and Miquelon','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','sint Eustatius','sint Maarten','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidad and Tobago','tristan Da Cunha','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','united States Virgin Islands','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','wallis and Futuna','western Sahara','yemen','zambia','zimbabwe']
const countriesES:string[] = ['abjasia','afganistán','albania','argelia','samoa Americana','andorra','angola','anguila','antigua y Barbuda','argentina','armenia','aruba','isla Ascencion','australia','austria','azerbaiyán','bahamas','bahrein','bangladesh','barbados','bielorrusia','bélgica','belice','benín','bermudas','bután','bolivia','bonaire','bosnia y Herzegovina','botswana','brasil','territorio Británico del Océano Índico','islas Vírgenes Británicas ','brunei','bulgaria','burkina Faso','burundi','camboya','camerún','canadá','cabo Verde','islas Caimán','república Centroafricana','chad','chile','china','colombia','comoras','islas Cook','costa Rica','croacia','cuba','curazao','chipre','república Checa','república Democrática del Congo','dinamarca','yibuti','domenica','república Dominicana','timor-Leste','ecuador','egipto','el Salvador','guinea Ecuatorial','eritrea','estonia','esuatini','etiopía','islas Malvinas','islas Feroe','fiyi','finlandia','francia','guayana Francesa','polinesia Francesa','gabón','gambia','georgia','alemania','ghana','gibraltar','grecia','groenlandia','granada','guadalupe','guam','guatemala','guinea','guinea Bissau','guyana','haití','honduras','hong Kong','hungría','islandia','india','indonesia','irán','irak','irlanda','israel','italia','costa de marfil','jamaica','jan Mayen','japón','jordania','kazajstán','kenia','kiribati','kosovo','curdistán','kuwait','kirguistán','laos','letonia','líbano','lesotho','liberia','libia','liechtenstein','lituania','luxemburgo','macao','madagascar','malawi','malasia','maldivas','mali','malta','islas Marshall','martinica','mauritania','mauricio','mayotte','méjico','micronesia','moldavia','mónaco','mongolia','montenegro','montserrat','marruecos','mozambique','myanmar','namibia','nauru','nepal','países Bajos','nueva Caledonia','nueva Zelanda','nicaragua','níger','nigeria','niue','chipre del norte','islas Marianas del Norte','corea del Norte','macedonia del Norte','noruega','omán','pakistán','palau','palestina','panamá','papúa Nueva Guinea','paraguay','perú','filipinas','islas Pitcairn','polonia','portugal','catar','república del Congo','réunion','rumania','rusia','ruanda','saba','san Bartolomé','santa Elena','san Cristóbal y Nieves','santa Lucía','san Martín','san Pedro y Miquelón','san Vicente y las Granadinas','samoa','san Marino','santo Tomé y Príncipe','arabia Saudita','senegal','serbia','seychelles','sierra Leona','singapur','san Eustaquio','san Martín','slovaquia','eslovenia','islas Solomon','somalia','somalilandia','sudáfrica','corea del Sur','osetia del Sur','sudán del Sur','españa','sri Lanka','sudán','suriname','svalbard','suecia','suiza','siria','taiwán','tayikistán','tanzania','tailandia','togo','tokelau','tonga','transnistria','trinidad y Tobago','tristán De Cunha','túnez','turquía','turkmenistán','islas Turcas y Caicos','tuvalu','uganda','ucrania','emiratos Árabes Unidos','reino Unido','estados Unidos','islas Vírgenes de los Estados Unidos','uruguay','uzbekistan','vanuatu','santa Sede','venezuela','vietnam','wallis y Futuna','sahara Occidental','yemen','zambia','zimbabue']
const countriesPT:string[] = ['abcázia','afeganistão','albânia','argélia','samoa Americana','andorra','angola','anguila','antígua e Barbuda','argentina','arménia','aruba','ilha Da Ascensão','austrália','áustria','azerbaijão','baamas','baharem','bangladesh','barbados','bielorrússia','bélgica','belize','benim','bermudas','butão','bolívia','bonaire','bósnia e Herzegovina','botsuana','brasil','território Britânico do Oceano Índico','ilhas Virgens Britânicas','brunei','bulgária','burkina Faso','burundi','camboja','camarões','canadá','cabo Verde','ilhas Caymans','república Centro-Africana','chade','chile','china','colômbia','comores','ilhas Cook','costa Rica','croácia','cuba','curaçau','chipre','república Checa','república Democrática do Congo ','dinamarca','djibouti','dominica','república Dominicana','timor-Leste','equador','egipto','el Salvador','guiné Equatorial','eritreia','estónia','esuatini','etiópia','ilhas Malvinas','ilhas Faroé','fídji','finlândia','frança','guiana Francesa','polinésia Francesa','gabão','gâmbia','geórgia','alemanha','gana','gibraltar','grécia','gronelândia','granada','guadalupe','guam','guatemala','guiné-Conakri','guiné-Bissau','guiana','haiti','honduras','hong Kong','hungria','islândia','índia','indonésia','irão','iraque','irlanda','israel','itália','costa do Marfim','jamaica','jan Mayen','japão','jordânia','cazaquistão','quénia','kiribati','kosovo','curdistão','koweit','quirguistão','laos','letónia','líbano','lesoto','libéria','líbia','liechtenstein','lituânia','luxemburgo','macau','madagáscar','malaui','malásia','maldivas','mali','malta','ilhas Marshalls','martinica','mauritânia','maurícias','mayotte','méxico','micronésia','moldávia','mónaco','mongólia','montenegro','monserrate','marrocos','moçambique','myanmar','namíbia','nauru','nepal','países Baixos','nova Caledônia','nova Zelândia','nicarágua','níger','nigéria','niue','chipre del Norte','marianas Setentrionais','coreia do Nortea','macedónia do Norte','noruega','oman','paquistão','palau','palestina','panamá','papua-Nova Guiné','paraguai','peru','filipinas','ilhas Pitcairn','polónia','portugal','qatar','república do Congo','reunião','roménia','rússia','ruanda','saba','são Bartolomeu','santa Helena','são Cristóvão e Neves','santa Lúcia','são Martinho','são Pedro e Miquelão','são Vicente e as Granadinas','samoa','san Marino','são Tomé e Príncipe','arábia Saudita','senegal','sérvia','seychelles','serra Leoa','singapura','santo Eustáquio','são Martinho','eslováquia','eslovénia','ilhas Salomão','somália','somalilândia','áfrica do Sul','coreia do Sul','ossétia do Sul','sudão do Sul','espanha','sri Lanka','sudão','suriname','svalbard','suécia','suíça','síria','taiwan','tajiquistão','tanzânia','tailândia','togo','tokelau','tonga','transdniestre','trinidad e Tobago','tristão Da Cunha','tunísia','turquia','turquemenistão','turcas e Caicos ','tuvalu','uganda','ucrânia','emiratos Árabes Unidos','reino Unido','estados Unidos da América','ilhas Virgens Americanas','uruguai','uzbequistão','vanuatu','santa Sé','venezuela','vietnã','wallis e Futuna','saara Ocidental','iémen','zâmbia','zimbabwe']
const countriesFR:string[] = ['abkhazie','afghanistan','albanie','algérie','samoa Américaines','andorre','angola','anguilla','antigua-et-Barbuda','argentine','arménie','aruba','île De L\'ascension','australie','autriche','azerbaïdjan','bahamas','bahreïn','bangladesh','barbade','biélorussie','belgique','belize','bénin','bermudes','bhoutan','bolivie','bonaire','bosnie-Herzégovine','botswana','brésil','territoire britannique de l\'océan Indien','Îles Vierges britanniques','brunei','bulgarie','burkina Faso','burundi','cambodge','cameroun','canada','cap-Vert','îles Caïmans','république centrafricaine','tchad','chili','chine','colombie','comores','îles Cook','costa Rica','croatie','cuba','curacao','chypre','république tchèque','république Démocratique du Congo','danemark','djibouti','dominique','république dominicaine','timor Oriental','équateur','égypte','salvador','guinée équatoriale','érythrée','estonie','eswatini','éthiopie','îles Malouines','îles Féroé','fidji','finlande','france','guyane','polynésie française','gabon','gambie','géorgie','allemagne','ghana','gibraltar','grèce','groenland','grenade','guadeloupe','guam','guatemala','guinée','guinée-Bissau','guyana','haïti','honduras','hong Kong','hongrie','islande','inde','indonésie','iran','irak','irlande','israël','italie','côte d\'Ivoire','jamaïque','jan Mayen','japon','jordanie','kazakhstan','kenya','kiribati','kosovo','kurdistan','koweït','kirghizistan','laos','lettonie','liban','lesotho','liberia','libye','liechtenstein','lituanie','luxembourg','macao','madagascar','malawi','malaisie','maldives','mali','malte','îles Marshall','martinique','mauritanie','maurice','mayotte','mexique','micronésie','moldavie','monaco','mongolie','monténégro','montserrat','maroc','mozambique','myanmar','namibie','nauru','népal','pays-Bas','nouvelle-Calédonie','nouvelle-Zélande','nicaragua','niger','nigeria','niue','chypre du Nord','îles Mariannes du Nord','corée du Nord','macédoine du Nord','norvège','oman','pakistan','palaos','palestina','panamá','papouasie-Nouvelle-Guinée','paraguay','pérou','philippines','îles Pitcairn','pologne','portugal','qatar','république du Congo','la Réunion','roumanie','russie','rouanda','saba','saint-Barthélemy','sainte-Hélène','saint-Christophe-et-Niévès','sainte-Lucie','saint-Martin','saint-Pierre-et-Miquelon','saint-Vincent-et-les Grenadines','samoa','saint-Marin','são Tomé-et-Príncipe','arabie Saoudite','sénégal','serbie','seychelles','sierra Leone','singapour','saint Eustache','st Martin','slovaquie','slovénie','îles Salomon','somalie','somaliland','afrique du Sud','corée du Sud','ossétie du Sud','soudan du Sud','espagne','sri Lanca','soudan','suriname','svalbard','suède','suisse','syrie','taïwan','tadjikistan','tanzanie','thaïlande','togo','tokelau','tonga','transnistrie','trinité-et-Tobago','tristan Da Cunha','tunisie','turquie','turkménistan','îles Turques-et-Caïques','tuvalu','ouganda','ukraine','émirats arabes unis','royaume-Uni','états-Unis d\'Amérique','îles Vierges des États-Unis','uruguay','ouzbékistan','vanuatu','saint-Siège','venezuela','viêt Nam','wallis-et-Futuna','sahara Occidental','yémen','zambie','zimbábue']
const australiaEvisitor:string[] = ['austria','belgium','bulgaria','croatia','cyprus','czechRepublic','denmark','estonia','finland','france','germany','greece','hungary','ireland','italy','latvia','lithuania','luxembourg','malta','netherlands','poland','portugal','romania','slovakia','spain','sweden','andorra','iceland','liechtenstein','monaco','norway','sanMarino','switzerland','unitedKingdom','vaticanCity']
interface Props {
  selectArrayRef:any;
  mousePos:number | boolean[];
  hover:boolean;
  countrySelect:string;
  priorityRef:any;
  selected:string | null;
}

const InfoBox:React.FC<Props> = ({ selectArrayRef, mousePos, hover, countrySelect, priorityRef, selected }) => {

  const { language } = useContext(LanguageContext)

  const languageCaculation = () => {
    switch(language) {
      case '🇬🇧EN': return policyEN
      case '🇪🇸ES': return policyES
      case '🇵🇹PT': return policyPT
      case '🇫🇷FR': return policyFR
    }
  }

  const languageCaculation2 = () => {
    switch(language) {
      case '🇬🇧EN': return countriesEN
      case '🇪🇸ES': return countriesES
      case '🇵🇹PT': return countriesPT
      case '🇫🇷FR': return countriesFR
    }
  }

  const indexISOCalc = (key:string) => {
    return ETAcodes[key.toUpperCase()]
  }

  const visaPolicyISOCalc = () => {
    return ETAcodes[selected]
  }

  const auETAcalc = () => {
    if(selected != null) {
      if(australiaEvisitor.includes((countrySelect))) {
        return 'eVisitor'
      }

      return 'Electronic Travel Authorization'
    }

    let i = 0
    while(selectArrayRef.current[i] != null) {
      if(australiaEvisitor.includes((selectArrayRef.current[i]))) {
        return 'eVisitor'
      }
      i++
    }

    return 'Electronic Travel Authorization'
  }

  const ETAcodes = {CA:'Electronic Travel Authorization',GB:'Electronic Travel Authorization',NZ:'NZeTA',AU:auETAcalc(),US:'ESTA',VI:'ESTA',GU:'ESTA',MP:'ESTA',AS:'EPWP',KR:'K-ETA',HK:'Pre-arrival Registration',SC:'SEBS',KE:'Electronic Travel Authorization',PK:'Electronic Travel Authorization',LK:'Electronic Travel Authorization',CV:'EASE',MA:'AEVM'}

  const ETAfunction = (selected != null) ? visaPolicyISOCalc : indexISOCalc

  const rgbToText = (rgb:string, key:string) => {
    switch(rgb) {
      case 'rgb(255,20,147)': return languageCaculation()[0]
      case 'rgb(255,0,0)': return languageCaculation()[1]
      case 'rgb(255,145,0)': return languageCaculation()[2]
      case 'rgb(0,135,93)': return languageCaculation()[3]
      case 'rgb(0,51,153)': return languageCaculation()[4]
      case 'rgb(153,123,61)': return languageCaculation()[5]
      case 'rgb(255,179,191)': return languageCaculation()[6]
      case 'rgb(50,205,50)': return languageCaculation()[7]
      case 'rgb(81,205,123)': return ETAfunction(key)
      case 'rgb(161,224,123)': return languageCaculation()[8]
      case 'rgb(255,255,92)': return languageCaculation()[9]
      case 'rgb(135,206,250)': return languageCaculation()[10]
      case 'rgb(118,65,171)': return languageCaculation()[11]
      case 'rgb(200,200,200)': return languageCaculation()[12]
      case 'rgb(0,0,0)': return languageCaculation()[13]
      case 'rgb(150,150,150)': return languageCaculation()[14]
    }
  }

  return (
    (hover == true) ?
    <div className={'infoBox'}>
    <style jsx>{`
      .infoBox {
        background-color: white;
        position: absolute;
        left: ${mousePos[0] + 5 + 'px'};
        top: ${mousePos[1] + 5 + 'px'};
        height: 67px;
        border-radius: 8px;
        border-color: black;
        border-style: solid;
        border-width: 2px;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        pointer-events:none;
      }
      .legend {
        position: relative;
        bottom: 32px;
        display:flex;
        margin-left: 0.75px;
        align-items:center;
        justify-content:left;
      }
      .country {
        position: relative;
        display:flex;
        bottom:10px;
      }
      .text {
        margin-left: 4px;
      }
    `}</style>
      <table>
        <tbody>
          <tr>
            <td>
              <div className={'country'}>
                <p>{flags[countries.indexOf(countrySelect)] + ' ' + languageCaculation2()[countries.indexOf(countrySelect)]?.charAt(0).toUpperCase() + languageCaculation2()[countries.indexOf(countrySelect)]?.slice(1)}</p>
              </div>
              <div className={'legend'}>
                <Rectangle color={priorityRef.current[ISOcodesLowercase[countries.indexOf(countrySelect)]]}/>
                <p className={'text'}>{rgbToText(priorityRef.current[ISOcodesLowercase[countries.indexOf(countrySelect)]], ISOcodesLowercase[countries.indexOf(countrySelect)])}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    :
    null
  )
}

export default InfoBox