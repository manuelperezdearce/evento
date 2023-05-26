import { Stack } from "@mui/material";
import CardEventList from "./CardEventList";
import SelectLabels from "./EventListFilter";

function getID() {
    return Math.floor(Math.random() * 1000000);
}
const MyEvents = [
    {
        id: getID().toString(),
        title: 'Fiesta Bailable de los 80',
        date: '30/12/2024',
        active: true,
        img: '/fondoCard.jpg'
    },
    {
        id: getID().toString(),
        title: 'ElectroFest MegaMix',
        date: '30/12/2021',
        active: false,
        img: '/hero.jpg'
    },
    {
        id: getID().toString(),
        title: 'Fiesta Bailable de los 80',
        date: '30/12/2024',
        active: false,
        img: '/fondoCard.jpg'
    },
]

export default function EventList() {
    return (
        <Stack spacing={2}>
            <SelectLabels />
            {MyEvents.map(({ active, date, id, img, title }) => {
                return (
                    <CardEventList key={id} props={{ active, date, id, img, title }} />
                )
            })}
        </Stack >
    )
}