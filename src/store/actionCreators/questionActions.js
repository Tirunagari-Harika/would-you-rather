import * as actionTypes from "../actionTypes/actionTypes";
import * as api from "../../_DATA";

const questions = (data,currentUserId) => {
    return { type:actionTypes.GET_QUESTIONS,payload:{
        questions: data,
        currentUserId: currentUserId
    } };
}

export const getquestionsActions = (currentUserId) => {
    return (dispatch) => {
        return api._getQuestions().then((data) => {
            dispatch(questions(data,currentUserId));
        })
        .catch((err) => {
            console.log("Error in Questions Action ",err);
        })
    }   
}
