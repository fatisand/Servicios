import React from 'react';
import styles from './ServiciosStyle.module.css';
import ServiciosCard from './ServiciosCard';
import diseno from '/src/assets/diseñoArquitectonico.jpg';
import disenoInter from '/src/assets/diseñodeInteriores.jpg';
import planificacion from '/src/assets/planificacionurbana.jpg';
import documentacion from '/src/assets/documentacion.jpg';
import consultoria from '/src/assets/consultoria.jpg';
import reconstruccion from '/src/assets/reconstruccion.jpg';


const Servicios = () => {
  return (
    <section id='servicios' className={styles.container}>
      <h1 className='sectionTitle'>Servicios</h1>
      <p>
        En <strong>Arquitectura Creativa</strong> te ofrecemos una variedad de servicios especializados diseñados para satisfacer tus necesidades en todas las etapas del proceso de construcción y desarrollo de proyectos arquitectónicos.
      </p>
      <div className={styles.ServiciosContainer}>
        <ServiciosCard 
          src={diseno} 
          h3="Diseño Arquitectonico" 
          p="Desarrollo de conceptos y diseños detallados para edificios y estructuras."
        />
        <ServiciosCard 
          src={disenoInter} 
          h3="Diseño de Interiores" 
          p="Diseño de espacios interiores residenciales, comerciales e institucionales."
        />
        <ServiciosCard 
          src={planificacion} 
          h3="Planificación Urbana" 
          p="Desarrollo de planes maestros para áreas urbanas y rurales."
        />
        <ServiciosCard 
          src={documentacion} 
          h3="Documentación de construcción" 
          p="Preparación de documentos técnicos, especificaciones y detalles constructivos."
        />
          <ServiciosCard 
          src={consultoria} 
          h3="Consultoria y Asesoramiento" 
          p="Evaluación de proyectos existentes y propuestas de mejora."
        />
          <ServiciosCard 
          src={reconstruccion} 
          h3=" Restauración y Conservación" 
          p="Proyectos de restauración y conservación de edificios."
        />
      </div>
    </section>
  );
}

export default Servicios;
