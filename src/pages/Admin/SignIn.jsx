"use client";
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

function SignIn() {
  const [isAdmin, setIsAdmin] = useState(false); // Default state set to Employee portal (false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdmin) {
      window.location.href = '/Admin/Dashboard'; // Redirect to Admin dashboard
    } else {
      window.location.href = '/Employee/Dashboard'; // Redirect to Employee dashboard
    }
  };

  const togglePanel = () => {
    setIsAdmin(!isAdmin); // Toggle between Admin and Employee panels
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100vw', 
        height: '100vh', 
        gap: '100px', 
        margin: '0 auto', 
        flexDirection: 'row', 
        bgcolor: '#f9f9f9'
      }}
    > 
      <Box
        component="img"
        src="/images/Rectangle.png"
        alt="Logo Image"
        sx={{ maxWidth: '100%', height: 'auto', mx: '0' }} 
      />
      
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 700, fontSize: '24px', mb: 0.5, textDecoration: 'underline' }}> 
          {isAdmin ? 'Admin Portal' : 'Employee Portal'}
        </Typography>
        <Typography sx={{ mb: 0.5, color: '#252B42', fontWeight: 700, fontSize: '40px' }}> 
          Login
        </Typography>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label={isAdmin ? 'User ID' : 'Employee ID'}
            variant="filled"
            fullWidth
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: '#f2f2f2', borderRadius: 1 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: '#f2f2f2', borderRadius: 1, marginTop: '5px' }}
          />

          <Box textAlign="right">
            <Link href="#" sx={{ fontSize: '0.875rem', color: 'black', textDecoration:'underline'}}>
              Forgot Password
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: 'black',
              '&:hover': {
                bgcolor: '#333',
              },
              borderRadius: 2,
              paddingY: 1.5,
              fontSize: '1rem',
              marginTop: '1rem',
            }}
          >
            Submit
          </Button>
        </form>

        <Typography textAlign="center" fontSize="0.875rem" mt={4}>
          Don’t have an account?{' '}
          <Link href="#"  sx={{ fontWeight: 'bold', color: 'black', textDecoration:'underline' }}>
            Need access
          </Link>
        </Typography>

        {/* Toggle between Admin and Employee */}
        <Button
          onClick={togglePanel}
          variant="text"
          sx={{ mt: 2, textDecoration: 'underline' }}
        >
          {isAdmin ? 'Switch to Employee Portal' : 'Switch to Admin Portal'}
        </Button>
      </Box>  
    </Box>
  );
}

export default SignIn;
