import { Avatar, Button, Stack, Typography } from "@mui/material";

export default function CardEventList() {
    return (
        <Stack direction={'row'} flexWrap={"wrap"} borderRadius={5} overflow={'hidden'} sx={{
            position: 'relative',
            color: '#fff',
            minHeight: '100px'
        }}>
            <Avatar variant="square" src="/hero.jpg" sx={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }} />
            <Stack direction={'row'} zIndex={3} width={'100%'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} m={3} >
                <Stack>
                    <Typography variant="h5">Fiesta Bailable de los 80'</Typography>
                    <Typography variant="h6">Fecha: 30/12/2034</Typography>
                </Stack>
                <Typography variant="h6">Estado: Activo</Typography>
                <Stack direction={'row'} gap={1} >
                    <Button variant="contained" color="success" sx={{ margin: 'auto' }}>Activar</Button>
                    <Button variant="contained" color="primary" sx={{ margin: 'auto' }}>Editar</Button>
                    <Button variant="contained" color="warning" sx={{ margin: 'auto' }}>Eliminar</Button>
                </Stack>
            </Stack>


        </Stack>
    )
}