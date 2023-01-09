import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchApi'
import axios from 'axios'


const ChannelDetails = () => {
  const { id } = useParams()
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    fetchFromAPI(`channels/${id}`, cancelToken)
    .then((data)=>{
      setChannelDetails(data?.items[0])
    })
    fetchFromAPI(`channel-video/${id}`, cancelToken)
    .then((data)=>{
      setVideos(data?.items)
    })
    return () =>{
      cancelToken.cancel()
    }

  }, [id])
  
  return (
    <Box sx={{
      minHeight: '95vh', width: '100vw',
    }}>
      <div style={{
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px',
      }}/>
      <ChannelCard channel={channelDetails} marginTop={'-93px'}/>
      <Box display='flex'p="2">
        <Box sx={{mr:{sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails