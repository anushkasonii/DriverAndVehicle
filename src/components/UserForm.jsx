import React, { useState } from 'react';
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
  MenuItem,
  IconButton,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

// Styled container component
const StyledSection = ({ title, children }) => (
  <Box 
    sx={{ 
      width: '100%', 
      border: '2px solid #cac7c7', 
      borderRadius: '10px', 
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      mb: 3
    }}
  >
    <Box sx={{ backgroundColor: '#d0c8d4', borderRadius: '10px 10px 0 0' }}>
      <Typography 
        sx={{ 
          color: '#656565',
          padding: '10px',
          width: "100%",
          fontSize: '17px',
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>
    </Box>
    <Box sx={{ p: 2 }}>
      {children}
    </Box>
  </Box>
);

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&:hover fieldset': {
      borderColor: '#635881',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#635881',
    }
  },
  '& .MuiInputLabel-root': {
    color: '#4A5568',
    '&.Mui-focused': {
      color: '#635881'
    }
  }
};

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: 'driver',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    aadharNumber: '',
    licenseNumber: '',
    licenseExpiryDate: '',
    policeVerification: 'no',
    policeVerificationDate: '',
    bloodGroup: '',
    emergencyContact: {
      name: '',
      contactNumber: '',
      relation: '',
    },
    profileImage: null,
    documents: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#fff' }}>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography sx={{ 
              backgroundColor: '#d7cfdb',
              color: '#625c67',
              fontSize: '22px',
              font:'Poppins',
              fontWeight: '600',
              padding: '12px 24px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(99,88,129,0.2)'
            }}>
              Driver/Helper Profile
            </Typography>

            <Box>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="profile-image"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="profile-image">
                <IconButton
                  color="#1FB892"
                  component="span"
                  sx={{ 
                    border: '2px dashed #635881',
                    padding: '20px',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#E8ECF3',
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  {formData.profileImage ? (
                    <img 
                      src={formData.profileImage} 
                      alt="Profile" 
                      style={{ width: 100, height: 100, objectFit: 'cover' }}
                    />
                  ) : (
                    <PhotoCamera sx={{ width: 60, height: 50 }} />
                  )}
                </IconButton>
              </label>
            </Box>
          </Box>

          {/* Type Section */}
          <StyledSection title="Type">
            <FormControl component="fieldset">
              <RadioGroup
                row
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                <FormControlLabel value="helper" control={<Radio />} label="Helper" />
              </RadioGroup>
            </FormControl>
          </StyledSection>

          {/* Personal Information */}
          <StyledSection title="Personal Information">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Aadhar Number"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  required
                  sx={textFieldStyle}
                />
              </Grid>
              {formData.type === 'driver' && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="License Number"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      required
                      sx={textFieldStyle}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="date"
                      label="License Expiry Date"
                      name="licenseExpiryDate"
                      value={formData.licenseExpiryDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      sx={textFieldStyle}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Blood Group"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                  sx={textFieldStyle}
                >
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </StyledSection>

          {/* Police Verification Section */}
          <StyledSection title="Police Verification">
            <FormControl fullWidth>
              <RadioGroup
                row
                name="policeVerification"
                value={formData.policeVerification}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            {formData.policeVerification === 'yes' && (
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  type="date"
                  label="Police Verification Date"
                  name="policeVerificationDate"
                  value={formData.policeVerificationDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />
              </Box>
            )}
          </StyledSection>

          {/* Documents Upload */}
          <StyledSection title="Documents">
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                backgroundColor: '#d0c8d4',
                color: '#656565',
                '&:hover': {
                  backgroundColor: '#c2bbc7'
                }
              }}
            >
              Upload Documents
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          </StyledSection>

          {/* Emergency Contact Section */}
          <StyledSection title="Emergency Contact">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="emergencyContact.name"
                  value={formData.emergencyContact.name}
                  onChange={handleChange}
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="emergencyContact.contactNumber"
                  value={formData.emergencyContact.contactNumber}
                  onChange={handleChange}
                  sx={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Relation"
                  name="emergencyContact.relation"
                  value={formData.emergencyContact.relation}
                  onChange={handleChange}
                  sx={textFieldStyle}
                />
              </Grid>
            </Grid>
          </StyledSection>

          {/* Submit Button */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                borderColor: "#1FB892",
                color: "white",
                fontSize: "17px",
                backgroundColor: "#1FB892",
                alignItems: "center",
                borderRadius: "9px",
                paddingX: 2.5,
                marginTop: "25px",
                "&:hover": {
                  borderColor: "#1FB892",
                  backgroundColor: "white",
                  color: "#1FB892",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserForm;