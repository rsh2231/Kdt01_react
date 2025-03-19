import TailCard from "../UI/TailCard";
import { useState, useEffect,useRef } from "react";
import TailButton from "../UI/TailButton";
import { FcLandscape } from "react-icons/fc";

export default function Gallery() {
  // 초기 데이터 설정
  const [tdata, setTdata] = useState([]);

  // 관광공사 데이터 가져오기
  const getFetchdata = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apiKey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ed%83%9c%ec%a2%85%eb%8c%80&_type=json`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
    setTdata(data.response.body.items.item);
  };

  // 컴포넌트가 마운트 될 대 처음 fetch
  useEffect(() => {
    getFetchdata();
  }, []);

  return (
    <div>
        <span className="flex m-5 text-3xl font-bold justify-center items-center"> 
            <h1 >한국관광공사_관광사진 정보</h1>
            <FcLandscape/>
        </span>
      <form className="flex m-5 justify-center items-center">
        <input
          className="w-1/2 h-10 border rounded-lg text-center"
          type="text"
        />
        <TailButton caption="확인" color="blue" onClick={""} />
        <TailButton caption="취소" color="blue" onClick={""} />
      </form>
        <div className="m-auto w-10/12 place-content-center place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tdata.map((item) => {
            const keywords = item.galSearchKeyword
              .split(",")
              .map((kw) => kw.trim());

            return (
              <TailCard
                key={item.galContentId}
                title={item.galTitle}
                subtitle={item.galPhotographyLocation}
                imgurl={item.galWebImageUrl}
                kws={keywords}
              />
            );
          })}
        </div>
      </div>
  );
}
