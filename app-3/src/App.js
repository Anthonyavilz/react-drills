import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cars: ['Lamborghini Urus', 'Audi Q7', 'Mercedes-Benz GLS', 'Acura RDX', 'Volvo XC60'],
      filterString: ''
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter});
  }

  render() {
    let carsToShow = this.state.cars
    .filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input placeholder="enter search here" onChange={e => this.handleChange(e.target.value)} type='text' />
        {carsToShow}
      </div>
    );
  }
}

export default App;
