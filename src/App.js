import React from 'react';
import './App.css';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function App() {
    const isLoggedIn = true;
    const userLogin = "usuario";
    const passwordLogin = "usuario123";

    return (
        <div className="App">
            <form className='container-login'>
                <h1>Bem-vindo(a) de volta!</h1>

                <p>Para entrar no sistema, preencha com seu login e senha</p>

                <div className='container-login-inputs'>
                    <div className='container-input'>
                        <FaUserAstronaut className='login-input__icon'/>

                        <input
                            className='login-input'
                            type='text'
                        />
                    </div>

                    <div className='container-input'>
                        <FaLock className='login-input__icon'/>

                        <input
                            className='login-input'
                            type='password'
                        />
                    </div>
                </div>

                <p>Esqueci minha senha</p>

                <button className='btn-login'>
                    Entrar
                    <FaRocket className='btn-login__icon'/>
                </button>
            </form>

            {/* <div className='container-sistema'>
                <h1>Bem-vindo de volta!</h1>
                <button className='btn-logout' type='submit'>
                    Sair
                    <MdLogout className='btn-logout__icon' />
                </button>
            </div> */}
        </div>
    );
}

export default App;
