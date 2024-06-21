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
  tempPriorityRef:MutableRefObject<{[key:string]:string}>;
  diffRef:MutableRefObject<{[key:string]:boolean}>;
  tempDiffRef:MutableRefObject<{[key:string]:boolean}>;
  mousePos:number | boolean[];
  hover:boolean;
  countrySelect:string;
  visaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  legend:boolean[];
  setLegend:Function;
}

const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const flags:string[] = ['🏳️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇨','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇶','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇰','🇨🇷','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇨🇩','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇹🇱','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇰','🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇨🇮','🇯🇲','🇸🇯','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🏳️','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🏳️','🇲🇵','🇰🇵','🇲🇰','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇶🇦','🇨🇬','🇷🇪','🇷🇴','🇷🇺','🇷🇼','🏳️','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇲🇫','🇵🇲','🇻🇨','🇼🇸','🇸🇲','🇸🇹','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🏳️','🇸🇽','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🏳️','🇿🇦','🇰🇷','🏳️','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇯','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇰','🇹🇴','🏳️','🇹🇹','🇹🇦','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇻🇮','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼']
const options = ['Abkhazia','Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antigua and Barbuda','Argentina','Armenia','Aruba','Ascension Island','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bonaire','Bosnia and Herzegovina','Botswana','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Colombia','Comoros','Cook Islands','Costa Rica','Croatia','Cuba','Curacao','Cyprus','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica','Jan Mayen','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kurdistan','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Northern Cyprus','Northern Mariana Islands','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn Islands','Poland','Portugal','Qatar','Republic of the Congo','Reunion','Romania','Russia','Rwanda','Saba','Saint Barthelemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Eustatius','Sint Maarten','Slovakia','Slovenia','Solomon Islands','Somalia','Somaliland','South Africa','South Korea','South Ossetia','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tokelau','Tonga','Transnistria','Trinidad and Tobago','Tristan Da Cunha','Tunisia','Turkey','Turkmenistan','Turks and Caicos','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Virgin Islands','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Wallis and Futuna','Western Sahara','Yemen','Zambia','Zimbabwe'];

const VisaPolicy:React.FC<Props> = ({ selectArrayRef, setHover, priorityRef, setSelectorLoad, tempPriorityRef, diffRef, tempDiffRef, mousePos, hover, countrySelect, visaDurationRef, legend, setLegend }) => {

  const dimensions = useContext(DimensionsContext)
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    tempPriorityRef.current = priorityRef.current
    priorityRef.current = {ab:'rgb(150,150,150)',af:'rgb(150,150,150)',al:'rgb(150,150,150)',dz:'rgb(150,150,150)',as:'rgb(150,150,150)',ad:'rgb(150,150,150)',ao:'rgb(150,150,150)',ai:'rgb(150,150,150)',ag:'rgb(150,150,150)',ar:'rgb(150,150,150)',am:'rgb(150,150,150)',aw:'rgb(150,150,150)',ac:'rgb(150,150,150)',au:'rgb(150,150,150)',at:'rgb(150,150,150)',az:'rgb(150,150,150)',bs:'rgb(150,150,150)',bh:'rgb(150,150,150)',bd:'rgb(150,150,150)',bb:'rgb(150,150,150)',by:'rgb(150,150,150)',be:'rgb(150,150,150)',bz:'rgb(150,150,150)',bj:'rgb(150,150,150)',bm:'rgb(150,150,150)',bt:'rgb(150,150,150)',bo:'rgb(150,150,150)',xb:'rgb(150,150,150)',ba:'rgb(150,150,150)',bw:'rgb(150,150,150)',br:'rgb(150,150,150)',io:'rgb(150,150,150)',vg:'rgb(150,150,150)',bn:'rgb(150,150,150)',bg:'rgb(150,150,150)',bf:'rgb(150,150,150)',bi:'rgb(150,150,150)',kh:'rgb(150,150,150)',cm:'rgb(150,150,150)',ca:'rgb(150,150,150)',cv:'rgb(150,150,150)',ky:'rgb(150,150,150)',cf:'rgb(150,150,150)',td:'rgb(150,150,150)',cl:'rgb(150,150,150)',cn:'rgb(150,150,150)',co:'rgb(150,150,150)',km:'rgb(150,150,150)',ck:'rgb(150,150,150)',cr:'rgb(150,150,150)',hr:'rgb(150,150,150)',cu:'rgb(150,150,150)',cw:'rgb(150,150,150)',cy:'rgb(150,150,150)',cz:'rgb(150,150,150)',cd:'rgb(150,150,150)',dk:'rgb(150,150,150)',dj:'rgb(150,150,150)',dm:'rgb(150,150,150)',do:'rgb(150,150,150)',tl:'rgb(150,150,150)',ec:'rgb(150,150,150)',eg:'rgb(150,150,150)',sv:'rgb(150,150,150)',gq:'rgb(150,150,150)',er:'rgb(150,150,150)',ee:'rgb(150,150,150)',sz:'rgb(150,150,150)',et:'rgb(150,150,150)',fk:'rgb(150,150,150)',fo:'rgb(150,150,150)',fj:'rgb(150,150,150)',fi:'rgb(150,150,150)',fr:'rgb(150,150,150)',gf:'rgb(150,150,150)',pf:'rgb(150,150,150)',ga:'rgb(150,150,150)',gm:'rgb(150,150,150)',ge:'rgb(150,150,150)',de:'rgb(150,150,150)',gh:'rgb(150,150,150)',gi:'rgb(150,150,150)',gr:'rgb(150,150,150)',gl:'rgb(150,150,150)',gd:'rgb(150,150,150)',gp:'rgb(150,150,150)',gu:'rgb(150,150,150)',gt:'rgb(150,150,150)',gn:'rgb(150,150,150)',gw:'rgb(150,150,150)',gy:'rgb(150,150,150)',ht:'rgb(150,150,150)',hn:'rgb(150,150,150)',hk:'rgb(150,150,150)',hu:'rgb(150,150,150)',is:'rgb(150,150,150)',in:'rgb(150,150,150)',id:'rgb(150,150,150)',ir:'rgb(150,150,150)',iq:'rgb(150,150,150)',ie:'rgb(150,150,150)',il:'rgb(150,150,150)',it:'rgb(150,150,150)',ci:'rgb(150,150,150)',jm:'rgb(150,150,150)',xm:'rgb(150,150,150)',jp:'rgb(150,150,150)',jo:'rgb(150,150,150)',kz:'rgb(150,150,150)',ke:'rgb(150,150,150)',ki:'rgb(150,150,150)',xk:'rgb(150,150,150)',kx:'rgb(150,150,150)',kw:'rgb(150,150,150)',kg:'rgb(150,150,150)',la:'rgb(150,150,150)',lv:'rgb(150,150,150)',lb:'rgb(150,150,150)',ls:'rgb(150,150,150)',lr:'rgb(150,150,150)',ly:'rgb(150,150,150)',li:'rgb(150,150,150)',lt:'rgb(150,150,150)',lu:'rgb(150,150,150)',mo:'rgb(150,150,150)',mg:'rgb(150,150,150)',mw:'rgb(150,150,150)',my:'rgb(150,150,150)',mv:'rgb(150,150,150)',ml:'rgb(150,150,150)',mt:'rgb(150,150,150)',mh:'rgb(150,150,150)',mq:'rgb(150,150,150)',mr:'rgb(150,150,150)',mu:'rgb(150,150,150)',yt:'rgb(150,150,150)',mx:'rgb(150,150,150)',fm:'rgb(150,150,150)',md:'rgb(150,150,150)',mc:'rgb(150,150,150)',mn:'rgb(150,150,150)',me:'rgb(150,150,150)',ms:'rgb(150,150,150)',ma:'rgb(150,150,150)',mz:'rgb(150,150,150)',mm:'rgb(150,150,150)',na:'rgb(150,150,150)',nr:'rgb(150,150,150)',np:'rgb(150,150,150)',nl:'rgb(150,150,150)',nc:'rgb(150,150,150)',nz:'rgb(150,150,150)',ni:'rgb(150,150,150)',ne:'rgb(150,150,150)',ng:'rgb(150,150,150)',nu:'rgb(150,150,150)',rc:'rgb(150,150,150)',mp:'rgb(150,150,150)',kp:'rgb(150,150,150)',mk:'rgb(150,150,150)',no:'rgb(150,150,150)',om:'rgb(150,150,150)',pk:'rgb(150,150,150)',pw:'rgb(150,150,150)',ps:'rgb(150,150,150)',pa:'rgb(150,150,150)',pg:'rgb(150,150,150)',py:'rgb(150,150,150)',pe:'rgb(150,150,150)',ph:'rgb(150,150,150)',pn:'rgb(150,150,150)',pl:'rgb(150,150,150)',pt:'rgb(150,150,150)',qa:'rgb(150,150,150)',cg:'rgb(150,150,150)',re:'rgb(150,150,150)',ro:'rgb(150,150,150)',ru:'rgb(150,150,150)',rw:'rgb(150,150,150)',xs:'rgb(150,150,150)',bl:'rgb(150,150,150)',sh:'rgb(150,150,150)',kn:'rgb(150,150,150)',lc:'rgb(150,150,150)',mf:'rgb(150,150,150)',pm:'rgb(150,150,150)',vc:'rgb(150,150,150)',ws:'rgb(150,150,150)',sm:'rgb(150,150,150)',st:'rgb(150,150,150)',sa:'rgb(150,150,150)',sn:'rgb(150,150,150)',rs:'rgb(150,150,150)',sc:'rgb(150,150,150)',sl:'rgb(150,150,150)',sg:'rgb(150,150,150)',xe:'rgb(150,150,150)',sx:'rgb(150,150,150)',sk:'rgb(150,150,150)',si:'rgb(150,150,150)',sb:'rgb(150,150,150)',so:'rgb(150,150,150)',xx:'rgb(150,150,150)',za:'rgb(150,150,150)',kr:'rgb(150,150,150)',xo:'rgb(150,150,150)',ss:'rgb(150,150,150)',es:'rgb(150,150,150)',lk:'rgb(150,150,150)',sd:'rgb(150,150,150)',sr:'rgb(150,150,150)',xv:'rgb(150,150,150)',se:'rgb(150,150,150)',ch:'rgb(150,150,150)',sy:'rgb(150,150,150)',tw:'rgb(150,150,150)',tj:'rgb(150,150,150)',tz:'rgb(150,150,150)',th:'rgb(150,150,150)',tg:'rgb(150,150,150)',tk:'rgb(150,150,150)',to:'rgb(150,150,150)',xt:'rgb(150,150,150)',tt:'rgb(150,150,150)',tx:'rgb(150,150,150)',tn:'rgb(150,150,150)',tr:'rgb(150,150,150)',tm:'rgb(150,150,150)',tc:'rgb(150,150,150)',tv:'rgb(150,150,150)',ug:'rgb(150,150,150)',ua:'rgb(150,150,150)',ae:'rgb(150,150,150)',gb:'rgb(150,150,150)',us:'rgb(150,150,150)',vi:'rgb(150,150,150)',uy:'rgb(150,150,150)',uz:'rgb(150,150,150)',vu:'rgb(150,150,150)',va:'rgb(150,150,150)',ve:'rgb(150,150,150)',vn:'rgb(150,150,150)',wf:'rgb(150,150,150)',eh:'rgb(150,150,150)',ye:'rgb(150,150,150)',zm:'rgb(150,150,150)',zw:'rgb(150,150,150)'}
    tempDiffRef.current = diffRef.current
    diffRef.current = {AB:false,AF:false,AL:false,DZ:false,AS:false,AD:false,AO:false,AI:false,AG:false,AR:false,AM:false,AW:false,AC:false,AU:false,AT:false,AZ:false,BS:false,BH:false,BD:false,BB:false,BY:false,BE:false,BZ:false,BJ:false,BM:false,BT:false,BO:false,XB:false,BA:false,BW:false,BR:false,IO:false,VG:false,BN:false,BG:false,BF:false,BI:false,KH:false,CM:false,CA:false,CV:false,KY:false,CF:false,TD:false,CL:false,CN:false,CO:false,KM:false,CK:false,CR:false,HR:false,CU:false,CW:false,CY:false,CZ:false,CD:false,DK:false,DJ:false,DM:false,DO:false,TL:false,EC:false,EG:false,SV:false,GQ:false,ER:false,EE:false,SZ:false,ET:false,FK:false,FO:false,FJ:false,FI:false,FR:false,GF:false,PF:false,GA:false,GM:false,GE:false,DE:false,GH:false,GI:false,GR:false,GL:false,GD:false,GP:false,GU:false,GT:false,GN:false,GW:false,GY:false,HT:false,HN:false,HK:false,HU:false,IS:false,IN:false,ID:false,IR:false,IQ:false,IE:false,IL:false,IT:false,CI:false,JM:false,XM:false,JP:false,JO:false,KZ:false,KE:false,KI:false,XK:false,KX:false,KW:false,KG:false,LA:false,LV:false,LB:false,LS:false,LR:false,LY:false,LI:false,LT:false,LU:false,MO:false,MG:false,MW:false,MY:false,MV:false,ML:false,MT:false,MH:false,MQ:false,MR:false,MU:false,YT:false,MX:false,FM:false,MD:false,MC:false,MN:false,ME:false,MS:false,MA:false,MZ:false,MM:false,NA:false,NR:false,NP:false,NL:false,NC:false,NZ:false,NI:false,NE:false,NG:false,NU:false,RC:false,MP:false,KP:false,MK:false,NO:false,OM:false,PK:false,PW:false,PS:false,PA:false,PG:false,PY:false,PE:false,PH:false,PN:false,PL:false,PT:false,QA:false,CG:false,RE:false,RO:false,RU:false,RW:false,XS:false,BL:false,SH:false,KN:false,LC:false,MF:false,PM:false,VC:false,WS:false,SM:false,ST:false,SA:false,SN:false,RS:false,SC:false,SL:false,SG:false,XE:false,SX:false,SK:false,SI:false,SB:false,SO:false,XX:false,ZA:false,KR:false,XO:false,SS:false,ES:false,LK:false,SD:false,SR:false,XV:false,SE:false,CH:false,SY:false,TW:false,TJ:false,TZ:false,TH:false,TG:false,TK:false,TO:false,XT:false,TT:false,TX:false,TN:false,TR:false,TM:false,TC:false,TV:false,UG:false,UA:false,AE:false,GB:false,US:false,VI:false,UY:false,UZ:false,VU:false,VA:false,VE:false,VN:false,WF:false,EH:false,YE:false,ZM:false,ZW:false}
    setSelectorLoad(false)
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
        <PassportMap setHover={setHover} selected={selected} />
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
