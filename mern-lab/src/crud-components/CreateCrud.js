import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translationData: "",
      audiosourceData: ""
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      translationData: event.target.value,
      audiosourceData: event.target.value
    });
  }

  handleSubmit(e) {
    alert("New Translation Has Been Submitted!" +
    this.state.translationData +
    this.state.audiosourceData) 
    e.preventDefault();
  }

  fetchData() {
    fetch("https://mern-translate.herokuapp.com/create")
      .then(response => response.json())
    }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <h1>This is the Create Crud Method</h1>
          <input
            type="text"
            translationData={this.state.translationData}
            placeholder="translation"
          ></input>
          <input
            type="text"
            audiosourceData={this.state.audiosourceData}
            placeholder="audiosoure"
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Create;
