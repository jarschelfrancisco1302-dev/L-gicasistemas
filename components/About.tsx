import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            Tecnologia feita na prática, por quem opera em escala
          </h2>
          <div className="mt-2 w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg prose-indigo mx-auto text-gray-500 text-justify">
          <p className="mb-6">
            Nascida dentro de um grupo de infraestrutura com mais de <strong>23 mil assinantes</strong>, a Lógica Sistemas desenvolve tecnologia baseada na realidade operacional. Nossas soluções — de ERPs a automação de redes — não são apenas códigos; são ferramentas forjadas para resolver desafios reais de escalabilidade e segurança que enfrentamos diariamente.
          </p>
          <p>
            Aqui, a tecnologia é validada no "campo de batalha" antes de chegar a você. Entregamos exatamente o que usamos: sistemas robustos, testados em produção e prontos para o mercado. Acreditamos em uma filosofia simples: <strong>quem faz, sabe.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};