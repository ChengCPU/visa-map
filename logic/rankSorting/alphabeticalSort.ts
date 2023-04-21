export default function alphabeticalSort(rankData:any, setRankRender:Function, sort:string) {
  const unsortedData = rankData
  if(sort == 'Ascending') {
    unsortedData.reverse()
  }
  setRankRender(rankData)
}