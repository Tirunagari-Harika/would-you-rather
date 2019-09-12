import React, { Component } from "react";
import { QuestionSummaryWrapper } from "./QuestionsSummaryStyles";

class QuestionsSummary extends Component{
    render(){
        return (<QuestionSummaryWrapper>
            <div className="question-header">Author</div>
            <div className="content">
                <div className="img-wrapper">
                    <img src="" alt="Author Image" />
                </div>
                <div className="content-wrapper">
                    <div className="heading">Would you rather</div>
                    <div className="options">Options</div>
                    <button className="viewpollbtn">View Poll</button>
                </div>
            </div>
        </QuestionSummaryWrapper>)
    }
}

export default QuestionsSummary;