import React, { Component } from "react";
import axios from "axios";


class Search extends Component {
    constructor(props){
        super(props)

        this.state ={
            ApiData: this.props.ApiCall
        }
        //binding goes here example - this.handleSearchSubmit = this.handleSearchSubmit.bind(this)

    }
    //manipulating state functions goes here

    //create a state function to map through the JSON data from the URL and print things
    // MappingShit()

    render(){
        return(
            <div>
                <button onClick={this.handleSearchSubmit}>Search for all the data!</button>
                <p>{"the data goes here"}</p>
            </div>
        )
    }
}

export default Search;