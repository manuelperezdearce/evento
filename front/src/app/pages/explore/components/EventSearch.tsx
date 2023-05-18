'use client';
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputAdornment,
    TextField,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';

export const EventSearch = () => {
    return (
        <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField
                label="Tipo de evento o nombre"
                placeholder="Fiesta electronica"
                fullWidth
                InputProps={{
                    sx: { borderRadius: 30 },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon color="primary" />
                        </InputAdornment>
                    ),
                }}
            />
            <FormControl
                fullWidth
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <FormControlLabel
                    control={<Checkbox checked={true} name="todopublico" />}
                    label="Todo público"
                />
                <FormControlLabel
                    control={<Checkbox checked={true} name="gratis" />}
                    label="Gratis"
                />
                <TextField
                    label="Ciudad"
                    placeholder="Buenos Aires"
                    InputProps={{
                        sx: { borderRadius: 30 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <PlaceRoundedIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Desde"
                    type="date"
                    InputProps={{
                        sx: { borderRadius: 30 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <TodayRoundedIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Hasta"
                    type="date"
                    InputProps={{
                        sx: { borderRadius: 30 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventRoundedIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
        </Box>
    );
};
