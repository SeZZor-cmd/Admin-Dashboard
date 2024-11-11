import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Select, MenuItem, Button } from '@mui/material';
import EleadsData from '../../data/employeeData/ELeadsData';

function E_LTable() {
  // Initialize state with employee data
  const [leads, setLeads] = useState(EleadsData);

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
    <Paper elevation={1} sx={{ borderRadius: '5px', margin: '4px', overflow: 'hidden', width: '100%',height:'80%' }}>
      {/* Title on top */}
      <Box sx={{ padding: '16px', textAlign: 'center' }}>
        <Typography variant="h6" fontWeight="bold">
          All Leads
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer sx={{ height: '620px',width: '100%' }}>
        <Table stickyHeader  >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerCellStyle}>S no.</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Lead Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Client</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Employee</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Submit Progress</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Assign</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {EleadsData.map((leadData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{leadData.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.leadname}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.client}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.employee}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                <Select
                    value={leadData.submitprogress}
                    onChange={(e) => handleStatusChange(index, e.target.value)} // Update status on change
                  >
                    <MenuItem value="Assigned">Assigned</MenuItem>
                    <MenuItem value="Not Assigned">Not Assigned</MenuItem>
                    
                  </Select>
                </TableCell>
                <TableCell align="center" sx={cellStyle}>
                  <Select
                    value={leadData.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)} // Update status on change
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
    </Paper>
  );
}

export default E_LTable;
  