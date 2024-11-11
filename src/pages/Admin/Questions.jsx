import React from 'react';
import { Box } from '@mui/material';
import QTable from '../../tables/adminTable/QTable';

function Questions() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5', display:'flex'}}>

        <Box sx={{ marginTop: '5px', height: '100%',width:'100%', overflow: 'auto' }}>
            <QTable />
          </Box>  
      </Box>
  )
}

export default Questions