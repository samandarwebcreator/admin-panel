import React, { useState } from "react";
import { Table, Button, Popover } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ActionsPopUp from "../../components/action-popup/ActionsPopUp";
import { bannerArray } from "../../../utils/data";

export default function Banner() {
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

  const renderImage = (image) => (
    <img
      src={image}
      alt="Banner"
      style={{ width: "80px", height: "auto", borderRadius: "8px" }}
    />
  );

  const columns = [
    {
      title: "Image",
      dataIndex: "bannerImage",
      key: "bannerImage",
      render: (text, record) => renderImage(record.bannerImage),
    },
    {
      title: "Hазвание на узбекском",
      dataIndex: "uzbTitle",
      key: "uzbTitle",
    },
    {
      title: "Hазвание на русском",
      dataIndex: "rusTitle",
      key: "rusTitle",
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
      className="stock__main"
      style={{
        marginLeft:
          window.location.pathname.startsWith("/main/marketing") &&
          marketingSidebar
            ? 260
            : 60,
      }}
    >
      <Table dataSource={bannerArray} columns={columns} />
    </div>
  );
}
