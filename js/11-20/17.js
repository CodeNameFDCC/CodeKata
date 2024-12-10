function solution(number = 1) {
  let result = [];
  result = number
    .toString()
    .split("")
    .reverse()
    .map((number) => ~~number);
  return result;
}

function main() {
  const arr = [12345];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
