import TailSelect from "../UI/TailSelect"
import TailButton from "../UI/TailButton"
import getxy from "./getxy.json"

import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Fcst() {
    // form 값에 접근
    const refDt = useRef();
    const refSi = useRef();
    const navigate = useNavigate();

    // 시도 데이터 추출
    let opsSi = getxy.map(item => item["1단계"]);
    opsSi = ["---시도 선택---", ...opsSi];

    const handleClick = (gubun) => {
        // "---시도 선택---" 상태에서 버튼을 누르면 alert
        if(refSi.current.value == "---시도 선택---") {
            alert("시도를 선택해 주세요.");
            return;
        }
        const tm = getxy.filter(item => item["1단계"] == refSi.current.value)[0];
        const x = tm["격자 X"];
        const y = tm["격자 Y"];
        console.log(tm);
        console.log(refDt.current.value, refSi.current.value, gubun, x, y);
        navigate(`/fcstlist?dt=${refDt.current.value}&si=${refSi.current.value}&gubun=${gubun}&x=${x}&y=${y}`);
    }

    const handleChange = () => {
        console.log(refSi.current.value);
    }


    // 처음 렌더링 되었을 때 오늘 날짜로 설정
    useEffect(() => {
        refDt.current.value = new Date().toISOString().split('T')[0];
    }, [])

  return (
    <div>
        <h1 className="w-10/12 text-2xl font-bold text-center mb-10">일기예보 선택</h1>
        <form onSubmit={(e) => e.preventDefault()}
            className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input type="date"
                ref={refDt}
                className="bg-gray-50 border border-gray-300
                text-gray-900 text-lg rounded-lg  text-center
                focus:ring-blue-500 focus:border-blue-500 block w-full p-1"/>

            <TailSelect 
                id='selSi'
                refSel={refSi}
                ops={opsSi}
                handleChange={handleChange} />

            <TailButton  
                caption="초단기 예보" 
                color="blue"
                onClick={() => handleClick("초단기예보")}/>

            <TailButton  
                caption="단기 예보" 
                color="blue"
                onClick={() => handleClick("단기예보")}/>                 
        </form>
    </div>
  )
}
