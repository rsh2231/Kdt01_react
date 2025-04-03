import { useParams } from "react-router-dom";

export default function RoutePage1() {
  {/* 경로에 있는 데이터 추출 */}
  const { item1, item2 } = useParams();
  return (
    <div className="text-2xl font-bold">
      {item1 === "menu"
        ? "page1 메뉴가 선택되었습니다."
        : `${item1}은/는 ${item2} 입니다.`}
    </div>
  );
}
