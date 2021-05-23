
export function wordFrequency(txt: string, n: number) {
    if(!txt) {
      return [];
    }
  
    let hashmap: any = {};
  
    let words = txt.toLowerCase().split(' ');
  
    for (let i = 0; i < words.length; i++) {
      hashmap[words[i]] = (hashmap[words[i]] || 0) + 1;
    }
  
    let frequency = Object.entries(hashmap).sort((a: any, b: any) => {
      return b[1] - a[1];
    });
  
    return frequency.slice(0, n);
  }