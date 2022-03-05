import { selectDarkMode } from './boardSlice'
import { useAppSelector } from '../app/hooks'

type theme = {
  bgColor: string,
  txtColor: string,
  paperColor: string,
  appColor: string,
  navColor: string,
}

const themeMaker = ():theme => {
  const darkMode = useAppSelector(selectDarkMode)
  const txtColor = darkMode ? '#CA3E47' : '#1E3440'
  const bgColor = darkMode ? '#313131' : '#FEFBF3'
  const paperColor = darkMode ? '#1D1D1D' : '#B8B8B8'
  const appColor = darkMode ? '#181818' : '#9D9D9D'
  const navColor = darkMode ? '#294546' : '#00C897'
  return {
    bgColor, txtColor, paperColor, appColor, navColor,
  }
}
export default themeMaker
