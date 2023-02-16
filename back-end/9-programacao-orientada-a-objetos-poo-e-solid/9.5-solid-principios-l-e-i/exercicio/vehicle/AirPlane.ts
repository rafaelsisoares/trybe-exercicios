import { IAeroVehicle } from "./interfaces";

export default class AirPlane implements IAeroVehicle {
    fly(): void {
        console.log('Flying a airplane');
    }
}