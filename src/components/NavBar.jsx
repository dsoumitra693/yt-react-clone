import { Card, Stack, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { logo, demoProfilePicture } from "../utils/constants"
import SearchBar from "./SearchBar"

const NavBar = () => (
  <Stack direction="row" alignItems="center"
    sx={{
      position: 'sticky', backgroundColor: "#000",
      top: 0, justifyContent: 'space-between', padding: '10px'
    }}>
    <Link to='/' style={{ display: 'flex', alignItems: 'center', }}>
      <img src={logo} alt='logo' height={45} />
      <Typography sx={{ ml: '20px', fontSize: '30px', fontWeight: 'bold', color: "#fff", display: { xs: 'none', md: "block" } }}>
        YouTube
      </Typography>
    </Link>
    <Stack direction="row" alignItems="center"
    sx={{ backgroundColor: "#000",
       justifyContent: 'space-between', padding: '10px'
    }}>
      <SearchBar />
      <Card alignItems="center" justifyContent="center" sx={{ borderRadius: '50%', height: '45px'}}>
        <img src={demoProfilePicture} alt='' height={50} width={45}/>
      </Card>
    </ Stack>
  </Stack>
)

export default NavBar