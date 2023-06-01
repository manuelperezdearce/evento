"use client";
import { Container } from "@mui/material";
import { EventCard } from "./common/components/EventCard";
import SliderContainer from "./(pages)/home/components/SliderContainer";
import { Hero } from "./common/components";

function getID() {
  return Math.floor(Math.random() * 1000000);
}

const sectionArrays = [
  {
    title: "Panoramas Hoy",
    id: getID(),
  },
  {
    title: "Destacados",
    id: getID(),
  },

  {
    title: "Próximos 7 días",
    id: getID(),
  },
];

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ mt: "3rem", mb: "3rem" }}>
        <Hero />
        {sectionArrays.map((item) => {
          return (
            <SliderContainer key={item.id} sliderTitle={item.title}>
              {Array(4)
                .fill(0)
                .map((item) => {
                  return <EventCard key={item} />;
                })}
            </SliderContainer>
          );
        })}
      </Container>
    </main>
  );
}
