import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de validação e envio do formulário
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign Up Successful!");
  };

  return (
    <div className="signup-page">
      {/* Header */}
      <header className="signup-header">
        <h1>Cadastre-se</h1>
        <p>junte-se a nós hoje mesmo e seja parte desse time em ascensão</p>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Nome do Usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Seu nome de usuário"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Seu email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Sua senha"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Cadastrar
        </button>
      </form>

      <footer className="signup-footer">
        <p>
          Já tem uma conta? <Link to="/signin">Entrar</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignUp;
