/* eslint-disable object-curly-newline */
import * as React from 'react'
import { Paper, Button } from '@mui/material'
import themeMaker from '../../features/theme/themeMaker'
import { setDataCountry } from '../../features/slice/board'
import { useAppDispatch } from '../../app/hooks'

const MenuM = () => {
  const dispatch = useAppDispatch()
  const { boardRightPaper } = themeMaker()
  const handleSelectUs = () => {
    dispatch(setDataCountry('us'))
  }
  const handleSelectIt = () => {
    dispatch(setDataCountry('it'))
  }
  return (
    <Paper
      sx={boardRightPaper}
    >
      <Button
        onClick={handleSelectUs}
      >
        Us
      </Button>
      <Button
        onClick={handleSelectIt}
      >
        lt
      </Button>
    </Paper>
  )
}

export default MenuM
