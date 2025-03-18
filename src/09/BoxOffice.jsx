//table참고 : https://flowbite.com/docs/components/tables/
import { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function BoxOffice() {

  //어제날짜가져오기
  const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 1);
    //년도
    let year = dt.getFullYear();
    //월
    let month = String(dt.getMonth() + 1).padStart(2, "0");
    // month = month < 10 ? '0' + month : month ;
    //일
    let day = String(dt.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  };

    //화면에 랜더링 될 상태 변수
    const [tags, setTags] = useState([]);
    const [info, setInfo] = useState();
    const [dt, setDt] = useState();
    const refDt = useRef();
  
  //일일 박스 오피스 정보 가져오기
  const getFetchData = async () => {
    const mvApiKey = import.meta.env.VITE_APP_MV_KEY;
    let tmdt = dt.replaceAll("-", "");

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${mvApiKey}&targetDt=${tmdt}`;

    //console.log(url)
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      let boxList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxList);

      setTags(boxList); // tags에 boxList 입력
    } catch (error) {
      console.error("API 호출중 오류 발생:", error);
    }
  };

  // 컴포넌트가 마운트 될때
  useEffect(() => {
    setDt(getYesterday());
    refDt.current.max = getYesterday();
  }, []);

  // dt가 변경될 때마다 fetchData 호출
  useEffect(() => {
    if(!dt) return;
    refDt.current.value = dt;
    getFetchData();
  }, [dt])

  // 영화정보
  const handleShow = (item) => {
    setInfo(  // state 변수 info에 item 대입
      `[${item.rankOldAndNew} ${item.movieNm}] 상영한 스크린수 : ${parseInt(item.scrnCnt).toLocaleString()}, 상영횟수 : ${parseInt(item.showCnt).toLocaleString()}`)
    console.log(item)
  }

  const handleChange = (e) => {
    setDt(e.target.value);
  }

  return (
    <div>
      <div className="w-11/12">
        <div className="w-full text-sm text-right - my-2">
          <span className="inline-flex mr-2 text-md font-bold">
            날짜선택
          </span>
          <input type="date" ref={refDt}
                className="p-2 border"
                onChange={handleChange}/>
        </div>
      </div>
      <table className="w-full">
        <thead className="font-bold border-b border-b-gray-900">
          <tr>
            <td className="px-6 py-3">순위</td>
            <th className="px-6 py-3">영화명</th>
            <th className="px-6 py-3">매출액</th>
            <th className="px-6 py-3">누적 매출액</th>
            <th className="px-6 py-3">관객수</th>            
            <th className="px-6 py-3">누적 관객수</th>
            <th className="px-6 py-3">증감율</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((item) => (
            <tr onClick={()=>(handleShow(item))}
              key={item.movieCd}
              className="border-b border-gray-300 dark:hover:bg-gray-200 text-center hover:cursor-pointer">
              <td className="w-4 p-4">{item.rank}</td>
              <td className="px-6 py-4">{item.movieNm}</td>
              <td className="px-6 py-4">{parseInt(item.salesAmt).toLocaleString()}원</td>
              <td className="px-6 py-4">{parseInt(item.salesAcc).toLocaleString()}원</td>
              <td className="px-6 py-4">{parseInt(item.audiAcc).toLocaleString()}명</td>              
              <td className="px-6 py-4">{parseInt(item.audiCnt).toLocaleString()}명</td>
              <td className="px-6 py-4">{Number(item.audiChange)}{Number(item.audiChange) > 0 ? <FaArrowUp className="text-red-600"/> : <FaArrowDown className="text-blue-600"/>}%</td>
            </tr>            
          ))}
       </tbody>
       <tfoot className="text-center bg-gray-700 text-white">
        <tr >
          <td colSpan="7">
          {info}
          </td>
        </tr>
       </tfoot>
      </table>
    </div>
  );
}
