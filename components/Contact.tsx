import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Vamos Conversar?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Estamos prontos para entender seu desafio e propor a melhor solução tecnológica.
          </p>
        </div>

        <div className="bg-brand-dark rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Contact Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">Localização</p>
                    <p className="text-gray-400">Natal/RN</p>
                    <p className="text-gray-500 text-sm mt-1">Atendimento remoto para todo Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">Telefone / WhatsApp</p>
                    <a href="https://wa.me/558432235009" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition block">
                      (84) 3223-5009
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">E-mail</p>
                    <a href="mailto:atendimento@logicasistemas.com.br" className="text-gray-400 hover:text-white transition break-all">
                      atendimento@logicasistemas.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">Siga-nos</p>
                    <a href="https://instagram.com/logica.sistemas" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                      @logica.sistemas
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800 p-8 md:p-12 flex flex-col justify-center items-center text-center">
               <h3 className="text-xl font-semibold text-white mb-6">Inicie seu projeto agora</h3>
               <p className="text-gray-400 mb-8">
                 Escolha seu canal de preferência e fale diretamente com um de nossos especialistas.
               </p>
               
               <div className="w-full space-y-4">
                 <a href="https://wa.me/558432235009" target="_blank" rel="noreferrer" className="block w-full">
                    <Button fullWidth className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 border-none">
                      <MessageCircle className="w-5 h-5" />
                      Chamar no WhatsApp
                    </Button>
                 </a>
                 <a href="mailto:atendimento@logicasistemas.com.br" className="block w-full">
                    <Button fullWidth variant="outline" className="text-white border-white hover:bg-white/10 flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Enviar E-mail
                    </Button>
                 </a>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};