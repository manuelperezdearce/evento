import { Avatar, Box, Typography } from '@mui/material'

import React from 'react'

export const Hero = () => {
  return (
    <Box sx={{
      position: "relative",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center"

    }}>
      <Box sx={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        color: "white",
        position: "absolute",
        // top: "30%",
        // left: "25%",
        margin: "auto",
        zIndex: "111"
      }}>
        <Typography variant='h2' component="h2">
          Qué quieres hacer?
        </Typography>
        <Typography variant='h3' component="h3">(texto call to action)</Typography>

      </Box>


      <Avatar variant='square' src="/hero.jpg" alt="" sx={{
        width: '100%',
        height: '100%'
      }} />
    </Box>
  )
}
