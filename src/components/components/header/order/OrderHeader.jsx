import React from "react";
import { FaTable } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function OrderHeader() {
  return (
    <div>
      <div>
        <h1>Заказы</h1>
        <div>
          <div>
            <span>
              <FaTable />
            </span>
            <p>Таблица</p>
          </div>
          <div>
            <span>
              <FaLocationDot />
            </span>
            <p>Карта</p>
          </div>
        </div>
      </div>
    </div>
  );
}
