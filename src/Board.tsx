import React from 'react'
import { Grid, Box, Paper } from '@mui/material'
import CardM from './components/card/card'
import themeMaker from './features/themeMaker'
import { useAppSelector } from './app/hooks'
import { selectTestDataBase } from './features/boardSlice'

const Board = () => {
  const { appColor, paperColor } = themeMaker()
  const testDataBase = useAppSelector(selectTestDataBase)
  const board = testDataBase.map((data) => (
    <Grid item xs={12} md={6}>
      <Paper
        key={data.index}
        sx={{
          padding: '10px',
          background: paperColor,
        }}
      >
        <CardM data={data} />
      </Paper>
    </Grid>

  ))
  return (
    <Box
      sx={{
        padding: '10px',
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
