import * as React from 'react'
import { Box, Switch } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectDarkMode, toggleDarkMode } from '../../features/slice/board'
import TestApiSnackbar from '../snackbar/snackbar'
import themeMaker from '../../features/theme/themeMaker'

const NavbarM = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkMode)
  const { navbarBox } = themeMaker()

  const handleDarkMode = (): void => {
    dispatch(toggleDarkMode())
  }
  return (
    <div>
      <Box sx={navbarBox}>
        <Switch checked={darkMode} onChange={handleDarkMode} color="default" />
        <TestApiSnackbar index={0} />
      </Box>
      <Outlet />
    </div>
  )
}
export default NavbarM
