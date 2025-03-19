import MyEffect from './08/MyEffect'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Hello from "./01/Hello"
// import HelloDate from "./01/HelloDate"
// import { IoHome } from "react-icons/io5";
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
//import FoodMain from './06/FoodMain';
// import MyToggle from './07/MyToggle'
//import BoxOffice from './09/BoxOffice'
//import Traffic from './10/Traffic'
// import MyRef from './11/MyRef'
import Gallery from './12/Gallery'

function App() {
  return (
    <div className="w-full xl:w-8/10 h-screen mx-auto 
                    flex flex-col">
      <header className="w-full h-20 bg-amber-50
                         px-10
                         flex justify-between items-center">

        <div className="text-4xl font-bold text-amber-700 flex">
          PNU KDT10 
          <div className="flex text-sm items-center mx-5">
            <img src={reactLogo} alt="react" className="w-8" /> + 
            <img src={viteLogo} alt="vite" className="w-8" />
          </div>
        </div>
        <div className="text-3xl font-bold text-black">
          {/* <IoHome />          */}
        </div>
      </header>
      <main className="w-full flex-grow
                      flex flex-col
                      overflow-y-auto">
      {/* <MyClock/> */}
      {/* <Lotto /> */}
      {/* <FoodMain /> */}
      {/* <MyToggle /> */}
      {/* <MyEffect/> */}
      {/* <BoxOffice/> */}
      {/* <Traffic /> */}
      {/* <MyRef /> */}
      <Gallery />

      </main>
      <footer className="w-full min-h-20 bg-amber-900
                         px-10  text-amber-50 font-bold text-sm
                         flex justify-center items-center">
         [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정                 
      </footer>
    </div>
  )
}

export default App