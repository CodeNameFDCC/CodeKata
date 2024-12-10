function solution(number = 1) {
  let result = 0;
  let temp = number;
  while (temp !== 1) {
    if (temp % 2 === 0) {
      temp = temp / 2;
    } else {
      temp = temp * 3 + 1;
    }
    result++;
    if (result > 500) return -1;
  }

  return result;
}

function main() {
  const arr = [6, 16, 626331];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
