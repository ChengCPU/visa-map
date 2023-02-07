import Passport from '../components/Selector/Passport';
import { useContext } from 'react';
import { PassportContext } from '../components/context/PassportContext';
import SortBy from '../components/Rank/SortBy';
import VisaRequired from '../components/Rank/VisaRequired';
import EVisa from '../components/Rank/EVisa';
import VisaOnArrival from '../components/Rank/VisaOnArrival';
import VisaOnArrivalEvisa from '../components/Rank/VisaOnArrivalEvisa';
import VisaFree from '../components/Rank/VisaFree';
import styles from '../styles/Rank.module.css';
const countries:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosnia and Herzegovina','botswana','brazil','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','costa Rica','croatia','cuba','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Zealand','nicaragua','niger','nigeria','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','poland','portugal','qatar','republic of the Congo','romania','russia','rwanda','saint Helena','saint Kitts and Nevis','saint Lucia','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','slovakia','slovenia','solomon Islands','somalia','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','yemen','zambia','zimbabwe']
const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
let verticalColumn:number[] = []
  for(let passportCount = 0; passportCount < passportsArray.length; passportCount++) {
    verticalColumn.push(passportCount)
  }
interface Props {
  visaPolicyData:any;
  rankRender:any;
  setVisaPolicyData:Function;
  setRankRender:Function;
  sortBy:string;
  setSortBy:Function;
  mobile:boolean;
}

const Rank:React.FC<Props> = ({ visaPolicyData, rankRender, setVisaPolicyData, setRankRender, sortBy, setSortBy, mobile }) => {

  const passports = useContext(PassportContext)

  const widthCalculation = (visaPolicy:string, verticalColumn:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return 500
      case 'evisa':
        return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2) + (visaPolicyData[verticalColumn]?.[3] * 2) + (visaPolicyData[verticalColumn]?.[4] * 2)
      case 'visaOnArrival':
        return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2) + (visaPolicyData[verticalColumn]?.[3] * 2)
      case 'visaOnArrivalEvisa':
        if(visaPolicyData[verticalColumn]?.[2] == 0) {return 0}
        if(visaPolicyData[verticalColumn]?.[2] < 7) {return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2) + 2}
        return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2)
      case 'visaFree':
        return visaPolicyData[verticalColumn]?.[1] * 2
    }
  }

  const marginCalculation = (visaPolicy:string, verticalColumn:any) => {
    switch(visaPolicy) {
      case 'visaRequired':
        return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2) + (visaPolicyData[verticalColumn]?.[3] * 2) + (visaPolicyData[verticalColumn]?.[4] * 2) + 2
      case 'evisa':
        return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2) + (visaPolicyData[verticalColumn]?.[3] * 2) + 2
      case 'visaOnArrival':
        return (visaPolicyData[verticalColumn]?.[1] * 2) + (visaPolicyData[verticalColumn]?.[2] * 2) + 2
      case 'visaOnArrivalEvisa':
        return (visaPolicyData[verticalColumn]?.[1] * 2) + 1
    }
  }

  const textRender = (verticalColumn:any) => {
    if(rankRender[verticalColumn]?.[0] == undefined) {return}
    return countries[passportsArray.indexOf(rankRender?.[verticalColumn]?.[0])]?.charAt(0).toUpperCase() + countries[passportsArray.indexOf(rankRender?.[verticalColumn]?.[0])]?.slice(1)
  }

  const passportRankRenderDesktop = (verticalColumn:any) => {
    return verticalColumn.map(verticalColumn =>
    <tr key={verticalColumn}>
      <td className={styles.rank}>
      <p>{verticalColumn + 1}</p>
      </td>
      <td><Passport image={(passports[rankRender?.[verticalColumn]?.[0]] == undefined) ? null : passports[rankRender?.[verticalColumn]?.[0]]}/></td>
      <td><div className={styles.text}><p>{textRender(verticalColumn)}</p></div></td>
      <td>
        <p className={styles.text}>{'Total: ' + visaPolicyData[verticalColumn]?.[6]}</p>
        <div className={styles.progressBarDesktop}></div>
        <VisaRequired
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <EVisa
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <VisaOnArrival
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <VisaOnArrivalEvisa
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <VisaFree
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
      </td>
    </tr>
    )
  }

  const passportRankRenderMobile = (verticalColumn:any) => {
    return verticalColumn.map(verticalColumn =>
    <tr key={verticalColumn}>
      <td>
      <p className={styles.rank}>{verticalColumn + 1}</p>
      <Passport image={(passports[rankRender?.[verticalColumn]?.[0]] == undefined) ? null : passports[rankRender?.[verticalColumn]?.[0]]}/>
      <div className={styles.text}><p>{textRender(verticalColumn)}</p></div>
      <p className={styles.text}>{'Total: ' + visaPolicyData[verticalColumn]?.[6]}</p>
        <div className={styles.progressBarMobile}></div>
        <VisaRequired
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <EVisa
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <VisaOnArrival
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <VisaOnArrivalEvisa
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
        <VisaFree
          widthCalculation={widthCalculation}
          marginCalculation={marginCalculation}
          verticalColumn={verticalColumn}
          visaPolicyData={visaPolicyData}
        />
      </td>
    </tr>
    )
  }

  return (
    <>
    <br />
    <br />
    <br />
    <table cellSpacing="0" cellPadding="20" className={(mobile == true) ? styles.containerMobile : styles.containerDesktop}>
      <tbody>
      <tr>
        {(mobile == true) ? null : 
        <>
        <td></td>
        <td></td>
        <td></td>
        </>}
        <td>
          <SortBy 
            sortBy={sortBy}
            setSortBy={setSortBy}
            setVisaPolicyData={setVisaPolicyData}
            setRankRender={setRankRender}
          />
        </td>
      </tr>
      {(mobile == true) ? passportRankRenderMobile(verticalColumn) : passportRankRenderDesktop(verticalColumn)}
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    {(mobile == true) ?
    <>
    <br />
    <br />
    <br />
    </>
    : null}
    </>
  )
}

export default Rank