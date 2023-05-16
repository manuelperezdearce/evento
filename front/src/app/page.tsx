import { Hero } from './components/Hero'
import { SliderEvents } from './components/SliderEvents'
import styles from './page.module.css'

export default function Home () {
  return (
    <main className={styles.main}>
      <h1>hello no country</h1>
      <Hero />
      <SliderEvents />
      <SliderEvents />
      <SliderEvents />
    </main>
  )
}
