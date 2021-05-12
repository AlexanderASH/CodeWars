
export function number(busStops: [number, number][]): number {
    let sum = 0;

    sum = busStops.reduce((accumulator, currentValue): number => {
        return accumulator + currentValue[0] - currentValue[1];
    }, sum);

    return sum;
}