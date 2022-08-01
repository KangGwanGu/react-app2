import './App.css';
import React, { Component } from 'react';


class NavCom extends Component {
  render() {
    return (
      <ul>
          <li><a href="1.html">1.html</a></li>
          <li><a href="2.html">2.css</a></li>
          <li><a href="3.html">3.javascrip</a></li>
      </ul>
    )
  }
}

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>Web</h1>
        world wide web!

      </header>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!!</h1>
        <Subject />
      </div>
    )
  }
}

export default App;