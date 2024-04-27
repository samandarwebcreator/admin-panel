import React from "react";
import ErrorImage from "../../assets/images/403Error.png";
import { Link } from "react-router-dom";
import "./Error.scss";

export default function ErrorForbidden() {
  return (
    <div className="container error__main-box">
      <div>
        <h1 className="error__title">403</h1>
        <h3 className="error__reason">Access Forbidden</h3>
        <p className="error__desc">
          Sorry, the page you visited does not exist.
        </p>
        <Link className="error__back-link" to="/login">
          Вернутся в главную
        </Link>
      </div>

      <div>
        <img src={ErrorImage} alt="403 error" width={480} height={385.6} />
      </div>
    </div>
  );
}
