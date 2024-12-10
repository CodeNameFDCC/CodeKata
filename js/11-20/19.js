function solution(number = 1) {
  let sqrt = Math.sqrt(number);

  if (number % sqrt === 0) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

function main() {
  const arr = [121, 3];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
