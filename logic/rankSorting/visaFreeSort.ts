export default function visaFreeSort(rankData:any, rankRef:any, sort:string) {
  const unsortedData:(string | number)[][] = rankData
  let tempDataVf:(string | number)[]
  let tempDataFom:(string | number)[]

  for(let i = 0; i < unsortedData.length; i++) {
    let current:string | number = unsortedData[i][1]
    let current2:(string | number)[] = unsortedData[i]
    let j:number

    for(j = i - 1; j >= 0 && unsortedData[j][1] > current; j--) {
      unsortedData[j + 1] = unsortedData[j]
      unsortedData[j + 1][1] = unsortedData[j][1]
    }

    unsortedData[j + 1] = current2;
    unsortedData[j + 1][1] = current;
  }

  const sortedData:(string | number)[][] = unsortedData.reverse()

  const visaOnArrivalEvisaCheck:Function = (x:number) => {
    if(sortedData[x]?.[2] < sortedData[x + 1]?.[2] && sortedData[x]?.[1] == sortedData[x + 1]?.[1]) {
      tempDataVf = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataVf

      visaOnArrivalEvisaCheck(x - 1)
    }
  }

  const freedomOfMovementCheck:Function = (x:number) => {
    if(sortedData[x]?.[7] < sortedData[x + 1]?.[7] && sortedData[x]?.[1] == sortedData[x + 1]?.[1]) {
      tempDataFom = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataFom

      freedomOfMovementCheck(x - 1)
    }
  }

  for(let t = 0; t < sortedData.length; t++) {
    visaOnArrivalEvisaCheck(t)
  }

  for(let b = 0; b < sortedData.length; b++) {
    freedomOfMovementCheck(b)
  }

  if(sort == 'Ascending') {
    sortedData.reverse()
  }

  const tempArray:number[] = Array.from({ length: rankData.length }, (_, index) => index + 1);

  let count:number = 0;
  for(let i = 0; i < rankData.length - 1; i++) {
    tempArray[i] = tempArray[i] - count
    if(rankData[i][1] == rankData[i + 1][1] && rankData[i][2] == rankData[i + 1][2] && rankData[i][3] == rankData[i + 1][3] && rankData[i][4] == rankData[i + 1][4] && rankData[i][5] == rankData[i + 1][5] && rankData[i][6] == rankData[i + 1][6]) {
      count++
    }
  }

  let x:number = rankData.length - 2
  if(rankData[x][1] == rankData[x + 1][1] && rankData[x][2] == rankData[x + 1][2] && rankData[x][3] == rankData[x + 1][3] && rankData[x][4] == rankData[x + 1][4] && rankData[x][5] == rankData[x + 1][5] && rankData[x][6] == rankData[x + 1][6]) {
    tempArray[x + 1] = tempArray[x]
  } else {
    tempArray[x + 1] = tempArray[x] + 1
  }

  sortedData.push(tempArray)

  rankRef.current = sortedData
}