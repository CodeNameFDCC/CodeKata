function solution(s="try hello world") {

    let result = [];
    let temps = s.split(" ");
    for(let i=0;i<temps.length;i++){
        result.push(tempers(temps[i]));
    }
    return result.join(" ");
}
function tempers(word)
{
    let result = "";
    for(let i=0;i<word.length;i++){
        if(i%2==0){
            result += word[i].toUpperCase();
        }else{
            result += word[i].toLowerCase();
        }
    }
    return result;
}

console.log(solution());