import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
} from '@mui/material';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

export const EventCard = () => {
    return (
        <Card
            sx={{
                borderRadius: '1rem',
                padding: '.8rem',
                width: '100%',
                cursor: 'pointer',
                '&:hover': { boxShadow: '3px 3px 7px #00000030' },
            }}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg"
                    sx={{ borderRadius: '1rem' }}
                />
                <Chip
                    icon={<PlaceRoundedIcon color="secondary" />}
                    label="Buenos Aires"
                    variant="outlined"
                    sx={{
                        position: 'absolute',
                        top: '77%',
                        right: '5%',
                        background: '#fff',
                    }}
                />
            </Box>
            <CardContent>
                <Stack gap=".5rem">
                    <Typography variant="h5" component="h2" fontWeight="bold">
                        Fiesta Electronica
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <StoreRoundedIcon color="primary" />
                        Tres Monos Bar
                    </Typography>
                    <Typography
                        variant="body1"
                        component="h4"
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <CalendarMonthRoundedIcon color="primary" />1 de Enero / 21:00 hrs
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};
