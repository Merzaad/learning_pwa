import { selectDarkMode } from '../slice/board'
import { useAppSelector } from '../../app/hooks'
import { ThemeMakerType } from '../types/types'

const themeMaker = (): ThemeMakerType => {
  const darkMode = useAppSelector(selectDarkMode)
  const txtColor = darkMode ? '#F05454' : '#1E3440'
  const bgColor = darkMode ? '#15141a' : '#FEFBF3'
  const paperColor = darkMode ? '#1D1D1D' : '#B8B8B8'
  const appColor = darkMode ? '#181818' : '#9D9D9D'
  const navColor = darkMode ? '#2D2D2D' : '#00C897'
  const boardContainer = {
    padding: '10px',
    background: appColor,
    paddingBottom: '100px',
    minHeight: '100vh',
    '@media screen and (max-width: 900px)': {
      padding: '0px',
    },
  }
  const board1Paper = {
    m: 1,
    background: paperColor,
    '@media screen and (max-width: 900px)': {
      m: 0.5,
    },
  }
  const board2Paper = {
    padding: '5px',
    m: 1,
    background: paperColor,
    '@media screen and (max-width: 900px)': {
      padding: '10px',
      m: 4,
    },
  }
  const navbarBox = {
    background: navColor,
    position: 'fixed',
    bottom: '0',
    zIndex: '1',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const snackbarButton = {
    color: txtColor,
    background: bgColor,
    ':hover': {
      background: txtColor,
      color: bgColor,
    },
  }
  return {
    bgColor,
    txtColor,
    paperColor,
    appColor,
    navColor,
    boardContainer,
    board1Paper,
    board2Paper,
    navbarBox,
    snackbarButton,
  }
}
export default themeMaker
