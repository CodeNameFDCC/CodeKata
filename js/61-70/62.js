function solution(babbling = ["aya", "yee", "u", "maa"]) {
    const validSounds = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let sound of babbling) {
        const regex = new RegExp(`^(?!.*(${validSounds.join('|')})\\1)(?:${validSounds.join('|')})*$`);
        if (regex.test(sound)) {
            count++;
        }
    }

    return count;
}