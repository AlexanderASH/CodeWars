
export function toPascalCase(words: string): string {
    return words.split(/ |-/g)
        .map((word) => {
            return word.toLowerCase()
                .replace(/^[a-zA-Z]/g, word.charAt(0).toUpperCase())
                .trim();
        })
        .join("");
}