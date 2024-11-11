import React from 'react'
import { Box } from '@mui/material';

import ETable from '../../tables/adminTable/ETable';


function Employees() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>
      
      <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'hidden' }}>
            <ETable />          
      </Box>
    </Box>
  )
}

export default Employees