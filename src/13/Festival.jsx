import TailSelect from "../UI/TailSelect";
import TailCard from "../UI/TailCard";
import { useState, useEffect, useRef } from "react";

export default function Festival() {
  // 초기 데이터 설정
  const [tdata, setTdata] = useState([]);
  const [gugun, setGugun] = useState([]);
  const [selGugun, setSelGugun] = useState("");

  // select에 ref로 접근
  const selectRef = useRef(null);

  // 부산축제 정보 데이터 가져오기
  const getFetchData = async () => {
    try {
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apikey}&pageNo=1&numOfRows=100&resultType=json`;

      const resp = await fetch(url);
      const data = await resp.json();

      let tm = data.getFestivalKr?.item || [];

      console.log("tm", tm);
      setTdata(tm);
    } catch (error) {
      console.log("데이터 가져오기 오류", error);
    }
  };

  // 컴포넌트가 마운트 될 때 fetch 실행
  useEffect(() => {
    getFetchData();
  }, []);

  // 구군 데이터 추출
  useEffect(() => {
    if (tdata.length > 0) {
      let tm = tdata.map((item) => item.GUGUN_NM);
      // 중복 제거
      tm = [...new Set(tm)].sort();
      setGugun(tm);
    }
    // 전체 데이터가 변경될 때 실행
  }, [tdata]);

  // selectRef를 이용해 선택된 값 가져오기
  const handleChange = () => {
    setSelGugun(selectRef.current.value);
  };

  // 선택된 gugun에 따라 데이터 필터링
  const filteredData = !selGugun
    ? tdata
    : tdata.filter((item) => item.GUGUN_NM === selGugun);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* 구군 선택 드롭다운 */}
        <div className="mb-8">
          <TailSelect
            id="Sel1"
            selectRef={selectRef}
            gugun={gugun}
            handleChange={handleChange}
            className="rounded-md shadow-lg bg-white border border-gray-300 text-lg p-3 w-full md:w-1/3 mx-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* 축제 카드 목록 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => {
            let places = item.PLACE
              ? item.PLACE.split(",").map((kw) => kw.trim())
              : [];

            return (
              <TailCard
                key={item.UC_SEQ}
                title={item.MAIN_TITLE.split('(')[0]}
                subtitle={item.TITLE}
                imgurl={item.MAIN_IMG_THUMB}
                kws={places}
                className="transition transform hover:scale-105 hover:shadow-xl rounded-lg bg-white p-4"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
