import { Box, Typography } from '@mui/material';
import Icons from '@/app/common/theme/icons';
export const Features = () => {
    const features = {
        address: {
            slug: 'Direccion',
            value: 'Círculo de Bellas Artes, Teatro Fernando de Rojas',
            icon: <Icons.PlaceRoundedIcon color="primary" />,
        },
        date: {
            slug: 'Fecha',
            value: '25 de mayo 2023',
            icon: <Icons.CalendarTodayRoundedIcon color="primary" />,
        },
        duration: {
            slug: 'Hora',
            value: '22hrs',
            icon: <Icons.AccessTimeFilledRoundedIcon color="primary" />,
        },
    };
    return (
        <Box>
            <Typography variant="h5" fontWeight={'600'}>
                Cuando y donde
                {Object.entries(features).map(([key, value]) => {
                    return (
                        <Box
                            key={key}
                            sx={{
                                display: {
                                    xs: 'block',
                                    sm: 'flex',
                                },
                            }}
                            alignItems={'center'}
                            marginTop={2}
                            marginBottom={2}>
                            <Box display={'flex'} alignItems={'center'}>
                                {value.icon}
                                <Typography
                                    variant="h6"
                                    fontWeight={'600'}
                                    marginLeft={2}>
                                    {value.slug}:
                                </Typography>
                            </Box>
                            <Typography
                                ml={2}
                                sx={{
                                    textAlign: {
                                        xs: 'right',
                                        sm: 'left',
                                    },
                                }}
                                variant="body1">
                                {value.value}
                            </Typography>
                        </Box>
                    );
                })}
            </Typography>
        </Box>
    );
};
