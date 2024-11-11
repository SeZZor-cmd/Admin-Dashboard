import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import dashboardData from '../../data/adminData/dashboardData';

function DTable() {
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
    <Paper
      elevation={1}
      sx={{
        borderRadius: '5px',
        margin: '10px',
        marginTop: '15px',
        
        overflow: 'hidden',
        width: '100%',
        maxWidth: '900px',
      }}
    >
      {/* Title on top */}
      <Box sx={{ padding: '16px', textAlign: 'center' }}>
        <Typography variant="h6" fontWeight="bold">
          Employees
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer
        sx={{
          height: '400px', // Fixed height for the table container
          overflowY: 'auto',  // Enables vertical scrolling
          "&::-webkit-scrollbar": {
            width: '8px',
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: '#f5f5f5',
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: '#888',
            borderRadius: '4px',
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: '#555',
          },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerCellStyle}>S no.</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Role</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Lead</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Status</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboardData.length > 0 && dashboardData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{employee.sNo}</TableCell>
                
                <TableCell align="center" sx={cellStyle}>{employee.name}</TableCell>
                <TableCell align="center" sx={cellStyle}>{employee.role}</TableCell>
                <TableCell align="center" sx={cellStyle}>{employee.lead}</TableCell>
                <TableCell align="center" sx={cellStyle}>{employee.status}</TableCell>
                <TableCell align="center" sx={cellStyle}>{employee.action}</TableCell>
              </TableRow>
            ))}
            {/* No row is rendered if there are no employees */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DTable;
