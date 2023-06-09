'use client';
import { Container } from '@mui/material';
import React from 'react';
import Footer from '../common/components/Footer';

export const ContainerBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Container>{children}</Container>
            <Footer />
        </>
    );
};
