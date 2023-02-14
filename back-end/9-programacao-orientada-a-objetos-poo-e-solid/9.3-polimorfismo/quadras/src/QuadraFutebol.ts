import crypto from 'crypto';

import Quadra from "./Quadra";
import IFutebol from "./interfaces/IFutebol";
import IAgenda from "./interfaces/IAgenda";
import normas from './normas/normasDeUso';

export default class QuadraFutebol extends Quadra {
    public futebolData: IFutebol = normas.futebol;
    
    reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
        const protocolo = this.gerarProtocolo(data);
        return {
            protocolo,
            data,
            regras: this.futebolData as unknown as IFutebol,
        }
    }

    gerarProtocolo(data: Date): string {
        return `${data.getTime()}-${crypto.randomUUID()}`;
    }
}