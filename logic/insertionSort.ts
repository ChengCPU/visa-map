export default function insertionSort(rankData:any, setRankRender:Function) {
  const unsortedData = rankData
  let tempDataVf

  for (let i = 0; i < unsortedData.length; i++) {
  let current = unsortedData[i][6];
  let current2 = unsortedData[i];
  let j;
    for(j=i-1; j >= 0 && unsortedData[j][6] > current;j--) {
      unsortedData[j + 1] = unsortedData[j]
      unsortedData[j + 1][6] = unsortedData[j][6]
    }
  unsortedData[j + 1] = current2;
  unsortedData[j + 1][6] = current;
  }

  const sortedData = unsortedData.reverse()
  const lessThanVisaFreeCheck = (x:number) => {
    if(sortedData[x]?.[1] < sortedData[x + 1]?.[1] && sortedData[x]?.[6] == sortedData[x + 1]?.[6]) {
      tempDataVf = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataVf
    }
  }
  const visaOnArrivalEvisaCheck = (x:number) => {
    if(sortedData[x]?.[2] < sortedData[x + 1]?.[2] && sortedData[x]?.[6] == sortedData[x + 1]?.[6] && sortedData[x + 1]?.[1] >= sortedData[x]?.[1]) {
      tempDataVf = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataVf
    }
  }
  for(let v = 0; v < 5; v++) {
    for(let z = 0; z < sortedData.length; z++) {
      lessThanVisaFreeCheck(z)
    }
    for(let t = 0; t < sortedData.length; t++) {
      visaOnArrivalEvisaCheck(t)
    }
  }
  setRankRender(sortedData)
}