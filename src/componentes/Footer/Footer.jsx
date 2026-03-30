import styles from './FooterStyle.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2026 ArtiFact. <br/>
        Este sitio web es un proyecto académico y no ofrece servicios reales.
        </p>
    </section>
  )
}

export default Footer