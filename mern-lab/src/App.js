//Importing Major Dependencies 
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

//Importing Other Components
import Search from "./Search"
import Header from "./Header"
import Homepage from "./Homepage"


const apiURL = "place Url here"



class App extends Component {
  constructor(){
    super()

    this.state = {

    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchSubmit(e) {
    axios
      .get(`${apiURL}/api/mern-lab`)
      .then(response => {
        "this is working"
      })
      .catch(err => {
        console.log(err);
      });

      this.setState({})

  }
//put in setState and routes and links



  render(){
    return (
      <div className="App">
        <Header></Header>
        
        <Link to="/">Homepage</Link>
        <Route path="/" exact component={Homepage}></Route>

        <Link to="/searchComponent">Search the data</Link>
        <Route path="/searchComponent" exact component={Search}></Route>
      </div>
    );
  }
}

export default App;


//Your going to create a component to add into the data 