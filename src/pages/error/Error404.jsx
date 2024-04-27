import React, { useEffect } from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
import ErrorImage from "../../assets/images/error404.png";

export default function ErrorPage({ token }) {
  return (
    <div className="container error__main-box">
      <div>
        <h1 className="error__title">404</h1>
        <h3 className="error__reason">Page Not Found</h3>
        <p className="error__desc">
          Sorry, the page you visited does not exist.
        </p>
        <Link
          target="_blank"
          className="error__back-link"
          to={token ? "/dashboard" : "/login"}
        >
          Вернутся в главную
        </Link>
      </div>

      <div>
        <img src={ErrorImage} alt="403 error" width={480} height={342.4} />
      </div>
    </div>
  );
}
