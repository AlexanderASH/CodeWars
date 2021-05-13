
export function longest(s1: string, s2: string): string {
    let stringArray: Set<string> = new Set([...s1, ...s2]);
    return Array.from(stringArray.values()).sort((a, b) => a > b ? 1 : -1).join("");
}