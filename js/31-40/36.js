function solution(str = "") {
    const length = (srt.length === 4 || str.length === 6);
    const isNumber = /^\d+$/;
    const result = isNumber.test(str) && length;

    return result;
}


function main() {
    const arr = { 0: "a234", 1: "1234" };

    console.log(solution());

}

main();
