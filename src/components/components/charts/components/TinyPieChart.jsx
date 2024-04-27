import { ConfigProvider, Progress } from "antd";
import React, { useState, useEffect } from "react";

export default function RoundedPieChart() {
  const [animationPercent, setAnimationPercent] = useState(0);
  const [secondAnimation, setSecondAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPercent((prev) => (prev < 75 ? prev + 1 : prev));
      setSecondAnimation((prev) => (prev < 40 ? prev + 1 : prev));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <div className="progress__main-box">
        <div className="progress__box">
          <Progress
            type="circle"
            format={(percent) => (
              <span
                className="green-progress"
                style={{ color: "#1AC19D" }}
              >{`${percent} %`}</span>
            )}
            trailColor="#1AC19D1A"
            strokeColor="#1AC19D"
            strokeWidth={14}
            strokeLinecap="round"
            strokeLinejoin="round"
            percent={animationPercent}
          />
          <div>
            <p className="order__rate">Top order</p>
            <h3 className=" charts__outer-percent green__percent">
              {animationPercent} %
            </h3>
          </div>
        </div>
        <div className="progress__box">
          <Progress
            type="circle"
            format={(percent) => (
              <span
                className="purple-progress"
                style={{ color: "#1AC19D" }}
              >{`${percent} %`}</span>
            )}
            trailColor="#A23FEE1A"
            strokeColor="#A23FEE"
            strokeWidth={14}
            strokeLinecap="round"
            strokeLinejoin="round"
            percent={secondAnimation}
          />
          <div>
            <p className="order__rate">Avarage Order</p>
            <h3 className=" charts__outer-percent purple__percent">
              {secondAnimation} %
            </h3>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
