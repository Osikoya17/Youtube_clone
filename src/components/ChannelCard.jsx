import {Box, CardContent,CardMedia,Typography } from "@mui/material"
import { demoChannelUrl, demoChannelTitle, demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";



const ChannelCard = ({ channelDetail}) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto' }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', color: '#fff'}}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: 180, width: 180, mb: 2, border: '1px solid #e3e3e3' }}
                /> 
                <Typography variant="h6" fontWeight="bold" color="#FFF">
                    {channelDetail?.snippet?.title || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography variant="subtitle2" color="gray" sx={{ fontSize: 14 }}>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent> 
        </Link>

    </Box>
  )
}

export default ChannelCard