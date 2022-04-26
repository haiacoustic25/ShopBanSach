import { AppBar, Avatar, Box, Link, Toolbar } from '@material-ui/core';

export const Navbar = () => (
  <AppBar
    elevation={0}
    sx={{ backgroundColor: '#31cb8f' }}
  >
    <Toolbar
      disableGutters
      sx={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 64,
        px: 3,
        py: 1
      }}
    >
      <Box
        to="/"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img 
          src="//theme.hstatic.net/1000363117/1000606112/14/logo.png?v=2126"
          style={{height: "63px", "max-width": "100%"}}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Avatar
        alt="User"
        src="/static/user-chen_simmons.png"
      />
    </Toolbar>
  </AppBar>
);