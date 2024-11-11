import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Box, Typography, Select, MenuItem, Button, IconButton, Checkbox, Dialog
} from '@mui/material';
import questionData from '../../data/adminData/questionData';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddQuestion from '../../pages/Admin/popup/AddQuestion';

function QTable() {
  const [questions, setQuestions] = useState(questionData);
  const [open, setOpen] = useState(false); // Add state for dialog

  // Handle status change
  const handleStatusChange = (index, newAssign) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].assign = newAssign;
    setLeads(updatedQuestions);
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
              

        <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', flexGrow: 1 }}>
          Questions
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
              <TableCell align="center" sx={headerCellStyle}>Title</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((questionData, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={cellStyle}>{questionData.sno}</TableCell>
                
                <TableCell align="center" sx={cellStyle}>{questionData.title}</TableCell>
            
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
        <AddQuestion open={open} close={handleClose} />
      </Dialog>
    </Paper>
  );
}

export default QTable;
