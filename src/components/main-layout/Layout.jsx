import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Header from "../header/Header";
import "./Layout.scss";
import { sideBarOpenIcon } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../../redux/generalSlice";
import Stock from "../marketing/stock/Stock";
import { marketingRoutes, sidebarIcons } from "../../utils/data";
import Banner from "../marketing/banner/Banner";
import SingleBanner from "../components/single-element/SingleBanner";
import SingleStock from "../components/single-element/SingleStock";
import Review from "../marketing/review/Review";
import SingleReview from "../components/single-element/SingleReview";
import Dashboard from "../dashboard/Dashboard";

const { Content, Sider } = Layout;

const LayoutMain = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const marketingSidebar = useSelector(
    (state) => state.general.marketingSidebar
  );

  const handleOpenSidebar = () => {
    dispatch(openSideBar());
  };

  let componentContent;

  switch (true) {
    case location.pathname === "/main/dashboard":
      componentContent = <Dashboard />;
      break;

    case location.pathname.slice(16) === "stock":
      componentContent = <Stock />;
      break;

    case location.pathname.slice(16) === "banners":
      componentContent = <Banner />;
      break;
    case location.pathname.slice(16) === "reviews":
      componentContent = <Review />;
      break;

    case location.pathname.startsWith("/main/marketing/stock/single-user"):
      componentContent = <SingleStock />;
      break;

    case location.pathname.startsWith("/main/marketing/banners/single-banner"):
      componentContent = <SingleBanner />;
      break;

    case location.pathname.startsWith("/main/marketing/reviews/single-review"):
      componentContent = <SingleReview />;
      break;

    default:
      break;
  }

  return (
    <Layout hasSider>
      <Sider className="layout__sider">
        <span className="sidebar__user-name">
          {localStorage.getItem("auth").charAt(1)}
        </span>
        <Menu
          theme="dark"
          mode="inline"
          className="sidebar__icons"
          defaultSelectedKeys={["1"]}
        >
          {sidebarIcons.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link} />
            </Menu.Item>
          ))}
        </Menu>
        <span className="sidebar__user-img">
          <img src="" alt="" />
        </span>
      </Sider>
      {location.pathname.startsWith("/main/marketing") && marketingSidebar && (
        <Sider className="marketing__sider">
          <div className="marketing__side-wrapper">
            <span>Delever</span>
            <button onClick={handleOpenSidebar}>{sideBarOpenIcon}</button>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            className="sidebar__icons"
            defaultSelectedKeys={["1"]}
          >
            {marketingRoutes.map((item) => (
              <span key={item.key} icon={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </span>
            ))}
          </Menu>
        </Sider>
      )}
      <Layout className="layout__body">
        <Header />
        <Content
          style={{
            padding: location.pathname.startsWith("/main/marketing/reviews")
              ? "20px"
              : "0px",
          }}
        >
          {componentContent}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
