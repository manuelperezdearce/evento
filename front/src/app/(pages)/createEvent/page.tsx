'use client';
import { useState } from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { TEventForm } from '@/app/common/types/forms';
import Icons from '../../common/theme/icons';
import './styles.css';

export default function createEvent() {
    const [newEvent, setNewEvent] = useState<TEventForm>({
        name: '',
        category: '',
        tags: [],
        direction: '',
        description: '',
        time: '',
        image: null,
        backgroundImage: null,
        startDate: '',
        endDate: '',
        isFree: false,
        onlyAdults: false,
        price: 0,
    });

    const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
        const selectedValues = event.target.value as string[];
        setNewEvent({ ...newEvent, tags: selectedValues });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const obj = { ...newEvent, [e.target.name]: e.target.value };
        setNewEvent(obj);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newEvent);
    };

    const mock = [
        'Conciertos',
        'Festivales',
        'Teatro',
        'Cine',
        'Deportes',
        'Arte y Cultura',
        'Fiestas',
        'Comedia',
        'Gastronomía',
        'Aventura',
        'Juegos',
        'Exposiciones',
    ];

    const eventTags = [
        'Estacionamiento',
        'Comida y bebida',
        'Zona de juegos',
        'Baños',
        'Accesibilidad',
        'Seguridad',
        'Guardería',
        'Área de descanso',
        'Wi-Fi',
        'Merchandising',
    ];

    return (
        <Box paddingY="2rem">
            <Typography
                fontWeight="bold"
                mb="2rem"
                sx={{ fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' } }}>
                Crear un evento
            </Typography>
            <Stack component="form" gap="2rem" onSubmit={handleSubmit}>
                <Stack gap="2rem" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                        required
                        fullWidth
                        name="name"
                        label="Nombre"
                        placeholder="Chayanne en vivo"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.InfoRoundedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                    <Autocomplete
                        fullWidth
                        disablePortal
                        options={mock}
                        onChange={(event, newValue) =>
                            setNewEvent({ ...newEvent, category: newValue })
                        }
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        name: 'category',
                                        required: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Icons.CategoryRoundedIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                        placeholder: 'Concierto',
                                    }}
                                    label="Categoria"
                                />
                            );
                        }}
                    />
                </Stack>

                <TextField
                    required
                    name="direction"
                    label="Dirección"
                    placeholder="43 Newport Lane
                    Buenos Aires, Argentina"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icons.PlaceRoundedIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                    onChange={handleChange}
                />

                <Stack gap="2rem" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                        className="fileUpload"
                        fullWidth
                        required
                        label="Imagen"
                        type="file"
                        name="image"
                        inputProps={{ accept: 'image/png, image/jpeg' }}
                        onChange={handleChange}
                        sx={{
                            '::file-selector-button': { backgroundColor: '#000' },
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.ImageRoundedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        className="fileUpload"
                        fullWidth
                        required
                        label="Imagen de portada"
                        type="file"
                        name="backgroundImage"
                        inputProps={{ accept: 'image/png, image/jpeg' }}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.PanoramaRoundedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                <TextField
                    required
                    multiline
                    minRows={5}
                    name="description"
                    label="Descripción"
                    placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste iusto possimus quia architecto totam vero inventore, eius voluptate placeat temporibus delectus, nemo quis dolore sapiente eum cupiditate minus? Praesentium, itaque!
                    Facere omnis tempore in excepturi! Excepturi, accusamus. Recusandae laboriosam minus rerum eum, vero officia praesentium sapiente culpa facere molestias dolorum sed. Incidunt saepe sit veritatis sequi repellat est deserunt officiis.
"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icons.ChatRoundedIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                    onChange={handleChange}
                />
                <Stack gap="2rem" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                        required
                        name="time"
                        label="Hora"
                        type="time"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.AccessTimeFilledRoundedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="startDate"
                        label="Fecha de inicio"
                        type="date"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.TodayRoundedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="endDate"
                        label="Decha de fin"
                        type="date"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icons.EventRoundedIcon color="primary" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                </Stack>
                <Stack gap="2rem" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="onlyAdults"
                                    value={true}
                                    sx={{
                                        '& .MuiSvgIcon-root': { fontSize: 30 },
                                    }}
                                />
                            }
                            label="Solo adultos"
                            sx={{ '& .MuiFormControlLabel-label': { width: '6rem' } }}
                            onChange={() =>
                                setNewEvent({
                                    ...newEvent,
                                    onlyAdults: !newEvent.onlyAdults,
                                })
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="isFree"
                                    value={true}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                                />
                            }
                            label="Gratis"
                            onChange={() =>
                                setNewEvent({
                                    ...newEvent,
                                    isFree: !newEvent.isFree,
                                    price: 0,
                                })
                            }
                        />
                    </FormGroup>
                    {!newEvent.isFree && (
                        <TextField
                            name="price"
                            label="Precio"
                            type="number"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icons.MonetizationOnRoundedIcon color="primary" />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleChange}
                        />
                    )}
                    <FormControl fullWidth>
                        <InputLabel>Seleccionar atributos</InputLabel>
                        <Select
                            multiple
                            required
                            name="tags"
                            value={newEvent.tags}
                            onChange={handleSelectChange}
                            input={
                                <OutlinedInput
                                    sx={{ '> fieldset > legend': { width: '8rem' } }}
                                    label="Chip"
                                    startAdornment=<InputAdornment position="start">
                                        <Icons.LabelRoundedIcon color="primary" />
                                    </InputAdornment>
                                />
                            }
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}>
                            {eventTags.map((item) => (
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                <Button variant="contained" type="submit" size="large">
                    <Icons.EventAvailableRoundedIcon sx={{ mr: '.8rem' }} />
                    Crear Evento
                </Button>
            </Stack>
        </Box>
    );
}
