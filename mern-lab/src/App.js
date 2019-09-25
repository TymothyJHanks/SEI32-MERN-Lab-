//Importing Major Dependencies
import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";


//Importing Other Components
import Search from "./Search";
import Header from "./Header";
import Homepage from "./Homepage";
import UpdateCrud from "./crud-components/UpdateCrud";
import CreateCrud from "./crud-components/CreateCrud";
import DeleteCrud from "./crud-components/DeleteCrud";


class App extends Component {
  render(){
    return(
      <div className="AppWrapper">
        <Header></Header>

        <nav className="navBar">
          {/* Links */}
          <Link to="/">Homepage</Link>
          <Link to="/searchComponent">Search Component</Link>
          <Link to="/updateCrud">UpdateCrud</Link>
          <Link to="/createCrud">CreateCrud</Link>
          <Link to="/deleteCrud">DeleteCrud</Link>
        </nav>

          {/* Routes */}
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/searchComponent" exact component={Search}></Route>
          <Route path="/updateCrud" exact component={UpdateCrud}></Route>
          <Route path="/createCrud" exact component={CreateCrud}></Route>
          <Route path="/deleteCrud" exact component={DeleteCrud}></Route>
      </div>
    )
  }
}
export default App;




// This is where im starting
// class App extends Component {
//   render(){
//     return(
//       <div className="AppWrapper">
//         <Header></Header>

//         <nav className="navBar">
//           {/* Links */}
//           <Link to="/">Homepage</Link>
//           <Link to="/searchComponent">Search Component</Link>
//         </nav>

//           {/* Routes */}
//           <Route path="/" exact component={Homepage}></Route>
//           <Route path="/searchComponent" exact component={Search}></Route>
//       </div>
//     )
//   }
// }
// export default App;