import MyEffect from "./08/MyEffect";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Hello from "./01/Hello"
import HelloDate from "./01/HelloDate"
import { IoHome } from "react-icons/io5";
import MyClock from "./02/MyClock";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from "./05/Lotto";
//import FoodMain from './06/FoodMain';
// import MyToggle from './07/MyToggle'
import BoxOffice from "./09/BoxOffice";
import Traffic from "./10/Traffic";
// import MyRef from './11/MyRef'
// import Gallery from './12/Gallery'
import Festival from './13/Festival'
//import RouteMain from "./14/RouteMain";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Fcst from "./15/Fcst";
import FcstList from "./15/FcstList";
import MyDiv1 from "./18/MyDiv1";

function App() {
  return (
    <BrowserRouter>
      <div
        className="w-full xl:w-8/10 h-screen mx-auto 
                    flex flex-col"
      >
        <header
          className="w-full h-20 bg-amber-50
                         px-10
                         flex justify-between items-center"
        >
          <div className="text-4xl font-bold text-amber-700 flex">
            PNU KDT10
            <div className="flex text-sm items-center mx-5">
              <img src={reactLogo} alt="react" className="w-8" /> +
              <img src={viteLogo} alt="vite" className="w-8" />
            </div>
            <div className="flex justify-center items-center">
              <ul className="flex text-lg">
                <li className="border rounded-lg mx-2" ><Link to="/lotto">로또</Link></li>
                <li className="border rounded-lg mx-2"><Link to="/boxoffice">박스오피스</Link></li>
                <li className="border rounded-lg mx-2"><Link to="/festival">부산축제</Link></li>
                <li className="border rounded-lg mx-2"><Link to="/fcst">일기예보</Link></li>
                <li className="border rounded-lg mx-2"><Link to="/mydiv1">전역상태</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-3xl font-bold text-black">
            <Link to="/"><IoHome /></Link> 
          </div>
        </header>

        <main
          className="w-full flex-grow
                      flex flex-col
                      overflow-y-auto"
        >
          <Routes>
            <Route path="/" element={<HelloDate />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/myclock" element={<MyClock />} />
            <Route path="/boxoffice" element={<BoxOffice />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/fcst" element={<Fcst />} />
            <Route path="/fcstlist" element={<FcstList />} />
            <Route path="/mydiv1" element={<MyDiv1 />} />
          </Routes>
        
        </main>

        <footer
          className="w-full min-h-20 bg-amber-900
                         px-10  text-amber-50 font-bold text-sm
                         flex justify-center items-center"
        >
          [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
