import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProfileCard from './ProfileCard';
import PageHeader from './common/PageHeader';

const ProfilesList = ({ profiles, onBack, onViewProfile }) => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#fff' }}>
        <PageHeader 
          title="All Profiles"
          action={
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={onBack}
              sx={{ 
                backgroundColor: '#656565',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4a4a4a'
                }
              }}
            >
              Back to Home
            </Button>
          }
        />

        <Grid container spacing={3}>
          {profiles.map((profile, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProfileCard 
                profile={profile}
                onViewProfile={onViewProfile}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilesList;