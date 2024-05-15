import React from 'react';
import Avisos from './components/Avisos';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-5 bg-#00243f rounded-lg sm:max-w-full sm:px-3">
      <header className="relative flex items-center mb-5">
      <img src="https://www.goldfarb.com.uy/images/logos/goldfarb-logo.png" alt="Logo" className="w-40 h-40 object-contain absolute right-0" />
        <h1 className="text-2xl font-bold">Cartelera de Novedades</h1>
      </header>
      <Avisos />
    </div>
  );
}

export default App;
