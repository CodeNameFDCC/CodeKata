function solution(str = "hello world!") {
    const regular = /hello/i;

    return regular.test(str);
}

console.log(solution());