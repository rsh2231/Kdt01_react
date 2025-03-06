import MyDiv2 from "./MyDiv2"
export default function MyDiv1() {
  let d1 = "Div1";
  let d2 = "Div2";
  let d3 = "Div3";

  return (
    <div className="w-8/10 h-8/10 flex-col flex justify-center items-center bg-lime-900 text-white p-10 text-2xl font-bold " >
       <div className="w-full text-left font-bold mb-10">
        {d1}
        </div>
        
    </div>
  )
}
