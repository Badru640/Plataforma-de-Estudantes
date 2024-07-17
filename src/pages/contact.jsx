import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/header/header';
import Foto from "../img/IMG_2056.jpeg";

export const Contact = () => {
    const handleSubmit = () => {
        alert('Mensagem enviada!');
    };

    return (
        <div>
            <Header />
            <div className="flex bg-gradient-to-r from-white to-purple-200 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto p-6 mt-10 rounded-lg shadow-lg flex-1"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Entre em Contato Conosco</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="name" className="text-gray-700 font-semibold">Nome:</label>
                            <input type="text" id="name" name="name" required placeholder="Digite seu nome" className="border-gray-300 border p-2 rounded mt-1" />
                        </motion.div>
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="email" className="text-gray-700 font-semibold">E-mail:</label>
                            <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" className="border-gray-300 border p-2 rounded mt-1" />
                        </motion.div>
                        <motion.div
                            initial={{ y: '50%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="message" className="text-gray-700 font-semibold">Mensagem:</label>
                            <textarea id="message" name="message" rows="4" required placeholder="Digite sua mensagem aqui" className="border-gray-300 border p-2 rounded mt-1"></textarea>
                        </motion.div>
                        <motion.button
                            type="submit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300 mt-4"
                        >
                            Enviar Mensagem
                        </motion.button>
                    </form>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-1/3 bg-gradient-to-l from-gray-800 to-black p-6 text-white flex flex-col items-center"
                >
                    <img src={Foto} alt="Foto" className="border border-black rounded-2xl shadow-xl transition-all duration-1000 ease-in-out m-5 hover:border-purple-800 w-auto h-96 object-cover mb-4" />
                    <h3 className="text-xl font-semibold mt-2 mb-4 text-center">Informações de Contato</h3>
                    <p className="mb-2"><strong>Telefone:</strong> +258 82 245 1479</p>
                    <p className="mb-2"><strong>Email:</strong> sbsbadroo@gmail.com</p>
                    <p className="mb-2"><strong>Endereço:</strong> Av. 24 de Julho, 882, Maputo city</p>
                </motion.aside>
            </div>
        </div>
    );
}

export default Contact;
