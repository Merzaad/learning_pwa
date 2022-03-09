import { selectDarkMode } from '../slice/board'
import { useAppSelector } from '../../app/hooks'
import { ThemeMakerType } from '../types/types'

const themeMaker = (): ThemeMakerType => {
  const darkMode = useAppSelector(selectDarkMode)
  const txtColor = darkMode ? '#DDDDDD' : '#1E3440'
  const bgColor = darkMode ? '#2D2D2D' : '#FEFBF3'
  const paperColor = darkMode ? '#1D1D1D' : '#B8B8B8'
  const appColor = darkMode ? '#181818' : '#9D9D9D'
  const navColor = darkMode ? '#152D35' : '#00C897'

  const boardBox = {
    p: '10px',
    background: appColor,
    pt: '50px',
    minHeight: '100vh',
    '@media screen and (max-width: 900px)': {
      px: 0,
    },
  }
  const boardLeftPaper = {
    m: 1,
    background: paperColor,
    '@media screen and (max-width: 900px)': {
      m: 0.5,
    },
  }
  const boardRightPaper = {
    m: 1,
    background: bgColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (max-width: 900px)': {
      padding: '10px',
      m: 4,
    },
    position: 'sticky',
  }
  const navbarBox = {
    background: navColor,
    position: 'fixed',
    top: '0',
    zIndex: '1',
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const button = {
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
    boardBox,
    boardLeftPaper,
    boardRightPaper,
    navbarBox,
    button,
  }
}
export default themeMaker
