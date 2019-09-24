import React, { Component } from "react";
import axios from "axios";

const apiURL = "place Url here"

class Search extends Component {
    constructor(props){
        super(props)

        this.state ={
           

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
  }
    render(){
        return(
            <div>
                <button onClick={this.handleSearchSubmit}>Search for all the data!</button>
                
            </div>
        )
    }
}

export default Search;