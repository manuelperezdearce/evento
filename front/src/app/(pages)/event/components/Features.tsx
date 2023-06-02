import { Box, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
export const Features = () => {
  const features = {
    address: {
      slug: "Direccion",
      value: "Círculo de Bellas Artes, Teatro Fernando de Rojas",
      icon: <LocationOnIcon color="primary" />,
    },
    date: {
      slug: "Fecha",
      value: "25 de mayo 2023",
      icon: <QueryBuilderIcon color="primary" />,
    },
    duration: {
      slug: "Duracion",
      value: "2h",
      icon: <HourglassEmptyIcon color="primary" />,
    },
    age: {
      slug: "Edad",
      value: "+18",
      icon: <AddReactionIcon color="primary" />,
    },
    accessibility: {
      slug: "Accesibilidad",
      value:
        "recinto habilitado para personas en silla de ruedas, ñnicamente zonas A y B",
      icon: <AssistWalkerIcon color="primary" />,
    },
  };
  return (
    <Box>
      <Typography variant="h5" fontWeight={"600"}>
        Features
        {Object.entries(features).map(([key, value]) => {
          return (
            <Box
              key={key}
              sx={{
                display: {
                  xs: "block",
                  sm: "flex",
                },
              }}
              alignItems={"center"}
              marginTop={2}
              marginBottom={2}
            >
              <Box display={"flex"} alignItems={"center"}>
                {value.icon}
                <Typography variant="h6" fontWeight={"600"} marginLeft={2}>
                  {value.slug}:
                </Typography>
              </Box>
              <Typography
                ml={2}
                sx={{
                  textAlign: {
                    xs: "right",
                    sm: "left",
                  },
                }}
                variant="body1"
              >
                {value.value}
              </Typography>
            </Box>
          );
        })}
      </Typography>
    </Box>
  );
};
