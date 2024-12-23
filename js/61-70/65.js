function solution(s) {
    let count = 0;
    let currentChar = "";
    let charCount = 0;
    let otherCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (charCount === 0) {

            currentChar = s[i];
            charCount = 1;
        } else if (s[i] === currentChar) {
            charCount++;
        } else {
            otherCount++;
        }

        if (charCount === otherCount) {
            count++;
            charCount = 0;
            otherCount = 0;
        }
    }

    if (charCount > 0 || otherCount > 0) {
        count++;
    }

    return count;
}


console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
