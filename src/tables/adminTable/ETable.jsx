import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Checkbox, Button, IconButton, Dialog } from '@mui/material';
import initialEmployees from '../../data/adminData/employeesData';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddEmployee from '../../pages/Admin/popup/AddEmployee';

function ETable() {
  // Initialize state with employee data
  const [employees, setEmployees] = useState(initialEmployees);

  // State to control the AddEmployee dialog
  const [open, setOpen] = useState(false);

  // Handle checkbox change for roles
  const handleRoleChange = (index, selectedRole) => {
    const updatedEmployees = [...employees];
    
    // Reset roles
    updatedEmployees[index].roles = {
      Lead: false,
      Verifier: false
    };
    
    // Set the selected role to true
    updatedEmployees[index].roles[selectedRole] = true;

    setEmployees(updatedEmployees); // Update state with new role values
  };

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
          List of Employees
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
              <TableCell align="center" sx={headerCellStyle}>Name</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Role</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Leads</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Email</TableCell>
              <TableCell align="center" sx={headerCellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => {
              // Default roles if undefined
              const roles = employee.roles || { Lead: false, Verifier: false };

              return (
                <TableRow key={employee.id}>
                  <TableCell align="center" sx={cellStyle}>{index + 1}</TableCell>
                  <TableCell align="center" sx={cellStyle}>{employee.name}</TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    <Box>
                      <Checkbox
                        checked={roles.Lead}
                        onChange={() => handleRoleChange(index, 'Lead')} // Toggle Lead checkbox
                      />
                      <Typography variant="body2" component="span">Lead</Typography>
                      <Checkbox
                        checked={roles.Verifier}
                        onChange={() => handleRoleChange(index, 'Verifier')} // Toggle Verifier checkbox
                      />
                      <Typography variant="body2" component="span">Verifier</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>{employee.leads}</TableCell>
                  <TableCell align="center" sx={cellStyle}>{employee.email}</TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    <Button color="primary">Edit</Button> | <Button color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* AddEmployee Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <AddEmployee open={open} onClose={handleClose} />
      </Dialog>
    </Paper>
  );
}

export default ETable;
