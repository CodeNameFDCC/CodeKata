function solution(angle) {
  let result = -1;

  if (0 < angle && 90 > angle) {
    result = 1;
  } else if (angle === 90) {
    result = 2;
  } else if (90 < angle && 180 > angle) {
    result = 3;
  } else if (180 === angle) {
    result = 4;
  }
  return result;
}

function main() {
  const arr = [70, 91, 180];

  for (const num of arr) {
    console.log(solution(num));
  }
}

main();
