import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'
import { NavBar, Feed, SearchFeed, VideoDetails, ChannelDetails } from "./components";
import { useState } from "react";
import { VideoTest } from "./components/VideoTest";
import { Page404 } from "./components/Page404";


const App = () => {
  const [selectedCategorie, setSelectedCategorie] = useState('New')
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes >
          <Route path='/' exact element={<Feed selectedCategorie={selectedCategorie} setSelectedCategorie={setSelectedCategorie} />} />
          <Route path='/video/:id' exact element={<VideoDetails />} />
          <Route path='/test' exact element={<VideoTest/>} />
          <Route path='/channel/:id' exact element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
