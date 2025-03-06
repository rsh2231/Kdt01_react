import MyDiv3 from "./MyDiv3"
export default function MyDiv2({md1, md2, md3}) {
  return (
    <div className="w-8/10 h-8/10 flex-col flex justify-center items-center bg-lime-700 text-white p-10 text-2xl font-bold ">
        <div className="w-full text-left mb-10">
        {`${md1} > ${md2}`}
        </div>
        <MyDiv3 mf1={md1} mf2={md2} mf3={md3} />     
    </div>
  )
}
