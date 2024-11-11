import React, { useState } from 'react';
import { Box, Typography, TextField, Link, Button, Divider, Alert } from '@mui/material';

function SignInForm({ panelType, redirectUrl }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset any previous error

    if (!userId || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Static login for testing purposes
    if (userId === 'admin@gmail.com' && password === 'Admin@123') {
      window.location.href = redirectUrl; // Redirect on successful login
    } else {
      setError('Invalid credentials, please try again.');
    }
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

      <Divider orientation="vertical" variant="middle" flexItem sx={{ borderRightWidth: 2, height: '300px', justifySelf: 'center', alignSelf: 'center' }} />

      <Box 
        sx={{ 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: '30px', mb: 0.5, textDecoration: 'underline', textDecorationThickness: '5px' }}> 
          {panelType} Portal
        </Typography>
        <Typography sx={{ mb: 0.5, color: '#252B42', fontWeight: 500, fontSize: '24px', marginBottom: '50px' }}> 
          Login
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleSubmit} className="space-y-4" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            label={panelType === 'Admin' ? 'User ID' : 'Employee ID'}
            variant="filled"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: '#f2f2f2', borderRadius: 1, width: '450px' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ disableUnderline: true }}
            sx={{ bgcolor: '#f2f2f2', borderRadius: 1, marginTop: '5px', width: '450px' }}
          />

          {panelType !== 'Admin' && (
            <Box textAlign="right" sx={{ width: '450px', mt: '5px' }}>
              <Link href="#" sx={{ fontSize: '0.875rem', color: 'black', textDecoration: 'underline' }}>
                Forgot Password
              </Link>
            </Box>
          )}

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: 'black',
              '&:hover': {
                bgcolor: '#333',
              },
              borderRadius: 4,
              paddingY: 1.5,
              fontSize: '1rem',
              marginTop: '3rem',
              width: '224px'
            }}
          >
            Submit
          </Button>
        </form>

        {panelType !== 'Admin' && (
          <Typography textAlign="center" fontSize="0.875rem" mt={4}>
            Don’t have an account?{' '}
            <Link href="#" sx={{ fontWeight: 'bold', color: 'black', textDecoration: 'underline' }}>
              Need access
            </Link>
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default SignInForm;
