import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, IconButton, TextField, FormGroup, FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddEmployee({ open, onClose }) {
  // State for form fields
  const [personalInfo, setPersonalInfo] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: 'center' }}>
        Add New Employee
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <table style={{ width: '100%', marginBottom: '16px' }}>
            <tbody>
              {/* Name */}
              <tr>
                <td>
                  <Typography>Name</Typography>
                </td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Name" fullWidth variant="outlined" required />
                </td>
              </tr>
              
              {/* Phone number */}
              <tr>
              <td><Typography>Phone No.</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Phone no." fullWidth variant="outlined" required />
                </td>
              </tr>
              
              {/* Email Address */}
              <tr>
              <td> <Typography>Email Address</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Email Address" fullWidth variant="outlined" required />
                </td>
              </tr>
              
              {/* Role Checkboxes */}
              <tr>
                <td><Typography>Role</Typography></td>
                <td style={{ padding: '8px' }}>
                  <FormGroup column>
                    <FormControlLabel control={<Checkbox />} label="Verifier" />
                    <FormControlLabel control={<Checkbox />} label="Lead" />
                  </FormGroup>
                </td>
              </tr>
              
              {/* Username */}
              <tr>
                <td><Typography>Username</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Username" fullWidth variant="outlined" required />
                </td>
              </tr>
              
              {/* Password */}
              <tr>
                <td><Typography>Password</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Password" fullWidth variant="outlined" type="password" required />
                </td>
              </tr>
              
              {/* Personal Information Select */}
              <tr>
              <td><Typography>Personal Information</Typography></td>
                <td style={{ padding: '8px' }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Personal Information</InputLabel>
                    <Select
                      value={personalInfo}
                      onChange={(e) => setPersonalInfo(e.target.value)}
                      label="Personal Information"
                    >
                      <MenuItem value="field1">Field 1</MenuItem>
                      <MenuItem value="field2">Field 2</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
              
              {/* Medical Information Select */}
              <tr>
              <td><Typography>Medical Information</Typography></td>
                <td style={{ padding: '8px' }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Medical Information</InputLabel>
                    <Select
                      value={medicalInfo}
                      onChange={(e) => setMedicalInfo(e.target.value)}
                      label="Medical Information"
                    >
                      <MenuItem value="field1">Field 1</MenuItem>
                      <MenuItem value="field2">Field 2</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            </tbody>
          </table>
          
          {/* Submit Button */}
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Button
              type="submit"
              variant="contained"
              
              style={{
                backgroundColor: 'black',
                color: 'white',
                width:'100px',
                alignSelf:'center',
                justifyContent:'center',
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddEmployee;
