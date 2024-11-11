import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, IconButton, Button, Box, TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddField({ open, close }) {

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
        Add new field
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
          <Box display="flex" justifyContent="center" marginBottom="16px">
            <TextField 
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue="Write here..."
              fullWidth
            />
          </Box>

          <Box display="flex" justifyContent="center" gap="16px">
            <Button
              type="submit"
              variant="outlined"
              style={{
                borderColor: '#AC1218',
                color: '#AC1218',
                width: '100px',
                borderRadius: '20px',
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              onClick={close}
              style={{
                backgroundColor: '#AC1218',
                width: '100px',
                borderRadius: '20px',
                
                color: 'white',
              }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddField;
