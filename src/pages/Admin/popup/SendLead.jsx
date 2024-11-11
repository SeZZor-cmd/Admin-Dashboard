import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, IconButton, FormControl, InputLabel, Select, MenuItem, Button, Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function SendLead({ open, close }) {
  const [employee, setEmployee] = useState('');
  const [client, setClient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are selected
    if (!employee || !client) {
      alert('Please select both an employee and a client.');
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted', { employee, client });

    // Reset form after submission
    setEmployee('');
    setClient('');
    close(); // Close the dialog after submitting
  };

  return (
    <Dialog open={open} onClose={close} maxWidth="xs" fullWidth>
      <DialogTitle style={{ textAlign: 'center' }}>
        Send selected lead to
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
              {/* Employee Select */}
              <tr>
                <td style={{ padding: '8px' }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Select Employee</InputLabel>
                    <Select
                      value={employee}
                      onChange={(e) => setEmployee(e.target.value)}
                    >
                      <MenuItem value="Employee 1">Employee 1</MenuItem>
                      <MenuItem value="Employee 2">Employee 2</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>

              {/* Client Select */}
              <tr>
                <td style={{ padding: '8px' }}>
                  <FormControl fullWidth variant="outlined" required>
                    <InputLabel>Select Client</InputLabel>
                    <Select
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                    >
                      <MenuItem value="Client 1">Client 1</MenuItem>
                      <MenuItem value="Client 2">Client 2</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            </tbody>
          </table>

          <Box display="flex" justifyContent="center" gap="16px">
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100px',
                borderRadius:'20px',
              }}
            >
              Send
            </Button>
            <Button
            color='black'
              variant="outlined"
              onClick={close}
              style={{
                width: '100px',
                borderRadius:'20px',
              }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SendLead;
