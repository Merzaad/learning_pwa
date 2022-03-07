export type testDataType = {
  index: number
  text: string
  title: string
  imgSrc: string
  publishedAt: string
  author: string
  url: string
}

export type BoardStateType = {
  darkMode: boolean
  cardMenuOpen: boolean[]
  snackbarOpen: boolean[]
  dataBase: testDataType[]
}
