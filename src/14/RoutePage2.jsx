import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
  // 현재 URL에 대한 위치 정보를 반환
  const loc = useLocation();
  console.log("loc pathname=", loc.pathname);

  // searchParams.get('key') : 특정 쿼리 파라미터 값
  const [sParams] = useSearchParams();
  console.log("sParams =" , sParams);

  // const queryList = [...sParams] ;
  // console.log("queryList=" , queryList)

  // let item1 = queryList[0][1];
  // let item2 = queryList[1][1];

  let item1 = sParams.get('item1');
  let item2 = sParams.get('item2');

  return (
  <div className="text-2xl font-bold">
      { !item1 ? "page2 메뉴가 선택되었습니다." : `${item1}은/는 ${item2} 입니다.`}
  </div>
  );
}
