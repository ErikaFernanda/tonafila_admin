import React, { Component } from 'react';

import axios from 'axios';
import { Navigate  } from 'react-router-dom';
import api from '../../../service/api';
export class CadastrarFuncionario extends Component {

    state = {
        nome: "",
        email: "",
        senha: "",
        empresas: [],
        idempresa: "",
    };


    onRequest = async (e) => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        // async () => {
        e.preventDefault();
        try {
            alert(" Salvando " + this.state.nome + " na empresa " + this.state.idempresa)
            if(this.state.idempresa==""){
                this.state.idempresa = this.state.empresas[0].idempresa;
            }
            await axios.post('https://apitonafila.herokuapp.com/funcionarios/save/' + this.state.idempresa, {
                // ...this.state ,
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
                idempresa: this.state.idempresa
            });

            // return res.data;

            return <Navigate  to='page1' />
        } catch (error) {
            console.log("erro", error);
        }
        // }
    }

    handleNome = event => {
        this.setState({ nome: event.target.value });

    }
    handleSenha = event => {
        this.setState({ senha: event.target.value });

    }
    handleEmail = event => {
        this.setState({ email: event.target.value });

    }
    handleEmpresa = event => {
        this.setState({ idempresa: event.target.value });
    }

    componentDidMount() {
        axios.get('https://apitonafila.herokuapp.com/empresas')
            .then(res => {
                const empresas = res.data;
                this.setState({ empresas });
            })


    }
    render() {
        return (
            <div className='v1'>
                <h1>Cadastrar Funcionario</h1>
                <form onSubmit={this.onRequest} method="POST"  >
                    <select value={this.state.value} onChange={this.handleEmpresa}>
                        {this.state.empresas.map(empresa => <option key={empresa.idempresa} value={empresa.idempresa}>{empresa.nome}</option>)}
                    </select>
                    <label>Nome:<input type="text" name="nome" onChange={this.handleNome} /></label>
                    <label>Email:<input type="text" name="email" onChange={this.handleEmail} /></label>
                    <label>Senha:<input type="text" name="senha" onChange={this.handleSenha} /></label>

                    <input type="submit" value="Finalizar " />
                </form>
            </div>
        );
    }

}


export default CadastrarFuncionario;
