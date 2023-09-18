import Image from 'next/image'
import Link from 'next/link';
// STYLES
import styles from '../haceres/haceres.module.css'
// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'

export default function Pages() {
    return (
        <main className={styles.main}>
            <Navbar />
            <section id='section1' className={styles.section1}>
                <Image
                    className={styles.imageS1}
                    src="/books.jpg"
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
                    <h2>HACERES</h2>
                </div>
            </section>
            <section className={styles.publicaciones}>
                <h2>
                    Publicaciones
                </h2>
                <div className={styles.container}>
                    <div
                        href=''
                        className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/example.jpg"
                            alt="Ariadna Garcia"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2012 - Abrazos de una nariz sin olfato</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nemo eum impedit optio, non iusto commodi deleniti rerum explicabo minus recusandae facere quidem ea necessitatibus, enim repellat porro asperiores. Voluptatibus!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.trayectoria}>
                <h2>
                    Trayectoria
                </h2>
            </section>
            <Footer
                page="/haceres"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
                section4="Section 4"
            />
        </main>
    )
}
