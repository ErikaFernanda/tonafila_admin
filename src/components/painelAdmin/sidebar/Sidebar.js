import React, { useContext, useState } from 'react';
import './sidebar.css';
import { FcBusinesswoman } from "react-icons/fc";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineLineChart, AiFillTag, AiOutlinePlus, AiFillEye } from "react-icons/ai"
// import { ApiContext } from '../../context/ApiContext';
import { IoMdExit } from "react-icons/io";
// import { Redirect } from 'react-router-dom';





const Sidebar = () => {

  //   const { data } = useContext(ApiContext)
  //   const [redirect, setRedirect] = useState('')

  //   if (data.nome !== undefined) {

  //     localStorage.setItem('nome', data.nome);
  //     localStorage.setItem('empresa', data.empresa);
  //     localStorage.setItem('email', data.email);
  //     localStorage.setItem('idempresa', data.idempresa);
  //     localStorage.setItem('idfuncionario', data.idfuncionario);
  //     console.log(" teste " + localStorage.getItem("idempresa"))
  //   }

  //   if(localStorage.getItem("nome")==null){
  //      return <Redirect to="/login" />
  //   }
  function sair(e) {
    // e.preventDefault();
    // setRedirect({
    //   ...redirect,
    //   status: true,
    // });


  }
  //   if (redirect.status === true) {
  //     localStorage.clear()
  //     return <Redirect to="/login" />
  //   }
  return (


    // <div className='sidebar'>
    //   <div><a href="/page1">Cadastrar usuarios</a></div>
    //   <div><a href="/page2">Cadastrar empresas</a></div>
    //   <div><a href="/page3">Cadastrar filas</a></div>
    //   <div><a href="/page7">Cadastrar fila posicao</a></div>
    //   <div><a href="/page4">Ver usuarios</a></div>
    //   <div><a href="/page5">Ver empresas</a></div>
    //   <div><a href="/page6">Ver filas</a></div>
    //   <div><a href="/page8">Ver filas posicoes</a></div>
    // </div>





    <div className="menu" id="menu">
      <div className="perfil">
        <div className="image-perfil"><FcBusinesswoman id="image-perfil-icon" /></div>

        {/* <div >{localStorage.getItem('nome')}</div>
        <div>{localStorage.getItem('email')}</div>
        <div >{localStorage.getItem('empresa') + " - " + localStorage.getItem("idempresa")+" - "+localStorage.getItem("idfuncionario")}</div> */}
      </div>

      <div className="menu-item" ><BsFillPeopleFill className="menu-item-icon" /><p className="menu-item-text">Empresas</p></div>


      <div className="menu-subitem" id="menu-subitem-filas">

        <a className="menu-item-link" href="/admin/page2" ><div className="menu-subitem-li" ><AiOutlinePlus className="menu-item-icon" /><p className="menu-item-text">Adicionar Empresa</p></div></a>
        <a className="menu-item-link" href="/admin/page1"><div className="menu-subitem-li" ><AiFillEye className="menu-item-icon" /><p className="menu-item-text">Adicionar Funcionários</p></div></a>
      </div>

      <a className="menu-item-link" href="/page5"><div className="menu-item"><AiOutlineLineChart className="menu-item-icon" /><p className="menu-item-text"></p></div></a>
      <a className="menu-item-link" href="/page6"><div className="menu-item"><AiFillTag className="menu-item-icon" /><p className="menu-item-text"></p></div></a>

      <a className="menu-item-link" onClick={sair} href=""><div className="menu-item"><IoMdExit className="menu-item-icon" /><p className="menu-item-text">Sair</p></div></a>

    </div>

  );
}

export default Sidebar;
