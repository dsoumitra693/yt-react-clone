import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from "@mui/material"
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchApi'
import { useParams } from 'react-router-dom'
import LoadingHandler from './LoadingHandler'

const Feed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([])
  const [loadErr, setLoadErr] = useState("")
  const [reload, setReload] = useState(0)
  useEffect(() => {
    setLoadErr("")
    fetchFromAPI(`search/${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      }).catch((err) => {
        setLoadErr(err)
      })
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