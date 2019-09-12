import React, { Component } from "react";

class NewQuestion extends Component {
    render(){
        console.log("New Question Render ",this.props);
        return (<div>New Question</div>)
    }
}

export default NewQuestion;