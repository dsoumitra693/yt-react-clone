import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Videos } from "./"
import ReactPlayer from 'react-player'
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material"
import { fetchFromAPI } from '../utils/fetchApi'
import { CheckCircle } from '@mui/icons-material'
import { numFormat } from '../utils/numberFormater'
import axios from 'axios'

const VideoDetails = () => {
  const { id } = useParams()
  const [videoDetails, setVideoDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    fetchFromAPI(`video/${id}`).then((data) => {
      setVideoDetails(data?.items[0])
    })
    fetchFromAPI(`video/related/${id}`).then((data) => {
      setRelatedVideos(data.items)
    })
    return () =>{
      cancelToken.cancel()
    }
  }, [id])
  const [pipMode, setPipMode] = useState(false);

  const togglePIP = () => {
    setPipMode(prev => !prev);
  }
  if (!videoDetails) return (
    <Box
      sx={{ minHeight: '95vh', width: '100vw', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box sx={{ minHeight: '95vh', padding: '10px' }} justifyContent="center" alignItems="center" display="flex">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={4} sx={{ ml: { md: '40px' } }}>
          <Box sx={{ width: '100%', position: 'sticky', top: '120px' }}>
            {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls /> */}
            <ReactPlayer
              controls
              playing
              url={`https://www.youtube.com/watch?v=${id}`}
              pip={pipMode}
            />

            <Button
              sx={{ borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.4)", }}
              onClick={togglePIP}
            > {pipMode ? "Enable" : "Disable"} </Button>
            <Typography color="#fff" varient="h5" fontWeight="bold" pt={2}>
              {title}
            </Typography>
            <Stack justifyContent="space-between" direction="row" sx={{ color: '#fff' }} py={1} px={2} >
              <Link to={`channel/${channelId}`}>
                <Typography variant='body1' color="#fff">
                  {channelTitle}
                </Typography>
                <CheckCircle sx={{ fontSize: '12px', color: 'grey', ml: '5px' }} />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' color="#fff" sx={{ opacity: 0.7, }}>
                  {numFormat.format(viewCount)} views
                </Typography>
                <Typography variant='body1' color="#fff" sx={{ opacity: 0.7, }}>
                  {numFormat.format(likeCount)} likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
        </Box>
        <Box flex={1} px={2} py={{ md: 1, xs: 5 }} >
          <Videos videos={relatedVideos} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails