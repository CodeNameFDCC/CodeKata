function solution(n = 3, lost = [3], reserve = [1]) {

    const filterReserve = reserve.filter(r => !lost.includes(r));

    const filterLost = lost.filter(l => !reserve.includes(l));

    let answer = n - filterLost.length;

    filterReserve.sort((a, b) => a - b);
    filterLost.sort((a, b) => a - b);

    for (let lostStudent of filterLost) {
        if (filterReserve.includes(lostStudent - 1)) {
            answer++;
            filterReserve.splice(filterReserve.indexOf(lostStudent - 1), 1);
        }
        else if (filterReserve.includes(lostStudent + 1)) {
            answer++;
            filterReserve.splice(filterReserve.indexOf(lostStudent + 1), 1);
        }
    }

    return answer;
}


console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));