import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import TailCard from "../UI/TailCard";

export default function Festival() {
  // 초기 데이터 설정
  const [tdata, setTdata] = useState([]);
  const [guguns, setGuguns] = useState([]);
  const [tags, setTags] = useState([]);

  // useRef로 select 접근
  const selRef = useRef();

  // 부산 축제 정보 가져오기
  const getFetchData = async () => {
    try {
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apikey}&pageNo=1&numOfRows=100&resultType=json`;

      const resp = await fetch(url);
      const data = await resp.json();

      let tm = data.getFestivalKr.item;
      setTdata(tm);
    } catch (error) {
      console.log("데이터 로딩중 오류 발생", error);
    }
  };

  // 컴포넌트가 마운트 될 때 fetch 실행
  useEffect(() => {
    getFetchData();
  }, []);

  // gugun 추출하기
  useEffect(() => {
    let tm = tdata.map((item) => item.GUGUN_NM);
    tm = [...new Set(tm)].sort();

    console.log(tm);
    setGuguns(tm);
    // tdata가 변화하면 실행
  }, [tdata]);

  const handlechang = () => {
    let keywords = tdata.filter(item => item.PLACE.split(",")).map(kw => kw.trim());
    let tm = tdata
      .filter((item) => item.GUGUN_NM == selRef)
      .map((item) => (
        <TailCard
          title={item.MAIN_TITLE}
          subtitle={item.TITLE}
          imgurl={item.MAIN_IMG_THUMB}
          kws={keywords}
        />
      ));
      setTags(tm);
  };

  return (
    <div>
      <div>
        <TailSelect 
        id="Sel1" 
        guguns={guguns}
        selRef={selRef} 
        handleChange={handlechang} />
      </div>
      <div>
        {tags}
      </div>
    </div>
  );
}
