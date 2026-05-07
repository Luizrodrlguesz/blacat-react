import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="back-home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
