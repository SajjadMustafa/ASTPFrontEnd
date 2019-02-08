import {DEPARTMENT} from "../actions";
import {UNIT} from "../actions";
import {STOCKENTRY} from "../actions";
import {EMPLOYEE} from "../actions";
import {ISSUANCERECORD} from "../actions";
import {ITEM} from "../actions";
import {USER} from "../actions";

export const initialState = {
    dept: [],
    unit: [],
    stock_entry: [],
    empl: [],
    ir: [],
    item: [],
    user: [],

};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPARTMENT:
            return {...state, dept: action.dept};
        case UNIT:
            return {...state, unit: action.unit};
        case STOCKENTRY:
            return {...state, stock_entry: action.stock_entry};
        case EMPLOYEE:
            return {...state, empl: action.empl};
        case ISSUANCERECORD:
            return {...state, ir: action.issuance_record};
        case ITEM:
            return {...state, item: action.item};
        case USER:
            return {...state, user: action.user};
        default:
            return state;
    }
};

