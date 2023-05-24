import { Box, Typography } from "@mui/material";
import React from "react";

export const Location = () => {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "flex",
          },
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={"600"}>
            Como llegar
          </Typography>
          <Typography variant="body1" sx={{ mt: 3, width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            omnis, ipsa recusandae officiis at maiores porro esse inventore
            excepturi repellat!
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6522991.628599436!2d-65.31297134644365!3d-37.03234671359259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb7595281d9%3A0x4ad309fcdcf0a144!2sProvincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2spe!4v1684440707997!5m2!1ses-419!2spe"
            className="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};
