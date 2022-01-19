import { City } from "../models/city.interface";

export interface AppState {
    readonly cities: City[];
}