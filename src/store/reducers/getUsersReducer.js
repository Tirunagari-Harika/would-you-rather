import * as actionTypes from "../actionTypes/actionTypes";
import { users, currentUser } from "../initialStore/initialStore";
import { Arr } from "./utility";


const getCurrentUser = ({users,id}) =>{
    return users[id];
}

export const getUsersReducer = (state = users,action) => {
    if(action.type === actionTypes.ALL_USERS){
       // console.log("getUsers Reducer ",action);
      //  const allUsers = usersArr(action.payload);
       // console.log("all Users ",allUsers);
        return {...state, users: Arr(action.payload)};
    }

    return state;
}



export const currentUserReducer = (state=currentUser, action) => {
    switch(action.type){
        case actionTypes.LOGIN_CURRENT_USER :
            return {...state, currentUser: getCurrentUser(action.payload)};
        case actionTypes.LOGOUT_CURRENT_USER:
            return {...state, currentUser: {}};
        default:
            return state;
    }

}
