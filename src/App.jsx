import './App.css'
import Home from '../src/componentes/Home/Home';
import Servicios from '../src/componentes/Servicios/Servicios';
import Contacto from '../src/componentes/Contacto/Contacto';
import Footer from '../src/componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
import SobreNosotros from './componentes/SobreNosotros/SobreNosotros';
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Servicios/>
      <SobreNosotros/>
      <Contacto/>
      <Footer/>
    
    </>
  )
}

export default App
