import React from 'react';
import './FormLogin.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUser, FaLock } from "react-icons/fa";

function FormLogin({ formData, onInputChange, onLogin }) {
  return (
    <form className='container-login' onSubmit={onLogin}>
      <h1 className='container-login-titulo'>Login</h1>
      <p>Para entrar no sistema, preencha com seu login e senha</p>

      <div className='container-login-inputs'>
        <div className='container-input'>
          <FaUser className='login-input__icon' />
          <input
            className='login-input'
            name='user'
            type='text'
            value={formData.user}
            onChange={onInputChange}
            placeholder="Usuário"
            title='Insira neste campo o user "usuario"'
          />
        </div>

        <div className='container-input'>
          <FaLock className='login-input__icon' />
          <input
            className='login-input'
            name='password'
            type='password'
            value={formData.password}
            onChange={onInputChange}
            placeholder="Senha"
            title='Insira neste campo a senha "usuario123"'
          />
        </div>
      </div>

      <p className='container-login-links'>
        Não tem uma conta? <span>Cadastre-se</span><br />
        Esqueci minha senha
      </p>

      <button className='btn-login' type='submit' title='Faça login'>
        Entrar
        <FaArrowRightLong className='btn-login__icon' />
      </button>
    </form>
  );
}

export default FormLogin;
