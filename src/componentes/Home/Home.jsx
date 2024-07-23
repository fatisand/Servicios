import React from 'react';
import styles from './HomeStyle.module.css';
import arqui1 from '/src/assets/arqui1.jpg';
import arqui2 from '/src/assets/arqui2.jpg';
import arqui3 from '/src/assets/arqui3.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <section id='home' className={styles.container}>
      <h1 className={styles.sectionTitle}>Arquitectura y Diseño</h1>
      <div className={styles.info}>
        <h2>
        En ArquitecturaCreativa, creemos que la arquitectura no se trata solo de edificios, sino de crear espacios que inspiran y mejoran la vida de quienes los habitan. Este fragmento establece la visión de la firma y la importancia de la arquitectura en la mejora de la vida de las personas. Además, nuestro equipo de arquitectos está disponible para presentar ideas o consultas, siempre comprometidos a ofrecer soluciones innovadoras y personalizadas para cada proyecto..
        </h2>
      </div>
      <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          className={styles.carousel}
        >
          <div className='img'>
            <img src={arqui1} alt="Foto Arquitectura 1" className={styles.home} />
          </div>
          <div className='img'>
            <img src={arqui2} alt="Foto Arquitectura 2" className={styles.home} />
          </div>
          <div className='img'>
            <img src={arqui3} alt="Foto Arquitectura 3" className={styles.home} />
          </div>
        </Carousel>
    </section>
  );
};

export default Home;
