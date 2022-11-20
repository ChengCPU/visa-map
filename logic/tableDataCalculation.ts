export default function tableDataCalculation(tableData:any, setTableData: Function) {
  setTableData(tableData, tableData[4][5] = "five")
}