//Importing Major Dependencies
import React, { Component } from "react";

import "./App.css";
// import axios from "axios";

//Importing Other Components
import Search from "./Search";
import Header from "./Header";
// import Homepage from "./Homepage";

// This is a test to see if when i click the button the data will pop up

// const apiURL = "https://mern-translate.herokuapp.com/";

class App extends Component {

  render(){
    return(
      <div className="App">
        <Header></Header>
        <Search></Search>
      </div>
    )
  }
}
export default App;

//Your going to create a component to add into the data

// render() {
//   return (
//     <>
//       <div className="AppWrapper">
//         <Header></Header>
//         {/* Links to different components */}
//         <nav className="navBar">
//           <Link to="/">Homepage</Link>
//           <Link to="/searchComponent">Search the data</Link>
//         </nav>

//         {/* Routes to different components */}
//         <Route path="/" exact component={Homepage}></Route>
//         <Route path="/searchComponent" exact component={Search}></Route>

//         <div className="dontDisplayThis">
//           <Search ApiCall={this.componentDidMount}></Search>
//         </div>
//       </div>
//     </>
//   );
// }
// }

// handleSearchSubmit(e) {
//   axios
//     .get({ apiURL })
//     .then(response => {
//       this.setState(
//         prevState =>({
//           translation: response.data
//         })
//       )
//     })
//     .catch(err => {
//       console.log(err);
//     })
