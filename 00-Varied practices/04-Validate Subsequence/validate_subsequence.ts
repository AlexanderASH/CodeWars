
export function isValidSubsequence(array: number[], sequence: number[]): boolean {
    if (sequence.length > array.length) return false;
    
    let position: number = 0;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === sequence[position]) {
            position++;
        }
    }
    return position === sequence.length ? true : false;
}
