export interface ITerrainVehicle {
    drive(): void;
}

export interface IAeroVehicle {
    fly(): void;
}

export interface IFuturisticVehicle extends ITerrainVehicle, IAeroVehicle { };