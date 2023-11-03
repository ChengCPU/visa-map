import { useContext, useEffect } from 'react'
import { PassportContext } from '../logic/context/PassportContext'
import { WidthContext } from '../logic/context/WidthContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import Passport from '../components/Selector/Passport'
import SortBy from '../components/Rank/SortBy'
import InfoText from '../components/Rank/InfoText'
import VisaRequired from '../components/Rank/VisaRequired'
import EVisa from '../components/Rank/EVisa'
import VisaOnArrival from '../components/Rank/VisaOnArrival'
import VisaOnArrivalEvisa from '../components/Rank/VisaOnArrivalEvisa'
import VisaFree from '../components/Rank/VisaFree'
import styles from '../styles/Rank.module.css'
import FreedomOfMovement from '../components/Rank/FreedomOfMovement'
const countriesEN:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosnia and Herzegovina','botswana','brazil','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','costa Rica','croatia','cuba','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Zealand','nicaragua','niger','nigeria','north Korea','north Macedonia','norway','oman','pakistan','palau','panama','papua New Guinea','paraguay','peru','philippines','poland','portugal','qatar','republic of the Congo','romania','russia','rwanda','saint Helena','saint Kitts and Nevis','saint Lucia','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','slovakia','slovenia','solomon Islands','somalia','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','yemen','zambia','zimbabwe']
const countriesES:string[] = ['abjasia','afganistán','albania','argelia','andorra','angola','anguila','antigua y Barbuda','argentina','armenia','australia','austria','azerbaiyán','bahamas','bahrein','bangladesh','barbados','bielorrusia','bélgica','belice','benín','bermudas','bután','bolivia','bosnia y Herzegovina','botswana','brasil','islas Vírgenes Británicas','brunei','bulgaria','burkina Faso','burundi','camboya','camerún','canadá','cabo Verde','islas Caimán','república Centroafricana','chad','chile','china','colombia','comoras','costa Rica','croacia','cuba','chipre','república Checa','república Democrática del Congo','dinamarca','yibuti','domenica','república Dominicana','timor-Leste','ecuador','egipto','el Salvador','guinea Ecuatorial','eritrea','estonia','esuatini','etiopía','fiyi','finlandia','francia','gabón','gambia','georgia','alemania','ghana','grecia','granada','guatemala','guinea','guinea Bissau','guyana','haití','honduras','hong Kong','hungría','islandia','india','indonesia','irán','irak','irlanda','israel','italia','costa de marfil','jamaica','japón','jordania','kazajstán','kenia','kiribati','kuwait','kirguistán','laos','letonia','líbano','lesotho','liberia','libia','liechtenstein','lituania','luxemburgo','macao','madagascar','malawi','malasia','maldivas','mali','malta','islas Marshall','mauritania','mauricio','méjico','micronesia','moldavia','mónaco','mongolia','montenegro','montserrat','marruecos','mozambique','myanmar','namibia','nauru','nepal','países Bajos','nueva Zelanda','nicaragua','níger','nigeria','corea del Norte','macedonia del Norte','noruega','omán','pakistán','palau','panamá','papúa Nueva Guinea','paraguay','perú','filipinas','polonia','portugal','catar','república del Congo','rumania','rusia','ruanda','santa Elena','san Cristóbal y Nieves','santa Lucía','san Vicente y las Granadinas','samoa','san Marino','santo Tomé y Príncipe','arabia Saudita','senegal','serbia','seychelles','sierra Leona','singapur','slovaquia','eslovenia','islas Solomon','somalia','sudáfrica','corea del Sur','osetia del Sur','sudán del Sur','españa','sri Lanka','sudán','suriname','suecia','suiza','siria','taiwán','tayikistán','tanzania','tailandia','togo','tonga','trinidad y Tobago','túnez','turquía','turkmenistán','islas Turcas y Caicos','tuvalu','uganda','ucrania','emiratos Árabes Unidos','reino Unido','estados Unidos','uruguay','uzbekistan','vanuatu','santa Sede','venezuela','vietnam','yemen','zambia','zimbabue']
const countriesPT:string[] = ['abcázia','afeganistão','albânia','argélia','andorra','angola','anguila','antígua e Barbuda','argentina','arménia','austrália','áustria','azerbaijão','baamas','baharem','bangladesh','barbados','bielorrússia','bélgica','belize','benim','bermudas','butão','bolívia','bósnia e Herzegovina','botsuana','brasil','ilhas Virgens Britânicas','brunei','bulgária','burkina Faso','burundi','camboja','camarões','canadá','cabo Verde','ilhas Caymans','república Centro-Africana','chade','chile','china','colômbia','comores','costa Rica','croácia','cuba','chipre','república Checa','república Democrática do Congo ','dinamarca','djibouti','dominica','república Dominicana','timor-Leste','equador','egipto','el Salvador','guiné Equatorial','eritreia','estónia','esuatini','etiópia','fídji','finlândia','frança','gabão','gâmbia','geórgia','alemanha','gana','grécia','granada','guatemala','guiné-Conakri','guiné-Bissau','guiana','haiti','honduras','hong Kong','hungria','islândia','índia','indonésia','irão','iraque','irlanda','israel','itália','costa do Marfim','jamaica','japão','jordânia','cazaquistão','quénia','kiribati','koweit','quirguistão','laos','letónia','líbano','lesoto','libéria','líbia','liechtenstein','lituânia','luxemburgo','macau','madagáscar','malaui','malásia','maldivas','mali','malta','ilhas Marshalls','mauritânia','maurícias','méxico','micronésia','moldávia','mónaco','mongólia','montenegro','monserrate','marrocos','moçambique','myanmar','namíbia','nauru','nepal','países Baixos','nova Zelândia','nicarágua','níger','nigéria','coreia do Nortea','macedónia do Norte','noruega','oman','paquistão','palau','panamá','papua-Nova Guiné','paraguai','peru','filipinas','polónia','portugal','qatar','república do Congo','roménia','rússia','ruanda','santa Helena','são Cristóvão e Neves','santa Lúcia','são Vicente e as Granadinas','samoa','san Marino','são Tomé e Príncipe','arábia Saudita','senegal','sérvia','seychelles','serra Leoa','singapura','eslováquia','eslovénia','ilhas Salomão','somália','áfrica do Sul','coreia do Sul','ossétia do Sul','sudão do Sul','espanha','sri Lanka','sudão','suriname','suécia','suíça','síria','taiwan','tajiquistão','tanzânia','tailândia','togo','tonga','trinidad e Tobago','tunísia','turquia','turquemenistão','turcas e Caicos','tuvalu','uganda','ucrânia','emiratos Árabes Unidos','reino Unido','estados Unidos da América','uruguai','uzbequistão','vanuatu','santa Sé','venezuela','vietnã','iémen','zâmbia','zimbabwe']
const countriesFR:string[] = ['abkhazie','afghanistan', 'albanie','algérie','andorre','angola','anguilla','antigua-et-Barbuda','argentine','arménie','australie','autriche','azerbaïdjan','bahamas','bahreïn','bangladesh','barbade','biélorussie','belgique','belize','bénin','bermudes','bhoutan','bolivie','bosnie-Herzégovine','botswana','brésil','Îles Vierges britanniques','brunei','bulgarie','burkina Faso','burundi','cambodge','cameroun','canada','cap-Vert','îles Caïmans','république centrafricaine','tchad','chili','chine','colombie','comores','costa Rica','croatie','cuba','chypre','république tchèque','république Démocratique du Congo','danemark','djibouti','dominique','république dominicaine','timor Oriental','équateur','égypte','salvador','guinée équatoriale','érythrée','estonie','eswatini','éthiopie','fidji','finlande','france','gabon','gambie','géorgie','allemagne','ghana','grèce','grenade','guatemala','guinée','guinée-Bissau','guyana','haïti','honduras','hong Kong','hongrie','islande','inde','indonésie','iran','irak','irlande','israël','italie','côte d\'Ivoire','jamaïque','japon','jordanie','kazakhstan','kenya','kiribati','koweït','kirghizistan','laos','lettonie','liban','lesotho','liberia','libye','liechtenstein','lituanie','luxembourg','macao','madagascar','malawi','malaisie','maldives','mali','malte','îles Marshall','mauritanie','maurice','mexique','micronésie','moldavie','monaco','mongolie','monténégro','montserrat','maroc','mozambique','myanmar','namibie','nauru','népal','pays-Bas','nouvelle-Zélande','nicaragua','niger','nigeria','corée du Nord','macédoine du Nord','norvège','oman','pakistan','palaos','panamá','papouasie-Nouvelle-Guinée','paraguay','pérou','philippines','pologne','portugal','qatar','république du Congo','roumanie','russie','rouanda','sainte-Hélène','saint-Christophe-et-Niévès','sainte-Lucie','saint-Vincent-et-les Grenadines','samoa','saint-Marin','são Tomé-et-Príncipe','arabie Saoudite','sénégal','serbie','seychelles','sierra Leone','singapour','slovaquie','slovénie','îles Salomon','somalie','afrique du Sud','corée du Sud','ossétie du Sud','soudan du Sud','espagne','sri Lanca','soudan','suriname','suède','suisse','syrie','taïwan','tadjikistan','tanzanie','thaïlande','togo','tonga','trinité-et-Tobago','tunisie','turquie','turkménistan','îles Turques-et-Caïques','tuvalu','ouganda','ukraine','émirats arabes unis','royaume-Uni','états-Unis d\'Amérique','uruguay','ouzbékistan','vanuatu','saint-Siège','venezuela','viêt Nam','yémen','zambie','zimbábue']
const passportsArray:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
let verticalColumn:number[] = []
for(let passportCount = 0; passportCount < passportsArray.length; passportCount++) {verticalColumn.push(passportCount)}
interface Props {
  rankRef:any;
  sortBy:string;
  setSortBy:Function;
  mobile:boolean;
  setSelectorLoad:Function;
}

const Rank:React.FC<Props> = ({ rankRef, sortBy, setSortBy, setSelectorLoad }) => {

  useEffect(() => {
    setSelectorLoad(false);
  }, [])

  const passports = useContext(PassportContext)
  const width = useContext(WidthContext)
  const { language } = useContext(LanguageContext)

  const rankRefLength = rankRef.current.length - 1
  const order = rankRef.current[rankRefLength]

  const languageCaculation = () => {
    switch(language){
      case '🇬🇧EN': return countriesEN
      case '🇪🇸ES': return countriesES
      case '🇵🇹PT': return countriesPT
      case '🇫🇷FR': return countriesFR
    }
  }

  const widthCalculation = (visaPolicy:string, verticalColumn:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return 500
      case 'evisa':
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
  }

  const marginCalculation = (visaPolicy:string, verticalColumn:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + (rankRef.current[verticalColumn]?.[3] * 2) + (rankRef.current[verticalColumn]?.[4] * 2) + 2
      case 'evisa':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + (rankRef.current[verticalColumn]?.[3] * 2) + 2
      case 'visaOnArrival':
        return (rankRef.current[verticalColumn]?.[1] * 2) + (rankRef.current[verticalColumn]?.[2] * 2) + 2
      case 'visaOnArrivalEvisa':
        return (rankRef.current[verticalColumn]?.[1] * 2) + 1
    }
  }

  const textRender = (verticalColumn:any) => {
    if(rankRef.current[verticalColumn]?.[0] == undefined) {return}
    return languageCaculation()[passportsArray.indexOf(rankRef.current?.[verticalColumn]?.[0])]?.charAt(0).toUpperCase() + languageCaculation()[passportsArray.indexOf(rankRef.current?.[verticalColumn]?.[0])]?.slice(1)
  }

  const passportRankRenderDesktop = (verticalColumn:any) => {
    return verticalColumn.map(verticalColumn =>
    <tr key={verticalColumn}>
      <td className={styles.rank}>
      <p>{order?.[verticalColumn]}</p>
      </td>
      <td><Passport image={(passports[rankRef.current?.[verticalColumn]?.[0]] == undefined) ? null : passports[rankRef.current?.[verticalColumn]?.[0]]}/></td>
      <td><p className={styles.text}>{textRender(verticalColumn)}</p></td>
      <td>
      <div className={styles.progressBarsContainer}>
        <p className={styles.textDiv}>{'Total: ' + rankRef.current[verticalColumn]?.[6]}</p>
        <div className={styles.progressBarDesktop}>
          <VisaRequired widthCalculation={widthCalculation} marginCalculation={marginCalculation} verticalColumn={verticalColumn} count={rankRef.current[verticalColumn]?.[5]} />
          <EVisa widthCalculation={widthCalculation} marginCalculation={marginCalculation} verticalColumn={verticalColumn} count={rankRef.current[verticalColumn]?.[4]} />
          <VisaOnArrival widthCalculation={widthCalculation} marginCalculation={marginCalculation} verticalColumn={verticalColumn} count={rankRef.current[verticalColumn]?.[3]} />
          <VisaOnArrivalEvisa widthCalculation={widthCalculation} marginCalculation={marginCalculation} verticalColumn={verticalColumn} count={rankRef.current[verticalColumn]?.[2]} />
          <VisaFree widthCalculation={widthCalculation} marginCalculation={marginCalculation} verticalColumn={verticalColumn} count={rankRef.current[verticalColumn]?.[1]} />
          <InfoText count={rankRef.current[verticalColumn]}/>
        </div>
        <br/>
        <br/>
        <br/>
        <p className={styles.textDiv}>{'Freedom of Movement: ' + rankRef.current[verticalColumn]?.[7]}</p>
        <div className={styles.progressBarDesktop}>
          <FreedomOfMovement max={42.4} count={rankRef.current[verticalColumn]?.[7]}/>
        </div>
      </div>
      </td>
    </tr>
    )
  }

  const passportRankRenderMobile = (verticalColumn:any) => {
    return verticalColumn.map(verticalColumn =>
    <tr key={verticalColumn}>
      <td>
        <p className={styles.rank}>{order?.[verticalColumn]}</p>
        <Passport image={(passports[rankRef.current?.[verticalColumn]?.[0]] == undefined) ? null : passports[rankRef.current?.[verticalColumn]?.[0]]}/>
        <p className={styles.text}>{textRender(verticalColumn)}</p>
        <p className={styles.text}>{'Total: ' + rankRef.current[verticalColumn]?.[6]}</p>
        <p className={styles.text}>{'Freedom of Movement: ' + rankRef.current[verticalColumn]?.[7]}</p>
      </td>
      {
      (width.width <= 800) ?
      <td>
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
      :
      null
      }
    </tr>
    )
  }

  return (
    <>
    <br />
    <br />
    <br />
    {
    (width.width <= 800) ?
    <div className={styles.centered}>
      <SortBy
        sortBy={sortBy}
        setSortBy={setSortBy}
        rankRef={rankRef}
      />
    </div>
    : null
    }
    <table cellSpacing="0" cellPadding="20" className={(width.width <= 800) ? styles.containerMobile : styles.containerDesktop}>
      <tbody>
      <tr>
        {
        (width.width <= 800) ?
        null
        :
        <>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <SortBy
            sortBy={sortBy}
            setSortBy={setSortBy}
            rankRef={rankRef}
          />
        </td>
        </>
        }
      </tr>
      {(width.width <= 800) ? passportRankRenderMobile(verticalColumn) : passportRankRenderDesktop(verticalColumn)}
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {
    (width.width <= 800) ?
    <>
    <br />
    <br />
    <br />
    </>
    : null
    }
    </>
  )
}

export default Rank
