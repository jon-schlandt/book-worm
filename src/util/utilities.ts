// Cleaning functions

type ListData = {
  display_name: string,
  list_name_encoded: string
}[]

type BookData = {
  rank: number,
  publisher: string,
  description: string,
  title: string,
  author: string,
  book_image: string,
  amazon_product_url: string,
  book_uri: string
}[]

export function cleanListData(listData: ListData) {
  const cleanedListData = listData.map(datum => {
    return {
      displayName: datum.display_name,
      queryName: datum.list_name_encoded
    }
  })
  return cleanedListData
}

export function cleanBookData( bookData: BookData ) {
  const cleanedBookData = bookData.map(book => {
    return {
      rank: book.rank,
      publisher: book.publisher,
      description: book.description,
      title: book.title,
      author: book.author,
      bookImage: book.book_image,
      amazonProductUrl: book.amazon_product_url,
      id: book.book_uri
    }
  })
  return cleanedBookData
}
