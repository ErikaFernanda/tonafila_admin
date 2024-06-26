import React from 'react';
import DynamicList from './DynamicList';

const VerEmpresas = () => {

  return (
    <div className="App">
      <h2>Listagem Funcionarios</h2>
      <DynamicList apiRoute="employee" />
    </div>
  );
};

export default VerEmpresas;