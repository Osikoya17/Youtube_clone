import React from 'react';
import { Box, Stack, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Box sx={{ color: '#FC1503' }}>
        <CircularProgress color="inherit" />
      </Box>
    </Stack>
  );
}

export default Loader;