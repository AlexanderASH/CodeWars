
export function dirReduc(values: string[]): string[] {
    const coordinates: any = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "WEST": "EAST",
        "EAST": "WEST"
    };
    let marked: number[] = [];
    let reverseCoordinate: string;
    let reverseCoordinatePosition: number | undefined;
    let results: string[] = [];

    for (let i = 0; i < values.length; i++) {
        if(marked.includes(i)) {
            continue;
        }
        
        reverseCoordinate = coordinates[values[i]];
        reverseCoordinatePosition = values.findIndex((element, index) => element == reverseCoordinate && !marked.includes(index));
        
        if(reverseCoordinatePosition == -1) {
            results.push(values[i]);
        } else {
            marked.push(reverseCoordinatePosition);
        }
        
        marked.push(i);
    }

    return results;
}