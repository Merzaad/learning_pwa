import React from 'react'
import { Grid, Container, Paper } from '@mui/material'
import CardM from './components/card/card'
import themeMaker from './features/themeMaker'
import { useAppSelector } from './app/hooks'
import { selectTestDataBase } from './features/boardSlice'

const Board = () => {
  const { appColor, paperColor } = themeMaker()
  const testDataBase = useAppSelector(selectTestDataBase)
  const board = testDataBase.map((data) => (
    <Paper
      key={data.index}
      sx={{
        padding: '10px',
        m: 1,
        background: paperColor,
        '@media screen and (max-width: 900px)': {
          padding: '0px',
        },
      }}
      elevation={0}
    >
      <CardM data={data} />
    </Paper>
  ))
  return (
    <Container
      sx={{
        padding: '10px',
        background: appColor,
        paddingBottom: '100px',
        minHeight: '100vh',
        '@media screen and (max-width: 900px)': {
          padding: '0px',
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {board}
        </Grid>
        <Grid item xs={12} md={4}>
          {board}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Board
