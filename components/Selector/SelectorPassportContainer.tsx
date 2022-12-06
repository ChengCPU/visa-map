import { useContext } from 'react'
import { PassportContext } from '../context/PassportContext'
import styles from '../../styles/SelectorPassportContainer.module.css';
import SelectorPassport from './SelectorPassport';
interface Props {
  setOpenDrawer:Function;
  select:{
    selection:number;
    passport:null | string;
  };
  setSelect:Function;
  toggle:boolean;
  setToggle:Function;
}
const passportsArray:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
const passportsRenderArray:any = ['A',0,1,2,'br',3,4,5,'br',6,7,8,'br',9,10,11,'br',12,'br','B',13,14,15,'br',16,17,18,'br',19,20,21,'br',22,23,24,'br',25,26,27,'br',28,29,30,'br',31,'br','C',32,33,34,'br',35,36,37,'br',38,39,40,'br',41,42,43,'br',44,45,46,'br',47,'br','D',48,49,50,'br',51,52,'br','E',53,54,55,'br',56,57,58,'br',59,60,61,'br','F',62,63,64,'br','G',65,66,67,'br',68,69,70,'br',71,72,73,'br',74,75,'br','H',76,77,78,'br',79,'br','I',80,81,82,'br',83,84,85,'br',86,87,88,'br','J',89,90,91,'br','K',92,93,94,'br',95,96,'br','L',97,98,99,'br',100,101,102,'br',103,104,105,'br','M',106,107,108,'br',109,110,111,'br',112,113,114,'br',115,116,117,'br',118,119,120,'br',121,122,123,'br',124,125,'br','N',126,127,128,'br',129,130,131,'br',132,133,134,'br',135,136,'br','O',137,'br','P',138,139,140,'br',141,142,143,'br',144,145,146,'br',147,'br','Q',148,'br','R',149,150,151,'br',152,'br','S',153,154,155,'br',156,157,158,'br',159,160,161,'br',162,163,164,'br',165,166,167,'br',168,169,170,'br',171,172,173,'br',174,175,176,'br',177,178,179,'br',180,'br','T',181,182,183,'br',184,185,186,'br',187,188,189,'br',190,191,192,'br','U',193,194,195,'br',196,197,198,'br',199,'br','V',200,201,202,'br',203,'br','Y',204,'br','Z',205,206,'br']

const SelectorPassportContainer:React.FC<Props> = ({ setOpenDrawer, select, setSelect, toggle, setToggle }) => {

  const passports = useContext(PassportContext)
  const renderPassports = (passportsRenderArray:any) => {
    return passportsRenderArray.map(passportsRenderArray =>
      (passportsRenderArray == 'br') 
        ? <br /> 
        : (typeof(passportsRenderArray) == 'string') 
        ? <h1 className={styles.text}>{passportsRenderArray}</h1> 
        : <SelectorPassport
            setOpenDrawer={setOpenDrawer}
            select={select}
            setSelect={setSelect}
            toggle={toggle}
            setToggle={setToggle}
            image={passports[passportsArray[passportsRenderArray]]}
            name={passportsArray[passportsRenderArray]} 
          />
    )
  }

  return (
    <div className={styles.container}>
    {renderPassports(passportsRenderArray)}
    </div>
  )
}

export default SelectorPassportContainer