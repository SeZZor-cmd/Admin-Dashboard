import React from 'react'
import { Box } from '@mui/material';
import V_LTable from '../../tables/verifierTable/V_LTable';

function VLeads() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>

        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <V_LTable />
          </Box>  
      </Box>
  )
}

export default VLeads