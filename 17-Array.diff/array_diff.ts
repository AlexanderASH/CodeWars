
export function arrayDiff(a: number[], b: number[]): number[] {
    if (a.length === 0) return [];
    
    if (b.length === 0) return a;

    let results: number[] = [];
    
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            results.push(a[i]);
        }
    }
    return results;
}
  