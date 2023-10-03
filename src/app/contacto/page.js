import Image from 'next/image'
import Link from 'next/link';
// STYLES
import styles from '../contacto/contacto.module.css'
// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Page() {
    return (
        <main className={styles.main}>
            <Navbar />
            <section className={styles.sectionMain}>

                <div className={styles.photo}>
                    <Image
                        className={styles.imageS1}
                        src="/logo.jpg"
                        alt=""
                        width={500}
                        height={350}
                    /* objectFit="cover" */
                    />
                </div>
                <div className={styles.text}>
                    <h1>
                        Taller Cultura
                    </h1>
                    <p>
                        Taller Cultura es una asociación fundada en 2013 para la promoción de la cultura, las ciencias sociales y humanísticas, con un interés especial en entrelazar las áreas de literatura, medioambiente y sociedad.
                    </p>
                    <button>Read more</button>
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
