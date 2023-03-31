import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Page404 = () => {
  return (<Box
    sx={{ height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: "column"}}>
    <Typography variant="h6" fontWeight='bold' mb={2} sx={{
      color: 'white'
    }}>
      404 Page Not Found.
    </Typography>
    <Link to='/' style={{ display: 'flex', alignItems: 'center', }}>
      <Button
        sx={{ borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.4)", }}
      > Go to Home Page </Button>
    </Link>
  </Box>)
}