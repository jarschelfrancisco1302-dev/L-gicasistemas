import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lógica Sistemas. Todos os direitos reservados.
          </span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
            Termos de Uso
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};