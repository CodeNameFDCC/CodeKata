function solution(number) {
  for (let i = 0; i < number + 1; i++) {
    if (number % i === 1) {
      return i;
    }
  }
  return -1;
}

function main() {
  const arr = [10, 12];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
