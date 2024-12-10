function solution(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

function main() {
  const arr = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
  ];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
