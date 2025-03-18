import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function MyRef() {
  // ref 변수 선언
  const refInput1 = useRef();
  const refInput2 = useRef();
  const refInputResult = useRef();
  const refSelect = useRef();

  //계산
  const handleCal = (e) => {
    // 버튼 클릭시 폼 제출로 인한 페이지 리로드 방지
    e.preventDefault();

    // 입력 공백 체크
    if(refInput1.current.value ==='') {
      alert("첫번째 값을 입력하세요.");
      refInput1.current.focus();
      return;
    }

    if(refInput2.current.value ==='') {
      alert("두번째 값을 입력하세요.");
      refInput2.current.focus();
      return;
    }

    // 다른 로직 처리
    const value1 = parseFloat(refInput1.current.value);
    const value2 = parseFloat(refInput2.current.value);
    const cal = refSelect.current.value;

    // 결과값 변수
    let result = 0;

    switch (cal) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value1 / value2;
        break;
    }
    // 결과값 출력
    refInputResult.current.value = result;
  };

  // 입력 초기화
  const handleInit = () => {
    refInput1.current.value ='';
    refInput2.current.value ='';
    refInputResult.current.value ='';
    refSelect.current.value = "+";
  }
  // 컴포넌트 생성시 입력상자에 포커스
  useEffect(() => {
    refInput1.current.focus();
  }, []);

  return (
    <div className="w-full flex justify-center items-start mt-10">
      <div className="w-10/12 flex justify-center items-center bg-amber-50 p-5">
        <form className="w-3/5 grid grid-cols-5 gap-4">
          <input
            ref={refInput1}
            onFocus={handleInit}
            type="number"
            id="txt1"
            className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          />
          <select
            ref={refSelect}
            id="sel"
            className="bg-gray-50 border border-gray-300
                       text-gray-900 text-lg rounded-lg text-center
                       focus:ring-blue-500 focus:border-blue-500 
                       block w-full p-2"
          >
            <option value="+" defaultValue>
              +
            </option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">/</option>
          </select>
          <input
            ref={refInput2}
            type="number"
            id="txt2"
            className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          />
          <TailButton caption="=" color="blue" onClick={handleCal} />
          <input
            ref={refInputResult}
            type="number"
            id="txt2"
            readOnly
            className="bg-gray-100 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          />
        </form>
      </div>
    </div>
  );
}
