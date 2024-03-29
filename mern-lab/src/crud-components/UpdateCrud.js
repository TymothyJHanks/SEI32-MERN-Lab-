import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audiosourceData: ""
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
    //   translationData: event.target.value,
      audiosourceData: event.target.value
    });
  }

  handleSubmit(e) {
    alert("Updating Pew Pew!" +
    this.state.audiosourceData) 
    e.preventDefault();
  }

  fetchData() {
    fetch("https://mern-translate.herokuapp.com/:audioSource")
      .then(response => response.json())
    }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <h1>This is the Update Crud Method</h1>
          <input
            type="text"
            value={this.state.audiosourceData}
            onChange={this.handleChange}
            placeholder="audioSource"
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Update;
        