'use client';
import { Container, Stack } from '@mui/material';
import React from 'react';
import Footer from '../common/components/Footer';
import { Navbar } from '../common/components/Navbar';


export const ContainerBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack minHeight={'100vh'} justifyContent={'space-between'}>
      <Navbar />

      <Container>
        {children}
      </Container>
      <Footer />
    </Stack >
  );
};
