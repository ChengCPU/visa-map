import { useContext, MutableRefObject } from 'react'
import { LanguageContext } from '../../logic/context/LanguageContext'
const ISOcodes:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KX','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const namesEN = ['Home country', 'Permit required', 'OECS freedom of movement', 'MERCOSUR freedom of movement', 'EU freedom of movement', 'GCC freedom of movement', 'Freedom of movement', 'Visa-free', 'Visa on arrival/E-visa', 'Visa on arrival', 'E-visa', 'Special permit/Police check', 'Simplified visa', 'Confirmation required', 'Visa required']
const namesES = ['País de origen', 'Permiso requerido', 'OECS libertad de movimiento', 'MERCOSUR libertad de movimiento', 'EU libertad de movimiento', 'GCC libertad de movimiento', 'Libertad de movimiento', 'Visado libre', 'Visado a llegada/Visado electronico', 'Visado a llegada', 'Visado electronico', 'Permiso especial/Verificación de antecedentes', 'Visado simplificado', 'Confirmación requerida', 'Visado requerido']
const namesPT = ['País natal', 'Permissão necessária', 'OECS liberdade de movimento', 'MERCOSUR liberdade de movimento', 'EU liberdade de movimento', 'GCC liberdade de movimento', ' Liberdade de movimento', 'Sem visto', 'Visto na chegada/Visto eletrônico', 'Visto na chegada', 'Visto eletrônico', 'Permissão especial/Verificação de antecedentes', 'Visto simplificado', 'Necessária confirmação', 'Visto necessário']
const namesFR = ['Pays natal', 'Permis requis', 'OECS liberté de mouvement', 'MERCOSUR liberté de mouvement', 'EU liberté de mouvement', 'GCC liberté de mouvement', 'Liberté de mouvement', 'Sans visa', 'Visa à l\'arrivée/Visa électronique', 'Visa à l\'arrivée', 'Visa électronique', 'Permis spécial/Vérification des antécédents', 'Visa simplifié', 'Confirmation requise', 'Visa requis']
const australiaEvisitor:string[] = ['austria','belgium','bulgaria','croatia','cyprus','czechRepublic','denmark','estonia','finland','france','germany','greece','hungary','ireland','italy','latvia','lithuania','luxembourg','malta','netherlands','poland','portugal','romania','slovakia','spain','sweden','andorra','iceland','liechtenstein','monaco','norway','sanMarino','switzerland','unitedKingdom','vaticanCity']
interface Props {
  assignedColorsRef:MutableRefObject<{[key:string]:number}[]>;
  selectArrayRef:MutableRefObject<(null|string)[]>;
  verticalColumn:number;
  horizontalColumn:number;
}


const VisaPolicy:React.FC<Props> = ({ assignedColorsRef, selectArrayRef, verticalColumn, horizontalColumn }) => {

  const { language } = useContext(LanguageContext)

  const languageCaculation:Function = (num:number) => {
    switch(language) {
      case '🇬🇧EN': return namesEN[num]
      case '🇪🇸ES': return namesES[num]
      case '🇵🇹PT': return namesPT[num]
      case '🇫🇷FR': return namesFR[num]
    }
  }

  const auETAcalc:Function = () => {
    let i = 0
    while(selectArrayRef.current[i] != null) {
      i++
    }
    i--
    if(australiaEvisitor.includes((selectArrayRef.current[i]))) {
      return 'eVisitor'
    }

    return 'Electronic Travel Authorization'
  }

  const ETAcodes:{[key:string]:string | Function} = {CA:'Electronic Travel Authorization',GB:'Electronic Travel Authorization',NZ:'NZeTA',AU:auETAcalc(),US:'ESTA',VI:'ESTA',GU:'ESTA',MP:'ESTA',AS:'EPWP',KR:'K-ETA',HK:'Pre-arrival Registration',SC:'SEBS',KE:'Electronic Travel Authorization',PK:'Electronic Travel Authorization',LK:'Electronic Travel Authorization',CV:'EASE',MA:'AEVM'}

  const colorCalculation:Function = () => {
    switch(assignedColorsRef.current[horizontalColumn]?.[ISOcodes[verticalColumn]]) {
      case 0: return 'rgb(255,20,147)'
      case 1: return 'rgb(255,0,0)'
      case 2: return 'rgb(255,145,0)'
      case 3: return 'rgb(0,135,93)'
      case 4: return 'rgb(0,51,153)'
      case 5: return 'rgb(153,123,61)'
      case 6: return 'rgb(255,179,191)'
      case 7: return 'rgb(50,205,50)'
      case 8: return 'rgb(81,205,123)'
      case 9: return 'rgb(161,224,123)'
      case 10: return 'rgb(255,255,92)'
      case 11: return 'rgb(135,206,250)'
      case 12: return 'rgb(118,65,171)'
      case 13: return 'rgb(200,200,200)'
      case 14: return 'rgb(0,0,0)'
      case 15: return 'rgb(149,150,150)'
      default: return '#333333'
    }
  }

  const visaPolicyCalculation:Function = () => {
    switch(assignedColorsRef.current[horizontalColumn]?.[ISOcodes[verticalColumn]]) {
      case 0: return languageCaculation(0)
      case 1: return languageCaculation(1)
      case 2: return languageCaculation(2)
      case 3: return languageCaculation(3)
      case 4: return languageCaculation(4)
      case 5: return languageCaculation(5)
      case 6: return languageCaculation(6)
      case 7: return languageCaculation(7)
      case 8: return ETAcodes[ISOcodes[verticalColumn]]
      case 9: return languageCaculation(8)
      case 10: return languageCaculation(9)
      case 11: return languageCaculation(10)
      case 12: return languageCaculation(11)
      case 13: return languageCaculation(12)
      case 14: return languageCaculation(13)
      case 15: return languageCaculation(14)
      default: return null;
    }
  }

  return (
    <td className={'text'}>
    <style jsx>{`
      .text {
        padding: 10px;
        color: ${(assignedColorsRef.current[horizontalColumn]?.[ISOcodes[verticalColumn]] == 14) ? '#FFFFFF' : '#222222'};
        border: 1px solid #222222;
        background-color: ${(selectArrayRef.current[horizontalColumn] != null) ? colorCalculation() : '#333333'};
      }
    `}</style>
    {(selectArrayRef.current[horizontalColumn] != null) ? visaPolicyCalculation() : null}
    </td>
  )
}

export default VisaPolicy