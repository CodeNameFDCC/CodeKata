function solution(price = 0, money = 0, count = 0) {
    let result = 0;

    for (let i = 0; i < count + 1; i++) {
        result += price * i;
    }

    return Math.max(result - money, 0);
}


function main() {
    const arr = { price: 3, money: 20, count: 4 };

    console.log(solution(arr.price, arr.money, arr.count));

}

main();
