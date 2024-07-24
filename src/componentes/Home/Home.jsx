import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './HomeStyle.module.css';
import arqui1 from '/src/assets/arqui1.jpg';
import arqui2 from '/src/assets/arqui2.jpg';
import arqui3 from '/src/assets/arqui3.jpg';
import boceto from '/src/assets/maqueta1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <section id='home' className={styles.container}>
        <h1 className='sectionTitle'>Arquitectura y Diseño</h1>
        <div className={styles.info}>
          <h2>
            En ArquitecturaCreativa, creemos que la arquitectura no se trata solo de edificios, sino de crear espacios que inspiran y mejoran la vida de quienes los habitan. Este fragmento establece la visión de la firma y la importancia de la arquitectura en la mejora de la vida de las personas. 
          </h2>
        </div>
        <div className={styles.carouselContainer}> 
          <p className={styles.quote}>LA ARQUITECTURA PODRÍA DESCRIBIRSE COMO UNA DE LAS ACTIVIDADES CULTURALES MÁS COMPLEJAS E IMPORTANTES DEL PLANETA <br/> - Yvonne Farrell <br/><br/>
          EL HOMBRE NO PUEDE CREAR SIN DESTRUIR SIMULTANEAMENTE. - Alvar Aalto
          </p>
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
            <div className='img'>
              <img src={boceto} alt="Foto Boceto" className={styles.home} />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Home;
