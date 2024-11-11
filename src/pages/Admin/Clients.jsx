import React from 'react'
import { Box } from '@mui/material';
import CTable from '../../tables/adminTable/CTables';

function Clients() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5',display:'flex'}}>  
        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <CTable />
          </Box>  
      </Box>
 
  )
}

export default Clients