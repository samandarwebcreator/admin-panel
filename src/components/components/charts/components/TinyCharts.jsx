import React from "react";
import { tinyTopData } from "../../../../utils/data";

export default function TinyCharts() {
  return (
    <div className="tiny__chart">
      {tinyTopData.map((item) => {
        const { id, title, price, profit, icon, chart } = item;
        return (
          <div key={id} className="tiny__chart-inner">
            <div className="tiny__chart-wrapper">
              <div>
                <p className="tiny__chart-title">{title}</p>
                <div className="tiny__chart-header">
                  <h3 className="tiny__chart-price">{price}</h3>
                  <div className="tiny__chart-profit">
                    <p>{profit} %</p>
                    <span>{icon}</span>
                  </div>
                </div>
              </div>
              <div className="tiny__chart-content">{chart}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
