/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import * as React from 'react'

import { Box, IconButton, Snackbar, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  snackbarOpen,
  toggleSnackbar,
  setDataBase,
  setDataStorage,
  clearDataBase,
} from '../../features/boardSlice'
import themeMaker from '../../features/themeMaker'
import testApi from '../../features/testApi'
import { testDataType } from '../../features/types'

type snackbar = {
  index: number
}

const TestApiSnackbar = (props: snackbar) => {
  const { index } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(snackbarOpen)[index]

  const handleClear = (): void => {
    dispatch(clearDataBase())
  }

  const handleRequest = (): void => {
    dispatch(toggleSnackbar({ target: index, value: true }))
    testApi()
      .then((responseObject) =>
        responseObject.articles.forEach((article: any, id: number) => {
          const data: testDataType = {
            index: id,
            text: article.description,
            title: article.title,
            imgSrc: article.urlToImage,
          }
          dispatch(setDataBase(data))
        }),
      )
      .then(() => dispatch(setDataStorage()))
      .catch((error) => console.log(`handleClick -> error : ${error}`))
  }

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
    <Box
      sx={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <Button
        variant="contained"
        sx={{
          color: txtColor,
          background: bgColor,
          ':hover': {
            background: txtColor,
            color: bgColor,
          },
        }}
        onClick={handleRequest}
      >
        testApi
      </Button>
      <Button
        variant="contained"
        sx={{
          color: txtColor,
          background: bgColor,
          ':hover': {
            background: txtColor,
            color: bgColor,
          },
        }}
        onClick={handleClear}
      >
        clear
      </Button>

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
