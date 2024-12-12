function solution(numbers = [0]) {
  let result = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.find((num) => num === i)) continue;
    result += i;
  }
  return result;
}

function best(numbers = [0]) {
  const set = new Set(numbers);
  let result = 0;

  for (let i = 0; i < 10; i++) {
    if (!set.has(i)) {
      result += i;
    }
  }

  return result;
}

function main() {
  const arr = [
    { numbers: [1, 2, 3, 4, 6, 7, 8, 0] },
    { numbers: [5, 8, 4, 0, 6, 7, 9] },
  ];

  for (const num of arr) {
    console.log(solution(num.numbers));
  }
}

main();
