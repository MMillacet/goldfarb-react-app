import { Link } from "react-router-dom";


export default function Header() {
  return (
    
    <header className="relative flex items-center mb-5 text-center">
     <div className="max-w-2xl mx-auto p-5 bg-#00243f rounded-lg sm:max-w-full sm:px-3">
      <img src="https://www.goldfarb.com.uy/images/logos/goldfarb-logo.png" alt="Logo" className="w-40 h-40 object-contain absolute right-0" />
      <div className="flex justify-center w-full"> {/* Nuevo contenedor div */}
        <h1 id="titulo" className="text-4xl font-bold text-white">Cartelera de Novedades</h1>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/agregar">Agregar Aviso</Link></li>
            <li><Link to="/avisos">Ver Avisos</Link></li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
    
  );
}
