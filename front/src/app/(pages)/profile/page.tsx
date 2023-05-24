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


// const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));


export default function Profile() {

    // const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

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
                <Box>
                    <AppBar position="static" color="secondary" variant="elevation">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Mis eventos" {...a11yProps(0)} />
                            <Tab label="Perfil" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <EventList />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <UserForm />
                    </TabPanel>
                </Box>
            </Stack>
        </Container >

    );
}
