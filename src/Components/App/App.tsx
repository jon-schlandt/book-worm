import React from 'react'
import { getLists } from '../../util/api-calls'

import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import './App.css';

type Props = {}
type State = {
  list: {
    displayName: string,
    queryName: string
  }[] | [] 
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    getLists()
    .then(data => {
      this.setState({ list: data }, () => console.log(data))
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
        {!this.state.list.length 
          ? <h2>Loading...</h2>
          : <List list={this.state.list} />}
      </main>
    )
  }
}

export default App;
