'use client'
import { Hero } from "./common/components";
import { EventCard } from "./common/components/EventCard";
import SliderContainer from "./pages/home/components/SliderContainer";

const sectionArrays = [
  { title: "Panoramas Hoy" },
  { title: "Destacados" },
  { title: "Próximos 7 días" }
]

export default function Home() {
  return (
    <main>
      <Hero />
      {
        sectionArrays.map((item) => {
          return (
            <SliderContainer sliderTitle={item.title} >
              {
                Array(4).fill(0).map((item) => {
                  return (
                    <EventCard key={item} />
                  )
                })
              }
            </SliderContainer>
          )
        })
      }
    </main>
  );
}
