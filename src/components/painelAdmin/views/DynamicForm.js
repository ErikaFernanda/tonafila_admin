import React, { useEffect, useState } from 'react';
import api from '../../../service/api';

const DynamicForm = ({ fields, route }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    const selectField = fields.find(field => field.type === 'select' && field.optionsApi);
    if (selectField) {
      api.get(`/${selectField.optionsApi}`)
        .then(response => {
          setSelectOptions(response.data);
        });
    }
  }, [fields]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      api.post(`/${route}`,
        formData
      ).then(() => {
        alert("Cadastro finalizado com sucesso!");
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required={field.required}
            />
          ): field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required={field.required}
            >
              <option value="">Selecione uma opção</option>
              {selectOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default DynamicForm;