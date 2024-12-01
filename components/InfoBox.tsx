import { useCallback, useMemo, useContext, MutableRefObject } from 'react'
import { LanguageContext } from '../logic/context/LanguageContext'
import Rectangle from './Map/Legend/Rectangle'
const countries:string[] = ['abkhazia','afghanistan','albania','algeria','americanSamoa','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','aruba','ascensionIsland','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosniaAndHerzegovina','botswana','brazil','britishIndianOceanTerritory','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','cookIslands','costaRica','croatia','cuba','curacao','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','falklandIslands','faroeIslands','fiji','finland','france','frenchGuiana','frenchPolynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','janMayen','japan','jeju','jordan','kazakhstan','kenya','kiribati','kosovo','kurdistan','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newCaledonia','newZealand','nicaragua','niger','nigeria','niue','northernCyprus','northernMarianaIslands','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','pitcairnIslands','poland','portugal','qatar','republicOfTheCongo','reunion','romania','russia','rwanda','saba','saintBarthelemy','saintHelena','saintKittsAndNevis','saintLucia','saintMartin','saintPierreAndMiquelon','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','sintEustatius','sintMaarten','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidadAndTobago','tristanDaCunha','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','unitedStatesVirginIslands','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','wallisAndFutuna','westernSahara','yemen','zambia','zimbabwe']
const ISOcodesLowercase:string[] = ['ab','af','al','dz','as','ad','ao','ai','ag','ar','am','aw','ac','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','xb','ba','bw','br','io','vg','bn','bg','bf','bi','kh','cm','ca','cv','ky','cf','td','cl','cn','co','km','ck','cr','hr','cu','cw','cy','cz','cd','dk','dj','dm','do','tl','ec','eg','sv','gq','er','ee','sz','et','fk','fo','fj','fi','fr','gf','pf','ga','gm','ge','de','gh','gi','gr','gl','gd','gp','gu','gt','gn','gw','gy','ht','hn','hk','hu','is','in','id','ir','iq','ie','il','it','ci','jm','xm','jp','jj','jo','kz','ke','ki','xk','kx','kw','kg','la','lv','lb','ls','lr','ly','li','lt','lu','mo','mg','mw','my','mv','ml','mt','mh','mq','mr','mu','yt','mx','fm','md','mc','mn','me','ms','ma','mz','mm','na','nr','np','nl','nc','nz','ni','ne','ng','nu','rc','mp','kp','mk','no','om','pk','pw','ps','pa','pg','py','pe','ph','pn','pl','pt','qa','cg','re','ro','ru','rw','xs','bl','sh','kn','lc','mf','pm','vc','ws','sm','st','sa','sn','rs','sc','sl','sg','xe','sx','sk','si','sb','so','xx','za','kr','xo','ss','es','lk','sd','sr','xv','se','ch','sy','tw','tj','tz','th','tg','tk','to','xt','tt','tx','tn','tr','tm','tc','tv','ug','ua','ae','gb','us','vi','uy','uz','vu','va','ve','vn','wf','eh','ye','zm','zw']
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JJ','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇰🇷','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🏳️','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
const policyEN:string[] = ['Home country','Permit required','OECS freedom of movement','MERCOSUR freedom of movement','EU freedom of movement','GCC freedom of movement','Freedom of movement','Visa-free','Visa on arrival/E-visa','Visa on arrival','E-visa','Special permit/Police check','Simplified visa','Confirmation required','Visa required','days']
const policyES:string[] = ['País de origen','Permiso requerido','Libertad de movimiento OECS','Libertad de movimiento MERCOSUR','Libertad de movimiento UE','Libertad de movimiento GCC','Libertad de movimiento','Visado libre','Visado a llegada/Visado electronico','Visado a llegada','Visado electronico','Permiso especial/Verificación de antecedentes','Visado simplificado','Confirmación requerida','Visado requerido','días']
const policyPT:string[] = ['País natal','Permissão necessária','Liberdade de movimento OECS','Liberdade de movimento MERCOSUR','Liberdade de movimento UE','Liberdade de movimento GCC','Liberdade de movimento','Sem visto','Visto na chegada/Visto eletrônico','Visto na chegada','Visto eletrônico','Permissão especial/Verificação de antecedentes','Visto simplificado','Necessária confirmação','Visto necessário','dias']
const policyFR:string[] = ['Pays natal','Permis requis','Liberté de mouvement OECS','Liberté de mouvement MERCOSUR','Liberté de mouvement UE','Liberté de mouvement GCC','Liberté de mouvement','Sans visa','Visa à l\'arrivée/Visa électronique','Visa à l\'arrivée','Visa électronique','Permis spécial/Vérification des antécédents','Visa simplifié','Confirmation requise','Visa requis','jours']
const policyHR:string[] = ['Domovina','Potrebna je dozvola','OECS sloboda kretanja','MERCOSUR sloboda kretanja','EU sloboda kretanja','GCC sloboda kretanja','Sloboda kretanja','Bez vize','Viza po dolasku/E-viza','Viza po dolasku','E-viza','Posebna dozvola/Policijska provjera','Pojednostavljena viza','Potrebna je potvrda','Potrebna je viza','dani']
const countriesEN:string[] = ['abkhazia','afghanistan','albania','algeria','american Samoa','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','aruba','ascension Island','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosnia and Herzegovina','botswana','brazil','british Indian Ocean Territory','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','cook Islands','costa Rica','croatia','cuba','curacao','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','falkland Islands','faroe Islands','fiji','finland','france','french Guiana','french Polynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','jan Mayen','japan','jeju','jordan','kazakhstan','kenya','kiribati','kosovo','kurdistan','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Caledonia','new Zealand','nicaragua','niger','nigeria','niue','northern Cyprus','northern Mariana Islands','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','pitcairn Islands','poland','portugal','qatar','republic of the Congo','reunion','romania','russia','rwanda','saba','saint Barthelemy','saint Helena','saint Kitts and Nevis','saint Lucia','saint Martin','saint Pierre and Miquelon','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','sint Eustatius','sint Maarten','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidad and Tobago','tristan Da Cunha','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','united States Virgin Islands','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','wallis and Futuna','western Sahara','yemen','zambia','zimbabwe']
const countriesES:string[] = ['abjasia','afganistán','albania','argelia','samoa Americana','andorra','angola','anguila','antigua y Barbuda','argentina','armenia','aruba','isla Ascencion','australia','austria','azerbaiyán','bahamas','bahrein','bangladesh','barbados','bielorrusia','bélgica','belice','benín','bermudas','bután','bolivia','bonaire','bosnia y Herzegovina','botswana','brasil','territorio Británico del Océano Índico','islas Vírgenes Británicas ','brunei','bulgaria','burkina Faso','burundi','camboya','camerún','canadá','cabo Verde','islas Caimán','república Centroafricana','chad','chile','china','colombia','comoras','islas Cook','costa Rica','croacia','cuba','curazao','chipre','república Checa','república Democrática del Congo','dinamarca','yibuti','domenica','república Dominicana','timor-Leste','ecuador','egipto','el Salvador','guinea Ecuatorial','eritrea','estonia','esuatini','etiopía','islas Malvinas','islas Feroe','fiyi','finlandia','francia','guayana Francesa','polinesia Francesa','gabón','gambia','georgia','alemania','ghana','gibraltar','grecia','groenlandia','granada','guadalupe','guam','guatemala','guinea','guinea Bissau','guyana','haití','honduras','hong Kong','hungría','islandia','india','indonesia','irán','irak','irlanda','israel','italia','costa de marfil','jamaica','jan Mayen','japón','jeju','jordania','kazajstán','kenia','kiribati','kosovo','curdistán','kuwait','kirguistán','laos','letonia','líbano','lesotho','liberia','libia','liechtenstein','lituania','luxemburgo','macao','madagascar','malawi','malasia','maldivas','mali','malta','islas Marshall','martinica','mauritania','mauricio','mayotte','méjico','micronesia','moldavia','mónaco','mongolia','montenegro','montserrat','marruecos','mozambique','myanmar','namibia','nauru','nepal','países Bajos','nueva Caledonia','nueva Zelanda','nicaragua','níger','nigeria','niue','chipre del norte','islas Marianas del Norte','corea del Norte','macedonia del Norte','noruega','omán','pakistán','palau','palestina','panamá','papúa Nueva Guinea','paraguay','perú','filipinas','islas Pitcairn','polonia','portugal','catar','república del Congo','réunion','rumania','rusia','ruanda','saba','san Bartolomé','santa Elena','san Cristóbal y Nieves','santa Lucía','san Martín','san Pedro y Miquelón','san Vicente y las Granadinas','samoa','san Marino','santo Tomé y Príncipe','arabia Saudita','senegal','serbia','seychelles','sierra Leona','singapur','san Eustaquio','san Martín','slovaquia','eslovenia','islas Solomon','somalia','somalilandia','sudáfrica','corea del Sur','osetia del Sur','sudán del Sur','españa','sri Lanka','sudán','suriname','svalbard','suecia','suiza','siria','taiwán','tayikistán','tanzania','tailandia','togo','tokelau','tonga','transnistria','trinidad y Tobago','tristán De Cunha','túnez','turquía','turkmenistán','islas Turcas y Caicos','tuvalu','uganda','ucrania','emiratos Árabes Unidos','reino Unido','estados Unidos','islas Vírgenes de los Estados Unidos','uruguay','uzbekistan','vanuatu','santa Sede','venezuela','vietnam','wallis y Futuna','sahara Occidental','yemen','zambia','zimbabue']
const countriesPT:string[] = ['abcázia','afeganistão','albânia','argélia','samoa Americana','andorra','angola','anguila','antígua e Barbuda','argentina','arménia','aruba','ilha Da Ascensão','austrália','áustria','azerbaijão','baamas','baharem','bangladesh','barbados','bielorrússia','bélgica','belize','benim','bermudas','butão','bolívia','bonaire','bósnia e Herzegovina','botsuana','brasil','território Britânico do Oceano Índico','ilhas Virgens Britânicas','brunei','bulgária','burkina Faso','burundi','camboja','camarões','canadá','cabo Verde','ilhas Caymans','república Centro-Africana','chade','chile','china','colômbia','comores','ilhas Cook','costa Rica','croácia','cuba','curaçau','chipre','república Checa','república Democrática do Congo ','dinamarca','djibouti','dominica','república Dominicana','timor-Leste','equador','egipto','el Salvador','guiné Equatorial','eritreia','estónia','esuatini','etiópia','ilhas Malvinas','ilhas Faroé','fídji','finlândia','frança','guiana Francesa','polinésia Francesa','gabão','gâmbia','geórgia','alemanha','gana','gibraltar','grécia','gronelândia','granada','guadalupe','guam','guatemala','guiné-Conakri','guiné-Bissau','guiana','haiti','honduras','hong Kong','hungria','islândia','índia','indonésia','irão','iraque','irlanda','israel','itália','costa do Marfim','jamaica','jan Mayen','japão','jeju','jordânia','cazaquistão','quénia','kiribati','kosovo','curdistão','koweit','quirguistão','laos','letónia','líbano','lesoto','libéria','líbia','liechtenstein','lituânia','luxemburgo','macau','madagáscar','malaui','malásia','maldivas','mali','malta','ilhas Marshalls','martinica','mauritânia','maurícias','mayotte','méxico','micronésia','moldávia','mónaco','mongólia','montenegro','monserrate','marrocos','moçambique','myanmar','namíbia','nauru','nepal','países Baixos','nova Caledônia','nova Zelândia','nicarágua','níger','nigéria','niue','chipre del Norte','marianas Setentrionais','coreia do Nortea','macedónia do Norte','noruega','oman','paquistão','palau','palestina','panamá','papua-Nova Guiné','paraguai','peru','filipinas','ilhas Pitcairn','polónia','portugal','qatar','república do Congo','reunião','roménia','rússia','ruanda','saba','são Bartolomeu','santa Helena','são Cristóvão e Neves','santa Lúcia','são Martinho','são Pedro e Miquelão','são Vicente e as Granadinas','samoa','san Marino','são Tomé e Príncipe','arábia Saudita','senegal','sérvia','seychelles','serra Leoa','singapura','santo Eustáquio','são Martinho','eslováquia','eslovénia','ilhas Salomão','somália','somalilândia','áfrica do Sul','coreia do Sul','ossétia do Sul','sudão do Sul','espanha','sri Lanka','sudão','suriname','svalbard','suécia','suíça','síria','taiwan','tajiquistão','tanzânia','tailândia','togo','tokelau','tonga','transdniestre','trinidad e Tobago','tristão Da Cunha','tunísia','turquia','turquemenistão','turcas e Caicos ','tuvalu','uganda','ucrânia','emiratos Árabes Unidos','reino Unido','estados Unidos da América','ilhas Virgens Americanas','uruguai','uzbequistão','vanuatu','santa Sé','venezuela','vietnã','wallis e Futuna','saara Ocidental','iémen','zâmbia','zimbabwe']
const countriesFR:string[] = ['abkhazie','afghanistan','albanie','algérie','samoa Américaines','andorre','angola','anguilla','antigua-et-Barbuda','argentine','arménie','aruba','île De L\'ascension','australie','autriche','azerbaïdjan','bahamas','bahreïn','bangladesh','barbade','biélorussie','belgique','belize','bénin','bermudes','bhoutan','bolivie','bonaire','bosnie-Herzégovine','botswana','brésil','territoire britannique de l\'océan Indien','Îles Vierges britanniques','brunei','bulgarie','burkina Faso','burundi','cambodge','cameroun','canada','cap-Vert','îles Caïmans','république centrafricaine','tchad','chili','chine','colombie','comores','îles Cook','costa Rica','croatie','cuba','curacao','chypre','république tchèque','république Démocratique du Congo','danemark','djibouti','dominique','république dominicaine','timor Oriental','équateur','égypte','salvador','guinée équatoriale','érythrée','estonie','eswatini','éthiopie','îles Malouines','îles Féroé','fidji','finlande','france','guyane','polynésie française','gabon','gambie','géorgie','allemagne','ghana','gibraltar','grèce','groenland','grenade','guadeloupe','guam','guatemala','guinée','guinée-Bissau','guyana','haïti','honduras','hong Kong','hongrie','islande','inde','indonésie','iran','irak','irlande','israël','italie','côte d\'Ivoire','jamaïque','jan Mayen','japon','jeju','jordanie','kazakhstan','kenya','kiribati','kosovo','kurdistan','koweït','kirghizistan','laos','lettonie','liban','lesotho','liberia','libye','liechtenstein','lituanie','luxembourg','macao','madagascar','malawi','malaisie','maldives','mali','malte','îles Marshall','martinique','mauritanie','maurice','mayotte','mexique','micronésie','moldavie','monaco','mongolie','monténégro','montserrat','maroc','mozambique','myanmar','namibie','nauru','népal','pays-Bas','nouvelle-Calédonie','nouvelle-Zélande','nicaragua','niger','nigeria','niue','chypre du Nord','îles Mariannes du Nord','corée du Nord','macédoine du Nord','norvège','oman','pakistan','palaos','palestina','panamá','papouasie-Nouvelle-Guinée','paraguay','pérou','philippines','îles Pitcairn','pologne','portugal','qatar','république du Congo','la Réunion','roumanie','russie','rouanda','saba','saint-Barthélemy','sainte-Hélène','saint-Christophe-et-Niévès','sainte-Lucie','saint-Martin','saint-Pierre-et-Miquelon','saint-Vincent-et-les Grenadines','samoa','saint-Marin','são Tomé-et-Príncipe','arabie Saoudite','sénégal','serbie','seychelles','sierra Leone','singapour','saint Eustache','st Martin','slovaquie','slovénie','îles Salomon','somalie','somaliland','afrique du Sud','corée du Sud','ossétie du Sud','soudan du Sud','espagne','sri Lanca','soudan','suriname','svalbard','suède','suisse','syrie','taïwan','tadjikistan','tanzanie','thaïlande','togo','tokelau','tonga','transnistrie','trinité-et-Tobago','tristan Da Cunha','tunisie','turquie','turkménistan','îles Turques-et-Caïques','tuvalu','ouganda','ukraine','émirats arabes unis','royaume-Uni','états-Unis d\'Amérique','îles Vierges des États-Unis','uruguay','ouzbékistan','vanuatu','saint-Siège','venezuela','viêt Nam','wallis-et-Futuna','sahara Occidental','yémen','zambie','zimbábue']
const countriesHR:string[] = ['abhazija','afganistan','albanija','alžir','američka Samoa','andora','angola','angvila','antigua i Barbuda','argentina','armenija','aruba','otok Ascension','australija','austrija','azerbajdžan','bahami','bahrein','bangladeš','barbados','bjelarus','belgija','belize','benin','bermudi','butan','bolivija','bonaire','bosna i hercegovina','bocvana','brazil','britanski Indijskooceanski Teritorij','britanski Djevičanski Otoci','brunej','bugarska','burkina Faso','burundi','kambodža','kamerun','kanada','zelenortski Otoci','kajmanski Otoci','srednjoafrička Republika','čad','čile','kina','kolumbija','komori','cookovo Otočje','kostarika','hrvatska','kuba','curaçao','cipar','češka Republika','demokratska Republika Kongo','danska','džibuti','dominika','dominikanska Republika','istočni Timor','ekvador','egipat','el Salvador','ekvatorska Gvineja','eritreja','estonija','esvatini','etiopija','falklandski Otoci','farski Otoci','fidži','finska','francuska','francuska Gvajana','francuska Polinezija','gabon','gambija','gruzija','njemačka','gana','gibraltar','grčka','grenland','grenada','gvadalupa','guam','gvatemala','gvineja','gvineja Bisau','gvajana','haiti','honduras','hong Kong','mađarska','island','indija','indonezija','iran','irak','irska','izrael','italija','obala bjelokosti','jamajka','jan Mayen','japan','jeju','jordan','kazahstan','kenija','kiribati','kosovo','kurdistan','kuvajt','kirgistan','laos','latvija','libanon','lesoto','liberija','libija','lihtenštajn','litva','luksemburg','makao','madagaskar','malavi','malezija','maldivi','mali','malta','maršalovi Otoci','martinik','mauritanija','mauricijus','mayotte','meksiko','mikronezija','moldova','monako','mongolija','crna gora','montserrat','maroko','mozambik','mjanmar','namibija','nauru','nepal','nizozemska','nova Kaledonija','novi Zeland','nikaragva','niger','nigerija','niue','sjeverni Cipar','sjevernomarijanski Otoci','sjeverna Koreja','sjeverna Makedonija','norveška','oman','pakistan','palau','palestina','panama','papua Nova Gvineja','paragvaj','peru','filipini','pitcairnovo Otočje','poljska','portugal','katar','republika Kongo','réunion','rumunjska','rusija','ruanda','saba','sveti Bartolomej','sveta Helena','sveti Kitts i Nevis','sveta Lucija','sveti Martin','sveti Petar i Mikelon','sveti Vincent i Grenadini','samoa','san Marino','sveti Toma i Princip','saudijska Arabija','senegal','srbija','sejšeli','sijera Leone','singapur','sveti Eustahije','sveti Martin','slovačka','slovenija','solomonski Otoci','somalija','somaliland','južna Afrika','južna Koreja','južna Osetija','južni Sudan','španjolska','šri lanka','sudan','surinam','svalbard','švedska','švicarska','sirija','tajvan','tadžikistan','tanzanija','tajland','togo','tokelau','tonga','pridnjestrovlje','trinidad i Tobago','tristan Da Cunha','tunis','turska','turkmenistan','otoci Turks i Caicos','tuvalu','uganda','ukrajina','ujedinjeni Arapski Emirati','ujedinjena Kraljevina','sjedinjene Američke Države','američki Djevičanski Otoci','urugvaj','uzbekistan','vanuatu','vatikan','venezuela','vijetnam','wallis i Futuna','zapadna Sahara','jemen','zambija','zimbabve']
const australiaEvisitor:string[] = ['austria','belgium','bulgaria','croatia','cyprus','czechRepublic','denmark','estonia','finland','france','germany','greece','hungary','ireland','italy','latvia','lithuania','luxembourg','malta','netherlands','poland','portugal','romania','slovakia','spain','sweden','andorra','iceland','liechtenstein','monaco','norway','sanMarino','switzerland','unitedKingdom','vaticanCity']
const guamCNMIETA:string[] = ['china','hongKong','malaysia','nauru','papuaNewGuinea']
const guamCNMIETAESTA:string[] = ['australia','brunei','japan','newZealand','singapore','southKorea','taiwan','unitedKingdom']
const guamCNMIESTA:string[] = ['andorra','australia','austria','belgium','brunei','chile','croatia','czechRepublic','denmark','estonia','finland','france','germany','greece','hungary','iceland','ireland','israel','italy','japan','latvia','liechtenstein','lithuania','luxembourg','malta','monaco','netherlands','newZealand','norway','poland','portugal','qatar','sanMarino','singapore','slovakia','slovenia','southKorea','spain','sweden','switzerland','taiwan','unitedKingdom']
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  mousePos:{x:number,y:number};
  hover:boolean;
  countrySelect:string;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  selected:string | null;
  visaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  visaPolicyDurationRef:MutableRefObject<{[key:string]:number}>;
}

const InfoBox:React.FC<Props> = ({ selectArrayRef, mousePos, hover, countrySelect, priorityRef, selected, visaDurationRef, visaPolicyDurationRef }) => {

  const { language } = useContext(LanguageContext)

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return policyEN
      case '🇪🇸ES': return policyES
      case '🇵🇹PT': return policyPT
      case '🇫🇷FR': return policyFR
      case '🇭🇷HR': return policyHR
    }
  }, [language])

  const languageCaculation2 = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return countriesEN
      case '🇪🇸ES': return countriesES
      case '🇵🇹PT': return countriesPT
      case '🇫🇷FR': return countriesFR
      case '🇭🇷HR': return countriesHR
    }
  }, [language])

  const auETAcalc = useCallback(() => {
    if(selected != null) {
      if(australiaEvisitor.includes((countrySelect))) {
        return 'eVisitor'
      }

      return 'Electronic Travel Authorization'
    }

    let i:number = 0
    while(selectArrayRef.current[i] != null) {
      if(australiaEvisitor.includes((selectArrayRef.current[i]))) {
        return 'eVisitor'
      }
      i++
    }

    return 'Electronic Travel Authorization'
  }, [])

  const guamCNMIETAcalc = useCallback(() => {
    if(selected != undefined) {
      if(guamCNMIETAESTA.includes((countrySelect))) {
        return 'ETA (45 days) / ESTA'
      }

      if(guamCNMIETA.includes((countrySelect))) {
        return 'ETA'
      }

      return 'ESTA'
    }

    let j:number = 0
    while(selectArrayRef.current[j] != null) {
      if(guamCNMIETAESTA.includes((selectArrayRef.current[j]))) {
        return 'ETA (45 days) / ESTA'
      }

      if(guamCNMIETA.includes((selectArrayRef.current[j]))) {
        let k:number = 0
        while(selectArrayRef.current[k] != null) {
          if(guamCNMIESTA.includes((selectArrayRef.current[k]))) {
            return 'ETA (45 days) / ESTA'
          }
          k++;
        }
        return 'ETA'
      }
      j++
    }

    return 'ESTA'
  }, [countrySelect])

  const ETAcodes:{[key:string]:string | Function} = {CA:'Electronic Travel Authorization',GB:'Electronic Travel Authorization',NZ:'NZeTA',AU:auETAcalc(),US:'ESTA',VI:'ESTA',GU:guamCNMIETAcalc(),MP:guamCNMIETAcalc(),AS:'EPWP',KR:'K-ETA',HK:'Pre-arrival Registration',SC:'SEBS',KE:'Electronic Travel Authorization',PK:'Electronic Travel Authorization',CV:'EASE',MA:'AEVM',SA:'Electronic Visa Waiver',MX:'Electronic Authorization System',MY:'Digital Arrival Card',KH:'e-Arrival Card',BM:'Electronic Travel Authorization',PH:'Electronic Travel Authorization',JJ:'K-ETA',LK:'Electronic Travel Authorization'}

  const rgbToText:Function = useCallback((rgb:string, key:string) => {
    switch(rgb) {
      case 'rgb(255,20,147)': return languageCaculation[0]
      case 'rgb(255,0,0)': return languageCaculation[1]
      case 'rgb(255,145,0)': return languageCaculation[2]
      case 'rgb(0,135,93)': return languageCaculation[3]
      case 'rgb(0,51,153)': return languageCaculation[4]
      case 'rgb(153,123,61)': return languageCaculation[5]
      case 'rgb(255,179,191)': return languageCaculation[6]
      case 'rgb(50,205,50)': return languageCaculation[7]
      case 'rgb(81,205,123)': 
        if(selected != null) {
          return ETAcodes[selected]
        } else {
          return ETAcodes[key.toUpperCase()]
        }
      case 'rgb(161,224,123)': return languageCaculation[8]
      case 'rgb(255,255,92)': return languageCaculation[9]
      case 'rgb(135,206,250)': return languageCaculation[10]
      case 'rgb(118,65,171)': return languageCaculation[11]
      case 'rgb(200,200,200)': return languageCaculation[12]
      case 'rgb(0,0,0)': return languageCaculation[13]
      case 'rgb(150,150,150)': return languageCaculation[14]
    }
  }, [language, selected, countrySelect])

  const indexDefine:Function = useCallback(() => {
    if(visaDurationRef.current == undefined) {
      return ''
    } else {
      if(visaDurationRef.current[ISOcodes[countries.indexOf(countrySelect)]] == 0) {
        return ''
      } else {
        return ' (' + visaDurationRef.current[ISOcodes[countries.indexOf(countrySelect)]] + ' ' + languageCaculation[15] + ')'
      }
    }
  }, [countrySelect])

  const visaPolicyDefine:Function = useCallback(() => {
    if(visaPolicyDurationRef.current[ISOcodes[countries.indexOf(countrySelect)]] == 0) {
      return ''
    } else {
      return ' (' + visaPolicyDurationRef.current[ISOcodes[countries.indexOf(countrySelect)]] + ' ' + languageCaculation[15] + ')'
    }
  }, [countrySelect])

  const VisaDurationFunction:Function = useMemo(() => {
    if(selected != null) {
      return visaPolicyDefine
    } else {
      return indexDefine
    }
  }, [countrySelect])

  return (
    hover &&
    <div className={'infoBox'}>
    <style jsx>{`
      .infoBox {
        background-color: white;
        position: absolute;
        left: ${mousePos.x + 5 + 'px'};
        top: ${mousePos.y + 5 + 'px'};
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
        pointer-events: none;
      }
      .legend {
        position: relative;
        bottom: 32px;
        display: flex;
        margin-left: 0.75px;
        align-items: center;
        justify-content: left;
      }
      .country {
        position: relative;
        display: flex;
        bottom: 10px;
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
                <p>{flags[countries.indexOf(countrySelect)] + ' ' + languageCaculation2[countries.indexOf(countrySelect)]?.charAt(0).toUpperCase() + languageCaculation2[countries.indexOf(countrySelect)]?.slice(1)}</p>
              </div>
              <div className={'legend'}>
                <Rectangle color={priorityRef.current[ISOcodesLowercase[countries.indexOf(countrySelect)]]}/>
                <p className={'text'}>{rgbToText(priorityRef.current[ISOcodesLowercase[countries.indexOf(countrySelect)]], ISOcodesLowercase[countries.indexOf(countrySelect)]) + VisaDurationFunction()}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InfoBox