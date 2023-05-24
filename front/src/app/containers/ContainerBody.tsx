'use client';
import { Container } from '@mui/material';
import React from 'react';

export const ContainerBody = ({ children }: { children: React.ReactNode }) => {
	return <Container component='main'>{children}</Container>;
};
