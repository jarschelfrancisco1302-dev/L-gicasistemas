import React from 'react';
import { 
  LayoutDashboard, 
  Tv, 
  Phone, 
  Activity, 
  Network, 
  MessageCircle, 
  PhoneCall, 
  Wifi, 
  Video 
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Sistema ERP',
    description: 'Gestão completa para provedores. Financeiro, estoque, contratos e faturamento integrados em uma única plataforma robusta.',
    icon: LayoutDashboard,
  },
  {
    title: 'Sistema de TV',
    description: 'Plataforma completa de TV por assinatura (ISP TV) e streaming, pronta para entregar conteúdo linear e VOD aos seus clientes.',
    icon: Tv,
  },
  {
    title: 'Sistema para Telefonia',
    description: 'Solução para gestão de operadoras STFC/SCM, com billing preciso, portabilidade e controle de rotas de voz.',
    icon: Phone,
  },
  {
    title: 'Monitoramento de Ativos',
    description: 'Controle em tempo real de OLTs, switches, servidores e enlaces. Dashboards proativos para NOCs de alta performance.',
    icon: Activity,
  },
  {
    title: 'Análise de Flows',
    description: 'Inteligência de rede profunda. Identifique gargalos, origem de tráfego e ataques DDoS através da análise de protocolos de fluxo.',
    icon: Network,
  },
  {
    title: 'Bot de WhatsApp',
    description: 'Automação inteligente para atendimento, emissão de 2ª via, desbloqueio de confiança e triagem de suporte técnico.',
    icon: MessageCircle,
  },
  {
    title: 'Sistema de PABX',
    description: 'Central telefônica virtual Multi-Tenant. URA, gravação de chamadas, filas de atendimento e ramais remotos via App/Web.',
    icon: PhoneCall,
  },
  {
    title: 'Sistema TR-069 (ACS)',
    description: 'Gerência remota massiva de CPEs. Provisionamento zero-touch, troca de senha Wi-Fi e diagnósticos avançados sem visita técnica.',
    icon: Wifi,
  },
  {
    title: 'Sistema para CFTV',
    description: 'Plataforma de videomonitoramento em nuvem. Gestão centralizada de câmeras, gravação segura e visualização via aplicativo.',
    icon: Video,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-accent font-semibold tracking-wide uppercase">Nossas Soluções</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Um Ecossistema Completo
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Desenvolvemos internamente todas as ferramentas necessárias para operar grandes infraestruturas de telecom e tecnologia.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="pt-6 group">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative">
                  {/* Decorative background - contained and clipped */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                  </div>
                  
                  <div className="-mt-6 relative">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-dark rounded-md shadow-lg group-hover:bg-brand-accent transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-gray-900 tracking-tight">{service.title}</h3>
                    <p className="mt-4 text-base text-gray-500 leading-relaxed">
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