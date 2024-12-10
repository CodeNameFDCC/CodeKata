function solution(numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }

  return result / numbers.length;
}

function main() {
  const arr = [
    [1, 2, 3, 4],
    [5, 5],
  ];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
