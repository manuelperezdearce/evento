'use client';
import React, { useState } from 'react';
import { Button, Stack, TextField, Typography, Container, Alert, Link } from '@mui/material';
import { useAppDispatch } from '@/app/store/store';
import { authenticateUser } from '@/app/store/slices/AuthSlice';

export default function Login() {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(authenticateUser(form));
        console.log(form);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: '3rem', mb: '3rem' }}>
            <Stack alignItems={'center'}>
                <Typography variant="h4" marginBottom={'3rem'}>
                    Bienvenido a EvenTo
                </Typography>
                <Stack component={'form'} gap={2} onSubmit={(e) => handleSubmit(e)}>
                    <Stack direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'} gap={2} maxWidth={500} m={'auto'}>
                        <TextField
                            type="email"
                            name="email"
                            value={form.email}
                            required={true}
                            label="Correo Electrónico"
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            type="password"
                            name="password"
                            value={form.password}
                            required={true}
                            label="Contraseña"
                            fullWidth
                            onChange={handleChange}
                        />
                        <Stack
                            gap={2}
                            direction={'row'}
                            justifyContent={{ xs: 'center', md: 'space-between' }}
                            width={'100%'}
                            flexWrap={'wrap'}>
                            <Typography variant="h6" fontSize={18}>
                                ¿No tienes una cuenta? <Link href="/register">Registrarse</Link>
                            </Typography>
                            <Button variant="contained" type="submit" sx={{ width: '200px' }}>
                                <Typography textAlign={'center'}>Ingresar</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
}
