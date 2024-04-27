import React, { useState } from "react";
import { Table, Button, Popover } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ActionsPopUp from "../../components/action-popup/ActionsPopUp";
import "./Stock.scss";
import { stocksArray } from "../../../utils/data";

export default function Stock() {
  const dispatch = useDispatch();
  const marketingSidebar = useSelector(
    (state) => state.general.marketingSidebar
  );

  const [popoverVisibility, setPopoverVisibility] = useState({});

  const handleVisibleChange = (key, visible) => {
    setPopoverVisibility({ ...popoverVisibility, [key]: visible });
  };

  const openModal = () => {
    dispatch(openActionModal());
  };

  const renderStatus = (status) => {
    const statusClassName =
      status === "Активный" ? "status__span-active" : "status__span-inactive";
    return <span className={`status__span ${statusClassName}`}>{status}</span>;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Start date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => renderStatus(record.status),
    },
    {
      title: "Action",
      render: (text, record, index) => (
        <Popover
          content={
            <ActionsPopUp
              itemId={record.key}
              onClose={() => handleVisibleChange(index, false)}
            />
          }
          trigger="click"
          placement="left"
          open={popoverVisibility[index]}
          onOpenChange={(visible) => handleVisibleChange(index, visible)}
        >
          <Button
            icon={
              <BsThreeDots style={{ color: "#4094F7", fontSize: "20px" }} />
            }
          />
        </Popover>
      ),
      key: "button",
    },
  ];

  return (
    <div
      className="stock__main"
      style={{
        marginLeft:
          window.location.pathname.startsWith("/main/marketing") &&
          marketingSidebar
            ? 260
            : 60,
      }}
    >
      <Table dataSource={stocksArray} columns={columns} />
    </div>
  );
}
