function solution(number = 1) {
  let str = number.toString().split("");
  let result = "";
  let temp = 0;
  for (let num of str) {
    temp += ~~num;
  }
  result = number % temp === 0 ? true : false;

  return result;
}

function main() {
  const arr = [10, 12, 11, 13];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
