import { Edge } from "./edge";

export class Vertext<T> {
    private _data: T;
    private _edges: Edge<T>[];

    constructor(data: T) {
        this._data = data;
        this._edges = [];
    }

    addEdge(destiny: Vertext<T>, weight?: number) {
        if (this._existDestiny(destiny)) return;
        const edge = new Edge(this, destiny, weight);
        this._edges.push(edge);
    }

    deleteEdge(vertex: Vertext<T>) {
        const index = this._edges.findIndex((edge) => edge.destiny == vertex);
        this._edges.splice(index, 1);
    }

    _existDestiny(vertext: Vertext<T>): boolean {
        return this._edges.find((edge) => edge.destiny === vertext) ? true : false;
    }
    
    get getData(): T {
        return this._data;
    }

    get getEdges(): Edge<T>[] {
        return this._edges;
    }

    get getDestinies(): T[] {
        return this._edges.map((edge) => edge.destiny._data);
    }
}