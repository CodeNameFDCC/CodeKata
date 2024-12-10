function solution(num) {
  const str = ["Odd", "Even"];
  let result = num % 2 === 0 ? str[1] : str[0];

  return result;
}

function main() {
  const arr = [3, 4];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
