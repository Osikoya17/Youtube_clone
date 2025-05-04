import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import fetchFromAPI from '../utils/fetchFromApi';
import {Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams(); // Get the search term from the URL parameters

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=21`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [searchTerm]);
  
  return (
    <Box 
      p={2} 
      sx={{ overflowY: 'auto', 
      height: '90vh', 
      flex: 2 }}
    >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          <span style={{ color: 'white' }}>Search Results for:</span>
          <span style={{ color: '#FC1503', marginLeft: '7px' }}>{searchTerm}</span>
          <span style={{ color: 'white' }}>videos</span>
        </Typography>
        <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;