"use client";
import React from "react";
import { Container, Stack, Box, Avatar, Typography, Button, AppBar, Tabs, Tab } from "@mui/material";
import EventList from "./components/EventList";

import UserForm from "./components/UserForm";

function getID() {
    return Math.floor(Math.random() * 1000000);
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box py={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const userData = {
    id: getID().toString,
    name: 'Arnold',
    lastname: 'Schwarzenegger',
    org: 'Bar Los Bakanes',
    imgURL: 'userimg.jpg',
    coordinator: true,
    whatsappURL: 'https://web.whatsapp.com/',
    instagramURL: 'https://instagram.com/',
    personalURL: 'https://www.mycompany.com'

}


export default function Profile() {


    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (

        <Container maxWidth="lg" sx={{ mt: "3rem", mb: "3rem" }}>
            <Stack spacing={3}>
                <Stack direction={'row'} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                    <Stack direction={'row'} justifyContent={{ xs: 'center', md: "space-between" }} textAlign={{ xs: "center", sm: 'start' }} alignItems={"center"} gap={3} flexWrap={"wrap"} >
                        <Avatar alt="user.name"
                            src="/userimg.jpg"
                            sx={{ width: 100, height: 100 }} />
                        <Box>
                            <Typography component='h4' variant="h4" sx={{ flexWrap: { xs: 'wrap', md: 'noWrap' } }}>{`${userData.name} ${userData.lastname}`}</Typography>
                            <Typography component='h5' variant="h5">{userData.coordinator ? 'organizador' : null}</Typography>
                        </Box>
                    </Stack>

                    <Button variant="contained" sx={{ margin: 'auto 0 auto auto' }}>Crear Evento</Button>
                </Stack>
                <Box>
                    <AppBar position="static" color="transparent" sx={{
                        boxShadow: 'none'
                    }}  >
                        <Tabs value={value} textColor="primary" centered onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Perfil" sx={{
                                fontSize: '20px'
                            }} {...a11yProps(0)} />
                            <Tab label="Mis Eventos" sx={{
                                fontSize: '20px'
                            }} {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <UserForm />
                    </TabPanel>
                    <TabPanel value={value} index={1}>

                        <EventList />

                    </TabPanel>

                </Box>
            </Stack>
        </Container >

    );
}
