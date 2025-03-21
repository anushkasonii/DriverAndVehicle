import React from 'react';
import { Box, Typography } from '@mui/material';

const PageHeader = ({ title, action }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      mb: 4 
    }}>
      <Typography variant="h4" sx={{ 
        backgroundColor: '#656565', 
        color: 'white', 
        padding: '10px 20px',
        borderRadius: '4px'
      }}>
        {title}
      </Typography>
      {action}
    </Box>
  );
};

export default PageHeader;