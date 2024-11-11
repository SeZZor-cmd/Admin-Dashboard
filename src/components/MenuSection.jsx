import React, { useState, useEffect } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import DashboardSVG from '../assets/DashboardSVG'; 
import EmployeesSVG from '../assets/EmployeesSVG'; 
import LeadsSVG from '../assets/LeadsSVG'; 
import ClientsSVG from '../assets/ClientsSVG'; 
import VendorsSVG from '../assets/VendorsSVG'; 
import FieldDataSVG from '../assets/FieldDataSVG';

function MenuSection({ panelType }) { // Accept `panelType` as a prop
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Define menu items for Admin, Employee, and Verifier based on `panelType`
  const adminMenuItems = [
    { text: 'Dashboard', icon: <DashboardSVG color={activeItem === 'Dashboard' ? 'black' : 'grey'} />, to: '/Admin/Dashboard' },
    { text: 'Employees', icon: <EmployeesSVG color={activeItem === 'Employees' ? 'black' : 'grey'} />, to: '/Admin/Employees' },
    { text: 'Leads', icon: <LeadsSVG color={activeItem === 'Leads' ? 'black' : 'grey'} />, to: '/Admin/Leads' },
    { text: 'Clients', icon: <ClientsSVG color={activeItem === 'Clients' ? 'black' : 'grey'} />, to: '/Admin/Clients' },  
    { text: 'Vendors', icon: <VendorsSVG color={activeItem === 'Vendors' ? 'black' : 'grey'} />, to: '/Admin/Vendors' },
    { text: 'Field data', icon:<FieldDataSVG color={activeItem === 'Field data' ? 'black' : 'grey'} />, to:'/Admin/Field'},
    { text: 'Questions', icon:<FieldDataSVG color={activeItem === 'Questions' ? 'black' : 'grey'} />, to:'/Admin/Questions'},
  ];

  const employeeMenuItems = [
    { text: 'Dashboard', icon: <DashboardSVG color={activeItem === 'Dashboard' ? 'black' : 'grey'} />, to: '/Employee/Dashboard' },
    { text: 'Leads', icon: <LeadsSVG color={activeItem === 'Leads' ? 'black' : 'grey'} />, to: '/Employee/Leads' },
    { text: 'Verifier Leads', icon: <ClientsSVG color={activeItem === 'Verifier Leads' ? 'black' : 'grey'} />, to: '/Employee/VerifierLeads' },
  ];

  const verifierMenuItems = [
    { text: 'Dashboard', icon: <DashboardSVG color={activeItem === 'Dashboard' ? 'black' : 'grey'} />, to: '/Verifier/Dashboard' },
    { text: 'Leads', icon: <LeadsSVG color={activeItem === 'Leads' ? 'black' : 'grey'} />, to: '/Verifier/Leads' },
    { text: 'Verified', icon: <ClientsSVG color={activeItem === 'Verified' ? 'black' : 'grey'} />, to: '/Verifier/Verified' },
  ];

  const clientMenuItems = [
    { text: 'Dashboard', icon: <DashboardSVG color={activeItem === 'Dashboard' ? 'black' : 'grey'} />, to: '/Client/Dashboard' },
    { text: 'Leads', icon: <LeadsSVG color={activeItem === 'Leads' ? 'black' : 'grey'} />, to: '/Client/Leads' }, 
  ];

  const vendorMenuItems = [
    { text: 'Dashboard', icon: <DashboardSVG color={activeItem === 'Dashboard' ? 'black' : 'grey'} />, to: '/Vendor/Dashboard' },
    { text: 'Leads', icon: <LeadsSVG color={activeItem === 'Leads' ? 'black' : 'grey'} />, to: '/Vendor/Leads' }, 
  ];

  // Choose menu items based on the `panelType`
  const menuItems = 
    panelType === 'Admin' ? adminMenuItems : 
    panelType === 'Employee' ? employeeMenuItems : 
    panelType === 'Verifier' ? verifierMenuItems:
    panelType === 'Client' ? clientMenuItems :
    vendorMenuItems ;

  // Update active item based on the current pathname
  useEffect(() => { 
    const pathToItemMap = menuItems.reduce((map, item) => {
      map[item.to] = item.text;
      return map;
    }, {});
    
    setActiveItem(pathToItemMap[location.pathname] || 'Dashboard');
  }, [location.pathname, menuItems]);

  const handleItemClick = (item, to) => {
    navigate(to);
  };

  return (
    <Box
      sx={{
        width: 240,
        height: '88vh',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        borderRadius: '8px',
        margin: '4px',
      }}
    >
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={() => handleItemClick(item.text, item.to)}
                sx={{
                  color: activeItem === item.text ? 'black' : 'grey',
                  '&:hover': {
                    backgroundColor: 'transparent',
          
                  },
                  height:'45px',
                }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            <Divider variant='middle' />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default MenuSection;
