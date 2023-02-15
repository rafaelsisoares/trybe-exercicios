import { BadRequestException } from '../../exceptions';
import { INewPlant } from '../../interfaces/IPlant';

export default class PlantValidator {
  private static validateBreed(breed: string): void {
    if (typeof breed !== 'string') {
      throw new BadRequestException('Attribute "breed" must be string.');
    }
  }

  private static validateNeedsSum(needsSun: boolean): void {
    if (typeof needsSun !== 'boolean') {
      throw new BadRequestException('Attribute "needsSun" must be boolean.');
    }
  }

  private static validateOrigin(origin: string): void {
    if (typeof origin !== 'string') {
      throw new BadRequestException('Attribute "origin" must be string.');
    }
  }

  private static validateSize(size: number): void {
    if (typeof size !== 'number') {
      throw new BadRequestException('Attribute "size" must be number.');
    }
  }

  public static validateAttributes(plant: INewPlant) {
    PlantValidator.validateBreed(plant.breed);
    PlantValidator.validateNeedsSum(plant.needsSun);
    PlantValidator.validateOrigin(plant.origin);
    PlantValidator.validateSize(plant.size);
  }
}
