'use client';
import { Container, Grid } from '@mui/material';
import { EventSearch } from './components/EventSearch';
import { EventCard } from '../../common/components/EventCard';
import { EventsContainer } from './components/EventsContainer';

export default function Explore() {
    return (
        <Container maxWidth="lg" sx={{ mt: '3rem' }}>
            <EventSearch />

            <EventsContainer>
                {Array(8)
                    .fill(0)
                    .map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <EventCard key={index} />
                        </Grid>
                    ))}
            </EventsContainer>
        </Container>
    );
}
