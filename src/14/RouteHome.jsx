import { Link,useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton";

export default function RouteHome() {
  // 사용자가 버튼을 클릭하면 특정 경로로 이동하도록 만들 수 있음
  const navigate = useNavigate();

  return (
    <div>
      <ul className="flex flex-col w-full h-20 justify-center items-center bg">
      <li className="border border-blue-500 bg-white rounded-lg shadow-md w-40 p-3 mt-40 text-center text-lg font-semibold hover:bg-blue-100 transition-all"><Link to="/p1/🍎/사과">사과 🍎</Link></li>
      <li className="border border-blue-500 bg-white rounded-lg shadow-md w-40 p-3 m-2 text-center text-lg font-semibold hover:bg-blue-100 transition-all"><Link to="/p1/🍌/바나나">바나나 🍌</Link></li>
      <li className="border border-blue-500 bg-white rounded-lg shadow-md w-40 p-3 m-2 text-center text-lg font-semibold hover:bg-blue-100 transition-all"><Link to="p1/🍓/딸기">딸기 🍓</Link></li>
      </ul>
      <div className="grid grid-cols-1 gap-2 w-45 mt-40 m-auto justify-center items-center">
        <TailButton caption="사과 🍎" color="blue" onClick={() => {navigate("/p2?item1=🍎&item2=사과")}} />
        <TailButton caption="바나나 🍌" color="blue" onClick={() => {navigate("/p2?item1=🍌&item2=바나나")}} />
        <TailButton caption="딸기 🍓" color="blue" onClick={() => {navigate("/p2?item1=🍓&item2=딸기")}} />
      </div>
    </div>
  );
}
