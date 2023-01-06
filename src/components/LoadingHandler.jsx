import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'

const LoadingHandler = ({ mainDependency, loadErr, reload, setReload }) => {
    return (<>
        {mainDependency.length === 0 &&
            <Box
                sx={{ height: '80vh', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                {loadErr.code === undefined && <CircularProgress />}
                {loadErr.message &&
                    <>
                        <Typography variant="h6" fontWeight='bold' mb={2} sx={{
                            color: 'white'
                        }}>
                            {loadErr.message}
                        </Typography>
                        <Button
                            sx={{ borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.4)", }}
                            onClick={()=> setReload(prev=> ++prev)}
                        > Retry </Button>
                    </>}
            </Box>
        }
    </>
    )
}

export default LoadingHandler