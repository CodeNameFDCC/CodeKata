function solution(X = "12321", Y = "42531") {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    for (const digit of X) countX[Number(digit)]++;
    for (const digit of Y) countY[Number(digit)]++;

    let result = '';

    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        result += String(i).repeat(commonCount);
    }


    if (result === '') return '-1';
    if (result === "0".repeat(result.length)) return '0';

    return result;
}


console.log(solution("100", "2345"));    // "-1"
console.log(solution("100", "203045"));  // "0"
console.log(solution("100", "123450"));  // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255"));   // "552"
