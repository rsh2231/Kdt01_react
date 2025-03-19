import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
// fetch된 전체 데이터
const [tdata, setTdata] = useState();

// 대분류 데이터
const [c1, setC1] = useState();
const [selc1, setSelC1] = useState();

// 사고유형 데이터
const [c2, setC2] = useState();
const [selc2, setSelC2] = useState();

// 사고정보 데이터
const [info, setInfo] = useState();

// 도로교통공단 데이터 가져오기
const getFetchdata = async() => { 
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();
  
  console.log("data", data)
}

// 컴포넌트가 렌더링 될 때 fetch 실행
useEffect(() => {
  getFetchdata();
}, []) // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행

useEffect(() => {
  if(tdata.length == 0) return; // tdata 배열이 비어있으면 이후 코드 실행 중단

  // 대분류 추출하기
let tm = tdata.map(item => item["사고유형대분류"]);
// 중복제거
tm = [...new Set[tm]];

setC1(tm)
}, [tdata]) // tdata가 변화하면 실행



  return (
    <div>
      <TrafficNav title={"대분류"} ct={c1}/>
    </div>
  )
}
