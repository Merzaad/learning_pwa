/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import * as React from 'react'

import { Box, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { snackbarOpen, toggleSnackbar } from '../../features/slice/board'

type snackbar = {
  index: number
}

const TestApiSnackbar = (props: snackbar) => {
  const { index } = props
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(snackbarOpen)[index]

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(toggleSnackbar({ target: index, value: false }))
  }

  const action = (
    <IconButton onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  )
  return (
    <Box>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Request Sent"
        action={action}
      />
    </Box>
  )
}

export default TestApiSnackbar
