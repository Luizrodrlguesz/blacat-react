import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./code-confirm.scss";

const ConfirmationCode = () => {
  const [code, setCode] = useState("");

  const handleCodeSubmit = (e) => {
    e.preventDefault();

    console.log("Confirmation Code:", code);
    alert("Code confirmed! You can now reset your password.");
  };

  return (
    <div className="confirmation-page">
      <header className="confirmation-header">
        <h1>Código de confirmação</h1>
        <p>
          Nós lhe enviamos um código de confirmação no seu email. Por Favor,
          insira abaixo
        </p>
      </header>

      <form onSubmit={handleCodeSubmit} className="confirmation-form">
        <div className="form-group">
          <label htmlFor="code">Código de Confirmação</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Insira o Código"
            required
          />
        </div>
        <button type="submit" className="confirm-btn">
          Confirmar código
        </button>
      </form>

      <footer className="confirmation-footer">
        <p>
          Não recebeu o código? <Link to="/resend-code">Reenviar código</Link>
        </p>
        <p>
          Lembrou a senha? <Link to="/signin">Entrar</Link>
        </p>
      </footer>
    </div>
  );
};

export default ConfirmationCode;
