import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="flex flex-col justify-center">
        <span className="font-bold text-2xl leading-none text-slate-700 tracking-tight">
          LÓGICA <span className="font-light text-slate-400">SISTEMAS</span>
        </span>
        <span className="text-[0.6rem] font-bold tracking-[0.25em] text-brand-accent uppercase mt-1 ml-0.5">
          INTELIGÊNCIA QUE CONECTA
        </span>
      </div>
    </div>
  );
};