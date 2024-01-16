export default function reverseSort(rankRef:any) {
	const unsortedData:(string | number)[][] = rankRef.current
	
	unsortedData.pop()
	unsortedData.reverse()
	const tempArray:number[] = Array.from({ length: unsortedData.length }, (_, index) => index + 1);

	let count:number = 0;
	for(let i = 0; i < unsortedData.length - 1; i++) {
		tempArray[i] = tempArray[i] - count
		if(unsortedData[i][1] == unsortedData[i + 1][1] && unsortedData[i][2] == unsortedData[i + 1][2] && unsortedData[i][3] == unsortedData[i + 1][3] && unsortedData[i][4] == unsortedData[i + 1][4] && unsortedData[i][5] == unsortedData[i + 1][5] && unsortedData[i][6] == unsortedData[i + 1][6] && unsortedData[i][7] == unsortedData[i + 1][7] && unsortedData[i][8] == unsortedData[i + 1][8]) {
			count++
		}
	}
	
	unsortedData.push(tempArray)

	rankRef.current = unsortedData
}