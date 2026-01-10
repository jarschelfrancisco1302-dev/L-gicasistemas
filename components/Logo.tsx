import React from 'react';
import { Brain } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Icon designed to look like the network brain in the screenshot */}
      <div className="relative flex-shrink-0">
        <Brain className="h-12 w-12 text-slate-800" strokeWidth={1.5} />
        {/* Decorative dots to simulate the nodes in the screenshot */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-brand-blue rounded-full opacity-80"></div>
        <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-brand-blue rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-brand-accent rounded-full opacity-80"></div>
      </div>
      
      <div className="flex flex-col justify-center">
        <h1 className="text-xl sm:text-2xl leading-none text-slate-900 tracking-tight">
          <span className="font-bold">LÓGICA</span> <span className="font-light">SISTEMAS</span>
        </h1>
        <span className="text-xs sm:text-sm text-brand-blue font-medium tracking-wide -mt-0.5">
          A inteligência que conecta
        </span>
      </div>
    </div>
  );
};