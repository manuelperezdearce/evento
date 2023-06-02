'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '@/app/store/slices/IsLogedSlice';

const pages = [
    { name: 'Home', route: '/' },
    { name: 'Explorar', route: 'explore' },
    { name: 'Nosotros', route: 'about' },
    { name: 'Crear Evento', route: 'createEvent' },
];
const settings = [
    { name: 'Perfil', route: 'users' },
    { name: 'Logout', route: 'auth' },
];

const LoginOrRegister = [
    { name: 'ingresar', route: 'login' },
    { name: 'registrarse', route: 'register' },
];

export const Navbar = () => {
    // const [login, setLogin] = useState<boolean>(false);
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

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(toggleLogin());
    };

    const { isLoged } = useSelector((state) => state.isLoged);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        justifyContent: 'space-between',
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <button onClick={handleLogin}>
                            {isLoged ? 'Logout' : 'Login'}
                        </button>
                    </Box>

                    <Link href={'/'} style={{ display: 'flex', color: '#fff' }}>
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
                            }}>
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
                            color="inherit">
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
                            }}>
                            {pages.map(({ name, route }) => (
                                <Link href={route || ''} key={'name'}>
                                    <MenuItem key={name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                            {!isLoged
                                ? LoginOrRegister.map((item) => {
                                      return (
                                          <Link href={item.route}>
                                              <Button
                                                  onClick={handleCloseNavMenu}
                                                  sx={{
                                                      my: 2,
                                                      color: 'primary',
                                                      display: 'block',
                                                  }}>
                                                  {item.name}
                                              </Button>
                                          </Link>
                                      );
                                  })
                                : null}
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
                        }}>
                        EvenTo
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(({ name, route }) => (
                            <Link href={route || ''}>
                                <Button
                                    key={name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {name}
                                </Button>
                            </Link>
                        ))}
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            ¿Qué hacer hoy?
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            {!isLoged
                                ? LoginOrRegister.map((item) => {
                                      return (
                                          <Link href={item.route}>
                                              <Button
                                                  onClick={handleCloseNavMenu}
                                                  sx={{
                                                      my: 2,
                                                      color: 'white',
                                                      display: 'block',
                                                  }}>
                                                  {item.name}
                                              </Button>
                                          </Link>
                                      );
                                  })
                                : null}
                        </Box>

                        <Box
                            sx={{
                                display: `${isLoged ? 'block' : 'none'}`,
                            }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: '0 0 0 8px' }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
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
                                onClose={handleCloseUserMenu}>
                                {settings.map(({ name, route }) => (
                                    <Link
                                        href={`${
                                            name !== 'Perfil' ? route : `/profile`
                                        }`}>
                                        <MenuItem
                                            key={route}
                                            onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">
                                                {name}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
