import {questions} from "../initialStore/initialStore";
import * as actionTypes from "../actionTypes/actionTypes";
import { Arr } from "./utility";

const checkVotes = (votes,question,cid) => {
    let answeredArr = [];
    let unansweredArr = [];

    if(!votes) return { 
        answeredquestions:answeredArr,
        unansweredquestions:unansweredArr
    }

    if(votes.length == 0){
        unansweredArr.push(question);
    }else{
        if(votes.indexOf(cid) != -1){
            answeredArr.push(question);
        }else{
            unansweredArr.push(question);
        }
    }

    return {
        answeredquestions:answeredArr,
        unansweredquestions:unansweredArr
    }

    


}

const filterquestions = (questions,cId) => {
    let answeredArr = [];
    let unansweredArr = [];

    for(let i=0; i<questions.length; i++){
        let obj = checkVotes()
    }
    return {
        answeredquestions:answeredArr,
        unansweredquestions:unansweredArr
    }
}

export const getQuestionsReducer = (state=questions,action) => {
    switch(action.type){
        case actionTypes.GET_QUESTIONS:
            let arr = Arr(action.payload.questions);
            arr = arr.sort((a,b) => b.timestamp - a.timestamp);
            let newState = filterquestions(arr,action.payload.currentUserId)
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
