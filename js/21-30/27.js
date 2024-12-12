function solution(numbers = "") {
  let result = "";
  const length = numbers.length;
  let cut = length - 4;
  for (str of numbers) {
    if (cut > 0) {
      str = "*";
      cut--;
    }
    result += str;
  }
  return result;
}

function main() {
  const arr = [{ phone_number: "01033334444" }, { phone_number: "027778888" }];

  for (const num of arr) {
    console.log(solution(num.phone_number));
  }
}

main();
