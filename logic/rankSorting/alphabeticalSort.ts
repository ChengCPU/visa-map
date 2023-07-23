export default function alphabeticalSort(rankData:any, setRankRender:Function, sort:string) {
  const unsortedData = rankData
  if(sort == 'Ascending') {
    unsortedData.reverse()
  }

  const tempArray = []
  for(let i = 1; i < rankData.length + 1; i++) {
    tempArray.push(i)
  }

  unsortedData.push(tempArray)

  setRankRender(rankData)
}