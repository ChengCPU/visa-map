export default function freedomOfMovementSort(rankData:any, rankRef:any, sort:string) {
  const unsortedData:(string | number)[][] = rankData

  for(let i = 0; i < unsortedData.length; i++) {
    let current:string | number = unsortedData[i]?.[6];
    let current2:(string | number)[] = unsortedData[i];
    let j:number;

    for(j = i - 1; j >= 0 && unsortedData[j][6] > current; j--) {
      unsortedData[j + 1] = unsortedData[j]
      unsortedData[j + 1][6] = unsortedData[j][6]
    }

    unsortedData[j + 1] = current2;
    unsortedData[j + 1][6] = current;
  }

  for(let i = 0; i < unsortedData.length; i++) {
    let current:string | number = unsortedData[i]?.[7];
    let current2:(string | number)[] = unsortedData[i];
    let j:number;

    for(j = i - 1; j >= 0 && unsortedData[j][7] > current; j--) {
      unsortedData[j + 1] = unsortedData[j]
      unsortedData[j + 1][7] = unsortedData[j][7]
    }

    unsortedData[j + 1] = current2;
    unsortedData[j + 1][7] = current;
  }
  
  const sortedData:(string | number)[][] = unsortedData.reverse()

  let tempDataVf:(string | number)[]
  let tempDataVoa:(string | number)[]
  
  const lessThanVisaFreeCheck:Function = (x:number) => {
    if(sortedData[x]?.[1] < sortedData[x + 1]?.[1] && sortedData[x]?.[6] == sortedData[x + 1]?.[6]) {
      tempDataVf = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataVf

      lessThanVisaFreeCheck(x - 1)
    }
  }

  const visaOnArrivalEvisaCheck:Function = (x:number) => {
    if(sortedData[x]?.[2] < sortedData[x + 1]?.[2] && sortedData[x]?.[6] == sortedData[x + 1]?.[6] && sortedData[x + 1]?.[1] >= sortedData[x]?.[1]) {
      tempDataVoa = sortedData[x + 1]
      sortedData[x + 1] = sortedData[x]
      sortedData[x] = tempDataVoa

      visaOnArrivalEvisaCheck(x - 1)
    }
  }

  for(let z = 0; z < sortedData.length; z++) {
    lessThanVisaFreeCheck(z)
  }
  
  for(let t = 0; t < sortedData.length; t++) {
    visaOnArrivalEvisaCheck(t)
  }

  if(sort == 'Ascending') {
    sortedData.reverse()
  }

  const tempArray:number[] = Array.from({ length: rankData.length }, (_, index) => index + 1);

  let count:number = 0
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