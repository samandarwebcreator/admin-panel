import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import checkAuth from "./routes/checkAuth";
import ErrorPage from "./pages/error/Error404";
import Dashboard from "./pages/protected/dashboard/Dashboard";
import ErrorServer from "./pages/error/Error502";
import PrivateRoutes from "./routes/PrivateRoute";
import Order from "./pages/protected/order/Order";
import Marketing from "./pages/protected/marketing/main/Marketing";
import SingleElement from "./components/marketing/single-element/SingleElement";

export default function App() {
  const token = checkAuth();
  return (
    <ErrorServer token={token}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage token={token} />} />
        <Route element={<PrivateRoutes token={token} />}>
          <Route path="/main/dashboard" element={<Dashboard />} />
          <Route path="/main/order" element={<Order />} />
          <Route path="/main/marketing/stock" element={<Marketing />} />
          <Route path="/main/marketing/banners" element={<Marketing />} />
          <Route path="/main/marketing/reviews" element={<Marketing />} />

          <Route
            path="/main/marketing/stock/single-user/:id"
            element={<SingleElement />}
          />
          <Route
            path="/main/marketing/banners/single-banner/:id"
            element={<SingleElement />}
          />
          <Route
            path="/main/marketing/reviews/single-review/:id"
            element={<SingleElement />}
          />
        </Route>
      </Routes>
    </ErrorServer>
  );
}
