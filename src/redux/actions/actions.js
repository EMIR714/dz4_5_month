import { types } from "../types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    };
}

export function asyncFunctionAction() {
    return function (dispatch) {
        setTimeout(() => {
            alert("Hello");
        }, 2000);
    };
}

function getUsersAction(users) {
    return {
        type: types.GET_USERS,
        payload: users
    };
}

function getUserDetailAction(userInfo) {
    return {
        type: types.GET_USER_DETAIL,
        payload: userInfo
    };
}

export function fetchUsersAction() {
    return async function (dispatch) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(getUsersAction(data));
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
}

export function fetchUserOneInfo(id) {
    return async function (dispatch) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await response.json();
            dispatch(getUserDetailAction(data));
            return data;
        } catch (error) {
            console.error("Error fetching user information:", error);
        }
    };
}
