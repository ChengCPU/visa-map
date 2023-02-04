export default function visaFreeSort(rankData:any, setRankRender:Function, sort:string) {
  const unsortedData = rankData
  let tempDataVf

  for (let i = 0; i < unsortedData.length; i++) {
  let current = unsortedData[i][1];
  let current2 = unsortedData[i];
  let j;
    for(j=i-1; j >= 0 && unsortedData[j][1] > current;j--) {
      unsortedData[j + 1] = unsortedData[j]
      unsortedData[j + 1][1] = unsortedData[j][1]
    }
  unsortedData[j + 1] = current2;
  unsortedData[j + 1][1] = current;
  }

  const sortedData = unsortedData.reverse()
  const visaOnArrivalEvisaCheck = (x:number) => {
    if(sortedData[x]?.[2] < sortedData[x + 1]?.[2] && sortedData[x]?.[1] == sortedData[x + 1]?.[1]) {
      tempDataVf = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataVf
    }
  }
  for(let v = 0; v < 5; v++) {
    for(let t = 0; t < sortedData.length; t++) {
      visaOnArrivalEvisaCheck(t)
    }
  }
  if(sort == 'Ascending') {
    sortedData.reverse()
  }
  setRankRender(sortedData)
}