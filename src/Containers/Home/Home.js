import React, { Component } from "react";
import * as questionActions from "../../store/actionCreators/questionActions";
import * as userActions from "../../store/actionCreators/userActions";
import { connect } from "react-redux";

class Home extends Component{
    componentDidMount(){

    }
    
    render(){
        console.log("Home ",this.props);
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

export default Home;

//export default connect(mapStateToProps,mapDispatchToProps)(Home);