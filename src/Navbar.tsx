import * as React from 'react'
import { Box, Switch } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { selectDarkMode, toggleDarkMode } from './features/boardSlice'
import TestApiSnackbar from './components/snackbar/snackbar'
import themeMaker from './features/themeMaker'

const navbarM = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)
  const { navColor } = themeMaker()

  const handleDarkMode = (): void => {
    dispatch(toggleDarkMode())
  }
  return (
    <div>
      <Box
        sx={{
          background: navColor,
          position: 'fixed',
          bottom: '0',
          zIndex: '1',
          width: '100%',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Switch checked={darkMode} onChange={handleDarkMode} color="default" />
        <TestApiSnackbar index={0} />
      </Box>
      <Outlet />
    </div>
  )
}
export default navbarM
