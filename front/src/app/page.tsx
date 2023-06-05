'use client';
import { Container } from '@mui/material';
import { EventCard } from './common/components/EventCard';
import SliderContainer from './(pages)/home/components/SliderContainer';
import { Hero } from './common/components';

function getID() {
    return Math.floor(Math.random() * 1000000);
}

const sectionArrays = [
    {
        title: 'Panoramas Hoy',
        id: 1,
    },
    {
        title: 'Destacados',
        id: 2,
    },

    {
        title: 'Próximos 7 días',
        id: 3,
    },
];

export default function Home() {
    return (
        <main>
            <Container maxWidth="lg" sx={{ mt: '3rem', mb: '3rem' }}>
                <Hero />
                {sectionArrays.map((item) => {
                    return (
                        <SliderContainer key={item.id} sliderTitle={item.title}>
                            {Array(4)
                                .fill(0)
                                .map((item, index) => {
                                    return <EventCard key={index} />;
                                })}
                        </SliderContainer>
                    );
                })}
            </Container>
        </main>
    );
}
