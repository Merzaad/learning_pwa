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
  dataBaseCountry: string
}

export type ThemeMakerType = {
  bgColor: string
  txtColor: string
  paperColor: string
  appColor: string
  navColor: string
  boardBox: object
  boardLeftPaper: object
  boardRightPaper: object
  navbarBox: object
  button: object
}
