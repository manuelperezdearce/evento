'use client';
import '../components/style.css';
import { Box, Container, Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import { InfoSection, ButtonsDetail, Comments, Location, Features } from '../components';

export default function EventDetail() {
    const { id } = useParams();

    //TODO make a functionality to get the event by id

    return (
        <Container maxWidth="lg" sx={{ mt: '3rem', mb: '3rem' }}>
            <InfoSection id={Number(id)} />
            <ButtonsDetail />
            <Stack direction={'row'} justifyContent={'space-between'} gap={2} >
                <Features />
                <Location />
            </Stack>

            <Comments />
            <Box
                sx={{
                    display: 'none',
                }}
                className="buttonFloat"></Box>
        </Container>
    );
}
