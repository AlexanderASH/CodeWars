import { Vertext } from "./vertex";

export class Graph<T> {
    private _isWeighted: boolean;
    private _isDirected: boolean;
    private _vertices: Vertext<T>[];

    constructor(isWeighted: boolean, isDirected: boolean) {
        this._isDirected = isDirected;
        this._isWeighted = isWeighted;
        this._vertices = [];
    }

    addVertext(data: T): Vertext<T> {
        const vertext = new Vertext<T>(data);
        this._vertices.push(vertext);
        return vertext;
    }

    addEdge(source: Vertext<T>, destiny: Vertext<T>, weight?: number) {
        source.addEdge(destiny, weight);
        if (!this._isDirected) {
            destiny.addEdge(source);
        }
    }

    printGraph(): string {
        let graph = "";
        for (let i = 0; i < this._vertices.length; i++) {
            graph += `${this._vertices[i].getData} -> ${this._vertices[i].getDestinies} \n`;
        }
        return graph;
    }
}