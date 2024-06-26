import React from 'react';
import './sidebar.css';
import { FcBusinesswoman } from "react-icons/fc";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineLineChart, AiFillTag, AiOutlinePlus, AiFillEye } from "react-icons/ai"
import { IoMdExit } from "react-icons/io";





const Sidebar = () => {
  function sair(e) {
    console.log("botão de sair foi clicado")

  }
  return (
    <div className="menu" id="menu">
      <div className="perfil">
        <div className="image-perfil"><FcBusinesswoman id="image-perfil-icon" /></div>
      </div>

      <a className="menu-item-link" href="/page3" ><div className="menu-item" ><BsFillPeopleFill className="menu-item-icon" /><p className="menu-item-text">Empresas</p></div></a>


      <div className="menu-subitem" id="menu-subitem-filas">

        <a className="menu-item-link" href="/admin/page2" ><div className="menu-subitem-li" ><AiOutlinePlus className="menu-item-icon" /><p className="menu-item-text">Adicionar Empresa</p></div></a>

      </div>

      <a className="menu-item-link" href="/page5"><div className="menu-item"><AiOutlineLineChart className="menu-item-icon" /><p className="menu-item-text">Funcionários</p></div></a>
      <a className="menu-item-link" href="/admin/page1"><div className="menu-subitem-li" ><AiFillEye className="menu-item-icon" /><p className="menu-item-text">Adicionar Funcionários</p></div></a>
      <a className="menu-item-link" href="/page6"><div className="menu-item"><AiFillTag className="menu-item-icon" /><p className="menu-item-text">Usuários</p></div></a>

      <a className="menu-item-link" onClick={sair} href=""><div className="menu-item"><IoMdExit className="menu-item-icon" /><p className="menu-item-text">Sair</p></div></a>

    </div>

  );
}

export default Sidebar;
