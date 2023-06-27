import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


export const Location = () => {


  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
      width: '100%',
      borderRadius: '1rem',
      backgroundColor: 'red'
    }}>
      <Typography>Ubicación con Google Maps API</Typography>
    </Box>
  )


  // const [coords, setCoord] = useState({
  //   lat: -33.745,
  //   lng: -38.523
  // })
  // const API_KEY = 'AIzaSyD0s9nW-ylxNDqjZmToynSsIBGcz_HMTmI'
  // const location = 'Antonia López de Bello 14, Recoleta, Providencia, Región Metropolitana'

  // const containerStyle = {
  //   width: '100%',
  //   height: '100%'
  // }
  // const center = coords

  // const getCoords = async () => {
  //   const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
  //     params: {
  //       address: location,
  //       key: API_KEY
  //     }
  //   })
  //   setCoord(res.data.results[0].geometry.location)
  // }

  // useEffect(() => {
  //   getCoords()
  // }, [])


  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: API_KEY
  // })

  // const [map, setMap] = useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])


  // return isLoaded ? (

  //   <Box width={'100%'}>
  //     <GoogleMap
  //       mapContainerStyle={containerStyle}
  //       center={center}
  //       zoom={16}
  //       onLoad={onLoad}
  //       onUnmount={onUnmount}
  //     >

  //     </GoogleMap>
  //   </Box>

  // ) : <></>
};
