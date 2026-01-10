import React from 'react';
import { ArrowRight, Code2, Rocket, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
         {/* Abstract tech background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-blue/20 opacity-90"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold tracking-wide text-brand-accent uppercase">
                Inovação e Tecnologia
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-white">
                <span className="block">Desenvolvimento de</span>
                <span className="block text-[#3b82f6]">Software Sob Medida</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Soluções digitais personalizadas, seguras e escaláveis para empresas que querem crescer. Transformamos processos complexos em sistemas inteligentes.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <a 
                href="https://wa.me/558432235009" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-whatsapp hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 gap-2 cursor-pointer"
              >
                Fale com a gente <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Value Props */}
            <div className="mt-8 border-t border-gray-700 pt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-brand-accent" /> Sistemas Personalizados
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-brand-accent" /> Alta Performance
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-accent" /> Segurança Garantida
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                  alt="Painel de controle de software"
                />
                <div className="absolute inset-0 bg-brand-accent/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};