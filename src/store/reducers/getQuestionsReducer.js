import {questions} from "../initialStore/initialStore";
import * as actionTypes from "../actionTypes/actionTypes";

export const getQuestionsReducer = (state=questions,action) => {
    switch(action.type){
        case actionTypes.GET_QUESTIONS:
            console.log(state);
            return state;
        default:
            return state;
    }
}
