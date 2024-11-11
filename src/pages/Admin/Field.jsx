import React from 'react'
import { Box } from '@mui/material';
import FTable from '../../tables/adminTable/FTable';

function Field() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>
      
      <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <FTable />          
      </Box>
    </Box>
  )
}

export default Field