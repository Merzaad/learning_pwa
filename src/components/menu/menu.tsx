/* eslint-disable object-curly-newline */
import * as React from 'react'
import { Paper, Button } from '@mui/material'
import themeMaker from '../../features/theme/themeMaker'
import { setDataCountry, clearDataBase,
  selectDataCountry, setDataBase, toggleSnackbar,
  setDataStorage } from '../../features/slice/board'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import TestApiSnackbar from '../snackbar/snackbar'
import { testDataType } from '../../features/types/types'
import countryApi from '../../features/api/country'

const MenuM = () => {
  const dispatch = useAppDispatch()
  const { boardRightPaper } = themeMaker()
  const { button } = themeMaker()
  const country = useAppSelector(selectDataCountry)

  const request = async (): Promise<any> => {
    const object = await countryApi(country)
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

  const handleSelectUs = () => {
    dispatch(setDataCountry('us'))
  }
  const handleSelectIt = () => {
    dispatch(setDataCountry('it'))
  }
  const handleClear = (): void => {
    dispatch(clearDataBase())
  }

  const handleRequest = (): void => {
    dispatch(toggleSnackbar({ target: 0, value: true }))
    request().catch((error) => console.log(error))
  }

  return (
    <Paper sx={boardRightPaper}>
      <Button sx={button} onClick={handleSelectUs}>Us</Button>
      <Button sx={button} onClick={handleSelectIt}>It</Button>
      <Button sx={button} onClick={handleClear}> clear</Button>
      <Button sx={button} onClick={handleRequest}> Request</Button>
      <TestApiSnackbar index={0} />
    </Paper>
  )
}

export default MenuM
