import { Stack , Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
const Videos = ({videos}) => {

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && (<VideoCard video = {item}/>)}
            {item.id.channelId && (<ChannelCard channel = {item}/>)}
          {/* <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} style={{ width: '100%', borderRadius: '10px' }} />
          <h3 style={{ color: 'white', marginTop: '10px' }}>{item.snippet.title}</h3> */}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos;