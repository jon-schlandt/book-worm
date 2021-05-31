import React from 'react'
import { getLists } from '../../util/api-calls'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import Bookshelf from '../Bookshelf/Bookshelf'
import './App.css';
import { Switch, Route } from 'react-router-dom'


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
      .catch(error => this.setState({ error }))
  }

// This is only here as a test
//     getTypeOf( "hardcover-fiction" )
//     .then(data => console.log(data))

  render() {
    return (
      <main className="App">
        <Navbar />
        {this.state.error && <h2>{this.state.error}</h2>}
        <Switch>
        
          <Route
            exact path='/'
            render={ () => {
              return(
                !this.state.list.length
                  ? !this.state.error && <h2>Loading...</h2>
                  : <List list={this.state.list} />
              )
            }}
          />

          <Route
            exact path='/:queryName'
            render={ ({ match }) => {
              const { queryName } = match.params
              return (
                <Bookshelf queryID={queryName}/>
              )
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App;
