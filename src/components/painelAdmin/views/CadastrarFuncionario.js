import React from 'react';
import DynamicForm from './DynamicForm';

const CadastrarFuncionario = () => {

  const fields = [
    { name: 'name', label: 'Nome', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'text', required: true },
    { name: 'password', label: 'Senha', type: 'text', required: true },
    { 
      name: 'company', 
      label: 'Empresa', 
      type: 'select', 
      required: true,
      optionsApi: 'company'
    }
  ];

  return (
    <div className="App">
      <h2>Cadastrar Funcionario</h2>
      <DynamicForm fields={fields} route="employee" />
    </div>
  );
};
export default CadastrarFuncionario;