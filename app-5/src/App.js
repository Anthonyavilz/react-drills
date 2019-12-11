import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg"} />
      </div>
    );
  }
}

export default App;
