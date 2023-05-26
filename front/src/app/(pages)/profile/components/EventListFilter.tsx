import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Stack } from '@mui/material';

export default function SelectLabels() {
    const [titleSelect, setTitleSelect] = React.useState('');
    const [dateSelect, setDateSelect] = React.useState('');
    const [statusSelect, setStatusSelect] = React.useState('');

    const HandleTitleSelect = (event: SelectChangeEvent) => {
        setTitleSelect(event.target.value);
    };
    const HandleDateSelect = (event: SelectChangeEvent) => {
        setDateSelect(event.target.value);
    };
    const HandleStatusSelect = (event: SelectChangeEvent) => {
        setStatusSelect(event.target.value);
    };

    return (
        <Stack direction={'row'} justifyContent={'end'} flexWrap={'wrap'}>
            <FormControl sx={{ m: 1, width: { xs: '100%', md: '200px' } }}>
                <InputLabel id="demo-simple-select-helper-label">Ordenar por:</InputLabel>
                <Select
                    value={titleSelect}
                    label="Ordenar por"
                    onChange={HandleTitleSelect}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Nombre [A - Z]</MenuItem>
                    <MenuItem value={2}>Nombre [Z - A]</MenuItem>
                </Select>
                <FormHelperText>Seleccione una opción</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, width: { xs: '100%', md: '200px' } }}>
                <InputLabel id="demo-simple-select-helper-label">Fecha:</InputLabel>
                <Select
                    value={dateSelect}
                    label="Ordenar por"
                    onChange={HandleDateSelect}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Más próximo</MenuItem>
                    <MenuItem value={2}>Más lejano</MenuItem>
                </Select>
                <FormHelperText>Seleccione una opción</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, width: { xs: '100%', md: '200px' } }}>
                <InputLabel id="demo-simple-select-helper-label">Estado:</InputLabel>
                <Select
                    value={statusSelect}
                    label="Ordenar por"
                    onChange={HandleStatusSelect}
                >
                    <MenuItem value={0}>Ambos</MenuItem>
                    <MenuItem value={1}>Activos</MenuItem>
                    <MenuItem value={2}>Inactivos</MenuItem>

                </Select>
                <FormHelperText>Seleccione una opción</FormHelperText>
            </FormControl>
        </Stack>



    );
}