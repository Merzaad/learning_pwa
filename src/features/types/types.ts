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

export type ThemeMakerType = {
  bgColor: string
  txtColor: string
  paperColor: string
  appColor: string
  navColor: string
  boardContainer: object
  board1Paper: object
  board2Paper: object
  navbarBox: object
  snackbarButton: object
}
