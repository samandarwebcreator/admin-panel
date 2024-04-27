import React, { useState } from "react";
import { Table, Button, Popover } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ActionsPopUp from "../../components/action-popup/ActionsPopUp";
import { comments } from "../../../utils/data";

import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

export default function Review() {
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

  const renderType = (type) => {
    if (type === "good") {
      return <BiSolidLike style={{ fontSize: "18px", color: "#38D9B9" }} />;
    } else {
      return <BiSolidDislike style={{ fontSize: "18px", color: "#F76659" }} />;
    }
  };

  const columns = [
    {
      title: "Название",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Тип",
      dataIndex: "type",
      key: "type",
      render: (text, record) => renderType(record.type),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => renderStatus(status),
    },
    {
      title: "Action",
      render: (record, index) => (
        <Popover
          content={
            <ActionsPopUp
              itemId={record.key}
              onClose={() => handleVisibleChange(record.key, false)}
            />
          }
          trigger="click"
          placement="left"
          open={popoverVisibility[record.key]}
          onOpenChange={(visible) => handleVisibleChange(record.key, visible)}
        >
          <Button
            icon={
              <BsThreeDots style={{ color: "#4094F7", fontSize: "20px" }} />
            }
          />
        </Popover>
      ),
      key: "action",
    },
  ];

  return (
    <div
      // className="stock__main"
      style={{
        marginLeft:
          window.location.pathname.startsWith("/main/marketing") &&
          marketingSidebar
            ? 260
            : 60,
      }}
    >
      <Table dataSource={comments} columns={columns} />
    </div>
  );
}
