function solution(num1, num2) {
  let result = Math.floor(num1 / num2);
  return result;
}

function main() {
  const arr = [
    [10, 5],
    [7, 2],
  ];

  for (const num of arr) {
    console.log(solution(num[0], num[1]));
  }
}

main();
