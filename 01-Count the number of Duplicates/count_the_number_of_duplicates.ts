
export function duplicateCount(text: string): number {
    const textCopy: string = text.toUpperCase();
    let hash: any = {};
    let count = 0;
    
    for (let i = 0; i < textCopy.length; i++) {
        hash[textCopy[i]] = (hash[textCopy[i]] || 0) + 1;

        if(hash[textCopy[i]] == 2) {
            count++;
        }
    }

    return count;
}