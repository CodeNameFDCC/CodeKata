function solution(number = 1) {
  let result = [];
  result = ~~number;
  return result;
}

function main() {
  const arr = [-1,1,-2,2,-3,3];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
