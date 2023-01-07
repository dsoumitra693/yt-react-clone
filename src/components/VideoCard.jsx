import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, } from '../utils/constants'

const VideoCard = ({ video }) => {
  return (
    <Card sx={{ width: { sm: '100%', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{ width: { sm: '100%',}, height: 180 }}  />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', width: { sm: '100%', md: "320px", }}}>
        <Link to={`/video/${video.id.videoId}`}>
          <Typography varient='subtitle1' fontWeight='bold' color='#fff'>
            {video?.snippet?.title.slice(0, 60).replace(/&#39;/g, `'`, )}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Typography varient='subtitle2' fontWeight='bold' color='gray'>
            {video?.snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color: 'grey', ml: 2}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard