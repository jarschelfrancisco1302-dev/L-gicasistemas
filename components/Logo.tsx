import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Icon Logo - Premium gradient style */}
      <div className="bg-gradient-to-br from-brand-accent to-brand-blue p-2.5 rounded-xl shadow-lg shadow-brand-accent/20">
        <BrainCircuit className="h-7 w-7 text-white" />
      </div>
      
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl leading-none tracking-tight text-slate-900">
          <span className="font-extrabold text-brand-dark">LÓGICA</span>
          <span className="font-light text-slate-600 ml-1">SISTEMAS</span>
        </h1>
        <span className="text-xs font-semibold tracking-widest text-brand-accent uppercase mt-1">
          Inteligência que conecta
        </span>
      </div>
    </div>
  );
};