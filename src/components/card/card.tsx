/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react'
import { Card, CardHeader, CardContent, IconButton, CardMedia, CardActions } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import themeMaker from '../../features/themeMaker'
import { testDataType } from '../../features/types'

type PropsType = {
  data: testDataType
}

const CardM = (props: PropsType) => {
  const { data } = props
  const { bgColor, txtColor } = themeMaker()

  return (
    <Card
      key={data.index}
      sx={{
        background: bgColor,
        color: txtColor,
        height: '500px',
      }}
    >
      <CardHeader title={data.title} />
      <CardMedia component="img" height="194" src={data.imgSrc} alt="Card Media Alt" />
      <CardContent>{data.text}</CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon
            sx={{
              color: txtColor,
            }}
          />
        </IconButton>
        <IconButton>
          <ShareIcon
            sx={{
              color: txtColor,
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardM
