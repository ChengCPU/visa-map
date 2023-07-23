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

  const tempArray = []
  for(let i = 1; i < rankData.length + 1; i++) {
    tempArray.push(i)
  }

  let count = 0;
  for(let i = 0; i < rankData.length - 1; i++) {
    tempArray[i] = tempArray[i] - count
    if(rankData[i][1] == rankData[i + 1][1] && rankData[i][2] == rankData[i + 1][2] && rankData[i][3] == rankData[i + 1][3] && rankData[i][4] == rankData[i + 1][4] && rankData[i][5] == rankData[i + 1][5] && rankData[i][6] == rankData[i + 1][6]) {
      count++
    }
  }

  let x = rankData.length - 2
  if(rankData[x][1] == rankData[x + 1][1] && rankData[x][2] == rankData[x + 1][2] && rankData[x][3] == rankData[x + 1][3] && rankData[x][4] == rankData[x + 1][4] && rankData[x][5] == rankData[x + 1][5] && rankData[x][6] == rankData[x + 1][6]) {
    tempArray[x + 1] = tempArray[x]
  } else {
    tempArray[x + 1] = tempArray[x] + 1
  }

  sortedData.push(tempArray)

  setRankRender(sortedData)
}