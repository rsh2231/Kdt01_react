import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import RouteNav from "./RouteNav";


export default function RouteMain() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <RouteNav />
        <Routes>
          {/* path로 경로 정의 */}
          <Route path="/" element={<RouteHome />} />
          {/* path로 경로 정의할 때 데이터 추가 */}
          <Route path="/p1/:item1/:item2" element={<RoutePage1 />} />
          <Route path="/p2" element={<RoutePage2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
