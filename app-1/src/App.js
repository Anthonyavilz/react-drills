import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userText: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({userText: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange}/>
        <h1>{this.state.userText}</h1>
      </div>
    );
  }
}

export default App;
