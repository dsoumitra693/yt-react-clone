import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap={'wrap'}flex={2}
    justifyContent="center" gap={2} alignItems='center' >
      {videos.map((item, id)=> (
        <Box key={id}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos