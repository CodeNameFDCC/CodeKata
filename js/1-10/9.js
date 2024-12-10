function solution(num) {
  let result = 0;
  for (let i = 0; i < num + 1; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}

function main() {
  const arr = [10, 4];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
