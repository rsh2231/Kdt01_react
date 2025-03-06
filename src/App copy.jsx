import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CiCoffeeCup } from "react-icons/ci";

function App() {
  return (
    <div className="w-full h-full bg-cyan-50">
      <div></div>
      <div className="w-full flex justify-center items-center p-10">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-bold text-4xl">Vite + React</h1>
      <div className="card">
        <p className="font-black">부산대학교 KDT 1기 류상현</p>
      </div>
      <p className="text-amber-950 flex justify-center items-center text-8xl">
        <CiCoffeeCup />
      </p>
    </div>
  );
}

export default App;
