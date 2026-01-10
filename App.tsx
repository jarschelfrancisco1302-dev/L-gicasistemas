import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        {/* Call to Action Wrapper for final push before contact */}
        <section className="bg-brand-accent py-12">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-4">Pronto para elevar seu negócio?</h2>
                <p className="text-indigo-100 text-lg mb-8">
                    Não deixe para depois a inovação que sua empresa precisa hoje.
                </p>
                <a 
                  href="https://wa.me/558432235009" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white text-brand-accent font-bold py-3 px-8 rounded-md hover:bg-gray-50 transition shadow-lg"
                >
                    Entre em Contato Agora
                </a>
            </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;