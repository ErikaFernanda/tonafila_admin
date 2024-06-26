import Axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
// import CadastrarFila from '../../views/CadastrarFila.js';
// import CadastrarUsuario from '../../views/CadastrarUsuario.js';
// import VerFilas from '../../views/VerFilas.js';

import './body.css';
import { Routes, Route } from 'react-router-dom';
import MapContainer from '../views/MapContainer';
import CadastrarFuncionario from '../views/CadastrarFuncionario';
// import VerUsuarios from '../../views/VerUsuarios.js';
// import VerEmpresas from '../../views/VerEmpresas.js';
// import CadastrarFilaPosicao from '../../views/CadastrarFilaPosicao.js';
// import VerFilaPosicao from '../../views/VerFilaPosicao.js';

import CadastrarEmpresa from '../views/CadastrarEmpresa';
// import Login from '../../login/Login.js';
import api from '../../../service/api';
import MapContainer2 from '../views/MapContainer';
import VerEmpresas from '../views/VerEmpresas';
import VerFuncionarios from '../views/VerFuncionarios';
import VerUsuarios from '../views/VerUsuarios';


const Body = () => {
  useEffect(() => {
    api.get("/company", config)
      .then((response) => {
        // setEmpresas(response.data);
        const usuarios = response.data;
        this.setState({ usuarios });
      })
      .catch((error) => {
        console.log("Whoops! Houve um erro.", error.message || error);
      });
  }, []);

  const config = {
    headers: {
      Authorization: 'Bearer YOUR_TOKEN_HERE'
    }
  };

  return (

    <div className="center">
      <div className="conteudo">
        <Routes >
          <Route path="/admin/page1" element={<CadastrarFuncionario />} />
          <Route path="/admin/page2" element={<CadastrarEmpresa />} />
          <Route path="/page3" element={<VerEmpresas/>} />
          <Route path="/page5" element={<VerFuncionarios/>} />
          <Route path="/page6" element={<VerUsuarios/>} />
          {/* <Route path="/admin/sair" component={Login} /> */}
        </Routes >
      </div>
    </div>

  );
};

export default Body;
