
export function getSum(a: number, b: number): number {
    const minor: number = Math.min(a, b);
    const bigger: number = Math.max(a, b);
    let sum: number = 0;

    if (a === b) {
        return a;
    }
    
    for(let i = minor; i <= bigger; i++) {
        sum += i;
    }

    return sum;
}