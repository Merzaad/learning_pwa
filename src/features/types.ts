export type dataBaseType = {
    index: number,
    text: string,
    title: string,
    imgSrc: string
  }

export type BoardStateType = {
    darkMode: boolean
    cardMenuOpen: boolean[],
    snackbarOpen: boolean[],
    dataBase: dataBaseType[],
}
