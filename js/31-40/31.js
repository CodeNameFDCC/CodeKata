function solution(number = 0) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += i % 2 !== 0 ? "박" : "수";
  }
  return result;
}

function main() {
  const arr = [{ number: 3 }, { number: 4 }];

  for (const num of arr) {
    console.log(solution(num.number));
  }
}

main();
