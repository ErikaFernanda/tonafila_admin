import axios from 'axios';
import React, { Component } from 'react';



export default class VerEmpresas extends Component {
  state = {
    empresas: []
  }
  componentDidMount() {
    axios.get('http://localhost:8080/empresas/')
      .then(res => {
        const empresas = res.data;
        this.setState({ empresas });
      })
  }
  render() {
    return (
      <div className="meio">
            {this.state.empresas.map(empresa => <h2 key ={empresa.idempresa}>{empresa.idempresa}-{empresa.nome}</h2>)}
      </div>

    );
  }
}
