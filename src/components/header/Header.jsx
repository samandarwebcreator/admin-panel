import React, { useEffect } from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { sideBarOpenIcon } from "../../utils/icons";
import { openSideBar } from "../../redux/generalSlice";
import MarketingHeader from "../components/header/marketing/MarketingHeader";
import { useLocation } from "react-router-dom";
import DashboardHeader from "../components/header/dashboard/DashboardHeader";

export default function Header() {
  const dispatch = useDispatch();
  const marketingSidebar = useSelector(
    (state) => state.general.marketingSidebar
  );

  const handleOpenSidebar = () => {
    dispatch(openSideBar());
  };

  let component;

  switch (true) {
    case location.pathname === "/main/dashboard":
      component = <DashboardHeader />;
      break;

    case location.pathname.startsWith("/main/marketing"):
      component = <MarketingHeader />;
      break;

    default:
      break;
  }

  return (
    <div
      className="header__main-box"
      style={
        window.location.pathname.startsWith("/main/marketing") &&
        marketingSidebar
          ? { marginLeft: 200 }
          : {}
      }
    >
      <div className="header__content">
        <div className="header__title">
          {!marketingSidebar && (
            <button onClick={handleOpenSidebar}>{sideBarOpenIcon}</button>
          )}
          {component}
        </div>
      </div>
    </div>
  );
}
