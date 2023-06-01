'use client'
import React from 'react'
import { Avatar, Box, Typography, TextField, InputAdornment } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

export const Hero = () => {

  return (
    <Box sx={{
      height: { md: "25rem" },
      position: "relative",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
      justifyContent: "center"

    }}>
      <Box sx={{
        display: "flex",
        gap: "1rem",
        flexFlow: "column nowrap",
        alignItems: "center",
        color: "white",
        position: "absolute",
        margin: "auto",
        zIndex: "111"
      }}>
        <Typography variant='h2' component="h2" sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" }
        }}>
          Qué quieres hacer?
        </Typography>

        <TextField
          className='HeroTextField'
          variant='outlined'
          placeholder="Buscar actividad"
          sx={{
            width: '100%',
            padding: "0"
          }}
          InputProps={{
            sx: {
              borderRadius: 30,
              border: '3px solid white',
              color: "#fff",
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon fontSize="large" sx={{
                  color: "#fff"
                }} />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Avatar variant='square' src="/hero.jpg" alt="" sx={{
        width: '100%',
        height: '100%'
      }} />
    </Box >
  )
}
