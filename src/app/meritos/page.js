import Image from 'next/image'
// STYLES
import styles from '../meritos/meritos.module.css'
// COMPONENTS
import Navbar from '../../components/Navbar';

export default function Pages() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.meritos}>
                <h1>
                    Méritos literarios
                </h1>
                <h2>
                    Literatura infantil y juvenil
                </h2>
                <div className={styles.container}>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                    <a 
                    href=''
                    className={styles.card}>
                        <Image
                            className={styles.logo}
                            src="/perfil.png"
                            alt="EyraHarbar"
                            width={220}
                            height={260}
                            priority
                        />
                        <div className={styles.text}>
                            <h3>2022 - Autobús esperanza, poemario</h3>
                            <p>Primer Premio Concurso Nacional de Literatura Infantil y Juvenil Carlos Francisco Changmarín, Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de Delgado.</p>
                        </div>
                    </a>
                </div>
            </div>


        </main>
    )
}
