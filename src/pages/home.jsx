import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/header/header';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
    </div>
  );
}

export default Home;
