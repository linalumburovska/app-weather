import { Action } from "@ngrx/store";
import { City } from "../models/city.interface";

export enum CitiesActionTypes {
    ADD_CITY = '[CITY] Add City',
    DELETE_CITY = '[CITY] Delete City'
}

export class AddCityAction implements Action {
    readonly type = CitiesActionTypes.ADD_CITY;
    constructor(public payload: City) {}
}

export class DeleteCityAction implements Action {
    readonly type = CitiesActionTypes.DELETE_CITY;
    constructor(public payload: number) {}
}

export type CityAction = AddCityAction | DeleteCityAction;