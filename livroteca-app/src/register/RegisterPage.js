import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import registerUser from './service-register';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('register-page');

    return () => {
      document.body.classList.remove('register-page');
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);


      setSuccessMessage('Usuário cadastrado com sucesso!');
      setErrorMessage('');
      console.log('Resposta do servidor:', response);


      setTimeout(() => {
        navigate('/login');
      }, 1000);

    } catch (error) {

      setErrorMessage(error.error || 'Erro ao cadastrar usuário.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="main-container">
      <div className="register-card">
        <div className="logo-container">
          <div className="image-container"></div>
        </div>
        <div className="register-container">
          <h1 className="register-title">Cadastre-se</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-form-group">
              <label htmlFor="name"></label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                required 
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="email"></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="password"></label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Password" 
                required 
              />
            </div>
            <button type="submit" className="register-button">Registrar</button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <Link to="/login" className="login-link">Já tem uma conta? Login</Link>
          <Link to="/" className="back-to-home">Voltar para Home</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
