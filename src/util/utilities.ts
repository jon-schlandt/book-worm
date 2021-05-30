// Cleaning functions

type ListData = {
  display_name: string,
  list_name_encoded: string
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
