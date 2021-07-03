
export function tour(friends: string[], fTowns: any[], distTable: any[]): number { 
    let map: Map<string, string> = new Map(fTowns);
    let totalDistance: number = distTable[1];
    let mapDistance: any = {};
    let friend: string = '';
    let lastFriend: string = '';
    
    for (let i = 0; i < distTable.length - 1; i = i + 2) {
        mapDistance[distTable[i]] = distTable[i + 1];
    }
    
    for (let index = 1; index < friends.length; index++) {
        if (!map.get(friends[index])) {
            continue;
        }

        friend = map.get(friends[index])!;
        lastFriend = map.get(friends[index - 1])!;

        let result: number = Math.sqrt(
            Math.pow(mapDistance[friend], 2) - 
            Math.pow(mapDistance[lastFriend], 2)
        );
        totalDistance += result;
    }
    totalDistance += mapDistance[friend];

    return Math.floor(totalDistance);
}