//Importing Major Dependencies 
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

//Importing Other Components
import Search from "./Search"
import Header from "./Header"





class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Search></Search>
      </div>
    );
  }
}

export default App;


//Your going to create a component to add into the data 