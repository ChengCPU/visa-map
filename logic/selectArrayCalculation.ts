interface Select {selection:number;passport:null | string;}

export default function selectArrayCalculation(selectArray:null | string[], setSelectArray:Function, select:Select): void {
  setSelectArray(selectArray, selectArray[select.selection] = select.passport);
}