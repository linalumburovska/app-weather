import { Action } from "@ngrx/store";
import { City } from "../models/city.interface";

export enum CitiesActionTypes {
    ADD_CITY = '[CITY] Add City'
}

export class AddCityAction implements Action {
    readonly type = CitiesActionTypes.ADD_CITY;
    constructor(public payload: City) {}
}

export type CityAction = AddCityAction;