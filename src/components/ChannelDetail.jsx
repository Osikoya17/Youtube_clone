import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material"
import {Videos , ChannelCard} from "./";
import fetchFromAPI from "../utils/fetchFromApi";


const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet%2Cstatistics&part=snippet%2Cstatistics&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]))
      .catch((error) => console.error('Error fetching channel details:', error));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((error) => console.error('Error fetching channel videos:', error));
  
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
      <div
        style={{
          background: 'linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)',
          zIndex: 10,
          height: '300px',
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>    
      
    </Box>
  )
}

export default ChannelDetail