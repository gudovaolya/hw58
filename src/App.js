import React, { Component } from 'react';
import './App.css';
import MessagesBuilder from "./containers/MessagesBuilder/MessagesBuilder";


class App extends Component {
  render() {
    return (
        <div className="container">
            <MessagesBuilder/>
        </div>

    );
  }
}

export default App;
