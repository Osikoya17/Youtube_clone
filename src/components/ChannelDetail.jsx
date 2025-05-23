import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import fetchFromApi from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const channelData = await fetchFromApi(`channels?part=snippet,statistics&id=${id}`);
        setChannelDetail(channelData?.items[0]);

        const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet,id&order=date`);
        setVideos(videosData?.items || []);
      } catch (error) {
        console.error("Error fetching channel details or videos:", error);
      }
    };

    fetchResults();
  }, [id]);

  if (!channelDetail) return <div>Loading...</div>;

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
