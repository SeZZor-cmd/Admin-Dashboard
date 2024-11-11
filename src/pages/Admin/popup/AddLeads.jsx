import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, IconButton, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography, Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendLead from './SendLead';

function AddLeads({ open, close }) {
  // State for form fields
  const [personalInfo, setPersonalInfo] = useState('');
  const [formOpen, setFormOpen] = useState(false); // To manage the SendLead dialog

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormOpen(true); // Open the SendLead dialog after submission
  };

  // Close the SendLead dialog
  const handleSendLeadClose = () => {
    setFormOpen(false);
  };

  return (
    <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: 'center' }}>
        Add New Leads
        <IconButton
          aria-label="close"
          onClick={close}
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
                <td><Typography>Email Address</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Email Address" fullWidth variant="outlined" required />
                </td>
              </tr>

              {/* Zipcode Address */}
              <tr>
                <td><Typography>Zipcode</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Zipcode" fullWidth variant="outlined" required />
                </td>
              </tr>

              {/* Vendor Address */}
              <tr>
                <td><Typography>Vendor</Typography></td>
                <td style={{ padding: '8px' }}>
                  <TextField label="Vendor" fullWidth variant="outlined" required />
                </td>
              </tr>

              {/* Personal Information Select */}
              <tr>
                <td><Typography>Assign</Typography></td>
                <td style={{ padding: '8px' }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Select Employee</InputLabel>
                    <Select
                      value={personalInfo}
                      onChange={(e) => setPersonalInfo(e.target.value)}
                    >
                      <MenuItem value="Info 1">Employee 1</MenuItem>
                      <MenuItem value="Info 2">Employee 2</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            </tbody>
          </table>

          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </DialogContent>
      
      {/* SendLead dialog */}
      <Dialog open={formOpen} onClose={handleSendLeadClose}>
        <SendLead open={formOpen} close={handleSendLeadClose} />
      </Dialog>
    </Dialog>
  );
}

export default AddLeads;
