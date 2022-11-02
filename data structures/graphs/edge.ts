import { Vertext } from "./vertex";

export class Edge<T> {
    private _weight?: number;
    private _source: Vertext<T>;
    private _destiny: Vertext<T>;

    constructor(source: Vertext<T>, destiny: Vertext<T>, weight?: number) {
        this._weight = weight;
        this._source = source;
        this._destiny = destiny;
    }

    get weight(): number | undefined {
        return this._weight;
    }

    get source(): Vertext<T> {
        return this._source;
    }

    get destiny(): Vertext<T> {
        return this._destiny;
    }
}