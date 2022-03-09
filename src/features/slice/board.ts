/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { BoardStateType, testDataType } from '../types/types'

const initialDataBase = () => {
  const dataBase = localStorage.getItem('dataBase')
  const data: testDataType[] = JSON.parse(dataBase!)
  return data || []
}
const initialState: BoardStateType = {
  darkMode: !!(localStorage.getItem('darkMode') === 'true'),
  cardMenuOpen: [],
  snackbarOpen: [],
  dataBase: initialDataBase(),
}

export const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const x = state
      x.darkMode = !x.darkMode
      localStorage.setItem('darkMode', String(x.darkMode))
    },
    toggleCardMenu: (state, action: PayloadAction<number>) => {
      const x = state
      const id = action.payload
      x.cardMenuOpen[id] = !x.cardMenuOpen[id]
    },
    toggleSnackbar: (state, action: PayloadAction<{ target: number; value: boolean }>) => {
      const x = state
      const id = action.payload.target
      x.snackbarOpen[id] = action.payload.value
    }, // toggle with new value or switching?
    setDataBase: (state, action: PayloadAction<testDataType>) => {
      const x = state
      const data = action.payload
      x.dataBase[data.index] = data
    },
    setDataStorage: (state) => {
      const x = state
      const dataBase = JSON.stringify(x.dataBase)
      localStorage.setItem('dataBase', dataBase)
    },
    clearDataBase: (state) => {
      const x = state
      x.dataBase = []
      localStorage.removeItem('dataBase')
    },
  },
})

export const selectDarkMode = (state: RootState) => state.board.darkMode
export const selectTestDataBase = (state: RootState) => state.board.dataBase
export const cardMenuOpen = (state: RootState) => state.board.cardMenuOpen
export const snackbarOpen = (state: RootState) => state.board.snackbarOpen

export const {
  toggleDarkMode,
  toggleCardMenu,
  toggleSnackbar,
  setDataBase,
  setDataStorage,
  clearDataBase,
} = BoardSlice.actions

export default BoardSlice.reducer
