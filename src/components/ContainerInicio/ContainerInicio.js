import React from 'react';
import './ContainerInicio.css';
import { MdLogout } from "react-icons/md";

function ContainerInicio ({ onLogout }) {
    return (
        <div className='container-sistema'>
            <p className='container-sistema-titulo'>Blur</p>

            <p className='container-sistema-texto'>
                Bem-vindo(a) de volta! 
                <br></br>
                Você pode clicar no botão abaixo para fazer logout
            </p>

            <button className='btn-logout' onClick={onLogout} title='Clique para sair do sistema'>
                Sair
                <MdLogout className='btn-logout__icon' />
            </button>
        </div>     
    );
};

export default ContainerInicio;