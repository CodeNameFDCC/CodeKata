function solution(numbers) {
  let result = 0;
  const str = numbers.toString().split("");

  for (const num of str) {
    result += ~~num;
  }
  return result;
}

function main() {
  const arr = [123, 987];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
