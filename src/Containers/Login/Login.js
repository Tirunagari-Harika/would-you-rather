import React, { Component } from "react";
import logo from "../../logo.svg";
import { LoginStyles } from "./LoginStyles";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/userActions";


class Login extends Component{
    state = { allUsers: [], 
        currentSelectedUserId:"" }

    componentDidMount(){
      this.props.getAllUsers();          
    }

    handleChangeUserHandler = (ev) => {
        //console.log(ev.target.value);
        this.setState({currentSelectedUserId: ev.target.value});
    }

    onSignIN = () => {
       // console.log("SUbmit",this.state.currentSelectedUser);
       // here all success logins
       this.props.getCurrentUser(this.state.currentSelectedUserId);
       this.props.history.replace("/home");
    }
   

    render(){
         console.log("Render _________________", this.props);
        return (<LoginStyles>
            <div className="title">
                <div className="titleheader">
                    Welcome to the Would You Rather App !
                </div>
                <div className="secondHeader">
                    Please Sign in to continue
                </div>
            </div>
            <div>
                <img src={logo} alt="not loaded" className="logo" />
              
                <select className="selectUsersDropDown" 
                    value={this.state.currentSelectedUserId}
                    onChange={this.handleChangeUserHandler}>              
                    <option value=""></option>
                    { this.props.users && this.props.users.length && this.props.users.map((user) => {
                        return (<option value={user.id} key={user.id}>{user.name}</option>)
                    })}  
                   
                </select>
                <button className="signInBtn" onClick={this.onSignIN}>Sign In</button>
            </div>
        </LoginStyles>)
    }
}

const mapStateToProps = state => {
   // console.log("Map ",state);
    return {
        users: state.users.users        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(actionCreators.getUserAction()),
        getCurrentUser: (id) => dispatch(actionCreators.getCurrentUser(id))
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);