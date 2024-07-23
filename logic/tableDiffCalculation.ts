import { MutableRefObject } from 'react'
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JJ','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']

export default function tableDiffCalculation(tableDiffReff:MutableRefObject<boolean[]>, assignedColorsRef:MutableRefObject<{[key:string]:number}[]>, assignedVisaDurationRef:MutableRefObject<{[key:string]:number}[]>) {
  const index:number = assignedColorsRef.current.length - 1
  let tempTableDiffRef:boolean[] = tableDiffReff.current

  for(let j = 0; j < ISOcodes.length; j++) {
    if(assignedColorsRef.current[index][ISOcodes[j]] != assignedColorsRef.current[0][ISOcodes[j]]) {
      tempTableDiffRef[j] = true
      continue
    }
    
    if(assignedVisaDurationRef.current[index][ISOcodes[j]] != assignedVisaDurationRef.current[0][ISOcodes[j]]) {
      tempTableDiffRef[j] = true
      continue
    }

    if(!tempTableDiffRef[j]) {
      tempTableDiffRef[j] = false
    }
  }

  tableDiffReff.current = tempTableDiffRef
}