export default function insertionSort(rankData:any, setRankRender:Function) {
  const unsortedData = rankData
  let tempDataVf
  let tempDataVf2

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
  let count = 0
  let secondCount = 0
  for(let sortedDataLoop = 0; sortedDataLoop < sortedData.length; sortedDataLoop++) {
    if(sortedData[sortedDataLoop][6] == sortedData[sortedDataLoop + 1]?.[6] && sortedData[sortedDataLoop][6] == sortedData[sortedDataLoop + 2]?.[6]) {
      count++
      for(let z = 0; z < count; z++) {
        if(sortedData[sortedDataLoop][1] < sortedData[sortedDataLoop + z]?.[1] && sortedData[sortedDataLoop - 1][1] >= sortedData[sortedDataLoop + z]?.[1]) {
          tempDataVf = sortedData[sortedDataLoop + z]
          sortedData[sortedDataLoop + z] = sortedData[sortedDataLoop]
          sortedData[sortedDataLoop] = tempDataVf
          continue
        }
      }
    }
    if(sortedData[sortedDataLoop][6] != sortedData[sortedDataLoop + 1]?.[6]) {
      count = 0
    }
  }
  setRankRender(sortedData)
}
/*
  for(let rankDataLoop = 0; rankDataLoop < sortedData.length; rankDataLoop++) {
    if(sortedData[rankDataLoop][1] < sortedData[rankDataLoop + 1]?.[1] || sortedData[rankDataLoop - 1]?.[1] > sortedData[rankDataLoop]?.[1]) {
      tempDataVf = sortedData[rankDataLoop + 1]
      sortedData[rankDataLoop + 1] = sortedData[rankDataLoop]
      sortedData[rankDataLoop] = tempDataVf
    }
  }
*/