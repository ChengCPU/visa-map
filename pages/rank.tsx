import Passport from '../components/Selector/Passport';
import { useContext } from 'react';
import { PassportContext } from '../components/context/PassportContext';
import styles from '../styles/Rank.module.css';
const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
let verticalColumn:number[] = []
for(let passportCount = 0; passportCount < 1; passportCount++) {
  verticalColumn.push(passportCount)
}

const Rank:React.FC = () => {

  const passports = useContext(PassportContext)

  const renderRank = () => {
    return verticalColumn.map(verticalColumn =>
      <div className={styles.container} key={verticalColumn}>
      <Passport image={passports[passportsArray[verticalColumn]]}/>
      <p>{passportsArray[verticalColumn]}</p>
      <div>
        <div className={'progressBar'}><style jsx>{`
        .progressBar {
          margin: 0px;
          padding: 5px 4px 3px;
          width: 200px;
          height: 20px;
          background-color: rgb(255, 255, 255);
          position:relative;
          text-align: left;
          float: left;
        }
        `}</style></div>
        <div className={'visaFree'}><style jsx>{`
        .visaFree {
          margin: 0px;
          padding: 5px 4px 3px;
          width: ${verticalColumn}px;
          height: 20px;
          background-color: rgb(50, 205, 50);
          position:absolute;
          text-align: left;
          float: left;
        }
        `}</style></div>
        </div>
      </div>
    )
  }
  return (
    <>
    <br />
    <br />
    <br />
    {renderRank()}
    </>
  )
}

export default Rank