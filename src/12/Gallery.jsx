import TailCard from "../UI/TailCard";
import { useEffect, useState, useRef } from "react";
import { FcLandscape } from "react-icons/fc";
import TailButton from "../UI/TailButton";

export default function Gallery() {
  const [tdata, setTdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const inputRef = useRef();

  const getFetchData = async (keyword = "") => {
    setLoading(true);
    // 기존 오류 초기화
 
    try {
      const apikey = import.meta.env.VITE_APP_API_KEY;
      const encodedkeyword = encodeURI(keyword);

      let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodedkeyword}&_type=json`;

      const resp = await fetch(url);
      if(!resp.ok) throw new Error("데이터를 불러오지 못했습니다.");

      const data = await resp.json();
      console.log("url", url);
      setTdata(data.response.body.items.item);
    } catch (error) {
      console.log("데이터 로딩 중 오류 발생: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchData();
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      alert("키워드를 입력해주세요.");
      return;
    }
    getFetchData(inputRef.current.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setTdata([]);
    inputRef.current.focus();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold animate-bounce text-gray-700">
          로딩 중... 잠시만 기다려주세요
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
          한국관광공사_관광사진 정보 <FcLandscape />
        </h1>
      </div>

      <form className="flex justify-center items-center gap-4 mb-8"
            onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="border border-gray-300 rounded-xl px-4 py-2 w-80 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          type="text"
          placeholder="검색어를 입력하세요..."
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        />
        <TailButton caption="확인" color="blue" onClick={handleSearch} />
        <TailButton caption="취소" color="blue" onClick={handleReset} />
      </form>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {tdata.map((item) => {
          let keywords = item.galSearchKeyword
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
