import MyDiv3 from "./MyDiv3"

export default function MyDiv2({n, setN}) {
  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-700 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-start items-center">
      <div className="w-full text-left mb-10">
        MyDiv2
      </div>
      {/* 프롭스를 사용하지 않고 MyDiv3로 그대로 전달 */}
      <MyDiv3 n={n} setN={setN}/>
    </div>
  )
}
