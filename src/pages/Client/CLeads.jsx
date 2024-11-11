import React from 'react'
import { Box } from '@mui/material';
import C_LTable from '../../tables/clientsTable/C_LTable';

function CLeads() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5',display:'flex'}}>  
        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <C_LTable />
          </Box>  
      </Box>
  )
}

export default CLeads