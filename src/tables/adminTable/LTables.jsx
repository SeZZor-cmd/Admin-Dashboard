import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Box, Typography, Select, MenuItem, Button, IconButton, Checkbox, Dialog
} from '@mui/material';
import leadsData from '../../data/adminData/leadsData';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import AddLeads from '../../pages/Admin/popup/AddLeads';

function LTable() {
  const [leads, setLeads] = useState(leadsData);
  const [open, setOpen] = useState(false); // Add state for dialog

  // Handle status change
  const handleStatusChange = (index, newAssign) => {
    const updatedLeads = [...leads];
    updatedLeads[index].assign = newAssign;
    setLeads(updatedLeads);
  };

  // Open the AddLeads dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the AddLeads dialog
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
        <Typography sx={{ position: 'absolute', left: 0 }}>
          <Checkbox /> Select All
        </Typography>

        <Select defaultValue="Created by" sx={{ position: 'absolute', left: 140, height: '30px' }}>
          <MenuItem value="Created by">Created by</MenuItem>
          <MenuItem value="Option1">Option 1</MenuItem>
          <MenuItem value="Option2">Option 2</MenuItem>
        </Select>

        <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', flexGrow: 1 }}>
          All Leads
        </Typography>
        <IconButton size="large" color="black" sx={{ position: 'absolute', right: 35 }}>
          <UploadIcon fontSize="inherit" />
        </IconButton>
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
              <TableCell align="center" sx={headerCellStyle}>Lead Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Vendor</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Employee</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Progress</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Assign</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((leadData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{leadData.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Checkbox />{leadData.leadname}
                </TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.vendor}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.employee}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Button sx={{ color: 'black', textDecoration: 'underline' }}>
                    {leadData.progress}
                  </Button>
                </TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Select
                    value={leadData.assign}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    sx={{height: '30px'}}
                  >
                    <MenuItem value="Assigned">Assigned</MenuItem>
                    <MenuItem value="Not Assigned">Not Assigned</MenuItem>
                  </Select>
                </TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Button color="primary">Edit</Button> | <Button color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* AddLeads Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <AddLeads open={open} close={handleClose} />
      </Dialog>

      {/* Download Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: 'black',
          '&:hover': {
            bgcolor: '#333',
          },
          borderRadius: 1,
          fontSize: '1rem',
          marginTop: '3rem',
          position: 'fixed',
          bottom: 20,
          right: 30,
        }}
      >
        <DownloadIcon /> Download
      </Button>
    </Paper>
  );
}

export default LTable;
