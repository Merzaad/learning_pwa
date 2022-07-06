import React from 'react'
import { Grid, Box, Paper } from '@mui/material'
import CardM from '../components/card/card'
import themeMaker from '../features/theme/themeMaker'
import { useAppSelector } from '../app/hooks'
import { selectTestDataBase } from '../features/slice/board'
import MenuM from '../components/menu/menu'

const Board = () => {
  const { boardBox, boardLeftPaper } = themeMaker()
  const testDataBase = useAppSelector(selectTestDataBase)
  const board1 = testDataBase?.map((data) => (
    <Paper key={data.index} sx={boardLeftPaper} elevation={0}>
      <CardM data={data} />
    </Paper>
  ))

  return (
    <Box sx={boardBox}>
      <Grid container spacing={1}>
        <Grid item md={8}>
          {board1}
        </Grid>
        <Grid item md={4}>
          <MenuM />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Board
