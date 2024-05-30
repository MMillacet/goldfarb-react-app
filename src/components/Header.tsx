import { Link } from "react-router-dom";


export default function Header() {
  return (
    
    <header className="relative mb-5 bg-blue-950 ">
     <div className="max-w-2xl mx-auto p-5 rounded-lg sm:max-w-full sm:px-3">
      <img src="https://www.goldfarb.com.uy/images/logos/goldfarb-logo.png" alt="Logo" className=" pt-8 pr-4 absolute bottom-1 w-40 h-40 object-contain absolute right-0" />
      <div className="flex justify-center w-full"> {/* Nuevo contenedor div */}
        <h1 id="titulo" className="text-4xl font-bold text-white">Cartelera de Novedades</h1>
    
      </div>
      </div>
      <div className="flex justify-center items-center mr-56">
      <nav className="">
          <ul className=" flex text-white text-bold text-lg mr-56">
            <li><Link to="/list-avisos">Ver avisos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
}
