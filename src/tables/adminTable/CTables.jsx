import React, {useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import clientsData from '../../data/adminData/clientsData';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CTable() {

  const [clients, setClients] = useState(clientsData);

  const handleDeleteField = (clientIndex, fieldIndex) => {
    const updatedClients = [...clients];
    updatedClients[clientIndex].fields.splice(fieldIndex, 1); // Remove the field from the array
    setClients(updatedClients); // Update the state
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
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientsData.map((clientData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{clientData.sNo}</TableCell>
                <TableCell align="center" sx={cellStyle}>
                  {clientData.clientName}
                  <Tooltip title="More info">
                    <InfoOutlinedIcon fontSize="small" sx={{ ml: 1, cursor: 'pointer' }} />
                  </Tooltip>
                </TableCell>
                <TableCell align="center" sx={cellStyle}>{clientData.submittedleads}</TableCell>
                <TableCell align="center" sx={cellStyle}>{clientData.successfulleads}</TableCell>
                <TableCell align="center" sx={cellStyle}>{clientData.contactinfo}</TableCell>
                <TableCell align="center" sx={cellStyle}>{clientData.status}</TableCell>
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

export default CTable;
  