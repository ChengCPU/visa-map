import { MutableRefObject } from 'react'
import { fetchAndCacheJsonData } from '../jsonUtils'
import diffCalculation from './diffCalculation'
import percentageCalculation from '../percentageCalculation'
const ISOcodesLowercase:string[] = ['ab','af','al','dz','as','ad','ao','ai','ag','ar','am','aw','ac','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','xb','ba','bw','br','io','vg','bn','bg','bf','bi','kh','cm','ca','cv','ky','cf','td','cl','cn','co','km','ck','cr','hr','cu','cw','cy','cz','cd','dk','dj','dm','do','tl','ec','eg','sv','gq','er','ee','sz','et','fk','fo','fj','fi','fr','gf','pf','ga','gm','ge','de','gh','gi','gr','gl','gd','gp','gu','gt','gn','gw','gy','ht','hn','hk','hu','is','in','id','ir','iq','ie','il','it','ci','jm','xm','jp','jo','kz','ke','ki','xk','kx','kw','kg','la','lv','lb','ls','lr','ly','li','lt','lu','mo','mg','mw','my','mv','ml','mt','mh','mq','mr','mu','yt','mx','fm','md','mc','mn','me','ms','ma','mz','mm','na','nr','np','nl','nc','nz','ni','ne','ng','nu','rc','mp','kp','mk','no','om','pk','pw','ps','pa','pg','py','pe','ph','pn','pl','pt','qa','cg','re','ro','ru','rw','xs','bl','sh','kn','lc','mf','pm','vc','ws','sm','st','sa','sn','rs','sc','sl','sg','xe','sx','sk','si','sb','so','xx','za','kr','xo','ss','es','lk','sd','sr','xv','se','ch','sy','tw','tj','tz','th','tg','tk','to','xt','tt','tx','tn','tr','tm','tc','tv','ug','ua','ae','gb','us','vi','uy','uz','vu','va','ve','vn','wf','eh','ye','zm','zw']
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const data = await fetchAndCacheJsonData()

export default function mainCalculation(subCalculation:boolean,country:string,assignedColorsRef:MutableRefObject<{[key:string]:number}[]>,selectRef:MutableRefObject<{selection:number;passport:null|string}>,priorityRef:MutableRefObject<{[key:string]:string}>,selectArrayRef:MutableRefObject<(null|string)[]>,diffRef:MutableRefObject<{[key:string]:number}>,setPercentage:Function,ESTAbanRef:MutableRefObject<boolean>,visaDurationRef:MutableRefObject<{[key:string]:number}>) {
  if(subCalculation == false) { assignedColorsRef.current.push({AB:14,AF:14,AL:14,DZ:14,AS:14,AD:14,AO:14,AI:14,AG:14,AR:14,AM:14,AW:14,AC:14,AU:14,AT:14,AZ:14,BS:14,BH:14,BD:14,BB:14,BY:14,BE:14,BZ:14,BJ:14,BM:14,BT:14,BO:14,XB:14,BA:14,BW:14,BR:14,IO:14,VG:14,BN:14,BG:14,BF:14,BI:14,KH:14,CM:14,CA:14,CV:14,KY:14,CF:14,TD:14,CL:14,CN:14,CO:14,KM:14,CK:14,CR:14,HR:14,CU:14,CW:14,CY:14,CZ:14,CD:14,DK:14,DJ:14,DM:14,DO:14,TL:14,EC:14,EG:14,SV:14,GQ:14,ER:14,EE:14,SZ:14,ET:14,FK:14,FO:14,FJ:14,FI:14,FR:14,GF:14,PF:14,GA:14,GM:14,GE:14,DE:14,GH:14,GI:14,GR:14,GL:14,GD:14,GP:14,GU:14,GT:14,GN:14,GW:14,GY:14,HT:14,HN:14,HK:14,HU:14,IS:14,IN:14,ID:14,IR:14,IQ:14,IE:14,IL:14,IT:14,CI:14,JM:14,XM:14,JP:14,JO:14,KZ:14,KE:14,KI:14,XK:14,KX:14,KW:14,KG:14,LA:14,LV:14,LB:14,LS:14,LR:14,LY:14,LI:14,LT:14,LU:14,MO:14,MG:14,MW:14,MY:14,MV:14,ML:14,MT:14,MH:14,MQ:14,MR:14,MU:14,YT:14,MX:14,FM:14,MD:14,MC:14,MN:14,ME:14,MS:14,MA:14,MZ:14,MM:14,NA:14,NR:14,NP:14,NL:14,NC:14,NZ:14,NI:14,NE:14,NG:14,NU:14,RC:14,MP:14,KP:14,MK:14,NO:14,OM:14,PK:14,PW:14,PS:14,PA:14,PG:14,PY:14,PE:14,PH:14,PN:14,PL:14,PT:14,QA:14,CG:14,RE:14,RO:14,RU:14,RW:14,XS:14,BL:14,SH:14,KN:14,LC:14,MF:14,PM:14,VC:14,WS:14,SM:14,ST:14,SA:14,SN:14,RS:14,SC:14,SL:14,SG:14,XE:14,SX:14,SK:14,SI:14,SB:14,SO:14,XX:14,ZA:14,KR:14,XO:14,SS:14,ES:14,LK:14,SD:14,SR:14,XV:14,SE:14,CH:14,SY:14,TW:14,TJ:14,TZ:14,TH:14,TG:14,TK:14,TO:14,XT:14,TT:14,TX:14,TN:14,TR:14,TM:14,TC:14,TV:14,UG:14,UA:14,AE:14,GB:14,US:14,VI:14,UY:14,UZ:14,VU:14,VA:14,VE:14,VN:14,WF:14,EH:14,YE:14,ZM:14,ZW:14}) }
  assignedColorsRef.current[selectRef.current.selection] = {AB:data[country].AB,AF:data[country].AF,AL:data[country].AL,DZ:data[country].DZ,AS:data[country].AS,AD:data[country].AD,AO:data[country].AO,AI:data[country].AI,AG:data[country].AG,AR:data[country].AR,AM:data[country].AM,AW:data[country].AW,AC:data[country].AC,AU:data[country].AU,AT:data[country].AT,AZ:data[country].AZ,BS:data[country].BS,BH:data[country].BH,BD:data[country].BD,BB:data[country].BB,BY:data[country].BY,BE:data[country].BE,BZ:data[country].BZ,BJ:data[country].BJ,BM:data[country].BM,BT:data[country].BT,BO:data[country].BO,XB:data[country].XB,BA:data[country].BA,BW:data[country].BW,BR:data[country].BR,IO:data[country].IO,VG:data[country].VG,BN:data[country].BN,BG:data[country].BG,BF:data[country].BF,BI:data[country].BI,KH:data[country].KH,CM:data[country].CM,CA:data[country].CA,CV:data[country].CV,KY:data[country].KY,CF:data[country].CF,TD:data[country].TD,CL:data[country].CL,CN:data[country].CN,CO:data[country].CO,KM:data[country].KM,CK:data[country].CK,CR:data[country].CR,HR:data[country].HR,CU:data[country].CU,CW:data[country].CW,CY:data[country].CY,CZ:data[country].CZ,CD:data[country].CD,DK:data[country].DK,DJ:data[country].DJ,DM:data[country].DM,DO:data[country].DO,TL:data[country].TL,EC:data[country].EC,EG:data[country].EG,SV:data[country].SV,GQ:data[country].GQ,ER:data[country].ER,EE:data[country].EE,SZ:data[country].SZ,ET:data[country].ET,FK:data[country].FK,FO:data[country].FO,FJ:data[country].FJ,FI:data[country].FI,FR:data[country].FR,GF:data[country].GF,PF:data[country].PF,GA:data[country].GA,GM:data[country].GM,GE:data[country].GE,DE:data[country].DE,GH:data[country].GH,GI:data[country].GI,GR:data[country].GR,GL:data[country].GL,GD:data[country].GD,GP:data[country].GP,GU:data[country].GU,GT:data[country].GT,GN:data[country].GN,GW:data[country].GW,GY:data[country].GY,HT:data[country].HT,HN:data[country].HN,HK:data[country].HK,HU:data[country].HU,IS:data[country].IS,IN:data[country].IN,ID:data[country].ID,IR:data[country].IR,IQ:data[country].IQ,IE:data[country].IE,IL:data[country].IL,IT:data[country].IT,CI:data[country].CI,JM:data[country].JM,XM:data[country].XM,JP:data[country].JP,JO:data[country].JO,KZ:data[country].KZ,KE:data[country].KE,KI:data[country].KI,XK:data[country].XK,KX:data[country].KX,KW:data[country].KW,KG:data[country].KG,LA:data[country].LA,LV:data[country].LV,LB:data[country].LB,LS:data[country].LS,LR:data[country].LR,LY:data[country].LY,LI:data[country].LI,LT:data[country].LT,LU:data[country].LU,MO:data[country].MO,MG:data[country].MG,MW:data[country].MW,MY:data[country].MY,MV:data[country].MV,ML:data[country].ML,MT:data[country].MT,MH:data[country].MH,MQ:data[country].MQ,MR:data[country].MR,MU:data[country].MU,YT:data[country].YT,MX:data[country].MX,FM:data[country].FM,MD:data[country].MD,MC:data[country].MC,MN:data[country].MN,ME:data[country].ME,MS:data[country].MS,MA:data[country].MA,MZ:data[country].MZ,MM:data[country].MM,NA:data[country].NA,NR:data[country].NR,NP:data[country].NP,NL:data[country].NL,NC:data[country].NC,NZ:data[country].NZ,NI:data[country].NI,NE:data[country].NE,NG:data[country].NG,NU:data[country].NU,RC:data[country].RC,MP:data[country].MP,KP:data[country].KP,MK:data[country].MK,NO:data[country].NO,OM:data[country].OM,PK:data[country].PK,PW:data[country].PW,PS:data[country].PS,PA:data[country].PA,PG:data[country].PG,PY:data[country].PY,PE:data[country].PE,PH:data[country].PH,PN:data[country].PN,PL:data[country].PL,PT:data[country].PT,QA:data[country].QA,CG:data[country].CG,RE:data[country].RE,RO:data[country].RO,RU:data[country].RU,RW:data[country].RW,XS:data[country].XS,BL:data[country].BL,SH:data[country].SH,KN:data[country].KN,LC:data[country].LC,MF:data[country].MF,PM:data[country].PM,VC:data[country].VC,WS:data[country].WS,SM:data[country].SM,ST:data[country].ST,SA:data[country].SA,SN:data[country].SN,RS:data[country].RS,SC:data[country].SC,SL:data[country].SL,SG:data[country].SG,XE:data[country].XE,SX:data[country].SX,SK:data[country].SK,SI:data[country].SI,SB:data[country].SB,SO:data[country].SO,XX:data[country].XX,ZA:data[country].ZA,KR:data[country].KR,XO:data[country].XO,SS:data[country].SS,ES:data[country].ES,LK:data[country].LK,SD:data[country].SD,SR:data[country].SR,XV:data[country].XV,SE:data[country].SE,CH:data[country].CH,SY:data[country].SY,TW:data[country].TW,TJ:data[country].TJ,TZ:data[country].TZ,TH:data[country].TH,TG:data[country].TG,TK:data[country].TK,TO:data[country].TO,XT:data[country].XT,TT:data[country].TT,TX:data[country].TX,TN:data[country].TN,TR:data[country].TR,TM:data[country].TM,TC:data[country].TC,TV:data[country].TV,UG:data[country].UG,UA:data[country].UA,AE:data[country].AE,GB:data[country].GB,US:data[country].US,VI:data[country].VI,UY:data[country].UY,UZ:data[country].UZ,VU:data[country].VU,VA:data[country].VA,VE:data[country].VE,VN:data[country].VN,WF:data[country].WF,EH:data[country].EH,YE:data[country].YE,ZM:data[country].ZM,ZW:data[country].ZW}
  const assignedColorsRefLength:number = assignedColorsRef.current.length

  for(let main = 0; main < assignedColorsRefLength; main++) {
    for(let sub = 0; sub < ISOcodes.length; sub++) {
      switch(assignedColorsRef.current[main][ISOcodes[sub]]) {
        case 0: priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(255,20,147)'; break; //home country (pink)
        case 1: priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(255,0,0)'; break; //permit required (red)
        case 2: //OECS freedom of movement (orange)
          let oecsFlag = false
          for(let oecs = 0; oecs < assignedColorsRefLength; oecs++) {
            switch(assignedColorsRef.current[oecs][ISOcodes[sub]]) {
              case 0: oecsFlag = true; break;
            }
          }
          if(oecsFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(255,145,0)'
        break;
        case 3: //MERCOSUR freedom of movement (dark green)
          let msFlag = false
          for(let ms = 0; ms < assignedColorsRefLength; ms++) {
            switch(assignedColorsRef.current[ms][ISOcodes[sub]]) {
              case 0: msFlag = true; break;
            }
          }
          if(msFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(0,135,93)'
        break;
        case 4: //EU freedom of movement (dark blue)
          let euFlag = false
          for(let eu = 0; eu < assignedColorsRefLength; eu++) {
            switch(assignedColorsRef.current[eu][ISOcodes[sub]]) {
              case 0: euFlag = true; break;
            }
          }
          if(euFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(0,51,153)'
        break;
        case 5: //GCC freedom of movement (brown)
          let gccFlag = false
          for(let gcc = 0; gcc < assignedColorsRefLength; gcc++) {
            switch(assignedColorsRef.current[gcc][ISOcodes[sub]]) {
              case 0: gccFlag = true; break;
            }
          }
          if(gccFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(153,123,61)'
        break;
        case 6: //freedom of movement (light pink)
          let fomFlag = false
          for(let fom = 0; fom < assignedColorsRefLength; fom++) {
            switch(assignedColorsRef.current[fom][ISOcodes[sub]]) {
              case 0: fomFlag = true; break;
              case 1: fomFlag = true; break;
              case 2: fomFlag = true; break;
              case 3: fomFlag = true; break;
              case 4: fomFlag = true; break;
              case 5: fomFlag = true; break;
            }
          }
          if(fomFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(255,179,191)'
        break;
        case 7: //visa free (green)
          let vfFlag = false
          for(let vf = 0; vf < assignedColorsRefLength; vf++) {
            switch(assignedColorsRef.current[vf][ISOcodes[sub]]) {
              case 0: vfFlag = true; break;
              case 1: vfFlag = true; break;
              case 2: vfFlag = true; break;
              case 3: vfFlag = true; break;
              case 4: vfFlag = true; break;
              case 5: vfFlag = true; break;
              case 6: vfFlag = true; break;
            }
          }
          if(vfFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(50,205,50)'
        break;
        case 8: //Electronic Travel Authorization (light/dark green)
          let etaFlag = false
          for(let eta = 0; eta < assignedColorsRefLength; eta++) {
            switch(assignedColorsRef.current[eta][ISOcodes[sub]]) {
              case 0: etaFlag = true; break;
              case 1: etaFlag = true; break;
              case 2: etaFlag = true; break;
              case 3: etaFlag = true; break;
              case 4: etaFlag = true; break;
              case 5: etaFlag = true; break;
              case 6: etaFlag = true; break;
              case 7: etaFlag = true; break;
            }
          }
          if(etaFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(81,205,123)'
        break;
        case 9: //visa on arrival/evisa (light green)
          let voaevFlag = false
          for(let voaev = 0; voaev < assignedColorsRefLength; voaev++) {
            switch(assignedColorsRef.current[voaev][ISOcodes[sub]]) {
              case 0: voaevFlag = true; break;
              case 1: voaevFlag = true; break;
              case 2: voaevFlag = true; break;
              case 3: voaevFlag = true; break;
              case 4: voaevFlag = true; break;
              case 5: voaevFlag = true; break;
              case 6: voaevFlag = true; break;
              case 7: voaevFlag = true; break;
              case 8: voaevFlag = true; break;
            }
          }
          if(voaevFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(161,224,123)'
        break;
        case 10: //visa on arrival (yellow)
          let voaFlag = false
          for(let voa = 0; voa < assignedColorsRefLength; voa++) {
            switch(assignedColorsRef.current[voa][ISOcodes[sub]]) {
              case 0: voaFlag = true; break;
              case 1: voaFlag = true; break;
              case 2: voaFlag = true; break;
              case 3: voaFlag = true; break;
              case 4: voaFlag = true; break;
              case 5: voaFlag = true; break;
              case 6: voaFlag = true; break;
              case 7: voaFlag = true; break;
              case 8: voaFlag = true; break;
              case 9: voaFlag = true; break;
              case 11: //visa on arrival/evisa addition (light green)
                let voaevsubFlag = false
                for(let voaevsub = 0; voaevsub < assignedColorsRefLength; voaevsub++) {
                  switch(assignedColorsRef.current[voaevsub][ISOcodes[sub]]) {
                    case 0: voaevsubFlag = true; break;
                    case 1: voaevsubFlag = true; break;
                    case 2: voaevsubFlag = true; break;
                    case 3: voaevsubFlag = true; break;
                    case 4: voaevsubFlag = true; break;
                    case 5: voaevsubFlag = true; break;
                    case 6: voaevsubFlag = true; break;
                    case 7: voaevsubFlag = true; break;
                    case 8: voaevsubFlag = true; break;
                  }
                }
                if(voaevsubFlag == true) { break; }
                priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(161,224,123)'; voaFlag = true; break;
            }
          }
          if(voaFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(255,255,92)'
        break;
        case 11: //evisa (blue)
          let evFlag = false
          for(let ev = 0; ev < assignedColorsRefLength; ev++) {
            switch(assignedColorsRef.current[ev][ISOcodes[sub]]) {
              case 0: evFlag = true; break;
              case 1: evFlag = true; break;
              case 2: evFlag = true; break;
              case 3: evFlag = true; break;
              case 4: evFlag = true; break;
              case 5: evFlag = true; break;
              case 6: evFlag = true; break;
              case 7: evFlag = true; break;
              case 8: evFlag = true; break;
              case 9: evFlag = true; break;
              case 10: //visa on arrival/evisa addition (light green)
                let voaevsubFlag = false
                for(let voaevsub = 0; voaevsub < assignedColorsRefLength; voaevsub++) {
                  switch(assignedColorsRef.current[voaevsub][ISOcodes[sub]]) {
                    case 0: voaevsubFlag = true; break;
                    case 1: voaevsubFlag = true; break;
                    case 2: voaevsubFlag = true; break;
                    case 3: voaevsubFlag = true; break;
                    case 4: voaevsubFlag = true; break;
                    case 5: voaevsubFlag = true; break;
                    case 6: voaevsubFlag = true; break;
                    case 7: voaevsubFlag = true; break;
                    case 8: voaevsubFlag = true; break;
                  }
                }
                if(voaevsubFlag == true) { break; }
                priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(161,224,123)'; evFlag = true; break;
            }
          }
          if(evFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(135,206,250)'
        break;
        case 12: //Special permit/police check (purple)
          let spFlag = false
          for(let sp = 0; sp < assignedColorsRefLength; sp++) {
            switch(assignedColorsRef.current[sp][ISOcodes[sub]]) {
              case 0: spFlag = true; break;
              case 1: spFlag = true; break;
              case 2: spFlag = true; break;
              case 3: spFlag = true; break;
              case 4: spFlag = true; break;
              case 5: spFlag = true; break;
              case 6: spFlag = true; break;
              case 7: spFlag = true; break;
              case 8: spFlag = true; break;
              case 9: spFlag = true; break;
              case 10: spFlag = true; break;
              case 11: spFlag = true; break;
            }
          }
          if(spFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(118,65,171)'
        break;
        case 13: //simplified visa (light grey)
          let svFlag = false
          for(let sv = 0; sv < assignedColorsRefLength; sv++) {
            switch(assignedColorsRef.current[sv][ISOcodes[sub]]) {
              case 0: svFlag = true; break;
              case 1: svFlag = true; break;
              case 2: svFlag = true; break;
              case 3: svFlag = true; break;
              case 4: svFlag = true; break;
              case 5: svFlag = true; break;
              case 6: svFlag = true; break;
              case 7: svFlag = true; break;
              case 8: svFlag = true; break;
              case 9: svFlag = true; break;
              case 10: svFlag = true; break;
              case 11: svFlag = true; break;
              case 12: svFlag = true; break;
            }
          }
          if(svFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(200,200,200)'
        break;
        case 14: //confirmation required (black)
          let crFlag = false
          for(let cr = 0; cr < assignedColorsRefLength; cr++) {
            switch(assignedColorsRef.current[cr][ISOcodes[sub]]) {
              case 0: crFlag = true; break;
              case 1: crFlag = true; break;
              case 2: crFlag = true; break;
              case 3: crFlag = true; break;
              case 4: crFlag = true; break;
              case 5: crFlag = true; break;
              case 6: crFlag = true; break;
              case 7: crFlag = true; break;
              case 8: crFlag = true; break;
              case 9: crFlag = true; break;
              case 10: crFlag = true; break;
              case 11: crFlag = true; break;
              case 12: crFlag = true; break;
              case 13: crFlag = true; break;
              case 15: 
                let vrFlag = false
                for(let vr = 0; vr < assignedColorsRefLength; vr++) {
                  switch(assignedColorsRef.current[vr][ISOcodes[sub]]) {
                    case 0: vrFlag = true; break;
                    case 1: vrFlag = true; break;
                    case 2: vrFlag = true; break;
                    case 3: vrFlag = true; break;
                    case 4: vrFlag = true; break;
                    case 5: vrFlag = true; break;
                    case 6: vrFlag = true; break;
                    case 7: vrFlag = true; break;
                    case 8: vrFlag = true; break;
                    case 9: vrFlag = true; break;
                    case 10: vrFlag = true; break;
                    case 11: vrFlag = true; break;
                    case 12: vrFlag = true; break;
                    case 13: vrFlag = true; break;
                  }
                }
                if(vrFlag == true) { break; }
                priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(150,150,150)'; crFlag = true;
            }
          }
          if(crFlag == true) { break; }
          priorityRef.current[ISOcodesLowercase[sub]] = 'rgb(0,0,0)'
        break;
      }
    }
  }

  //State sponsors of terrorism ESTA ban
  const ESTAban = () => {
    priorityRef.current.us = 'rgb(150,150,150)'
    priorityRef.current.vi = 'rgb(150,150,150)'
    priorityRef.current.gu = 'rgb(150,150,150)'
    priorityRef.current.mp = 'rgb(150,150,150)'
    diffRef.current.US = 1
    diffRef.current.VI = 1
    diffRef.current.GU = 1
    diffRef.current.MP = 1
    visaDurationRef.current.US = 0
    visaDurationRef.current.VI = 0
    visaDurationRef.current.GU = 0
    visaDurationRef.current.MP = 0
    ESTAbanRef.current = true
  }

  if(priorityRef.current.us == 'rgb(50,205,50)' || priorityRef.current.us == 'rgb(255,20,147)') {
    ESTAbanRef.current = false
  } else {
    switch(country) {
      case 'cuba': if(priorityRef.current.us == 'rgb(81,205,123)') {ESTAban()} break;
      case 'syria': if(priorityRef.current.us == 'rgb(81,205,123)') {ESTAban()} break;
      case 'iran': if(priorityRef.current.us == 'rgb(81,205,123)') {ESTAban()} break;
      case 'northKorea': if(priorityRef.current.us == 'rgb(81,205,123)') {ESTAban()} break;
    }
  }

  if(ESTAbanRef.current == true) {
    ESTAban()
  }

  if(subCalculation == false) { diffCalculation(selectArrayRef, assignedColorsRef, diffRef) }
  percentageCalculation(priorityRef, setPercentage)
}