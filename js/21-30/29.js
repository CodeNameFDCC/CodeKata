function solution(numbers = [0]) {
  let result = [];
  let min = Math.min(...numbers);
  result = numbers.filter((x) => x != min);
  if (result.length === 0) result = [-1];
  return result;
}

function main() {
  const arr = [{ numbers: [4, 3, 2, 1] }, { numbers: [10] }];

  for (const num of arr) {
    console.log(solution(num.numbers));
  }
}

main();
