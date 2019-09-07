import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch  }  from "react-router-dom";

import Login from "../Login/Login";
import Home from "../Home/Home";
import NewQuestion from "../NewQuestion/NewQuestion";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import UserProfile from "../Main/UserProfile";

import { MainWrapperStyles } from "./MainStyles";
import { connect } from "react-redux";

class Main extends Component{     
   
    render(){
      //  console.log("Main Render --- ", this.props);
        return(<MainWrapperStyles>
            <div className="header">React App</div>
            <BrowserRouter>
                <Route path="/"  component={UserProfile}/>            
                {this.props.currentUser && this.props.currentUser.name !== ""?
                    (<Fragment>
                        <Route path="/home" exact component={Home} />
                        <Route path="/add" exact component={NewQuestion} />
                        <Route path="/leaderboard" exact component={LeaderBoard} />
                    </Fragment>)
                 :null}
                
                <Switch>
                    <Route path="/login" exact   component={Login}/>
                    <Route path="/"  exact   component={Login}/>
                </Switch>
                

            </BrowserRouter>
        </MainWrapperStyles>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.currentUser
    }
}



export default connect(mapStateToProps)(Main);

