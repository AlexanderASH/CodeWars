
export function removeNb (n: number): number[][] {
    let results: number[][] = [];
    let result: number;

    const total: number = n * (n + 1) / 2;

    for (let i = n; i > 0; i--) {
        result = (total - i) / (i + 1);
        
        if (result < n && Number.isInteger(result)) {
            results.push([result, i]);
        }
    }
    
    return results;
}