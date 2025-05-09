import React, { useState } from 'react';
import './App.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from './components/Footer/Footer';
import FormLogin from './components/FormLogin/FormLogin.js';
import ContainerInicio from './components/ContainerInicio/ContainerInicio.js';

function App() {
  const userLogin = "usuario";
  const passwordLogin = "usuario123";

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ user: '', password: '' });
  const [mensagem, setMensagem] = useState('');

  const handleShowLogin = () => {
    setIsLoginVisible(true);
    setMensagem('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { user, password } = formData;

    if (user === userLogin && password === passwordLogin) {
      setIsLoggedIn(true);
      setMensagem('');
    } else {
      setMensagem('Por favor, preencha para fazer login');
    }
  };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setFormData({ user: '', password: '' });
        setIsLoginVisible(false);
        setMensagem('');
    };

  return (
    <div className="App">
      <div className='container-logo'>
        devcarvalho
      </div>

      <div className='container-conteudo-principal'>
        {!isLoginVisible && !isLoggedIn && (
          <>
            <p className='container-conteudo-principal-titulo'>Blur</p>
            <button
              className='conteudo-principal-botao'
              onClick={handleShowLogin}
              title='Clique para ir à pagina de login'
            >
              Entrar
              <FaArrowRightLong className='conteudo-principal-botao__icon' />
            </button>
          </>
        )}

        {isLoginVisible && !isLoggedIn && (
          <>
            <FormLogin
              formData={formData}
              onInputChange={handleInputChange}
              onLogin={handleLogin}
            />
            <p className='mensagem-login'>{mensagem}</p>
          </>
        )}

        {isLoggedIn && (
          <>
            <p className='mensagem-login'>{mensagem}</p>
            <ContainerInicio onLogout={handleLogout} />
          </>
        )}
      </div>

      <div className='container-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
