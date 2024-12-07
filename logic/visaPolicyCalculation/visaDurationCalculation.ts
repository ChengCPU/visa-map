import { getVisaDurationData } from '../jsonUtils'
import { MutableRefObject } from 'react'
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JJ','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const ISOcodesLowercase:string[] = ['ab','af','al','dz','as','ad','ao','ai','ag','ar','am','aw','ac','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','xb','ba','bw','br','io','vg','bn','bg','bf','bi','kh','cm','ca','cv','ky','cf','td','cl','cn','co','km','ck','cr','hr','cu','cw','cy','cz','cd','dk','dj','dm','do','tl','ec','eg','sv','gq','er','ee','sz','et','fk','fo','fj','fi','fr','gf','pf','ga','gm','ge','de','gh','gi','gr','gl','gd','gp','gu','gt','gn','gw','gy','ht','hn','hk','hu','is','in','id','ir','iq','ie','il','it','ci','jm','xm','jp','jj','jo','kz','ke','ki','xk','kx','kw','kg','la','lv','lb','ls','lr','ly','li','lt','lu','mo','mg','mw','my','mv','ml','mt','mh','mq','mr','mu','yt','mx','fm','md','mc','mn','me','ms','ma','mz','mm','na','nr','np','nl','nc','nz','ni','ne','ng','nu','rc','mp','kp','mk','no','om','pk','pw','ps','pa','pg','py','pe','ph','pn','pl','pt','qa','cg','re','ro','ru','rw','xs','bl','sh','kn','lc','mf','pm','vc','ws','sm','st','sa','sn','rs','sc','sl','sg','xe','sx','sk','si','sb','so','xx','za','kr','xo','ss','es','lk','sd','sr','xv','se','ch','sy','tw','tj','tz','th','tg','tk','to','xt','tt','tx','tn','tr','tm','tc','tv','ug','ua','ae','gb','us','vi','uy','uz','vu','va','ve','vn','wf','eh','ye','zm','zw']
const data = getVisaDurationData()

export default function visaDurationCalculation(selectRef:MutableRefObject<{selection:number;passport:null|string}>, visaDurationRef:MutableRefObject<{[key:string]:number}>, priorityRef:MutableRefObject<{[key:string]:string}>, assignedColorsRef:MutableRefObject<{[key:string]:number}[]>) {
  const temp = data[selectRef.current.passport]
  const assignedColorsRefLength:number = assignedColorsRef.current.length

  if(assignedColorsRefLength == 0) {
    visaDurationRef.current = temp
    return
  }

  for(let main = 0; main < ISOcodesLowercase.length; main++) {
    switch(priorityRef.current[ISOcodesLowercase[main]]) {
      case 'rgb(255,20,147)':
      case 'rgb(255,0,0)':
      case 'rgb(255,145,0)':
      case 'rgb(0,135,93)':
      case 'rgb(0,51,153)':
      case 'rgb(153,123,61)':
      case 'rgb(255,179,191)':
        visaDurationRef.current[ISOcodes[main]] = 0
      break
      case 'rgb(50,205,50)':
        if(assignedColorsRef.current[selectRef.current.selection][ISOcodes[main]] == 7) {
          for(let sub = 0; sub < assignedColorsRefLength; sub++) {
            if(assignedColorsRef.current[sub][ISOcodes[main]] > 7) {
              visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
              break
            }
          }
          if(temp[ISOcodes[main]] < visaDurationRef.current[ISOcodes[main]]) {
            break
          }
          visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
        }
      break
      case 'rgb(81,205,123)':
        if(assignedColorsRef.current[selectRef.current.selection][ISOcodes[main]] == 8) {
          for(let sub = 0; sub < assignedColorsRefLength; sub++) {
            if(assignedColorsRef.current[sub][ISOcodes[main]] > 8) {
              visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
              break
            }
          }
          if(temp[ISOcodes[main]] < visaDurationRef.current[ISOcodes[main]]) {
            break
          }
          visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
        }
      break
      case 'rgb(161,224,123)':
        if(assignedColorsRef.current[selectRef.current.selection][ISOcodes[main]] == 9) {
          for(let sub = 0; sub < assignedColorsRefLength; sub++) {
            if(assignedColorsRef.current[sub][ISOcodes[main]] > 9) {
              visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
              break
            }
          }
          if(temp[ISOcodes[main]] < visaDurationRef.current[ISOcodes[main]]) {
            break
          }
          visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
        }
      break
      case 'rgb(255,255,92)':
        if(assignedColorsRef.current[selectRef.current.selection][ISOcodes[main]] == 10) {
          for(let sub = 0; sub < assignedColorsRefLength; sub++) {
            if(assignedColorsRef.current[sub][ISOcodes[main]] > 10) {
              visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
              break
            }
          }
          if(temp[ISOcodes[main]] < visaDurationRef.current[ISOcodes[main]]) {
            break
          }
          visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
        }
      break
      case 'rgb(135,206,250)':
        if(assignedColorsRef.current[selectRef.current.selection][ISOcodes[main]] == 11) {
          for(let sub = 0; sub < assignedColorsRefLength; sub++) {
            if(assignedColorsRef.current[sub][ISOcodes[main]] > 11) {
              visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
              break
            }
          }
          if(temp[ISOcodes[main]] < visaDurationRef.current[ISOcodes[main]]) {
            break
          }
          visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
        }
      break
      case 'rgb(118,65,171)':
        if(assignedColorsRef.current[selectRef.current.selection][ISOcodes[main]] == 12) {
          for(let sub = 0; sub < assignedColorsRefLength; sub++) {
            if(assignedColorsRef.current[sub][ISOcodes[main]] > 12) {
              visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
              break
            }
          }
          if(temp[ISOcodes[main]] < visaDurationRef.current[ISOcodes[main]]) {
            break
          }
          visaDurationRef.current[ISOcodes[main]] = temp[ISOcodes[main]]
        }
      break
    }
  }
}