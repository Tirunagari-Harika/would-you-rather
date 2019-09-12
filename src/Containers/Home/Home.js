import React, { Component, Fragment } from "react";
import * as questionActions from "../../store/actionCreators/questionActions";
/* import * as userActions from "../../store/actionCreators/userActions"; */
import { connect } from "react-redux";

class Home extends Component{

    state = {
        showUnanswered: true
    }
    
    shouldUpdateQuestions(prevProps){
        if((!prevProps.currentUser) ||
        // first attempt using the app first time
        (this.props.currentUser &&
            prevProps.currentUser &&  
            prevProps.currentUser.id !== this.props.currentUser.id) ||
            // checking user from second time
        (this.props.questions && this.props.questions.length &&
            this.props.questions.length !== prevProps.questions.length)){
            // change in questions
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps){
        // user exists and there is a change in no. of questions
        if(this.shouldUpdateQuestions(prevProps)){
            this.props.getQuestions(this.props.currentUser.id);
        }        
    }
    
    render(){
        console.log("Home ",this.props);
        return(<Fragment>
            <div>
                <div>UnAnswered Questions</div>
                <div>Answered Questions</div>
                <div>Questions</div>
            </div>
        </Fragment>)
    }
}

const mapStateToProps = (state) => {
    console.log("Home ",state);
    return {
       currentUser: state.currentUser.currentUser,
       questions: state.questions.questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: (currentUserId) => dispatch(questionActions.getquestionsActions(currentUserId))
    }
}

//export default Home;

export default connect(mapStateToProps,mapDispatchToProps)(Home);
