import React from 'react';
import DynamicForm from './DynamicForm';

const CadastrarEmpresa = () => {

  const fields = [
    { name: 'name', label: 'Nome', type: 'text', required: true },
    { name: 'latitude', label: 'Latitude', type: 'text', required: true },
    { name: 'longitude', label: 'Longitude', type: 'text', required: true },
    { name: 'address', label: 'Endereço', type: 'textarea', required: true },
    { 
      name: 'category', 
      label: 'Categoria', 
      type: 'select', 
      required: true,
      optionsApi: 'category'
    }
  ];

  return (
    <div className="App">
      <h2>Cadastrar Empresa</h2>
      <DynamicForm fields={fields} route="company" />
    </div>
  );
};
export default CadastrarEmpresa;