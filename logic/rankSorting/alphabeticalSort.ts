export default function alphabeticalSort(rankData:any, rankRef:any) {
  const unsortedData:(string | number)[][] = rankData

  const tempArray:number[] = Array.from({ length: rankData.length }, (_, index) => index + 1)

  unsortedData.push(tempArray)

  rankRef.current = rankData
}