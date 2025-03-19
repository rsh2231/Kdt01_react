import { useState, useEffect, useRef } from 'react';
import TailCard from '../UI/TailCard';
import { FcOldTimeCamera } from "react-icons/fc";
import TailButton from '../UI/TailButton';

export default function Gallery() {
    const [tdata, setTdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const getFetchdata = async (keyword = "") => {
        setLoading(true);
        try {
            const apikey = import.meta.env.VITE_APP_API_KEY;
            const encodedKeyword = encodeURI(keyword);
            let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodedKeyword}&_type=json`;

            const resp = await fetch(url);
            const data = await resp.json();
            const items = data.response?.body?.items?.item || [];
            setTdata(items);
        } catch (error) {
            console.error("데이터 로딩 중 오류 발생:", error);
            setTdata([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFetchdata();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = inputRef.current.value;
        getFetchdata(keyword);
    };

    const handleReset = (e) => {
        e.preventDefault();
        inputRef.current.value = "";
        getFetchdata();
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold animate-pulse">로딩 중... 잠시만 기다려주세요</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            {/* 타이틀 영역 */}
            <div className="flex items-center space-x-3 mb-6 text-4xl font-extrabold text-gray-800">
                <h1>한국관광공사_관광사진 정보</h1>
                <FcOldTimeCamera className="text-5xl" />
            </div>

            {/* 검색 폼 */}
            <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-2xl">
                <form className="flex flex-col items-center space-y-4">
                    <input
                        ref={inputRef}
                        className="w-full h-12 text-center border border-gray-300 rounded-xl shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-300"
                        type="text"
                        placeholder="검색어를 입력하세요"
                    />
                    <div className="flex space-x-3">
                        <TailButton
                            caption="확인"
                            color="blue"
                            className="w-32 h-10 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 hover:bg-opacity-80 transition"
                            onClick={handleSearch}
                        />
                        <TailButton
                            caption="취소"
                            color="blue"
                            className="w-32 h-10 bg-gray-400 text-white rounded-xl shadow-md hover:bg-gray-500 hover:bg-opacity-80 transition"
                            onClick={handleReset}
                        />
                    </div>
                </form>
            </div>

            {/* 결과 목록 */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tdata.map((item) => {
                    const keywords = item.galSearchKeyword
                        ? item.galSearchKeyword.split(",").map((kw) => kw.trim())
                        : [];

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
