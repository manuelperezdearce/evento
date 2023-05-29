"use client";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  FormControl,
  Rating,
} from "@mui/material";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export const Comments = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "Juan Perez",
      message:
        "Hola me gusto el evento que realizaron en cordoba, todo de lo mejor 5 estrellas",
      email: "XXXXXXXXX@XXX.com",
      rating: 4,
    },
    {
      name: "Juan Perez",
      message:
        "Hola, como estan? me gustaria saber el precio del evento en maracaivo",
      email: "XXXXXXXXX@XXX.com",
      rating: 4.5,
    },
    {
      name: "Luiza perez",
      message:
        "La paciencia es una virtud? pero podrian responder los mensajes",
      email: "XXXXXXXXX@XXX.com",
      rating: 3.5,
    },
    {
      name: "Pedro Infantes",
      message: "Eventos de lujo recomendable",
      email: "XXXXXXXXX@XXX.com",
      rating: 5,
    },
  ]);
  const [form, setForm] = useState({
    email: "",
    message: "",
    name: "",
    rating: 3,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setComments((comments) => [...comments, form]);

    //!TODO send to backend
    setForm({
      name: "",
      email: "",
      message: "",
      rating: 3,
    });
  };

  return (
    <Box sx={{ margin: "2em 0" }}>
      <Typography variant="h5" fontWeight={"600"}>
        Opiniones
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "space-between",
          gap: "2em",
          marginTop: "2em",
        }}
      >
        {comments.map((comment) => (
          <Paper
            sx={{
              width: {
                xs: "280px",
                md: "340px",
              },
              padding: {
                xs: "20px 20px",
                sm: "20px 20px",
              },
              margin: {
                xs: "0 auto",
                md: "0",
              },
            }}
          >
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              sx={{
                width: {
                  sm: "250px",
                },
                height: "100%",
                display: {
                  sm: "flex",
                },
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                alignItems: "center",
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Grid item>
                <Avatar alt="Remy Sharp" src={imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <Typography variant="h5">{comment.name}</Typography>
                <Typography className={"commentText"}>
                  {comment.message}
                </Typography>
                <Rating
                  name="size-largs"
                  defaultValue={comment.rating}
                  precision={0.5}
                  size="large"
                  readOnly
                />
                <Typography variant="body2" color="text.secondary">
                  posted 1 minute ago
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>

      <form
        onSubmit={handleSubmit}
        ref={formRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2em",
        }}
      >
        <TextField
          focused
          id="outlined-textarea"
          label="nombre"
          placeholder="ingrese su nombre aqui"
          multiline
          required
          onChange={handleChange}
          name="name"
          value={form.name}
          sx={{
            width: {
              xs: "250px",
              sm: "500px",
            },
            background: "white",
          }}
        />
        <TextField
          focused
          id="outlined-textarea"
          label="message"
          placeholder="ingrese su comentario aqui"
          multiline
          onChange={handleChange}
          name="message"
          value={form.message}
          required
          sx={{
            marginTop: "1em",
            width: {
              xs: "250px",
              sm: "500px",
            },
            background: "white",
          }}
        />
        <TextField
          focused
          id="filled-basic"
          placeholder="ingrese su correo aqui"
          onChange={handleChange}
          type="email"
          label="correo"
          value={form.email}
          required
          name="email"
          sx={{
            marginTop: "1em",
            width: {
              xs: "250px",
              sm: "500px",
            },
            background: "white",
          }}
          variant="outlined"
        />
        <Rating name="size-large" defaultValue={form.rating} size="large" />
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginY: "1em",
            width: {
              xs: "250px",
              sm: "500px",
            },
            height: "100%",
          }}
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};
