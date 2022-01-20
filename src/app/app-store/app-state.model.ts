import { City } from "../models/city.interface";
import { DayTime } from "../models/day-time.interface";

export interface AppState {
    readonly cities: City[];
    readonly favourites: City[];
    readonly dayTimeList: DayTime[];
}