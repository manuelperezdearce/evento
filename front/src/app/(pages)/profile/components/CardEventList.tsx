import { Avatar, Button, Stack, Typography, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

type cardData = {
    props: {
        id: string,
        title: string,
        date: string,
        active: boolean,
        img: string,
        handleDeleteButton: any
    }

}

export default function CardEventList({ props }: cardData) {
    const [status, setStatus] = useState(props.active)
    const handleStatusButton = () => {
        status ? setStatus(false) : setStatus(true)
    }

    return (
        <Stack
            boxShadow={'8px 8px 20px 1px rgb(0,0,0,0.8)'}
            direction={'row'} flexWrap={"wrap"} borderRadius={5} overflow={'hidden'} sx={{
                position: 'relative',
                color: '#fff',
                minHeight: '120px'
            }}>
            <Avatar variant="square" src={props.img} sx={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }} />

            <Stack direction={'row'} zIndex={3} width={'100%'} gap={2} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} p={3} sx={{
                backgroundColor: 'rgb(0, 0, 0, 0.8)',
            }}
            >
                <Stack>
                    <Typography variant="h5">{props.title}</Typography>
                    <Typography variant="h6">{props.date}</Typography>
                </Stack>
                <Stack direction={'row'} spacing={{ xs: 0, sm: 0, md: 5 }} flexWrap={'wrap'}>
                    <Button sx={{ color: '#fff', width: '155px' }} onClick={() => handleStatusButton()}>
                        <Typography variant="h6" width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1} >
                            {status ?
                                <>Activo < ToggleOnIcon fontSize="large" color='success' /></>
                                :
                                <>Inactivo <ToggleOffIcon fontSize="large" sx={{ color: '#666' }} /></>}
                        </Typography>
                    </Button>
                    <Stack direction={'row'} gap={0} justifyContent={'end'} >
                        <Link href="event/1" display={'flex'}>
                            <Button sx={{ padding: 0 }}>
                                <VisibilityIcon fontSize="large" color="info" />
                            </Button>
                        </Link>
                        <Button >
                            <EditIcon fontSize="large" color="secondary" />
                        </Button>
                        <Button onClick={() => props.handleDeleteButton(props.id)}>
                            <DeleteIcon fontSize="large" color='error' />
                        </Button>
                    </Stack>
                </Stack>
            </Stack >
        </Stack >
    )
}