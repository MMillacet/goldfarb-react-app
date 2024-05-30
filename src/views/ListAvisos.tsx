import React, { useEffect, useState } from 'react';

interface FormData {
  selector: string;
  fecha: string;
  aviso: string;
  imagen: string | null; // Cambiamos File a string para la URL de la imagen en base64
}

const ListAvisos: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Obtener los datos de la URL
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    
    if (data) {
      // Decodificar los datos y parsearlos a JSON
      const decodedData = JSON.parse(atob(data));
      setFormData(decodedData);
    }
  }, []);

  const handleClearData = () => {
    setVisible(false);
  };

  if (!formData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="basis-1/4 drop-shadow-lg container mx-auto p-4 text-2xl not-italic font-sans tracking-normal">
      <h1 className="text-2xl mb-4">Datos Recibidos</h1>
      {visible && (
        <>
          <p className='text-base'>{formData.fecha}</p>
          <p>{formData.selector}</p>
          <p>{formData.aviso}</p>
          {formData.imagen && (
            <div>
              <img
                src={formData.imagen}
                alt="Imagen del aviso"
                className="max-w-xs block h-48 w-48 mt-2"
              />
            </div>
          )}
        </>
      )}
      <button 
        onClick={handleClearData}
        className="mt-4 bg-red-500 text-white p-2 rounded"
      >
        Borrar Datos
      </button>
    </div>
  );
};

export default ListAvisos;
