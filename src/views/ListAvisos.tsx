import React from 'react';
import { useLocation } from 'react-router-dom';


interface FormData {
  selector: string;
  fecha: string;
  aviso: string;
  imagen: File | null;
}

const ListAvisos: React.FC = () => {
  const location = useLocation();
  const state = location.state as { formData: FormData } | undefined;
  const formData = state?.formData || { selector: '', fecha: '', aviso: '', imagen: null };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Datos Recibidos</h1>
      <p><strong>Selector:</strong> {formData.selector}</p>
      <p><strong>Fecha:</strong> {formData.fecha}</p>
      <p><strong>Aviso:</strong> {formData.aviso}</p>
      {formData.imagen && (
        <div>
          <strong>Imagen:</strong>
          <img
            src={URL.createObjectURL(formData.imagen)}
            alt="Imagen del aviso"
            className="max-w-xs block h-48 w-48 mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default ListAvisos;
