import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { logout } from '../auth';

function Footer() {
  return (
    <Box p={4} borderTop="1px solid white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Button variant="outlined" color="primary" onClick={logout}>
        Log Out
      </Button>
      <Typography mt={2}>Made with ❤️&nbsp; by Nick Firme.</Typography>
    </Box>
  );
}

export default Footer;
