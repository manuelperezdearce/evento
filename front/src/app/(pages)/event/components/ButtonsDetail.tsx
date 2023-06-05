import { Box, Chip } from '@mui/material';
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import DeckIcon from '@mui/icons-material/Deck';
import BalconyIcon from '@mui/icons-material/Balcony';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const ButtonsDetail = () => {
    return (
        <Box
            sx={{
                marginBottom: '1rem',
                display: 'flex',
                gap: '1rem',
                justifyContent: 'space-between',
            }}>
            <Box
                sx={{
                    marginBottom: '1rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                <Chip
                    icon={<DeckIcon />}
                    label="Terraza"
                    variant="outlined"
                    color="primary"
                    sx={{ px: '.5rem', py: '.4rem' }}
                />
                <Chip
                    icon={<PetsIcon />}
                    label="pet friendly"
                    variant="outlined"
                    color="primary"
                    sx={{ px: '.5rem', py: '.4rem' }}
                />
                <Chip
                    icon={<BalconyIcon />}
                    label="balcon"
                    variant="outlined"
                    color="primary"
                    sx={{ px: '.5rem', py: '.4rem' }}
                />
                <Chip
                    icon={<RestaurantIcon />}
                    label="comida"
                    variant="outlined"
                    color="primary"
                    sx={{ px: '.5rem', py: '.4rem' }}
                />
            </Box>
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                    top: 0,
                    right: 0,
                }}></Box>
        </Box>
    );
};
