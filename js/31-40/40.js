function solution(n) {

    let temp = ternary(n);
    let result = decimal(temp.join(""));
    return result;
}

function decimal(n) {


    return parseInt(n, 3);
}

function ternary(n) {
    let temp = [];
    while (n > 0) {
        temp.push(n % 3);
        n = Math.floor(n / 3);

    }
    return temp;
}



function main() {
    const arr = [45, 125];


    console.log(solution(arr[0]));
}

main();
