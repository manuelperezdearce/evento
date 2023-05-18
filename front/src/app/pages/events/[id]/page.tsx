'use client';
import { Avatar, Box, CardHeader, CardMedia, Chip, IconButton, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PetsIcon from '@mui/icons-material/Pets';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import { Comments } from '../components/Comments';
import { Location } from '../components/Location';
import { ButtonConnect } from '../components/ButtonConnect';

export default function EventDetail() {
	const { id } = useParams();

	//TODO make a functionality to get the event by id

	return (
		<>
			<Typography variant="h3" gutterBottom>
				Fiesta electronica #{id}
			</Typography>

			<Box
				sx={{
					borderRadius: '1rem',
					display: {
						xs: 'none',
						md: 'flex',
					},
					marginBottom: '1rem',
					gap: '1rem',
				}}
			>
				<Box>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
								R
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<Link target="_blank" href={'https://www.instagram.com/'}>
									<InstagramIcon color="primary" />
								</Link>
							</IconButton>
						}
						title="Organizador"
					/>
					<Chip icon={<PlaceRoundedIcon />} label="buenos aires" color="secondary" />
					<Box>
						<Typography variant="caption" gutterBottom>
							¡No te pierdas nuestro increíble evento en Buenos Aires! Una experiencia única con un tema
							emocionante, ubicación excepcional, programa diverso, gastronomía excepcional y promociones
							exclusivas. ¡Únete a nosotros para vivir momentos inolvidables y descubrir la magia de
							nuestro evento!
						</Typography>
					</Box>
				</Box>
				<CardMedia
					component="img"
					alt="green iguana"
					height="200"
					image="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg"
					sx={{ borderRadius: '1rem', display: 'flex' }}
				/>
			</Box>
			<Box sx={{ marginBottom: '1rem', display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
				<Box sx={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
					<Chip
						icon={<PlaceRoundedIcon />}
						label="terraza"
						sx={{ backgroundColor: '#caf0f8', border: '1px solid black' }}
					/>
					<Chip
						icon={<PetsIcon />}
						label="pet friendly"
						sx={{ backgroundColor: '#caf0f8', border: '1px solid black' }}
					/>
				</Box>
				<Box>
					<ButtonConnect />
				</Box>
			</Box>
			<Location />
			<Comments />
		</>
	);
}
