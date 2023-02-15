import { IModel } from '../interfaces/IModel';
import { IOpsInfo } from '../interfaces/IOpsInfo';
import { IPlant } from '../interfaces/IPlant';
import { File, HandleFile } from './HandleFile';

export default class PlantModel implements IModel<IPlant> {
  private plantInfo: File = 'plantsFile';

  private opsInfo: File = 'opsFile';

  private plantHandleFile = new HandleFile();

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const data: IOpsInfo = await this.plantHandleFile.read(this.opsInfo);
    data.createdPlants += incrementAmount;
    await this.plantHandleFile.write<IOpsInfo>(this.opsInfo, data);
    return data.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = this.plantHandleFile.read<IPlant[]>(this.plantInfo);
    return plants;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();
    const targetPlant = plants.find((plant) => plant.id === +id);
    if (!targetPlant) return null;

    return targetPlant;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const newId = await this.updateOpsInfo();
    const plants = await this.getAll();
    const newPlant = { id: newId, ...plant };
    plants.push(newPlant);
    await this.plantHandleFile.write(this.plantInfo, plants);
    return newPlant;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    const plants = await this.getAll();

    const updatedPlants = plants.map((targetPlant) => {
      if (plant.id === targetPlant.id) return { ...plant };
      return targetPlant;
    });

    await this.plantHandleFile.write(this.plantInfo, updatedPlants);
    return plant;
  }

  async removeById(id: string): Promise<boolean> {
    const plants = await this.getAll();

    const index = plants.findIndex((plant) => plant.id === +id);
    if (index < 0) return false;

    const newPlants = plants.splice(index, 1);

    await this.plantHandleFile.write(this.plantInfo, newPlants);
    return true;
  }
}
