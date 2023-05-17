import { Hero } from './common/components'
import { SliderEvent } from './common/components/Slider'

export default function Home () {
  return (
    <main>
      <h1>hello no country</h1>
      <Hero />
      <SliderEvent titleSlider='Eventos nocturnos' />
      <SliderEvent titleSlider='Conciertos' />
      <SliderEvent titleSlider='Eventos familiares' />
    </main>
  )
}
