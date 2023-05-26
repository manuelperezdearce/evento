import { Box, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
export const Features = () => {
	return (
		<Box>
			<Typography variant="h5" fontWeight={'600'}>
				Features
				<Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} variant="h6" fontWeight={'600'}>
					<LocationOnIcon color="primary" />
					Lugar: Círculo de Bellas Artes, Teatro Fernando de Rojas
				</Typography>
				<Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} variant="h6" fontWeight={'600'}>
					<QueryBuilderIcon color="primary" />
					Fecha: 25 de mayo 2023
				</Typography>
				<Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} variant="h6" fontWeight={'600'}>
					<HourglassEmptyIcon color="primary" />
					duracion: 2h
				</Typography>
				<Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} variant="h6" fontWeight={'600'}>
					<AddReactionIcon color="primary" />
					edad: +18
				</Typography>
				<Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px' }} variant="h6" fontWeight={'600'}>
					<AssistWalkerIcon color="primary" />
					Accesibilidad: recinto habilitado para personas en silla de ruedas, únicamente zonas A y B
				</Typography>
			</Typography>
		</Box>
	);
};
