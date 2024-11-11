import React, { useState } from 'react';
import fieldData from '../../data/adminData/fieldData';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddField from '../../pages/Admin/popup/AddField';

function FTable() {
  // Initialize state with field data
  const [fields, setFields] = useState(fieldData);

  // State to control the AddField dialog
  const [open, setOpen] = useState(false);

  // Open the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const headerCellStyle = {
    backgroundColor: '#f5f5f5',
    color: 'black',
    fontWeight: 'bold',
    borderRight: '1px solid #DFDFDF',
  };

  const cellStyle = {
    padding: '4px 8px',
    borderRight: '1px solid #DFDFDF', // Add vertical line to body cells
  };

  return (
    <Paper elevation={1} sx={{ borderRadius: '5px', margin: '5px', overflow: 'hidden', width: '100%', height: '675px' }}>
      {/* Title on top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', p: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', flexGrow: 1 }}>
          Field Data
        </Typography>
        <IconButton size="large" color="black" sx={{ position: 'absolute', right: 0 }} onClick={handleOpen}>
          <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Table */}
      <TableContainer sx={{ height: '700px', width: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerCellStyle}>S no.</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Field</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.sno}>
                <TableCell align="center" sx={cellStyle}>{index + 1}</TableCell>
                <TableCell align="center" sx={cellStyle}>{field.fields}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Button color="primary">Edit</Button> | <Button color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* AddField Dialog */}
      <AddField open={open} close={handleClose} />
    </Paper>
  );
}

export default FTable;
