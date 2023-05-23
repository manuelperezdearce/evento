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

export const EventSearch = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get('name') as string;
        const isFree = formData.get('free') as true | null;
        const onlyAdults = formData.get('onlyAdults') as true | null;
        const city = formData.get('city') as string;
        const toDate = formData.get('toDate') as Date | null;
        const fromDate = formData.get('fromDate') as Date | null;

        const category = formData.get('category') as string;

        const query: TQuery = {
            name,
            isFree: isFree || false,
            onlyAdults: onlyAdults || false,
            city,
            toDate,
            fromDate,
        };

        console.log(category);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSearch}
            sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TextField
                name="name"
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
                <Stack sx={{ padding: '2rem', gap: '2rem' }}>
                    <CloseRoundedIcon
                        onClick={toggleDrawer}
                        color="primary"
                        fontSize="large"
                        sx={{ alignSelf: 'end', cursor: 'pointer' }}
                    />
                    <SearchFilters />
                    <Button variant="contained" onClick={toggleDrawer}>
                        Filtrar
                    </Button>
                </Stack>
            </Drawer>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <SearchFilters />
            </Box>
        </Box>
    );
};
