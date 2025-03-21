import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Container,
  Grid,
  Button,
} from '@mui/material';

const Preview = ({ data, onEdit }) => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ 
            backgroundColor: '#d7cfdb',
            color: '#625c67',
            fontSize: '22px',
            font:'Poppins',
            fontWeight:'bold',
            padding: '10px 20px',
            borderRadius: '4px'
          }}>
            Driver's Profile
          </Typography>
          {data.profileImage && (
            <Box sx={{ 
              border: '2px solid #656565',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <img 
                src={data.profileImage} 
                alt="Profile" 
                style={{ width: 100, height: 100, objectFit: 'cover' }}
              />
            </Box>
          )}
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Type: {data.type.charAt(0).toUpperCase() + data.type.slice(1)}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">First Name: {data.firstName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Last Name: {data.lastName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Mobile Number: {data.mobileNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Aadhar Number: {data.aadharNumber}</Typography>
          </Grid>
          {data.type === 'driver' && (
            <>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">License Number: {data.licenseNumber}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">License Expiry Date: {data.licenseExpiryDate}</Typography>
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Police Verification: {data.policeVerification}</Typography>
          </Grid>
          {data.policeVerification === 'yes' && (
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Verification Date: {data.policeVerificationDate}</Typography>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Blood Group: {data.bloodGroup}</Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Emergency Contact</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Name: {data.emergencyContact.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Contact Number: {data.emergencyContact.contactNumber}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Relation: {data.emergencyContact.relation}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={onEdit}
            variant="contained"
            sx={{
                borderColor: "#1FB892",
                color: "white",
                fontSize: "15px",
                backgroundColor: "#1FB892",
                alignItems: "center",
                borderRadius: "9px",
                paddingX: 2.5,
                marginTop: "20px",
               
                "&:hover": {
                  borderColor: "#1FB892",
                  backgroundColor: "white",
                  color: "#1FB892",
                },
              }}
          >
            Edit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Preview;