import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/userActions";

class UserProfile extends Component{
    getUserData = () => {
        let currentUser = { name:"",avatarURL:"" };
        let toggleClass = "hideUser";
        if(this.props.currentUser && this.props.currentUser.name){
            currentUser = this.props.currentUser;
            toggleClass = "showUser";
        }
        return (<li className={"userprofile " + toggleClass}>
            <div>Hello, {currentUser.name}</div>
            <div><img src={currentUser.avatarURL} 
                alt="not-found" 
                className="avtarImg" /></div>
            <div onClick={this.logout}>
                Logout
            </div>
        </li>);
    }

    logout = () => {
        // Redirecting to Login
        this.props.logoutUser();
       // this.props.history.replace("/login");
    }

    render(){
       // console.log("UserProfile Render ====== ",this.props);
        return (<ul className="links">                    
            <li><NavLink to="/home" activeClassName="activeLink">Home</NavLink></li>
            <li><NavLink to="/add" activeClassName="activeLink">New Question</NavLink></li>
            <li><NavLink to="/leaderboard" activeClassName="activeLink">Leader Board</NavLink></li> 
            {this.getUserData()}
        </ul>)
    }


}

const mapStateToProps = (state) => {
   // console.log("MAP STTE ",state);
    return {
        currentUser: state.currentUser.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(actionCreators.logoutCurrentUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);