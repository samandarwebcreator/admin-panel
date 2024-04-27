import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import "./ActionsPopUp.scss";
import { useDispatch } from "react-redux";
import { setAsMarketingId } from "../../../redux/generalSlice";

export default function ActionsPopUp({ itemId, onClose }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSetSingleId = (id) => {
    dispatch(setAsMarketingId(id));
  };

  useEffect(() => {
    handleSetSingleId(itemId);
  }, []);

  return (
    <div className="actions__popup-main">
      <Link
        className="actions__pupop-link"
        to={
          location.pathname.slice(16).startsWith("stock")
            ? `single-user/${itemId}`
            : location.pathname.slice(16).startsWith("banner")
            ? `single-banner/${itemId}`
            : `single-review/${itemId}`
        }
      >
        <span>
          <MdEdit />
        </span>
        <p>Изменить</p>
      </Link>
      <span className="line-popup"></span>
      <button onClick={onClose} className="actions__popup-button">
        <span>
          <IoClose />
        </span>
        <p>Отменено</p>
      </button>
    </div>
  );
}
