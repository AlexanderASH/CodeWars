
export function dnaStrand(dna: string): string {
    const complementaryDNA: Map<string, string> = new Map<string, string>([
        ["A", "T"],
        ["T", "A"],
        ["G", "C"],
        ["C", "G"],
    ]);

    let dnaArray = [...dna];
    
    for (let i = 0; i < dnaArray.length; i++) {
        dnaArray.splice(i, 1, complementaryDNA.get(dnaArray[i])!);
    }
    return dnaArray.join('');
}