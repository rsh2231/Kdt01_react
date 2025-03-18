import { useEffect, useState } from "react";
import TailButton from "../UI/TailButton";

export default function MyClockTime() {
  //usetate currentTime 변수 상태 변화
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    //setInterval(callback, delay, ... args)
    // callback: 반복적으로 실행할 함수.
    // delay: 실행 간격(밀리초 단위, 1000ms = 1초).
    // ...args: (선택) callback 함수에 전달할 추가 인수.
    let tm = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(tm);
    };
  }, []); // 빈 배열은 컴포넌트가 렌더링될 때 한번 실행

  return (
    <div
      className="w-full p-5 text-lime-900
                    text-center font-bold
                    text-2xl"
    >
      <p>
      현재시각 : {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
}
