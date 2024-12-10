function solution(num1, num2) {
  let result = num1 === num2;
  return result ? 1 : -1;
}

function main() {
  const arr = [
    [2, 3],
    [11, 11],
    [7, 99],
  ];

  for (const num of arr) {
    console.log(solution(num[0], num[1]));
  }
}

main();
