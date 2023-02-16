// ./CepService.ts
import IFooCepAPI from './interfaces/IFooCepAPI';

class CepService {
  private readonly cepApi: IFooCepAPI;

  constructor(fooCepAPI: IFooCepAPI) {
    this.cepApi = fooCepAPI;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;