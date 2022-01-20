import { City } from "../models/city.interface";
import { CitiesActionTypes, CityAction } from "./app.actions";

const initialState: City[] = [
];

export function CityReducer(state: City[] = initialState, action: CityAction) {
    switch(action.type) {
        case CitiesActionTypes.ADD_CITY:
            return [...state,action.payload];
        case CitiesActionTypes.DELETE_CITY:
            return state.filter(item => item.id !== action.payload);
        default: return state;
    }
}

export function FavouritesReducer(state: City[] = initialState, action: CityAction) {
    switch(action.type) {
        case CitiesActionTypes.ADD_FAVOURITE_CITY:
            return [...state,action.payload];
        default: return state;
    }
}

export function DayTimeReducer(state: City[] = initialState, action: CityAction) {
    switch(action.type) {
        case CitiesActionTypes.ADD_DAY_TIME_LIST:
            return [...state,action.payload];
        default: return state;
    }
}