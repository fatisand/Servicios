import React from 'react';
import styles from './SobreNosotrosStyle.module.css';

const SobreNosotros = () => {
  return (
    <>
      <section id='sobrenosotros' className={styles.container}>
        <h1 className={styles.title}>Sobre Nosotros</h1>
        <div className={styles.parrafo}>
        <p>
          En <strong>Arquitectura Creativa</strong>, nos especializamos en transformar tus ideas en realidades sorprendentes. Fundada con la visión de revolucionar el mundo de la arquitectura, nuestra consultoría se dedica a ofrecer soluciones innovadoras y personalizadas que combinan funcionalidad, estética y sostenibilidad.
        </p>
        <p>
          Creemos que la arquitectura no es solo la creación de espacios; es el arte de construir experiencias. Cada proyecto es una oportunidad para fusionar creatividad con técnica, y es nuestra misión ofrecer soluciones que no solo cumplan con tus expectativas, sino que las superen. En <strong>Arquitectura Creativa</strong>, cada diseño es único, pensado meticulosamente para adaptarse a las necesidades y sueños de nuestros clientes.
        </p>
        <p>
          Nuestro equipo está compuesto por arquitectos y diseñadores altamente calificados, apasionados por su trabajo y dedicados a ofrecer soluciones de diseño excepcionales. Cada miembro aporta una combinación única de habilidades, experiencia y visión creativa, asegurando que cada proyecto se ejecute con la máxima calidad y profesionalismo.
        </p>
        <p>
          <strong>Contáctanos</strong><br />
          Estamos listos para colaborar contigo en tu próximo proyecto. Descubre cómo <strong>Arquitectura Creativa</strong> puede transformar tu visión en realidad. Ponte en contacto con nosotros para una consulta inicial y da el primer paso hacia un diseño innovador y personalizado.
        </p>
        </div>
      </section>
    </>
  )
}

export default SobreNosotros;
