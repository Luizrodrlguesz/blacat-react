import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
