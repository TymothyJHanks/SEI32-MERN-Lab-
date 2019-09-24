import React, { Component } from "react";
import axios from "axios";


class Search extends Component {
    constructor(props){
        super(props)

        this.state ={
            ApiData: this.props.ApiCall
        }
    }


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