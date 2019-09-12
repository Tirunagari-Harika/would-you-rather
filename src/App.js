import React from 'react';
/* import logo from './logo.svg'; */
import { BrowserRouter, Route } from "react-router-dom";
import MainContainer from "./Containers/Main/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={MainContainer} />
      </BrowserRouter>      
    </div>
  );
}

export default App;
