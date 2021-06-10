
export function josephusSurvivor(n: number, k: number): number {
    let numbersArray: number[] = [...Array(n).keys()].map(value => value + 1);
    let lastPosition: number = 0;

    for (let index = 0; index < n - 1; index++) {
        lastPosition += k - 1;
        if (lastPosition >= numbersArray.length) {
            lastPosition = lastPosition % numbersArray.length;
        }
        numbersArray.splice(lastPosition, 1);
    }

    return numbersArray.pop()!;
}