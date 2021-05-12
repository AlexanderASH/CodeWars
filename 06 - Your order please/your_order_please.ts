
export function order(words: string): string {
    if(!words) {
        return words;
    }

    let regExp = new RegExp(/[1-9]/g);

    return words.split(" ")
        .map((word) => {
            return [(word.match(regExp)!)[0], word];
        })
        .sort((a, b) => +a[0] - +b[0])
        .map(word => word[1])
        .join(" ");
}