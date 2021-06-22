
export function findUniq(arr: string[]): string {
    let stringRandom: string = arr[0].toLowerCase();
    let numberMatches: RegExpMatchArray;
    let min: number = Number.MAX_VALUE;
    let position: number = 0;
    
    for (let index = 1; index < arr.length; index++) {
      if(arr[index] != '') {
        numberMatches = arr[index].toLowerCase().match(new RegExp(`[${stringRandom}]`, 'g'))!;
        if (!numberMatches) {
          if (!new RegExp(arr[0]).test(arr[1]) && new RegExp(arr[1]).test(arr[3])) {
            return arr [0];
          }
          return arr[index];
        }
        if (numberMatches.length < min) {
          min = numberMatches.length;
          position = index;
        }
      }
    }
    return arr[position];
}
  