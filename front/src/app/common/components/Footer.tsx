import { Stack, Typography } from '@mui/material';
import Icons from '../theme/icons';

export default function Footer() {
    return (
        <footer>
            <Stack
                justifyContent="space-around"
                alignItems="center"
                gap="2rem"
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    background: '#8E24AA',
                    color: '#fff',
                    p: '3rem',
                }}>
                <Stack alignItems="center">
                    <Icons.EventAvailableRoundedIcon sx={{ fontSize: '5rem' }} />
                    <Typography variant="h4" fontWeight="bold">
                        EvenTo
                    </Typography>
                </Stack>

                <Stack gap="1rem" alignItems="center">
                    <Typography variant="h6">Siguenos en nuestras redes</Typography>
                    <Stack
                        direction="row"
                        gap="1rem"
                        sx={{ '& svg': { fontSize: '3rem' } }}>
                        <Icons.InstagramIcon />
                        <Icons.FacebookIcon />
                    </Stack>
                </Stack>
                <Stack sx={{ alignItems: { xs: 'center', md: 'start' } }}>
                    {/* Cambiar por links */}
                    <Typography>Faq</Typography>
                    <Typography>Sobre Nosotros</Typography>
                    <Typography>Términos y condiciones</Typography>
                </Stack>
            </Stack>
        </footer>
    );
}
