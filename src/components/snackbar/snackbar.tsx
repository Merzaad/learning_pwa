/* eslint-disable object-curly-newline */
import * as React from 'react'

import { Box, IconButton, Snackbar, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { snackbarOpen, toggleSnackbar, SetCardData } from '../../features/boardSlice'
import themeMaker from '../../features/themeMaker'
import testApi from '../../features/testApi'

type snackbar = {
  index: number
}

const TestApiSnackbar = (props: snackbar) => {
  const { index } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(snackbarOpen)[index]

  const handleRequest = (): void => {
    dispatch(toggleSnackbar({ target: index, value: true }))
    testApi()
      .then(
        (responseObject) => responseObject.articles.forEach((article: any, id: number) => {
          dispatch(SetCardData({
            index: id,
            text: article.description,
            title: article.title,
            imgSrc: article.urlToImage,
          }))
        }),
      )
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
    <Box>
      <Button
        variant="contained"
        sx={{
          color: txtColor,
          background: bgColor,
          ':hover': {
            background: bgColor,
            color: txtColor,
          },
        }}
        onClick={handleRequest}
      >
        testApi news
      </Button>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Api called check console"
        action={action}
      />
    </Box>
  )
}

export default TestApiSnackbar
