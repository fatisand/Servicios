import styles from './FooterStyle.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 ArquitecturaCreativa. <br/>
        Todos los derechos reservados.
        </p>
    </section>
  )
}

export default Footer