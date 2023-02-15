import fs from 'fs/promises';
import path from 'path';

class PlantService {
  private readonly plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');

  private readonly opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');

  public async create(plant: INewPlant): Promise<IPlant> {
    const {
      breed,
      needsSun,
      origin,
      size,
    } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant, waterFrequency };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
    return newPlant;
  }
}

export default PlantService;
