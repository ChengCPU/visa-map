import Passport from '../components/Selector/Passport';
import { useContext, useEffect, useState } from 'react';
import { PassportContext } from '../components/context/PassportContext';
import styles from '../styles/Rank.module.css';
const countriesAndTerritories:string[] = [
  'abkhazia',
  'afghanistan', 
  'albania',
  'algeria',
  'americanSamoa',
  'andorra',
  'angola',
  'anguilla',
  'antiguaAndBarbuda',
  'argentina',
  'armenia',
  'aruba',
  'australia',
  'austria',
  'azerbaijan',
  'bahamas',
  'bahrain',
  'bangladesh',
  'barbados',
  'belarus',
  'belgium',
  'belize',
  'benin',
  'bermuda',
  'bhutan',
  'bolivia',
  'bonaire',
  'bosniaAndHerzegovina',
  'botswana',
  'bouvetIsland',
  'brazil',
  'britishIndianOceanTerritory',
  'britishVirginIslands',
  'brunei',
  'bulgaria',
  'burkinaFaso',
  'burundi',
  'cambodia',
  'cameroon',
  'canada',
  'capeVerde',
  'caymanIslands',
  'centralAfricanRepublic',
  'chad',
  'chile',
  'china',
  'colombia',
  'comoros',
  'cookIslands',
  'costaRica',
  'croatia',
  'cuba',
  'curacao',
  'cyprus',
  'czechRepublic',
  'democraticRepublicOfTheCongo',
  'denmark',
  'djibouti',
  'dominica',
  'dominicanRepublic',
  'eastTimor',
  'ecuador',
  'egypt',
  'elSalvador',
  'equatorialGuinea',
  'eritrea',
  'estonia',
  'eswatini',
  'ethiopia',
  'falklandIslands',
  'faroeIslands',
  'fiji',
  'finland',
  'france',
  'frenchGuiana',
  'frenchPolynesia',
  'gabon',
  'gambia',
  'georgia',
  'germany',
  'ghana',
  'gibraltar',
  'greece',
  'greenland',
  'grenada',
  'guadeloupe',
  'guam',
  'guatemala',
  'guernsey',
  'guinea',
  'guineaBissau',
  'guyana',
  'haiti',
  'heardIslandAndMcDonaldIslands',
  'honduras',
  'hongKong',
  'hungary',
  'iceland',
  'india',
  'indonesia',
  'iran',
  'iraq',
  'ireland',
  'isleOfMan',
  'israel',
  'italy',
  'ivoryCoast',
  'jamaica',
  'janMayen',
  'japan',
  'jersey',
  'jordan',
  'kazakhstan',
  'kenya',
  'kiribati',
  'kosovo',
  'kuwait',
  'kyrgyzstan',
  'laos',
  'latvia',
  'lebanon',
  'lesotho',
  'liberia',
  'libya',
  'liechtenstein',
  'lithuania',
  'luxembourg',
  'macao',
  'madagascar',
  'malawi',
  'malaysia',
  'maldives',
  'mali',
  'malta',
  'marshallIslands',
  'martinique',
  'mauritania',
  'mauritius',
  'mayotte',
  'mexico',
  'micronesia',
  'moldova',
  'monaco',
  'mongolia',
  'montenegro',
  'montserrat',
  'morocco',
  'mozambique',
  'myanmar',
  'namibia',
  'nauru',
  'nepal',
  'netherlands',
  'newCaledonia',
  'newZealand',
  'nicaragua',
  'niger',
  'nigeria',
  'niue',
  'norfolkIsland',
  'northernCyprus',
  'northernMarianaIslands',
  'northKorea',
  'northMacedonia',
  'norway',
  'oman',
  'pakistan',
  'palau',
  'palestine',
  'panama',
  'papuaNewGuinea',
  'paraguay',
  'peru',
  'philippines',
  'pitcairnIslands',
  'poland',
  'portugal',
  'qatar',
  'republicOfTheCongo',
  'reunion',
  'romania',
  'russia',
  'rwanda',
  'saba',
  'saintBarthelemy',
  'saintHelena',
  'saintKittsAndNevis',
  'saintLucia',
  'saintMartin',
  'saintPierreAndMiquelon',
  'saintVincentAndTheGrenadines',
  'samoa',
  'sanMarino',
  'saoTomeAndPrincipe',
  'saudiArabia',
  'senegal',
  'serbia',
  'seychelles',
  'sierraLeone',
  'singapore',
  'sintEustatius',
  'sintMaarten',
  'slovakia',
  'slovenia',
  'solomonIslands',
  'somalia',
  'southAfrica',
  'southGeorgiaAndTheSouthSandwichIslands',
  'southKorea',
  'southOssetia',
  'southSudan',
  'spain',
  'sriLanka',
  'sudan',
  'suriname',
  'svalbard',
  'sweden',
  'switzerland',
  'syria',
  'taiwan',
  'tajikistan',
  'tanzania',
  'thailand',
  'togo',
  'tokelau',
  'tonga',
  'transnistria',
  'trinidadAndTobago',
  'tunisia',
  'turkey',
  'turkmenistan',
  'turksAndCaicos',
  'tuvalu',
  'uganda',
  'ukraine',
  'unitedArabEmirates',
  'unitedKingdom',
  'unitedStates',
  'unitedStatesVirginIslands',
  'uruguay',
  'uzbekistan',
  'vanuatu',
  'vaticanCity',
  'venezuela',
  'vietnam',
  'wallisAndFutuna',
  'westernSahara',
  'yemen',
  'zambia',
  'zimbabwe'
]
const countries:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosnia and Herzegovina','botswana','brazil','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','costa Rica','croatia','cuba','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Zealand','nicaragua','niger','nigeria','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','poland','portugal','qatar','republic of the Congo','romania','russia','rwanda','saint Helena','saint Kitts and Nevis','saint Lucia','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','slovakia','slovenia','solomon Islands','somalia','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','yemen','zambia','zimbabwe']
const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
let verticalColumn:number[] = []
  for(let passportCount = 0; passportCount < passportsArray.length; passportCount++) {
    verticalColumn.push(passportCount)
  }


const Rank:React.FC = () => {

  const [vfData, setVfData] = useState([])

  useEffect(() => {
    fetchVfData()
  }, [])

  const fetchVfData = () => {
    let count = 0
    const visaFreeData = []
    fetch('visaPolicy.json')
    .then((res) => res.json())
    .then((data) => {
      for(const passport of passportsArray) {
        for(let countriesLoop = 0; countriesLoop < countriesAndTerritories.length; countriesLoop++) {
          if(data[passport][countriesAndTerritories[countriesLoop]] == 0
            || data[passport][countriesAndTerritories[countriesLoop]] == 2
            || data[passport][countriesAndTerritories[countriesLoop]] == 3
            || data[passport][countriesAndTerritories[countriesLoop]] == 4
            || data[passport][countriesAndTerritories[countriesLoop]] == 5
            || data[passport][countriesAndTerritories[countriesLoop]] == 6
            || data[passport][countriesAndTerritories[countriesLoop]] == 7
            || countriesLoop == countriesAndTerritories.length - 1) {
            count++
            if(countriesLoop == countriesAndTerritories.length - 1) {
              visaFreeData.push([passport, count])
            }
          }
        }
        count = 0
      }
      setVfData(visaFreeData)
    })
  }

  const passports = useContext(PassportContext)

  const renderRank = (verticalColumn) => {
    return verticalColumn.map(verticalColumn =>
    <tr key={verticalColumn}>
      <td><Passport image={passports[passportsArray[verticalColumn]]}/></td>
      <td><div className={styles.text}><p>{countries[verticalColumn].charAt(0).toUpperCase() + countries[verticalColumn].slice(1)}</p></div></td>
      <td>
        <div className={'progressBar'}><style jsx>{`
        .progressBar {
          margin: 0px;
          padding: 5px 4px 3px;
          width: 206px;
          height: 20px;
          background: rgb(255, 255, 255);
          position:relative;
          text-align: left;
          float: left;
        }
        `}</style></div>
        <div className={'visaFree'}><style jsx>{`
        .visaFree {
          margin: 0px;
          padding: 5px 4px 3px;
          width: ${vfData[verticalColumn]?.[1]}px;
          height: 20px;
          background: rgb(50, 205, 50);
          position:absolute;
          text-align: left;
          float: left;
        }
        `}</style></div>
      </td>
    </tr>
    )
  }
  return (
    <>
    <br />
    <br />
    <br />
    <table cellSpacing="0" cellPadding="20" className={styles.container}>
      <tbody>
      {renderRank(verticalColumn)}
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
  )
}

export default Rank