import React, { Component } from "react";
import * as questionActions from "../../store/actionCreators/questionActions";
/* import * as userActions from "../../store/actionCreators/userActions"; */
import { connect } from "react-redux";

class Home extends Component{
    componentDidMount(){
        this.props.getQuestions(this.props.currentUser.id);
    }
    
    render(){
        console.log(this.props);
        return(<div>Home</div>)
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);
