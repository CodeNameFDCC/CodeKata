function solution(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

function main() {
  const arr = [
    [2, 5],
    [4, 3],
    [-4, 2],
  ];

  for (const num of arr) {
    console.log(solution(num[0], num[1]));
  }
}

main();
