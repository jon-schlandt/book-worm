import React from 'react'
import { getLists } from '../../util/api-calls'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import { Bookshelf } from '../Bookshelf/Bookshelf'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { AppState, SingleBook} from '../../util/types'
import Error from '../Error/Error'


class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      list: [],
      error: '',
      favorites: []
    }
  }

  componentDidMount = () => {
    getLists()
      .then(data => {
        this.setState({ list: data })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  addToFavorites = (book: SingleBook) => {
      if (!this.state.favorites) {
        this.setState({ favorites: [book]})
      } else {
        if (!this.state.favorites.find(favoriteBook => favoriteBook.id === book.id)) {
          this.setState({ favorites: [...this.state.favorites, book]})
      }
    }
  }

  render() {
    return (
      <main className="App">
        <Navbar />
        {/* {this.state.error && <h2 className='responseError'>{this.state.error}</h2>} */}
        {this.state.error && <Error message={this.state.error}/>}
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
                const header = this.state.favorites.length ? "Favorites!" : "You have no favorites"
                return (
                  <Bookshelf
                    favoritesHeader={header}
                    favoriteBooks={this.state.favorites}
                  />
                )
              }
            }}
          />

          <Route 
            render={() => <Error message='Sorry, page not found!' />}
          />

        </Switch>
      </main>
    )
  }
}

export default App;
