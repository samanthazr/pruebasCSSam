import * as React from 'react';
import GetawaysLogo from './GetawaysLogo/GetawaysLogo.png';

// import { NavLink,
  // useNavigate
// } from 'react-router-dom';
import {
  AppBar, Container, Box, Typography,
  Button, IconButton, Menu, MenuItem
} from '@mui/material';

import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['Login',
  // 'Sign up'
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    //CustomAppBar
    <AppBar sx={{ backgroundColor: "#3C1C91"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* logo large */}
          <Typography
            variant="h6" component="a" noWrap href="/"
            sx={{
              mr: 2, flexGrow: 8,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img src={GetawaysLogo} style={{height:'36px'}} className="logo" alt="Getaways logo" />
          </Typography>

          {/* logo xs */}
          <Typography
            variant="h5" component="a" noWrap  href="/"
            sx={{
              mr: 2,
              flexGrow: 8,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <img src={GetawaysLogo} style={{height:'32px'}} className="logo" alt="Getaways logo" />
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                  mt: '55px'
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <NavLink to={`/${page}`} className="nav-link active text-white" aria-current="page"> */}
                    <Typography textAlign="center"
                      // href='{`/${page}`}'
                    >{page}</Typography>
                  {/* </NavLink> */}
                  </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',
                fontWeight: 'bold', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"
                // src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '52px' }}
              id= "menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
);
}
const routes = [];
routes.push({
    to: '/login',
    id: 'login',
    text: 'Iniciar sesión',
    publicOnly: true,
    private: false,
  });
export default NavBar;