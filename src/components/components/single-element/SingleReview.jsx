import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, Switch } from "antd";
import UploadImage from "./components/upload-image/UploadImage";
import {
  indetifyKey,
  updateRusTitle,
  updateStatus,
  updateUzbekTitle,
} from "../../../redux/bannerSlicer";

export default function SingleReview() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(indetifyKey({ key: id }));
  }, [dispatch, id]);

  const { marketingSidebar } = useSelector((state) => state.general);
  const { uzbTitle, rusTitle, status } = useSelector((state) => state.banner);

  return (
    <div
      className="marketing__single"
      style={{
        marginLeft:
          window.location.pathname.startsWith("/main/marketing") &&
          marketingSidebar
            ? 280
            : 80,
      }}
    >
      <h1>Отзыв</h1>
      <span className="line__span"></span>
      <div className="marketing__single-wrapper">
        <div className="marketting__inner-case">
          <div className="marketting__inner banner__inner">
            <span>Hазвание на узбек</span>
          </div>

          <div className="marketting__inner banner__inner">
            <span>Hазвание на русском</span>
          </div>
          <div className="status__maketing">
            <span className="marketting__inner">Cтатус</span>

            <div style={{ marginLeft: "62px" }}>
              <Switch checked={status === "Активный"} />
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
