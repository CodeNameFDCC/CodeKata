function solution(numbers = [0], divisol = 0) {
  let result = [];
  for (let num of numbers) {
    if (num % divisol === 0) result.push(num);
  }
  if (result.length === 0) result.push(-1);
  result.sort((a, b) => a - b);
  return result;
}

function main() {
  const arr = [
    { arr: [5, 9, 7, 10], divisol: 5 },
    { arr: [2, 36, 1, 3], divisol: 1 },
    { arr: [3, 2, 6], divisol: 10 },
  ];

  for (const num of arr) {
    console.log(solution(num.arr, num.divisol));
  }
}

main();
