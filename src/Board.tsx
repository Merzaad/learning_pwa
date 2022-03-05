import React from 'react'
import { Grid, Box } from '@mui/material'
import CardM from './components/card/card'
import themeMaker from './features/themeMaker'
import { useAppSelector } from './app/hooks'
import { selectTestDataBase } from './features/boardSlice'

const Board = () => {
  const { appColor } = themeMaker()
  const testDataBase = useAppSelector(selectTestDataBase)
  const board = testDataBase.map((data) => (
    <Grid key={data.index} item xs={12} md={6}>
      <CardM data={data} />
    </Grid>
  ))
  return (
    <Box
      sx={{
        padding: '20px',
        background: appColor,
        paddingBottom: '100px',
        minHeight: '100vh',
      }}
    >
      <Grid container spacing={2}>
        {board}
      </Grid>
    </Box>
  )
}

export default Board
