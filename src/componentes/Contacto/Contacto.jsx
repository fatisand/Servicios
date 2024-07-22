import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import styles from './ContactoStyle.module.css';

function Contacto() {
    const [formData, setFormData] = useState({
        from_name:'',
        message:'',
        email:''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_93r5ddj' , // service ID
            'template_fggfwaj', //template id
            e.target,
            'upgI2MC41kADnNVmo' // Reemplaza con tu User ID
        ).then((result)=>{
            console.log(result.text);
            toast.success('Mensaje enviado exitosamente');
            setFormData({
              from_name: '',
              message: '',
              email: ''
            });
        }, (error)=>{
            console.log(error.text);
            toast.error('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');

        });    
    };
    return(
        <section id='contacto' className={styles.container}>
        <h1 className='sectionTitle'>Contacto</h1>
        <form onSubmit={handleSubmit}>
        <div className="formGroup">
        <label htmlFor="from_name" hidden>
            Nombre
          </label>
          <input 
            type="text" 
            name='from_name' 
            id='from_name' 
            placeholder='Nombre' 
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input 
            type="email" 
            name='email' 
            id='email' 
            placeholder='Email' 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="message" hidden>
            Mensaje
          </label>
          <textarea 
            name='message' 
            id='message' 
            placeholder='Mensaje' 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className='hover btn' type="submit" value="Enviar"/>
        </form>

    <ToastContainer />
    </section>
);
}

export default Contacto;