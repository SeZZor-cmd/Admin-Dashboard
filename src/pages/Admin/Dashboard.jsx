import React from 'react'
import { Box,Typography } from '@mui/material';

import DTable from '../../tables/adminTable/DTable';
import details from '../../data/adminData/details';

function Dashboard() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5'}}>
      <Box sx={{display:'flex'}}>
        <Box>
          <Box sx={{ position: 'relative', width: '873px', height: '295px', mx: 0 }}>
          <Box
              component="img"
              src="/images/Dashboard_Image.jpg"
              alt="Dashboard Image"
              sx={{ width:'100%', height: '100%', objectFit:'cover', borderRadius:'5px',margin: '8px' }} 
            />

          <Typography
              variant="h4"
              sx={{
                overflow:'hidden',
                display:'flex',
                alignItems:'center',
                margin:'8px',
                height:'277px',
                width:'835px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                background: '#000000A6', // Semi-transparent black background
                padding: '10px 20px',    // Padding around the text
                borderRadius: '5px',     // Optional: Rounded corners for the background
              }}
            >
              Dear Admin,<br/> Welcome to CRM
            </Typography>
          </Box>
          <Box sx={{ marginTop: '5px', height: '392px', overflow: 'auto'}}>
            <DTable />
          </Box>  
        </Box>
        <Box sx={{display:'flex', flexDirection: 'column'}}>
        {details.map((detail, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white',border: '1px solid #ccc',
              borderRadius: '8px',
              margin: '4px', 
              marginLeft:'15px',
              width:'380px',
              height:'220px',
              textAlign:'center',
              justifyContent:'center',
              overflow:'hidden',
              position:'relative',
              }}>
              <Typography variant="h1" fontWeight="bold">{detail.total}</Typography>
              <Typography variant="h6" fontWeight="bold">{detail.category}</Typography>
              <Typography variant="caption" 
                sx={{  
                  bottom: '8px', 
                  right: '8px', 
                  cursor: 'pointer',
                  fontWeight: 'bold' ,
                  textDecoration:'underline',
                  position:'absolute'
                }}
              >
                View all
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard