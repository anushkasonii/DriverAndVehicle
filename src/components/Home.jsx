import React from 'react';
import { Container, Button, Box, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';

const Home = ({ onCreateProfile, onViewProfiles }) => {
  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ 
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            backgroundColor: '#776C96',
            color: '#E4DDE7',
            font:'Poppins',
            padding: '10px 20px',
            borderRadius: '10px',
            mb: 4
          }}
        >
          Profile Management
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          startIcon={<PersonAddIcon />}
          onClick={onCreateProfile}
          sx={{ 
            width: '250px',
            height: '60px',
            backgroundColor: '#8478A3',
            color: '#EAE3ED',
          }}
        >
          Create Profiles
        </Button>

        <Button
          variant="contained"
          size="large"
          startIcon={<PeopleIcon />}
          onClick={onViewProfiles}
          sx={{ 
            width: '250px',
            height: '60px',
            backgroundColor: '#8478A3',
            color: '#EAE3ED',
          }}
        >
          View Profiles
        </Button>
      </Box>
    </Container>
  );
};

export default Home;