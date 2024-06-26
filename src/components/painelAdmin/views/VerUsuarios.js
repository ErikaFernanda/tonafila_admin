import React from 'react';
import DynamicList from './DynamicList';

const VerEmpresas = () => {

  return (
    <div className="App">
      <h2>Listagem de Usuarios</h2>
      <DynamicList apiRoute="client" />
    </div>
  );
};

export default VerEmpresas;