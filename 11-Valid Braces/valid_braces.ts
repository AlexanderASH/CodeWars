
export function validBraces(braces: string): boolean {
    const hash: any = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    const bracesArray: string[] = braces.split('');
    
    let bracesStack: string[] = [bracesArray[0]];
    let lastBrace: string;

    for (let index = 1; index < bracesArray.length; index++) {
        lastBrace = bracesStack[bracesStack.length - 1];

        if (hash[bracesArray[index]]) {
            bracesStack.push(bracesArray[index]);
        } else {
            if (hash[lastBrace] === bracesArray[index]) {
                bracesStack.pop();
            } else {
                return false
            }
        }
    }

    return bracesStack.length === 0;
}