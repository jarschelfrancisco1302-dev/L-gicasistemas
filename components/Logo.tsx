import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="https://grieving-bronze-r7so0n5fy8.edgeone.app/2-removebg-preview.png" 
        alt="Lógica Sistemas" 
        className="h-12 w-auto object-contain"
      />
      <div className="flex flex-col">
        <span className="font-bold text-2xl leading-none text-slate-700">
          LÓGICA <span className="font-light text-slate-500">SISTEMAS</span>
        </span>
        <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brand-accent uppercase mt-1">
          INTELIGÊNCIA QUE CONECTA
        </span>
      </div>
    </div>
  );
};