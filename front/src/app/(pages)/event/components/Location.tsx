import React from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";


export const Location = () => {

  const API_KEY = 'AIzaSyD0s9nW-ylxNDqjZmToynSsIBGcz_HMTmI'
  const location = 'Antonia López de Bello 14, Recoleta, Providencia, Región Metropolitana'

  const getCoords = async () => {
    const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: API_KEY
      }
    })
    const coords = res.data.results[0].geometry.location
    console.log(coords)
  }

  useEffect(() => {
    getCoords()
  }, [])


  return (

    <Box width={'100%'}>
      <div id="map" style={{ height: '200px', width: '100%', backgroundColor: 'red' }}>

      </div>
    </Box>

  );
};
