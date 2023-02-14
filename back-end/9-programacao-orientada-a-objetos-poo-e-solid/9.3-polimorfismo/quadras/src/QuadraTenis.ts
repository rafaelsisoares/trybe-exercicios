import ITenis from "./interfaces/ITenis";
import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";
import IAgenda from "./interfaces/IAgenda";

export default class QuadraTenis extends Quadra {
    public regrasTenis: ITenis = normas.tenis;

    public reservar<ITenis>(data: Date): IAgenda<ITenis> {
        const protocolo = this.gerarProtocolo(data);
        return {
            protocolo,
            data,
            regras: this.regrasTenis as unknown as ITenis,
        }
    }

    gerarProtocolo(data: Date): string {
        return `${data.getTime()}-${crypto.randomUUID()}`;
    }
}