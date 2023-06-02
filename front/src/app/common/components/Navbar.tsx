'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '@/app/store/slices/IsLogedSlice';
import Icons from '../theme/icons';
import { RootState } from '@/app/store/store';

const onlyPublicPages = [
    { name: 'Home', route: '/' },
    { name: 'Explorar', route: 'explore' },
    { name: 'Nosotros', route: 'about' },
];

const userPages = [
    { name: 'Crear Evento', route: 'createEvent', private: true },
    { name: 'Ingresar', route: 'login', publicOnly: true },
    { name: 'Registrarse', route: 'register', publicOnly: true },
    { name: 'Perfil', route: 'profile', private: true },
];

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(toggleLogin());
    };

    const { isLoged }: { isLoged: boolean } = useSelector(
        (state: RootState) => state.isLoged
    );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <Link
                        href={'/'}
                        style={{ display: 'flex', color: '#fff', alignItems: 'center' }}>
                        <Icons.EventAvailableRoundedIcon
                            sx={{ display: 'flex', mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}>
                            EvenTo
                        </Typography>
                    </Link>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                            {onlyPublicPages.map(({ name, route }) => (
                                <Link
                                    href={route || ''}
                                    key={name}
                                    onClick={handleCloseNavMenu}>
                                    <MenuItem>
                                        <Typography textAlign="center">{name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                            {userPages.map((item) => {
                                if (item.private && !isLoged) return null;
                                if (item.publicOnly && isLoged) return null;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.route}
                                        onClick={handleCloseNavMenu}>
                                        <Button
                                            sx={{
                                                my: 2,
                                                color: 'primary',
                                                display: 'block',
                                            }}>
                                            {item.name}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {onlyPublicPages.map(({ name, route }) => (
                            <Link key={name} href={route || ''}>
                                <Button
                                    // onClick={handleCloseNavMenu}
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

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
                            {userPages.map((item) => {
                                if (item.private && !isLoged) return null;
                                if (item.publicOnly && isLoged) return null;
                                return (
                                    <Link key={item.name} href={item.route}>
                                        <Button
                                            sx={{
                                                my: 2,
                                                color: 'white',
                                                display: 'block',
                                            }}>
                                            {item.name}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Box>
                        {isLoged && (
                            <Button
                                onClick={handleLogin}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}>
                                Log out
                            </Button>
                        )}
                        <Button
                            sx={{ color: 'white', display: { xs: 'none', md: 'block' } }}
                            onClick={handleLogin}>
                            {isLoged ? 'MLogout' : 'MLogin'}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
