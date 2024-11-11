import React from 'react'
import { Box } from '@mui/material';
import V_VTable from '../../tables/verifierTable/V_VTable';

function VVerified() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>

        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <V_VTable />
          </Box>  
      </Box>
  )
}

export default VVerified