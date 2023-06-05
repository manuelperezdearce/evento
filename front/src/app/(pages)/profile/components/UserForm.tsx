import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from 'react'

import { useState } from "react";

export default function UserForm() {

    const [edit, setEdit] = useState(false)
    const HandleEditButton = () => {
        edit ? setEdit(false) : setEdit(true)
    }

    const handleForm = () => {

    }

    return (
        <Stack>
            <Stack component={'form'} gap={2}>
                <Stack direction={"row"} spacing={1}>
                    <TextField
                        disabled={edit ? false : true}
                        required={edit ? true : false}
                        label="Nombre"
                        defaultValue="Arnold"
                        fullWidth
                        onChange={handleForm}
                    />
                    <TextField
                        disabled={edit ? false : true}
                        required={edit ? true : false}
                        label="Apellido"
                        defaultValue="Schwarzenegger"
                        fullWidth
                        onChange={handleForm}
                    />
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"} flexWrap={'wrap'} gap={2}>
                    <TextField
                        disabled={edit ? false : true}
                        required={edit ? true : false}
                        label="Intagram"
                        defaultValue="https://instagram.com/"
                        fullWidth
                        onChange={handleForm}
                    />
                    <TextField
                        disabled={edit ? false : true}
                        required={edit ? true : false}
                        label="WhatsApp"
                        defaultValue="https://web.whatsapp.com/"
                        fullWidth
                        onChange={handleForm}
                    />
                    <TextField
                        disabled={edit ? false : true}
                        required={edit ? true : false}
                        label="Web"
                        defaultValue="https://www.mycompany.com"
                        fullWidth
                        onChange={handleForm}
                    />
                </Stack>
                <Box width={120} m={'auto'} >
                    {
                        edit ?
                            <Button variant="contained"
                                color="secondary"
                                onClick={() => HandleEditButton()}
                                fullWidth
                            >
                                <Typography>Guardar</Typography>
                            </Button>
                            :
                            <Button variant="contained"
                                onClick={() => HandleEditButton()}
                                fullWidth
                            >
                                <Typography>Actualizar</Typography>
                            </Button>
                    }
                </Box>
            </Stack>
        </Stack >
    )
}