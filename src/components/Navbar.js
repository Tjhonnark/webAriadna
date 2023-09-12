import Link from 'next/link';
import Image from 'next/image';
/* COMPONENTS */
/* STYLES */
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    const link = () => {
        var sound = new Audio('sounds/close.wav')
        sound.play()
    }

    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoA}>
                    {/*<a
                        href="/"
                    >
                        <Image
                            src="/logo.jpg"
                            alt="Vercel Logo"
                            className={styles.logo}
                            width={190}
                            height={120}
                            priority
                        />
                    </a>*/}
                    <h1>Ariadna García Rodríguez</h1>
                </div>
                <div className={styles.line}></div>
                <div className={styles.navbar}>
                    <div className={styles.item}>
                        <Link href="/">
                            <i className="bi bi-house-fill"></i>Inicio
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/sobremi">
                            <i className="bi bi-people-fill"></i>Quien
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/literaria">
                            <i className="bi bi-box-seam"></i>Haceres
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/photos">
                            <i className="bi bi-envelope-paper-fill"></i>Taller cultura
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/asociations">
                            <i className="bi bi-envelope-paper-fill"></i>Contacto
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}