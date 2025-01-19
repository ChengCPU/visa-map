import { useState, useCallback, useMemo, useContext, useEffect, MutableRefObject } from 'react'
import { PassportContext } from '../logic/context/PassportContext'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import { StaticImageData } from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Passport from '../components/Selector/Passport'
import InfoText from '../components/Rank/InfoText'
import VisaRequired from '../components/Rank/VisaRequired'
import EVisa from '../components/Rank/EVisa'
import VisaOnArrival from '../components/Rank/VisaOnArrival'
import VisaOnArrivalEvisa from '../components/Rank/VisaOnArrivalEvisa'
import VisaFree from '../components/Rank/VisaFree'
import FreedomOfMovement from '../components/Rank/FreedomOfMovement'
import fetchSortData from '../logic/rankSorting/fetchSortData'
import reverseSort from '../logic/rankSorting/reverseSort'
import styles from '../styles/Rank.module.css'
const dataEN:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosnia and Herzegovina','botswana','brazil','british National (Overseas)','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','costa Rica','croatia','cuba','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Zealand','nicaragua','niger','nigeria','northern Cyprus','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','poland','portugal','qatar','republic of the Congo','romania','russia','rwanda','saint Helena','saint Kitts and Nevis','saint Lucia','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Korea','south Ossetia','south Sudan','sovereign Military Order of Malta','spain','sri Lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','teudat Maavar','thailand','togo','tonga','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','western Sahara','yemen','zambia','zimbabwe','Freedom of movement: ','Visa-free km2: ','Total: ']
const dataES:string[] = ['abjasia','afganistán','albania','argelia','andorra','angola','anguila','antigua y Barbuda','argentina','armenia','australia','austria','azerbaiyán','bahamas','bahrein','bangladesh','barbados','bielorrusia','bélgica','belice','benín','bermudas','bután','bolivia','bosnia y Herzegovina','botswana','brasil','nacionalidad Británica (Exterior)','islas Vírgenes Británicas','brunei','bulgaria','burkina Faso','burundi','camboya','camerún','canadá','cabo Verde','islas Caimán','república Centroafricana','chad','chile','china','colombia','comoras','costa Rica','croacia','cuba','chipre','república Checa','república Democrática del Congo','dinamarca','yibuti','domenica','república Dominicana','timor-Leste','ecuador','egipto','el Salvador','guinea Ecuatorial','eritrea','estonia','esuatini','etiopía','fiyi','finlandia','francia','gabón','gambia','georgia','alemania','ghana','grecia','granada','guatemala','guinea','guinea Bissau','guyana','haití','honduras','hong Kong','hungría','islandia','india','indonesia','irán','irak','irlanda','israel','italia','costa de marfil','jamaica','japón','jordania','kazajstán','kenia','kiribati','kosovo','kuwait','kirguistán','laos','letonia','líbano','lesotho','liberia','libia','liechtenstein','lituania','luxemburgo','macao','madagascar','malawi','malasia','maldivas','mali','malta','islas Marshall','mauritania','mauricio','méjico','micronesia','moldavia','mónaco','mongolia','montenegro','montserrat','marruecos','mozambique','myanmar','namibia','nauru','nepal','países Bajos','nueva Zelanda','nicaragua','níger','nigeria','chipre del Norte','corea del Norte','macedonia del Norte','noruega','omán','pakistán','palau','palestina','panamá','papúa Nueva Guinea','paraguay','perú','filipinas','polonia','portugal','catar','república del Congo','rumania','rusia','ruanda','santa Elena','san Cristóbal y Nieves','santa Lucía','san Vicente y las Granadinas','samoa','san Marino','santo Tomé y Príncipe','arabia Saudita','senegal','serbia','seychelles','sierra Leona','singapur','slovaquia','eslovenia','islas Solomon','somalia','somalilandia','sudáfrica','corea del Sur','osetia del Sur','sudán del Sur','soberana Orden Militar de Malta','españa','sri Lanka','sudán','suriname','suecia','suiza','siria','taiwán','tayikistán','tanzania','teudat Maavar','tailandia','togo','tonga','trinidad y Tobago','túnez','turquía','turkmenistán','islas Turcas y Caicos','tuvalu','uganda','ucrania','emiratos Árabes Unidos','reino Unido','estados Unidos','uruguay','uzbekistan','vanuatu','santa Sede','venezuela','vietnam','sahara Occidental','yemen','zambia','zimbabue','Libertad de movimiento: ','km2 Visado libre: ','Total: ']
const dataPT:string[] = ['abcázia','afeganistão','albânia','argélia','andorra','angola','anguila','antígua e Barbuda','argentina','arménia','austrália','áustria','azerbaijão','baamas','baharem','bangladesh','barbados','bielorrússia','bélgica','belize','benim','bermudas','butão','bolívia','bósnia e Herzegovina','botsuana','brasil','nacional Britânico (Exterior)','ilhas Virgens Britânicas','brunei','bulgária','burkina Faso','burundi','camboja','camarões','canadá','cabo Verde','ilhas Caymans','república Centro-Africana','chade','chile','china','colômbia','comores','costa Rica','croácia','cuba','chipre','república Checa','república Democrática do Congo ','dinamarca','djibouti','dominica','república Dominicana','timor-Leste','equador','egipto','el Salvador','guiné Equatorial','eritreia','estónia','esuatini','etiópia','fídji','finlândia','frança','gabão','gâmbia','geórgia','alemanha','gana','grécia','granada','guatemala','guiné-Conakri','guiné-Bissau','guiana','haiti','honduras','hong Kong','hungria','islândia','índia','indonésia','irão','iraque','irlanda','israel','itália','costa do Marfim','jamaica','japão','jordânia','cazaquistão','quénia','kiribati','kosovo','koweit','quirguistão','laos','letónia','líbano','lesoto','libéria','líbia','liechtenstein','lituânia','luxemburgo','macau','madagáscar','malaui','malásia','maldivas','mali','malta','ilhas Marshalls','mauritânia','maurícias','méxico','micronésia','moldávia','mónaco','mongólia','montenegro','monserrate','marrocos','moçambique','myanmar','namíbia','nauru','nepal','países Baixos','nova Zelândia','nicarágua','níger','nigéria','chipre del Norte','coreia do Nortea','macedónia do Norte','noruega','oman','paquistão','palau','palestina','panamá','papua-Nova Guiné','paraguai','peru','filipinas','polónia','portugal','qatar','república do Congo','roménia','rússia','ruanda','santa Helena','são Cristóvão e Neves','santa Lúcia','são Vicente e as Granadinas','samoa','san Marino','são Tomé e Príncipe','arábia Saudita','senegal','sérvia','seychelles','serra Leoa','singapura','eslováquia','eslovénia','ilhas Salomão','somália','somalilândia','áfrica do Sul','coreia do Sul','ossétia do Sul','sudão do Sul','soberana Ordem Militar de Malta','espanha','sri Lanka','sudão','suriname','suécia','suíça','síria','taiwan','tajiquistão','tanzânia','teudat Maavar','tailândia','togo','tonga','trinidad e Tobago','tunísia','turquia','turquemenistão','turcas e Caicos','tuvalu','uganda','ucrânia','emiratos Árabes Unidos','reino Unido','estados Unidos da América','uruguai','uzbequistão','vanuatu','santa Sé','venezuela','vietnã','saara Ocidental','iémen','zâmbia','zimbabwe','Liberdade de movimento: ','km2 Sem visto: ','Total: ']
const dataFR:string[] = ['abkhazie','afghanistan', 'albanie','algérie','andorre','angola','anguilla','antigua-et-Barbuda','argentine','arménie','australie','autriche','azerbaïdjan','bahamas','bahreïn','bangladesh','barbade','biélorussie','belgique','belize','bénin','bermudes','bhoutan','bolivie','bosnie-Herzégovine','botswana','brésil','national Britannique (Outre-mer)','Îles Vierges britanniques','brunei','bulgarie','burkina Faso','burundi','cambodge','cameroun','canada','cap-Vert','îles Caïmans','république centrafricaine','tchad','chili','chine','colombie','comores','costa Rica','croatie','cuba','chypre','république tchèque','république Démocratique du Congo','danemark','djibouti','dominique','république dominicaine','timor Oriental','équateur','égypte','salvador','guinée équatoriale','érythrée','estonie','eswatini','éthiopie','fidji','finlande','france','gabon','gambie','géorgie','allemagne','ghana','grèce','grenade','guatemala','guinée','guinée-Bissau','guyana','haïti','honduras','hong Kong','hongrie','islande','inde','indonésie','iran','irak','irlande','israël','italie','côte d\'Ivoire','jamaïque','japon','jordanie','kazakhstan','kenya','kiribati','kosovo','koweït','kirghizistan','laos','lettonie','liban','lesotho','liberia','libye','liechtenstein','lituanie','luxembourg','macao','madagascar','malawi','malaisie','maldives','mali','malte','îles Marshall','mauritanie','maurice','mexique','micronésie','moldavie','monaco','mongolie','monténégro','montserrat','maroc','mozambique','myanmar','namibie','nauru','népal','pays-Bas','nouvelle-Zélande','nicaragua','niger','nigeria','chypre du Nord','corée du Nord','macédoine du Nord','norvège','oman','pakistan','palaos','palestina','panamá','papouasie-Nouvelle-Guinée','paraguay','pérou','philippines','pologne','portugal','qatar','république du Congo','roumanie','russie','rouanda','sainte-Hélène','saint-Christophe-et-Niévès','sainte-Lucie','saint-Vincent-et-les Grenadines','samoa','saint-Marin','são Tomé-et-Príncipe','arabie Saoudite','sénégal','serbie','seychelles','sierra Leone','singapour','slovaquie','slovénie','îles Salomon','somalie','somaliland','afrique du Sud','corée du Sud','ossétie du Sud','soudan du Sud','ordre Souverain Militaire de Malte','espagne','sri Lanca','soudan','suriname','suède','suisse','syrie','taïwan','tadjikistan','tanzanie','teudat Maavar','thaïlande','togo','tonga','trinité-et-Tobago','tunisie','turquie','turkménistan','îles Turques-et-Caïques','tuvalu','ouganda','ukraine','émirats arabes unis','royaume-Uni','états-Unis d\'Amérique','uruguay','ouzbékistan','vanuatu','saint-Siège','venezuela','viêt Nam','sahara Occidental','yémen','zambie','zimbábue','Liberté de mouvement: ','km2 Sans visa: ','Total: ']
const dataHR:string[] = ['abhazija','afganistan','albanija','alžir','andora','angola','angvila','antigua i Barbuda','argentina','armenija','australija','austrija','azerbajdžan','bahami','bahrein','bangladeš','barbados','bjelorusija','belgija','belize','benin','bermudi','butan','bolivija','bosna i hercegovina','bocvana','brazil','britanska Nacionalna (Prekomorska)','britanski Indijskooceanski Teritorij','brunej','bugarska','burkina Faso','burundi','kambodža','kamerun','kanada','zelenortski Otoci','kajmanski Otoci','srednjoafrička Republika','čad','čile','kina','kolumbija','komori','kostarika','hrvatska','kuba','cipar','češka Republika','demokratska Republika Kongo','danska','džibuti','dominika','dominikanska Republika','istočni Timor','ekvador','egipat','el Salvador','ekvatorska Gvineja','eritreja','estonija','esvatini','etiopija','fidži','finska','francuska','gabon','gambija','gruzija','njemačka','gana','grčka','grenada','gvatemala','gvineja','gvineja Bisau','gvajana','haiti','honduras','hong Kong','mađarska','island','indija','indonezija','iran','irak','irska','izrael','italija','obala bjelokosti','jamajka','japan','jordan','kazahstan','kenija','kiribati','kosovo','kuvajt','kirgistan','laos','latvija','libanon','lesoto','liberija','libija','lihtenštajn','litva','luksemburg','makao','madagaskar','malavi','malezija','maldivi','mali','malta','maršalovi Otoci','mauritanija','mauricijus','meksiko','mikronezija','moldavija','monako','mongolija','crna gora','montserrat','maroko','mozambik','mjanmar','namibija','nauru','nepal','nizozemska','novi Zeland','nikaragva','niger','nigerija','sjeverni Cipar','sjeverna Koreja','sjeverna Makedonija','norveška','oman','pakistan','palau','palestina','panama','papua Nova Gvineja','paragvaj','peru','filipini','poljska','portugal','katar','republika Kongo','rumunjska','rusija','ruanda','sveta Helena','sveti Kitts i Nevis','sveta Lucija','sveti Vincent i Grenadini','samoa','san Marino','sveti Toma i Princip','saudijska Arabija','senegal','srbija','sejšeli','sijera Leone','singapur','slovačka','slovenija','solomonski Otoci','somalija','somaliland','južna Afrika','južna Koreja','južna Osetija','južni Sudan','suvereni Viteški Malteški Red','španjolska','šri lanka','sudan','surinam','švedska','švicarska','sirija','tajvan','tadžikistan','tanzanija','teudat Maavar','tajland','togo','tonga','trinidad i Tobago','tunis','turska','turkmenistan','otoci Turks i Caicos','tuvalu','uganda','ukrajina','ujedinjeni Arapski Emirati','ujedinjena Kraljevina','sjedinjene Američke Države','urugvaj','uzbekistan','vanuatu','vatikan','venezuela','vijetnam','zapadna Sahara','jemen','zambija','zimbabve','Sloboda kretanja: ','km2 Bezvizno: ','Ukupno: ']
const sortEN:string[] = ['Sort by: Total','Sort by: Visa-free','Sort by: Alphabetical order','Sort by: Freedom of Movement','Sort by: Visa-free km2']
const sortES:string[] = ['Ordenar por: Total','Ordenar por: Visado Libre','Ordenar por: Orden alfabetico','Ordenar por: Libertad de movimiento','Ordenar por: Visado Libre km2']
const sortPT:string[] = ['Ordenar por: Total', 'Ordenar por: Sem Visto', 'Ordenar por: Ordem alfabética', 'Ordenar por: Liberdade de movimento', 'Ordenar por: Sem Visto km2']
const sortFR:string[] = ['Trier par: Total', 'Trier par: Sans Visa', 'Trier par: Ordre alphabétique', 'Trier par: Liberté de mouvement', 'Trier par: Sans Visa km2']
const sortHR:string[] = ['Sortiraj po: Ukupno','Sortiraj po: Bez vize','Sortiraj po: Abecedno','Sortiraj po: Sloboda kretanja','Sortiraj po: Bez vize km2']
const dataSize = dataEN.length
const passportsArray:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishNationalOverseas','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northernCyprus','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','sovereignMilitaryOrderOfMalta','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','teudatMaavar','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','westernSahara','yemen','zambia','zimbabwe']
let unsortedData:(number | string)[] = []
let verticalColumn:number[] = []
for(let passportCount = 0; passportCount < passportsArray.length; passportCount++) {verticalColumn.push(passportCount)}
interface Props {
  rankRef:any;
  sortBy:string;
  setSortBy:Function;
  mobile:boolean;
  setSelectorLoad:Function;
  passportDataRef:MutableRefObject<Array<[string|number]>>;
}

const Rank:React.FC<Props> = ({ rankRef, sortBy, setSortBy, setSelectorLoad, passportDataRef }) => {

  useEffect(() => {
    unsortedData = fetchSortData(rankRef, 6, passportDataRef)
    setSelectorLoad(false)
  }, [])
  
  const passports:{[key:string]:StaticImageData} = useContext(PassportContext)
  const dimensions = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)
  const [sort, setSort] = useState<boolean>(false)
  
  const rankRefLength = useMemo(() => {
    return rankRef.current.length - 1
  }, [rankRef.current])

  const languageCalculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return [dataEN, sortEN]
      case '🇪🇸ES': return [dataES, sortES]
      case '🇵🇹PT': return [dataPT, sortPT]
      case '🇫🇷FR': return [dataFR, sortFR]
      case '🇭🇷HR': return [dataHR, sortHR]
    }
  }, [language])

  const handleChange = (event) => {
    setSortBy(event.target.value)
    fetchSortData(rankRef, languageCalculation[1].indexOf(event.target.value) + 1, passportDataRef)
  }

  const renderOptions: Function = useCallback((languageArray: string[]) => {
    return languageArray.map(language =>
      <option key={language} value={language}>{language}</option>
    )
  }, [language])

  const widthCalculation = useCallback((visaPolicy:string, verticalColumn:number) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return 500
      case 'eVisa':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + (rankRef.current[verticalColumn]?.[3] * 2) + (rankRef.current[verticalColumn]?.[4] * 2)
      case 'visaOnArrival':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + (rankRef.current[verticalColumn]?.[3] * 2)
      case 'visaOnArrivalEvisa':
        if(rankRef.current[verticalColumn]?.[2] == 0) {return 0}
        if(rankRef.current[verticalColumn]?.[2] < 7) {return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + 2}
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2)
      case 'visaFree':
        return rankRef.current[verticalColumn]?.[1] * 2
    }
  }, [])

  const marginCalculation = useCallback((visaPolicy:string, verticalColumn:number) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + (rankRef.current[verticalColumn]?.[3] * 2) + (rankRef.current[verticalColumn]?.[4] * 2) + 2
      case 'eVisa':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + (rankRef.current[verticalColumn]?.[3] * 2) + 2
      case 'visaOnArrival':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + 2
      case 'visaOnArrivalEvisa':
        return (rankRef.current[verticalColumn]?.[1] * 2) + 1
    }
  }, [])

  const textRender = useCallback((verticalColumn:number) => {
    if(rankRef.current[verticalColumn]?.[0] == undefined) {return}
    return languageCalculation[0][passportsArray.indexOf(rankRef.current?.[verticalColumn]?.[0])]?.charAt(0).toUpperCase() + languageCalculation[0][passportsArray.indexOf(rankRef.current?.[verticalColumn]?.[0])]?.slice(1)
  }, [rankRef.current, language])

  const passportRankRenderDesktop = useCallback((verticalColumn:number[]) => {
    return verticalColumn.map(verticalColumn =>
      <tr key={verticalColumn}>
        <td className={styles.rank}>
        <p>{rankRef.current[rankRefLength]?.[verticalColumn]}</p>
        </td>
        <td><Passport image={(passports[rankRef.current?.[verticalColumn]?.[0]] != undefined) && passports[rankRef.current?.[verticalColumn]?.[0]]}/></td>
        <td><p className={styles.text}>{textRender(verticalColumn)}</p></td>
        <td>
        <div className={styles.progressBarsContainer}>
          <div className={styles.textSeparator}>
            <p className={styles.textDiv}>{languageCalculation[0][dataSize - 1] + rankRef.current[verticalColumn]?.[6]}</p>
            <div className={styles.separator}></div>
            <p className={styles.textDiv}>{languageCalculation[0][dataSize - 2] + rankRef.current[verticalColumn]?.[8].toLocaleString()}</p>
          </div>
          <div className={styles.progressBarDesktop}>
            <VisaRequired width={widthCalculation('visaRequired', verticalColumn)} margin={marginCalculation('visaRequired', verticalColumn)} count={rankRef.current[verticalColumn]?.[5]} />
            <EVisa width={widthCalculation('eVisa', verticalColumn)} margin={marginCalculation('eVisa', verticalColumn)} count={rankRef.current[verticalColumn]?.[4]} />
            <VisaOnArrival width={widthCalculation('visaOnArrival', verticalColumn)} margin={marginCalculation('visaOnArrival', verticalColumn)} count={rankRef.current[verticalColumn]?.[3]} />
            <VisaOnArrivalEvisa width={widthCalculation('visaOnArrivalEvisa', verticalColumn)} margin={marginCalculation('visaOnArrivalEvisa', verticalColumn)} count={rankRef.current[verticalColumn]?.[2]} />
            <VisaFree width={widthCalculation('visaFree', verticalColumn)} count={rankRef.current[verticalColumn]?.[1]} />
            <InfoText count={rankRef.current[verticalColumn]}/>
          </div>
          <br/>
          <br/>
          <br/>
          <p className={styles.textDiv}>{languageCalculation[0][dataSize - 3] + rankRef.current[verticalColumn]?.[7]}</p>
          <div className={styles.progressBarDesktop}>
            <FreedomOfMovement max={42.4} count={rankRef.current[verticalColumn]?.[7]}/>
          </div>
        </div>
        </td>
      </tr>
    )
  }, [rankRef.current, language])

  const passportRankRenderMobile = useCallback((verticalColumn:number[]) => {
    return verticalColumn.map(verticalColumn =>
      <tr key={verticalColumn}>
        <td className={styles.mobileBackground}>
          <p className={styles.rank}>{rankRef.current[rankRefLength]?.[verticalColumn]}</p>
          <Passport image={(passports[rankRef.current?.[verticalColumn]?.[0]] != undefined) && passports[rankRef.current?.[verticalColumn]?.[0]]}/>
          <p className={styles.text}>{textRender(verticalColumn)}</p>
          <p className={styles.text}>{languageCalculation[0][dataSize - 1] + rankRef.current[verticalColumn]?.[6]}</p>
          <p className={styles.text}>{languageCalculation[0][dataSize - 3] + rankRef.current[verticalColumn]?.[7]}</p>
          <p className={styles.text}>{languageCalculation[0][dataSize - 2] + rankRef.current[verticalColumn]?.[8].toLocaleString()}</p>
        </td>
        {(dimensions.width <= 800) &&
        <td className={styles.mobileBackground}>
          <div className={styles.visaPolicyText}>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>{rankRef.current[verticalColumn]?.[1]}</p>
                  <p>{rankRef.current[verticalColumn]?.[2]}</p>
                  <p>{rankRef.current[verticalColumn]?.[3]}</p>
                  <p>{rankRef.current[verticalColumn]?.[4]}</p>
                  <p>{rankRef.current[verticalColumn]?.[5]}</p>
                </td>
                <td>
                  <p>🟩 Visa-free</p>
                  <p>🟧 VoA/E-visa</p>
                  <p>🟨 Visa on Arrival</p>
                  <p>🟦 E-visa</p>
                  <p>⬜ Visa Required</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </td>
        }
      </tr>
    )
  }, [rankRef.current, language])

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
    <table cellSpacing="0" cellPadding="20" className={(dimensions.width <= 800) ? styles.containerMobile : styles.containerDesktop}>
      <tbody>
        <tr>
          {(dimensions.width > 800) &&
          <>
          <td></td>
          <td></td>
          <td></td>
          </>
          }
          <td>
            <div className={'sortByContainer'}>
              <select className={'sortBy'} value={sortBy} onChange={handleChange}>
                {renderOptions(languageCalculation[1])}
              </select>
              <style jsx>{`
                .sortByContainer {
                  text-align: right;
                  ${(dimensions.width <= 800) && `
                    position: absolute;
                    top: 56px;
                    right: 18px;
                  `}
                }
                .sortBy, .sortByOrder {
                  height: 30px;
                  padding: 5px;
                  background-color: #222222;
                  color: #fff;
                  border: 1px solid #222222;
                  font-size: 16px;
                }
                .sortBy {
                  text-align: right;
                }
                .sortByOrder:hover {
                  border-color: #ccc;
                }
                .sortBy:hover {
                  border-color: #ccc;
                }
              `}</style>
              <button className={'sortByOrder'} onClick={() => {
                setSort(!sort)
                reverseSort(rankRef)
              }} style={{maxWidth: '30px', minWidth: '30px'}}>{(sort) ? '⬇️' : '⬆️'}
              </button>
            </div>
          </td>
        </tr>
        {((dimensions.width <= 800) ? passportRankRenderMobile(verticalColumn) : passportRankRenderDesktop(verticalColumn))}
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {(dimensions.width <= 800) &&
    <>
    <br />
    <br />
    <br />
    </>
    }
    </>
  )
}

export default Rank