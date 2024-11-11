import React from 'react';
import { Box } from '@mui/material';
import HeaderSection from './HeaderSection';
import MenuSection from './MenuSection';
import { Outlet } from 'react-router-dom';

function Layout({ panelType }) {
  return (
    <Box sx={{ backgroundColor: '#F5F5F5' }}>
      <Box>
        <HeaderSection />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          {/* Pass the panelType to MenuSection */}
          <MenuSection panelType={panelType} /> 
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Outlet /> {/* This renders the nested route */}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
