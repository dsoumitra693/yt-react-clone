import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"
import { numFormat } from "../utils/numberFormater"

const ChannelCard = ({ channel, marginTop}) => {
  return (
    <Card sx={{
      CardShadow: 'none',
      borderRadius: '20px',
      justifyContent: 'center',
      bgcolor: 'transparent',
      width: { md: '336px', sm: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          color: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channel?.snippet?.title}
            sx={{ width: '180px', height: '180px', borderRadius: '50%', mb: 2, borer: '1px solid #e3e3e3e', }} />
          <Typography variant='h6'>
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'grey', ml: 2 }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
              {numFormat.format(channel?.statistics?.subscriberCount || 0)} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}

export default ChannelCard