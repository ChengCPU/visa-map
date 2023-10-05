export default function alphabeticalSort(rankData:any, setRankRender:Function, sort:string) {
  const unsortedData:(string | number)[][] = rankData
  if(sort == 'Ascending') {
    unsortedData.reverse()
  }

  const tempArray:number[] = Array.from({ length: rankData.length }, (_, index) => index + 1);

  unsortedData.push(tempArray)

  setRankRender(rankData)
}