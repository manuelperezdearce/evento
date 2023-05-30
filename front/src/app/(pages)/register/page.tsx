'use client'
import React, { useState } from "react";
import { Button, Stack, TextField, Typography, Container, Alert, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import Checkboxes from "./components/Checkbox";

export default function Register() {

    const [alertPassword, setAlertPassword] = useState(false)
    const [alertOrganizator, setAlertOrganizator] = useState(false)
    const [form, setForm] = useState(
        {
            name: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isOrganizator: false
        }
    )

    const handleChangeBox = (checked: boolean) => {
        setForm({ ...form, isOrganizator: checked })
        setAlertOrganizator(checked)
    }

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setAlertPassword(false)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setAlertPassword(true)
        }
        else {
            console.log(form);
        }
    };

    return (

        <Container maxWidth="lg" sx={{ mt: "3rem", mb: "3rem" }}>
            <Stack>
                <Stack component={'form'} gap={2}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Stack direction={"row"} justifyContent={"space-between"} flexWrap={'wrap'} gap={2} maxWidth={500} m={'auto'}>
                        <Stack>
                            <FormGroup>
                                <FormControlLabel
                                    label='Registrar como organizador'
                                    control={
                                        <Checkbox
                                            name={'isOrganizator'}
                                            value={form.isOrganizator}
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                                        />
                                    }
                                    onChange={(event: React.SyntheticEvent<Element, Event>, checked: boolean) => handleChangeBox(checked)}
                                />
                            </FormGroup>
                            <Alert severity="info" sx={{ width: '100%', display: `${alertOrganizator ? 'flex' : 'none'}` }}>Importante! - Te estás registrando como Organizador</Alert>
                        </Stack>
                        <TextField
                            type="text"
                            name="name"
                            value={form.name}
                            required={true}
                            label="Nombre"
                            fullWidth
                            onChange={handleChange}
                            sx={{
                                width: { xs: '100%', sm: 'auto' }
                            }}

                        />
                        <TextField
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            required={true}
                            label="Apellido"
                            fullWidth
                            onChange={handleChange}
                            sx={{
                                width: { xs: '100%', sm: 'auto' }
                            }}

                        />
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
                            onChange={handleChange}
                            sx={{
                                width: { xs: '100%', sm: 'auto' }
                            }}

                        />
                        <TextField
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            required={true}
                            label="Confirmar contraseña"
                            sx={{
                                width: { xs: '100%', sm: 'auto' }
                            }}
                            onChange={handleChange}
                        />
                        <Alert severity="warning" sx={{ width: '100%', display: `${alertPassword ? 'flex' : 'none'}` }}>Las contraseñas no coinciden, por favor inténtalo nuevamente.</Alert>
                        <Stack gap={2}>
                            <Stack direction={'row'}>

                                <Checkboxes required={true} name='' label='He leído y acepto los términos y condiciones de uso de EvenTo®' />

                            </Stack>
                            <Button variant="contained"
                                type="submit"
                                sx={{ margin: 'auto' }}>
                                <Typography textAlign={'center'}>Crear cuenta</Typography>

                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container >

    )
}