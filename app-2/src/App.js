import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: ['Honda Civic', 'Scion tC', 'Toyota Corolla']
    }
  }


  render() {
      let carsToShow = this.state.cars.map((element, index) => {
        return <h2 key={index}>{element}</h2>
      });
      return <div className="App">{carsToShow}</div>
  }
}

export default App;
