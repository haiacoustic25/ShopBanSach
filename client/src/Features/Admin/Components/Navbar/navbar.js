import { AppBar, Avatar, Box, Toolbar } from '@material-ui/core';
import logo from '../../../../Assets/Img/Admin.png'


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
          alt=""
          style={{height: "63px", "maxWidth": "100%"}}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Avatar
        alt="Admin"
        src={logo}
      />
    </Toolbar>
  </AppBar>
);
