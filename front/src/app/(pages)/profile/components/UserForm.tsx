import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function UserForm() {
    return (
        <Stack>
            <Stack component={'form'} gap={2}>
                <Stack direction={"row"} spacing={1}>
                    <TextField
                        required={false}
                        label="Nombre"
                        defaultValue="Arnold"
                        fullWidth
                    />
                    <TextField
                        required={false}
                        label="Apellido"
                        defaultValue="Schwarzenegger"
                        fullWidth
                    />
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"} spacing={1}>
                    <TextField
                        required={false}
                        label="Intagram"
                        defaultValue="https://instagram.com/"
                        fullWidth
                    />
                    <TextField
                        required={false}
                        label="WhatsApp"
                        defaultValue="https://web.whatsapp.com/"
                        fullWidth
                    />
                    <TextField
                        required={false}
                        label="Web"
                        defaultValue="https://www.mycompany.com"
                        fullWidth
                    />
                </Stack>
                <TextField
                    required={false}
                    label="Nombre"
                    defaultValue="Hello World"
                />
                <Button variant="contained" sx={{ margin: 'auto' }}><Typography>Actualizar</Typography></Button>

            </Stack>
        </Stack>
    )
}