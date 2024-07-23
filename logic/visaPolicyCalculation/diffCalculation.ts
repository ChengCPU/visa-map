import { MutableRefObject } from 'react'
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JJ','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']

export default function diffCalculation(selectArrayRef:MutableRefObject<(null|string)[]>,assignedColorsRef:MutableRefObject<{[key:string]:number}[]>,diffRef:MutableRefObject<{[key:string]:boolean}>) {
  let diffObject:{[key:string]:boolean}
  if(selectArrayRef.current[0] == null) {
    diffObject = {AB:false,AF:false,AL:false,DZ:false,AS:false,AD:false,AO:false,AI:false,AG:false,AR:false,AM:false,AW:false,AC:false,AU:false,AT:false,AZ:false,BS:false,BH:false,BD:false,BB:false,BY:false,BE:false,BZ:false,BJ:false,BM:false,BT:false,BO:false,XB:false,BA:false,BW:false,BR:false,IO:false,VG:false,BN:false,BG:false,BF:false,BI:false,KH:false,CM:false,CA:false,CV:false,KY:false,CF:false,TD:false,CL:false,CN:false,CO:false,KM:false,CK:false,CR:false,HR:false,CU:false,CW:false,CY:false,CZ:false,CD:false,DK:false,DJ:false,DM:false,DO:false,TL:false,EC:false,EG:false,SV:false,GQ:false,ER:false,EE:false,SZ:false,ET:false,FK:false,FO:false,FJ:false,FI:false,FR:false,GF:false,PF:false,GA:false,GM:false,GE:false,DE:false,GH:false,GI:false,GR:false,GL:false,GD:false,GP:false,GU:false,GT:false,GN:false,GW:false,GY:false,HT:false,HN:false,HK:false,HU:false,IS:false,IN:false,ID:false,IR:false,IQ:false,IE:false,IL:false,IT:false,CI:false,JM:false,XM:false,JP:false,JO:false,KZ:false,KE:false,KI:false,XK:false,KX:false,KW:false,KG:false,LA:false,LV:false,LB:false,LS:false,LR:false,LY:false,LI:false,LT:false,LU:false,MO:false,MG:false,MW:false,MY:false,MV:false,ML:false,MT:false,MH:false,MQ:false,MR:false,MU:false,YT:false,MX:false,FM:false,MD:false,MC:false,MN:false,ME:false,MS:false,MA:false,MZ:false,MM:false,NA:false,NR:false,NP:false,NL:false,NC:false,NZ:false,NI:false,NE:false,NG:false,NU:false,RC:false,MP:false,KP:false,MK:false,NO:false,OM:false,PK:false,PW:false,PS:false,PA:false,PG:false,PY:false,PE:false,PH:false,PN:false,PL:false,PT:false,QA:false,CG:false,RE:false,RO:false,RU:false,RW:false,XS:false,BL:false,SH:false,KN:false,LC:false,MF:false,PM:false,VC:false,WS:false,SM:false,ST:false,SA:false,SN:false,RS:false,SC:false,SL:false,SG:false,XE:false,SX:false,SK:false,SI:false,SB:false,SO:false,XX:false,ZA:false,KR:false,XO:false,SS:false,ES:false,LK:false,SD:false,SR:false,XV:false,SE:false,CH:false,SY:false,TW:false,TJ:false,TZ:false,TH:false,TG:false,TK:false,TO:false,XT:false,TT:false,TX:false,TN:false,TR:false,TM:false,TC:false,TV:false,UG:false,UA:false,AE:false,GB:false,US:false,VI:false,UY:false,UZ:false,VU:false,VA:false,VE:false,VN:false,WF:false,EH:false,YE:false,ZM:false,ZW:false}
  } else {
    diffObject = diffRef.current
  }
  
  const selectArrayRefLength:number = selectArrayRef.current.length
  let selectArrayRefNullLength:number = -1

  for(let n = 0; n < selectArrayRefLength; n++) {
    selectArrayRefNullLength++
    if(selectArrayRef.current[n] == null) {
      break
    }
  }

  const y = () => {
    for(let i = 0; i < selectArrayRefLength; i++) {
      if(selectArrayRef.current[i + 1] == null) {return i}
    }
  }

  for(let x = 0; x < ISOcodes.length; x++) {
    //visa required
    if(assignedColorsRef.current[0][ISOcodes[x]] == 15 && assignedColorsRef.current[y()][ISOcodes[x]] == 15) {continue}
    //OECS freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 2) {diffObject[ISOcodes[x]] = true; continue}
    //Mercosur freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 3) {diffObject[ISOcodes[x]] = true; continue}
    //EU freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 4) {diffObject[ISOcodes[x]] = true; continue}
    //GCC freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 5) {diffObject[ISOcodes[x]] = true; continue}
    //Freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[y()][ISOcodes[x]] == 6) {diffObject[ISOcodes[x]] = true; continue}
    // VoA + E-visa
    if(assignedColorsRef.current[0][ISOcodes[x]] == 10 && assignedColorsRef.current[y()][ISOcodes[x]] == 11) {diffObject[ISOcodes[x]] = true; continue}
    // E-visa + VoA
    if(assignedColorsRef.current[0][ISOcodes[x]] == 11 && assignedColorsRef.current[y()][ISOcodes[x]] == 10) {diffObject[ISOcodes[x]] = true; continue}
    //visa free
    if(assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 7) {diffObject[ISOcodes[x]] = true; continue}
    //electronic travel authorization
    if(assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 8) {diffObject[ISOcodes[x]] = true; continue}
    //visa on arrival/evisa
    if(assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 9) {diffObject[ISOcodes[x]] = true; continue}
    //visa on arrival
    if(assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 10) {diffObject[ISOcodes[x]] = true; continue}
    //evisa
    if(assignedColorsRef.current[0][ISOcodes[x]] != 11 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 11) {diffObject[ISOcodes[x]] = true; continue}
    //special permit
    if(assignedColorsRef.current[0][ISOcodes[x]] != 12 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 11 && assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[y()][ISOcodes[x]] == 12) {diffObject[ISOcodes[x]] = true; continue}
    //simplified visa
    if(assignedColorsRef.current[0][ISOcodes[x]] != 13 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 12 && assignedColorsRef.current[0][ISOcodes[x]] != 11 && assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[y()][ISOcodes[x]] == 13) {diffObject[ISOcodes[x]] = true; continue}
  }

  for(let b = 0; b < selectArrayRefNullLength; b++) {
    for(let h = 0; h < ISOcodes.length; h++) {
      if(assignedColorsRef.current[b][ISOcodes[h]] == 0) {
        diffObject[ISOcodes[h]] = false
      }
    }
  }

  for(let j = 0; j < selectArrayRefLength; j++) {
    if(diffObject[ISOcodes[ISOcodes.indexOf(selectArrayRef.current[j] + 'Color')]] == true) {
      diffObject[ISOcodes[ISOcodes.indexOf(selectArrayRef.current[j] + 'Color')]] = false

      if(selectArrayRef.current[j] == 'france') {
        diffObject.PM = false
        diffObject.MF = false
        diffObject.BL = false
        diffObject.GP = false
        diffObject.MQ = false
        diffObject.GF = false
        diffObject.PF = false
        diffObject.YT = false
        diffObject.RE = false
        diffObject.NC = false
        diffObject.WF = false
        continue
      }

      if(selectArrayRef.current[j] == 'unitedStates') {
        diffObject.AS = false
        diffObject.VI = false
        diffObject.GU = false
        diffObject.MP = false
        continue
      }

      if(selectArrayRef.current[j] == 'denmark') {
        diffObject.GL = false
        diffObject.FO = false
      }
    }
  }

  diffRef.current = diffObject
}