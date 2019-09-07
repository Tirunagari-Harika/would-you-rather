import * as actionTypes from "../actionTypes/actionTypes";
import * as api from "../../_DATA";


export const getUserAction = () => {
    return (dispatch) => {
        return api._getUsers().then((data) => {
           // console.log("Data got ", data);
            dispatch({type:actionTypes.ALL_USERS, payload:data})
        })
    }
}

export const getCurrentUser = (id) => {
    return (dispatch) => {
        return api._getUsers().then((data) => {          
            dispatch({
                type:actionTypes.LOGIN_CURRENT_USER,
                payload:{
                    users:data,
                    id:id
                }
             })
        })
    }
}

export const logoutCurrentUser = () => {
    return { type:actionTypes.LOGOUT_CURRENT_USER }
}



