function solution(n, m) {

    let result = [];

    result.push(gcd(n, m));
    result.push(lcm(n, m));

    return result;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


function main() {
    const arr = [[3, 12], [2, 5]];

    for (let i = 0; i < arr.length; i++) {
        console.log(solution(arr[i][0], arr[i][1]));
    }
}

main();
