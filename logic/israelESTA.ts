import { MutableRefObject } from 'react'
const esta:string[] = ['bermuda','canada','marshallIslands','micronesia','palau','andorra','australia','austria','belgium','brunei','chile','croatia','czechRepublic','denmark','estonia','finland','france','germany','greece','hungary','iceland','ireland','italy','japan','latvia','liechtenstein','lithuania','luxembourg','malta','monaco','netherlands','newZealand','norway','poland','portugal','sanMarino','singapore','slovakia','slovenia','southKorea','spain','sweden','switzerland','taiwan','unitedKingdom','bahamas','britishVirginIslands','caymanIslands','turksAndCaicos']

export default function israelESTA(selectArrayRef:MutableRefObject<(null|string)[]>, ESTAbanRef:MutableRefObject<boolean>) {
  let flag = false
  let k:number = 0
  while(selectArrayRef.current[k] != null) {
    if(esta.includes(selectArrayRef.current[k])) {
      flag = true
      return
    }
    k++
  }

  if(flag) {
    return
  }

  let i:number = 0
  while(selectArrayRef.current[i] != null) {
    if(selectArrayRef.current[i] == 'israel') {
      let j:number = 0
      while(selectArrayRef.current[j] != null) {
        if(selectArrayRef.current[j] != 'israel' && selectArrayRef.current[j] != 'teudatMaavar' && esta.includes(selectArrayRef.current[j]) == false) {
          ESTAbanRef.current = true
        }
        j++
      }
    }
    i++
  }
}