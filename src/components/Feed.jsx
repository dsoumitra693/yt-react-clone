import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from "@mui/material"
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchApi'
import LoadingHandler from './LoadingHandler'
import axios from 'axios'

const Feed = ({ selectedCategorie, setSelectedCategorie }) => {
  const [videos, setVideos] = useState([])
  const [loadErr, setLoadErr] = useState({})
  const [reload, setReload] = useState(0)
  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    setLoadErr({})
    fetchFromAPI(`${selectedCategorie}`, cancelToken)
      .then((data) => {
        setVideos(data.items)
      }).catch((err) => {
        if(!axios.isCancel(err)){
          setLoadErr(err)
        }
      })

      return () => {
        cancelToken.cancel()
      }
  }, [selectedCategorie, reload])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{
        height: { sm: 'auto', md: "90vh" },
        border: '1px solid #3d3d3d', px: { sm: 0, md: 2 }
      }}>
        <SideBar selectedCategorie={selectedCategorie} setSelectedCategorie={setSelectedCategorie} />
      </Box>
      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh', flex: 2
      }}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{
          color: 'white'
        }}>
          {selectedCategorie} <span style={{
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