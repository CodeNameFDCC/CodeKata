function solution(str = "") {
    let temp = str.split("");
    temp.sort().reverse();
    const result = temp.join("");
    return result;
}


function main() {
    const str =
        "Zbcdefg";
    console.log(solution(str));

}

main();
