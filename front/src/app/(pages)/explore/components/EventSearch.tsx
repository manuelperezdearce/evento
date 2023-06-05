'use client';
import { useState } from 'react';
import { Box, Button, Drawer, InputAdornment, Stack, TextField } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import { SearchFilters } from './SearchFilters';

type TQuery = {
    name: string;
    isFree: boolean;
    onlyAdults: boolean;
    city: string;
    toDate: Date | null;
    fromDate: Date | null;
};

type TCategory = string;

export const EventSearch = () => {
    const [query, setQuery] = useState<TQuery>({
        name: '',
        isFree: false,
        onlyAdults: false,
        city: '',
        toDate: null,
        fromDate: null,
    });

    const [category, setCategory] = useState<TCategory>('');

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('category:', category);
        console.log(query);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'isFree' || e.target.name === 'onlyAdults') {
            setQuery({ ...query, [e.target.name]: !query[e.target.name] });
            return;
        }
        const obj = { ...query, [e.target.name]: e.target.value };
        setQuery(obj);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSearch}
            sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TextField
                name="name"
                onChange={handleChange}
                label="Tipo de evento o nombre"
                placeholder="Fiesta electronica"
                InputProps={{
                    sx: { borderRadius: 30 },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon color="primary" fontSize="large" />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            sx={{
                                background: '#8E24AA',
                                color: '#fff',
                                padding: '1.2rem',
                                borderRadius: '50%',
                                height: '1rem',
                                width: '1rem',
                                cursor: 'pointer',
                                justifyContent: 'center',
                                '&:hover': { background: '#FBC02D' },
                            }}>
                            <SortRoundedIcon
                                onClick={toggleDrawer}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                }}
                            />
                            <Button
                                type="submit"
                                sx={{
                                    color: '#fff',
                                    display: { xs: 'none', md: 'flex' },
                                }}>
                                <NavigateNextRoundedIcon
                                    sx={{
                                        background: 'none',
                                        border: 'none',
                                        padding: '0',
                                        cursor: 'pointer',
                                        outline: 'inherit',
                                    }}
                                />
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
            <Drawer open={open} anchor="left">
                <Stack component="form" sx={{ padding: '2rem', gap: '2rem' }}>
                    <CloseRoundedIcon
                        onClick={toggleDrawer}
                        color="primary"
                        fontSize="large"
                        sx={{ alignSelf: 'end', cursor: 'pointer' }}
                    />
                    <SearchFilters
                        handleChange={handleChange}
                        setCategory={setCategory}
                    />
                    <Button type="submit" variant="contained" onClick={toggleDrawer}>
                        Filtrar
                    </Button>
                </Stack>
            </Drawer>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <SearchFilters handleChange={handleChange} setCategory={setCategory} />
            </Box>
        </Box>
    );
};
