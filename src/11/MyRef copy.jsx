import React, { useRef } from "react";
import TailButton from "../UI/TailButton";
import { useState, useEffect } from "react";

export default function MyRef() {
//컴포넌트 변수
let cnt = 0;
//State 변수
const [stCnt, setStCnt] = useState(0);
//Ref 변수
const refCnt = useRef(0) ;

//컴포넌트 변수 증가
const handleCnt = () => {
cnt = cnt + 1;
console.log("cnt = ", cnt)
}

//State 변수 증가
const handleStCnt = () => {
setStCnt(stCnt + 1);
console.log("StCnt = ", stCnt)
}
//Ref 변수 증가
const handleRefCnt = () => {
refCnt.current = refCnt.current + 1;
//console.log("RefCnt = ", refCnt)
}

// State 변수가 변경되었을 때
useEffect(() => {
//console.log("StCnt = ", stCnt)
}, [stCnt])


  return (
    <div className="w-full flex justify-center items-center fon">
      <div className="w-10/12 grid grid-cols-3 gap-4 ">
        <div className="flex justify-center font-bold text-lg">
            컴포넌트 변수 : {cnt}
            </div>
        <div className="flex justify-center font-bold text-lg">
            State 변수 {stCnt}</div>
        <div className="flex justify-center font-bold text-lg">
            Ref 변수 {refCnt.current}
        </div>
        <TailButton caption="컴포넌트 변수 증가" color="blue" onClick={handleCnt} />
        <TailButton caption="State 변수 증가" color="blue" onClick={handleStCnt} />
        <TailButton caption="Ref 변수 증가" color="blue" onClick={handleRefCnt} />
      </div>
    </div>
  );
}
