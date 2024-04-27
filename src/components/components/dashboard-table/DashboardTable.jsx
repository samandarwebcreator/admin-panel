import React from "react";
import { Table, Tag } from "antd";
import "./DashboardTable.scss";
const columns = [
  {
    title: "Число",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Доставка",
    dataIndex: "delivery",
    key: "deliver",
  },
  {
    title: "Доставка",
    dataIndex: "deliverySecond",
    key: "delivering",
  },
  {
    title: "Самовывоз",
    dataIndex: "pickUp",
    key: "pick up",
  },
  {
    title: "Агрегаторы",
    dataIndex: "centerDeliverer",
    key: "centering deliverers",
  },
];
const dataArray = [
  {
    key: "1",
    date: 7298,
    delivery: 9822,
    deliverySecond: 7474,
    pickUp: 3944,
    centerDeliverer: 8232,
  },
  {
    key: "2",
    date: 1234,
    delivery: 5678,
    deliverySecond: 91011,
    pickUp: 1213,
    centerDeliverer: 1415,
  },
  {
    key: "3",
    date: 9876,
    delivery: 5432,
    deliverySecond: 10987,
    pickUp: 6543,
    centerDeliverer: 21098,
  },
  {
    key: "4",
    date: 2468,
    delivery: 1357,
    deliverySecond: 9753,
    pickUp: 8642,
    centerDeliverer: 7531,
  },
  {
    key: "5",
    date: 3691,
    delivery: 2468,
    deliverySecond: 1357,
    pickUp: 9753,
    centerDeliverer: 8642,
  },
  {
    key: "6",
    date: 1472,
    delivery: 3691,
    deliverySecond: 2468,
    pickUp: 1357,
    centerDeliverer: 9753,
  },
  {
    key: "7",
    date: 2583,
    delivery: 1472,
    deliverySecond: 3691,
    pickUp: 2468,
    centerDeliverer: 1357,
  },
  {
    key: "8",
    date: 3691,
    delivery: 2583,
    deliverySecond: 1472,
    pickUp: 3691,
    centerDeliverer: 2468,
  },
  {
    key: "9",
    date: 9876,
    delivery: 5432,
    deliverySecond: 10987,
    pickUp: 6543,
    centerDeliverer: 21098,
  },
  {
    key: "10",
    date: 2468,
    delivery: 1357,
    deliverySecond: 9753,
    pickUp: 8642,
    centerDeliverer: 7531,
  },
  {
    key: "11",
    date: 3691,
    delivery: 2468,
    deliverySecond: 1357,
    pickUp: 9753,
    centerDeliverer: 8642,
  },
  {
    key: "12",
    date: 1472,
    delivery: 3691,
    deliverySecond: 2468,
    pickUp: 1357,
    centerDeliverer: 9753,
  },
  {
    key: "13",
    date: 2583,
    delivery: 1472,
    deliverySecond: 3691,
    pickUp: 2468,
    centerDeliverer: 1357,
  },
  {
    key: "14",
    date: 3691,
    delivery: 2583,
    deliverySecond: 1472,
    pickUp: 3691,
    centerDeliverer: 2468,
  },
  {
    key: "15",
    date: 9876,
    delivery: 5432,
    deliverySecond: 10987,
    pickUp: 6543,
    centerDeliverer: 21098,
  },
  {
    key: "16",
    date: 2468,
    delivery: 1357,
    deliverySecond: 9753,
    pickUp: 8642,
    centerDeliverer: 7531,
  },
  {
    key: "17",
    date: 3691,
    delivery: 2468,
    deliverySecond: 1357,
    pickUp: 9753,
    centerDeliverer: 8642,
  },
  {
    key: "18",
    date: 1472,
    delivery: 3691,
    deliverySecond: 2468,
    pickUp: 1357,
    centerDeliverer: 9753,
  },
];

const pagination = {
  pageSize: 6,
};

const DashboardTable = () => (
  <div className="dashboard__table">
    <h3>Общий отчет</h3>
    <Table columns={columns} dataSource={dataArray} pagination={pagination} />
  </div>
);
export default DashboardTable;
