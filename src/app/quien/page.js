import Image from 'next/image'
import Link from 'next/link';
// STYLES
import styles from '../quien/quien.module.css'
// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section id='section1' className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/BBPBethancourt.jpg"
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
          <h1>BBP Bethancourt</h1>
          <div className={styles.poema}>
            <h2>Abrazo sin cifra</h2>
            <p>Y te quiere la abrumadora ira<br />
              que se niega hacer este viaje hacia la muerte,<br />
              sin haber logrado ese instante de ternura<br />
              que la redima en la eternidad</p>
          </div>
          <Link href='/#section2'>
            Abrazos para una nariz sin olfato
          </Link>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.title}>
          <h3>Nota biográfica</h3>
          <h2><strong>Ariadna García Rodríguez</strong><br />
            (pseudónimo <strong>BBP Bethancourt</strong>)</h2>
        </div>
        <div className={styles.description}>
          <p>
            Cuenta con experiencia internacional y experticia cultural desarrollada en Estados
            Unidos, Francia, España, Grecia y Panamá como docente-formadora, investigadora,
            escritora, traductora y editora de materiales impresos. Es cofundadora y vicepresidenta
            de la Asociación sin fines de lucro <strong>Taller Cultura</strong> (2013 al presente), donde ejerce,
            además, como directora de Taller Cultura Publicaciones. Igualmente, forma parte de la
            organización no gubernamental <strong>Con Igualdad</strong> (desde 2021 al presente), donde funge
            como vocal. De 2015 a 2019 ejerció como enlace técnico en Asuntos Internacionales
            para organismos y conferencias internacionales con carácter de representación de país
            en la Oficina de Cooperación Internacional del entonces Instituto Nacional de la Mujer
            de la República de Panamá (INAMU). Tiene en su haber publicaciones en escritura
            creativa, en Panamá y en el extranjero, bajo el seudónimo literario <strong>B.B.P.
            Bethancourt</strong> (en honor a su madre y sus abuelas), entre estas el Abrazos de una nariz sin olfato, España 2012;
            Patrimonio Intangible, El Salvador 2018; Opus sostenido: alegoría musical de
            Abrazos de una nariz sin olfato, Panamá 2014 (poesía sonora). Como ensayista
            destaca un artículo conocido en el medio académico nacional titulado “Vasco Núñez de
            Balboa o la geopsiquis de una nación” (2001) el cual trata sobre la construcción de la
            identidad nacional panameña a través de la figura del conquistador. Sus áreas de
            interés son los estudios espaciales (de corte geo-históricos) y lingüísticos-literarios,
            cultura y sociedad, derechos humanos de las mujeres y cooperación internacional.
            Actualmente, brinda servicios de docencia, formación y mentoría en asuntos de orden
            socio-lingüístico, artístico-cultural, formación ciudadana y emprendimiento, en línea y
            presencial, para diferentes públicos; así como consultorías relacionadas a cooperación
            para el desarrollo y género.
          </p>
        </div>
      </section>
      <Footer
        page="/quien"
        section1="Section 1"
        section2="Section 2"
        section3="Section 3"
        section4="Section 4"
      />
    </main >
  )
}
