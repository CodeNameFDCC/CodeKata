function solution(num1, num2) {
  let result = num1 * num2;
  return result;
}

function main() {
  const arr = [
    [3, 4],
    [27, 19],
  ];

  for (const num of arr) {
    console.log(solution(num[0], num[1]));
  }
}

main();
