import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgotPasword.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    console.log("Reset link sent to:", email);
    alert("Password reset link sent to your email!");
  };

  return (
    <div className="forgot-password-page">
      <header className="forgot-password-header">
        <h1>Esqueci a senha</h1>
        <p>Insira seu email para receber o código de acesso</p>
      </header>

      <form onSubmit={handleResetPassword} className="forgot-password-form">
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
        <button type="submit" className="reset-btn">
          Enviar Código
        </button>
      </form>

      <footer className="forgot-password-footer">
        <p>
          Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
        </p>
        <p>
          Lembrou da sua senha? <Link to="/signin">Entrar</Link>
        </p>
      </footer>
    </div>
  );
};

export default ForgotPassword;
