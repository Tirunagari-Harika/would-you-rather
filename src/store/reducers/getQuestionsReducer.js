import {questions} from "../initialStore/initialStore";
import * as actionTypes from "../actionTypes/actionTypes";
import { getArray, checkSingleEleInArr } from "./utility";

// checking the vote in optionOne and OptionTwo
const checkUserAnsweredQuestion = (question,currentUserId) => {
    if((!question.optionOne.votes && !question.optionTwo.votes) ||
        (!question.optionOne.votes.length && !question.optionTwo.votes.length)){
        return false;
    }
    // votes of optionOne
    if(question.optionOne.votes && 
        checkSingleEleInArr(question.optionOne.votes,currentUserId)){
        return true;
    }
    // votes of optionTwo
    if(question.optionTwo.votes && 
        checkSingleEleInArr(question.optionTwo.votes,currentUserId)){
        return true;
    }   

    return false;
}

// categorizing answered and unanswered questions
const categorizeQuestions = (questions,currentUserId) => {
    let answeredArr = [];
    let unansweredArr = [];

    for(let i=0; i<questions.length; i++){
        if(checkUserAnsweredQuestion(questions[i],currentUserId)){
            answeredArr.push(questions[i]);
        }else{
            unansweredArr.push(questions[i]);
        }
    }
    return {
        answeredquestions:answeredArr,
        unansweredquestions:unansweredArr
    }
}

export const getQuestionsReducer = (state=questions,action) => {
    switch(action.type){
        case actionTypes.GET_QUESTIONS:
            let arr = getArray(action.payload.questions);
            arr = arr.sort((a,b) => b.timestamp - a.timestamp);
            let newState = categorizeQuestions(arr,action.payload.currentUserId)
            return {...state, questions:newState};
        default:
            return state;
    }
}


/* if(questions[i].optionOne.votes && questions[i].optionOne.votes.length){
    let votesArr = questions[i].optionOne.votes;
    if(votesArr.indexOf(cId) == -1){
        unansweredArr.push(questions[i]);
    }else{
        answeredArr.push(questions[i]); 
    }
}else if(questions[i].optionOne.votes){
    unansweredArr.push(questions[i]);
} */


/* if(question.optionOne.votes.length){
    let votesOneArr = question.optionOne.votes;
    if(votesOneArr.indexOf(currentUserId) !== -1){
        return true;
    }
}

// votes of OptionTwo
if(question.optionTwo.votes.length){
    let votesTwoArr = question.optionTwo.votes;
    if(votesTwoArr.indexOf(currentUserId) !== -1){
        return true;
    }
}    */
