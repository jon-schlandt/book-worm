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
  }[] | [],
  error: string
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: [],
      error: ''
    }
  }

  componentDidMount() {
    getLists()
      .then(data => {
        this.setState({ list: data })
      })
      .catch(error => this.setState({ error }, () => console.log(this.state)))
  }
    
// This is only here as a test
//     getTypeOf( "hardcover-fiction" )
//     .then(data => console.log(data))

  render() {
    return (
      <main className="App">
        <Navbar />
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.list.length
          ? !this.state.error && <h2>Loading...</h2>
          : <List list={this.state.list} />
        }
      </main>
    )
  }
}

export default App;
