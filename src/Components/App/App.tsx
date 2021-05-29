import React, { Component } from 'react'

import Navbar from '../Navbar/Navbar'
import './App.css';

class App extends Component {
  constructor(props: {}) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <main className="App">
        <Navbar />
      </main>
    )
  }
}

export default App;
