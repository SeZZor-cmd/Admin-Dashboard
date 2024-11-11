import React, {useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button, IconButton } from '@mui/material';
import CLeadsData from '../../data/clientData/CLeadsData';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function C_LTable() {

  const [leads, setLeads] = useState(CLeadsData);

  const handleDeleteField = (leadIndex, fieldIndex) => {
    const updatedLeads = [...leads];
    updatedLeads[leadIndex].fields.splice(fieldIndex, 1); // Remove the field from the array
    setClients(updatedLeads); // Update the state
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
          All Clients
        </Typography>
        <IconButton size="large" color="black" sx={{ position: 'absolute', right: 0 }}>
          <AddCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </Box>

      {/* Table */}
      <TableContainer sx={{ height: '700px',width: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={headerCellStyle}>S no.</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Client Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Submitter Leads</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Successful Leads</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Contact Info</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Status</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {CLeadsData.map((leadData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{leadData.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  {leadData.clientName}
                  
                </TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.submittedleads}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.successfulleads}</TableCell>
                <TableCell align="center" sx={cellStyle}>{leadData.contactinfo}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                <Button color="black" sx={{border:1}} disabled>{leadData.status}</Button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default C_LTable