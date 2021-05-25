export function iqTest(numbers: string): number {
    let numbersArray: string[] = numbers.split(' ');
    let pairs: number[] = [];
    let odds: number[] = [];
    
    for (let i = 1; i <= numbersArray.length; i++) {
      if (+numbersArray[i - 1] % 2 == 0) {
        pairs.push(i);
      }  else {
        odds.push(i);
      }
    }
    
    return pairs.length > odds.length ? odds[0] : pairs[0];
}