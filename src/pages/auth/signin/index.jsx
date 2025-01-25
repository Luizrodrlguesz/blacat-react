import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signin-page">
      <header className="signin-header">
        <img src="src\assets\icon-1b.png" alt="" />
        <p>Bem vindo novamente! Faça o seu login.</p>
      </header>

      <form onSubmit={handleSignIn} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua senha"
            required
          />
        </div>
        <div className="below-sign-btn">
          <div className="keep-on">
            <input type="checkbox" /> Mantenha me conectado
          </div>
          <div>
            <p className="p-forgot-link">
              <Link className="forgot-link" to="/forgot-password">
                Esqueci a Senha
              </Link>
            </p>
          </div>
        </div>
        <button type="submit" className="signin-btn">
          Entrar
        </button>
      </form>

      <footer className="signin-footer">
        <p>
          Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignIn;
