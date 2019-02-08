import {department} from "../actions";
import {unit} from "../actions";
import {stockentry} from "../actions";
import {employee} from "../actions";
import {issuancerecord} from "../actions";
import {user} from "../actions";
import {item} from "../actions";

export const fetchDepartmentFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/dept/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(department(jsonData)));
};

export const fetchUnitFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/unit/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(unit(jsonData)));
}

export const fetchStocEntryFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/stockentry/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(stockentry(jsonData)));
}

export const fetchEmployeeFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/all/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(employee(jsonData)));
}

export const fetchIssuanceRecordFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/ir/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(issuancerecord(jsonData)));
}
export const fetchItemFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/item/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(item(jsonData)));
}
export const fetchUserFromApi = (dispatch) => {
    fetch('http://127.0.0.1:8000/astp/user/?format=json')
        .then(response => response.json())
        .then(jsonData => dispatch(user(jsonData)));
}

