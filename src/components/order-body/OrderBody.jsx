import React, { useState } from "react";
import { Table, Tabs } from "antd";
import "./OrderBody.scss";
import { orders, columnsForOrder } from "../../utils/data";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const OrderMain = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const marketingSidebar = useSelector(
    (state) => state.general.marketingSidebar
  );

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: false,
    }),
  };

  const items = [
    {
      key: "1",
      label: "Курьер в пути",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columnsForOrder}
          dataSource={[]}
        />
      ),
    },
    {
      key: "2",
      label: "Новый",
      children: (
        <Table
          rowSelection={rowSelection}
          columns={columnsForOrder}
          dataSource={orders}
        />
      ),
    },
    {
      key: "3",
      label: "Оператор принял",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div
      className="order__main"
      style={
        window.location.pathname.startsWith("/main/marketing") &&
        marketingSidebar
          ? { marginLeft: 260 }
          : { marginLeft: 60 }
      }
    >
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default OrderMain;
