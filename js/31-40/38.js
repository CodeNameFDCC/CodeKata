function solution(n = 0, a = 0) {

    let result = "";
    for (let i = 0; i < a; i++) {
        result += "*".repeat(n);
        result += "\n";
    }
    return result;
}


function main() {
    const arr = { 0: 5, 1: 3 };

    console.log(solution(arr[0], arr[1]));
}

main();
