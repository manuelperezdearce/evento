import { Hero } from './common/components';
import { SliderEvents } from './common/components/SliderEvents';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hello no country</h1>
      <Hero />
      <SliderEvents />
      <SliderEvents />
      <SliderEvents />
    </main>
  );
}
