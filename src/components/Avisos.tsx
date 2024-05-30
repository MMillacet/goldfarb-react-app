import React, { useState, ChangeEvent } from 'react';

interface Aviso {
  id: number;
  fecha: string;
  texto: string;
  imagen: string;
  selector: string;
}

const Avisos: React.FC = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({ selector: '', fecha: '', aviso: '', imagen: null as File | null });

  const toggleFormulario = () => {
    setFormVisible(!formVisible);
  };

  const handleSelectorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      selector: value,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, imagen: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convertir formData a un string JSON y codificarlo en Base64 para pasarlo en la URL
    const formDataEncoded = btoa(JSON.stringify(formData));
    
    // Abrir una nueva pestaña y pasar los datos codificados en la URL
    window.open(`/list-avisos?data=${formDataEncoded}`, '_blank');
  };

  const agregarAviso = () => {
    if (formData.fecha.trim() === '' || formData.aviso.trim() === '') {
      alert('Por favor ingresa una fecha y un aviso.');
      return;
    }

    if (formData.imagen) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imagenBase64 = event.target?.result as string;
        const nuevoAviso = { id: Date.now(), fecha: formData.fecha, texto: formData.aviso, imagen: imagenBase64, selector: formData.selector };
        setAvisos([...avisos, nuevoAviso]);
      };
      reader.readAsDataURL(formData.imagen);
    }
  };

  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <button
          id="mostrar-formulario-btn"
          className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
          onClick={toggleFormulario}
        >
          {formVisible ? '-' : '+'}
        </button>
      </div>
      {formVisible && (
        <form className="drop-shadow-2xl" onSubmit={handleSubmit}>
          <div id="agregar-aviso-form" className="mb-4 flex justify-center items-center">
            <div className="bg-slate-100 p-8 rounded shadow-md md:w-1/2">
              <h2 className="text-2xl mb-4 text-center">Agregar información</h2>
              <select
                id="selector"
                name="selector"
                value={formData.selector}
                onChange={handleSelectorChange}
                className="border p-2 mb-2 w-full"
              >
                <option value="">Seleccionar opción</option>
                <option value="Novedades">Novedades</option>
                <option value="GOLDFARB te desea un muy Feliz Cumpleaños!!!">Cumpleaños</option>
                <option value="Anuncios Importantes">Anuncios Importantes</option>
              </select>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleInputChange}
                className="border p-2 mb-2 w-full sm:w-48"
              />
              <textarea
                id="aviso"
                name="aviso"
                value={formData.aviso}
                onChange={handleInputChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Escribe tu aviso aquí..."
              />
              <input
                type="file"
                id="imagen"
                name="imagen"
                onChange={handleFileChange}
                className="border p-2 mb-2 w-full"
              />
              <div className="flex justify-center">
                <button
                  id="agregar-aviso-btn"
                  className="hover:bg-blue-600 bg-blue-500 text-white px-4 py-2 rounded"
                  type="submit"
                >
                  Agregar Aviso
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      <ul id="avisos-lista" className="space-y-4 text-white text-lg">
        {avisos.map((aviso) => (
          <li key={aviso.id} className="p-4 border-b border-gray-300">
            <strong>{aviso.fecha}</strong> <p>{aviso.texto}</p>
            <h1>{aviso.selector}</h1>
            {aviso.imagen && <img src={aviso.imagen} alt="Imagen del aviso" className="max-w-xs block h-48 w-48" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Avisos;
