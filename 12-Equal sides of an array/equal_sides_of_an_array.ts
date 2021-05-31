
export function findEvenIndex(arr: number[]): number {
    if (arr.length < 0 && arr.length > 1000) return -1;

    let rightTotal: number = arr.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
    let leftTotal: number = 0;
    let index: number = 0;

    rightTotal -= arr[index];
    if (rightTotal === 0) return 0;

    while (leftTotal !== rightTotal && index !== (arr.length - 1)) {
        leftTotal += arr[index];
        index++;
        rightTotal -= arr[index];
    }

    return (leftTotal === 0 || index !== (arr.length - 1)) ? index : -1;
}