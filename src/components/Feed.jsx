import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import fetchFromAPI from '../utils/fetchFromApi'; // Corrected import
import { SideBar, Videos } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=21`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [selectedCategory]);
  
  return (
    <Stack direction="row" sx={{ overflowY: 'auto', height: '90vh', flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }, overflowY: 'auto' }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: 'white' }}>
          Copyright 2023 Me-Tube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          <span style={{ color: 'white' }}>{selectedCategory}</span>
          <span style={{ color: '#FC1503', marginLeft: '7px' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;