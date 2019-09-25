import React, { Component } from "react";
import "./Search.css";


class Search extends Component {
    constructor(props){
        super(props)

        this.state ={
            fetchDataJson: []
        }

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        fetch("https://mern-translate.herokuapp.com/")
        .then(response => response.json())
        .then(parsedJson => {
          this.setState({
            fetchDataJson: parsedJson
          });
        });
    }
 

    render(){
        console.log(this)
        return(
            <div>
            <button className="clickBtn" onClick={ this.fetchData }>Click me for data!</button>
            <div className="searchWrapper">
                {this.state.fetchDataJson.map((dataItem, index) => {
                    return(
                        <section key={index }>
                            <h2>This is item: { index }</h2>
                            <p>{dataItem.id}</p>
                            <p>{dataItem.text}</p>
                            <p>{dataItem.audioSource}</p>
                        </section>
                    );
                })}
            </div>
        </div>
        )
    }
}

export default Search;