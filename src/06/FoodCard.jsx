import busan from "../assets/busan.png"
import bank from "../assets/bank.png"
import market from "../assets/market.png"
import { useState } from "react"

export default function FoodCard({obj}) {

    const [isShow, setIsShow] = useState(false) // isShow false로 설정

    const handleShow = () => {  // isShow를 true <-> false로 변경하는 함수
        setIsShow(!isShow);
    }

  return (
    <div className="flex justify-center items-center w-11/12 h-full border border-gray-500">
        <div className="w-1/4 flex justify-center items-center">
            <img src={obj["구분"] == "광역지원센터" ? busan : obj["구분"] == "기초푸드뱅크" ? bank : market} className="w-40"/>
        </div>
        <div className="w-3/4 h-full">
       <h1 className="h-1/4 text-2xl font-bold">{obj["사업장명"]}</h1>
       <h2 className="h-1/4 text-xl text-gray-600 font-bold">{obj["운영주체명"]}</h2>
       <p>{obj["사업장 소재지"]}</p>
       <p className="h-1/4 flex items-center bg-blue-600 text-white cursor-pointer" onClick={handleShow}>{isShow && `연락처 : ${obj["연락처(대표번호)"]} 팩스번호 : ${obj["팩스번호"]}`}</p>
       </div>
    </div>
  )
}
