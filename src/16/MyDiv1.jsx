import MyDiv2 from "./MyDiv2"
import { useState, useEffect } from "react";

// 정보는 부모에서 자식으로 흐른다!!
export default function MyDiv1() {
const [n, setN] = useState(0);
const [n2, setN2] = useState(0);

// n이 바뀌면 n2가 자동으로 변경
useEffect(() => {
  setN2(n * 2) ;
}, [n]);

  return (
    <div className="w-8/10 h-8/10  
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10">
        n = {n} , n2 = {n2} 
      </div>
      {/* 프롭스 전달 */}
      <MyDiv2 n={n} setN={setN}/>
    </div>
  )
}
