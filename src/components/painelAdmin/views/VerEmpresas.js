import React from 'react';
import DynamicList from './DynamicList';

const VerEmpresas = () => {

  return (
    <div className="App">
      <h2>Listagem Empresas</h2>
      <DynamicList apiRoute="company" />
    </div>
  );
};

export default VerEmpresas;