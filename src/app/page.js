import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section id='section1' className={styles.section1}>
                <Image
                    className={styles.imageS1}
                    src="/typeWriter2.png"
                    alt=""
                    width={1400}
                    height={550}
                    /* objectFit="cover" */
                />
                {/* <Image
                            className={styles.imageS1}
                            src="/icecream.jpg"
                            alt=""
                            width={414}
                            height={573}
                            objectFit="cover"
                            objectPosition="15%"
                        /> */}
                <div className={styles.text1_a1_s1}>
                    <p>"A la esperanza, aniquiladora de todo pesimismo"</p>
                    <Link href='#section2'>
                    Abrazos para una nariz sin olfato &darr;
                    </Link>
                </div>
            </section>
      <div id='section2' className={styles.section12}>
        <div className={styles.texto}>
          <h2>Nombre del libro</h2>
          <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia iusto tenetur possimus dolor voluptas, modi, cum eius molestias saepe at aut voluptatum deserunt facere aliquam officia labore, nam dicta a." -- Ariadna Rodríguez</p>
        </div>
        <div className={styles.portada}>
          <Image
            src="/logo.jpg"
            alt="Vercel Logo"
            className={styles.logo}
            width={270}
            height={350}
            priority
          />
        </div>
      </div>
      <div className={styles.section2}>
        <h2>News</h2>
        <div className={styles.container}>
          <div className={styles.portada2}>
            <Image
              src="/logo.jpg"
              alt="Vercel Logo"
              className={styles.logo}
              width={270}
              height={270}
              priority
            />
          </div>
          <div className={styles.texto2}>
            <h4>27/08/2023</h4>
            <h2>Noticia X</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta saepe eveniet rerum sapiente exercitationem cumque ad excepturi temporibus, ducimus modi dolore? Nihil explicabo sed odio a, dolorem nostrum molestias quasi?
            Distinctio repudiandae non modi cum architecto soluta accusantium numquam vero, velit neque deleniti corrupti sit repellat, sunt eaque delectus vitae nisi eos? Dolore ad dolores id numquam dolorum molestias at.
            Quam veritatis tempora eaque ducimus voluptas dolorum beatae a quidem! Eaque saepe id error voluptatibus molestiae ratione quo quaerat fugiat, a, labore accusantium quasi rerum harum ea? Dicta, vitae ratione.</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.portada2}>
            <Image
              src="/logo.jpg"
              alt="Vercel Logo"
              className={styles.logo}
              width={270}
              height={270}
              priority
            />
          </div>
          <div className={styles.texto2}>
            <h4>27/08/2023</h4>
            <h2>Noticia X</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta saepe eveniet rerum sapiente exercitationem cumque ad excepturi temporibus, ducimus modi dolore? Nihil explicabo sed odio a, dolorem nostrum molestias quasi?
            Distinctio repudiandae non modi cum architecto soluta accusantium numquam vero, velit neque deleniti corrupti sit repellat, sunt eaque delectus vitae nisi eos? Dolore ad dolores id numquam dolorum molestias at.
            Quam veritatis tempora eaque ducimus voluptas dolorum beatae a quidem! Eaque saepe id error voluptatibus molestiae ratione quo quaerat fugiat, a, labore accusantium quasi rerum harum ea? Dicta, vitae ratione.</p>
          </div>
        </div>
      </div>
      <Footer
                page="/"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
                section4="Section 4"
            />
    </main>
  )
}
