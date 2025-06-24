import React from 'react';
import { Switch, Box, Typography } from '@mui/material';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function DarkModeToggle({ darkMode, onToggleDarkMode }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        width: 'auto',
        height: '30px',
        px: 1,
        py: 1,
        borderRadius: 8,
        backgroundColor: darkMode ? '#222' : '#e0e0e0',
        boxShadow: 1,
      }}
    >
      <BsSunFill size={18} color={darkMode ? '#ffc107' : '#333'} />
      
      <Switch
        checked={darkMode}
        onChange={onToggleDarkMode}
        color="default"
        inputProps={{ 'aria-label': 'Toggle dark mode' }}
        sx={{
            width:'50px',
          '& .MuiSwitch-thumb': {
            backgroundColor: darkMode ? '#fff' : '#000',
          },
          '& .MuiSwitch-track': {
            backgroundColor: darkMode ? '#555' : '#bbb',
          },
        }}
      />

      <BsMoonFill size={18} color={darkMode ? '#ddd' : '#444'} />
    </Box>
  );
}

export default DarkModeToggle;
