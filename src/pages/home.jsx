import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/header/header';
import Footer from '../components/header/footer';


export const Home = () => {
  return (
    <body className='bg-gradient-to-r from-blue-400 to-purple-600 '>
      
    
    <div>
      <Header />
      <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl  mx-auto ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo à Plataforma de Estudantes</h1>
            <p className="text-lg text-white mb-8">Construído por Sueile Badrú</p>
            <Link to="/users">
              <button className="flex relative right-24 top-6 bg-white text-blue-500 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Ver Estudantes
              </button>
            </Link>
            <Link to="/contact">
              <button className="flex relative left-24 bottom-6 justify-center bg-white text-blue-500 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Ver Contactos
              </button>
            </Link>
          </motion.div>
        </div>
        
      </div>
      <motion.footer   initial={{ x: '-50%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 5.0, delay: 0.4 }}>
      <Footer/>
            
        </motion.footer>
    </div>
    </body>
  );
}

export default Home;
