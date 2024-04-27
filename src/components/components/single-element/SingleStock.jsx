import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UploadImage from "./components/upload-image/UploadImage";
import { DatePicker, Input, Switch } from "antd";
import "./SingleStock.scss";
import {
  updateEndDate,
  updateKey,
  updateStartDate,
  updateStatus,
  updateTitle,
} from "../../../redux/marketingSingleSlice";
import dayjs from "dayjs";

export default function SingleStock() {
  const dispatch = useDispatch();
  const location = useLocation();
  const marketingSidebar = useSelector(
    (state) => state.general.marketingSidebar
  );

  const { title, startDate, key, endDate, status } = useSelector(
    (state) => state.marketingSingle
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(updateKey(id));
  }, [id, dispatch, location]);

  function changeTheStockName(e) {
    const newTitle = e.target.value;
    dispatch(updateTitle(newTitle));
  }

  function changeStartDate(date) {
    if (date && date.isValid()) {
      const dateString = date.format("YYYY-MM-DD");
      dispatch(updateStartDate(dateString));
    } else {
      console.error("Invalid date:", date);
    }
  }

  function changeEndDate(date) {
    if (date && date.isValid()) {
      const dateString = date.format("YYYY-MM-DD");
      dispatch(updateEndDate(dateString));
    } else {
      console.error("Invalid date:", date);
    }
  }

  function changeStatus(checked) {
    const statusValue = checked ? "Активный" : "Неактивный";
    dispatch(updateStatus(statusValue));
  }

  const format = "YYYY-MM-DD";

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
          <div className="marketting__inner stock__desc">
            <span>Название</span>
            <Input
              onChange={changeTheStockName}
              value={title}
              placeholder="Имя"
            />
          </div>

          <div className="stock__datepicker">
            <div className="marketting__inner">
              <span>Начало акции</span>
              <div>
                <DatePicker
                  onChange={(dateString) => changeStartDate(dateString)}
                  value={startDate ? dayjs(startDate) : null}
                  format={format}
                />
              </div>
            </div>

            <div className="marketting__inner">
              <span>Конец акции</span>
              <div>
                <DatePicker
                  onChange={(dateString) => changeEndDate(dateString)}
                  value={endDate ? dayjs(endDate) : null}
                />
              </div>
            </div>
          </div>

          <div className=" status__maketing">
            <span className="marketting__inner">Cтатус</span>

            <div>
              <Switch checked={status === "Активный"} onChange={changeStatus} />
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
