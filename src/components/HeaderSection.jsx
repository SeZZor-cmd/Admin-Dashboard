import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationsOutlined } from '@mui/icons-material';
import { Avatar, IconButton, Box, Menu, MenuItem, Divider, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import notifications from "../data/adminData/notifications";

function HeaderSection() {
  const [anchorEl, setAnchorEl] = useState(null); // State for user dropdown menu
  const [notificationEl, setNotificationEl] = useState(null); // State for notification dropdown menu
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element for the user menu
  };

  const handleNotificationClick = (event) => {
    setNotificationEl(event.currentTarget); // Set the anchor element for notifications menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the user menu
    setNotificationEl(null); // Close the notifications menu
  };

  const handleLogout = () => {
    handleClose(); // Close the menu
    navigate(-1); // Navigate back in history
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '70px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px', margin:'4px' }}>

      <Box
        component="img"
        src="/images/Rectangle_Logo.png"
        alt="Logo Image"
        sx={{ maxWidth: '100%', height: '90%', alignSelf: 'flex-start', borderRadius: '4px', margin:'5px' }}
      />

      {/* Right Section: Notification Bell, Avatar, Dropdown */}
      <Box sx={{ display: 'flex', alignItems: 'center', margin:'5px' }}>
        {/* Notification Icon */}
        <IconButton onClick={handleNotificationClick} aria-label="notifications">
          <NotificationsOutlined />
        </IconButton>

        {/* Notifications Dropdown Menu */}
        <Menu
          anchorEl={notificationEl}
          open={Boolean(notificationEl)}
          onClose={handleClose}
          sx={{ mt: '10px' }} // Adjusts menu position
        >
          {notifications.map((notification, index) => (
            <React.Fragment key={index}>
              <MenuItem onClick={handleClose}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1">{notification.from}</Typography>
                  <Typography variant="body2">{notification.message}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {notification.date} | {notification.time}
                  </Typography>
                </Box>
              </MenuItem>
              {index < notifications.length - 1 && <Divider />} {/* Add Divider between notifications */}
            </React.Fragment>
          ))}
        </Menu>

        {/* User Avatar and Dropdown Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '5px' }}>
          <Avatar alt="User" src="/images/User.png" />
          <IconButton onClick={handleMenuClick} aria-label="user menu">
            <KeyboardArrowDownIcon />
          </IconButton>

          {/* User Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ mt: '10px' }} // Adjusts menu position
          >
            <MenuItem onClick={handleClose} sx={{ width: '150px' }}>Profile</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ width: '150px' }}>Settings</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout} sx={{ width: '150px' }}>Logout</MenuItem> {/* Updated Logout */}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderSection;
