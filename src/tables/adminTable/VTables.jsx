import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Select, MenuItem, Button, IconButton } from '@mui/material';
import vendorsData from '../../data/adminData/vendorsData';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function VTable() {
  // Initialize state with employee data
  const [vendors, setVendors] = useState(vendorsData);

  // Handle status change
  const handleStatusChange = (index, newStatus) => {
    const updatedVendors = [...vendors];
    updatedVendors[index].status = newStatus;
    setVendors(updatedVendors);
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
    <Paper elevation={1} sx={{ borderRadius: '5px', margin: '5px', overflow: 'hidden', width: '100%' }}>
      {/* Title on top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', p: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', flexGrow: 1 }}>
          Vendors
        </Typography>
        <IconButton size="large" color="black" sx={{ position: 'absolute', right: 0 }} >
          <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Table */}
      <TableContainer sx={{ height: '700px',width: '100%' }}>
        <Table stickyHeader  >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerCellStyle}>S no.</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Email</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Lead</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Status</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendorsData.map((vendorData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{vendorData.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>{vendorData.name}</TableCell>
                <TableCell align="center" sx={cellStyle}>{vendorData.email}</TableCell>
                <TableCell align="center" sx={cellStyle}>{vendorData.lead}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Select
                  sx={{height: '30px'}}
                    value={vendorData.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)} // Update status on change
                  >
                    <MenuItem value="Progress">Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    
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
    </Paper>
  );
}

export default VTable;
  