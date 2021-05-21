
export function add(x: number): any {
    
    const sum = (y: number): number => add(x + y);

    sum.valueOf = (): number => x;

    return sum;
}