export interface AppState {
    list: {
    displayName: string,
    queryName: string
    }[],
    error: string,
    favorites: SingleBook[],
    currentBook: SingleBook | {}
}

export interface ListProps {
    list: {
    displayName: string,
    queryName: string
    }[]
}

export interface BookshelfProps  {
    queryID?: string,
    favoritesHeader?: string,
    favoriteBooks: SingleBook[],
    addToFavorites: (book: SingleBook, state: boolean) => void
    setBookDetails: (book: SingleBook) => void
}

export interface BookshelfState {
  books: SingleBook[],
  error: string
}

export interface BookProps {
    title: string,
    author: string,
    rank: number,
    bookImage: string,
    id: string,
    isFavorite: boolean
    handleClick: (id: string, state: boolean) => void
    findBookDetails: (id: string) => void
}

export interface BookState {
    favorite: boolean
}

export interface SingleBook {
  rank: number,
  publisher: string,
  description: string,
  title: string,
  author: string,
  bookImage: string,
  amazonProductUrl: string,
  id: string
}

export interface DetailsProps {
    info: SingleBook | {}
}