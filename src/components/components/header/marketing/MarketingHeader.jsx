import { Breadcrumb, Tabs } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { stocksArray } from "../../../../utils/data";
import { FaArrowLeft } from "react-icons/fa6";
import "./MarketingHeader.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBanners } from "../../../../redux/bannerSlicer";
import { saveStocks } from "../../../../redux/marketingSingleSlice";

export default function MarketingHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uzbTitle, rusTitle, bannerImage, status } = useSelector(
    (state) => state.banner
  );

  const { id } = useParams();

  const singleUser = stocksArray.title;
  const headerReview = useSelector((state) => state.general.marketingSidebar);

  const handleShowOnConsole = () => {
    dispatch(
      location.pathname.startsWith("/main/marketing/banners/single-banner")
        ? saveBanners({
            key: id,
            uzbTitle: uzbTitle,
            rusTitle: rusTitle,
            bannerImage: bannerImage,
            status: status,
          })
        : saveStocks()
    );
    toast.success("Saved successfully");
    setTimeout(() => {
      navigate(
        location.pathname.startsWith("/main/marketing/banners/single-banner")
          ? "/main/marketing/banners"
          : "/main/marketing/stock"
      );
    }, 2000);
  };

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Tab 1",
    },
    {
      key: "2",
      label: "Tab 2",
    },
  ];

  return (
    <>
      <ToastContainer />

      <div className="stock__single-header">
        <div className="stock__single-wrapper">
          <button className="marketing__button">
            <FaArrowLeft />
          </button>
          {location.pathname.slice(22).startsWith("single") && (
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: "Список акций",
                },
                {
                  title: singleUser,
                  href: "",
                },
              ]}
            />
          )}
        </div>

        <div className="stock__single-button">
          <Link
            to={
              location.pathname.startsWith("/main/marketing/stock")
                ? "/main/marketing/stock"
                : location.pathname.startsWith("/main/marketing/banner")
                ? "/main/marketing/banner"
                : "/main/marketing/reviews"
            }
          >
            <span>
              <IoMdCloseCircle />
            </span>
            <p>Отменить</p>
          </Link>

          <button onClick={handleShowOnConsole}>
            <span>
              <FaSave />
            </span>
            <p>Сохранить</p>
          </button>
        </div>
      </div>

      {/* {headerReview && (
          <div className="tabchange__preview">
            <div>
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </div>
        )} */}
    </>
  );
}
