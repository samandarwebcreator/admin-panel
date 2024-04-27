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
      <Tabs className="tabs__main">
        <TabPane tab="Tab 1" key="1">
          <div>
            <Table
              rowSelection={rowSelection}
              columns={columnsForOrder}
              dataSource={orders}
            />
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default OrderMain;
