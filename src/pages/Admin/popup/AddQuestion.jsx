import React, { useState } from 'react';  
import {
  Dialog, DialogTitle, DialogContent, IconButton, TextField, Button, Typography, Box, Select, MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function AddQuestion({ open, close }) {
  // State for form fields
  const [personalInfo, setPersonalInfo] = useState('');
  const [formOpen, setFormOpen] = useState(false); // To manage the SendLead dialog
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormOpen(true); // Open the SendLead dialog after submission
  };


  return (
    <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: 'center' }}>
        Add Questions
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
              
              <tr>
              <td style={{ padding: '8px' }}>
                  <TextField label="Add your question title." fullWidth variant="outlined" required />
                </td>
                <td>
                <Select
                      value={category}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      displayEmpty
                    >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Text</MenuItem>
                  <MenuItem value={20}>Number</MenuItem>
                </Select>
                </td>
               
              </tr>

              
              <tr>
              <td style={{ padding: '8px' }}>
                  <TextField label="Add your question title." fullWidth variant="outlined" required />
                </td>
                <td>
                <Select
                      value={category}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      displayEmpty
                    >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Text</MenuItem>
                  <MenuItem value={20}>Number</MenuItem>
                </Select>
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
    
    </Dialog>
  );
}

export default AddQuestion;
