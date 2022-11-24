export default function tableDataCalculation(assignedColors:object[], tableData:any, setTableData: Function, a:number, visaPolicy:string) {
  setTableData(tableData, tableData[a][a] = visaPolicy)
}