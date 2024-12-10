function solution(number) {
  let result = 0;
  for (let i = 0; i < number + 1; i++) {
    if (number % i === 0) {
      result += i;
    }
  }
  return result;
}

function main() {
  const arr = [12, 5];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
