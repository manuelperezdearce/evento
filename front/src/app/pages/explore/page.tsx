'use client';
import { Container } from '@mui/material';
import React from 'react';
import { EventSearch } from './components/EventSearch';

export default function Explore() {
    return (
        <Container maxWidth="lg" sx={{ mt: '3rem' }}>
            <EventSearch />
        </Container>
    );
}
