import React, { Component } from 'react';

//function App() {
//  return (
//    <div>Hello, world!</div>
//  );
//}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked")}} />
      </React.Fragment>
    )
  }
}

//class App extends Component {
//  render() {
//    return React.createElement(
//      "div",
//      null,
//      "Hello, world!!!"
//    );
//  }
//}

export default App;
