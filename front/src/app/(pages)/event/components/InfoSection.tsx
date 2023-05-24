import {
  Box,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Chip,
  CardMedia,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import SellIcon from "@mui/icons-material/Sell";

export const InfoSection = ({ id }: { id: number }) => {
  return (
    <Box
      sx={{
        borderRadius: "1rem",
        display: {
          xs: "block",
          md: "flex",
        },
        marginBottom: "1rem",
        gap: "rem",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight={"bold"} gutterBottom>
          Fiesta electronica #{id}
        </Typography>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Link target="_blank" href={"https://www.instagram.com/"}>
                <InstagramIcon color="primary" />
              </Link>
            </IconButton>
          }
          title="Organizador"
        />
        <Box sx={{ mt: 3, gap: "1rem", display: "flex" }}>
          <Chip
            icon={<PlaceRoundedIcon />}
            label="Buenos Aires"
            color="secondary"
          />
          <Chip icon={<SellIcon />} label="entrada :$500" color="primary" />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="caption" gutterBottom>
            ¡No te pierdas nuestro increíble evento en Buenos Aires! Una
            experiencia única con un tema emocionante, ubicación excepcional,
            programa diverso, gastronomía excepcional y promociones exclusivas.
            ¡Únete a nosotros para vivir momentos inolvidables y descubrir la
            magia de nuestro evento!
          </Typography>
        </Box>
      </Box>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg"
        sx={{ borderRadius: "1rem", display: "flex" }}
      />
    </Box>
  );
};
