import axios from 'axios';
import React, { Component } from 'react';


export class CadastrarEmpresa extends Component {
  state = {
    nome: "",
  };
  onRequest = async () => {
    try {

      const res = await axios.post('http://localhost:8080/empresas/', { ...this.state });
      
      return res.data;
      
    } catch (error) {
      console.log("erro", error);
    }
  }
  handleChange = event => {
    this.setState({ nome: event.target.value });

  }
  
  render() {
    return (
      <div className='v2'>
          <h1>Cadastrar Empresas</h1>
        <form onSubmit={this.onRequest}>
          <label>
            Nome:
          <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Finalizar " />
        </form>
      </div>
    );
  }

}


export default CadastrarEmpresa;
