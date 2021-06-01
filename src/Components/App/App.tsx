import React from 'react'
import { getLists } from '../../util/api-calls'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import { Bookshelf, Book } from '../Bookshelf/Bookshelf'
import './App.css';
import { Switch, Route } from 'react-router-dom'


type Props = {}

type State = {
  list: {
    displayName: string,
    queryName: string
  }[] | [],
  error: string,
  favorites: Book[] | null
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: [],
      error: '',
      favorites: null
    }
  }

  componentDidMount() {
    getLists()
      .then(data => {
        this.setState({ list: data }, () => console.log(this.state.list))
      })
      .catch(error => this.setState({ error }))
  }

  addToFavorites = (book: Book) => {
    if (!this.state.favorites) {
      this.setState({ favorites: [book]})
    } else {
      this.setState({ favorites: [...this.state.favorites, book]})
    }
  }

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
            exact path='/bookshelf/:queryName'
            render={ ({ match }) => {
              const { queryName } = match.params
              if (queryName !== 'favorites') {
                return (
                  <Bookshelf
                    queryID={queryName}
                    addToFavorites={this.addToFavorites}
                  />
                )
              } else {
                return (
                  <Bookshelf
                    favoriteBooks={this.state.favorites}
                  />
                )
              }
            }}
          />


        </Switch>
      </main>
    )
  }
}

export default App;
