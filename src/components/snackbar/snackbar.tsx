/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
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
} from '../../features/slice/board'
import themeMaker from '../../features/theme/themeMaker'
import testApi from '../../features/api/topHeadlines'
import { testDataType } from '../../features/types/types'

type snackbar = {
  index: number
}

const TestApiSnackbar = (props: snackbar) => {
  const { index } = props
  const { snackbarButton } = themeMaker()
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(snackbarOpen)[index]

  const request = async (): Promise<any> => {
    const object = await testApi()
    object.articles.forEach((article: any, id: number) => {
      const data: testDataType = {
        index: id,
        text: article.description,
        title: article.title,
        imgSrc: article.urlToImage,
        publishedAt: article.publishedAt,
        author: article.author,
        url: article.url,
      }
      dispatch(setDataBase(data))
    })
    dispatch(setDataStorage())
    return object
  }

  const handleClear = (): void => {
    dispatch(clearDataBase())
  }

  const handleRequest = (): void => {
    dispatch(toggleSnackbar({ target: index, value: true }))
    request().catch((error) => console.log(error))
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
      <Button variant="contained" sx={snackbarButton} onClick={handleRequest}>
        testApi
      </Button>
      <Button variant="contained" sx={snackbarButton} onClick={handleClear}>
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
