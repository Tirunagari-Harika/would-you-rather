import * as actionTypes from "../actionTypes/actionTypes";
import { users, currentUser } from "../initialStore/initialStore";

const usersArr = (users) => {
    let usrArr = [];
    for(let i in users){
        usrArr.push(users[i]);
    }
    return usrArr;
}

const getCurrentUser = ({users,id}) =>{
    return users[id];
}

export const getUsersReducer = (state = users,action) => {
    if(action.type === actionTypes.ALL_USERS){
       // console.log("getUsers Reducer ",action);
      //  const allUsers = usersArr(action.payload);
       // console.log("all Users ",allUsers);
        return {...state, users: usersArr(action.payload)};
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