import React from 'react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    quote: "A Lógica Sistemas transformou a maneira como gerenciamos nosso estoque. O sistema é intuitivo e reduziu nossos erros em 90%.",
    author: "Carlos Mendes",
    role: "Diretor de Operações",
    company: "Distribuidora Norte"
  },
  {
    quote: "Profissionalismo ímpar. Entenderam nossa necessidade e entregaram uma solução web que escalou nossas vendas online.",
    author: "Fernanda Soares",
    role: "CEO",
    company: "Varejo Digital RN"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-dark py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white mb-12">
          O que dizem nossos parceiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-8 shadow-lg relative">
              <svg className="absolute top-6 left-6 h-8 w-8 text-gray-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative mt-4 text-lg text-gray-300 italic">"{t.quote}"</p>
              <div className="mt-6 border-t border-gray-700 pt-4">
                <p className="text-base font-semibold text-white">{t.author}</p>
                <p className="text-sm text-brand-blue">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};