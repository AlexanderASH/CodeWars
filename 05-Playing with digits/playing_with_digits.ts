
export const digPow = (n: number, p: number): number => {
    let digit: number = n;
    let sum: number = 0;
    let k: number;

    let countDigits: number = n.toString().length;
    
    while(digit != 0) {
        sum += Math.pow((digit % 10), (p + countDigits - 1));
        digit = Math.floor(digit / 10);
        countDigits--;
    }

    k = Math.round(sum / n);

    return (sum === n * k) ? k : -1;
}