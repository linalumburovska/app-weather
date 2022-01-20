import { Forecast } from "./forecast.interface";

export interface DayTime {
    day: string;
    time: number;
    forecast: Forecast;
}