function solution(left = 0, right = 0) {
  let result = 0;
  for (let i = left; i < right + 1; i++) {
    result += divisor(i);
  }

  return result;
}

function divisor(num) {
  let count = 0;
  for (i = 1; i < num + 1; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count % 2 === 0 ? num : -num;
}

function main() {
  const arr = [
    { left: 13, right: 17 },
    { left: 24, right: 27 },
  ];

  for (const num of arr) {
    console.log(solution(num.left, num.right));
  }
}

main();
