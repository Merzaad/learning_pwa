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
    <Grid item xs={12} md={6} key={data.index}>
      <Paper
        sx={{
          padding: '10px',
          background: paperColor,
          '@media screen and (max-width: 900px)': {
            padding: '0px',
          },
        }}
        elevation={0}
      >
        <CardM data={data} />
      </Paper>
    </Grid>
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
        {board}
      </Grid>
    </Container>
  )
}

export default Board
