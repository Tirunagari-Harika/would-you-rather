import React, { Component } from "react";
import * as questionActions from "../../store/actionCreators/questionActions";
import * as userActions from "../../store/actionCreators/userActions";
import { connect } from "react-redux";

class Home extends Component{
    componentDidMount(){

    }
    
    render(){

        return(<div>Home</div>)
    }
}

const mapStateToProps = (state) => {
    console.log("Home ",state);
    return {
       
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);