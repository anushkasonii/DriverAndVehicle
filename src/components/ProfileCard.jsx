import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Avatar,
} from '@mui/material';

const ProfileCard = ({ profile, onViewProfile }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src={profile.profileImage}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box>
            <Typography variant="h6">
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography color="textSecondary">
              {profile.type.charAt(0).toUpperCase() + profile.type.slice(1)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Mobile: {profile.mobileNumber}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto' }}>
        <Button 
          size="small" 
          onClick={() => onViewProfile(profile)}
          sx={{ 
            color: '#656565',
            '&:hover': {
              backgroundColor: '#65656520'
            }
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;