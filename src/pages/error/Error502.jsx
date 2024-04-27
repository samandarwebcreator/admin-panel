import React from "react";
import "./Error.scss";

import { Link } from "react-router-dom";
import ErrorImage from "../../assets/images/error-server.png";
import { Detector } from "react-detect-offline";

const ErrorServer = (props, { token }) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div className="container error__main-box">
              <div>
                <h1 className="error__title">502</h1>
                <h3 className="error__reason">Server</h3>
                <p className="error__desc">
                  Sorry, you will have to connect internet.
                </p>
                <Link
                  target="_blank"
                  className="error__back-link"
                  to={token ? "/main/dashboard" : "/login"}
                >
                  Вернутся в главную
                </Link>
              </div>

              <div>
                <img
                  src={ErrorImage}
                  alt="403 error"
                  width={504}
                  height={300}
                />
              </div>
            </div>
          )
        }
      />
    </>
  );
};

export default ErrorServer;
