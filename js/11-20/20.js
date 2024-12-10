//문제를 잘 봐야한다.
// BigInt까지 간다

function solution(number = 1) {
  let result = number
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return BigInt(result);
}

function main() {
  const arr = [118372, 654321, 15798754, 23645782];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
