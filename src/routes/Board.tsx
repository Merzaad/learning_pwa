import React from 'react'
import { Grid, Container, Paper } from '@mui/material'
import CardM from '../components/card/card'
import themeMaker from '../features/theme/themeMaker'
import { useAppSelector } from '../app/hooks'
import { selectTestDataBase } from '../features/slice/board'

const Board = () => {
  const { boardContainer, board1Paper, board2Paper } = themeMaker()
  const testDataBase = useAppSelector(selectTestDataBase)
  const board1 = testDataBase.map((data) => (
    <Paper key={data.index} sx={board1Paper} elevation={0}>
      <CardM data={data} />
    </Paper>
  ))
  const board2 = testDataBase.map((data) => (
    <Paper key={data.index} sx={board2Paper} elevation={0}>
      <CardM data={data} />
    </Paper>
  ))
  return (
    <Container sx={boardContainer}>
      <Grid container spacing={1}>
        <Grid item md={8}>
          {board1}
        </Grid>
        <Grid item md={4}>
          {board2}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Board
