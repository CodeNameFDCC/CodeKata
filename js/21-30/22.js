function solution(a = 0, b = 0) {
  if (b < a) {
    [a, b] = [b, a];
  }
  let result = 0;
  for (let i = a; i < b + 1; i++) {
    result += i;
  }
  return result;
}

function main() {
  const arr = [
    [3, 5],
    [3, 3],
    [5, 3],
  ];
  for (const num of arr) {
    console.log(solution(num[0], num[1]));
  }
}

main();
