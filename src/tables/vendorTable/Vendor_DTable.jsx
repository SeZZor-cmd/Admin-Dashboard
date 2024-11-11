import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Select, MenuItem, Button } from '@mui/material';
import VendorLeadsData from '../../data/vendorData/VendorLeadsData';

function Vendor_DTable() {
  // Initialize state with employee data
  const [leads, setLeads] = useState(VendorLeadsData);

  // Handle status change
  const handleStatusChange = (index, newAssign) => {
    const updatedLeads = [...leads];
    updatedLeads[index].assign = newAssign;
    setLeads(updatedLeads);
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
      <Box sx={{ padding: '16px', textAlign: 'center' }}>
        <Typography variant="h6" fontWeight="bold">
          All Leads
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer sx={{ height: '700px',width: '100%' }}>
        <Table stickyHeader  >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerCellStyle}>S no.</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Lead Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Contact Details</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Lead Information</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {VendorLeadsData.map((leadData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{leadData.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.leadname}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.contactdetails}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.leadinformation}</TableCell>
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

export default Vendor_DTable;
  