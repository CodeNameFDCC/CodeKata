function solution(a = [0], b = [0]) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

function main() {
  const arr = [
    { a: [1, 2, 3, 4], b: [-3, -1, 0, 2] },
    { a: [-1, 0, 1], b: [1, 0, -1] },
  ];

  for (const num of arr) {
    console.log(solution(num.a, num.b));
  }
}

main();
