import { Vertext } from "./vertex";

export class GraphTraverser<T> {
    depthFirstSearch(vertext: Vertext<T>, visited: Vertext<T>[]) {
        let currentVisited = visited;
        console.log(vertext.getData);

        if (vertext.getEdges.length === 0) return;
        
        vertext.getEdges.forEach((edge) => {
            if (!currentVisited.includes(edge.destiny)) {
                currentVisited.push(edge.destiny);
                this.depthFirstSearch(edge.destiny, currentVisited);
            }
        });

        return;
    }

    breadthFirstSearch(vertext: Vertext<T>, visited: Vertext<T>[]) {
        let visitQueue: Vertext<T>[] = [];
        visitQueue.push(vertext);
        while (visitQueue.length !== 0) {
            let current: Vertext<T> = visitQueue.shift()!;
            console.log(current.getData);

            for (let i = 0; i < current.getEdges.length; i++) {
                let neightbor: Vertext<T> = current.getEdges[i].destiny;
                if (!visited.includes(neightbor)) {
                    visited.push(neightbor);
                    visitQueue.push(neightbor);
                }
            }
        }
        
    }
}