const checkAuth = () => {
  const TOKEN = localStorage.getItem("auth");
  const isLoginPage = window.location.pathname === "/login";

  if (!TOKEN && !isLoginPage) {
    return false;
  } else {
    return TOKEN;
  }
};

export default checkAuth;
