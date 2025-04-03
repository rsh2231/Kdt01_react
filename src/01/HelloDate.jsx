import { useState, useEffect } from "react";

function HelloDate() {
  const [current, setCurrent] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(new Date());
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, []);

  const tStyle = {
    backgroundColor: "aliceblue",
    padding: "5px",
    fontSize: "large",
  };

  return (
    <div className="h-20 justify-center items-center text-2xl text-center m-10">
      <span style={{ color: "blue", fontWeight: "bolder" }}>
      현재시각 : {current.toLocaleTimeString()}
      </span>
    </div>
  );
}

export default HelloDate;
