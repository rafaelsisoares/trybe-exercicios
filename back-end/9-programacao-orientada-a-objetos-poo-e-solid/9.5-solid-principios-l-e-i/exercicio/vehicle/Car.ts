import { ITerrainVehicle } from "./interfaces";

export default class Car implements ITerrainVehicle {
    drive(): void {
        console.log('Driving a car');
    }
}