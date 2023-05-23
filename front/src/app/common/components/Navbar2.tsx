"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";

const pages = [
  // { name: 'Home', route: '/' },
  { name: 'Explorar', route: 'pages/explore' },
  // { name: 'Nosotros', route: 'pages/about' },
];
const settings = [
  { name: "Perfil", route: "pages/users" },
  { name: "Logout", route: "pages/auth" },
];

const LoginOrRegister = [
  { name: "ingresar", route: "pages/ingresar" },
  { name: "registrarse", route: "pages/registro" }
]

const navSections = [
  { title: 'logo div', display: ['block', 'block'], buttons: ['logo'] },
  { title: 'explorar div', display: ['flex', 'block'], buttons: ['explorar', '¿Qué hacer hoy?'] },
  { title: 'ingresar div', display: ['flex', 'block'], buttons: ['ingresar', 'registrarse'] },
  { title: 'user div', display: ['block', 'none'], buttons: ['foto'] }

]




export const Navbar2 = () => {
  const [login, setLogin] = useState<boolean>(false)
  const [domLoaded, setDomLoaded] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Button variant="outlined" color="secondary" onClick={() => setLogin(true)}>Ingresar</Button>
        <Button variant="outlined" color="secondary" onClick={() => setLogin(false)}>Desconectar</Button>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between'
          }}>
          {navSections.map((item) => {
            return (
              <Box sx={{
                display: `${login ? item.display[0] : item.display[1]}`
              }}> {item.buttons.map((button) => {
                return (
                  <Link sx={{ color: '#fff' }}>
                    {button}
                  </Link>
                )
              })}</Box>
            )
          })}







          {/* <Link href={'/'} style={{ display: 'flex', color: '#fff' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              LOGO EvenTo
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ name, route }) => (
                <Link href={route || ''} key={'name'}>
                  <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {LoginOrRegister.map((item) => {
                return (
                  <Link
                    // href={item.route}
                    onClick={() => setLogin(true)} sx={{
                      display: `${login ? "none" : "block"}`
                    }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'primary', display: 'block' }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              })}

            </Menu>
          </Box>


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EvenTo
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, route }) => (
              <Link href={route || ''}>
                <Button
                  key={name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {name}
                </Button>
              </Link>
            ))}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              ¿Qué hacer hoy?
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: "flex" } }} >
              {LoginOrRegister.map((item) => {
                return (
                  <Link
                    // href={item.route}
                    onClick={() => setLogin(true)} sx={{
                      display: `${login ? "none" : "block"}`
                    }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </Box>


            <Box sx={{
              display: `${login ? 'block' : 'none'}`
            }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: "0 0 0 8px" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
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
                {settings.map(({ name, route }) => (
                  <Link href={`${name !== 'Perfil' ? route : `${route}/1`}`}>
                    <MenuItem key={route} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar >
  );
};
