import { Box, Chip } from "@mui/material";
import React from "react";
import { ButtonConnect } from "./ButtonConnect";
import PetsIcon from "@mui/icons-material/Pets";
import DeckIcon from "@mui/icons-material/Deck";
import BalconyIcon from "@mui/icons-material/Balcony";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export const ButtonsDetail = () => {
  return (
    <Box
      sx={{
        marginBottom: "1rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          marginBottom: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Chip
          icon={<DeckIcon />}
          label="terraza"
          sx={{ backgroundColor: "#caf0f8", border: "1px solid black" }}
        />
        <Chip
          icon={<PetsIcon />}
          label="pet friendly"
          sx={{ backgroundColor: "#caf0f8", border: "1px solid black" }}
        />
        <Chip
          icon={<BalconyIcon />}
          label="balcon"
          sx={{ backgroundColor: "#caf0f8", border: "1px solid black" }}
        />
        <Chip
          icon={<RestaurantIcon />}
          label="comida"
          sx={{ backgroundColor: "#caf0f8", border: "1px solid black" }}
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          top: 0,
          right: 0,
        }}
      >
        <ButtonConnect />
      </Box>
    </Box>
  );
};
