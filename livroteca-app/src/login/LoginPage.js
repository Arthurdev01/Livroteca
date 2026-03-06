import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import loginUser from './service-login';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);

      setSuccessMessage(response.message);
      setErrorMessage('');


      setTimeout(() => {
        navigate(`/library/${response.user.id_usuario}`);
      }, 1000);
      
    } catch (error) {
      setErrorMessage(error.error || 'Erro ao fazer login.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-group">
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
          <div className="login-form-group">
            <label htmlFor="senha"></label>
            <input 
              type="password" 
              id="password" 
              name="senha" 
              value={formData.senha} 
              onChange={handleChange} 
              placeholder="Password" 
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <Link to="/register" className="register-link">Não tem uma conta? Cadastra-se</Link>
        <Link to="/" className="back-to-home">Voltar para Home</Link>
      </div>
    </div>
  );
};

export default LoginPage;
