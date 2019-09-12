import React, { Component } from "react";
import * as questionActions from "../../store/actionCreators/questionActions";
/* import * as userActions from "../../store/actionCreators/userActions"; */
import { connect } from "react-redux";

class Home extends Component{
    componentDidMount(){
        this.props.getQuestions(this.props.currentUser.id);
    }
    
    render(){
        console.log("Home ",this.props);
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

<<<<<<< HEAD
export default Home;

//export default connect(mapStateToProps,mapDispatchToProps)(Home);
=======
export default connect(mapStateToProps,mapDispatchToProps)(Home);
>>>>>>> ac2f48ffe47bac1e6f7f83d48f2a5b5ce6647ada
