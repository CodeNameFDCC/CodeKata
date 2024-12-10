function solution(num1, num2) {
  let result = (num1 / num2) * 1000;
  return ~~result;
}

function main() {
  const arr = [
    [3, 2],
    [7, 3],
    [1, 16],
  ];

  for (const num of arr) {
    console.log(solution(num[0], num[1]));
  }
}

main();
