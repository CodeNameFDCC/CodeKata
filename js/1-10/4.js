function solution(age) {
  const year = 2023;
  let result = Math.floor(year - age);
  return result;
}

function main() {
  const arr = [40, 23];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
