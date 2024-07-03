import { useCallback, useMemo, useContext, MutableRefObject } from 'react'
import { LanguageContext } from '../../logic/context/LanguageContext'
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const policyEN:string[] = ['Home country','Permit required','OECS freedom of movement','MERCOSUR freedom of movement','EU freedom of movement','GCC freedom of movement','Freedom of movement','Visa-free','Visa on arrival/E-visa','Visa on arrival','E-visa','Special permit/Police check','Simplified visa','Confirmation required','Visa required','days']
const policyES:string[] = ['País de origen','Permiso requerido','Libertad de movimiento OECS','Libertad de movimiento MERCOSUR','Libertad de movimiento UE','Libertad de movimiento GCC','Libertad de movimiento','Visado libre','Visado a llegada/Visado electronico','Visado a llegada','Visado electronico','Permiso especial/Verificación de antecedentes','Visado simplificado','Confirmación requerida','Visado requerido','días']
const policyPT:string[] = ['País natal','Permissão necessária','Liberdade de movimento OECS','Liberdade de movimento MERCOSUR','Liberdade de movimento UE','Liberdade de movimento GCC','Liberdade de movimento','Sem visto','Visto na chegada/Visto eletrônico','Visto na chegada','Visto eletrônico','Permissão especial/Verificação de antecedentes','Visto simplificado','Necessária confirmação','Visto necessário','dias']
const policyFR:string[] = ['Pays natal','Permis requis','Liberté de mouvement OECS','Liberté de mouvement MERCOSUR','Liberté de mouvement UE','Liberté de mouvement GCC','Liberté de mouvement','Sans visa','Visa à l\'arrivée/Visa électronique','Visa à l\'arrivée','Visa électronique','Permis spécial/Vérification des antécédents','Visa simplifié','Confirmation requise','Visa requis','jours']
const policyHR:string[] = ['Domovina','Potrebna je dozvola','OECS sloboda kretanja','MERCOSUR sloboda kretanja','EU sloboda kretanja','GCC sloboda kretanja','Sloboda kretanja','Bez vize','Viza po dolasku/E-viza','Viza po dolasku','E-viza','Posebna dozvola/Policijska provjera','Pojednostavljena viza','Potrebna je potvrda','Potrebna je viza','dani']
const policyColors:string[] = ['rgb(255,20,147)','rgb(255,0,0)','rgb(255,145,0)','rgb(0,135,93)','rgb(0,51,153)','rgb(153,123,61)','rgb(255,179,191)','rgb(50,205,50)','rgb(81,205,123)','rgb(161,224,123)','rgb(255,255,92)','rgb(135,206,250)','rgb(118,65,171)','rgb(200,200,200)','rgb(0,0,0)','rgb(150,150,150)']
const australiaEvisitor:string[] = ['austria','belgium','bulgaria','croatia','cyprus','czechRepublic','denmark','estonia','finland','france','germany','greece','hungary','ireland','italy','latvia','lithuania','luxembourg','malta','netherlands','poland','portugal','romania','slovakia','spain','sweden','andorra','iceland','liechtenstein','monaco','norway','sanMarino','switzerland','unitedKingdom','vaticanCity']
interface Props {
  assignedColorsRef:MutableRefObject<{[key:string]:number}[]>;
  selectArrayRef:MutableRefObject<(null|string)[]>;
  verticalColumn:number;
  horizontalColumn:number;
  assignedVisaDurationRef:MutableRefObject<{[key:string]:number}[]>;
}

const VisaPolicy:React.FC<Props> = ({ assignedColorsRef, selectArrayRef, verticalColumn, horizontalColumn, assignedVisaDurationRef }) => {

  const { language } = useContext(LanguageContext)

  const languageCaculation = useMemo(() => {
    switch(language) {
      case '🇬🇧EN': return policyEN
      case '🇪🇸ES': return policyES
      case '🇵🇹PT': return policyPT
      case '🇫🇷FR': return policyFR
      case '🇭🇷HR': return policyHR
    }
  }, [language])

  const auETAcalc:Function = useCallback(() => {
    let i:number = 0
    while(selectArrayRef.current[i] != null) {
      i++
    }
    i--

    if(australiaEvisitor.includes((selectArrayRef.current[i]))) {
      return 'eVisitor'
    }

    return 'Electronic Travel Authorization'
  }, [])

  const ETAcodes:{[key:string]:string | Function} = useMemo(() => {
    return {CA:'Electronic Travel Authorization',GB:'Electronic Travel Authorization',NZ:'NZeTA',AU:auETAcalc(),US:'ESTA',VI:'ESTA',GU:'ESTA',MP:'ESTA',AS:'EPWP',KR:'K-ETA',HK:'Pre-arrival Registration',SC:'SEBS',KE:'Electronic Travel Authorization',PK:'Electronic Travel Authorization',CV:'EASE',MA:'AEVM',SA:'Electronic Visa Waiver',MX:'Electronic Authorization System',MY:'Digital Arrival Card',KH:'e-Arrival Card'}
  }, [])

  const visaPolicyCalculation:Function = useCallback(() => {
    let num:number = assignedColorsRef.current[horizontalColumn]?.[ISOcodes[verticalColumn]]
    if(num < 8) {
      return languageCaculation[num]
    }

    if(num == 8) {
      return ETAcodes[ISOcodes[verticalColumn]]
    } else {
      return languageCaculation[num - 1]
    }
  }, [])

  const visaDurationCalculation:Function = useCallback(() => {
    if(assignedVisaDurationRef.current[horizontalColumn][ISOcodes[verticalColumn]] == 0) {
      return ''
    } else {
      return '(' + assignedVisaDurationRef.current[horizontalColumn][ISOcodes[verticalColumn]] + ' ' + languageCaculation[15] + ')'
    }
  }, [])

  return (
    <td className={'text'}>
      <style jsx>{`
        .text {
          padding: 10px;
          color: ${(assignedColorsRef.current[horizontalColumn]?.[ISOcodes[verticalColumn]] == 14) ? '#FFFFFF' : '#222222'};
          border: 1px solid #222222;
          background-color: ${(selectArrayRef.current[horizontalColumn] != null) ? policyColors[assignedColorsRef.current[horizontalColumn]?.[ISOcodes[verticalColumn]]] : '#333333'};
        }
      `}</style>
      {selectArrayRef.current[horizontalColumn] != null && visaPolicyCalculation() + ' ' + visaDurationCalculation()}
    </td>
  )
}

export default VisaPolicy