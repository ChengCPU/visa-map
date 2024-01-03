const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']

export default function diffCalculation(selectArrayRef:any, assignedColorsRef:any, diffRef:any) {
  let diffObject
  if(selectArrayRef.current[0] == null) {
    diffObject = {AB:0,AF:0,AL:0,DZ:0,AS:0,AD:0,AO:0,AI:0,AG:0,AR:0,AM:0,AW:0,AC:0,AU:0,AT:0,AZ:0,BS:0,BH:0,BD:0,BB:0,BY:0,BE:0,BZ:0,BJ:0,BM:0,BT:0,BO:0,XB:0,BA:0,BW:0,BR:0,IO:0,VG:0,BN:0,BG:0,BF:0,BI:0,KH:0,CM:0,CA:0,CV:0,KY:0,CF:0,TD:0,CL:0,CN:0,CO:0,KM:0,CK:0,CR:0,HR:0,CU:0,CW:0,CY:0,CZ:0,CD:0,DK:0,DJ:0,DM:0,DO:0,TL:0,EC:0,EG:0,SV:0,GQ:0,ER:0,EE:0,SZ:0,ET:0,FK:0,FO:0,FJ:0,FI:0,FR:0,GF:0,PF:0,GA:0,GM:0,GE:0,DE:0,GH:0,GI:0,GR:0,GL:0,GD:0,GP:0,GU:0,GT:0,GN:0,GW:0,GY:0,HT:0,HN:0,HK:0,HU:0,IS:0,IN:0,ID:0,IR:0,IQ:0,IE:0,IL:0,IT:0,CI:0,JM:0,XM:0,JP:0,JO:0,KZ:0,KE:0,KI:0,XK:0,KX:0,KW:0,KG:0,LA:0,LV:0,LB:0,LS:0,LR:0,LY:0,LI:0,LT:0,LU:0,MO:0,MG:0,MW:0,MY:0,MV:0,ML:0,MT:0,MH:0,MQ:0,MR:0,MU:0,YT:0,MX:0,FM:0,MD:0,MC:0,MN:0,ME:0,MS:0,MA:0,MZ:0,MM:0,NA:0,NR:0,NP:0,NL:0,NC:0,NZ:0,NI:0,NE:0,NG:0,NU:0,RC:0,MP:0,KP:0,MK:0,NO:0,OM:0,PK:0,PW:0,PS:0,PA:0,PG:0,PY:0,PE:0,PH:0,PN:0,PL:0,PT:0,QA:0,CG:0,RE:0,RO:0,RU:0,RW:0,XS:0,BL:0,SH:0,KN:0,LC:0,MF:0,PM:0,VC:0,WS:0,SM:0,ST:0,SA:0,SN:0,RS:0,SC:0,SL:0,SG:0,XE:0,SX:0,SK:0,SI:0,SB:0,SO:0,XX:0,ZA:0,KR:0,XO:0,SS:0,ES:0,LK:0,SD:0,SR:0,XV:0,SE:0,CH:0,SY:0,TW:0,TJ:0,TZ:0,TH:0,TG:0,TK:0,TO:0,XT:0,TT:0,TX:0,TN:0,TR:0,TM:0,TC:0,TV:0,UG:0,UA:0,AE:0,GB:0,US:0,VI:0,UY:0,UZ:0,VU:0,VA:0,VE:0,VN:0,WF:0,EH:0,YE:0,ZM:0,ZW:0}
  } else {
    diffObject = diffRef.current
  }
  
  const selectArrayRefLength = selectArrayRef.current.length

  const y = () => {
    for(let i = 0; i < selectArrayRefLength; i++) {
      if(selectArrayRef.current[i + 1] == null) {return i}
    }
  }

  for(let x = 0; x < ISOcodes.length; x++) {
    //visa required
    if(assignedColorsRef.current[0][ISOcodes[x]] == 14 && assignedColorsRef.current[y()][ISOcodes[x]] == 14) {continue}
    //OECS freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 2) {diffObject[ISOcodes[x]] = 1; continue}
    //Mercosur freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 3) {diffObject[ISOcodes[x]] = 1; continue}
    //EU freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 4) {diffObject[ISOcodes[x]] = 1; continue}
    //GCC freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[y()][ISOcodes[x]] == 5) {diffObject[ISOcodes[x]] = 1; continue}
    //Freedom of movement
    if(assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[y()][ISOcodes[x]] == 6) {diffObject[ISOcodes[x]] = 1; continue}
    // VoA + E-visa
    if(assignedColorsRef.current[0][ISOcodes[x]] == 9 && assignedColorsRef.current[y()][ISOcodes[x]] == 10) {diffObject[ISOcodes[x]] = 1; continue}
    // E-visa + VoA
    if(assignedColorsRef.current[0][ISOcodes[x]] == 10 && assignedColorsRef.current[y()][ISOcodes[x]] == 9) {diffObject[ISOcodes[x]] = 1; continue}
    //visa free
    if(assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 7) {diffObject[ISOcodes[x]] = 1; continue}
    //visa on arrival/evisa
    if(assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 8) {diffObject[ISOcodes[x]] = 1; continue}
    //visa on arrival
    if(assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 9) {diffObject[ISOcodes[x]] = 1; continue}
    //evisa
    if(assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[0][ISOcodes[x]] != 5 && assignedColorsRef.current[0][ISOcodes[x]] != 4 && assignedColorsRef.current[0][ISOcodes[x]] != 3 && assignedColorsRef.current[0][ISOcodes[x]] != 2 && assignedColorsRef.current[y()][ISOcodes[x]] == 10) {diffObject[ISOcodes[x]] = 1; continue}
    //special permit
    if(assignedColorsRef.current[0][ISOcodes[x]] != 11 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[y()][ISOcodes[x]] == 11) {diffObject[ISOcodes[x]] = 1; continue}
    //simplified visa
    if(assignedColorsRef.current[0][ISOcodes[x]] != 12 && assignedColorsRef.current[0][ISOcodes[x]] != 0 && assignedColorsRef.current[0][ISOcodes[x]] != 11 && assignedColorsRef.current[0][ISOcodes[x]] != 10 && assignedColorsRef.current[0][ISOcodes[x]] != 9 && assignedColorsRef.current[0][ISOcodes[x]] != 8 && assignedColorsRef.current[0][ISOcodes[x]] != 7 && assignedColorsRef.current[0][ISOcodes[x]] != 6 && assignedColorsRef.current[y()][ISOcodes[x]] == 12) {diffObject[ISOcodes[x]] = 1; continue}
  }

  for(let j = 0; j < selectArrayRefLength; j++) {
    if(diffObject[ISOcodes[ISOcodes.indexOf(selectArrayRef.current[j] + 'Color')]] == 1) {
      diffObject[ISOcodes[ISOcodes.indexOf(selectArrayRef.current[j] + 'Color')]] = 0

      if(selectArrayRef.current[j] == 'france') {
        diffObject.PM = 0
        diffObject.MF = 0
        diffObject.BL = 0
        diffObject.GP = 0
        diffObject.MQ = 0
        diffObject.GF = 0
        diffObject.PF = 0
        diffObject.YT = 0
        diffObject.RE = 0
        diffObject.NC = 0
        diffObject.WF = 0
        continue
      }

      if(selectArrayRef.current[j] == 'unitedStates') {
        diffObject.AS = 0
        diffObject.VI = 0
        diffObject.GU = 0
        diffObject.MP = 0
        continue
      }

      if(selectArrayRef.current[j] == 'denmark') {
        diffObject.GL = 0
        diffObject.FO = 0
      }
    }
  }

  diffRef.current = diffObject
}