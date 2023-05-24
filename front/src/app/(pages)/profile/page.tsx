"use client";
import { Container, Stack, Box, Avatar, Typography, Button } from "@mui/material";
import EventList from "./components/EventList";
import UserForm from "./components/UserForm";

function getID() {
    return Math.floor(Math.random() * 1000000);
}


export default function Home() {
    return (

        <Container maxWidth="lg" sx={{ mt: "3rem", mb: "3rem" }}>
            <Stack spacing={3}>
                <Stack direction={'row'} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                    <Stack direction={'row'} justifyContent={"space-between"} gap={3} >
                        <Avatar alt="user.name"
                            src="/userimg.jpg"
                            sx={{ width: 100, height: 100 }} />
                        <Box>
                            <Typography component='h4' variant="h4" sx={{ flexWrap: { xs: 'wrap', md: 'noWrap' } }}>Arnold Schwarzenegger</Typography>
                            <Typography component='h5' variant="h5">Organizador</Typography>
                        </Box>
                    </Stack>

                    <Button variant="contained" sx={{ margin: 'auto 0 auto auto' }}>Crear Evento</Button>
                </Stack>
                <Stack direction={'row'} justifyContent={'star'} spacing={1}>
                    <Button variant="outlined"><Typography component={'h5'} variant={"h5"}>Eventos</Typography></Button>
                    <Button variant="outlined"><Typography component={'h5'} variant={"h5"}>Perfil</Typography></Button>
                </Stack>
                <Stack gap={3}>
                    <EventList />
                    <UserForm />
                </Stack>
            </Stack>
        </Container >

    );
}
