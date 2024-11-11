import React from 'react'
import { Box } from '@mui/material';
import VTable from '../../tables/adminTable/VTables';

function Vendors() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5',display:'flex'}}>
     
       
        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <VTable />
          </Box>  
      </Box>
   
  )
}

export default Vendors