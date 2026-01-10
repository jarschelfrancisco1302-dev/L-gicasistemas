import React from 'react';
import { CheckCircle, Zap, UserCheck, Smartphone } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Atendimento Personalizado',
    description: 'Entendemos a fundo a dor do seu negócio antes de escrever uma linha de código.',
    icon: UserCheck,
  },
  {
    title: 'Entrega Ágil',
    description: 'Metodologias ágeis para entregas constantes, permitindo feedback rápido e ajustes precisos.',
    icon: Zap,
  },
  {
    title: 'Tecnologias Modernas',
    description: 'Utilizamos stacks atuais (React, Node, Cloud) garantindo longevidade ao projeto.',
    icon: Smartphone,
  },
  {
    title: 'Foco no Resultado',
    description: 'Nosso objetivo não é apenas entregar código, mas gerar valor e lucro para sua empresa.',
    icon: CheckCircle,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Por que escolher a Lógica Sistemas?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Não somos apenas desenvolvedores, somos parceiros estratégicos do seu negócio.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Qualidade e Confiança
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Combinamos expertise técnica com visão de negócios. Nosso diferencial está na capacidade de traduzir necessidades complexas em softwares simples e eficientes.
            </p>

            <dl className="mt-10 space-y-10">
              {features.map((item) => (
                <div key={item.title} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
             <div className="relative mx-auto rounded-xl shadow-xl overflow-hidden lg:max-w-none">
                 <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Equipe trabalhando" 
                    className="w-full object-cover"
                 />
                 <div className="absolute inset-0 bg-brand-blue/20"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};