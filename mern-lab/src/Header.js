import React, {Component} from "react"
import "./Header.css";

class Header extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="headerWrapper">
                <header>This is Our Mern Lab</header>
            </div>
        )
    }
}

export default Header