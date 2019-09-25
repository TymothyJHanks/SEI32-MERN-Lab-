import React, { Component } from "react";

class Delete extends Component {
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
    alert("Deleting Pew Pew!" +
    this.state.translationData +
    this.state.audiosourceData) 
    e.preventDefault();
  }

  fetchData() {
    fetch("https://mern-translate.herokuapp.com/delete/:text")
      .then(response => response.json())
    }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <h1>This is the Delete Crud Method</h1>
          <input
            type="text"
            value={this.state.translationData}
            onChange={this.handleChange}
            placeholder="translation"
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Delete;
