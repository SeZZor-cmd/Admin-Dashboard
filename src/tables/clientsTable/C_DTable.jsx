import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Select, MenuItem, Button } from '@mui/material';
import CDashboardTableData from '../../data/clientData/CDashboardTableData';

function C_DTable() {

  // Initialize state with employee data
  const [leads, setLeads] = useState(CDashboardTableData);

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
          Leads
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
              <TableCell align="center" sx={headerCellStyle}>Employee</TableCell>
             
              <TableCell align="center" sx={headerCellStyle}>Status</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((Data, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{Data.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>{Data.leadname}</TableCell>
                <TableCell align="center" sx={cellStyle}>{Data.contactdetail}</TableCell>
                <TableCell align="center" sx={cellStyle}>{Data.employee}</TableCell>
                
                <TableCell align="center" sx={cellStyle}>
                <Button color="black" sx={{border:1}} disabled>{Data.status}</Button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default C_DTable