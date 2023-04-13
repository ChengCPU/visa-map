import Rectangle from './Map/Legend/Rectangle';
const countriesEN:string[] = ['abkhazia','afghanistan','albania','algeria','american Samoa','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','aruba','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosnia and Herzegovina','botswana','bouvet Island','brazil','british Indian Ocean Territory','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','cook Islands','costa Rica','croatia','cuba','curacao','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','falkland Islands','faroe Islands','fiji','finland','france','french Guiana','french Polynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guernsey','guinea','guinea Bissau','guyana','haiti','heard Island and McDonald Islands','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','isle of Man','israel','italy','ivory Coast','jamaica','jan Mayen','japan','jersey','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Caledonia','new Zealand','nicaragua','niger','nigeria','niue','norfolk Island','northern Cyprus','northern Mariana Islands','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','pitcairn Islands','poland','portugal','qatar','republic of the Congo','reunion','romania','russia','rwanda','saba','saint Barthelemy','saint Helena','saint Kitts and Nevis','saint Lucia','saint Martin','saint Pierre and Miquelon','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','sint Eustatius','sint Maarten','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Georgia and the South Sandwich Islands','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','united States Virgin Islands','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','wallis and Futuna','western Sahara','yemen','zambia','zimbabwe']
const countries:string[] = ['abkhazia','afghanistan','albania','algeria','americanSamoa','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','aruba','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bonaire','bosniaAndHerzegovina','botswana','bouvetIsland','brazil','britishIndianOceanTerritory','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','cookIslands','costaRica','croatia','cuba','curacao','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','falklandIslands','faroeIslands','fiji','finland','france','frenchGuiana','frenchPolynesia','gabon','gambia','georgia','germany','ghana','gibraltar','greece','greenland','grenada','guadeloupe','guam','guatemala','guernsey','guinea','guineaBissau','guyana','haiti','heardIslandAndMcDonaldIslands','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','isleOfMan','israel','italy','ivoryCoast','jamaica','janMayen','japan','jersey','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','martinique','mauritania','mauritius','mayotte','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newCaledonia','newZealand','nicaragua','niger','nigeria','niue','norfolkIsland','northernCyprus','northernMarianaIslands','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','pitcairnIslands','poland','portugal','qatar','republicOfTheCongo','reunion','romania','russia','rwanda','saba','saintBarthelemy','saintHelena','saintKittsAndNevis','saintLucia','saintMartin','saintPierreAndMiquelon','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','sintEustatius','sintMaarten','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southGeorgiaAndTheSouthSandwichIslands','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','svalbard','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tokelau','tonga','transnistria','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','unitedStatesVirginIslands','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','wallisAndFutuna','westernSahara','yemen','zambia','zimbabwe']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🏳️','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇬','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇲','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇯🇪','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇳🇫','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇬🇸','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
interface Props {
  mousePos:number | boolean[];
  hover:boolean;
  countrySelect:string;
  priority:any;
}

const InfoBox:React.FC<Props> = ({ mousePos, hover, countrySelect, priority }) => {

  const rgbToText = (rgb:string) => {
    switch(rgb) {
      case 'rgb(255,20,147)':
        return 'Home country'
      case 'rgb(255,145,0)':
        return 'OECS freedom of movement'
      case 'rgb(0,135,93)':
        return 'MERCSOUR freedom of movement'
      case 'rgb(0,51,153)':
        return 'EU freedom of movement'
      case 'rgb(153,123,61)':
        return 'GCC freedom of movement'
      case 'rgb(255,179,191)':
        return 'Freedom of movement'
      case 'rgb(50,205,50)':
        return 'Visa-free'
      case 'rgb(161,224,123)':
        return 'Visa on arrival/E-visa'
      case 'rgb(255,255,92)':
        return 'Visa on arrival'
      case 'rgb(135,206,250)':
        return 'E-visa'
      case 'rgb(118,65,171)':
        return 'Special permit/police check'
      case 'rgb(200,200,200)':
        return 'Simplified visa'
      case 'rgb(149,150,150)':
        return 'Visa required'
      case 'rgb(0,0,0)':
        return 'Admission refused'
    }
  }

  return (
    (hover == true) ?
    <div className={'infoBox'}><style jsx>{`
    .infoBox {
      background-color: white;
      position: absolute;
      left: ${mousePos[0] + 5 + 'px'};
      top: ${mousePos[1] + 5 + 'px'};
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
      display:flex;
      align-items:center;
      justify-content:left;
    }
    `}</style>
      <table>
        <tbody>
          <tr>
            <td>
              <p>{flags[countries.indexOf(countrySelect)] + ' ' + countriesEN[countries.indexOf(countrySelect)]?.charAt(0).toUpperCase() + countriesEN[countries.indexOf(countrySelect)]?.slice(1)}</p>
              <div className={'legend'}>
                <Rectangle color={priority[countrySelect + 'Color']}/>
                <p>{rgbToText(priority[countrySelect + 'Color'])}</p>
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