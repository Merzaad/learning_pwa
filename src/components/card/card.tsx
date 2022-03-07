/* eslint-disable object-curly-newline */
import * as React from 'react'
import { Card, CardHeader, CardContent, IconButton, CardMedia, CardActions } from '@mui/material'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
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
      }}
    >
      <CardHeader title={data.title} subheader={data.publishedAt} />
      <CardMedia component="img" src={data.imgSrc} alt={data.title} />
      <CardContent>{`${data.text}  _author:${data.author}`}</CardContent>
      <CardActions disableSpacing>
        <a href={data.url} target="_blank" rel="noreferrer">
          <IconButton>
            <InsertLinkIcon
              sx={{
                color: txtColor,
              }}
            />
          </IconButton>
        </a>

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
