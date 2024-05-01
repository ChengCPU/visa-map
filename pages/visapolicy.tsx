import { useState, useEffect, useContext, useRef, MutableRefObject } from 'react'
import { DimensionsContext } from '../logic/context/DimensionsContext'
import { LanguageContext } from '../logic/context/LanguageContext'
import Head from 'next/head'
import Script from 'next/script'
import PassportMap from '../components/Map/PassportMap'
import InfoBox from '../components/InfoBox'
import individualVisaPolicyCalculation from '../logic/visaPolicyCalculation/individualVisaPolicyCalculation'
import individualVisaDurationCalculation from '../logic/visaPolicyCalculation/individualVisaDurationCalculation'
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  setHover:Function;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  setSelectorLoad:Function;
  tempPriorityRef:MutableRefObject<{[key:string]:string}>;
  diffRef:MutableRefObject<{[key:string]:number}>;
  tempDiffRef:MutableRefObject<{[key:string]:number}>;
  mousePos:number | boolean[];
  hover:boolean;
  countrySelect:string;
  visaDurationRef:MutableRefObject<{[key:string]:number}[]>;
}

const countriesAndTerritories:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🏳️','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
const options = ['Abkhazia','Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antigua and Barbuda','Argentina','Armenia','Aruba','Ascension Island','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia and Herzegovina','Botswana','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Colombia','Comoros','Cook Islands','Costa Rica','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica','Jan Mayen','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kurdistan','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Northern Cyprus','Northern Mariana Islands','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn Islands','Poland','Portugal','Qatar','Republic of the Congo','Reunion','Romania','Russia','Rwanda','Saba','Saint Barthelemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Eustatius','Sint Maarten','Slovakia','Slovenia','Solomon Islands','Somalia','Somaliland','South Africa','South Korea','South Ossetia','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tokelau','Tonga','Transnistria','Trinidad and Tobago','Tristan Da Cunha','Tunisia','Turkey','Turkmenistan','Turks and Caicos','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Virgin Islands','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Wallis and Futuna','Western Sahara','Yemen','Zambia','Zimbabwe'];

const VisaPolicy:React.FC<Props> = ({ selectArrayRef, setHover, priorityRef, setSelectorLoad, tempPriorityRef, diffRef, tempDiffRef, mousePos, hover, countrySelect, visaDurationRef }) => {

  const dimensions = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    tempPriorityRef.current = priorityRef.current
    priorityRef.current = {ab:'rgb(150,150,150)',af:'rgb(150,150,150)',al:'rgb(150,150,150)',dz:'rgb(150,150,150)',as:'rgb(150,150,150)',ad:'rgb(150,150,150)',ao:'rgb(150,150,150)',ai:'rgb(150,150,150)',ag:'rgb(150,150,150)',ar:'rgb(150,150,150)',am:'rgb(150,150,150)',aw:'rgb(150,150,150)',ac:'rgb(150,150,150)',au:'rgb(150,150,150)',at:'rgb(150,150,150)',az:'rgb(150,150,150)',bs:'rgb(150,150,150)',bh:'rgb(150,150,150)',bd:'rgb(150,150,150)',bb:'rgb(150,150,150)',by:'rgb(150,150,150)',be:'rgb(150,150,150)',bz:'rgb(150,150,150)',bj:'rgb(150,150,150)',bm:'rgb(150,150,150)',bt:'rgb(150,150,150)',bo:'rgb(150,150,150)',xb:'rgb(150,150,150)',ba:'rgb(150,150,150)',bw:'rgb(150,150,150)',br:'rgb(150,150,150)',io:'rgb(150,150,150)',vg:'rgb(150,150,150)',bn:'rgb(150,150,150)',bg:'rgb(150,150,150)',bf:'rgb(150,150,150)',bi:'rgb(150,150,150)',kh:'rgb(150,150,150)',cm:'rgb(150,150,150)',ca:'rgb(150,150,150)',cv:'rgb(150,150,150)',ky:'rgb(150,150,150)',cf:'rgb(150,150,150)',td:'rgb(150,150,150)',cl:'rgb(150,150,150)',cn:'rgb(150,150,150)',co:'rgb(150,150,150)',km:'rgb(150,150,150)',ck:'rgb(150,150,150)',cr:'rgb(150,150,150)',hr:'rgb(150,150,150)',cu:'rgb(150,150,150)',cw:'rgb(150,150,150)',cy:'rgb(150,150,150)',cz:'rgb(150,150,150)',cd:'rgb(150,150,150)',dk:'rgb(150,150,150)',dj:'rgb(150,150,150)',dm:'rgb(150,150,150)',do:'rgb(150,150,150)',tl:'rgb(150,150,150)',ec:'rgb(150,150,150)',eg:'rgb(150,150,150)',sv:'rgb(150,150,150)',gq:'rgb(150,150,150)',er:'rgb(150,150,150)',ee:'rgb(150,150,150)',sz:'rgb(150,150,150)',et:'rgb(150,150,150)',fk:'rgb(150,150,150)',fo:'rgb(150,150,150)',fj:'rgb(150,150,150)',fi:'rgb(150,150,150)',fr:'rgb(150,150,150)',gf:'rgb(150,150,150)',pf:'rgb(150,150,150)',ga:'rgb(150,150,150)',gm:'rgb(150,150,150)',ge:'rgb(150,150,150)',de:'rgb(150,150,150)',gh:'rgb(150,150,150)',gi:'rgb(150,150,150)',gr:'rgb(150,150,150)',gl:'rgb(150,150,150)',gd:'rgb(150,150,150)',gp:'rgb(150,150,150)',gu:'rgb(150,150,150)',gt:'rgb(150,150,150)',gn:'rgb(150,150,150)',gw:'rgb(150,150,150)',gy:'rgb(150,150,150)',ht:'rgb(150,150,150)',hn:'rgb(150,150,150)',hk:'rgb(150,150,150)',hu:'rgb(150,150,150)',is:'rgb(150,150,150)',in:'rgb(150,150,150)',id:'rgb(150,150,150)',ir:'rgb(150,150,150)',iq:'rgb(150,150,150)',ie:'rgb(150,150,150)',il:'rgb(150,150,150)',it:'rgb(150,150,150)',ci:'rgb(150,150,150)',jm:'rgb(150,150,150)',xm:'rgb(150,150,150)',jp:'rgb(150,150,150)',jo:'rgb(150,150,150)',kz:'rgb(150,150,150)',ke:'rgb(150,150,150)',ki:'rgb(150,150,150)',xk:'rgb(150,150,150)',kx:'rgb(150,150,150)',kw:'rgb(150,150,150)',kg:'rgb(150,150,150)',la:'rgb(150,150,150)',lv:'rgb(150,150,150)',lb:'rgb(150,150,150)',ls:'rgb(150,150,150)',lr:'rgb(150,150,150)',ly:'rgb(150,150,150)',li:'rgb(150,150,150)',lt:'rgb(150,150,150)',lu:'rgb(150,150,150)',mo:'rgb(150,150,150)',mg:'rgb(150,150,150)',mw:'rgb(150,150,150)',my:'rgb(150,150,150)',mv:'rgb(150,150,150)',ml:'rgb(150,150,150)',mt:'rgb(150,150,150)',mh:'rgb(150,150,150)',mq:'rgb(150,150,150)',mr:'rgb(150,150,150)',mu:'rgb(150,150,150)',yt:'rgb(150,150,150)',mx:'rgb(150,150,150)',fm:'rgb(150,150,150)',md:'rgb(150,150,150)',mc:'rgb(150,150,150)',mn:'rgb(150,150,150)',me:'rgb(150,150,150)',ms:'rgb(150,150,150)',ma:'rgb(150,150,150)',mz:'rgb(150,150,150)',mm:'rgb(150,150,150)',na:'rgb(150,150,150)',nr:'rgb(150,150,150)',np:'rgb(150,150,150)',nl:'rgb(150,150,150)',nc:'rgb(150,150,150)',nz:'rgb(150,150,150)',ni:'rgb(150,150,150)',ne:'rgb(150,150,150)',ng:'rgb(150,150,150)',nu:'rgb(150,150,150)',rc:'rgb(150,150,150)',mp:'rgb(150,150,150)',kp:'rgb(150,150,150)',mk:'rgb(150,150,150)',no:'rgb(150,150,150)',om:'rgb(150,150,150)',pk:'rgb(150,150,150)',pw:'rgb(150,150,150)',ps:'rgb(150,150,150)',pa:'rgb(150,150,150)',pg:'rgb(150,150,150)',py:'rgb(150,150,150)',pe:'rgb(150,150,150)',ph:'rgb(150,150,150)',pn:'rgb(150,150,150)',pl:'rgb(150,150,150)',pt:'rgb(150,150,150)',qa:'rgb(150,150,150)',cg:'rgb(150,150,150)',re:'rgb(150,150,150)',ro:'rgb(150,150,150)',ru:'rgb(150,150,150)',rw:'rgb(150,150,150)',xs:'rgb(150,150,150)',bl:'rgb(150,150,150)',sh:'rgb(150,150,150)',kn:'rgb(150,150,150)',lc:'rgb(150,150,150)',mf:'rgb(150,150,150)',pm:'rgb(150,150,150)',vc:'rgb(150,150,150)',ws:'rgb(150,150,150)',sm:'rgb(150,150,150)',st:'rgb(150,150,150)',sa:'rgb(150,150,150)',sn:'rgb(150,150,150)',rs:'rgb(150,150,150)',sc:'rgb(150,150,150)',sl:'rgb(150,150,150)',sg:'rgb(150,150,150)',xe:'rgb(150,150,150)',sx:'rgb(150,150,150)',sk:'rgb(150,150,150)',si:'rgb(150,150,150)',sb:'rgb(150,150,150)',so:'rgb(150,150,150)',xx:'rgb(150,150,150)',za:'rgb(150,150,150)',kr:'rgb(150,150,150)',xo:'rgb(150,150,150)',ss:'rgb(150,150,150)',es:'rgb(150,150,150)',lk:'rgb(150,150,150)',sd:'rgb(150,150,150)',sr:'rgb(150,150,150)',xv:'rgb(150,150,150)',se:'rgb(150,150,150)',ch:'rgb(150,150,150)',sy:'rgb(150,150,150)',tw:'rgb(150,150,150)',tj:'rgb(150,150,150)',tz:'rgb(150,150,150)',th:'rgb(150,150,150)',tg:'rgb(150,150,150)',tk:'rgb(150,150,150)',to:'rgb(150,150,150)',xt:'rgb(150,150,150)',tt:'rgb(150,150,150)',tx:'rgb(150,150,150)',tn:'rgb(150,150,150)',tr:'rgb(150,150,150)',tm:'rgb(150,150,150)',tc:'rgb(150,150,150)',tv:'rgb(150,150,150)',ug:'rgb(150,150,150)',ua:'rgb(150,150,150)',ae:'rgb(150,150,150)',gb:'rgb(150,150,150)',us:'rgb(150,150,150)',vi:'rgb(150,150,150)',uy:'rgb(150,150,150)',uz:'rgb(150,150,150)',vu:'rgb(150,150,150)',va:'rgb(150,150,150)',ve:'rgb(150,150,150)',vn:'rgb(150,150,150)',wf:'rgb(150,150,150)',eh:'rgb(150,150,150)',ye:'rgb(150,150,150)',zm:'rgb(150,150,150)',zw:'rgb(150,150,150)'}
    tempDiffRef.current = diffRef.current
    diffRef.current = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
    setSelectorLoad(false)
  }, [])

  const [filterValue, setFilterValue] = useState<string>('')
  const [display, setDisplay] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const visaPolicyDurationRef = useRef<{[key:string]:number}>()
  const filteredOptions = options.filter(option => option.toLowerCase().includes(filterValue.toLowerCase()))

  const languageCaculation = () => {
    switch(language) {
      case '🇬🇧EN': return 'Visa policy of:'
      case '🇪🇸ES': return 'Política de visas de:'
      case '🇵🇹PT': return 'Política de vistos de:'
      case '🇫🇷FR': return 'Politique de visa de:'
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
          margin-top:40px;
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
      {(display == true) ? 
      <div className={'map'}>
        <br />
        <br />
        <br />
        <br />
        <PassportMap setHover={setHover} selected={selected} />
      </div>
      : null}
      {(display == false) ?
      <div className={'container'}>
        <div className={(dimensions.width > 800) ? 'visaText' : 'mobileText'}>
          <h1>{languageCaculation()}</h1>
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
                setSelected(countriesAndTerritories[options.indexOf(option)])
                individualVisaPolicyCalculation(countriesAndTerritories[options.indexOf(option)], priorityRef)
                individualVisaDurationCalculation(option, visaPolicyDurationRef)
                setFilterValue('')
                setDisplay(true)
              }} key={index}>{flags[options.indexOf(option)] + ' ' + option}</p>
            ))
          )}
        </div>
      </div>
      : null}
      {(display == true) ?
      <div className={'container'} 
        onClick={() => {
          setDisplay(false)
        }}>
        <p className={'text'}>{flags[countriesAndTerritories.indexOf(selected)] + ' ' + options[countriesAndTerritories.indexOf(selected)]}</p>
      </div>
      : null}
    </div>
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
    </>
  )
}

export default VisaPolicy
