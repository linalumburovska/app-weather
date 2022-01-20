import { Action } from "@ngrx/store";
import { City } from "../models/city.interface";
import { DayTime } from "../models/day-time.interface";

export enum CitiesActionTypes {
    ADD_CITY = '[CITY] Add City',
    DELETE_CITY = '[CITY] Delete City',
    ADD_FAVOURITE_CITY = '[CITY] Add Favourite City',
    ADD_DAY_TIME_LIST = '[CITY] Add Day Time List'
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

export class AddDayTimeListAction implements Action {
    readonly type = CitiesActionTypes.ADD_DAY_TIME_LIST;
    constructor(public payload: DayTime[]) {}
}

export type CityAction = AddCityAction | DeleteCityAction | AddFavoriteCityAction | AddDayTimeListAction;