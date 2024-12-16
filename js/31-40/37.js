function solution(arr1 = [[], []], arr2 = [[], []]) {
    const col = arr1.length;
    const row = arr1[0].length;

    for (let i = 0; i < col; i++) {

        for (let j = 0; j < row; j++) {
            arr1[i][j] += arr2[i][j];
        }
    }
    return arr1;
}


function main() {
    const arr = { 0: [[1, 2], [2, 3]], 1: [[3, 4], [5, 6]] };

    console.log(solution(arr[0], arr[1]));


}

main();
