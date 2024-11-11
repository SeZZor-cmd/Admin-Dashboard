import React from 'react'
import { Box,Typography, IconButton } from '@mui/material';
import E_DTables from '../../tables/employeeTable/E_DTable';
import Edetails from '../../data/employeeData/Edetails';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function EDashboard() {
  return (
    <Box sx={{backgroundColor: '#F5F5F5'}}>
      <Box sx={{display:'flex', flexDirection:'column', gap:'5px'}}>
        <Box sx={{display:'flex', flexDirection:'row', gap:'5px'}}>
          <Box sx={{ position: 'relative', width: '1150px', height: '100px', mx: 0 }}>
            <Box
                component="img"
                src="/images/Dashboard_Image.jpg"
                alt="Dashboard Image"
                sx={{ width:'100%', height: '100%', objectFit:'cover', borderRadius:'15px'}} 
              />

            <Typography
                variant="h4"
                sx={{
                  overflow:'hidden',
                  display:'flex',
                  alignItems:'center', 
                  height:'82px',
                  width:'1100px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  background: '#000000A6', // Semi-transparent black background
                  padding: '10px 20px',    // Padding around the text
                  borderRadius: '15px',     // Optional: Rounded corners for the background
                }}
              >
                Dear Sumit,<br/> Welcome to CRM
            </Typography>
          </Box>
          <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center', width:'10%', height: '100px', objectFit:'cover', borderRadius:'15px',backgroundColor: 'white',border: '1px solid #ccc', flexDirection:'column' }}>
            <IconButton size="large" sx={{ color: 'red' }} >
              <AddCircleOutlineIcon sx={{ fontSize: 40 }}/>
            </IconButton>
            <Typography variant="caption" >
              Add new
            </Typography>
          </Box>
          
        </Box>
        
        <Box sx={{display:'flex', flexDirection: 'row', gap:'5px'}}>
        {Edetails.map((detail, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white',border: '1px solid #ccc',
              borderRadius: '8px',
              width:'630px',
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

        <Box sx={{ height: '355px', overflow: 'hidden' }}>
            <E_DTables />
        </Box>  

        
      </Box>
    </Box>
  )
}

export default EDashboard