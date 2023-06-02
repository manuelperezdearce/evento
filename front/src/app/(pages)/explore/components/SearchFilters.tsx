'use client';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    TextField,
    Autocomplete,
} from '@mui/material';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import CategoryIcon from '@mui/icons-material/Category';

interface SearchFiltersProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
    handleChange,
    setCategory,
}) => {
    const categories = ['cat1', 'cat2'];

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
                            onChange={handleChange}
                            name="isFree"
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
                            onChange={handleChange}
                            name="onlyAdults"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                        />
                    }
                    label="Solo adultos"
                />
            </FormGroup>

            <Autocomplete
                fullWidth
                disablePortal
                onChange={(event, newValue) => setCategory(newValue || '')}
                options={categories}
                renderInput={(params) => {
                    return (
                        <TextField
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                name: 'category',
                                required: true,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CategoryIcon color="primary" />
                                    </InputAdornment>
                                ),
                                placeholder: 'Concierto',
                            }}
                            label="Categoria"
                        />
                    );
                }}
            />
            <TextField
                fullWidth
                name="city"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
