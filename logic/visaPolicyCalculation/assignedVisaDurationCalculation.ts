import { getVisaDurationData } from '../jsonUtils'
import { MutableRefObject } from 'react'
const data = getVisaDurationData()

export default function assignedVisaDurationCalculation(selectRef:MutableRefObject<{selection:number;passport:null|string}>, assignedVisaDurationRef:MutableRefObject<{[key:string]:number}[]>) {
  assignedVisaDurationRef.current[selectRef.current.selection] = data[selectRef.current.passport]
}