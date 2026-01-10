import React from 'react';
import { Layout, Database, Workflow, Globe, Settings, Server } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Sistemas Web',
    description: 'Plataformas completas acessíveis de qualquer lugar, desenvolvidas para agilizar a gestão do seu negócio.',
    icon: Globe,
  },
  {
    title: 'Software Sob Medida',
    description: 'Desenvolvimento focado nas regras de negócio da sua empresa, garantindo aderência total aos seus processos.',
    icon: Layout,
  },
  {
    title: 'Automação de Processos',
    description: 'Elimine tarefas repetitivas e manuais com robôs e scripts inteligentes que aumentam a produtividade.',
    icon: Workflow,
  },
  {
    title: 'Integrações e APIs',
    description: 'Conectamos seus sistemas (ERP, CRM, E-commerce) para que os dados fluam de forma automática e segura.',
    icon: Database,
  },
  {
    title: 'Manutenção e Suporte',
    description: 'Acompanhamento técnico contínuo para garantir que seu sistema esteja sempre atualizado e seguro.',
    icon: Settings,
  },
  {
    title: 'Consultoria Técnica',
    description: 'Análise de arquitetura e tecnologias para modernizar seu legado e preparar sua empresa para o futuro.',
    icon: Server,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-accent font-semibold tracking-wide uppercase">O que fazemos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluções Tecnológicas Completas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Da concepção à entrega, cuidamos de todo o ciclo de vida do seu software com excelência técnica.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-dark rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};