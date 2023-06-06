'use client';
import {
    Paper,
    Typography,
    Avatar,
    TextField,
    Button,
    Rating,
    Stack,
    Alert,
    AlertTitle,
} from '@mui/material';
import './style.css';
import React, { useState } from 'react';
const imgLink =
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

export const Comments = () => {
    const userName = 'Juan';
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([
        {
            name: 'Juan Perez',
            message:
                'Hola me gusto el evento que realizaron en cordoba, todo de lo mejor 5 estrellas',
            rating: 4,
        },
        {
            name: 'Juan Perez',
            message:
                'Hola, como estan? me gustaria saber el precio del evento en maracaivo',
            rating: 4.5,
        },
    ]);
    const [form, setForm] = useState({
        message: '',
        name: userName,
        rating: 3,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        console.log(form);
        setComments((comments) => [...comments, form]);

        //!TODO send to backend
    };

    return (
        <Stack gap="2rem" mt="2rem">
            {/* Solo si hay user */}
            <Alert severity="info">
                <AlertTitle>Fuiste a algun evento de este organizador? </AlertTitle>
                Deja un comentario y evalua sus eventos
            </Alert>
            <Typography variant="h5" fontWeight={'600'}>
                Escribe un comentario
            </Typography>
            <Stack component="form" onSubmit={handleSubmit} gap="2rem">
                <Rating
                    value={form.rating}
                    size="large"
                    name="rating"
                    onChange={(event, newValue) => {
                        setForm({ ...form, rating: newValue || 0 });
                    }}
                />
                <TextField
                    focused
                    label="Mensaje"
                    fullWidth
                    placeholder="Ingrese su comentario aqui"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    name="message"
                    value={form.message}
                    required
                    sx={{
                        background: 'white',
                    }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    sx={{ borderRadius: '1.2rem' }}>
                    Enviar
                </Button>
            </Stack>

            <Typography variant="h5" fontWeight={'600'}>
                Opiniones
            </Typography>

            <Stack gap="1rem">
                {comments.map((comment) => (
                    <Paper
                        variant="outlined"
                        sx={{
                            width: '100%',
                            p: '1rem 2rem',
                            gap: { xs: '1rem', md: '2rem' },
                            borderRadius: { xs: '1rem', md: '3.6rem' },
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'initial', md: 'center' },
                        }}
                        component={Stack}>
                        <Avatar
                            alt="Remy Sharp"
                            src={imgLink}
                            sx={{ width: 75, height: 75 }}
                        />
                        <Stack gap={1}>
                            <Typography variant="h5">{comment.name}</Typography>
                            <Rating
                                name="size-largs"
                                defaultValue={comment.rating}
                                precision={0.5}
                                readOnly
                            />
                            <Typography className={'commentText'}>
                                {comment.message}
                            </Typography>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Stack>
    );
};
