import React, {Component} from "react"
import "./Homepage.css"

class Homepage extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="homePageWrapper">
                <h1>This is the homepage</h1>
            </div>
        )
    }
}

export default Homepage