import IPlant from "../interfaces/Iplant";
import fs from 'fs/promises';
import IOpsInfo from "../interfaces/IOpsInfo";

 class InitPlant {
  protected initPlant(plant: IPlant) {
    const { id, breed, needsSun, origin, specialCare, size } = plant;

    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    return newPlant;
  }
}

export class CreatePlant implements IPlant {
  id: string = '';
  breed: string = '';
  needsSun: Boolean = true;
  origin: string = 'Brazil';
  size: number = 10;
  specialCare?: { waterFrequency: number; } | undefined;

  async savePlant(plant: IPlant) {
    const plantsRaw = await fs.readFile('plants.json', { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = this.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile('opsInfo.json', { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile('opsInfo.json', JSON.stringify({ createdPlants }));

    await fs.writeFile('plants.json', JSON.stringify(plants));
    return newPlant;
  }


}
