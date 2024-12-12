function solution(strings = [""]) {
  let result = 0;

  for (let string of strings) {
    if (string === "Kim") {
      return `김서방은 ${result}에 있다`;
    }
    result++;
  }
}

function main() {
  const arr = ["jane", "kim"];

  console.log(solution(arr));
}

main();
