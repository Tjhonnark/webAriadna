import Image from 'next/image'
import styles from './page.module.css'
// COMPONENTS
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.perfil}>
          <h1>Ariadna García Rodriguez</h1>
          <a href="https://7hosoft.vercel.app">@</a>
          <a href="https://7hosoft.vercel.app">@tallercultura</a>
        </div>
        <div className={styles.perfilDescription}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam nihil dolorum reprehenderit eligendi sint molestiae voluptates, perferendis ipsam reiciendis quidem quasi deleniti ut similique temporibus est consequuntur provident explicabo.
          </p>
        </div>
        <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="EyraHarbar"
          width={320}
          height={260}
          priority
        />
      </div>
      
    </main>
  )
}
