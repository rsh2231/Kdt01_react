import { Link } from "react-router-dom";

export default function RouteNav() {
  return (
    <div className="mt-5 h-20 flex justify-center items-center bg-amber-200">
      <ul className="flex w-full h-16 justify-center items-center">
        <li className="border rounded-lg p-2 mx-2 bg-blue-600 hover:bg-gray-600 text-white font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="border rounded-lg p-2 mx-2 bg-blue-600  hover:bg-gray-600 text-white font-bold">
          <Link to="/p1/menu/menu">Page1</Link>
        </li>
        <li className="border rounded-lg p-2 mx- bg-blue-600 hover:bg-gray-600 text-white font-bold">
          <Link to="/p2">Page2</Link>
        </li>
      </ul>
    </div>
  );
}
