import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-brand-accent overflow-hidden lg:py-24">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Tecnologia feita na prática, por quem opera em escala
          </h2>
          <div className="mt-4 w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
        </div>

        <div className="text-lg text-indigo-50 text-justify space-y-6 leading-relaxed">
          <p>
            Nascida dentro de um grupo de infraestrutura com mais de <strong className="text-white font-semibold">23 mil assinantes</strong>, a Lógica Sistemas desenvolve tecnologia baseada na realidade operacional. Nossas soluções — de ERPs a automação de redes — não são apenas códigos; são ferramentas forjadas para resolver desafios reais de escalabilidade e segurança que enfrentamos diariamente.
          </p>
          <p>
            Aqui, a tecnologia é validada no "campo de batalha" antes de chegar a você. Entregamos exatamente o que usamos: sistemas robustos, testados em produção e prontos para o mercado. Acreditamos em uma filosofia simples: <strong className="text-white font-semibold">quem faz, sabe.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};