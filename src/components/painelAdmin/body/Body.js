import Axios from 'axios';
import React, { Component } from 'react';
// import CadastrarFila from '../../views/CadastrarFila.js';
// import CadastrarUsuario from '../../views/CadastrarUsuario.js';
// import VerFilas from '../../views/VerFilas.js';

import './body.css';
import { Switch, Route } from 'react-router-dom';
import MapContainer from '../views/MapContainer';
import CadastrarFuncionario from '../views/CadastrarFuncionario';
// import VerUsuarios from '../../views/VerUsuarios.js';
// import VerEmpresas from '../../views/VerEmpresas.js';
// import CadastrarFilaPosicao from '../../views/CadastrarFilaPosicao.js';
// import VerFilaPosicao from '../../views/VerFilaPosicao.js';
// import CadastrarEmpresa from '../../views/CadastrarEmpresa.js';
// import Login from '../../login/Login.js';



export default class Body extends Component {
  state = {
    usuarios: []
  }
  componentDidMount() {
    Axios.get('https://apitonafila.herokuapp.com/empresas')
      .then(res => {
        const usuarios = res.data;
        this.setState({ usuarios });
      })
  }
  render() {
    return (
      
      <div className="center">
        <div className="conteudo">
        <Switch>
          <Route path="/admin/page1" component={CadastrarFuncionario}></Route>
          <Route path="/admin/page2" component={MapContainer}></Route>
          {/* <Route path="/admin/page3" component={CadastrarFila}></Route>
          <Route path="/admin/page4" component={VerUsuarios}></Route>
          <Route path="/admin/page5" component={VerEmpresas}></Route>
          <Route path="/admin/page6" component={VerFilas}></Route>
          <Route path="/admin/page7" component={CadastrarFilaPosicao}></Route>
          <Route path="/admin/page8" component={VerFilaPosicao}></Route>
          <Route path="/admin/sair" component={Login}></Route> */}
        </Switch>
        </div>
      </div>

    );
  }
}
