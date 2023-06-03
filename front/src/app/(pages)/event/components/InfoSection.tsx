import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Chip,
    CardMedia,
    Stack,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import Icons from '@/app/common/theme/icons';

export const InfoSection = ({ id }: { id: number }) => {
    return (
        <Box
            sx={{
                display: {
                    xs: 'block',
                    md: 'flex',
                },
                marginBottom: '1rem',
                gap: '2rem',
            }}>
            <Box>
                <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                    Fiesta electronica #{id}
                </Typography>
                <Stack gap="1rem">
                    <Stack direction="row" alignItems="center" gap="1rem">
                        <Avatar sx={{ bgcolor: red[500] }}>R</Avatar>
                        <Typography>Organizador</Typography>
                    </Stack>
                    <Stack direction="row">
                        <IconButton aria-label="Whatsapp">
                            <Link target="_blank" href={'https://www.instagram.com/'}>
                                <Icons.WhatsAppIcon color="primary" />
                            </Link>
                        </IconButton>
                        <IconButton aria-label="Facebook">
                            <Link target="_blank" href={'https://www.instagram.com/'}>
                                <Icons.FacebookRoundedIcon color="primary" />
                            </Link>
                        </IconButton>
                        <IconButton aria-label="Instagram">
                            <Link target="_blank" href={'https://www.instagram.com/'}>
                                <Icons.InstagramIcon color="primary" />
                            </Link>
                        </IconButton>
                    </Stack>
                </Stack>

                <Box sx={{ mt: 3, gap: '1.2rem', display: 'flex', flexWrap: 'wrap' }}>
                    <Chip
                        icon={<Icons.PlaceRoundedIcon />}
                        label="Buenos Aires"
                        color="primary"
                    />
                    <Chip
                        icon={<Icons.AttachMoneyIcon />}
                        label="Entrada: $500"
                        color="primary"
                    />
                </Box>
                <Box sx={{ mt: 3, mb: 3 }}>
                    <Typography>
                        ¡No te pierdas nuestro increíble evento en Buenos Aires! Una
                        experiencia única con un tema emocionante, ubicación excepcional,
                        programa diverso, gastronomía excepcional y promociones
                        exclusivas. ¡Únete a nosotros para vivir momentos inolvidables y
                        descubrir la magia de nuestro evento!
                    </Typography>
                </Box>
            </Box>
            <CardMedia
                component="img"
                alt="Evento"
                // height="350"
                image="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg"
                sx={{
                    borderRadius: '1rem',
                    minWidth: '40%',
                    height: { xs: '200px', sm: '350px' },
                }}
            />
        </Box>
    );
};
