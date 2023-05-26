'use client';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    TextField,
    MenuItem,
} from '@mui/material';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import CategoryIcon from '@mui/icons-material/Category';

export const SearchFilters = () => {
    const categories = [
        { label: 'Elegir Categoria', value: '' },
        { label: 'Cat 1', value: 'cat 1' },
    ];

    return (
        <FormControl
            fullWidth
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                gap: '2rem',
            }}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="free"
                            value={true}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                        />
                    }
                    label="Gratis"
                />
            </FormGroup>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="onlyAdults"
                            value={true}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                        />
                    }
                    label="Solo adultos"
                />
            </FormGroup>

            <TextField
                name="category"
                label="Categoria"
                value={''}
                fullWidth
                select
                InputProps={{
                    placeholder: 'Concierto',
                    sx: { borderRadius: 30 },
                    startAdornment: (
                        <InputAdornment position="start">
                            <CategoryIcon color="primary" />
                        </InputAdornment>
                    ),
                }}>
                {categories.map((item) => (
                    <MenuItem key={item.label} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                fullWidth
                name="city"
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
                name="fromDate"
                label="Desde"
                type="date"
                fullWidth
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
                name="toDate"
                label="Hasta"
                type="date"
                fullWidth
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
    );
};
