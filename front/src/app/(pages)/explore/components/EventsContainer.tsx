import { Grid } from '@mui/material';
import { ReactNode } from 'react';

export const EventsContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Grid container paddingY="2rem" spacing={{ xs: 2, md: 3 }}>
            {children}
        </Grid>
    );
};
