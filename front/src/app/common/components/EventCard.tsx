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
import Link from 'next/link';

export const EventCard = () => {
  return (
    <Link href={'/pages/event/1'}>
      <Card
        sx={{
          borderRadius: '1rem',
          padding: '.45rem',
          width: '100%',
          cursor: 'pointer',
          '&:hover': { boxShadow: '3px 3px 7px #00000030' },
        }}
      >
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
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontSize: '1.1rem' }}
              fontWeight="bold"
            >
              Fiesta Electronica
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
                gap: '.2rem',
              }}
            >
              <StoreRoundedIcon color="primary" />
              Tres Monos Bar
            </Typography>
            <Typography
              variant="body1"
              component="h4"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
                gap: '.3rem',
              }}
            >
              <CalendarMonthRoundedIcon color="primary" />1 de Enero / 21:00 hrs
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};
