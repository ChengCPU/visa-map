import { fetchAndCacheJsonData } from '../jsonUtils'
import totalSort from './totalSort'
import visaFreeSort from './visaFreeSort'
import alphabeticalSort from './alphabeticalSort'
import freedomOfMovementSort from './freedomOfMovementSort'
import visaFreeAreaSort from './visaFreeAreaSort'
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const passportsArray:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishNationalOverseas','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northernCyprus','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
const area:{[key:string]:number} = {AB:8664,AF:652867,AL:28748,DZ:2381741,AS:199,AD:468,AO:1246700,AI:91,AG:442,AR:2796427,AM:29743,AW:180,AC:88,AU:7692024,AT:83878,AZ:86600,BS:13940,BH:778,BD:148460,BB:431,BY:207600,BE:30528,BZ:22965,BJ:114763,BM:54,BT:38394,BO:1098581,XB:294,BA:51209,BW:582000,BR:8510346,IO:60,VG:151,BN:5765,BG:110372,BF:274200,BI:27834,KH:181035,CM:4756500,CA:9984670,CV:4033,KY:264,CF:622984,TD:1284000,CL:756102,CN:9596960,CO:1141748,KM:1862,CK:236,CR:51100,HR:56594,CU:109884,CW:444,CY:9251,CZ:78871,CD:2345410,DK:42947,DJ:23200,DM:750,DO:48671,TL:14954,EC:283561,EG:1002000,SV:21041,GQ:28051,ER:121144,EE:45339,SZ:17363,ET:1104300,FK:12173,FO:1393,FJ:18272,FI:338145,FR:543940,GF:84000,PF:3687,GA:267668,GM:11295,GE:69700,DE:357581,GH:238537,GI:7,GR:131957,GL:2166086,GD:345,GP:1628,GU:541,GT:108889,GN:245836,GW:36125,GY:214969,HT:27750,HN:112492,HK:2755,HU:93025,IS:103000,IN:3287263,ID:1910931,IR:1648195,IQ:438317,IE:69825,IL:21937,IT:302068,CI:322462,JM:10991,XM:377,JP:377976,JO:89318,KZ:2724910,KE:591958,KI:811,XK:10887,KX:392000,KW:17818,KG:199949,LA:236800,LV:64594,LB:10452,LS:30355,LR:111369,LY:1676198,LI:160,LT:65286,LU:2586,MO:31,MG:587041,MW:94552,MY:330621,MV:300,ML:1240192,MT:315,MH:181,MQ:1128,MR:1030700,MU:2040,YT:374,MX:1964375,FM:702,MD:33847,MC:2,MN:1564116,ME:13888,MS:103,MA:446550,MZ:801590,MM:676577,NA:825615,NR:21,NP:147181,NL:41865,NC:19100,NZ:268107,NI:130373,NE:1267000,NG:923768,NU:260,RC:3355,MP:457,KP:120538,MK:25713,NO:323802,OM:309980,PK:881913,PW:459,PS:6220,PA:75320,PG:462840,PY:406752,PE:1285216,PH:300000,PN:47,PL:312679,PT:92225,QA:11637,CG:342000,RE:2511,RO:238398,RU:17098246,RW:26338,XS:13,BL:22,SH:309,KN:261,LC:616,MF:53,PM:242,VC:389,WS:2842,SM:61,ST:964,SA:2206714,SN:196712,RS:88444,SC:457,SL:72300,SG:733,XE:21,SX:34,SK:49035,SI:20273,SB:28896,SO:637657,XX:177000,ZA:1221037,KR:100432,XO:3900,SS:644329,ES:506009,LK:65610,SD:1861484,SR:163820,XV:62045,SE:447425,CH:41277,SY:185180,TW:36193,TJ:141400,TZ:947303,TH:513140,TG:56785,TK:12,TO:747,XT:4163,TT:5127,TX:207,TN:163610,TR:783562,TM:488100,TC:948,TV:26,UG:241550,UA:603500,AE:71024,GB:242495,US:9841009,VI:347,UY:173626,UZ:448969,VU:12189,VA:0,VE:912050,VN:331345,WF:142,EH:266000,YE:527968,ZM:752612,ZW:390757}
const data = await fetchAndCacheJsonData()

export default function fetchSortData(rankRef:any, num:number) {
  let [visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total, freedomOfMovement, km] = [0,0,0,0,0,0,0,0]
  const rankData = []

  for(const passport of passportsArray) {
    for(let countriesLoop = 0; countriesLoop < ISOcodes.length; countriesLoop++) {
      if(data[passport][ISOcodes[countriesLoop]] == 15 || data[passport][ISOcodes[countriesLoop]] == 14 || data[passport][ISOcodes[countriesLoop]] == 13 || data[passport][ISOcodes[countriesLoop]] == 12 || countriesLoop == ISOcodes.length - 1) {
        visaRequiredCount++
      }
      if(data[passport][ISOcodes[countriesLoop]] == 9 || countriesLoop == ISOcodes.length - 1) {
        visaOnArrivalEVisaCount++
      }
      if(data[passport][ISOcodes[countriesLoop]] == 10 || countriesLoop == ISOcodes.length - 1) {
        visaOnArrivalCount++
      }
      if(data[passport][ISOcodes[countriesLoop]] == 8 || data[passport][ISOcodes[countriesLoop]] == 11 || countriesLoop == ISOcodes.length - 1) {
        eVisaCount++
      }
      if(data[passport][ISOcodes[countriesLoop]] == 2 || data[passport][ISOcodes[countriesLoop]] == 3 || data[passport][ISOcodes[countriesLoop]] == 4 || data[passport][ISOcodes[countriesLoop]] == 5 || data[passport][ISOcodes[countriesLoop]] == 6) {
        visaFreeCount++;
        km += area[ISOcodes[countriesLoop]]
        freedomOfMovement++
      }
      if(data[passport][ISOcodes[countriesLoop]] == 0 || data[passport][ISOcodes[countriesLoop]] == 7 || countriesLoop == ISOcodes.length - 1) {
        visaFreeCount++
        km += area[ISOcodes[countriesLoop]]
        if(countriesLoop == ISOcodes.length - 1) {
          visaFreeCount - 2;visaOnArrivalEVisaCount--;visaOnArrivalCount--;eVisaCount--;visaRequiredCount--
          total = visaFreeCount + visaOnArrivalEVisaCount + visaOnArrivalCount + eVisaCount
          rankData.push([passport, visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total, freedomOfMovement, km])
        }
      }
    }
    [visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total, freedomOfMovement, km] = [0,0,0,0,0,0,0,0]
  }

  //Adding extra freedom of movement count to denmark due to territories being classified as home country
  rankData[50][7] += 2
  
  //Adding extra freedom of movement count to france due to territories being classified as home country
  rankData[65][7] += 11

  rankRef.current = rankData
  
  switch(num) {
    case 1: totalSort(rankData, rankRef); break
    case 2: visaFreeSort(rankData, rankRef); break
    case 3: alphabeticalSort(rankData, rankRef); break
    case 4: freedomOfMovementSort(rankData, rankRef); break
    case 5: visaFreeAreaSort(rankData, rankRef); break
  }
}