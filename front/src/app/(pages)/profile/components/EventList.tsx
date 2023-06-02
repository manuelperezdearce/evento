'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Stack } from "@mui/material";
import CardEventList from "./CardEventList";
import SelectLabels from "./EventListFilter";

type event = {
    id: string,
    title: string,
    date: string,
    active: boolean,
    img: string
}

function getID() {
    return Math.floor(Math.random() * 1000000);
}
const MyEvents = [
    {
        id: getID().toString(),
        title: 'Fiesta Bailable de los 80',
        date: '30/12/2023',
        active: true,
        img: '/fondoCard.jpg'
    },
    {
        id: getID().toString(),
        title: 'ElectroFest MegaMix',
        date: '03/08/2023',
        active: false,
        img: '/hero.jpg'
    },
    {
        id: getID().toString(),
        title: 'fonda de lo sinson',
        date: '27/03/2023',
        active: false,
        img: '/fondoCard.jpg'
    },
    {
        id: getID().toString(),
        title: 'Bar Salsoteca',
        date: '15/06/2023',
        active: true,
        img: '/hero.jpg'
    },
    {
        id: getID().toString(),
        title: 'Teatro en calle',
        date: '01/07/2024',
        active: true,
        img: '/hero.jpg'
    }
]

export default function EventList() {

    const [events, setEvents] = useState(MyEvents)

    const [selects, setSelects] = useState(
        {
            sortSelect: "",
            statusSelect: ""
        }
    )

    // useEffect(() => {
    //     console.log(selects)
    // }, [selects])


    const activeFilter = (event: event) => {
        if (selects.statusSelect == '1') {
            return event.active === true
        }
        if (selects.statusSelect == '2') {
            return event.active === false
        }
        return event.active === false || event.active === true
    }

    const eventSort = (a: event, b: event) => {
        if (selects.sortSelect == '1' || selects.sortSelect == '2') {
            const titleA = a.title.toLowerCase()
            const titleB = b.title.toLowerCase()

            if (selects.sortSelect == '1') {
                if (titleA < titleB) {
                    return -1
                }
                if (titleA > titleB) {
                    return 1
                }
                return 0
            }
            if (selects.sortSelect == '2') {
                if (titleA > titleB) {
                    return -1
                }
                if (titleA < titleB) {
                    return 1
                }
                return 0
            }
        }

        if (selects.sortSelect == '3' || selects.sortSelect == '4') {
            const dateA = a.date.toLowerCase()
            const dateB = b.date.toLowerCase()

            if (selects.sortSelect == '3') {
                if (dateA < dateB) {
                    return 1
                }
                if (dateA > dateB) {
                    return -1
                }
                return 0
            }
            if (selects.sortSelect == '4') {
                if (dateA > dateB) {
                    return 1
                }
                if (dateA < dateB) {
                    return -1
                }
                return 0
            }
        }
        return 0
    }

    return (
        <Stack spacing={2}>
            <SelectLabels

                setSelects={setSelects}
                selects={selects}
            />
            {

                events.sort((a, b) => eventSort(a, b)).filter((event) => activeFilter(event)).map(({ active, date, id, img, title }) => {
                    return (
                        <CardEventList key={id} props={{ active, date, id, img, title }} />
                    )
                })
            }
        </Stack >
    )
}