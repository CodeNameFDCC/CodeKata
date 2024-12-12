function solution(numbers = [0], signs = [true]) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let temp = signs[i] ? numbers[i] : -numbers[i];
    result = result + temp;
  }
  return result;
}

function main() {
  const arr = [
    { arr: [4, 7, 12], signs: [true, false, true] },
    { arr: [1, 2, 3], signs: [false, false, true] },
  ];

  for (const num of arr) {
    console.log(solution(num.arr, num.signs));
  }
}

main();
