import React from 'react'
import { Box } from '@mui/material';
import E_LTable from '../../tables/employeeTable/E_LTable';


function ELeads() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>
      
     
        
        <Box sx={{ height: '100%',width:'100%', overflow: 'hidden' }}>
            <E_LTable />
          </Box>  
      </Box>
 
  )
}

export default ELeads