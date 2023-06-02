'use client'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Stack } from '@mui/material';

type MyType = {
    selects: {
        sortSelect: string,
        statusSelect: string
    },
    setSelects: React.Dispatch<React.SetStateAction<{
        sortSelect: string;
        statusSelect: string;
    }>>
}

export default function SelectLabels({ selects, setSelects }: MyType) {

    const handleSelects = (event: SelectChangeEvent) => {
        setSelects({ ...selects, [event.target.name]: event.target.value })
    }

    const RENDERselects = [
        {

            inputLabel: 'ordenar por:',
            name: 'sortSelect',
            value: selects.sortSelect,
            label: 'ordenar por:',
            onChange: handleSelects,
            menuItems: [
                {
                    value: '',
                    title: 'none'
                },
                {
                    value: 1,
                    title: 'Nombre [A - Z]'
                },
                {
                    value: 2,
                    title: 'Nombre [Z - A]'
                },
                {
                    value: 3,
                    title: 'Más próximo'
                },
                {
                    value: 4,
                    title: 'Más Lejano'
                }
            ]

        },
        {

            inputLabel: 'estado:',
            name: 'statusSelect',
            value: selects.statusSelect,
            label: 'estado:',
            onChange: handleSelects,
            menuItems: [
                {
                    value: '',
                    title: 'ambos'
                },
                {
                    value: 1,
                    title: 'Activos'
                },
                {
                    value: 2,
                    title: 'Inactivos'
                }
            ]
        }
    ]

    return (
        <Stack direction={'row'} justifyContent={'end'} flexWrap={'wrap'}>

            {
                RENDERselects.map((item) => (
                    <FormControl key={item.label} sx={{ m: 1, width: { xs: '100%', md: '200px' } }}>
                        <InputLabel>{item.label}</InputLabel>
                        <Select
                            name={item.name}
                            value={item.value}
                            label={item.label}
                            onChange={item.onChange}
                        >
                            {
                                item.menuItems.map((menuItem) => (
                                    <MenuItem key={menuItem.value} value={menuItem.value}>
                                        {menuItem.title}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Seleccione una opción</FormHelperText>
                    </FormControl >
                ))
            }
        </Stack >
    );
}