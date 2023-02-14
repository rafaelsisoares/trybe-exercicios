import Quadra from "./Quadra";

export default class Clube {
    private _quadras: Quadra[] = [];

    public adicionarQuadra(quadra: Quadra) {
        this._quadras.push(quadra);
    }

    buscarQuadra<T extends Quadra>(index: number): T {
        return this._quadras[index] as T;
    }
}