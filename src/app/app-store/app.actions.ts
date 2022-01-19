import { Action } from "@ngrx/store";
import { City } from "../models/city.interface";

export enum CitiesActionTypes {
    ADD_CITY = '[CITY] Add City',
    DELETE_CITY = '[CITY] Delete City',
    ADD_FAVOURITE_CITY = '[CITY] Add Favourite City'
}

export class AddCityAction implements Action {
    readonly type = CitiesActionTypes.ADD_CITY;
    constructor(public payload: City) {}
}

export class DeleteCityAction implements Action {
    readonly type = CitiesActionTypes.DELETE_CITY;
    constructor(public payload: number) {}
}

export class AddFavoriteCityAction implements Action {
    readonly type = CitiesActionTypes.ADD_FAVOURITE_CITY;
    constructor(public payload: City) {}
}

export type CityAction = AddCityAction | DeleteCityAction | AddFavoriteCityAction;