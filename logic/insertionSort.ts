export default function insertionSort(rankData:any, setRankRender:Function) {
  const unsortedData = rankData

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
  setRankRender(sortedData)
}