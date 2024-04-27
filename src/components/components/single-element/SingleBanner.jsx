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

export default function SingleBanner() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(indetifyKey({ key: id }));
  }, [dispatch, id]);

  const { marketingSidebar } = useSelector((state) => state.general);
  const { uzbTitle, rusTitle, status } = useSelector((state) => state.banner);

  const handleUzbekTitleChange = (e) => {
    dispatch(updateUzbekTitle(e.target.value));
  };

  const handleRusTitleChange = (e) => {
    dispatch(updateRusTitle(e.target.value));
  };

  const handleStatus = (checked) => {
    const statusValue = checked ? "Активный" : "Неактивный";
    dispatch(updateStatus(statusValue));
  };

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
      <h1>Общие сведения</h1>
      <span className="line__span"></span>
      <div className="marketing__single-wrapper">
        <div>
          <div>
            <UploadImage />
          </div>
        </div>
        <div className="marketting__inner-case">
          <div className="marketting__inner banner__inner">
            <span>Hазвание на узбек</span>
            <Input
              placeholder="Узбекское имя"
              value={uzbTitle}
              onChange={handleUzbekTitleChange}
            />
          </div>

          <div className="marketting__inner banner__inner">
            <span>Hазвание на русском</span>
            <Input
              placeholder="Русское имя"
              value={rusTitle}
              onChange={handleRusTitleChange}
            />
          </div>
          <div className="status__maketing">
            <span className="marketting__inner">Cтатус</span>

            <div style={{ marginLeft: "62px" }}>
              <Switch checked={status === "Активный"} onChange={handleStatus} />
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
