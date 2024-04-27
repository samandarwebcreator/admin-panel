import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import "./StatisticsDashboard.scss";

export default function StatisticsDashboard() {
  const data = [
    {
      id: 1,
      number: "24",
      desc: "Филиалы",
      icon: <IoStorefrontOutline />,
    },
    {
      id: 2,
      number: "110,823",
      desc: "Клиенты",
      icon: <BsFillPeopleFill />,
    },
    {
      id: 3,
      number: "110,823",
      desc: "Подписчики",
      icon: <IoMdNotifications />,
    },
    {
      id: 4,
      number: "75",
      desc: "Курьеры",
      icon: <IoCarSport />,
    },
  ];

  return (
    <div className="statistics__main">
      {data.map((item) => {
        const { id, number, desc, icon } = item;

        return (
          <div key={id} className="statsitics__card card1">
            <div>
              <h3>{number}</h3>
              <p>{desc}</p>
            </div>
            <div>
              <span>{icon}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
