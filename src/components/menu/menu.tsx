import * as React from 'react'
import { Paper, Button } from '@mui/material'
import themeMaker from '../../features/theme/themeMaker'
import {
  setDataCountry,
  clearDataBase,
  selectDataCountry,
  toggleSnackbar,
  setDataBase,
} from '../../features/slice/board'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import TestApiSnackbar from '../snackbar/snackbar'
import countryApi from '../../features/api/country'

const MenuM = () => {
  const dispatch = useAppDispatch()
  const { boardRightPaper } = themeMaker()
  const { button } = themeMaker()
  const country = useAppSelector(selectDataCountry)

  const handleSelectCountry = (selectedCountry: string) => {
    dispatch(setDataCountry(selectedCountry))
  }
  React.useEffect((): any => {
    dispatch(toggleSnackbar({ target: 0, value: true }))
    countryApi(country)
      .then((data) => dispatch(setDataBase(data)))
      .catch((error) => console.log(error))
    return () => dispatch(clearDataBase())
  }, [country])

  return (
    <Paper sx={boardRightPaper}>
      <Button sx={button} onClick={() => handleSelectCountry('us')}>
        Us
      </Button>
      <Button sx={button} onClick={() => handleSelectCountry('it')}>
        It
      </Button>
      <TestApiSnackbar index={0} />
    </Paper>
  )
}

export default MenuM
