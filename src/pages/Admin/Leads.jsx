import React from 'react'
import { Box } from '@mui/material';
import LTable from '../../tables/adminTable/LTables';

function Leads() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>

        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <LTable />
          </Box>  
      </Box>
 
  )
}

export default Leads