import React, { useState } from "react";

import "./Login.scss";
import Login from "../../components/login/Login";

export default function ExternalPage() {
  const [loader, setLoader] = useState(true);

  setTimeout(function () {
    setLoader(false);
  }, 1500);

  return (
    <div>
      {loader && <div className="loader"></div>}

      {!loader && <Login />}
    </div>
  );
}
