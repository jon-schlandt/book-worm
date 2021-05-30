import React, { Component } from 'react'
import { getLists, getTypeOf } from '../../util/api-calls'

// import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import './App.css';

type Props = {}
type State = {
  lists: {
    displayName: string,
    queryName: string
  }[] | [] 
}

class App extends React.Component<Props, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      lists: [],
    }
  }

  componentDidMount() {
    getLists()
    .then(data => {
      this.setState({ lists: data })
    })
    

// This is only here as a test
//     getTypeOf( "hardcover-fiction" )
//     .then(data => console.log(data))
  }

  render() {
    // console.log("RENDER STATE", this.state.lists)
    return (
      <main className="App">
        <Navbar />
        <ul>

        </ul>
      </main>
    )
  }
}

export default App;
