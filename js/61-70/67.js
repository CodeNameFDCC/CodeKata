function solution(arr1, arr2) {
    const rows = arr1.length;
    const cols = arr2[0].length;
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;
}

console.log(solution());
//arr1	arr2	return
//	[[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
//	[[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]] [[22, 22, 11], [36, 28, 18], [29, 20, 14]]