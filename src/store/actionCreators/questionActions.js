import * as actionTypes from "../actionTypes/actionTypes";
import * as api from "../../_DATA";

const questions = () => {
    return { type:actionTypes.GET_QUESTIONS };
}

export const getquestionsActions = (dispatch) => {
    return api._getQuestions().then((data) => {
        return dispatch(questions());
    })
    .catch((err) => {
        console.log("Error in Questions Action ",err);
    })
}
