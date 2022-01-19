import { City } from "../models/city.interface";
import { CitiesActionTypes, CityAction } from "./app.actions";

const initialState: City[] = [

];

export function CityReducer(state: City[] = initialState, action: CityAction) {
    switch(action.type) {
        case CitiesActionTypes.ADD_CITY:
            return [...state,action.payload];
        default: return state;
    }
}