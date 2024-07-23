import { useState, useMemo, useEffect, useContext, useRef, MutableRefObject } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import Head from 'next/head'
import Script from 'next/script'
import PassportMap from '../components/Map/PassportMap'
import InfoBox from '../components/InfoBox'
import Legend from '../components/Legend'
import individualVisaPolicyCalculation from '../logic/visaPolicyCalculation/individualVisaPolicyCalculation'
import individualVisaDurationCalculation from '../logic/visaPolicyCalculation/individualVisaDurationCalculation'
import legendCalculation from '../logic/legendCalculation'
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  setHover:Function;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  setSelectorLoad:Function;
  mousePos:{x:number,y:number};
  hover:boolean;
  countrySelect:string;
  visaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  legend:boolean[];
  setLegend:Function;
  setCountrySelect:Function;
}

const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JJ','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇰🇷','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🏳️','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
const options = ['Abkhazia','Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antigua and Barbuda','Argentina','Armenia','Aruba','Ascension Island','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia and Herzegovina','Botswana','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Colombia','Comoros','Cook Islands','Costa Rica','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica','Jan Mayen','Japan','Jeju','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kurdistan','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Northern Cyprus','Northern Mariana Islands','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn Islands','Poland','Portugal','Qatar','Republic of the Congo','Reunion','Romania','Russia','Rwanda','Saba','Saint Barthelemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Eustatius','Sint Maarten','Slovakia','Slovenia','Solomon Islands','Somalia','Somaliland','South Africa','South Korea','South Ossetia','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tokelau','Tonga','Transnistria','Trinidad and Tobago','Tristan Da Cunha','Tunisia','Turkey','Turkmenistan','Turks and Caicos','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Virgin Islands','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Wallis and Futuna','Western Sahara','Yemen','Zambia','Zimbabwe'];

const VisaPolicy:React.FC<Props> = ({ selectArrayRef, setHover, priorityRef, setSelectorLoad, mousePos, hover, countrySelect, visaDurationRef, legend, setLegend, setCountrySelect }) => {

  const dimensions = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    const tempPriorityRef = priorityRef.current
    setSelectorLoad(false)
    return () => {
      priorityRef.current = tempPriorityRef
    }
  }, [])

  const [filterValue, setFilterValue] = useState<string>('')
  const [display, setDisplay] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const visaPolicyDurationRef = useRef<{[key:string]:number}>()
  const filteredOptions = options.filter(option => option.toLowerCase().includes(filterValue.toLowerCase()))

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return 'Visa policy of:'
      case '🇪🇸ES': return 'Política de visas de:'
      case '🇵🇹PT': return 'Política de vistos de:'
      case '🇫🇷FR': return 'Politique de visa de:'
      case '🇭🇷HR': return 'Vizna politika:'
    }
  }, [language])

  const displayLegend = (display:boolean) => {
    if(display == true) {
      return <Legend legend={legend} position={'10'}/>
    }
  }

  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147951612524944" crossOrigin="anonymous"></Script>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <div>
      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          color: rgb(255, 255, 255);
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .text {
          cursor: pointer;
          background-color: rgb(100,100,100);
        }
        .visaText,
        .mobileText {
          margin-top: 40px;
        }
        .mobileText {
          top: 0;
          left: 0;
        }
        .inputText:hover {
          cursor: pointer;
          background-color: rgb(100,100,100);
        }
        .input,
        .mobileInput {
          margin-top: 71px;
          inline-size: 182px;
          overflow-wrap: break-word;
        }
        .mobileInput {
          top: 40px;
          z-index: 1;
          position: absolute;
        }
        .map {
          position: relative;
          margin-left: 10px;
        }
      `}</style>
      {(display == true) &&
      <div className={'map'}>
        <br />
        <br />
        <br />
        <br />
        <PassportMap setHover={setHover} selected={selected} priorityRef={priorityRef} setCountrySelect={setCountrySelect} />
      </div>
      }
      {(display == false) &&
      <div className={'container'}>
        <div className={(dimensions.width > 800) ? 'visaText' : 'mobileText'}>
          <h1>{languageCaculation}</h1>
        </div>
        <div className={(dimensions.width > 800) ? 'input' : 'mobileInput'}>
          <input
            type="text"
            placeholder=""
            value={filterValue}
            onChange={e => setFilterValue(e.target.value)}
          />
          {filterValue && (
            filteredOptions.map((option, index) => (
              <p className={'inputText'} onClick={() => {
                setSelected(ISOcodes[options.indexOf(option)])
                individualVisaPolicyCalculation(ISOcodes[options.indexOf(option)], priorityRef)
                individualVisaDurationCalculation(option, visaPolicyDurationRef)
                legendCalculation(setLegend, priorityRef)
                setFilterValue('')
                setDisplay(true)
              }} key={index}>{flags[options.indexOf(option)] + ' ' + option}</p>
            ))
          )}
        </div>
      </div>
      }
      {(display == true) &&
      <div className={'container'} 
        onClick={() => {
          setDisplay(false)
        }}>
        <p className={'text'}>{flags[ISOcodes.indexOf(selected)] + ' ' + options[ISOcodes.indexOf(selected)]}</p>
      </div>
      }
    </div>
    {(dimensions.width > 800) ?
    <InfoBox
      selectArrayRef={selectArrayRef}
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priorityRef={priorityRef}
      selected={selected}
      visaDurationRef={visaDurationRef}
      visaPolicyDurationRef={visaPolicyDurationRef}
    />
    : displayLegend(display)}
    </>
  )
}

export default VisaPolicy
