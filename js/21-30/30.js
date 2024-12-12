function solution(string = "") {
  const temp = string.split("");
  const even = temp.length % 2 === 0;
  const start = even ? temp.length / 2 - 1 : temp.length / 2;
  const end = start + 1;

  const result = even ? temp[start] + temp[end] : temp[Math.floor(start)];

  return result;
}

function main() {
  const arr = [{ strings: "abcde" }, { strings: "qwer" }];

  for (const num of arr) {
    console.log(solution(num.strings));
  }
}

main();
