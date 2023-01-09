import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from "@mui/material"
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchApi'
import { useParams } from 'react-router-dom'
import LoadingHandler from './LoadingHandler'
import axios from 'axios'

const Feed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([])
  const [loadErr, setLoadErr] = useState("")
  const [reload, setReload] = useState(0)
  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    setLoadErr("")
    fetchFromAPI(`search/${searchTerm}`, cancelToken)
      .then((data) => {
        setVideos(data.items)
      }).catch((err) => {
        if(!axios.isCancel(err)){
          setLoadErr(err)
        }
      })
      return () =>{
        cancelToken.cancel()
      }
  }, [searchTerm, reload])

  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh', flex: 2
      }}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{
          color: 'white'
        }}>
          {searchTerm} <span style={{
            color: "#fc1503"
          }}> Videos</span>
        </Typography>
        <LoadingHandler mainDependency={videos} loadErr={loadErr} reload={reload} setReload={setReload}/>
        {!!videos.length && <Videos videos={videos} />}
      </Box>
    </Stack>
  )
}

export default Feed