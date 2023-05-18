'use client'
import { Hero } from "./common/components";
import { EventCard } from "./common/components/EventCard";
import SliderContainer from "./pages/home/components/SliderContainer";


function getID() {
  return Math.floor(Math.random() * 1000000)
}

const sectionArrays = [
  {
    title: "Panoramas Hoy",
    id: getID()
  },
  {
    title: "Destacados",
    id: getID()
  },

  {
    title: "Próximos 7 días",
    id: getID()
  }
]

export default function Home() {
  return (
    <main>
      <Hero />
      {
        sectionArrays.map((item) => {
          return (
            <SliderContainer key={item.id} sliderTitle={item.title} >
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
